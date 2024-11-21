const BASE_URL = 'https://newsapi.org/v2';
let country = 'us';
export const fetchDataFromApi = async() => {
    let response = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
    let data = await response.json();
    return data;
}

export const fetchNewsFromCategory = async(category) => {
    let response = await fetch(`${BASE_URL}/top-headlines/sources?category=${category}&apiKey=${process.env.REACT_APP_NEWS_KEY}`);
    let data = await response.json();
    return data;
}
//https://newsapi.org/v2/top-headlines/sources?category=entertainment&apiKey=a950e006e11742f6b3d1e6ced62f3e12