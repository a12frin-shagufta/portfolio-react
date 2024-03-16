import React from 'react';
import { useSpring, animated,config } from 'react-spring';
import './Services.css'; // Import your CSS file

const SkillBar = ({ skill, level }) => {
  // Calculate width based on skill level
  const width = `${level}%`;

  // Animation spring for the skill bar
  const barAnimation = useSpring({
    width,
    from: { width: '0%' },
    config: {duration: 3000, delay: 500}



  });

  return (
    <div className="bar-1">
      <div className="title">{skill}</div>
      <div className="bar">
        <animated.div className="bar-inner" style={{ ...barAnimation, background: '#EED3D9' }} />
        <div className="bar-percent">{level}%</div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container">
      <h2 className="my-skills">My Skills</h2>
      <SkillBar skill="HTML" level={65} />
      <SkillBar skill="CSS" level={85} />
      <SkillBar skill="Javascript" level={95} />
      <SkillBar skill="React" level={75} />
      <SkillBar skill="Next.js" level={75} />

    </div>
  );
};

export default Services;
