import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { put } from '../axiosRequests/requests'
import history from '../history'
import { setNotification } from '../notifications/actions'
import { setCurrentQuestion, updateQuestion } from '../question/actions'

class UpdateQuestionForm extends React.Component {

  renderInput = (formProps) => {
    return(
      <div>
        <label>{ formProps.label }</label>
        <input {...formProps.input} className="inputBox"/>
      </div>
    );
  }

  onSubmit = ({ number, description }) => {
    const { userData, currentQuestion, setCurrentQuestion, setNotification, updateQuestion } = this.props;
    const body = {
      id: currentQuestion.id,
      quizId: currentQuestion.quizId,
      questionNumber: number,
      description: description
    }
    put("question/update", [body], userData.jwt).then((response) => {
      setCurrentQuestion(body);
      updateQuestion(body)
      history.push("/editQuiz");
      setNotification("Question updated", "success", true)
    }).catch((error) => {
      console.log(error.response);
      setNotification("Error - unable to update question", "error", true)
    });
  }

  render(){
    const { questionNumber } = this.props.currentQuestion
    return(
      <div className="">
        <div className="title-large">{`Edit Question ${questionNumber}`}</div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="number" component={this.renderInput} label="Question Number:"/>
          <Field name="description" component={this.renderInput} label="Question description:"/>
          <button className="submit">Save</button><Link to="/editQuiz" className="cancel">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: {
      number: state.currentQuestion.questionNumber,
      description: state.currentQuestion.description
    },
    userData: state.userData,
    currentQuestion: state.currentQuestion
  }
}

export default connect(mapStateToProps,
  { setNotification,
    setCurrentQuestion,
    updateQuestion })(reduxForm({ form: 'questionForm' })(UpdateQuestionForm))