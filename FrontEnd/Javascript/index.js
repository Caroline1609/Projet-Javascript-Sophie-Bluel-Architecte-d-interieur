const gallery = document.getElementsByClassName("gallery").item(0);
const portfolio = document.getElementById("portfolio");

let travaux = [];
let boutons = [];
let categories = [];



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

    fetch("http://localhost:5678/api/categories")
        .then((res) => res.json())
        .then ((data) => {

        const categories = new Set([""]);
        data.forEach(category => categories.add(category.name));

        function Filters(categories){
            const filterAll = addEventListene(0, "Tous");
            filters.push(filterAll);

            for(let category of categories){
                const filter = createFilterButton(category.id, category.name);
                filters.push(filter);
            }


        }
        console.log(categories)

            
    });