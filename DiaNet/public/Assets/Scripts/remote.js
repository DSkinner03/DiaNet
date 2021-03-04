const remoteConfig = firebase.remoteConfig();
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
  "shut_down_enabled": "false"
};
const val = remoteConfig.getValue("shut_down_enabled");

remoteConfig.fetchAndActivate()
  .then(() => {
    // ...
  })
  .catch((err) => {
    // ...
  });
