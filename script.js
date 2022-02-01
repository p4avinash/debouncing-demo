const leftSide = document.querySelector(".left-side")
const rightSide = document.querySelector(".right-side")
const normal = document.querySelector(".normal")
const debounce = document.querySelector(".debounce")

let count = 0

leftSide.addEventListener("mousemove", () => {
  count += 1
  console.log(count)
  makeNormalRequest()
  makeDebouncedRequest()
})

const debouncedFunction = (fn, delay) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

makeDebouncedRequest = debouncedFunction(makeDebouncedRequest, 300)

function makeNormalRequest() {
  normal.innerHTML += `<div class='v-line'></div>`
}

function makeDebouncedRequest() {
  debounce.innerHTML += `<div class='v2-line'></div>`
}
