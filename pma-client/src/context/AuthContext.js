import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';


/*
  "authUser": Object {
    "role": "5d5c3e1546205407880fad92",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDVjNWYwYTcyYWYyYzE0NDBmOWQ5NGEiLCJpYXQiOjE1NjY0MjQ1MDd9.uv6v9ruEyVEX8jCMlq7JzyqYxQFQ_yd9ZB-b3RauEyY",
    "username": "123",
  }
*/

const INITIAL_STATE = {
  username: '',
  password: '',
  loading: false,
  errorMessage: '',
  authUser: {'username':'123',
  'role':'Administrator'},
  token: null
};
/**
 * step 1 : reducer ( change the state of the app)
 */

const authReducer = (state, action) => {
  switch (action.type) {
    // case 'auth_user':
    //   return { ...state, authUser: action.payload };
    case 'signin':
      return { ...state, authUser: action.payload, loading: true };
    case 'loader':
      return { ...state, loading: false };
    case 'signout':
      return { ...state,...INITIAL_STATE,loading: true  };
    case 'add_error':
      return { ...state, errorMessage: action.payload, loading: true };
    case 'clear_error_message':
      return { ...state, ...INITIAL_STATE };
      case 'change_username':
        return { ...state, username: action.payload };
      case 'change_password':
        return { ...state, password: action.payload };

    default:
      return state;
  }
};

/**
 * step 2 : actions (  How we want to change the data! )
 */

const tryLocalSignin = dispatch => async () => {
  // step 1: Is there a token in AsyncStorage? if Yes then Navigate to Home
  const token = await AsyncStorage.getItem('token');
  const username = await AsyncStorage.getItem('username');
  const role = await AsyncStorage.getItem('role');
  // console.log('token:',token);

  const data = { token, username, role }

  if (token) {
    dispatch({ type: 'signin', payload: data });
    setTimeout(() => {
      dispatch({ type: 'loader', payload: false });
      navigate('Home'); // TODO :change it back
    }, 1000);
  } else {
    // step 2: Navigate to Signup
    // navigate('Home');
    navigate('Location');
    // navigate('BranchSales');
    
    
    // navigate('Auth');
  }
};

const signin = dispatch => async ({ username, password }) => {

  dispatch({ type: 'signin', payload:{
    'username':'123',
    'role':'Administrator'
  } });
  setTimeout(() => {
    dispatch({ type: 'loader', payload: false });
    navigate('Home');
  }, 1000)


};



const signout = dispatch => async () => {
  // step 1: remove token
  // await AsyncStorage.removeItem('token');
  await AsyncStorage.multiRemove(['token', 'username', 'role'])

  // step 2: disptch an action
  dispatch({ type: 'signout'  });

    // step 3: Navigate the user to the 'Signin'
  setTimeout(() => {
    dispatch({ type: 'loader', payload: false });
    navigate('Auth');
  }, 1000);

};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const onUsernameChange = dispatch => username => {
  dispatch({ type: 'change_username', payload: username });
};

const onPasswordChange = dispatch => password => {
  dispatch({ type: 'change_password', payload: password });
};




/**this is the magic part!!! */

const actions = {
  signin,
  signout,
  clearErrorMessage,
  onUsernameChange,
  onPasswordChange,
  tryLocalSignin,
 
}

export const { Provider, Context } = createDataContext(
  authReducer,
  actions,
  INITIAL_STATE
);
