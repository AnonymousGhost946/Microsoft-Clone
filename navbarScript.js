   // Toggle visibility of the first submenu (More)
   const moreSubmenu = document.getElementById("moreSubmenu");
   const submenu = document.querySelector(".submenu");
   
   moreSubmenu.addEventListener("click", function (event) {
       event.stopPropagation(); 
       if (submenu.style.display === "block") {
           submenu.style.display = "none";
       } else {
           submenu.style.display = "block";
           submenuContainer.style.display = "none"; // Hide second submenu
       }
   });
   
   // Toggle visibility of the second submenu (Microsoft Store)
   const moreSubmenu2 = document.getElementById("moreSubmenu2");
   const submenuContainer = document.querySelector(".submenu-container");
   
   moreSubmenu2.addEventListener("click", function (event) {
       event.stopPropagation(); 
       if (submenuContainer.style.display === "block") {
           submenuContainer.style.display = "none";
       } else {
           submenuContainer.style.display = "block";
           submenu.style.display = "none"; 
       }
   });
   
   // Hide submenus when clicking outside
   document.addEventListener("click", function () {
       submenu.style.display = "none";
       submenuContainer.style.display = "none";
   });
   
   
   //bars javascript start here 
   const bars = document.querySelector("#bars");
   const menu = document.querySelector(".menu");
   
   bars.addEventListener("click", function () {
       if (menu.style.display === "none" || menu.style.display === "") {
           menu.style.display = "block"; 
           
       } else {
           menu.style.display = "none"; 
       }
   });
   
   // Ensure the menu is reset properly when resizing the screen
   window.addEventListener("resize", function () {
       if (window.innerWidth > 866) {
           menu.style.display = ""; 
       }
   });
   
   
   