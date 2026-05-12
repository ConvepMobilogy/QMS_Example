# QmsPluginExample

React Native example app for integrating `@convep_mobilogy/react-native-qms-plugin`.

The app shows a simple `Open QMS` button. Pressing it renders the native `QmsDashboardView` with client credentials, analytics callbacks, location callback, notification payload support, and theme colors.

## Requirements

- Node.js `>= 22.11.0`
- React Native development environment
- Android Studio for Android builds
- Xcode and CocoaPods for iOS builds

## Installation

Install JavaScript dependencies:

```sh
yarn install
```

Install iOS pods:

```sh
cd ios
pod install
cd ..
```

## Configure QMS Credentials

Update the placeholder values in `App.tsx`:

```tsx
const clientID = '<ClientID>';
const clientCode = '<CompanyCode>';
const userToken = '<UserToken>';
```

Replace them with the credentials provided for your QMS environment.

## Run The App

Start Metro:

```sh
yarn start
```

Run Android:

```sh
yarn run android
```

Run iOS:

```sh
yarn run ios
```

## QMS Usage

The example renders `QmsDashboardView` from `@convep_mobilogy/react-native-qms-plugin`:

```tsx
<QmsDashboardView
  style={styles.container}
  clientID={String(clientID)}
  clientCode={String(clientCode)}
  user_token={String(userToken)}
  onLocate={(lat: string, lng: string) => {
    // Open Google Maps, Apple Maps, or another navigation app.
  }}
  onClose={() => {
    // Handle SDK close action.
  }}
  payload="to add payload form notification to show in app notification"
  onAnalyticsScreen={(screenName: string) => {
    if (screenName) {
      console.log('onAnalyticsScreen : ' + screenName);
    }
  }}
  onAnalyticsEvent={(eventName: string, params?: Record<string, unknown>) => {
    if (eventName) {
      console.log('onAnalytics : ' + eventName + JSON.stringify(params));
    }
  }}
  themeColor="#0E7392"
  accentColor="#FFFFFF"
  headerThemeColor="#FFFFFF"
/>
```

Common props:

- `clientID`: QMS client ID.
- `clientCode`: QMS company code.
- `user_token`: user authentication token. The plugin also supports `userToken` and `token` aliases.
- `onLocate`: callback for latitude and longitude navigation events.
- `onClose`: callback when the QMS view closes.
- `payload`: optional notification payload to pass into the QMS view.
- `onAnalyticsScreen`: screen tracking callback.
- `onAnalyticsEvent`: analytics event callback.
- `themeColor`, `accentColor`, `headerThemeColor`: theme color overrides.

## Development

Run TypeScript validation:

```sh
npx tsc --noEmit
```

Run lint:

```sh
yarn run lint
```

Run tests:

```sh
yarn test
```

## Android Notes

The Android app enables Java core library desugaring in `android/app/build.gradle`:

```gradle
coreLibraryDesugaringEnabled true
coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.4")
```

Keep this configuration if the QMS plugin or native SDK requires newer Java APIs.
