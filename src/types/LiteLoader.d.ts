/**
 * @file LiteLoaderQQNT API 类型定义文件
 * @author LateDream
 * @see {@link https://liteloaderqqnt.github.io/docs/liteloader-api.html}
 */

/** @namespace LiteLoaderQQNT */
declare const LiteLoader: {
	/** @prop 路径信息 */
	path: {
		/** @name 本体目录路径 */
		root: String
		/** @name 存储目录路径（如果指定了 LITELOADERQQNT_PROFILE 环境变量，否则跟本体目录路径一样） */
		profile: String
		/** @name 数据目录路径 */
		data: String
		/** @name 插件目录路径 */
		plugins: String
	}
	/** @prop 版本信息 */
	versions: {
		/** @name QQNT 版本号 */
		qqnt: String
		/** @name LiteLoaderQQNT 版本号 */
		liteloader: String
		/** @name Node.js 版本号 */
		node: String
		/** @name Chrome 版本号 */
		chrome: String
		/** @name Electron 版本号 */
		electron: String
	}
	/** @prop 系统信息 */
	os: {
		/** @name 系统平台名称 */
		platform: String
	}
	/** @prop 包信息 */
	package: {
		/** @name LiteLoaderQQNT package.json 文件内容 */
		liteloader: Object
		/** @name QQNT package.json 文件内容 */
		qqnt: Object
	}
	/** @prop 插件信息 */
	plugins: {
		/** @prop 插件标识符 */
		[slug: string]: {
			/** @name 插件是否兼容 */
			incompatible: boolean
			/** @name 插件是否禁用 */
			disabled: boolean
			/** @name 插件 manifest.json 文件内容 */
			manifest: Object
			/** @prop 插件路径信息 */
			path: {
				/** @name 插件本体根目录路径 */
				plugin: String
				/** @name 插件数据根目录路径 */
				data: String
				/** @prop 插件注入脚本文件路径 */
				injects: {
					/** @name 插件主进程脚本文件路径 */
					main: String
					/** @name 插件渲染进程脚本文件路径 */
					renderer: String
					/** @name 插件预加载脚本文件路径 */
					preload: String
				}
			}
		}
	}
	/** @prop LiteLoaderQQNT API */
	api: {
		/** @func 打开指定目录 */
		openPath(path: String): void
		/** @func 打开外部连接 */
		openExternal(uri: String): void
		/** @prop 配置文件 API */
		config: {
			/** @func 设置配置文件 */
			set(slug: String, new_config: any): Object | null
			/** @func 获取配置文件 */
			get(slug: String, default_config: any): Object | null
		},
		/** @prop 插件 API */
		plugin: {
			/** @func 安装插件 */
			install(file_path: String, undone: false): void,
			/** @func 删除插件 */
			delete(slug: String, delete_data: false, undone: false): void,
			/** @func 禁用插件 */
			disable(slug: String, undone: false): void
		}
	}
}

declare interface Window {
	LiteLoader: typeof LiteLoader
}
