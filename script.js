let scrollTopBtn = document.getElementById("scrollTopBtn");
 window.onscroll = function() {
    scrollfunction();
 };
 function scrollfunction(){
    if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }
 }
 scrollTopBtn.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
 });
 };
//  Smotth scrolling with navigation link 
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click' , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Responsive navbar for small devices 
// document.addEventListener('DOMContentLoaded',()=> {
//     const navToggle = 
//     document.querySelector('.nav-toggle');
//     const navMenu = 
//     document.querySelector('.nav-menu');
//     navToggle.addEventListener('click',() => {
//         navMenu.classList.toggle('active');
//     });
// });    
    
function togglenavmenu() {
    const navmenu =
    document.getElementById('navmenu');
    navmenu.classList.toggle('active')
}

