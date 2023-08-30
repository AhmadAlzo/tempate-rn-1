import { StatusBar } from "expo-status-bar";
import { useState,useCallback,useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./src/navigation/stackNavigation";
import { AuthProvider } from "./src/contexts/Auth"
import vectorFonts from './src/data/Fonts.js';
//  pages
import { cacheImages, cacheFonts } from './src/methode/caching.js';
import { GestureHandlerRootView } from "react-native-gesture-handler";

// import { ThemeProvider, createTheme } from '@rneui/themed';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    loadAssetsAsync();
  }, []);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/splash.jpeg'),
    ]);

    const fontAssets = cacheFonts([
      ...vectorFonts,
      { georgia: require('./assets/fonts/Georgia.ttf') },
      // { regular: require('./assets/fonts/Montserrat-Regular.ttf') },
      // { light: require('./assets/fonts/Montserrat-Light.ttf') },
      { bold: require('./assets/fonts/Montserrat-Bold.ttf') },
      // { UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf') },
      // { UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf') },
      // { UbuntuLightItalic: require('./assets/fonts/Ubuntu-Light-Italic.ttf') },
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
    setIsReady(true);
  };
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    // <GestureHandlerRootView>
    <SafeAreaProvider  style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* <Provider store={store}> */}
      {/* <ThemeProvider theme={theme}> */}
        <AuthProvider>
          <StackNavigation />
        </AuthProvider>
        {/* </Provider> */}
      {/* </ThemeProvider> */}
      <StatusBar backgroundColor="#110134" style="light" />
    </SafeAreaProvider >
    // </GestureHandlerRootView>
  );
}

// const theme = createTheme({
//   lightColors: {
//     primary: '#3d5afe',
//   },
//   darkColors: {
//     primary: '#3d5afe',
//   },
//   mode: 'dark',
//   components: {
//     Text: {
//       h1Style: {
//         fontSize: 80,
//       },
//     },
//   },
// });