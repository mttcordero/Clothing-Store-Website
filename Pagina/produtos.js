window.addEventListener("load", () => {

    tns({
        container: '.slider',
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayButtonOutput: false,
        speed: 1000,
        nav: false,
        swipeAngle: false,
        center: true,
        controls: true,
        prevButton: document.querySelector(".slide-prev-button"),
        nextButton: document.querySelector(".slide-next-button"),
    });
});

function startYoutube(){
    var video = document.getElementById("video-fullscreen");
    video.classList.add("visible");
   
}

function stopYoutube(){
    var video = document.getElementById("video-fullscreen");
    video.classList.remove("visible");
}

const menu = document.querySelector(".menu"),
      header = document.querySelector("header"),
      openSideMenu = document.querySelectorAll(".side-bar"),
      socials = document.querySelector(".social button"),
      inputSearch = document.querySelector("header form input[type=search]"),
      node = document.createElement("div");

openSideMenu.forEach(e => {
  e.addEventListener('click', (e) => {
    header.classList.toggle("side-menu-open");

    if(header.classList.contains("side-menu-open")){

      /*document.querySelectorAll("header").forEach(el => el.classList.add("side-menu-open"));*/
      document.querySelectorAll("html").forEach(el => el.classList.add("lock"));
      node.classList.add("menu-backdrop");
      document.querySelector("body > header").appendChild(node);
      
    }else{

      /*document.querySelectorAll("header").forEach(el => el.classList.remove("side-menu-open"));*/
      document.querySelectorAll("html").forEach(el => el.classList.remove("lock"));
      node.classList.remove("menu-backdrop");

    };
  });
});
                
const sideBar = document.querySelector(".side-bar");
const body = document.querySelectorAll("body");

body.forEach(e=> {
  e.addEventListener('click', (e) => {

    if(header.classList.contains("side-menu-open")){

      document.addEventListener('click', function(event){
        var isClickInside =  menu.contains(event.target);
        var isClickInside2 = sideBar.contains(event.target);
        var isClickInside3 =  inputSearch.contains(event.target);
        if(!isClickInside && !isClickInside2 && !isClickInside3){
    
          node.classList.remove("menu-backdrop");
          header.classList.remove("side-menu-open");
          document.querySelectorAll("html").forEach(el => el.classList.remove("lock"));

        }else{
          return;
        }
      }); 
    };

  });
});
