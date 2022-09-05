// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `deno task dev`.

import * as serverEntry from "./app/entry.server.tsx";
import * as route0 from "./app/root.tsx";
import * as route1 from "./app/routes/about_.another.tsx";
import * as route2 from "./app/routes/about.test.tsx";
import * as route3 from "./app/routes/index.tsx";
import * as route4 from "./app/routes/about.tsx";

export const assetsBuildDirectory = "";
export const publicPath = "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/";
export const entry = { module: serverEntry };
export const routes = {
	"root": {
		id: "root",
		module: route0,
		file: "./app/root.tsx",
	},
	"routes/about_/another": {
		id: "routes/about_/another",
		path: "about/another",
		parentId: "root",
		module: route1,
		file: "./app/routes/about_.another.tsx",
	},
	"routes/about/test": {
		id: "routes/about/test",
		path: "test",
		parentId: "routes/about",
		module: route2,
		file: "./app/routes/about.test.tsx",
	},
	"routes/index": {
		id: "routes/index",
		index: true,
		parentId: "root",
		module: route3,
		file: "./app/routes/index.tsx",
	},
	"routes/about": {
		id: "routes/about",
		path: "about",
		parentId: "root",
		module: route4,
		file: "./app/routes/about.tsx",
	},
};
export const assets = {
  url: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/manifest.js",
  version: "6bbe8e1f1763dfc39e79bc30f1ab4fe1",
  entry: { imports: [], module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/entry.client.js" },
  routes: {
		"root": {
			id: "root",
			imports: [],
			module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/root.js",
			hasAction: "action" in route0,
			hasLoader: "loader" in route0,
			hasCatchBoundary: "CatchBoundary" in route0,
			hasErrorBoundary: "ErrorBoundary" in route0,
		},
			"routes/about_/another": {
			id: "routes/about_/another",
			path: "about/another",
			parentId: "root",
			imports: [],
			module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/routes/about_/another.js",
			hasAction: "action" in route1,
			hasLoader: "loader" in route1,
			hasCatchBoundary: "CatchBoundary" in route1,
			hasErrorBoundary: "ErrorBoundary" in route1,
		},
			"routes/about/test": {
			id: "routes/about/test",
			path: "test",
			parentId: "routes/about",
			imports: [],
			module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/routes/about/test.js",
			hasAction: "action" in route2,
			hasLoader: "loader" in route2,
			hasCatchBoundary: "CatchBoundary" in route2,
			hasErrorBoundary: "ErrorBoundary" in route2,
		},
			"routes/index": {
			id: "routes/index",
			index: true,
			parentId: "root",
			imports: [],
			module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/routes/index.js",
			hasAction: "action" in route3,
			hasLoader: "loader" in route3,
			hasCatchBoundary: "CatchBoundary" in route3,
			hasErrorBoundary: "ErrorBoundary" in route3,
		},
			"routes/about": {
			id: "routes/about",
			path: "about",
			parentId: "root",
			imports: [],
			module: "/6bbe8e1f1763dfc39e79bc30f1ab4fe1/routes/about.js",
			hasAction: "action" in route4,
			hasLoader: "loader" in route4,
			hasCatchBoundary: "CatchBoundary" in route4,
			hasErrorBoundary: "ErrorBoundary" in route4,
		},		
},
};
