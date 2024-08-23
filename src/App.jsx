import React, { Component } from "react";
import "./App.css";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";
import star from "./assets/images/icon-star.svg";

class Faq extends React.Component {
  constructor() {
    super();
    this.state = {
      hide: "hide",
      show: "",
      color: "purple",
    };
  }

  showbutton() {
    this.setState({
      hide: "",
      show: "hide",
    });
  }

  hidebutton() {
    this.setState({
      hide: "hide",
      show: "",
    });
  }

  render() {
    const { question, answer } = this.props;
    const { hide, show } = this.state;
    return (
      <>
        <div className="flex-it">
          <h4>
            <strong>{question}</strong>
          </h4>
          <img
            className={show}
            src={plus}
            alt="Plus Icon"
            onClick={() => this.showbutton()}
          />
          <img
            className={hide}
            src={minus}
            alt="Minus Icon"
            onClick={() => this.hidebutton()}
          />
        </div>
        <p className={hide}>{answer}</p>
      </>
    );
  }
}

function App() {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="top">
            <img className="icon-star" src={star} alt="Star Icon" />
            <h1>
              <strong>FAQs</strong>
            </h1>
          </div>
          <Faq
            question="What is Frontend Mentor, and how will it help me?"
            answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />
          <hr />
          <Faq
            question="Is Frontend Mentor free?"
            answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
          />
          <hr />
          <Faq
            question="Can I use Frontend Mentor projects in my portfolio?"
            answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
          />
          <hr />
          <Faq
            question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
          />
        </div>
      </div>
    </>
  );
}

export default App;
