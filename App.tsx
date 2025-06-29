import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigator/RootNavigator";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { SafeAreaView } from "react-native";

import { relayEnvironment } from "./src/relay/RelayEnvironment";
import React from "react";

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </RelayEnvironmentProvider>
  </SafeAreaView>
);

export default App;
