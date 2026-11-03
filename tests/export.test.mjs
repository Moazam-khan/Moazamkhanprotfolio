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
