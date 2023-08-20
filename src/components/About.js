import React from 'react'
import { Text, View } from 'react-native'
export default function About({job_description}) {
  return (
   <View style={{top:25,paddingHorizontal:10}}>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',fontSize:40,left:5}}>About</Text>
    {job_description?<Text style={{color:'grey',fontFamily:'Rowdies-Regular',fontSize:18}}>{job_description}</Text>
    :<Text style={{color:'grey',fontFamily:'Rowdies-Regular',fontSize:18}}>No Data Available</Text>}
   </View>
  )
}
