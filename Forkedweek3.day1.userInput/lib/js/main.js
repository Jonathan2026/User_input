
main_title = document.getElementById("main_title")
title_input = document.getElementById("title_input")
button = document.querySelector("button")
inputs = document.querySelectorAll("input")
story = document.getElementById("story_result")
form = document.querySelector("form")

button.addEventListener("click", checkBox)
title_input.addEventListener("change", copyTitle)

function copyTitle(event){
    event.preventDefault()
    main_title.innerHTML = title_input.value
}

function checkBox(event){
    event.preventDefault()
    for(i=0; i<inputs.length; i++){
        if (inputs[i].value == ""){
            alert("Please Fill out all Forms")
        }
    }
    form.style.display = "none"
    story.innerHTML = "Last night I ate a" + inputs[1].value + " and today I just had to " + inputs[2].value + " . What a " + inputs[3].value + "day!"
}

