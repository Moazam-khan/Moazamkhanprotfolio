import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, join } from "node:path";

const root = resolve("out");
function htmlFiles(directory) {
  return readdirSync(directory).flatMap((name) => {
    const filename = join(directory, name);
    return statSync(filename).isDirectory()
      ? htmlFiles(filename)
      : name.endsWith(".html")
        ? [filename]
        : [];
  });
}

test("exports matching English and Arabic pages with the correct language and direction", () => {
  const cases = readdirSync(join(root, "work"), { withFileTypes: true }).filter(
    (entry) => entry.isDirectory(),
  );
  assert.ok(cases.length >= 21, "Existing project pages must remain available");
  const routes = [
    "",
    "work",
    "writing",
    "about",
    "Projects",
    "Experience",
    "Education",
    "Contact",
    ...cases.map((entry) => "work/" + entry.name),
  ];
  for (const route of routes) {
    const suffix = route ? route + "/" : "";
    const english = readFileSync(join(root, route, "index.html"), "utf8");
    const arabic = readFileSync(join(root, "ar", route, "index.html"), "utf8");
    assert.match(english, /<html lang="en" dir="ltr"/, route);
    assert.match(arabic, /<html lang="ar" dir="rtl"/, route);
    assert.ok(
      english.includes('href="/ar/' + suffix + '" hrefLang="ar"'),
      route,
    );
    assert.ok(arabic.includes('href="/' + suffix + '" hrefLang="en"'), route);
  }
  assert.ok(existsSync(join(root, "404.html")));
});

test("all exported pages have one main heading and no placeholder contact address", () => {
  for (const filename of htmlFiles(root)) {
    const html = readFileSync(filename, "utf8");
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, filename);
    assert.ok(!html.includes("moazamkhan@example.com"), filename);
    assert.match(html, /<title>[^<]+<\/title>/, filename);
  }
});

test("local assets and internal page links resolve in the static export", () => {
  for (const filename of htmlFiles(root)) {
    const html = readFileSync(filename, "utf8");
    for (const match of html.matchAll(
      /(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
    )) {
      const resource = decodeURIComponent(match[1]);
      const target = join(root, resource);
      assert.ok(
        existsSync(target) || existsSync(join(target, "index.html")),
        `${filename}: ${resource}`,
      );
    }
  }
});

test("writing pages share crawlable Medium links and appear in the production sitemap", () => {
  const pages = ["writing", "ar/writing"];
  const articleLinks = [];
  const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
  for (const route of pages) {
    const html = readFileSync(join(root, route, "index.html"), "utf8");
    const links = Array.from(
      html.matchAll(
        /<a\b[^>]*href="(https:\/\/medium\.com\/@moazamkhan8999\/[^"]+)"[^>]*>/g,
      ),
      (match) => match[1],
    );
    assert.ok(links.length > 0, route + " is missing article links");
    assert.equal(
      new Set(links).size,
      links.length,
      route + " has duplicate links",
    );
    articleLinks.push(links);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (canonical) {
      assert.equal(new URL(canonical).pathname, "/" + route + "/");
      assert.ok(
        sitemap.includes("<loc>" + canonical + "</loc>"),
        route + " is missing from the sitemap",
      );
    }
  }
  assert.deepEqual(articleLinks[0], articleLinks[1]);
});
