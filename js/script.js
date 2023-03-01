const data = async() => {
  const url = 'https://openapi.programming-hero.com/api/news/categories'
  const res = await fetch(url);
  const data = await res.json();
  getData(data.data.news_category);
}

const getData = data => {
    //  console.log(data);
    const categoriesSection = document.getElementById('categories')
    data.forEach(categories => {
        //console.log(categories);
        const div = document.createElement('div');
        div.innerHTML += `<p><a class="text-gray-600 font-semibold text-sm" href="#">${categories.category_name}</a></p>`
        categoriesSection.appendChild(div)
    })
}

data()

// get the cards

const getCards = async(category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    getCardsData(data.data);
}

getCards('03')

const getCardsData = data => {
    // console.log(data);
    const cards = document.getElementById('cards');
    data.forEach(items => {
        console.log(items);
        const singleCard = document.createElement('div');
        singleCard.className = 'mb-5'
        singleCard.innerHTML += `<div class="card card-side bg-base-100 shadow-xl">
        <img class="w-1/4" src="${items.image_url}" alt="Movie"/>
        <div class="card-body">
          <h2 class="card-title text-lg font-lg">${items.title}</h2>
          <p class="font-lg text-md">${items.details.substring(200, 'cut')}</p>
          <div class="card-actions justify-between mt-4 items-center">

          <div class="flex gap-4">
          <img class="w-10 rounded-full" src="${items.author.img}" alt="">
          <div>
              <p class="text-sm font-semibold">${items.author.name}</p>
              <p class="text-sm font-semibold">${items.author.published_date}</p>
          </div>
      </div>

      <div class="flex gap-2">
          <p><i class="fa-solid fa-eye"></i></p>
          <p>${items.total_view}</p>
      </div>

      <div>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      </div>

      <div>
      <i class="fa-solid fa-arrow-right"></i>
      </div>
          </div>
        </div>
      </div>`;
      cards.appendChild(singleCard)
    })
}

// getCardsData('01')