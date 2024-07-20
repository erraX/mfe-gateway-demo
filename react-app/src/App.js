import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Users = React.lazy(() => import("./Users"));

function App() {
  return (
    <>
      <Router basename="/react-app">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">react-app - Home</Link>
              </li>
              <li>
                <Link to="/users">react-app - Users</Link>
              </li>
              <li>
                <a href="/next-app/">next-app - Home</a>
              </li>
              <li>
                <a href="/next-app/users">next-app - Users</a>
              </li>
            </ul>
          </nav>
          <h1>This is React app</h1>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <React.Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
