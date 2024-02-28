import React, { useState } from "react";
import '../../Styles/Proposal.css';
import Header from "./Header";

const Proposal = () => {

  const [form, setForm] = useState({
    title: '',
    description: '',
    name: '',
    skills: [],
    facultyName: '',
    facultyDepartment: ''
  });

  const [skillInput, setSkillInput] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  const addSkill = () => {
    setForm({
      ...form,
      skills: [...form.skills, skillInput]
    });
    console.log(skillInput);
    setSkillInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  function removeSkill(index) {
    const newSkills = form.skills.filter((skill, i) => i !== index);
    setForm({
      ...form,
      skills: newSkills
    });
  }

  return (
    <>    
    <Header/>
    <form className="make-proposal" onSubmit={handleSubmit}>
      <h1>Proposal</h1>
      <div className="proposal">
        <label>Project Title: </label>
        <input type="text" placeholder="Title" name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div className="proposal">
        <label>Project Description: </label>
        <textarea placeholder="Description" className="description" name="description" value={form.description} onChange={handleChange} required />
      </div>
      <div className="proposal">
        <label>Project Name: </label>
        <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="proposal">
        <label>Skills: </label>
        <input type="text" placeholder="Skills" name="skills" value={skillInput} onChange={handleSkillChange} />
        
        <button type="button" className="add-button" onClick={addSkill}>Add Skill</button>
        <div className="skill-chip-container">
        {form.skills.map((skill, index) => <span className="skill-chips" key={index} onClick={() => removeSkill(index)}>{skill}</span>)}

        </div>
      </div>
      <div className="proposal">
        <label>Faculty Name: </label>
        <input type="text" placeholder="Faculty Name" name="facultyName" value={form.facultyName} onChange={handleChange} required />
      </div>
      <div className="proposal">
        <label>Faculty Department: </label>
        <input type="text" placeholder="Faculty Department" name="facultyDepartment" value={form.facultyDepartment} onChange={handleChange} required />
      </div>
      <div className="proposal">
        <button className="proposal--submit" type="submit">Submit</button>
      </div>
    </form>
    </>
  );
};

export default Proposal;