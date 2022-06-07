import { movies } from "./movies.js";

console.table(movies);

function fetchAllMovies(movies) {
    // Récupération de l'élement
    const elApp = document.getElementsByTagName("tbody")[0];
    elApp.innerHTML = "";
  
    let data = "";
    // Récupération des données
    movies.forEach(m => {
      data += `<tr>
        <td>${m.title}</td>
        <td>${m.year}</td>
      </tr>`;
    });
  
    // Affichage des éléments dans le HTML
    elApp.innerHTML += data;
  }
  
  fetchAllMovies(movies);
  document
  .querySelectorAll("input[type=search]")[0]
  .addEventListener("input", search);
  function search() {
    console.log(this.value);
  }
  if (data.length > 0) {
    // Affichage des données dans le tableau
    elApp.innerHTML += data;
  } else {
    // Aucune donnée
    elApp.innerHTML += "<p>Aucune films trouvée</p>";
  }
 
const elForm = document.getElementById("form");
elForm.style.display = "none";
const elContent = document.getElementById("content");
document.getElementById("form-add").addEventListener("click", function() {
    displayForm();
  });
  function displayForm() {
    elForm.style.display = "block";
    elContent.style.display = "none";
  }
  document.getElementById("form-save").addEventListener("click", function() {
    // Récupération des champs
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
  
    if (title && year) {
      // Nouvelle ligne
      const movie = { title: title, year: year };
  
      // Ajout de la nouvelle ligne
      movies.push(movie);
      function hideForm() {
        elForm.style.display = "none";
        elContent.style.display = "block";
      
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("hidden").value = "";
      }
      document.getElementById("form-cancel").addEventListener("click", function() {
        hideForm();
      });
  
      // Affichage du nouveau tableau
      return fetchAllMovies(movies);
    }
  });
  movies.forEach((m, index) => {
    data += `<tr>
      <td>${m.title}</td>
      <td>${m.year}</td>
      <td>
        <button class="edit btn btn-sm btn-outline-success" value="${index}">Modifier</button>
      </td>
    </tr>`;
  });
  elApp.innerHTML += data;

// Chaque bouton "Editer"
document.querySelectorAll("button.edit").forEach(b => {
  b.addEventListener("click", function() {
    return editMovie(this.value);
  });
});
function editMovie(index) {
    // Récupération de la ligne via son index
    const movie = movies.find((m, i) => {
      return i == index;
    });
  
    // Alimentation des champs
    document.getElementById("title").value = movie.title;
    document.getElementById("year").value = movie.year;
    document.getElementById("hidden").value = index;
  
    displayForm();
  }
  movies.push(movie);
  f (document.getElementById("hidden").value.length > 0) {
    movies.splice(document.getElementById("hidden").value, 1, movie);
  } else {
    movies.push(movie);
  }
  // Chaque bouton "Supprimer"
document.querySelectorAll("button.delete").forEach(b => {
    b.addEventListener("click", function() {
      return deleteMovie(this.value);
    });
  });
  