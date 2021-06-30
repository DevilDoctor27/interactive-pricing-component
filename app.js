const range = document.getElementById("range")
const price = document.getElementById("price")


range.addEventListener("input", () => {
    price.textContent = "$" + range.value + ".00"
})

console.log(range)