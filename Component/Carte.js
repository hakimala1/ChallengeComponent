function Carte({el, i}){
    return(
    
        <div className="project-card">
            <img src={el.imgsrc}  alt="project" />
            <h3>{el.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>

    );
};

export default Carte