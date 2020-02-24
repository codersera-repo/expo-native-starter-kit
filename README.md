# Expo starter kit

#### A blazing fast ejecting tool and scaffolder, for react-native and expo

Watch this [expo starter kit](https://youtu.be/Yscc0j6t35E)

Watch this video that walks through the setup in MAC OS [expo starter kit](https://youtu.be/SMXEfinQTK4)

***Overview***

Expo-starter-kit is a powerful, minimal configuration scaffolding tool, which provides a basic configuration for ejected apps built 
with expo, saving the developers from the hassle of manually ejecting apps. expo-starter-kit exposes an easy-to-use scripts' 
list for handling builds, running an app in ejected as well as in unejected mode.

***Features***

1. Minimal configuration
2. Blazing fast development
3. Rich script structure to run the app in ejected or unjected mode, with the help of just one command
4. Do whatever you want in the Xcode and Android Studio projects
5. Support for third-party native modules for React Native, non-Expo-specific instructions such as react-native link  
6. distribute your app as an ipa or apk without pain

***Why should you eject your app ?***

"Ejecting" is the process of setting up your own custom builds for your CRNA app. It can be necessary to do if you have needs that 
aren't covered by CRNA or expo. Apps built with React-native are written in javascript, offering a bridge between writing old school
platform specific apps using kotlin, swift etc. And this is the speciality offered by react-native and expo, which makes them blazing
fast and powerful to use.

However, there are some cases where advanced developers need native capabilities outside of what Expo offers out-of-the-box. 
The most common situation is when a project requires a specific Native Module which is not supported by React Native Core or the Expo 
SDK.

You might want to eject in the following cases:-
1. If you do need to eject to build your own distribution package or to include your own native code
2. If you wish to distribute your app to coworkers, friends, or customers.Right now you can do so by either making use 
   of a service to host or build your CRNA app or by ejecting.
3. If you wish to use a functionality that comes from interfacing directly with mobile platform APIs via Java, Objective-C, Swift, C,
   etc. As of right now, the only way to get direct access to these APIs from your app is by "ejecting" from CRNA and building the 
   native code yourself.


***Motivation***

When building large, complex native apps using technologies like react-native or ionic, a programmer eventually feels the need of 
ejecting  the application due to the reasons  mentioned above and it is a universal truth that ejecting is a painful process. 
Also, there might be some cases when a customer might force the programmer to use a native library, which expo or react-native might
not offer out-of-the-box.These integrations require the use of ``react-native link`` which can only function in ejected version of the app.
Therefore, this module is made as a headstart for running your app in ejected or unjejected mode using simple , and easy to use 
commands. 

***Getting Started***

***Running the app on an iOS emulator***

1. Clone this repository
 ```
git clone https://github.com/codersera-repo/expo-native-starter-kit.git 
```
2. Install the dependencies
 ```
 npm install
 ```

**Installation**

1. run the init script to specify your application name. It's gonna prompt you for your app name  and a slug name
 ```
npm run init
 ```
2. Install the bundler dependency through gem
 ```
 gem install bundler
 ```
3. Install the required native dependency files
 ```
 npm run install-ios-libs
 ```
 4. Run the app
 ```
 react-native run-ios
 ```
 5. Start the application in ejected mode
 ```
 npm run ios-native
 ```
 6. Start the app in unejected version
 ```
 npm run ios-expo
 ```
 
 ***Running the app in android devices***
 
 perform steps 1 and 2 , the same as mentioned above for iOS devices

**Installation**

1. run the init script to specify your application name. It's gonna prompt you for your app name  and a slug name
 ```
npm run init
 ```
2. Run this gradlew command to build and sync your app manually
 ```
cd android && ./gradlew installDebug
 ```
3. Open the android folder of your app in Android Studio. 

4. Hit the ``Run`` button 

5. Start the application in ejected mode
 ```
 npm run android-native
 ```
6. Start the app in unejected version
 ```
 npm run android-expo
 ```
 
 ***Running the app in web browser***

 1. Start the app in web
  ```
  npm run web-expo
  ```


