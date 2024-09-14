var aDiv = document.getElementById("myImage");

function changeWidth() 
{
    var scrollVal = window.pageYOffset;
    var scrollSlow  = (scrollVal / 7);
    aDiv.style.height = Math.min(Math.max(2000/scrollSlow, 20), 100) + "%";
    aDiv.style.borderRadius = Math.min(Math.max(scrollSlow, 60), 100) + "%"
}

window.addEventListener('scroll', function() 
{
    requestAnimationFrame(changeWidth);
}, false);

var educationBtn = document.getElementById("education");
educationBtn.addEventListener("click",()=>{
  console.log("education clicked!!");
  educationDiv.style.display = "block";
  certifications.style.display = "none";
  projectDiv.style.display = "none";
})

var educationDiv = document.querySelector(".educationDiv");
educationDiv.style.display = "block";

var certificationsBtn = document.getElementById("certifications");
var certifications = document.querySelector(".certifications");

certificationsBtn.addEventListener("click",()=>{
  certifications.style.display = "block";
  projectDiv.style.display = "none";
  educationDiv.style.display = "none";
})
certifications.style.display = "none";

var projectBtn = document.querySelector("#Projects");
var projectDiv = document.querySelector(".projects");
projectBtn.addEventListener("click",()=>{
  projectDiv.style.display = "block";
  educationDiv.style.display = "none";
  certifications.style.display = "none";
})
projectDiv.style.display="none";

