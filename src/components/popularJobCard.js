/*eslint-disable*/
import React from 'react'
import {View ,TouchableOpacity,Image,Text } from 'react-native'

 function PopularJobCard({employer_logo,employer_name,job_title,job_city,job_country,navigation,job_id}) {
  const nav=()=>{
    navigation.navigate('details',{job_id})
  }
  return (
   <TouchableOpacity onPress={nav}>
   <View style={{backgroundColor:"white",borderColor:'black',borderWidth:0.4,display:'flex',flexDirection:'column',borderRadius:20,height:250,width:180,left:20,paddingTop:15,paddingLeft:10}}>
   <Image  style={{width:70,height:70,borderRadius:20,zIndex:1}} source={employer_logo?{uri:employer_logo}:require('../icons/default.png')}></Image>
   <Text style={{color:"grey",fontWeight:'bold',fontSize:15,top:5}}>{employer_name} </Text>
   <Text style={{color:"black",fontSize:20,fontWeight:'bold',top:15}}>{job_title}</Text>
   <Text style={{color:"grey",fontWeight:'bold',fontSize:15,top:20}}>{job_city},{job_country} </Text>
   </View>
   </TouchableOpacity>
  )
}
export default PopularJobCard
