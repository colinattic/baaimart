const home_products = [{
    image: 'https://shorturl.at/O8ct3',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4
    },
    sold: 942,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: '',
    free_shipping: '',
},{
    image: 'https://shorturl.at/ayffL',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:1
    },
    sold: 26,
    currency: 'LKR',
    price: '79,559',
    price_senc: '.99',
    extra_off: 'Extra off 6% with coins',
    free_shipping: 'Free shipping',
},{
    image: 'https://shorturl.at/NvMcG',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars: 4.5,
    },
    sold: 42,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: '',
    free_shipping: '',
},{
    image: 'https://shorturl.at/J87Bn',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4.5
    },
    sold: 342,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: 'Extra off 3% with coins',
    free_shipping: '',
},{
    image: 'https://shorturl.at/gB5V3',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:1.5
    },
    sold: 3,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: 'Extra off 3% with coins',
    free_shipping: 'Free shipping',
},{
    image: 'https://shorturl.at/TqFD2',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4.5
    },
    sold: '11K',
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: ``,
    free_shipping: 'Free shipping',
},{
    image: 'https://shorturl.at/O8ct3',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4
    },
    sold: 942,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: '',
    free_shipping: '',
},{
    image: 'https://shorturl.at/ayffL',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:1
    },
    sold: 26,
    currency: 'LKR',
    price: '79,559',
    price_senc: '.99',
    extra_off: 'Extra off 6% with coins',
    free_shipping: 'Free shipping',
},{
    image: 'https://shorturl.at/NvMcG',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars: 4.5,
    },
    sold: 42,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: '',
    free_shipping: '',
},{
    image: 'https://shorturl.at/J87Bn',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4.5
    },
    sold: 342,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: 'Extra off 3% with coins',
    free_shipping: '',
},{
    image: 'https://shorturl.at/gB5V3',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:1.5
    },
    sold: 3,
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: 'Extra off 3% with coins',
    free_shipping: 'Free shipping',
},{
    image: 'https://shorturl.at/TqFD2',
    title: 'Ocean strap For Apple watch band',
    rating: {
        stars:4.5
    },
    sold: '11K',
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    extra_off: ``,
    free_shipping: 'Free shipping',
}
];

let home_products_HTML = '';

home_products.forEach((product) => {
    home_products_HTML += `
            <div class="home-product">
    <div class="product-img-row">
      <img class="home-product-img" src="${product.image}" alt="">
    </div>

    <div class="product-info-row">
      <p class="home-product-title">${product.title}</p>
      <div class="review-an-sold">
        <img class="home--product-review" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
        <p class="product-sold-home"><span>${product.sold}</span> sold</p>
      </div>
      
      <p class="home-product-price">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
      <p class="home-product-extra-off">${product.extra_off}</p>
      <p class="home-product-free-ship-home">${product.free_shipping}</p>
    </div> 
  </div> 
    `
});

document.querySelector('.js-home-products').innerHTML = home_products_HTML ;