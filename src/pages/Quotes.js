import React, {Fragment} from 'react';

import QuoteList from '../components/quotes/QuoteList';

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

const Quotes = () => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </Fragment>
  );
}

export default Quotes