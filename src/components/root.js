import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import { Provider } from 'react-redux'
import NoMatch from "views/NoMatch";
import AuthService from "services/auth";

const authService = new AuthService();
console.log(!authService.loggedIn())

export const Root = ({store})=>(
    <>
   <Provider store={store}>
          { authService.loggedIn() && (
              <BrowserRouter>
              <Switch>
              <Route path="/admin" render={props => <AdminLayout {...props} />}/>
              <Route path="/admin/*" render={NoMatch}/>
              <Redirect from = "/" to="/admin/staff" />
              <Redirect from = "/*" to="/admin/staff" />

              </Switch>
              </BrowserRouter>
          )
          }
          { !authService.loggedIn() && (
              <BrowserRouter>
              <Switch>
              <Route path="/auth" render={props => <AuthLayout {...props} />}/>
              <Route path="/*" render={props => <AuthLayout {...props} />}>
              <NoMatch />
              </Route>
              </Switch>
              </BrowserRouter>
          )
          }

    </Provider>
        </>
);