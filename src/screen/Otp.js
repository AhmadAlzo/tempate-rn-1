import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity ,Keyboard} from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from "../data/images"
import { STATUSBAR_HEIGHT, SCREEN_WIDTH } from '../../constans'
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from '../contexts/Auth';
const OtpScreen = ({ route, navigation }) => {
    // const [number,setNumber]=useState("+961")
    const [active, setActive] = useState(false);
    const [verifactionNumber, setVerifactionNumber] = useState(["", "", "", ""])
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
    const [_,setUserInfo] = useAuth()
    let data = route.params;
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsOpen(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsOpen(false);
        });
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [])
    const handelPress = () => {
        if(data.step==1){
            navigation.push("OTP", {  number: verifactionNumber[0],...data,step: 2 })
        }else{
            const req= {
                name:data.name,
                email:data.email,
                password:data.password,
                number:data.number
            }
            AsyncStorage.setItem("@user", JSON.stringify(req));
            // console.log("asda");
            setUserInfo(req)
        }
        
    }
    const changeinput = (e,i) => {
        // console.log(e)
        setVerifactionNumber(prevArray => {
            const newArray = [...prevArray];
            newArray[i] = e.value;
            return newArray;
          });
    }   
    return (
        <View style={Styles.container}>
            <Image source={images["otp"]} />
            <View style={{ alignItems: "center", gap: 25 }}>
                <Text style={{ fontSize: 24, fontWeight: 700 }}>OTP Verifaction</Text>
                <Text style={{ fontSize: 18, fontWeight: 400 }}>{data.step == 1 ? "We will send you a one time password to this mobile number" : "Enter the OTP sent to "+data.number}</Text>
                {data.step == 1 ? (
                    <View style={{ alignItems: "center", gap: 10 }}>
                        <Text style={{ fontWeight: 300 }}>Enter Mobile Number</Text>
                        <TextInput inputMode="tel" style={Styles.input} value={verifactionNumber[0]} onChangeText={(e) => changeinput(e,0)} />
                    </View>
                ) : (
                    <View style={Styles.fourInput}>
                        {
                            verifactionNumber.map((e, i) => {
                                return (
                                    <TextInput key={i} inputMode="tel" maxLength={1} style={Styles.inputOne} value={verifactionNumber[i]} onChangeText={(e) => changeinput(e,i)} />
                                )
                            })
                        }
                    </View>
                )}
            </View>
            {!keyboardIsOpen&&<TouchableOpacity onPress={handelPress} style={{ alignSelf: "stretch" }}>
                <LinearGradient
                    colors={['#4960F9', '#1433FF']}
                    {...deg(90)}
                    style={Styles.butt}>
                    <View style={Styles.cercel2}></View>
                    <View style={Styles.cercel3}></View>
                    <Text style={{ fontSize: 22, color: "white" }}>Get OTP</Text>
                </LinearGradient>
            </TouchableOpacity>}
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        // paddingTop:STATUSBAR_HEIGHT,
        paddingTop: 30,
        paddingHorizontal: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    input: {
        // backgroundColor:"red",
        borderBottomWidth: 2,
        borderColor: "blue",
        width: SCREEN_WIDTH - 100,
        textAlign: "center",
        fontSize: 20,
        overflow: "hidden"
    },
    butt: {
        flexDirection: "row",
        padding: 20,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
    },
    cercel2: {
        position: "absolute",
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 2,
        borderRadius: 4000,
        backgroundColor: "violet",
        bottom: "70%",
        right: "80%"
    },
    cercel3: {
        position: "absolute",
        width: SCREEN_WIDTH / 2,
        height: SCREEN_WIDTH / 2,
        borderRadius: 4000,
        backgroundColor: "violet",
        top: "70%",
        left: "80%"
    },
    fourInput: {
        flexDirection: "row",
        gap: 30,
        alignItems: "center"
    },
    inputOne: {
        padding: 20,
        borderBottomWidth: 2,
        borderColor: "blue",
    }
})
export default OtpScreen;