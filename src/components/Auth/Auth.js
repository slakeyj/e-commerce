import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
  }
}

const Auth = ({ user, loggedIn, children, permission }) => {
  let okToRender = false;
  let isPermissible = true;
  if (permission) {
    // same as user.permissions && user.permissions.includes(permission) 
    isPermissible = user?.permissions?.includes(permission)
  }

  // returns boolean on whether they are logged in and have proper permissions
  okToRender = loggedIn && isPermissible;
  // if okToRender = true, return children, else null
  return okToRender ? children : null;
}

export default connect(mapStateToProps)(Auth);