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
    console.log('response', response)
    const user = verifyToken(response.token);
    dispatch(userLogInAction(user, response.token))
  }
}



export const jwtLogin = token => {
  return async dispatch => {
    const user = verifyToken(token);
    if (user) {
      dispatch(userLogInAction(user, token));
    }
  }
}

const userLogInAction = (user, token) => {
  return {
    type: 'USER_LOG_IN',
    user,
    token
  }
}

