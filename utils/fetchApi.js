import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '6612e37dd2mshcda1b49d16f7cabp1ad1fajsnfec3923d3eae',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}