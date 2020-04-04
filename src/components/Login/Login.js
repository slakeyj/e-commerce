import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { userLogIn, userLogOut, jwtLogin } from '../../actions/authActions';
import { useCookie, useMount } from 'react-use'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = { userLogIn, userLogOut, jwtLogin }


const Login = ({ auth, userLogIn, userLogOut, jwtLogin }) => {
  // signature: const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [authCookie, updateAuthCookie] = useCookie('auth');

  const { register, handleSubmit, reset } = useForm();



  const onSubmit = async data => {
    try {
      await userLogIn(data.username, data.password);
      reset();
    } catch (e) {
      // dispatch an action to the redux store to indicate login failure
    }
  }

  // calls after component mount, if there is an authCookie, login
  useMount(() => {
    if (authCookie) {
      jwtLogin(authCookie)
    }
  })

  useEffect(() => {
    // if token doesn't match, update it
    if (authCookie !== auth.token) {
      updateAuthCookie(auth.token);
    }
  }, [auth.token, authCookie, updateAuthCookie])

  const LogInForm = (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        type="text"
        name="username"
        placeholder="Username"
        ref={register}
      />
      <Form.Control
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <Button type="submit">Log In</Button>
    </Form>
  )
  const LogOutButton = <Button onClick={userLogOut}>Log Out</Button>

  return auth.loggedIn ? LogOutButton : LogInForm;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)