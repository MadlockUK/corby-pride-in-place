#!/usr/bin/env node
// Fails if any map indicator lacks a plain-English description (the `plain` field in index.html).
const fs = require("fs");
const html = fs.readFileSync(__dirname + "/../index.html", "utf8");
const block = html.slice(html.indexOf("const IND = ["), html.indexOf("const ALL ="));
const items = [...block.matchAll(/\{ key: "(\w+)", name: "[^"]*"[^}]*\}/g)];
let bad = 0;
for (const m of items) {
  const p = m[0].match(/plain: "([^"]*)"/);
  if (!p || p[1].length < 40) { console.error("Missing/too short plain-English description: " + m[1]); bad++; }
}
if (!items.length) { console.error("No indicators found"); process.exit(1); }
console.log(items.length - bad + "/" + items.length + " indicators have a plain-English description");
process.exit(bad ? 1 : 0);
