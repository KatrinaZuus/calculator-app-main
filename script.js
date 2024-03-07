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
let previusAction = ""

      
        number.forEach((numButton) => {
            numButton.addEventListener("click", (event)=>{
                previusAction += numButton.textContent
                current += numButton.textContent
                finalResult.textContent = current
                currentAction.innerText = previusAction
            })
        })

        arithmeticOperations.forEach((mathButton) => {
            mathButton.addEventListener("click", (event)=>{
                math = event.target.innerText
                previusAction += math
                previus = current
                current=""
                currentAction.innerText = previusAction
                

            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            })        
        }) 
        
        equal.addEventListener("click", ()=>{
            calc(math, previus, current)
            finalResult.innerText = result
            currentAction.innerText = result
            previus=result
            current=result
            
            
            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            console.log(typeof(`result is ${result}`))
        })

        
            function calc(math, previus, current) {
            previus = eval(previus)
            current = eval(current)
            if (math == "-"){
                result = (previus-current)
                finalResult.innerText = result 
                }

            if (math == "+"){
                res = previus+current
                result = eval(res)
                finalResult.innerText = result
            }

            if (math == "/"){
                result = (previus/current)
                finalResult.innerText = result

            }
            if (math == "x"){
                result = (previus*current)
                finalResult.innerText = result
            }

            }

            reset.addEventListener("click", ()=>{
                finalResult.innerText = "0.00"
                currentAction.innerText = "0"
                result = 0
                current = ""
                previus = ""
                previusAction = ""

            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
    
            })
    
            del.addEventListener("click", ()=>{
                current = current.slice(0,-1)
                finalResult.innerText = current
                previusAction = previusAction.slice(0,-1)

            console.log(`current is ${current}`)
            console.log(`previus is ${previus}`)
            console.log(`result is ${result}`)
            console.log(`math is ${math}`)
            })
        