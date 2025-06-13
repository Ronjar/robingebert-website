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
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/blog/Test"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
