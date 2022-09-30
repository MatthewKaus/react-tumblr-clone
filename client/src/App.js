import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
