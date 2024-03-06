// change of themes

let themeChangeButton = document.getElementsByClassName("theme-change-button")[0]
let bodyThemecolor = document.getElementsByTagName("body")[0]
themeChangeButton.addEventListener(("input"), (event)=>{
    
    if (event.target.value == 2){
        bodyThemecolor.classList.add("light")
        bodyThemecolor.classList.remove("dark")
    } else {
        if (event.target.value == 3){
        bodyThemecolor.classList.add("dark")
        bodyThemecolor.classList.remove("light")
    } else {
        if (event.target.value == 1){
        bodyThemecolor.classList.remove("light", "dark")
    }
}
}
})


//calculation


let number = Array.from(document.getElementsByClassName("number"))
let arithmeticOperations = Array.from(document.getElementsByClassName("arithmeticOperations"))
let finalResult = document.getElementsByClassName("final-result")[0]
let currentAction = document.getElementsByClassName("current-actions")[0]
let equal = document.getElementsByClassName("equal")[0]
let reset = document.getElementsByClassName("reset")[0]
let del = document.getElementsByClassName("delete")[0]




finalResult.textContent = "0.00"
currentAction.innerText = "0"


let result = 0
let current = ""
let previus = ""
let math = ""


      
        number.forEach((numButton) => {
            numButton.addEventListener("click", (event)=>{
                current += numButton.textContent
                finalResult.textContent = current
                currentAction.innerText = current
            })
        })

        arithmeticOperations.forEach((mathButton) => {
            mathButton.addEventListener("click", (event)=>{
                math = event.target.innerText
                previus = current
                current=""
                currentAction.innerText = math
            
            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            })        
        }) 
        
        equal.addEventListener("click", ()=>{
            calc(math, previus, current)
            finalResult.innerText = result
            previus=result
            current=result
            // previus = result
            
            
            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            console.log(typeof(`result is ${result}`))
        })

        
            function calc(math, previus, current) {
            
            if (math == "-"){
                result = (previus-current).toFixed(2)
                // previus = result
                finalResult.innerText = result 
                }
            if (math == "+"){
                result = Number(previus+current).toFixed(2)
                // previus = result
                finalResult.innerText = result
            }
            if (math == "/"){
                result = (previus/current).toFixed(2)
                // previus = result
                finalResult.innerText = result
            }
            if (math == "x"){
                result = (previus*current).toFixed(2)
                // previus = result
                finalResult.innerText = result
            }

            }

            reset.addEventListener("click", ()=>{
                finalResult.innerText = "0.00"
                currentAction.innerText = "0"
                result = 0
                current = ""
                previus = ""

            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
    
            })
    
            del.addEventListener("click", ()=>{
                current = current.slice(0,-1)
                finalResult.innerText = current


            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            })
        