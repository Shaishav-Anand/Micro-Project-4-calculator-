const allBtn = document.querySelectorAll('button')
const inputBox = document.querySelector('.input-area')
const eqlBtn = document.querySelector('.eql')
const resBtn = document.querySelector('.res')
const delBtn = document.querySelector('.del')

let calcArr = []

allBtn.forEach((eachBtn)=>{
    eachBtn.addEventListener("click",(event)=>{
        if(eachBtn.innerText !== "DEL" && eachBtn.innerText !== "=" && eachBtn.innerText !== "RESET")
        calcArr.push(eachBtn.innerText)
        displayNum(calcArr)
    })
})


function displayNum(arr){
    inputBox.value = arr.join("")
}

eqlBtn.addEventListener("click",(event)=>{
    if(calcArr.length){
    let answer = eval(calcArr.join(""))
    inputBox.value = answer
    }
})

delBtn.addEventListener("click",(event)=>{
    calcArr.pop()
    displayNum(calcArr)
})

resBtn.addEventListener("click",(event)=>{
    calcArr = []
    displayNum(calcArr)
})