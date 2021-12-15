import Img1 from '../Images/image1.png'
import Img2 from '../Images/image2.jpg'
import Img3 from '../Images/image3.jpg'
import Img4 from '../Images/image4.jpg'
import Carte from './Carte'
function Project(){
    const array=[{title : "Project 10", imgsrc:Img1},{title : "Project 2", imgsrc:Img2},{title : "Project 3", imgsrc:Img3},{title : "Project 4", imgsrc:Img4}]
    return(
        <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          {/* <!--Project Card --> */}
          {array.map((el,i)=><Carte el={el} key={i} /> )}

       
        </div>
      </section>

    );
};

export default Project