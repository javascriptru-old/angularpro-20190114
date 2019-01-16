require("zone.js/dist/zone-node");
require("reflect-metadata");
require("@angular/core").enableProdMode();
const { renderModuleFactory } = require("@angular/platform-server");
const express = require("express");
const { join } = require("path");
const app = express();
const STATIC_FOLDER = join(process.cwd(), "dist/ssr-example");
const INDEX_FILE = join(STATIC_FOLDER, "index.html");
const template = require("fs")
  .readFileSync(INDEX_FILE)
  .toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(join(process.cwd(), "dist/ssr-server/main"));
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

app.engine("html", (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => callback(null, html));
});

app.set("view engine", "html");
app.set("views", STATIC_FOLDER);
app.get("*.*", express.static(STATIC_FOLDER));
app.get("*", (req, res) => res.render(INDEX_FILE, { req }));

app.listen(4000, () => {
  console.log(`Node server listening on http://localhost:4000`);
});
