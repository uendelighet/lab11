class ItemShop {
    constructor(id, title, price, description, category, image, stars, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.stars = stars;
        this.count = count;
    }

    html(pos) {
        return `
            <div class="product">
                <img src="${this.image}">
                <p>${this.title}</p>
                <p class="text-bold">$${this.price}</p>
                <div class="buttonDiv">
                    <button onclick="selected(${pos})">Comprar</button>
                </div>
            </div>
        `;
    }

    htmlDetail() {
        return `
            <div id="details" class="details">
                <img src="${this.image}" alt="">
                <div>
                    <h2>${this.title}</h2>
                    <p class="text-blue">${this.stars} stars (${this.count})</p>
                    <h2>$${this.price}</h2>
                    <p>${this.description}</p>
                    <h3 class="cMen">${this.category}</h3>
                    <button class="buy">Comprar ahora</button>
                    <button class="car">Agregar al carrito</button>
                </div>
            </div>
        `;
    }
}
