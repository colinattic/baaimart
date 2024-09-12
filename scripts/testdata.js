let mother_of_the_event = `




           <div class="web-header-home-product header-box">
    <!-- web header home page product open -->


    <div class="main-left">
        <!-- main left open -->

        <div class="header-product-box-left">
            <!-- Left-1 -->
            <div class="welcome-title">
                <!-- welcome title open -->
                <h2 style="color: rgb(253, 56, 56);">Today Offers</h2>
                <p>We Accepting <img src="images/assets/btc-logo.png" width="94px" alt=""></p>
                <!-- welcome title close -->
            </div>

            <div class="offer-products-header js-offer-pdt-header-part-1">
                <!-- offer product open -->
            </div>
            <!-- offer product close -->

        </div>
        <!-- Left-1 close -->

        <!-- next -->

        <div class="header-product-box-Left-2">
            <!-- Left-2 -->

            <div class="header-part-1">
                <!-- part-1 -->
                <div class="welcome-title-2">
                    <!-- welcome title open -->
                    <h2 style="color: rgb(14, 14, 14);">Weekly deals</h2>
                    <p>Low price in past 30 days</p>
                    <!-- welcome title close -->
                </div>

                <div class="offer-products-header-2 js-offer-products-header-2-week-deals">
                    <!-- product offer header 2 open -->
                </div>
                <!-- product offer header 2 close -->
            </div>
            <!-- part-1 close -->

            <!-- next between part one and two -->

            <div class="header-part-2">
                <!-- part-2 -->
                <div class="welcome-title-2">
                    <!-- welcome title open -->
                    <h2 style="color: rgb(13, 13, 13);">From us $3.99</h2>
                    <p>Any 3+ items</p>
                    <!-- welcome title close -->
                </div>

                <div class="offer-products-header-2 js_product_any_3_offer">
                    <!-- product offer header 2 open -->
                </div>
                <!-- product offer header 2 close -->
            </div>
            <!-- part-2 close -->

        </div>
        <!-- Left-2 close -->

    </div>
    <!-- main left close -->

    <!-- start on main right -->

    <div class="main-right">
        <!-- main right open -->

        <div class="welcome-title super-deal-welcome-title">
            <!-- welcome title open -->
            <h2 style="color: rgb(0, 0, 0);">Super deal</h2>
            <p>Make your day a Fine</p>
            <!-- welcome title close -->
        </div>

        <div class="products-right-line-offers">
            <!-- products offer right side open -->

            <div class="product-right-line-1 js-super-deal-product-line-1">
                <!-- product line 1 open -->
            </div>
            <!-- product line 1 close -->

            <div class="product-right-line-2 js-super-deal-product-line-2">
                <!-- product line 2 open -->
            </div>
            <!-- product line 2 close -->

        </div>
        <!-- products offer right side close -->

    </div>
    <!-- main right close -->

</div>
<!-- web header home page product close -->


`

document.querySelector('.js-header-offer-container').innerHTML = mother_of_the_event ;

// mother elament up



// Today Offers open 
const products_today_off = [{
    image: 'https://shorturl.at/n0GUG',
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
    offer_percentage: '-30%'
},{
    image: 'https://shorturl.at/vyhsE',
    currency: 'LKR',
    price: '999',
    price_senc: '.59',
    offer_percentage: '-10%'
},{
    image: 'https://shorturl.at/v5UfG',
    currency: 'LKR',
    price: '99',
    price_senc: '.99',
    offer_percentage: '-66%'
},{
    image: 'https://shorturl.at/FXb4P',
    currency: 'LKR',
    price: '349',
    price_senc: '.99',
    offer_percentage: '-6%'
}
];

let products_today_off_HTML = '';


products_today_off.forEach((product) => {
    products_today_off_HTML += `     <div class="offer-product">
                 <div class="product-photo-grid-for-today-offer">
                  <img class="offer-product-img" src="${product.image}" alt="">
                 </div>
                 
                 <div class="product-info-grid-for-today-offer">
                    <div class="offer-price-row-home">
                        <p class="offer-price-home">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
                        <p class="offer-percentage-home">${product.offer_percentage}</p>
                    </div> 
                  </div>   
                </div>`
});



