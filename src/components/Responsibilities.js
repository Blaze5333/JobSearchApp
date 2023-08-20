import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
export default function Responsibilities(job_responsibilities) {
    useEffect(() => {
     console.log(job_responsibilities)
    }, [job_responsibilities])
  return (
<View style={{top:25,paddingHorizontal:10}}>
    <Text style={{color:'black',fontFamily:'Rowdies-Regular',fontSize:40,left:5}}>Responsibilities:</Text>
    {job_responsibilities!==undefined?job_responsibilities.job_responsibilities.map((elem)=>(<Text style={{color:'grey',fontFamily:'Rowdies-Regular',fontSize:18}}>• {elem}</Text>))
    :<Text style={{color:'black',fontFamily:'Rowdies-Regular',fontSize:25}}>No Data Available</Text>}
   </View>
  )
}
