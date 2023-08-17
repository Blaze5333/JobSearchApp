/*eslint-disable*/
import React from 'react'
import { Image, TouchableOpacity, View,Text } from 'react-native'

export default function NearbyJobs({employer_logo,job_title,job_employment_type},{navigate}) {
const nav=()=>{
  navigate.navigation('details',{
    
  })
}
  return (
    <TouchableOpacity onPress={nav}>
     <View style={{display:'flex',flexDirection:'row',borderColor:'black',borderWidth:0.4,backgroundColor:'white',marginHorizontal:15,borderRadius:20,height:80,alignItems:'center',paddingLeft:10}}>
       <Image style={{height:60,width:60,borderRadius:20}} source={employer_logo?{uri:employer_logo}:require('../icons/default.png')}></Image>
       <View style={{width:300}}>
       <Text  style={{color:"black",fontSize:15,fontWeight:'bold',left:10}}>{job_title}</Text>
       <Text style={{color:"grey",left:10,fontSize:10,fontWeight:"bold"}}>{job_employment_type}</Text>
       </View>
     </View>
    </TouchableOpacity>
  )
}
