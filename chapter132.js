window.onload = function() {
   countToX()
}

function countToX() {

   var x = 1

   while ( x < 11 ) {
      var e = document.getElementById("myUl")
      var f = document.createElement("li")
      f.innerText = "The count is - " + x
      e.appendChild( f )
      x++
   }
}