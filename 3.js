const data = [
    {
    title: "Вызов",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "img/4.jpg",
    gengre: "Ужасы"
    },
    {
    title: "Вызов",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "img/4.jpg",
    gengre: "Ужасы"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/4.jpg",
        gengre: "Меллодрамы"
        },
        {
            title: "Вызов",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: "img/4.jpg",
            gengre: "Мелодрамы"
            },
    
    ]
    class MovieListDTO
    {
    title;
    description;
    image;
    
    constructor(title, description, image)
    {
    this.title = title;
    this.description = description;
    this.image = image;
    }
    }
    
    class RenderTemplate
    {
    
    cardMovie;
    
    constructor()
    {
    this.cardMovie = 
<div class="col-3 mt-5">
    <div class="card w-90 mx-auto">
    <img src="$image" class ="card-img-top" alt="...">
    <div class ="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    </div>
    }
    
    
    renderAll(context)
    {
    for(let x=0; x < context.length; x++)
    {
    let movieContext = new MovieListDTO(
    context[x].title, // title
    context[x].description, //description
    context[x].image // image
    )
    
    let template = this.cardMovie
    .replace("$title", movieContext.title)
    .replace("$description", movieContext.description)
    .replace("$image", movieContext.image);
    
    
    
    document.getElementById("app")
    .innerHTML += template
    }
    }
    renderShow(context){

    }
    }