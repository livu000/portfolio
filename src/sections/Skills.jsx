import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPaintBrush,
} from 'react-icons/fa';
import { DiJavascript1, DiFirebase, DiCss3, DiHtml5 } from 'react-icons/di';

const skills = [
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'JavaScript', icon: <DiJavascript1 size={50} /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} /> },
  { name: 'Firebase', icon: <DiFirebase size={50} /> },
  { name: 'CSS3', icon: <DiCss3 size={50} /> },
  { name: 'HTML5', icon: <DiHtml5 size={50} /> },
  { name: 'Figma', icon: <FaFigma size={50} /> },
  { name: 'UI/UX Design', icon: <FaPaintBrush size={50} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;