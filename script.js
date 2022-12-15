const arrSteps = [document.getElementById('form-1'),document.getElementById('form-2'),document.getElementById('form-3'),document.getElementById('form-4')]
const stepIndicator = [document.querySelector('.first-step'),document.querySelector('.second-step'),document.querySelector('.third-step'),document.querySelector('.fourth-step')]

const nextBtn = document.getElementById('nextBtn')
const backBtn = document.getElementById('prevBtn')
var indexThis = 0
var indexIndicator = 0




nextBtn.addEventListener('click', function nextFucntion() {
  arrSteps[indexThis].style.display = 'none'
  arrSteps[indexThis+=1].style.display = 'flex'
  backBtn.style.visibility = 'visible'
 



  Object.assign(  stepIndicator[indexIndicator].style,{
    border: "solid 2px white",
    background: "none",
    color: "white"
  })

  Object.assign(  stepIndicator[indexIndicator+=1].style,{
    border: "none",
    backgroundColor: "#bfe2fd",
    color: "#02295a"
  })


if(  indexThis === arrSteps.length-1 && indexIndicator === stepIndicator.length-1 && indexThis != arrSteps[0] && indexThis != arrSteps[1] && indexThis != arrSteps[2]) {
 nextBtn.textContent = 'Confirm'
 Object.assign(nextBtn.style,{
  color:"white",
  backgroundColor:"#473dff"
 })

 if(indexThis === arrSteps.length-1 && indexIndicator === stepIndicator.length-1){
 nextBtn.onclick = function confirmThis() {
  arrSteps[3].style.display = "none"
  document.getElementById('final-message').style.display = "flex"
  nextBtn.style.visibility = "hidden"
  backBtn.style.visibility = "hidden"
 }
}
} 
})

backBtn.addEventListener('click', () =>{
  if(indexThis === arrSteps[0] || indexThis === arrSteps[1] || indexThis === arrSteps[2]){
    nextBtn.onclick = function nextFucntion() {
      arrSteps[indexThis].style.display = 'none'
      arrSteps[indexThis+=1].style.display = 'flex'
     }
  }

  
  nextBtn.textContent = 'Next Step'
  Object.assign(nextBtn.style,{
   color:"white",
   backgroundColor:"#02295a"
  })



  if(indexThis>0){
    arrSteps[indexThis].style.display = 'none'
    arrSteps[indexThis-=1].style.display = 'flex'
  
  
    Object.assign(  stepIndicator[indexIndicator].style,{
      border: "solid 2px white",
      background: "none",
      color: "white"
    })
  
    Object.assign(  stepIndicator[indexIndicator-=1].style,{
      border: "none",
      backgroundColor: "#bfe2fd",
      color: "#02295a"
    })
  }
  if(indexThis === 0){
    backBtn.style.visibility="hidden"
  }
 
})


const toggleBtn = document.querySelector('.toggle-switch')
var priceElMonth1 = document.querySelector('.price-text-month-one')
var priceElMonth2 = document.querySelector('.price-text-month-two')
var priceElMonth3 = document.querySelector('.price-text-month-three')

var priceElYear1 = document.querySelector('.price-text-year-one')
var priceElYear2 = document.querySelector('.price-text-year-two')
var priceElYear3 = document.querySelector('.price-text-year-three')

var priceBonus1 = document.querySelector('.year-bonus-1')
var priceBonus2 = document.querySelector('.year-bonus-2')
var priceBonus3 = document.querySelector('.year-bonus-3')

toggleBtn.addEventListener("click",() =>{
priceElMonth1.classList.toggle("hide")
priceElMonth2.classList.toggle("hide")
priceElMonth3.classList.toggle("hide")


priceElYear1.classList.toggle("active")
priceElYear2.classList.toggle("active")
priceElYear3.classList.toggle("active")

priceBonus1.classList.toggle("active")
priceBonus2.classList.toggle("active")
priceBonus3.classList.toggle("active")
})