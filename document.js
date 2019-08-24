/* Set the width of the side navigation to 250px */
function openNav() {
    console.log("executed")
    document.getElementById("alt-navbar").style.width = "250px";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    console.log("executed")
    document.getElementById("alt-navbar").style.width = "0";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("fixed-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
  }
}