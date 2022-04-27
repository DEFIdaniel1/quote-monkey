import React, {Suspense} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';
// import Quotes from "./pages/Quotes";
const Quotes = React.lazy(() => import("./pages/Quotes"));
// import AddQuote from "./pages/AddQuote";
const AddQuote = React.lazy(() => import("./pages/AddQuote"))
// import QuoteDetails from "./pages/QuoteDetails";
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<LoadingSpinner className="centered"/>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <Quotes />
            </Route>
            <Route path="/add-quote">
              <AddQuote />
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
