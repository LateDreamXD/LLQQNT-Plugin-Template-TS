import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import {execSync} from 'child_process';
import manifest from '../../manifest.json' with {type: 'json'};

export const generateJs = () => {
	console.info(`[${new Date().toLocaleString()}] 生成 js...`);
	execSync('npx tsc -p ./tsconfig.app.json', {stdio: 'inherit'});
	execSync('npx tsc -p ./tsconfig.node.json', {stdio: 'inherit'});
	console.info(`[${new Date().toLocaleString()}] js 生成完毕`);
}

export const generateZip = async(outputFile) => {
	const zipHelper = await import('./zip-helper.js');

	console.info(`[${new Date().toLocaleString()}] 生成 zip...`);
	const zip = new JSZip();

	const importantFiles = ['./manifest.json', './README.md', './LICENSE'];
	!!manifest.icon && importantFiles.push(manifest.icon);
	!!manifest.thumb && importantFiles.push(manifest.thumb);
	importantFiles.forEach(async(file) => {
		console.log(`[${new Date().toLocaleString()}] 写入 ${path.basename(file)} 文件...`);
		try {zipHelper.addFileToZip(file, zip);} catch(e) {}
	});

	console.log(`[${new Date().toLocaleString()}] 写入 dist 目录...`);
	zipHelper.addFilesToZip('./dist', zip.folder('dist'));

	fs.writeFileSync(outputFile,
		await zip.generateAsync({
			type: 'nodebuffer',
			compression: 'DEFLATE',
			compressionOptions: {level: 9}
		})
	);
	console.info(`[${new Date().toLocaleString()}] zip 生成完毕`);
}

export function cleanCache() {
	console.info(`[${new Date().toLocaleString()}] 清理 js 缓存...`);
	if(fs.existsSync('./dist'))
		fs.readdirSync('./dist').forEach(file => {
			if(file.endsWith('.js'))
				fs.unlinkSync(path.join('./dist', file));
		});
	else
		console.info(`[${new Date().toLocaleString()}] 无需清理 js 缓存`);
	console.info(`[${new Date().toLocaleString()}] js 缓存清理完毕`);
}