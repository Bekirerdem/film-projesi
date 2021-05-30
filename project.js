const Form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini başlatma
const ui = new UI();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    // Hata mesajı
    ui.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    // Yeni film ekleme
    const newFilm = new Film(title, director, url);

    
        // Arayüze film ekleme
        ui.addFilmToUI(newFilm);
        ui.displayMessages('Film başarıyla eklendi...', "succes")
    
  }

  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}
