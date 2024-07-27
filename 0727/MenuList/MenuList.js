const menu = document.querySelector('#menu');

const lists =[
    {
        name:'추아메니',
        img : 'chuamani.jpg',
        price : 100
    },
    {
        name:'킴펨베',
        img : 'kimpembe.webp',
        price : 200
    },
    {
        name:'카마빙가',
        img : 'camavinga.jpg',
        price : 300
    },
    {
        name:'뎀벨레',
        img : 'dembelle.webp',
        price : 400
    },
    {
        name:'은쿤쿠',
        img : 'unkunku.jpg',
        price : 500
    },
    {
        name:'콜로 무아니',
        img : 'muani.jpg',
        price : 600
    },
]

for(let i=0;i<lists.length;i++){
    const {name,img,price}=lists[i];
    const content = `<div>
        <img src="./images/${img}">
        <h2>${name}</h2>
        <p>${price}억원</p>
    </div>`;

    menu.insertAdjacentHTML('beforeend',content);

}