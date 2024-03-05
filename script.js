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