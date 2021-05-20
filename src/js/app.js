
window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);       /*Toggles between a class name for an element.*/
    /*If the class list of an element contains a specified class name, the toggle() method removes it. 
    If the class list doesn’t contain the class name, the toggle() method adds it to the class list.*/
    /*The scrollY property of the Window returns the number of pixels that the document is currently scrolled vertically. */
});


function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}