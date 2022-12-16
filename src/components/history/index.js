import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Entry from './entry.js';

function History(props) {
  console.log(props.history);
  let [index, setIndex] = useState([]);

  props.history.map((entry, idx) =>
    setIndex([...index, idx]));

  return (
    <section>
      <h2>Search History</h2>

      <Accordion>
        {
          props.history.map((entry, idx) =>
            <Entry
              key={index[idx]}
              entry={entry}
            />
          )
        }
      </Accordion>
    </section>
  )
}

export default History;
