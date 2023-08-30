import { View, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from "../../data/images.js"
import { STATUSBAR_HEIGHT, SCREEN_WIDTH } from '../../../constans'
import { Entypo } from "@expo/vector-icons";
import { appColors } from "../../data/color.js"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import Svg, { Path } from 'react-native-svg';

const text = [[
  "Save Your Money Conveniently", "Get 5% cashback on each transaction and spend it easily"
], ["Secure your money for free and get rewards", "Get the most secure payment app and enjoy it"], ["Get the most secure payment app and enjoy it", "Online Investing has never been so easier as it is right now"]]

const WelcomScreen = ({ route, navigation }) => {
  let step = 1
  const data = route?.params;
  if (data?.step) {
    step = data.step
  }
  const handelPress = () => {
    if (step == 3) {
      navigation.navigate("Register")
    } else {
      navigation.push("WelcomScreen", { step: step + 1 })
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: STATUSBAR_HEIGHT }}>
      <View style={{ flex: 1 / 2, position: "relative" }}>
        <Image
          source={images["Welcom"][step - 1]}
          style={Styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={Styles.seperate}>
        <Svg height="100" width={SCREEN_WIDTH} viewBox={`0 0 ${SCREEN_WIDTH} 100`}>
        <Path
          d={`M0 50
             Q ${SCREEN_WIDTH / 4} 40, ${SCREEN_WIDTH / 2} 70,
             T ${SCREEN_WIDTH} 50
             V 100
             H 0
             Z`}
          fill="white"
        />
      </Svg>
        </View>
      </View>
      <View style={Styles.contant}>
        <View>
          <Text style={Styles.text1}>{text[step - 1][0]}</Text>
          <Text style={Styles.text2}>{text[step - 1][1]}</Text>
        </View>
        <View style={Styles.get}>
          <View style={Styles.steps}>
            <View style={step == 1 ? Styles.step1 : Styles.step2}></View>
            <View style={step == 2 ? Styles.step1 : Styles.step2}></View>
            <View style={step == 3 ? Styles.step1 : Styles.step2}></View>
          </View>
          <TouchableOpacity onPress={handelPress} style={{ width: "100%" }}>
            <LinearGradient
              colors={[appColors.yellow, appColors.yellow]}
              {...deg(90)}
              style={Styles.butt}>
              <Text style={{ fontSize: 20, color: "white" }}>{step < 3 ? "next" : 'get started'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create({
  image: {
    // aspectRatio: 1,
    width: '100%',
    flex: 1,
    height: "50%"
  },
  contant: {
    flex: 1 / 2,
    position: "relative",
    padding: 25,
    // paddingTop: 0,
    justifyContent: "space-between"
  },

  text1: {
    fontSize: 27,
    color: appColors.status,
    marginVertical: 20,
    // fontWeight:700,
    // fontWeight:700,
    fontFamily: "bold",
    textAlign: "center"
  },
  text2: {
    fontSize: 19,
    color: appColors.status,
    marginBottom: 40,
    textAlign: "center"
  },
  get: {
    // flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  steps: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  },
  step1: {
    height: 15,
    borderRadius: 10,
    width: 15,
    backgroundColor: "blue"
  },
  step2: {
    height: 15,
    borderRadius: 10,
    width: 15,
    backgroundColor: '#B5BFFF'
  },
  butt: {
    alignItems: "center",
    gap: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    // overflow: "hidden",
    width: "100%"
  },
  seperate: {
    position:"absolute",
    width:"100%",
    bottom:-2
  }
})
export default WelcomScreen;


