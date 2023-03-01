const data = async() => {
  const url = 'https://openapi.programming-hero.com/api/news/categories'
  const res = await fetch(url);
  const data = await res.json();
  getData(data.data.news_category);
}

const getData = data => {
    console.log(data);
    // data.forEach(categories => {
    //     console.log(categories);
    // })
}

data()