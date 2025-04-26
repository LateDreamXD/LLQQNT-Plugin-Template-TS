import manifest from '../manifest.json' with {type: 'json'};
import {generateJs, generateZip, cleanCache} from './utils/build-helper.js';

console.info(`[${new Date().toLocaleString()}] 开始任务...`);

switch(process.argv[2]) {
	case 'c':
	case 'clean':
		cleanCache();
		break;
	case 'd':
	case 'build:dev':
		cleanCache();
		generateJs();
		break;
	case 'p':
	case 'build:prod':
		cleanCache();
		generateJs();
		generateZip(`./${manifest.slug}-${manifest.version}.zip`);
		cleanCache();
		break;
	case 'z':
	case 'build:zip':
		generateZip(`./${manifest.slug}-${manifest.version}.zip`);
		break;
	default:
		console.error(`[${new Date().toLocaleString()}] 未知命令`);
		break;
}