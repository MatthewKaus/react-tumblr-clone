import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { LandingPage } from "./pages/LandingPage";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
