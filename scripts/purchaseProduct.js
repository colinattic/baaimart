let product_purchase_HTML = '';

product_purchase_HTML += `
           <div class="title-to-buy-from">
                <h3>Pay:</h3>  <img src="images/assets/visa-master.png" alt="" width="60px"> <img src="images/assets/btc-logo-percutes.png" alt="" width="60px"> <img src="images/assets/binance-pay.png" alt="" width="60px">
            </div>

            <h1 class="price">Rs<span>999</span></h1>
            <div class="gap">
              <p>Get <b>Fast, free shipping</b> with <span>Baai Mart</span></p>
              <p><span>Free Return</span></p>
            </div>

            <div class="gap">
              <p><span>FREE delivery</span> <b>Saturday</b>,</p>
              <p><b>January 27</b> on orders shipped by BaaiMart over Rs 399</p>
            </div>

            <div class="gap">
              <p>Or fastest delivery <b>Tomarroe</b>, <b>January 23</b> Order with <span>10 hrs 59 mins</span></p>
            </div>

            <div class="delivery-location">
              <img src="images/assets/location_icon_dark.png" width="20px" alt="">
              <p><span>Deliver to New York 10014</span></p>
            </div>

            <h2 class="product-stock">In Stock</h2>
            <select class="product-quantity">
              <option value="1">Quantity: 1</option>
              <option value="2">Quantity: 2</option>
              <option value="3">Quantity: 3</option>
              <option value="1">Quantity: 4</option>
              <option value="2">Quantity: 5</option>
              <option value="3">Quantity: 6</option>
            </select>
            <button class="btn">Add to Cart</button>
            <button class="btn product-buy">Buy Now</button>

            <div class="product-seller-info">
              <p>Ships from</p> <p> <span>Baai Mart</span></p>
              <p>Sold by</p> <p> <span>Baai Mart</span></p>
              <p>Return</p> <p> <span>Eligible for Return, Refund or relacement within 30 days of receipt</span></p>
              <p>Payment</p> <p> <span>Secure transction</span></p>
            </div>
            <hr>
            <button class="product-add-list">Add to List</button>
`;

document.querySelector('.js-product-d-purchase').innerHTML = product_purchase_HTML ;