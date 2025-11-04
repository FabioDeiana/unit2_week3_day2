const nameInput = document.getElementById("nameInput")
const saveBtn = document.getElementById("saveBtn")
const removeBtn = document.getElementById("removeBtn")
const savedValue = document.getElementById("savedValue")

function displaySavedValue() {
  const name = localStorage.getItem("userName")
  savedValue.textContent = name || "Nessun nome salvato"
}

saveBtn.addEventListener("click", function () {
  const name = nameInput.value.trim()
  if (name) {
    localStorage.setItem("userName", name)
    displaySavedValue()
    nameInput.value = ""
    alert("Nome salvato!")
  }
})

removeBtn.addEventListener("click", function () {
  localStorage.removeItem("userName")
  displaySavedValue()
  alert("Nome rimosso!")
})

displaySavedValue()
