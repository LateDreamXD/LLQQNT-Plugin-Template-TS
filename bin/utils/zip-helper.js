import fs from 'fs';
import path from 'path';

export function addFilesToZip(folderPath, zipFolder) {
	try {
		const files = fs.readdirSync(folderPath);
		for(const file of files) {
			const filePath = path.join(folderPath, file);
			const fileStat = fs.statSync(filePath);

			if(fileStat.isFile()) {
				zipFolder.file(file, fs.readFileSync(filePath, { encoding: 'utf-8' }));
			}
			if(fileStat.isDirectory()) {
				const subZipFolder = zipFolder.folder(file);
				addFilesToZip(filePath, subZipFolder);
			}
		}
	} catch (e) {
		console.error(`[${new Date().toLocaleString()}]  读取文件或目录时出错: ${e.message}`);
	}
}

export const addFileToZip = (filePath, zipFolder) => {
	fs.accessSync(filePath, fs.constants.R_OK);
	zipFolder.file(path.basename(filePath), fs.readFileSync(filePath, {encoding: 'utf-8'}));
}
