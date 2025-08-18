import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <>
      <Drop
        title_1="Vision"
        title_2="Mission"
        title_3="Values"
        body_1="To be one of the most creative, innovative marketing agencies and shift the marketing industry into an entertainment one."
        body_2="To blend creativity and innovation to transform traditional marketing into captivating entertainment experiences."
        list_1="We prioritize originality and imagination in every campaign to deliver unforgettable experiences."
        list_2="We embrace cutting-edge technology and forward-thinking strategies to revolutionize the marketing industry."
        list_3="Our clients’ success is our priority, and we tailor solutions to meet their unique needs and aspirations."
        list_4="We are committed to delivering excellence in every project, ensuring outstanding results."
        list_5="We uphold honesty and transparency in our dealings, building trust with clients and partners."
        list_6="We celebrate diversity and create campaigns that resonate with audiences of all backgrounds."
      />
    </>
  );
}

const Drop: React.FC<DropProps> = (props) => {
  return (
    <div className={`${style.About_Container} bg-primary`}>
      <div className={style.accordionWrapper}>
        <div>
          {/* Vision */}
          <div className={style.accordionItem}>
            <h2>
              <button
                className={style.accordionButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {props.title_1}
              </button>
            </h2>
            <div id="collapseOne" className="collapse">
              <div className={style.accordionBody}>{props.body_1}</div>
            </div>
          </div>

          {/* Mission */}
          <div className={style.accordionItem}>
            <h2>
              <button
                className={style.accordionButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {props.title_2}
              </button>
            </h2>
            <div id="collapseTwo" className="collapse">
              <div className={style.accordionBody}>{props.body_2}</div>
            </div>
          </div>

          {/* Values */}
          <div className={style.accordionItem}>
            <h2>
              <button
                className={style.accordionButton}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {props.title_3}
              </button>
            </h2>
            <div id="collapseThree" className="collapse">
              <div className={style.accordionBody}>
                <ul className={style.list}>
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
      </div>

      {/* Image */}
      <div>
        <img
          src="src/assets/ChatGPT Image Jul 12, 2025, 07_57_26 PM 1.png"
          className={style.image}
        />
      </div>
    </div>
  );
};

export default About;

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
