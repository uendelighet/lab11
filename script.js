const container = document.getElementById('products');
const detailsDiv = document.getElementById("detailsDiv");
const starsDiv = document.getElementById("stars");
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const objList = [];

async function getItemShop() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        const productObj = new ItemShop(data[i].id, data[i].title, data[i].price, data[i].description, 
            data[i].category, data[i].image, data[i].rating.rate, data[i].rating.count);
        objList.push(productObj);
    }

    console.log(objList);

    for (let i = 0; i < objList.length; i++) {
        const product = objList[i];
        container.innerHTML += product.html(i);
    }
}

function selected(pos) {
    const product = objList[pos];
    window.location.href = `./product.html?id=${product.id}`;
}

async function getItemDetails() {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await response.json();
    const product = new ItemShop(json.id, json.title, json.price, json.description, 
        json.category, json.image, json.rating.rate, json.rating.count);

    detailsDiv.innerHTML = product.htmlDetail();
}

getItemShop();
getItemDetails();
