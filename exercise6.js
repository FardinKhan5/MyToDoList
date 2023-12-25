const updateData = async () => {
    for (let i = 0; i < localStorage.length; i++) {
        let titlet = localStorage.key(i)
        const todoList = document.getElementById("list")
        todoList.innerHTML += `<div class="card m-2" style="width: 18rem;border: 1px dashed black;">
    <div class="card-body">
      <h5 class="card-title">${titlet}</h5>
      <p class="card-text">${localStorage.getItem(titlet)}</p>
      <button class="btn btn-danger">Remove</button>
    </div>
  </div>`
    }
}
updateData()
const add = document.getElementById("addTodo")
add.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = document.getElementById("titleInput").value
    let text = document.getElementById("textInput").value
    localStorage.setItem(titlec, text)
    document.getElementById("added").classList.remove("d-none")
    setTimeout(() => {
        document.getElementById("added").classList.add("d-none")
    }, 1000)
    const todoList = document.getElementById("list")
    todoList.innerHTML += `<div class="card m-1" style="width: 18rem;border: 1px dashed black;">
    <div class="card-body">
      <h5 class="card-title">${titlec}</h5>
      <p class="card-text">${localStorage.getItem(titlec)}</p>
      <button class="btn btn-danger">Remove</button>
    </div>
  </div>`
    document.getElementById("titleInput").value = ""
    document.getElementById("textInput").value = ""

})
const cards = document.getElementById("list")
cards.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("btn-danger")){
      const card = e.target.closest('.card')
    const key = card.querySelector('.card-title').innerText;
    localStorage.removeItem(key)
    card.remove()
    document.getElementById("removed").classList.remove("d-none")
    setTimeout(() => {
        document.getElementById("removed").classList.add("d-none")
    }, 1000)
    }
    
})



