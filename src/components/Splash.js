import React from 'react'
import { View ,Image,Text} from 'react-native'
export default function Splash({navigation}) {
    setTimeout(() => {
        navigation.replace('Home')
    }, 2000);
  return (
  <View style={{backgroundColor:'dodgerblue', flex:1,justifyContent:'center',alignItems:'center'}}>
   <Image source={require('../icons/jobsearch.png')} style={{height:120,width:120}}></Image>
   <Text style={{fontFamily:'Rowdies-Regular', color:'white', fontSize:30}}>Job Search</Text>
  </View>
  )
}
