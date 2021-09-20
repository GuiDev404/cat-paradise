import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/:id" component={Single} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App
