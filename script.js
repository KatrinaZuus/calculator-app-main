let themeChangeButton = document.getElementsByClassName("theme-change-button")[0]
let bodyThemecolor = document.getElementsByTagName("body")[0]



themeChangeButton.addEventListener(("input"), (event)=>{
    
    if (event.target.value == 2){
        bodyThemecolor.classList.add(`lightBackground`)
        bodyThemecolor.classList.remove(`darkBackground`)
    } else {
        if (event.target.value == 3){
        bodyThemecolor.classList.add(`darkBackground`)
    } else {
        if (event.target.value == 1){
        bodyThemecolor.classList.remove(`darkBackground`, `lightBackground`)
    }
}
}
})