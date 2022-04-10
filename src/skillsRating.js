import React from 'react';
import './skillRating.css';

function SkillsRating() {
  var skillObject = {
    outOf: 10,
    techStack: [
      {
        language: 'Javascript',
        rating: 8,
      },
      {
        language: 'Angular',
        rating: 8,
      },
      {
        language: 'HTML/CSS',
        rating: 8,
      },

      {
        language: 'Jquery',
        rating: 7,
      },
      {
        language: 'handlebarJS',
        rating: 7,
      },
      {
        language: 'ngx-bootstrap',
        rating: 7,
      },
      {
        language: 'electronJS',
        rating: 6,
      },
      {
        language: 'React',
        rating: 5,
      },
      {
        language: 'NodeJs',
        rating: 5,
      },
      {
        language: 'JavaSE',
        rating: 5,
      },
    ],
  };

  function getCircle(rating) {
    let circles = [];
    for (let index = 0; index < skillObject.outOf; index++) {
      circles.push(
        <span className={`skill-circle ${index < rating ? 'active' : ''}`}>
          {' '}
        </span>
      );
    }
    return circles;
  }
  const skillItems = skillObject.techStack.map((stack) => {
    // let circles = '';

    return (
      <li>
        {' '}
        <div className="list-label">
          <b>{stack.language} </b>({stack.rating}/{skillObject.outOf}){' '}
        </div>
        <div className="circles-container">{getCircle(stack.rating)} </div>
      </li>
    );
  });
  return (
    <div className="txt-center">
      <h4>Technical Skills</h4>
      <ul>{skillItems}</ul>
    </div>
  );
}

export default SkillsRating;
