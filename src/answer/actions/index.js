import { getUsingParams } from '../../axiosRequests/requests'

export const getAnswers = (endpoint, param, jwt) => {
  return (dispatch) => {
    getUsingParams(endpoint, param, jwt).then((response) => {
      dispatch({
        type: "SET_ANSWERS",
        payload: response.data
      });
    }).catch((error) => {
      console.log(error.response)
    });
  }
}

export const setCurrentAnswer = (answer) => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: answer
  }
}
