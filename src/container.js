import React, { Fragment } from 'react';
import './container.css';
import SkillsRating from './skillsRating';
import CustomizedDialogs from './rolesDialog';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

function Container() {
  const professionExperienceEducation = [
    {
      designation: 'Associate Technical Lead (Frontend)',
      company: 'Kore.AI',
      companyUrl: 'https://kore.ai/',
      projectIntro: (
        <p>
          Technical guidance to the team, Solving the critical issues,
          Analysising the features and come up with best approaches
        </p>
      ),
      period: '06/04/2022 - present',
      icon: <WorkIcon />,
    },
    {
      designation: 'Senior Development Engineer',
      company: 'Pramati Software Pvt Ltd',
      companyUrl: 'https://pramati.com/',
      product: 'Wavemaker',
      productTechnologies:
        ' Angular, TypeScript, HTML5, CSS3, JavaScript,  React,  Java, Springs',
      roles: (
        <Fragment>
          <li>
            Responsible for the new widgets and delivery for the weekly and
            major releases.{' '}
          </li>
          <li>
            {' '}
            Guiding the junior developers to make sure they are not stuck
            technically.{' '}
          </li>
          <li> Giving suggestions to improve the user experience(UX/UI). </li>
          <li>Updating the project status to managers. </li>
          <li>
            {' '}
            Data formats for table and preparing the npm packages and push to
            npm account for the development.
          </li>
          <li> Ensuring high performance widgets for the wavemaker.</li>
          <li>
            Coordinating the work flow between the graphic designer, API team.{' '}
          </li>
          <li>Communicating with external web services.</li>{' '}
        </Fragment>
      ),
      projectIntro: (
        <p>
          I have worked with the product named{' '}
          <a href="https://www.wavemaker.com/" target="_blank">
            {' '}
            Wavemaker{' '}
          </a>
          which is a low code platform to create webapps. It is a highly
          scalable, open standards-based low-code platform that is easy to
          adopt, embed, and power core enterprise platforms and application
          development.
        </p>
      ),
      period: '24/10/2019 - 04/04/2022',
      icon: <WorkIcon />,
    },
    {
      designation: 'R & D Engineer',
      company: 'NextEducation Pvt Ltd',
      companyUrl: 'https://www.nexteducation.in/',
      product: 'NextTools',
      productTechnologies: 'HTML5, CSS3, JavaScript,   Angular',
      roles: (
        <Fragment>
          <li> Delivering a complete front end application. </li>
          <li>Managing the team towards productivity.</li>
          <li>
            Guiding the junior developers to make sure they are not stuck
            technically.{' '}
          </li>
          <li>Giving suggestions to improve the user experience(UX/UI). </li>
          <li>Updating the project status to managers. </li>
          <li>Ensuring high performance web application.</li>
          <li>
            Writing tested, idiomatic, and documented React, HTML5 and CSS3
          </li>
          <li>
            Coordinating the work flow between the graphic designer, API team.{' '}
          </li>
          <li>Communicating with external web services.</li>
        </Fragment>
      ),
      projectIntro: (
        <p>
          I got the opportunity to work on the product called NextTools which
          was conceptualised as a universal toolset that can be used by teachers
          to teach different concepts with ease, using graphical simulations.
        </p>
      ),
      period: '11/12/2017 - 23/10/2019',
      icon: <WorkIcon />,
    },
    {
      designation: 'Associate Software Engineer',
      company: 'Osmosys Software Solutions',
      companyUrl: 'https://osmosys.co/',
      product: 'PineStem',
      productTechnologies:
        'Bootstrap,HTML5, CSS3, Angular material UI, JavaScript, JQuery, Angular 1.5, .Net web API(REST)',
      roles: (
        <Fragment>
          <li>Delivering a complete front end application. </li>
          <li>Ensuring high performance web application.</li>
          <li>
            Involved writing web API methods required for the project and
            database queries for CRUD operations.{' '}
          </li>
          <li>Involved in the Authorization and Authentication process.</li>
          <li>Updating the project status to managers. </li>
          <li>Ensuring high performance web application.</li>
          <li>
            Writing tested, idiomatic, and documented React, HTML5 and CSS3
          </li>
          <li>
            Coordinating the work flow between the graphic designer, API team.{' '}
          </li>
          <li>Communicating with external web services.</li>
        </Fragment>
      ),
      projectIntro: (
        <p>
          <a href="https://pinestem.com/" target="_blank">
            PineStem{' '}
          </a>
          is an AI(Artificial intelligence) project management tool where
          Software companies can manage their projects, and teams can monitor
          their daily basis tasks. It can monitor the employee performance, and
          assist user to assign the tasks to respective employees based on their
          past performance.
        </p>
      ),
      period: '24/08/2015 - 24/10/2017',
      icon: <WorkIcon />,
    },
    {
      designation: 'JNTUH UNIVERSITY COLLEGE OF ENGINEERING MANTHANI',
      company: 'CSE',
      companyUrl: 'https://jntuhcem.ac.in/',
      projectIntro: (
        <p>
          My college and friends who thought me the things how we can learn and
          apply for the career path. The amount of knowledge transferred from
          friends is not only just made me to acheive{' '}
          <span className="txt-green">71% </span>
          acadamic percentage, It also created the base and confidence to learn
          anything in the world and make use of real world practice.
        </p>
      ),
      period: '2011-2015',
      iconBG: 'rgb(233, 30, 99)',
      icon: <SchoolIcon />,
    },
    {
      designation: 'Board of Intermediate Education A.P',
      company: 'M.P.C (Maths, Physics, Chemistry)',
      projectIntro: (
        <p>
          Little boring phase where I stuck in hostel and studied for the
          acadamic percentage of <span className="txt-green"> 88.5% </span>. But
          I remember my physics lecturer who used to make fun of me. The way he
          called with nick name `Monark` priceless experience :-).
        </p>
      ),
      period: '2009 - 2011',
      iconBG: 'rgb(233, 30, 99)',
      icon: <SchoolIcon />,
    },
    {
      designation: 'Board of Secondary Education A.P',
      company: 'SSC',
      projectIntro: (
        <p>
          Still remind myself that number of books I used to carry school to
          home and vice versa. The way I prepared for the exams was with the
          feeling of no more exams and study for lifetime once I clear the 11
          papers, In the result it made me to acheive the{' '}
          <span className="txt-green"> 87% </span>{' '}
        </p>
      ),
      period: '2009',
      iconBG: 'rgb(233, 30, 99)',
      icon: <SchoolIcon />,
    },
  ];

  const timelineElem = professionExperienceEducation.map((exp) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={exp.period}
        iconStyle={{
          background: exp.iconBG || 'rgb(33, 150, 243)',
          color: '#fff',
        }}
        icon={exp.icon}
      >
        <div className="txt-center">
          <h3 className="vertical-timeline-element-title">{exp.designation}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank">
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
          </h4>
        </div>
        {exp.projectIntro}
        <div className="txt-center">
          {/* <Button color="primary">Roles & Responsibility</Button> */}
          {exp.roles ? (
            <CustomizedDialogs
              productName={exp.product}
              client={exp.company}
              designation={exp.designation}
              technologies={exp.productTechnologies}
              roles={exp.roles}
            />
          ) : (
            ''
          )}
        </div>
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="content-container">
      <div id="introduction" className="introduction">
        <h1>Hello,</h1>
        <h2 className="sub-header">I'm Uday. Associate Technical Lead </h2>
        <p>
          {' '}
          <b> My Moto: Analysis, Bluprint, Code</b>
        </p>
      </div>
      <div className="abcIntro">
        <p>
          {' '}
          Have you ever gone through the software alphabates which are A, B & C
          ?
        </p>
        <p>
          Are you thinking that these are simple english alphabates ? Yes they
          are, but have you ever thought these three characters can teach us
          important software lessons ? Yes, I believe they teach us three main
          steps for any software development
        </p>

        <p>
          <b>Analysis :</b> We should research what end user intent is and how
          our solution is going to fullfill his requirement. It looks simple but
          when we start exploring we should keep our eyes wide and gather all
          the knowledge for the intent.
        </p>

        <p>
          <b>Bluprint :</b> We should design the mocked wireframes which
          simulates user intent. It also keeps the door open for the new ideas.
          Without bluprint if we start writing the code it leads us to write a
          software which is not robust and flexible.
        </p>

        <p>
          <b>Code: </b> While we are developing the product we should be able to
          think that how flexible and maintainable code we are writing. In this
          phase communication with the team plays keyrole.
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
          using the Natural Language, and it is the No-code/low code bots
          platfotm which simply drag and drop or configure the Natural Language
          Processing patterns for the entities.
        </p>

        <p>
          Additionally, I have 7 years of professional product development
          experience. During this time, I have programmed in the Language
          Javascript, Node & JavaSE and having the very good hands on experience
          in the frameworks like Angular and React library with vast array of
          teams. As part of my professional experience I played with most of the
          frontend libraries like Jquery, lodash, ngx-bootstrap, angular
          material, handlebar.js, electronJS, charts, list goes on...
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
      <div class="certifications">
        <p>
          Did I mention that am{' '}
          <i> Microsoft certified in HTML5 and CSS3, JavaScript (70-480) </i> ?{' '}
        </p>
      </div>

      <div id="techSkills" className="tech-stack">
        <SkillsRating />
      </div>
      <div id="projectexp" className="exp-timeline">
        <div className="txt-center">
          {' '}
          <h3>Professional Work experience & Education</h3>
        </div>
        <VerticalTimeline>
          {timelineElem}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Container;
