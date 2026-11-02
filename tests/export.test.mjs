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

test("exports every public section and 21 project case studies", () => {
  for (const route of [
    "",
    "work",
    "about",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ])
    assert.ok(
      existsSync(join(root, route, "index.html")),
      `Missing ${route || "/"}`,
    );
  const cases = readdirSync(join(root, "work")).filter((name) =>
    statSync(join(root, "work", name)).isDirectory(),
  );
  assert.equal(cases.length, 21);
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
