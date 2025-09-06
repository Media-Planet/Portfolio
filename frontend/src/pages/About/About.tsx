import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from ".//About.module.css";
import AboutImage from "../../assets/image/About.png";

function About() {
  return (
    <>
      <Drop
        title_1="Vision"
        title_2="Mission"
        title_3="Values"
        body_1="To be one of the most creative, innovative marketing agencies and shift the marketing industry into an entertainment one. "
        body_2="To blend creativity and innovation to transform traditional marketing into captivating entertainment experiences."
        list_1="We prioritize originality and imagination in every campaign to deliver unforgettable experiences."
        list_2="We embrace cutting-edge technology and forward-thinking strategies to revolutionize the marketing industry."
        list_3="Our clients success is our priority, and we tailor solutions to meet their unique needs and aspirations."
        list_4="We are committed to delivering excellence in every project, ensuring outstanding results."
        list_5="We uphold honesty and transparency in our dealings, building trust with clients and partners."
        list_6="We celebrate diversity and create campaigns that resonate with audiences of all backgrounds."
      />
    </>
  );
}
// this is the accordion component that will be used in the About page
const Drop: React.FC<DropProps> = (props) => {
  return (
    <div>
      <div className="align-self-center About_Container">
        <div className={`accordion ${styles.accordion}`} id="accordionExample">
          <div className={`accordion-item ${styles.accordion_item}`}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button collapsed ${styles.accordion_button} ${styles.collapsed} `}
                type="button"
                data-bs-toggle={`collapse`}
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {props.title_1}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles.accordion_body}`}>
                {props.body_1}
              </div>
            </div>
          </div>
          <div className={`accordion-item ${styles.accordion_item}`}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed ${styles.accordion_button} ${styles.collapsed} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {props.title_2}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles.accordion_body}`}>
                {props.body_2}
              </div>
            </div>
          </div>
          <div className={`accordion-item ${styles.accordion_item}`}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button collapsed ${styles.accordion_button} ${styles.collapsed} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {props.title_3}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body  ${styles.accordion_body}`}>
                <ul className={`${styles.list}`}>
                  <li>{props.list_1}</li>
                  <li>{props.list_2}</li>
                  <li>{props.list_3}</li>
                  <li>{props.list_4}</li>
                  <li>{props.list_5}</li>
                  <li>{props.list_6}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container align-self-center">
          <img src={AboutImage} className={`${styles.image}`} alt="About" />
        </div>
      </div>
    </div>
  );
};
export default About;
// Define the type for the props of the Drop component
type DropProps = {
  title_1: string;
  title_2: string;
  title_3: string;
  body_1: string;
  body_2: string;
  list_1: string;
  list_2: string;
  list_3: string;
  list_4: string;
  list_5: string;
  list_6: string;
};
