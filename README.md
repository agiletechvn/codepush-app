## iOS eg.

```
$ cd CodePushDemoApp
$ yarn
$ open ios/CodePushDemoApp.xcodeproj
```

## android eg.

```
$ cd CodePushDemoApp
$ yarn
$ cd android
$ ./gradlew assembleRelease
$ cd app/build/outputs/apk #install app-release.apk into your phone
```

## bundling

```
$ react-native bundle --platform ios --entry-file index.js --bundle-output ./dist/main.jsbundle --dev false
# bundle with split modules
$ yarn bundle # bundle core system
$ yarn bundle -m ModuleA # bundle ModuleA
$ yarn bundle -m Module --output dist/main.jsbundle # combine core system and module ModuleA into dist/main.jsbundle
```

## codepush-cli

```
$ code-push login http://notebook.agiletech.vn #code-push-server
$ code-push app add SuperApp ios react-native  #iOS
$ code-push release SuperApp ./dist 1.0.0 -d Staging
```
