// Éléments du DOM
// const postSection = document.getElementById("postSection");
let postDiv =document.getElementById("postDiv");
// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) // Transformation de la réponse reçu au format JSON
.then(posts => {    // Extraction de l'ensemble des post du JSON

    // Pour chaque post extrait, créer une arboresence à ajouter au DOM
    posts.forEach(post => {
       let postOne = document.createElement("section");
        if (post.completed == true) {
            postOne.classList.add("tasksOn");
        }else
            postOne.classList.add("tasksOff");
        // Contenu de chaque post
        let title = document.createTextNode(post.title);
        let completed= document.createTextNode(post.completed);
        let id = document.createTextNode(post.id);
        let titleOne = document.createElement("h1");
        let completedOne= document.createElement("p");
        let idOne= document.createElement("p");
        idOne.appendChild(id);
        titleOne.appendChild(title);
        completedOne.appendChild(completed);
        postOne.appendChild(idOne);
        postOne.appendChild(titleOne);
        postOne.appendChild(completedOne);
        postDiv.appendChild(postOne);
      
     
    });
});

