import React from 'react';
import './container.css';

function Container() {
  return (
    <div className="content-container">
      <div className="introduction">
        <h1>Hello,</h1>
        <h2 className="sub-header">I'm Uday. Associate Technical Lead </h2>
        <p>
          {' '}
          <b> My Moto: Analysis, Bluprint, Code</b>
        </p>
        <div className="abcIntro">
          <p>
            {' '}
            Have you ever gone through the software alphabates which are A, B &
            C ?
          </p>
          <p>
            Are you thinking that these are simple english alphabates ? Yes they
            are, but have you ever thought these three characters can teach us
            important software lessons ? Yes, I believe they teach us three main
            steps for any software development
          </p>

          <p>
            <b>Analysis :</b> We should research what end user intent is and how
            our solution is going to fullfill his requirement. It looks simple
            but when we start exploring we should keep our eyes wide and gather
            all the knowledge for the intent.
          </p>

          <p>
            <b>Bluprint :</b> We should design the mocked wireframes which
            simulates user intent. It also keeps the door open for the new
            ideas. Without bluprint if we start writing the code it leads us to
            write a software which is not robust and flexible.
          </p>

          <p>
            <b>Code: </b> While we are developing the product we should be able
            to think that how flexible and maintainable code we are writing. In
            this phase communication with the team plays keyrole.
          </p>
        </div>

        <div className="self-intro">
          <p>
            I am currently working with{' '}
            <a href="https://kore.ai/" target="_blank">
              {' '}
              Kore.AI{' '}
            </a>{' '}
            as a Associate Technical Lead(Frontend). Kore-AI is bots building
            platform which helps to interact with humans and solve the customer
            queries. Bots building excites me more as it communicate with humans
            with the Natural Language, and it is the No-code/low code bots
            platfotm which simply drag and drop or configure the Natural
            Language Processing patterns for the entities.
          </p>

          <p>
            Additionally, I have 7 years of professional product development
            experience. During this time, I have programmed in the Language
            Javascript, Node & JavaSE and having the very good hands on
            experience in the frameworks like Angular and React library with
            vast array of teams. As part of my professional experience I played
            with most of the frontend libraries like Jquery, lodash,
            ngx-bootstrap, angular material, handlebar.js, electronJS, charts,
            list goes on...
          </p>

          <p>
            <b> Short-term goal: </b> I am looking for full time opportunities
            which allow me to apply my experience and provide an environment for
            me to learn and helps me to gain the domain knowledge; I have a
            diverse profile and am open to pick up new technologies as I believe
            that any technology or programming language is just tool to achieve
            the bussiness goal or any innovation.
          </p>

          <p>
            <b> Long-term goal: </b> I believe some point of time will innvovate
            the game changer technology, and will make the difference in the
            innovation.
          </p>
        </div>

        <div className="tech-stack">
          <h4>Techstack:</h4>
          <ul>
            <li>Javascript</li>
            <li>Angular</li>
            <li>React</li>
            <li>HTML/CSS</li>
            <li>Jquery</li>
            <li>handlebarJS</li>
            <li>ngx-bootstrap</li>
            <li>electronJS</li>
            <li>NodeJs</li>
            <li>JavaSE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Container;
