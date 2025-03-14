import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from '../constants/styles';
import { COLORS } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusedStatusBar from '../constants/StatusBar';
import Button from '../widget/Button';

const ErrorRed = () => {
  const navigation= useNavigation();
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}>
      <FocusedStatusBar backgroundColor={COLORS.light.white}
       barStyle={"dark-content"}
      />

      <View style={styles.container}>
        <View style={[styles.greenCon,{borderColor:"#D70404"}]}>
         <FontAwesome6 name="square-xmark" size={100} color="#D70404" />
        </View>

        <View style={{marginTop:16,alignItems:"center",width:"100%"}}>
          <Text style={[styles.smallTextText,{width:"75%",textAlign:"center",color:"black"}]}>
           Transaction not successfull! Check your network settings.
          </Text>
        </View>

        <View style={{marginTop:120}}>
            <Button
             buttonColor={COLORS.light.heart}
             textColor={COLORS.light.white}
             buttonText={"Try Again"}
             onPress={()=>navigation.navigate("Home")}/>
             
        </View> 
      </View>
    </SafeAreaView>
  )
}

export default ErrorRed