window.onload = function () {
   getUserPrompt()
}

function getUserPrompt() {

   var userPrompt = ""
   var loop = true

   // until userPrompt = "yes" || "yeah"
   // keep asking the user

   while ( loop ) {
      userPrompt = prompt("Are we there yet?")
      if ( userPrompt === "yes" ) { loop = false }
      else if ( userPrompt === "yeah" ) { loop = false }
      else { loop = true }
   }

   var e = document.getElementById("myUl")
   var f = document.createElement("li")
   f.innerText = "Yay, we finally made it!"
   e.appendChild(f)
}