requirejs.config({
	paths: {
		text: 'require_plugins/text',
		json: 'require_plugins/json',
	},
	shim: {
		'krpano': {
			init: function() {
				var bgId = localStorage.getItem('bgId'),
					start_page = 0, //0-首页；1-静态；2-动态
					preset_data = [{
						xml: "xml/scenes/IndexScene.xml",
						content_data: "../data/index_data.json"
					}, {
						xml: "xml/scenes/GalleryScene.xml",
						content_data: "../data/chaoxiyou.json",
						episodes:1
					}, {
						xml: "xml/scenes/MotionComicScene.xml",
						content_data: "../data/child.json",
						episodes:1
					}];

				embedpano({
					xml: preset_data[start_page].xml,
					target: "pano",
					html5: "only+webgl",
					mobilescale: 1.0,
					consolelog: true,
					initvars: {
						hasBg:typeof bgId == 'string',
						bgId: bgId > 0 ? bgId : 0,
						page: 0,
						indexData: preset_data[0].content_data,
						data_: preset_data[start_page].content_data,
						episodes_: preset_data[start_page].episodes
					}
				});
			}
		}
	}
});

require(["krpano", "text", "json"]);