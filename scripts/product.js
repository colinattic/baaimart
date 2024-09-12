const product_detail_HTML = `
     <div class="product-display"> <!--product display open-->

        
        <div class="product-d-image"> <!--product image open-->
            <div class="product-icons">
                <img src="images/assets/product_img.jpg" width="60" alt="">
                <img src="images/assets/product_img.jpg" width="60" alt="">
                <img src="images/assets/product_img.jpg" width="60" alt="">
                <img src="images/assets/product_img.jpg" width="60" alt="">
                <img src="images/assets/product_img.jpg" width="60" alt="">
              </div>

              <div class="product-main-image">
                <img src="images/assets/box1-1.jpg" width="400" alt="">
              </div>
              
        </div> <!--Product image close-->

        <div class="product-d-details"> <!--product details open-->
            <p class="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi impedit pariatur soluta mollitia dolorum quisquam omnis architecto voluptatibus a sint
            </p>

            <p class="brand-store">Visit the BENGOO Store</p>

            <div class="product-rating">
                <div>
                  <div>4.3 <img src="images/assets/rating_img.png" height="20px"></div>
                  <p>1 rating | Search this page</p>
                </div>

                <p><span>#1 Best Seller</span> in PC Game Headsets</p>
                <h5>10K+ bought in past month</h5>
                <hr>
            </div>


            <div class="product-d-price">
                <div>
                  <p>-35%</p>
                  <h1>Rs. <span>4,999</span> </h1>
                </div>
                  <h5>List price: Rs. <span>6,499</span></h5>
                  <p>Get <b>Fast, free Shipping</b> with <span>Fine</span> </p>
                  <p><span>Free Returns</span></p>
                  <p>Join <span>Fine</span> to buy this item at Rs. 999</p>
                  <p>Available at a lower price from <span>other sellers</span> that may not offer free Prime shipping.</p>
              </div>
              
              <div class="product-color-selection"> <!--product color selection open-->
                <p>Color: <b>Blue</b></p>
                <div class="product-color-options">

                    <div class="option">
                        <img src="images/assets/product_orange_img.jpg" width="30px" alt="">
                        <p>Rs 4999</p>
                      </div>

                      <div class="option">
                        <img src="images/assets/product_img.jpg" width="30px" alt="">
                        <p>Rs 4999</p>
                      </div>

                      <div class="option">
                        <img src="images/assets/product_img.jpg" width="30px" alt="">
                        <p>Rs 5999</p>
                      </div>

                      <div class="option">
                        <img src="images/assets/product_img.jpg" width="30px" alt="">
                        <p>Rs 4999</p>
                      </div>

                      <div class="option">
                        <img src="images/assets/product_img.jpg" width="30px" alt="">
                        <p>Rs 5999</p>
                      </div>

                      <div class="option">
                        <img src="images/assets/product_img.jpg" width="30px" alt="">
                        <p>Rs 5999</p>
                      </div>

                </div>
              </div> <!--product color selection Close-->

              <div class="product-info">
                <p><b>Brand</b></p> <p>BENGOO</p>
                <p><b>Model Name</b></p> <p>G9000</p>
                <p><b>Color</b></p> <p>Blue</p>
                <p><b>Form Factor</b></p> <p>Over Ear</p>
                <p><b>Connectivity Technology</b></p> <p>Wired</p>
              </div>
              <hr>

              <div class="product-description"> <!--product-description Open-->
                <h1>About this item</h1>
                <ul>
                    <li>Multi-platform Compatible Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft adapter (Not Included) when connecting with an old version Xbox One controller.</li>
                    <li>Waterproof with mud proof</li>
                  </ul>

              </div> <!--product-description closing-->

`

// document.querySelector('.js-product-display').innerHTML = product_detail_HTML;