import Accordion from 'react-bootstrap/Accordion';

function Entry(props) {

  return (
    <Accordion.Item eventKey={props.key}>
      <Accordion.Header>
        Hello
      </Accordion.Header>
      <Accordion.Body>
        {props.entry.data.results}
        Hello
      </Accordion.Body>
    </Accordion.Item>
  )

}

export default Entry;
