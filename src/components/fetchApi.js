/*eslint-disable*/
import axios from "axios";
export const fetchApi=async(query)=>{
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: query,
        headers: {
          // 'X-RapidAPI-Key':'d995942a83msh0fbeaac7da9a7d9p166d5djsn755c6941d252',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      try {
        const response =  await axios.request(options);
        // console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
    }
}