/*eslint-disable*/
import axios from "axios";
export const fetchApi=async(query)=>{
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: query,
        headers: {
          'X-RapidAPI-Key':'014abe6e35msh76ef70851596118p1e000fjsn01ac2f8b6c4d',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}