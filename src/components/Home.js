/*eslint-disable*/
import React,{useState,useEffect} from 'react'
import { SafeAreaView,View,Text,Image, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import { fetchApi } from './fetchApi'
import PopularJobCard from './popularJobCard'
import { dummyData } from './data'
import NearbyJobs from './NearbyJobs'
export default function Home({navigation}) {
  const [btn1, setbtn1] = useState(false)
  const [btn2, setbtn2] = useState(false)
  const [data, setdata] = useState([])
  useEffect(() => {
    // setdata(
    //   fetchApi({
    // query: 'Python developer in Texas, USA',
    // page: '1',
    // num_pages: '1'}))
    setdata(dummyData.data)
    console.log(data)
  },[])
  
  return (
   <ScrollView>
     <View>
      <Text style={{color:"black",top:10,left:10,fontFamily:'Rowdies-Regular',fontSize:25}}>Hello Mustafa,</Text>
      <Text style={{color:"black",top:5,left:10,fontFamily:'Rowdies-Regular',fontSize:25}}>Find Your Perfect Job</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TextInput mode='outlined'  label={'What are you looking for ?'} style={{width:320,height:60,marginHorizontal:10,borderRadius:20,type:'outlined'}} ></TextInput>
      <TouchableOpacity style={{width:50,height:60}}>
        <View style={{backgroundColor:"red",height:55,width:55,right:5,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:15}}>
          <Image source={require('../icons/search.png')}></Image>
        </View>
      </TouchableOpacity>
    </View> 
    <View style={{display:'flex',flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{
      if(btn1){
        setbtn1(false)
      }
      else{
        setbtn1(true)
      }
     }}>
     <View style={{backgroundColor: '#ffffff',width:70,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:btn1?1:0.4,top:28,left:15,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Full-time</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{
      if(btn2){
        setbtn2(false)
      }
      else{
        setbtn2(true)
      }
     }}>
     <View style={{backgroundColor: '#ffffff',width:70,height:25,display:'flex',justifyContent:'center',alignItems:'center',opacity:btn2?1:0.4,top:28,left:25,borderRadius:10,borderColor:'black',borderWidth:2}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Part-time</Text>
     </View>
     </TouchableOpacity>
    </View>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',left:20,top:30,fontSize:25}}>Popular Jobs</Text>
    <View style={{top:40}}>
    {data&&<FlatList
     showsHorizontalScrollIndicator
     alwaysBounceHorizontal
    ItemSeparatorComponent={()=>(<View style={{width:20}}></View>)}
    horizontal
    scrollToOverflowEnabled
    data={data}
    renderItem={({item})=>(
      <PopularJobCard {...item} navigation={navigation}></PopularJobCard>
    )}
    ></FlatList>}
    </View>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',left:20,top:40,fontSize:25}}>Nearby Jobs</Text>
    <View style={{top:40}}>
      <FlatList 
      data={data}
      renderItem={({item})=>(<NearbyJobs {...item}/>)}
      ItemSeparatorComponent={()=>(<View style={{height:20}}></View>)}
      contentContainerStyle={{
        flexGrow:1,
      }}

       scrollToOverflowEnabled
      keyExtractor={item=>item.id}
      ></FlatList>
    </View>
    </View>
   </ScrollView>
  )
}
