
// all imports are mentioned below

// importing the file system module
const fs = require('fs');

// importing the os module
const os = require('os');

// ---------END OF IMPORTS------------


class Toolset {

    constructor(htmlFilePath) {

        this.htmlFilePath = htmlFilePath.replaceAll('\\', '/');
        this.username = os.userInfo().username;
        this.platform = os.platform()+'';
        this.config = this.importConfig();
    }


    importConfig() {

        // console.log(this.platform);

        try {
            // if(this.platform == 'linux'){
            //     fs.mkdirSync('/home/' +this.username +'/Documents/splash');
            // } else {
                fs.mkdirSync('C:/Users/' +this.username +'/Documents/splash');
            // }
        } catch(err) {

            console.log('splash directory already exists..');
        }

        try {

            // if(this.platform == 'linux'){
            //     var configBuffer = fs.readFileSync('/home/' +this.username +'/Documents/splash/config.json');
            // } else {
                var configBuffer = fs.readFileSync('C:/Users/' +this.username +'/Documents/splash/config.json');
            // }
            const config = JSON.parse(configBuffer);
            return config;
        } catch (err) {

            try {

                // if(this.platform == 'linux'){
                //     fs.writeFileSync('/home/' +this.username +'/Documents/splash/config.json', '{"htmlFile": ' +'"' +this.htmlFilePath +'"' +', "openDevTools": ' +false +'}')
                //     var configBuffer = fs.readFileSync('/home/' +this.username +'/Documents/splash/config.json');
                //     var config = JSON.parse(configBuffer);
                // } else {
                    fs.writeFileSync('C:/Users/' +this.username +'/Documents/splash/config.json', '{"htmlFile": ' +'"' +this.htmlFilePath +'"' +', "openDevTools": ' +false +'}')
                    var configBuffer = fs.readFileSync('C:/Users/' +this.username +'/Documents/splash/config.json');
                    var config = JSON.parse(configBuffer);
                // }
                return config;
            } catch (Err) {
                console.trace(Err);
            }
         }
    }
}


module.exports = {Toolset};