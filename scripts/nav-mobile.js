let nav_mobile_HTML = '';

nav_mobile_HTML += `
     <div class="mobile-view-header1">
            <img class="mobile-view-logo" src="images/assets/fine-logo-dark.png" width="150px" alt=""> 
            <i class="material-icons notification-icon-mobile-view">notifications</i>
        </div>
        <div class="search-bar-mobile-view">
            <input class="mobile-search-bar-view" type="text" placeholder="Search Fine">

            <button class="search-ai-camara">
              <i class="material-icons icon" style="color: #6b6b6b;">camera_alt</i>
            </button>
           
            <button class="mobile-view-serch-btn">
                <i class="material-icons icon" style="color: #fff;">search</i>
            </button>
        </div>

        <div class="nav-button-on-phone-view">
          <button>Explore</button>
          <button>Tools</button>
          <button>Toys</button>
          <button>Fashion</button>
          <button>Electronics</button>
          <button>Shoes</button>
          <button>jewelry</button>
          <button>Kids</button>
          <button>Beauty</button>
        </div>

`;


document.querySelector('.js-mobile-header-view').innerHTML = nav_mobile_HTML ;