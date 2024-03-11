import "./page404.css";
import astronauta from "../../assets/images/astronauta.png";

const Page404 = () => {
  return (
    <div className="sectionPage404">
      <div className="sectionPage404--text">
        <p>Assembler</p>
        <p>We have a problem</p>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>in progress</p>
      </div>
      <div className="sectionPage404--img">
        <img src={astronauta} alt="" />
      </div>
    </div>
  );
};

export default Page404;
