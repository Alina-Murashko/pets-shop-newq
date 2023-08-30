const shopItems = document.querySelector('#shop-items');
const nothingFound = document.querySelector('#nothing-found');
const itemTemplate = document.querySelector('#item-template');

const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

function getTemplateCard(item) {
 const {title, description, tags, price, img} = item;
 const myCard = itemTemplate.content.cloneNode(true);

 myCard.querySelector('h1').textContent = title;
 myCard.querySelector('p').textContent = description;
 myCard.querySelector('.price').textContent = price;
 myCard.querySelector('img').src = img;

 const CardTeg = myCard.querySelector('.tags');

 tags.forEach(tag => {
  const tagElement = document.createElement('span');
  tagElement.textContent = tag;
  tagElement.classList.add = 'tag';
  CardTeg.append(tagElement);
 });

 return  myCard;

}

function createCard (arr) {
  items.forEach(item => {
    const shopCard = getTemplateCard(item);
    shopItems.append(shopCard);
  });
}

createCard (items);

////Поиск

const input = document.querySelector('#search-input');
const button = document.querySelector('#search-btn');

function getInput(item) {
  return  item.value.trim().toUpperCase().slice(0,1) + item.value.trim().toLowerCase().slice(1);
}



function searchValue() {
  shopItems.innerHTML = '';
  const valueInput = getInput(input);
 
  const resultSearch = items.filter(item => {
    return item.title.includes(valueInput)});

  if (resultSearch.length === 0) {
    nothingFound.textContent = 'Ничего не найдено!';
    shopItems.append(nothingFound);
  } else  {
    resultSearch.forEach(item => {
      shopItems.append(getTemplateCard(item));
    })
  } 
}

button.addEventListener('click', searchValue);
input.addEventListener('search', searchValue);