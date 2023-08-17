import React from 'react'
import {View,Text,Image,TouchableOpacity } from 'react-native'
import { useEffect,useState } from 'react'
import { particularJob } from './data'
export default function Details({employer_name,employer_logo,route}) {
  const [details, setdetails] = useState({})
  const [btn1, setbtn1] = useState(true)
  const [btn2, setbtn2] = useState(false)
  const [btn3, setbtn3] = useState(false)
  useEffect(() => {
    console.log(route.params.job_id)
       setdetails(particularJob(route.params.job_id)[0])
       console.log(details.employer_name)
  },[details.employer_name, route.params.job_id])
  return (
<View style={{flex:1,backgroundColor:'white'}}>
 {details&&<View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:200}}>
 <Image source={details.employer_logo?{uri:details.employer_logo}:require('../icons/default.png')} style={{height:100,width:100,borderRadius:20}}></Image>
</View>}
 <View style={{display:'flex',height:50,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontFamily:'Rowdies-Regular', color:'black',fontSize:20}}>{details.job_title}</Text>
  <Text style={{fontFamily:'Rowdies-Regular',color:'grey',top:10}}>{details.employer_name}/{details.job_city},{details.job_country}</Text>
 </View>
 <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',top:30}}>
  <TouchableOpacity onPress={()=>{
    setbtn1(true)
    setbtn2(false)
    setbtn3(false)
  }}>
    <View style={{borderRadius:15,backgroundColor:btn1?'midnightblue':'gainsboro',width:100,display:'flex',justifyContent:'center',alignItems:'center',height:40,borderColor:'black',opacity:btn1?1:0.6,borderWidth:1}}>
      <Text style={{color:btn1?'white':'black',fontFamily:'Rowdies-Regular'}}>About</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{
    setbtn1(false)
    setbtn2(true)
    setbtn3(false)
  }}>
    <View style={{borderRadius:15,backgroundColor:btn2?'midnightblue':'gainsboro',width:110,display:'flex',justifyContent:'center',alignItems:'center',height:40,borderColor:'black',opacity:btn2?1:0.6,borderWidth:1}}>
      <Text style={{color:btn2?'white':'black',fontFamily:'Rowdies-Regular'}}>Qualifications</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>{
    setbtn1(false)
    setbtn2(false)
    setbtn3(true)
  }}>
    <View style={{borderRadius:15,backgroundColor:btn3?'midnightblue':'gainsboro',width:120,display:'flex',justifyContent:'center',alignItems:'center',height:40,borderColor:'black',opacity:btn3?1:0.6,borderWidth:1}}>
      <Text style={{color:btn3?'white':'black',fontFamily:'Rowdies-Regular'}}>Responsibilities</Text>
    </View>
  </TouchableOpacity>
 </View>
</View>
  )
}
