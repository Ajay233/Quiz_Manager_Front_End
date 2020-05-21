import React from 'react'
import { Link } from 'react-router-dom'

class Question extends React.Component {

  handleView = () => {
    const { question, userData, getAnswers, setCurrentQuestion } = this.props
    const param = { questionId: question.id }
    getAnswers("answer/findByQuestionId", param, userData.jwt)
    setCurrentQuestion(question);
  }

  handleDelete = () => {
    const { question, setCurrentQuestion, showModal } = this.props
    setCurrentQuestion(question);
    showModal();
  }

  renderQuestion = () => {
    const { questionNumber, description } = this.props.question
    return(
      <div className="questionContainer">
        <div className="questionNumber">{questionNumber}</div>
        <div className="questionDescription">{description}</div>
        {this.renderOptions()}
      </div>
    )
  }

  renderOptions = () => {
    const { permission } = this.props.userData;
    return(
      <div className="options">
        { permission === "READ-ONLY" ? <Link to="/viewQuestion" className="view" onClick={this.handleView}><i className="far fa-eye blue"></i> View</Link> : null }
        { permission === "ADMIN" ? <Link to="/editQuestion" className="edit" onClick={this.handleView}><i className="fas fa-edit blue"></i> Edit</Link> : null }
        { permission === "ADMIN" ? <Link to="#" className="deleteOption" onClick={this.handleDelete}><i className="fas fa-trash-alt red"></i> Delete</Link> : null }
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.renderQuestion()}
      </div>
    );
  }
}

export default Question
