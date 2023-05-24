const gallery = document.getElementsByClassName("gallery").item(0);
const portfolio = document.getElementById("portfolio");

let travaux = [];
let boutons = [];



fetch ("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => {

        for (const work of data){
        nouvelleFigure(work);
        }
    });

    function nouvelleFigure(work) {
    

        const newFigure = document.createElement("figure");
        newFigure.setAttribute('class', work.category.id);
        newFigure.setAttribute("refId", work.id);
        newFigure.setAttribute("id", "image-" + work.id);

        const newImage = document.createElement("img");
        newImage.setAttribute("crossorigin", "anonymous");
        newImage.setAttribute("src", work.imageUrl);
        newImage.alt = work.title;

        const newTitre = document.createElement("figcaption");
        newTitre.innerText = work.title;


        newFigure.appendChild(newImage);
        newFigure.appendChild(newTitre);

        gallery.appendChild(newFigure);


        travaux.push(newFigure);
    }