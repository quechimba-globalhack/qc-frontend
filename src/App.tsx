import React, { useEffect } from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from "./components/shared/navbar/Navbar";
import Welcome from "./components/pages/welcome/Welcome";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import UserAuctions from "./components/pages/user_auctions/UserAuctions";
import Experience from "./components/pages/experience/Experience";
import { useStateWithLocalStorage } from "./utils/useStateWithLocalStorage";

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/graphql",
});
// or you can use `import gql from 'graphql-tag';` instead

// TODO: After MVP, each user will have their own private key
const DEFAULT_PK = '5J7LPEhbEURqAEQvfXQjbTuaXQPV76bMUhMmoSnv1mMS51mN9y1';

function App() {
  const { value, setValue } = useStateWithLocalStorage('private-key');
  useEffect(() => {
    setValue(DEFAULT_PK);
  }, [])

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/user-auctions" component={UserAuctions} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
