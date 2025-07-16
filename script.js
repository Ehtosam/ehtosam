const header = document.querySelector(header);

window.addEventListener("scroll", function(){
    header.classlistn.toggle ("sticky", window.scrollY > 0);
});