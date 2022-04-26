import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Ghandi",
    text: "Be the change that you wish to see in the world.",
  },
  {
    id: "q2",
    author: "John Lennon",
    text: "Life is what happens to you while you're busy making other plans..",
  },
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Sorry, no quote found!</p>;
  }

  return (
    <Fragment>
      <h1>Quote Details Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
export default QuoteDetails;
