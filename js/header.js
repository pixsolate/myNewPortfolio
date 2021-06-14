const headerContainer = `
<div class="header-container">
<!-- Logo -->
<a href="index.html" data-type="ajax-load" class="logo magnetize" data-dist="3" data-cursor-type="medium">
  <img class="white-logo" data-dist="4" data-cursor-type="medium" data-cursor-text="" src="images/logo.png" alt="">
  <img class="dark-logo" data-dist="4" data-cursor-type="medium" data-cursor-text="" src="images/logo-dark.png" alt="">
</a>  
<div class="nav-icon magnetize" data-dist="3" data-cursor-type="medium">
  <div class="nav-icon-inner" data-cursor-type="medium">
    <span></span>
    <span></span>
  </div>
</div>
</div>
`;

const mainHeader = document.querySelector(".half-menu");

mainHeader.innerHTML = headerContainer;