var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/node.js
var node_exports = {};
__export(node_exports, {
  defineConfig: () => defineConfig,
  getThemeConfig: () => getThemeConfig
});
module.exports = __toCommonJS(node_exports);
var import_fast_glob = __toESM(require("fast-glob"));
var import_gray_matter = __toESM(require("gray-matter"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
function getThemeConfig(cfg) {
  var _a;
  const srcDir = cfg.srcDir || ((_a = process.argv.slice(2)) == null ? void 0 : _a[1]) || ".";
  const files = import_fast_glob.default.sync(`${srcDir}/**/*.md`, { ignore: ["node_modules"] });
  const data = files.map((v) => {
    var _a2;
    let route = v.replace(".md", "");
    if (route.startsWith("./")) {
      route = route.replace(
        new RegExp(
          `^\\.\\/${import_path.default.join(srcDir, "/").replace(new RegExp(`\\${import_path.default.sep}`, "g"), "/")}`
        ),
        ""
      );
    } else {
      route = route.replace(
        new RegExp(
          `^${import_path.default.join(srcDir, "/").replace(new RegExp(`\\${import_path.default.sep}`, "g"), "/")}`
        ),
        ""
      );
    }
    const fileContent = import_fs.default.readFileSync(v, "utf-8");
    const meta = {
      ...(0, import_gray_matter.default)(fileContent).data
    };
    meta.cover = meta.cover || ((_a2 = fileContent.match(/[!]\[.*?\]\((https:\/\/.+)\)/)) == null ? void 0 : _a2[1]) || "";
    return {
      route: `/${route}`,
      meta
    };
  }).filter((v) => v.meta.layout !== "home");
  return {
    blog: {
      pagesData: data || [],
      ...cfg
    },
    sidebar: [
      {
        text: "",
        item: []
      }
    ]
  };
}
function defineConfig(config) {
  return config;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defineConfig,
  getThemeConfig
});
