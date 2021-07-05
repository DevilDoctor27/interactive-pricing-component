const range = document.getElementById("range")
const price = document.getElementById("price")
const rangeFill = document.querySelector(".slider__fill")


range.addEventListener("input", () => {
    price.textContent = "$" + range.value + ".00"
    rangeFill.style.width = (range.value * 3.3333) + "%"
})


const switchToggle = document.querySelector(".card__switch--item")
const switchParent = document.querySelector(".card__switch")

switchToggle.addEventListener("input", () => {
    switchParent.classList.toggle("active")
})