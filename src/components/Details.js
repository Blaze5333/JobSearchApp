/*eslint-disable*/
import React from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,Linking,ActivityIndicator } from 'react-native'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { particularJob } from './data'
import About from './About'
import Qualification from './Qualification'
import Responsibilities from './Responsibilities'
import {API_KEY} from '@env'
export default function Details({employer_name,employer_logo,route}) {
  const [details, setdetails] = useState({})
  const [btn1, setbtn1] = useState(true)
  const [btn2, setbtn2] = useState(false)
  const [btn3, setbtn3] = useState(false)
  const [loading, setloading] = useState(false)
  const fetchApi=async()=>{
    console.log(route.params.job_id)
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/job-details',
        params: {
          job_id: route.params.job_id,
          extended_publisher_details: 'true'
        },
        headers: {
          'X-RapidAPI-Key':API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      try {
        setloading(true)
        const response =  await axios.request(options);
        // console.log(response.data);
        setdetails(response.data.data[0])
        setloading(false)
        console.log('dataMustafa',details.job_highlights)
        } catch (error) {
        console.log(error);
    }
}
  useEffect(() => {
    fetchApi()
  },[])
  return (
    <ScrollView>
<View style={{flex:1,backgroundColor:'white'}}>
 {details&&<View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:200}}>
 <Image source={details.employer_logo?{uri:details.employer_logo}:require('../icons/default.png')} style={{height:150,width:150,borderRadius:25,borderWidth:0.3,borderColor:'black'}}></Image>
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
 
 {!loading&&btn1&&<About job_description={details.job_description} ></About>}
 {!loading&&btn2&& <Qualification job_qualification={details.job_highlights.Qualifications}></Qualification>}
 {!loading&&btn3&& <Responsibilities job_responsibilities={details.job_highlights.Responsibilities?details.job_highlights.Responsibilities:undefined}></Responsibilities>}
{loading?<ActivityIndicator size={'large'} style={{top:30}} color={'green'}></ActivityIndicator>:''} 
<View style={{display:'flex',justifyContent:'center',alignItems:'center',top:20,height:100}}> 
 <TouchableOpacity onPress={async()=>{
  await Linking.openURL(details.job_apply_link)
 }}>
  <View style={{backgroundColor:'green',width:200,justifyContent:'center',alignItems:'center',height:50,borderRadius:20}}>
    <Text style={{fontFamily:'Rowdies-Regular',color:'white',fontSize:20}}>Apply for Job</Text>
  </View>
 </TouchableOpacity>
 </View>
</View>
</ScrollView>
  )
}
