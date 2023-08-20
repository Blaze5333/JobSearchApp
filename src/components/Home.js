/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { SafeAreaView,View,Text,Image, TouchableOpacity, FlatList,ScrollView,ActivityIndicator,LogBox } from 'react-native'
import { TextInput } from 'react-native-paper'
// import { fetchApi } from './fetchApi'
import axios from 'axios'
import PopularJobCard from './popularJobCard'
import { dummyData, particularJob } from './data'
import NearbyJobs from './NearbyJobs'
import {API_KEY} from '@env'
// import LoaderKit from 'react-native-loader-kit'
export default function Home({navigation}) {
  const [data, setdata] = useState()
  const [loading, setloading] = useState(false)
  const [category, setcategory] = useState('FULLTIME')
  const [searchTerm, setsearchTerm] = useState()
  const [active, setactive] = useState()
    const fetchApi=async()=>{
      const options = {
          method: 'GET',
          url: 'https://jsearch.p.rapidapi.com/search',
          params: {
            query: 'React developer in India',
            page: '1',
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
          console.log('dataMustafa',data)
          } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchApi()
  }, [])
  
  return (
   <ScrollView>
     <View>
      <Text style={{color:"black",top:10,left:10,fontFamily:'Rowdies-Regular',fontSize:25}}>Hello Mustafa,</Text>
      <Text style={{color:"black",top:5,left:10,fontFamily:'Rowdies-Regular',fontSize:25}}>Find Your Perfect Job</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TextInput mode='outlined' onChangeText={text=>setsearchTerm(text)} value={searchTerm}  label={'What are you looking for ?'} style={{width:320,height:60,marginHorizontal:10,borderRadius:20,type:'outlined'}} ></TextInput>
      <TouchableOpacity style={{width:50,height:60}} onPress={()=>{
           navigation.navigate('Search',{searchTerm,category})
      }}>
        <View style={{backgroundColor:"red",height:55,width:55,right:5,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15}}>
          <Image source={require('../icons/search.png')}></Image>
        </View>
      </TouchableOpacity>
    </View> 
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
     <TouchableOpacity onPress={()=>{
      setcategory('FULLTIME')
     }}>
     <View style={{backgroundColor: '#ffffff',width:70,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:category==='FULLTIME'?1:0.4,top:28,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Full-time</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
      setcategory('PARTTIME')
     }}>
     <View style={{backgroundColor: '#ffffff',width:70,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:category==='PARTTIME'?1:0.4,top:28,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Part-time</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
      setcategory('CONTRACTOR')
     }}>
     <View style={{backgroundColor: '#ffffff',width:80,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:category==='CONTRACTOR'?1:0.4,top:28,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:11}}>CONTRACTOR</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
      setcategory('INTERN')
     }}>
     <View style={{backgroundColor: '#ffffff',width:70,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:category==='INTERN'?1:0.4,top:28,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold'}}>INTERN</Text>
     </View>
     </TouchableOpacity>
    </View>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',left:20,top:30,fontSize:25}}>Popular Jobs</Text>
    {loading?<ActivityIndicator style={{top:30}} color={'green'} size={'large'}></ActivityIndicator>:''}
  <View style={{top:40}}>
    {data&&<FlatList
     showsHorizontalScrollIndicator
     alwaysBounceHorizontal
    ItemSeparatorComponent={()=>(<View style={{width:20}}></View>)}
    horizontal
    scrollToOverflowEnabled
    data={data}
    renderItem={({item})=>(
      <PopularJobCard {...item} navigation={navigation} active={active} setactive={setactive}></PopularJobCard>
    )}
    ></FlatList>}
    </View>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',left:20,top:40,fontSize:25}}>Nearby Jobs</Text>
    {loading?<ActivityIndicator style={{top:30}} color={'green'} size={'large'}></ActivityIndicator>:''}
    <View style={{top:40}}>
      <FlatList 
      data={data}
      renderItem={({item})=>(<NearbyJobs {...item} navigation={navigation}/>)}
      ItemSeparatorComponent={()=>(<View style={{height:20}}></View>)}
      contentContainerStyle={{
        flexGrow:1,
      }}

       scrollToOverflowEnabled
      keyExtractor={item=>item.id}
      ></FlatList>
      <View style={{height:50}}></View>
    </View>
    </View>
   </ScrollView>
  )
}
