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




finalResult.textContent = "0"
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
                // currentAction.innerText = result
            })
        })

        arithmeticOperations.forEach((mathButton) => {
            mathButton.addEventListener("click", (event)=>{
                math = event.target.innerText
                previusAction += math
                previus = current
                current=""
                currentAction.innerText = previusAction
                
                // currentAction.innerText = result
            })        
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
                if (current == 0) {
                    result = "Error"
                } else {
                result = Math.floor(previus/current)
                finalResult.innerText = result
                }
            }
            if (math == "x"){
                result = (previus*current)
                finalResult.innerText = result
            }

        }

        equal.addEventListener("click", ()=>{
            if ( current !== "" || previus !== "" ){
            calc(math, previus, current)
            finalResult.innerText = result
            currentAction.innerText = result
            previus=result
            current=result
            previusAction = result
            } else {
                finalResult.innerText = "0"
                currentAction.innerText = "0"
            }
        })

            reset.addEventListener("click", ()=>{
                finalResult.innerText = "0"
                currentAction.innerText = "0"
                result = 0
                current = ""
                previus = ""
                previusAction = ""
    
            })
    
            del.addEventListener("click", ()=>{
                if ( current !== "" || previus !== "" ){
                    current = current.slice(0,-1)
                    finalResult.innerText = current
                    previusAction = previusAction.slice(1,0)
                } else {
                    finalResult.innerText = "0"
                    currentAction.innerText = "0"
                }
            })
        