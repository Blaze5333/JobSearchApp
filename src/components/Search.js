/*eslint-disable*/
import React,{useEffect,useState} from 'react'
import { View,FlatList,Text,ActivityIndicator ,TouchableOpacity,Image,ScrollView} from 'react-native'
import axios from 'axios'
import NearbyJobs from './NearbyJobs'
import {API_KEY} from '@env'
export default function Search({route,navigation}) {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const fetchApi=async()=>{
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
              query:route.params.searchTerm || 'any',
              employment_types:route.params.category,
              page: page,
              num_pages: '1'
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
            setdata(response.data.data)
            setloading(false)
            console.log('dataMustafa',data[0])
            } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      fetchApi()
    }, [page])
  return (
    <ScrollView>
   <View style={{top:20}}>
   <View style={{paddingHorizontal:10}}>
    <Text style={{fontSize:40,fontFamily:'Rowdies-Regular',color:'black'}}>{route.params.searchTerm?route.params.searchTerm:route.params.category}</Text>
    <Text style={{fontSize:25,color:'black',fontFamily:'Rowdies-Regular',bottom:10}}>Job Opportunities</Text>
   </View>
    {!loading&&<FlatList 
     data={data}
     ItemSeparatorComponent={()=>(<View style={{height:20}}></View>)}
     renderItem={({item})=>(
        <NearbyJobs {...item} navigation={navigation}></NearbyJobs>
     )}
     >

     </FlatList>}
   {loading&& <ActivityIndicator color={'green'} size={'large'}></ActivityIndicator>}
   <View style={{height:100,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
    <TouchableOpacity
    onPress={()=>{ if(page>1){setpage(page-1)}}}>
        <View style={{backgroundColor:'green',borderRadius:10,height:35,justifyContent:'center'}}>
            <Image source={require('../icons/leftArrow.png')}></Image>
        </View>
    </TouchableOpacity>
    <Text style={{color:'black', left:10,right:10,fontSize:20,fontFamily:'Rowdies-Regular'}}>{page}</Text>
    <TouchableOpacity onPress={()=>{
        setpage(page+1)
    }}>
        <View style={{backgroundColor:'green',borderRadius:10,height:35,justifyContent:'center',left:20}}>
            <Image source={require('../icons/rightArrow.png')}></Image>
        </View>
    </TouchableOpacity>
   </View>
   </View>
   </ScrollView>
  )
}
