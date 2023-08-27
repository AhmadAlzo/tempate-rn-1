import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { SCREEN_WIDTH } from '../../constans'
import { appColors } from "../data/color.js"
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useAuth } from "../contexts/Auth";



const LoginScreen = ({ navigation }) => {
    const [_, setUserInfo] = useAuth();
    const [sec, setSec] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPass,setErrorPass] = useState("")
    const [erroremail,setErroremail] = useState("")
    const handleLogin = () => {
        if(formValidation()){
            const user = {
                email: email,
                password: password,
            };
            data = JSON.stringify(user)
            AsyncStorage.setItem("@user", data);
            // console.log("asda");
            setUserInfo(user)
            // navigation.navigate("OTP",{step:1,data:user});
    
            //   axios
            //     .post("http://localhost:8000/login", user)
            //     .then((response) => {
            //       console.log(response);
            //   const token = "adsdadas" //response.data.token;
            //   AsyncStorage.setItem("authToken", token);
            //   navigation.replace("Main");
            //     })
            //     .catch((error) => {
            //       Alert.alert("Login Error", "Invalid Email");
            //       console.log(error);
            //     });
        }
        
        
    }
    const formValidation = () => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const passwordupper = /^(?=.*[A-Z]).+$/;
        const passwordnumber = /^(?=.*[0-9]).+$/;
        setErroremail("")
        setErrorPass("")
        if(!emailRegex.test(email)){
            setErroremail("hour email is not valide")
        }else if (password.length == 0) {
            setErrorPass("Password is required feild");
        }else if (password.length < 8 ||  password.length > 20) {
            setErrorPass("Password should be min 8 char and max 20 char");
        } else if(!passwordupper.test(password)){
            setErrorPass("Password containe at minumal 1 upperCase");
        }else if(!passwordnumber.test(password)){
            setErrorPass("Password containe at minumal 1 number");
        }else {
            return true
        }
        // else if (password !==  confirmPassword ) {
        //   setErrorPass({ passwordErrorMessage: "Passwoad and confirm password should be same."});
        // }  
    };
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
            <View style={{ gap: 80 }}>
                <View style={Styles.sign}>
                    <Text style={{fontSize:27,fontWeight:800}}>Sign in</Text>
                    <View style={{marginTop:20}}>
                        <Text style={{color:erroremail?"red":"blue",marginTop:5}}>Email</Text>
                        <View style={[Styles.input,{borderColor:erroremail?"red":"blue"}]}>
                            <TextInput value={email} style={{flexGrow:2,fontSize:20}} onChangeText={setEmail} />
                            <Entypo name="home" size={24} color="#008E97" />
                        </View>
                        {erroremail&&<Text style={Styles.error}>{erroremail}</Text>}
                    </View>
                    <View>
                        <Text style={{color:errorPass?"red":"blue",marginTop:10}}>Password</Text>
                        <View style={[Styles.input,{borderColor:errorPass?"red":"blue"}]}>
                            <TextInput value={password} secureTextEntry={sec} style={{flexGrow:2,fontSize:20}} onChangeText={setPassword} />
                            <TouchableOpacity onPress={() => setSec(!sec)}>
                                {sec?
                                <Entypo name="home" size={24} color="#008E97" />:
                                <Entypo name="home" size={24} color="red" />}
                            </TouchableOpacity>
                        </View>
                        {errorPass&&<Text style={Styles.error}>{errorPass}</Text>}
                    </View>
                </View>
                <TouchableOpacity onPress={handleLogin}>
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
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const Styles = StyleSheet.create({
    contant: {
        flex: 1,
        position: "relative",
        padding: 50,        
        justifyContent: "space-between",
        paddingTop:60
    },
    error:{
        fontSize:22,
        color:"red"
    },
    cercel11: {
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        borderRadius: 1000,
        top: "-7%",
        left: "-15%",
        backgroundColor: appColors.cercet1,
        zIndex: -1
    },
    cercel12: {
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        borderRadius: 1000,
        top: "-22%",
        left: "-5%",
        backgroundColor: appColors.cercet1,
        zIndex: -1
    },
    cercel13: {
        position: "absolute",
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        borderRadius: 1000,
        top: "-15%",
        left: "-33%",
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
    input: {
        padding:2,
        paddingBottom:7,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:2,
        borderColor:"red"
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
});