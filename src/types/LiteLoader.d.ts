/**
 * LiteLoaderQQNT API
 * https://liteloaderqqnt.github.io/docs/liteloader-api.html
 */

declare const LiteLoader: {
	path: {
		root: String    // 本体目录路径
		profile: String // 存储目录路径（如果指定了 LITELOADERQQNT_PROFILE 环境变量，否则跟本体目录路径一样）
		data: String    // 数据目录路径
		plugins: String // 插件目录路径
	}
	versions: {
		qqnt: String        // QQNT 版本号
		liteloader: String  // LiteLoaderQQNT 版本号
		node: String        // Node.js 版本号
		chrome: String      // Chrome 版本号
		electron: String    // Electron 版本号
	}
	os: {
		platform: String    // 系统平台名称
	}
	package: {
		liteloader: Object  // LiteLoaderQQNT package.json 文件内容
		qqnt: Object        // QQNT package.json 文件内容
	}
	plugins: any /* {
		any: {
			incompatible: boolean    // 插件是否兼容
			disabled: boolean        // 插件是否禁用
			manifest: Object         // 插件 manifest.json 文件内容
			path: {
				plugin: String  // 插件本体根目录路径
				data: String    // 插件数据根目录路径
				injects: {
					main: String        // 插件主进程脚本文件路径
					renderer: String    // 插件渲染进程脚本文件路径
					preload: String     // 插件预加载脚本文件路径
				}
			}
		}
	} */
	api: {
		openPath(path: String): void      // 打开指定目录
		openExternal(uri: String): void   // 打开外部连接
		config: {
			set(slug: String, new_config: any): Object | null       // 设置配置文件
			get(slug: String, default_config: any): Object | null   // 获取配置文件
		},
		plugin: {
			install(file_path: String, undone: false): void,
			delete(slug: String, delete_data: false, undone: false): void,
			disable(slug: String, undone: false): void
		}
	}
}

declare interface Window {
	LiteLoader: typeof LiteLoader
}
