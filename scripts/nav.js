let nav_html = '';

nav_html += `
     <div class="menu-bar-nav" style="display: none;">
          <img src="images/assets/menu_icon.png" width="25px" alt="">
        </div>
        <a href="/">
          <!--Header Logo-->
          <img class="Header-logo" src="images/assets/fine-logo-light.png" width="100px" alt="">
        </a>
    
        <!--Delivery to Country-->
        <div class="nav-country">
          <img src="images/assets/location_icon.png" height="20" alt="">
    
          <div>
            <p>Deliver to</p>
            <h1>Sri Lanka</h1>
          </div>
         
        </div>
        <!--Search Nav-->
        <div class="nav-search">
          <!--Search GateGory Nav-->
          <div class="nav-search-gategory">
          
             <p>All</p>
            <img src="images/assets/dropdown_icon.png" height="12" alt="">
          </div>
          
          <!--input search-->
            <input type="text" class="nav-search-input" placeholder="Search Fine">
            <img src="images/assets/search_icon.png" class="nav-search-icon" alt="">
        </div>
    
        <!--language an flag-->
        <div class="nav-language">
          <img src="images/assets/flag-sri-lanka.svg" width="25px" alt="">
          <p>EN</p>
          <img src="images/assets/dropdown_icon.png" width="8px" alt="">
        </div>
    
        <!--Hello sign-->
    
        <div class="nav-text">
          <p><a href="/signin.html">Hello, Sign in</a></p>
          <h1>Account & Lists <img src="images/assets/dropdown_icon.png" width="8px" alt=""> </h1>
        </div>
    
        <!--order an return-->
        <div class="order-an-return-btn nav-text">
          <p>Return</p>
          <h1>& Orders</h1>
        </div>
    
        <a href="signin.html" class="mobile-user-icon" style="display: none;">
          <p >Sign In&#9656</p>
          <img src="images/assets/user.png" alt="">
        </a>
    

        <a href="/cart.html" class="nav-cart">
          <img src="images/assets/cart_icon.png" width="35px" alt="">
          <h4>Cart</h4>
        </a>
`;


document.querySelector('.js-nav-bar').innerHTML = nav_html;