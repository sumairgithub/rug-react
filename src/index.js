/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import RugHome from "views/examples/RugHome";
import RugContact from "views/examples/RugContact";
import RugAboutUs from "views/examples/RugAboutUs";
import RugOurProcess from "views/examples/RugOurProcess";
import RugService from "views/examples/RugService";
import RugSale from "views/examples/RugSale";
import RugPrice from "views/examples/RugPrice";
import RugGallary from "views/examples/RugGallary";
import RugGuarantee from "views/examples/RugGuarantee";
import RugReview from "views/examples/RugReview";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
      // render={(props) => <RugHome {...props} />} 
      >
        <RugHome />
      </Route>
      {/* <Route
        path="/rug-about-us"
        exact
        render={(props) => <RugAboutUs {...props} />}
      />
      <Route
        path="/rug-our-process"
        exact
        render={(props) => <RugOurProcess {...props} />}
      />
      <Route
        path="/rug-sale"
        exact
        render={(props) => <RugSale {...props} />}
      />
      <Route
        path="/rug-service"
        exact
        render={(props) => <RugService {...props} />}
      />
      <Route
        path="/rug-price"
        exact
        render={(props) => <RugPrice {...props} />}
      />
      <Route
        path="/rug-gallary"
        exact
        render={(props) => <RugGallary {...props} />}
      />
      <Route
        path="/rug-guarantee"
        exact
        render={(props) => <RugGuarantee {...props} />}
      />
      <Route
        path="/rug-review"
        exact
        render={(props) => <RugReview {...props} />}
      />
      <Route
        path="/rug-contact"
        exact
        render={(props) => <RugContact {...props} />}
      />
      <Route
        path="/index"
        exact
        render={(props) => <Index {...props} />}
      />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
