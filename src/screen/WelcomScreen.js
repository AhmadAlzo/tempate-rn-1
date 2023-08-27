import { View, Text,SafeAreaView,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {images} from"../data/images.js"
import { STATUSBAR_HEIGHT ,SCREEN_WIDTH} from '../../constans'
import { Entypo } from "@expo/vector-icons";
import {appColors} from "../data/color.js"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
const text=[[
  "Save Your Money Conveniently","Get 5% cashback on each transaction and spend it easily"
],["Secure your money for free and get rewards","Get the most secure payment app and enjoy it"],["Get the most secure payment app and enjoy it","Online Investing has never been so easier as it is right now"]]


const WelcomScreen = ({route,navigation}) => {
  let step = 1
  const data = route?.params;
  if(data?.step){
    step = data.step
  }
  const handelPress = ()=>{
    if(step==3){
      navigation.navigate("Login_Register")
    }else {
      navigation.push("WelcomScreen",{step:step+1})
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white",paddingTop:STATUSBAR_HEIGHT }}>
      <View style={Styles.images}>
        <Image source={images["Logo"]} />
        <Image source={images["Welcom"][step-1]} />
      </View>
      <View style={Styles.contant}>
        <View>
          <Text style={Styles.text1}>{text[step-1][0]}</Text>
          <Text style={Styles.text2}>{text[step-1][1]}</Text>
          </View>
        <View style={Styles.get}>
          <View style={Styles.steps}>
            <View style={step==1?Styles.step1:Styles.step2}></View>
            <View style={step==2?Styles.step1:Styles.step2}></View>
            <View style={step==3?Styles.step1:Styles.step2}></View>
          </View>
          <TouchableOpacity  onPress={handelPress}>
            <LinearGradient
              colors={[ "#C72FF8", appColors.blue]} 
              {...deg(90)}
              style={Styles.butt}>
                <View style={Styles.cercel2}></View>
                <View style={Styles.cercel3}></View>
              <Text style={{fontSize:20,color:"white"}}>{step<3?"next":'get started'}</Text>
              {step<3&&<Entypo name="home" size={24} color="#008E97" />}
          </LinearGradient>
              
          </TouchableOpacity>
        </View>
        <View style={Styles.cercel}></View>
      </View>
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create({
  images:{
    flex:1/2,
    // backgroundColor:"red",
    paddingTop:20,
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  contant:{
    flex:1/2,
    position:"relative",
    padding:50,
    paddingTop:70,
    justifyContent:"space-between"
  },
  cercel:{
    position:"absolute",
    width:SCREEN_WIDTH*1.12,
    height:SCREEN_WIDTH*1.12,
    borderRadius:1000,
    bottom:-50,
    left:-100,
    backgroundColor:appColors.cercet1,
    zIndex:-1
  },
  text1:{
    fontSize:27,
    color:appColors.blue,
    marginVertical:20
  },
  text2:{
    fontSize:22,
    color:appColors.violet,
    marginBottom:40
  },
  get:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  steps:{
    flexDirection:"row",
    alignItems:"center",
    gap:3
  },
  step1:{
    height:8,
    borderRadius:10,
    width:25,
    backgroundColor:"blue"
  },
  step2:{
    height:8,
    borderRadius:10,
    width:8,
    backgroundColor:'#B5BFFF'
  },
  butt:{
    flexDirection:"row",
    alignItems:"center",
    gap:20,
    padding:10,
    paddingHorizontal:20,
    backgroundColor:"red",
    borderRadius:20,
    position:"relative",
    overflow:"hidden"
  },
  cercel2:{
    position:"absolute",
    width:200,
    height:200,
    borderRadius:150,
    backgroundColor:"white",
    bottom:"89%",
    left:"50%"
  },
  cercel3:{
    position:"absolute",
    width:200,
    height:200,
    borderRadius:150,
    backgroundColor:"#C72FF8",
    bottom:"70%",
      left:"70%"
  }
})
export default WelcomScreen;


