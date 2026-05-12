import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { QmsDashboardView } from '@convep_mobilogy/react-native-qms-plugin';

export default function App() {
  const [showQms, setShowQms] = React.useState(false);

  const clientID = '<ClientID>';
  const clientCode = '<CompanyCode>';
  const userToken = '<UserToken>';

  
  return (
    <View style={styles.container}>
      {showQms ? (
      <QmsDashboardView
            style={styles.container}
            clientID={String(clientID)}
            clientCode={String(clientCode)}
            user_token={String(userToken)}
            onLocate={(lat: string, lng : string) => {
              //to throw user to google maps or any maps application to navigate purpose
            }}
            onClose={() => {
              //to handle when user close sdk
            }}
            payload={"to add payload form notification to show in app notification"}
            onAnalyticsScreen={(screenName: string) => {
              if (screenName) {
                console.log('onAnalyticsScreen : ' + screenName);
              }
            }}
            onAnalyticsEvent={(
              eventName: string,
              params?: Record<string, unknown>,
            ) => {
              if (eventName) {
                console.log(
                  'onAnalytics : ' + eventName + JSON.stringify(params),
                );
              }
            }}

            themeColor="#0E7392"
            accentColor="#FFFFFF"
            headerThemeColor="#FFFFFF"
          />
      ) : (
        <View style={styles.center}>
          <Button title="Open QMS" onPress={() => setShowQms(true)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', gap: 12, paddingHorizontal: 24 },
});
