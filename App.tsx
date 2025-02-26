const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splash2 from "./screens/Splash2";
import Splash1 from "./screens/Splash1";
import Splash3 from "./screens/Splash3";
import KeyfiyyetVeMuveffeqiyyet from "./screens/KeyfiyyetVeMuveffeqiyyet";
import Splash from "./screens/Splash";
import Splash4 from "./screens/Splash4";
import YarimillikQiymetlendirme1 from "./screens/YarimillikQiymetlendirme1";
import Home from "./screens/Home";
import LlikQiymetlendirme from "./screens/LlikQiymetlendirme";
import SualSayinaGrBal from "./screens/SualSayinaGrBal";
import YarimillikQiymetlendirme from "./screens/YarimillikQiymetlendirme";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "SFProDisplay-BlackItalic": require("./assets/fonts/SFProDisplay-BlackItalic.otf"),
    Calibri: require("./assets/fonts/Calibri.otf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash2"
              component={Splash2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash1"
              component={Splash1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash3"
              component={Splash3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KeyfiyyetVeMuveffeqiyyet"
              component={KeyfiyyetVeMuveffeqiyyet}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash4"
              component={Splash4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YarimillikQiymetlendirme1"
              component={YarimillikQiymetlendirme1}
              options={{ headerShown: false }}
            />
         
            <Stack.Screen
              name="LlikQiymetlendirme"
              component={LlikQiymetlendirme}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SualSayinaGrBal"
              component={SualSayinaGrBal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YarimillikQiymetlendirme"
              component={YarimillikQiymetlendirme}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
