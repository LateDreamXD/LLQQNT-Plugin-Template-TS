export type PluginManifest = {
	$schema?: string
	manifest_version: number
	type?: "extension" | "theme" | "framework",
	name: string,
	slug: string,
	description: string,
	version: string,
	icon?: string | null,
	thumb?: string | null,
	authors: {name: string, link: string}[],
	dependencies?: string[],
	platform: "win32"|"linux"|"darwin"[],
	injects?: {renderer?: string, main?: string, preload?: string},
	repository: {
		repo: string, branch: string,
		release?: {tag: string, file?: string}
	}
}