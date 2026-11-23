// Example chicken information
let chickens = [
  { name: "Rhode Island Red", breed: "Rhode Island Red", color: "Red", description: "A rooster in my flock." },
  { name: "Buff Orpington", breed: "Buff Orpington", color: "Buff", description: "A rooster in my flock." },
  { name: "Splash Polish", breed: "Polish", color: "Splash", description: "A rooster with black streaks." }
];

function showPage(pageName) {
  let pages = document.querySelectorAll(".page");
  pages.forEach(function(page) {
    page.style.display = "none";
  });
  document.getElementById(pageName).style.display = "block";
}

function displayChickens() {
  let list = document.getElementById("chickenList");
  list.innerHTML = "";
  chickens.forEach(function(chicken, index) {
    let item = document.createElement("div");
    item.className = "chicken";
    let title = document.createElement("h3");
    title.textContent = chicken.name;
    let button = document.createElement("button");
    button.textContent = "View Details";
    button.onclick = function() { showChicken(index); };
    item.appendChild(title);
    item.appendChild(button);
    list.appendChild(item);
  });
}

function showChicken(index) {
  let chicken = chickens[index];
  let profile = document.getElementById("profile");
  profile.innerHTML = "";
  let title = document.createElement("h3");
  title.textContent = chicken.name;
  let breed = document.createElement("p");
  breed.textContent = "Breed: " + chicken.breed;
  let color = document.createElement("p");
  color.textContent = "Color: " + chicken.color;
  let description = document.createElement("p");
  description.textContent = chicken.description;
  profile.append(title, breed, color, description);
}

document.getElementById("chickenForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let chicken = {
    name: document.getElementById("name").value,
    breed: document.getElementById("breed").value,
    color: document.getElementById("color").value,
    description: document.getElementById("description").value
  };
  chickens.push(chicken);
  this.reset();
  displayChickens();
});

function saveNote() {
  let text = document.getElementById("noteText").value;
  if (text.trim() === "") {
    alert("Please write a note first.");
    return;
  }
  let note = document.createElement("p");
  note.textContent = text;
  document.getElementById("savedNotes").appendChild(note);
  document.getElementById("noteText").value = "";
}

displayChickens();
