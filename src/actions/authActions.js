import verifyToken from '../lib/verifyToken'

export const userLogOut = () => {
  return {
    type: 'USER_LOG_OUT'
  }
}

export const userLogIn = (username, password) => {
  return async dispatch => {
    const raw = await fetch('http://localhost:3333/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      }
    })
    const response = await raw.json();
    // Add verify token here
    const user = verifyToken(response.token);
    dispatch(userLogInAction(user))
  }
}

const userLogInAction = (user) => {
  return {
    type: 'USER_LOG_IN',
    payload: user
  }
}