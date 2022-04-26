import { Route, Switch, Redirect } from "react-router-dom";

import Quotes from "./pages/Quotes";
import AddQuote from "./pages/AddQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
