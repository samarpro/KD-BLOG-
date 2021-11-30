var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}

function nav(){
  document.getElementById("act_nav").style.right="0vw"
  document.getElementById("ham1").style.display="none"
  document.getElementById("linkss").style.opacity="1"
}
function nav_close(){
  document.getElementById("act_nav").style.right="-150vw"
  document.getElementById("ham1").style.display="block"
  document.getElementById("linkss").style.opacity="0"
}
// slider for fourth page
var init_margin=0;
function go_left(){
  var f_margin;
  f_margin = document.getElementById("side_wrapper").currentStyle.marginLeft 
  document.getElementById("side_wrapper").style.marginLeft="-375px"
}
function go_right(){
  document.getElementById("side_wrapper").style.marginLeft="375px"
}