export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/profile.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.AETpUhCc.js",app:"_app/immutable/entry/app.oUiSIqdH.js",imports:["_app/immutable/entry/start.AETpUhCc.js","_app/immutable/chunks/DHg76Ugc.js","_app/immutable/chunks/3MqqZaLS.js","_app/immutable/chunks/-TPXdPbP.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/9hSjzip2.js","_app/immutable/entry/app.oUiSIqdH.js","_app/immutable/chunks/DVOyPssK.js","_app/immutable/chunks/3MqqZaLS.js","_app/immutable/chunks/CRFgCLcX.js","_app/immutable/chunks/czJSyklJ.js","_app/immutable/chunks/DGPQAdF1.js","_app/immutable/chunks/9hSjzip2.js","_app/immutable/chunks/DITS2XTL.js","_app/immutable/chunks/Cdjtwoyp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
