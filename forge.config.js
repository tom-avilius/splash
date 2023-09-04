module.exports = {
  packagerConfig: {
    "outputDirectory": "C:/Program\ Files/",
    "icon": "./favicon"
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        "outputDirectory": "C:Users\ Files/",
        "name": "splash",
        "setupIcon": "./favicon.ico"
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
