# iOS eg.

```
$ cd CodePushDemoApp
$ yarn
$ open ios/CodePushDemoApp.xcodeproj
```

# android eg.

```
$ cd CodePushDemoApp
$ yarn
$ cd android
$ ./gradlew assembleRelease
$ cd app/build/outputs/apk #install app-release.apk into your phone
```

# codepush-cli

```
$ code-push login http://notebook.agiletech.vn #code-push-server
$ code-push app add SuperApp ios react-native  #iOS
$ react-native bundle --platform ios --entry-file index.js --bundle-output ./dist/main.jsbundle --dev false
$ code-push release SuperApp ./dist 1.0.0 -d Staging
```
