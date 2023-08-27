import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import {  SCREEN_WIDTH } from '../../constans'
import { appColors } from "../data/color.js"
import { Entypo } from "@expo/vector-icons";

const LoginRegister = ({navigation}) => {
    const handelPress = (num) => {
        navigation.navigate(num)
    }
    return (
        <SafeAreaView style={Styles.contant}>
            <LinearGradient
                colors={["#C630F800", "#2F56FB"]}
                {...deg(180)}
                style={Styles.cercel11} />
            <LinearGradient
                colors={['#2F56FB', '#C72FF888']}
                {...deg(90)}
                style={Styles.cercel12} />
            <LinearGradient
                colors={["#5264F9", "#3AF9EF"]}
                {...deg(90)}
                style={Styles.cercel13} />
            <View>
                <View style={Styles.logo}>
                    <View style={Styles.interLogo1}></View>
                </View>
                <Text style={Styles.text}>welcome</Text>
                <Text style={Styles.text}>back</Text>
            </View>
            <View style={{ gap: 20 }}>
                <TouchableOpacity onPress={()=>handelPress("Login")}>
                    <LinearGradient
                        colors={['#4960F9', '#1433FF']}
                        {...deg(90)}
                        style={Styles.butt}>
                        <View style={Styles.cercel2}></View>
                        <View style={Styles.cercel3}></View>
                        <Text style={{ fontSize: 20, color: "white" }}>sing in</Text>
                        <Entypo name="home" size={24} color="#008E97" />
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.butt2} onPress={()=>handelPress("Register")}>
                    <Text style={{ fontSize: 20, color: "#008E97" }}>sing up</Text>
                    <Entypo name="home" size={24} color="#008E97" />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    contant: {
        flex: 1,
        position: "relative",
        padding: 50,
        paddingHorizontal: 50,
        paddingVertical: 80,
        justifyContent: "space-between"
    },
    cercel11:{
        position: "absolute",
        width: SCREEN_WIDTH * 1.7,
        height: SCREEN_WIDTH * 1.7,
        borderRadius: 1000,
        top: "-18%",
        left: "-85%",
        backgroundColor: appColors.cercet1,
        zIndex: -1
    },
    cercel12: {
        position: "absolute",
        width: SCREEN_WIDTH * 1.7,
        height: SCREEN_WIDTH * 1.7,
        borderRadius: 1000,
        top: "-25%",
        left: "-55%",
        backgroundColor: appColors.cercet1,
        zIndex: -1
    },
    cercel13: {
        position: "absolute",
        width: SCREEN_WIDTH * 1.7,
        height: SCREEN_WIDTH * 1.7,
        borderRadius: 1000,
        top: "-33%",
        left: "-80%",
        backgroundColor: appColors.cercet1,
        zIndex: -1
    },
    text: {
        fontSize: 26,
        color: "white",
        marginTop: 8
    },

    butt: {
        flexDirection: "row",
        alignItems: "center",
        //   gap:20,
        padding: 20,
        paddingHorizontal: 20,
        backgroundColor: "red",
        borderRadius: 20,
        position: "relative",
        overflow: "hidden",
        justifyContent: "space-between"
    },
    butt2: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 18,
        borderWidth: 3,
        borderColor: "block",
        borderRadius: 20
    },
    cercel2: {
        position: "absolute",
        width: 200,
        height: 200,
        borderRadius: 150,
        backgroundColor: "#2B42A7",
        bottom: "99%",
        left: "76%"
    },
    cercel3: {
        position: "absolute",
        width: 200,
        height: 200,
        borderRadius: 150,
        backgroundColor: "#C72FF8",
        bottom: "85%",
        left: "85%"
    },
    logo: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    interLogo1: {
        borderWidth: 26,
        borderBottomColor: "white",
        borderTopColor: "white",
        borderLeftColor: "blue",
        borderRightColor: "blue",
        borderRadius: 10
    }
})
export default LoginRegister;