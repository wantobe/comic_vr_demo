requirejs.config({
	paths: {
        text: 'require_plugins/text',
        json: 'require_plugins/json',
	},
	shim:{
		'krpano':{
			init:function(){
				var bgId = localStorage.getItem('bgId');
				embedpano({
					xml: "xml/scenes/IndexScene.xml",
					target: "pano",
					html5: "auto",
					mobilescale: 1.0,
					consolelog: true,
					initvars: {
						bgId: bgId > 0 ? bgId : 0,
						page: 0,
						indexData: "../data/index_data.json"
					}
				});
			}
		}
	}
});

require(["krpano","text","json"]);

