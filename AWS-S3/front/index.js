const imageForm = document.querySelector("#imageForm")
const imageInput = document.querySelector('#imageInput')

imageForm.addEventListener("sumbit", async event =>{
    event.preventDefault()
    const file = imageInput.files[0]
})