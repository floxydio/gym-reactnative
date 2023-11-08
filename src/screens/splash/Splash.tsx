import React from 'react'
import { Button, Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native'
import { Color } from '../../constant/Color'
import circle from '../../assets/splash/circle.png'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SplashPage({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  return (
    <View style={style.background}>
      <Image style={style.image_circle} source={circle} />
      <Text style={style.text_pump}>Yoga House</Text>
      <Text style={style.text_subtitle}>FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU</Text>
      <Pressable style={style.btn_next} onPress={() => {
        navigation.replace('Home')
      }}>
        <Text style={style.btn_next_title}>Next</Text>
      </Pressable>
      <Icon name='barbell' style={{
        fontSize: 100,
        color: Color.WHITE,
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 20,
        marginBottom: 20


      }} />
    </View >
  )
}

const style = StyleSheet.create({
  background: {
    width: '100%',
    backgroundColor: Color.MAINCOLOR,
    flex: 1,
  },
  image_circle: {
    alignSelf: 'flex-end'
  },
  text_pump: {
    color: Color.WHITE,
    alignSelf: 'center',
    marginTop: 37,
    fontSize: 48,
    fontWeight: "bold"
  },
  text_subtitle: {
    color: Color.WHITE,
    paddingLeft: 24,
    paddingRight: 24,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    alignSelf: 'center',
  },
  btn_next: {
    backgroundColor: Color.WHITE,
    width: 266,
    height: 62,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn_next_title: {
    color: Color.BLACK,
    fontSize: 17,
    fontWeight: "600"
  }
})
