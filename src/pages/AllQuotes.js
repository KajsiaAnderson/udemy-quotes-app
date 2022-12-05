import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Michael Scott', text: 'You Miss 100% Of The Shots You Don\'t Take. - Wayne Gretzky' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' }
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes