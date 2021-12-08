import "./about.css";
import me from "../../img/me.jpg";
import { ButtonGroup, Card } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am Shakil Ahmmed Joy, a student of Shahjalal University of Science and Technology and a versatile and self-motivated Full stack web developer with considerable technical skills in MERN stack and React development.
        </p>
        <div className="a-award">
          <div className="a-award-texts">

            <div>
              <h4 className="a-award-title">SKills</h4>
              <p className="a-award-desc">
                HTML5, CSS3, JavaScript, ES6, React JS, Express JS, Node JS, MongoDb
              </p>
            </div>
            <h4 className="a-award-title" style={{ marginTop: '20px' }}>Education</h4>
            <p className="a-award-desc">
              BSC in Geography and Environment,
            </p>
            <p className="a-award-desc">
              Shahjalal University of Science and Technology, Sylhet 3114
            </p>
          </div>
        </div>
        <p className="a-desc" style={{ marginTop: '30px' }}>
          I am in a long-term relationship with my crush Javascript and am ambitious to develop user-friendly and effective web-based applications and always possess self-discipline and the ability to work with a minimum of supervision. A quick learner who can absorb new ideas and can communicate clearly and effectively. Especially an enthusiastic individual who is in search of an entry-level position as a MERN stack or React developer in a company that encourages growth and flexibility.
        </p>
      </div>
    </div>
  );
};

export default About;
