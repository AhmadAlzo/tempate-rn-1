import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./src/navigation/stackNavigation";
import {AuthProvider} from"./src/contexts/Auth"

//  pages

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {/* <Provider store={store}> */}
        <AuthProvider>
        <StackNavigation/>
      </AuthProvider>
      {/* </Provider> */}
      <StatusBar backgroundColor="transparent"/>
    </SafeAreaProvider>
  );
}
