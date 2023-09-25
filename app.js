const inputElement = document.querySelector("input");
const pElement = document.querySelector("p");
function displayNumber(e){
  const number = e.target.value.length;
  pElement.textContent = `${60-number}/60`;
  if(60-number===0){
    inputElement.classList.add("error");
    pElement.classList.add("error");
  }
  
  else if (60-number<=10){
    inputElement.classList.add("warning");
    pElement.classList.add("warning");
    inputElement.classList.remove("error");
    pElement.classList.remove("error");
  }
  else {
    inputElement.classList.remove("warning","error");
    pElement.classList.remove("warning","error");
  }
}
