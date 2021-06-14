const rightMenu =`
<div class="right-menu">
<div class="outer">
  <div class="inner">
    <div class="row">
      <!-- Social Links -->
      <ul class="social col-xl-4 offset-xl-1 col-md-4 offset-md-1">
        <li class="menu-text">Social</li>
        <li><a data-cursor-type="medium" href="https://www.linkedin.com/in/federico-rodriguez-197b4182/" style="cursor: none;">Linkedin</a></li>
      </ul>
    <!-- Nav Menu -->
    <nav class="col-xl-6 col-md-6 col-sm-5 offset-sm-1">
      <ul>
        <li class="menu-text">Menu</li>
        <li><a data-type="ajax-load" data-cursor-type="medium" href="index.html">Home</a></li>
        <li><a data-cursor-type="medium" href="contact.html">Contact Me</a></li>
      </ul>
    </nav>
  </div>
 </div>
</div>
<div class="bottom-mail">
  <div class="menu-text">Email</div>
  <a href="mailto:federod2001@gmail.com">federod2001@gmail.com</a>
</div>
</div>
`;

const menuRight = document.querySelector(".overlay-bg");

menuRight.innerHTML = rightMenu;