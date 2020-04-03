import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { userLogIn, userLogOut } from '../../actions/authActions';

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = { userLogIn, userLogOut }


const Login = ({ auth, userLogIn, userLogOut }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    userLogIn(data.username, data.password);
    reset();
  }

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