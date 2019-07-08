const fs = require('fs');
const prompt = require('prompt');
const path = require('path');
const gOldName = 'expoblank';
const gOldNameRegex = /expoblank/g;
const gOldSlugName = 'exop-blank';
const gOldSlugNameRegex = /exop-blank/g;
let gName = 'empty';
let gSlugName = 'empty-slug';
const execSync = require('child_process').execSync;

const generatedPaths = ['ios/Pods', 'ios/build']; // TODO: add android specific generated paths

prompt.start();


prompt.get([{
    name: 'name',
    description: 'Enter the name of your project',
    type: 'string',
    required: true
}, {
    name: 'slugName',
    description: 'Enter the slug name of your expo project',
    type: 'string',
    required: true
}], function(err, results) {
    console.log(results);
    gName = results['name'];
    gSlugName = results['slugName'];
    updateProjectConfigs(results);
    prompt.stop();
    console.log('executing the node fixer command');
    execSync('./node_modules/expokit/detach-scripts/run-exp.sh prepare-detached-build --platform android');
});


function replaceFileContent(fileName, oldName, oldNameRegex, newName) {
    console.log(`${fileName} parsing file`);
    let fileContent = fs.readFileSync(fileName, 'utf8');

    if(fileContent.includes(oldName)) {
        fileContent = fileContent.replace(oldNameRegex, newName);
        fs.writeFileSync(fileName, fileContent);
        console.log(`${fileName} updated successfully`);
    } else {
        console.log(`${fileName} skipped as it doesn't include ${oldName}`);
    }
}

function iterateFolderAndUpdateContent(folderPath, oldName, oldNameRegex, newName) {

    let isGenerated = false;
    for(let gpath of generatedPaths) {
        if(folderPath.includes(gpath)) {
            isGenerated = true;
            break;
        }
    }

    if(isGenerated) {
        return; // no need to change the content of this folder since it is generated.
    }

    const files = fs.readdirSync(folderPath);
    const newFolderPath = folderPath.replace(oldNameRegex, newName);
    fs.renameSync(folderPath, newFolderPath);
    console.log(`renamed ${folderPath} to ${newFolderPath}`);

    for(let file of files) {
        const newPath = path.resolve(newFolderPath, file);
        const stat = fs.lstatSync(newPath);
        const isFile = stat.isFile();
        if(!isFile) {
            iterateFolderAndUpdateContent(newPath, oldName, oldNameRegex, newName);
        } else if(!newPath.endsWith('.png')) {// add the files check that you don't want to modify
            replaceFileContent(newPath, oldName, oldNameRegex, newName);
            const newFilePath = newPath.replace(oldNameRegex, newName);
            fs.renameSync(newPath, newFilePath);
        }
    }
}

function updateProjectConfigs() {

    ['../ios', '../android'].map(item => {
        const nativeFolderPath = path.resolve(__dirname, item);
        iterateFolderAndUpdateContent(nativeFolderPath, gOldName, gOldNameRegex, gName);
        iterateFolderAndUpdateContent(nativeFolderPath, gOldSlugName, gOldSlugNameRegex, gSlugName);
    });

    ['../ejected.json', '../unejected.json'].map(item => {
        replaceFileContent(path.resolve(__dirname, item), gOldName, gOldNameRegex, gName);
        replaceFileContent(path.resolve(__dirname, item), gOldSlugName, gOldSlugNameRegex, gSlugName);
    });
}
