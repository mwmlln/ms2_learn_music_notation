document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "game-start") {
                alert("You clicked start!");
            } else {
                let keytype = this.getAttribute("data-type");
                alert(`You clicked ${keytype}`)
            }
        })
    }
})

