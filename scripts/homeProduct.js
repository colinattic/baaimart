// Fetch JSON data from the file
fetch('Datas Josn/products.json')
    .then(response => response.json())
    .then(data => {
        let home_products_HTML = '';

        // Iterate over each product and create HTML
        data.forEach((product) => {
            home_products_HTML += `
                <div class="home-product">
                    <div class="product-img-row">
                        <a href="product.html?id=${product.id}" class="product-link">
                            <img class="home-product-img" src="${product.image}" alt="${product.title}">
                        </a>
                    </div>
                    <div class="product-info-row">
                        <p class="home-product-title">${product.title}</p>
                        <div class="review-an-sold">
                            <img class="home--product-review" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="Rating">
                            <p class="product-sold-home"><span>${product.sold}</span> sold</p>
                        </div>
                        <p class="home-product-price">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
                        <p class="home-product-extra-off">${product.extra_off}</p>
                        <p class="home-product-free-ship-home">${product.free_shipping}</p>
                    </div> 
                </div>
            `;
        });

        // Insert the generated HTML into the container
        document.querySelector('.js-home-products').innerHTML = home_products_HTML;
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
