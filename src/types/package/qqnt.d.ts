export type QQNTPackage = {
	name: "qq-chat",
	version: string,
	private: true,
	description: "QQ",
	productName: "QQ",
	author: {
		name: "Tencent",
		email: "QQ-Team@tencent.com"
	},
	homepage: "https://im.qq.com",
	sideEffects: true,
	bin: {qd: string},
	main: string,
	buildVersion: string,
	isPureShell: true,
	isByteCodeShell: true,
	platform: "win32"|"linux"|"darwin",
	eleArch: string
}