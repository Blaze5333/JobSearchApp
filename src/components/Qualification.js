import React from 'react'
import {View,Text} from 'react-native'
export default function Qualification({job_qualification}) {
  return (
<View style={{top:25,paddingHorizontal:10}}>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',fontSize:40,left:5}}>Qualifications:</Text>
    {job_qualification&&job_qualification?.map((elem)=>(<Text style={{color:'grey',fontFamily:'Rowdies-Regular',fontSize:18}}>• {elem}</Text>))}
    {!job_qualification?<Text style={{color:'black',fontFamily:'Rowdies-Regular',fontSize:25}}>No Data Available</Text>:''}
   </View>
  )
}
