import React, { useState } from 'react'
import '../Styles/FacultyProposals.css'
import Header from './components/Header'
import { FaCheck } from 'react-icons/fa'
import Footer from './Footer'

const FacultyProposal = () => {
  const proposals = Array(5).fill({ title: 'Proposal Title', name: 'Name', branch: 'Branch', description: 'Proposal Description', skills: ["C", 'React JS'] });
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [acceptedProposals, setAcceptedProposals] = useState(Array(5).fill(false));

  function showProposalDescription(index) {
    setSelectedProposal({...proposals[index]});
  }

  function closeModal() {
    setSelectedProposal(null);
  }

  function acceptProposal(index) {
    const newAcceptedProposals = [...acceptedProposals];
    newAcceptedProposals[index] = true;
    setAcceptedProposals(newAcceptedProposals);
  }

  return (
    <>
    <Header/>
    <h1 className='my-header'>Proposals</h1>
    <div className='proposals-back'>
      {proposals.map((proposal, index) => (
        <div className='proposals-block' key={index}>
          <p id={index} className='proposalTitle' onClick={() => showProposalDescription(index)}>{proposal.title}</p>
          <button id={index} onClick={() => acceptProposal(index)}>
            {acceptedProposals[index] ? <FaCheck /> : 'Accept'}
          </button>
        </div>
      ))}
    </div>
    {selectedProposal && (
      <div className='modal'>
        <div className='modal-content'>
          <h2>Proposal Details</h2>
          <div>
            <h3 className='title-header'>Title: {selectedProposal.title}</h3>
            <div className='content-block'>Branch: {selectedProposal.branch}</div>
            <div className='content-block'>Skills: <ul className='skills-list'>{selectedProposal.skills.map((skill, index) => <li key={index}>{skill}</li>)}</ul></div>
            <div className='content-block'>Description: {selectedProposal.description}</div>
          </div>
          <div className='buttons-container'>
            <button onClick={closeModal} className='control-buttons'>Close</button>
            <button className='control-buttons'>Accept</button>
          </div>
        </div>
      </div>
    )}
    <Footer/>
    </>
  )
}

export default FacultyProposal