document.querySelector('.js-offer-pdt-header-part-1').innerHTML = products_today_off_HTML ;
document.querySelector('.js-offer-pdt-header-mobile-part-1').innerHTML = products_today_off_HTML ;
// Today offer close


// Weekly deals open 

const products_Weekly_deals = [{
    image: 'https://shorturl.at/Mn6z4',
    currency: 'LKR',
    price: '99',
    price_senc: '.99',   
},{
    image: 'https://shorturl.at/khKHi',
    currency: 'LKR',
    price: '99',
    price_senc: '.99', 
},{
    image: 'https://shorturl.at/bknTO',
    currency: 'LKR',
    price: '10,999',
    price_senc: '.78', 
}
]

let products_Weekly_deals_HTML = '';

products_Weekly_deals.forEach((product) => {
    products_Weekly_deals_HTML +=  
    ` <div class="offer-product-2">
        <img class="offer-product-img-2" src="${product.image}" alt="">
        
        <div class="offer-price-row-home">
        <p class="offer-price-home">${product.currency}<span>${product.price}</span>${product.price_senc}</p>
        </div>
    </div>`
});


document.querySelector('.js-offer-products-header-2-week-deals').innerHTML = products_Weekly_deals_HTML ;

// Weekly deals close

// from us $3.99 open

const products_any_3 = [{
    image: 'https://shorturl.at/h8cLv',
    currency: 'LKR',
    price: '89',
    price_senc: '.99', 
},{
    image: 'https://shorturl.at/00BL3',
    currency: 'LKR',
    price: '79',
    price_senc: '.99', 
},{
    image: 'https://shorturl.at/yezmJ',
    currency: 'LKR',
    price: '79',
    price_senc: '.99', 
}];

let products_any_3_HTML = '';

products_any_3.forEach((product) => {
    products_any_3_HTML += `
                    <div class="offer-product-2">
                    <img class="offer-product-img-2" src="${product.image}" alt="">
      
                    <div class="offer-price-row-home">
                      <p class="offer-price-home">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
                    </div>
                  </div>`
    
});



document.querySelector('.js_product_any_3_offer').innerHTML = products_any_3_HTML;

// from us $3.99 open close

// supper deal open 

//line 1 open
const product_super_deel_line_1 =[{
    image: 'images/assets/Untitled design.png',
    currency: 'LKR',
    price: '99',
    price_senc: '.88', 

}];

let product_super_deel_line_1_HTML = '' ;

product_super_deel_line_1.forEach((product) => {
    product_super_deel_line_1_HTML += `
            <div class="offer-product-3">
                    <img class="offer-product-img-3" src="${product.image}" alt="">
      
                    <div class="offer-price-row-home">
                      <p class="offer-price-home">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
                    </div>
                  </div>
    `
});

document.querySelector('.js-super-deal-product-line-1').innerHTML = product_super_deel_line_1_HTML ;
//line 1 close

//line 2 open

const product_super_deel_line_2 = [{
    image: 'https://shorturl.at/Q0yUK',
    currency: 'LKR',
    price: '499',
    price_senc: '.99',
},{
    image: 'https://shorturl.at/6TsnC',
    currency: 'LKR',
    price: '559',
    price_senc: '.99',
}];

let product_super_deel_line_2_HTML = '' ;

product_super_deel_line_2.forEach((product) =>{
    product_super_deel_line_2_HTML += `
            <div class="offer-product-right-2">
                  <img class="offer-product-img-2" src="${product.image}" alt="">
    
                  <div class="offer-price-row-home">
                    <p class="offer-price-home">${product.currency} <span>${product.price}</span>${product.price_senc}</p>
                  </div>
                </div>`
    
})

document.querySelector('.js-super-deal-product-line-2').innerHTML = product_super_deel_line_2_HTML;



// end