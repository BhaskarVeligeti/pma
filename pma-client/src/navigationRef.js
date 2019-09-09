import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

/*
All NavigationActions return an object that can be sent to the router using navigation.dispatch() method.
Navigate - Navigate to another route
Set Params - Set Params for given route
*/

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};



