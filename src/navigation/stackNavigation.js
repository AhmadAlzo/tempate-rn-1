import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";


import LoginScreen from "../screen/registers/LoginScreen";
import RegisterScreen from "../screen/registers/RegisterScreen";
import WelcomScreen from "../screen/registers/WelcomScreen";
import BottomTabs from "./BottomTabs";
import { useAuth } from "../contexts/Auth";
// import LoginRegister from "../screen/registers/Login_Register";
import FinelSetting from "../screen/registers/FinelSetting";
const Stack = createNativeStackNavigator();
function StackNavigation() {
    const [userInfo, setUserInfo] = useAuth();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getLocalUser = async () => {
            try {
                setLoading(true);
                // AsyncStorage.removeItem("@user")
                const userJSON = await AsyncStorage.getItem("@user");
                const userData = userJSON ? JSON.parse(userJSON) : null;
                await setUserInfo(userData);
            } catch (e) {
                console.log(e, "Error getting local user");
            }
             finally {
                // setTimeout(()=>setLoading(false),200)
                setLoading(false)
            }
        };
        getLocalUser();
        // setLoading(false);
    }, []);
    if (loading)
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} style={{width:400}}/>
            </View>
        );
    return (
        <NavigationContainer >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            >
                <Stack.Navigator>
                    {
                        userInfo ? (
                            <>
                                <Stack.Screen
                                    name="Main"
                                    component={BottomTabs}
                                    options={{ headerShown: false }}
                                />
                            </>
                        ):(
                            <>
                                <Stack.Screen
                                    name="WelcomScreen"
                                    component={WelcomScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Login"
                                    component={LoginScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Register"
                                    component={RegisterScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="someSetting"
                                    component={FinelSetting}
                                    options={{ headerShown: false }}
                                />
                                
                            </>
                        )
                    }
                </Stack.Navigator>
            </KeyboardAvoidingView>
        </NavigationContainer>
    );
}

export default StackNavigation;