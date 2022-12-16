import React, { useState } from 'react';
import './form.scss';

const Form = (props) => {
  let [method, setMethod] = useState('GET');
  let [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button data-testid="submit-btn" type="submit">GO!</button>
        </label>
        <label className="methods">
          <input
            type="button"
            name="GET"
            id="get"
            data-testid="get"
            value="GET"
            onClick={(e) => { setMethod(e.target.value) }}
          />
          <input
            type="button"
            name="POST"
            id="post"
            value="POST"
            onClick={(e) => { setMethod(e.target.value) }}
          />
          <input
            type="button"
            name="PUT"
            id="put"
            value="PUT"
            onClick={(e) => { setMethod(e.target.value) }}
          />
          <input
            type="button"
            name="DELETE"
            id="delete"
            value="DELETE"
            onClick={(e) => { setMethod(e.target.value) }}
          />
        </label>
      </form>
    </>
  );
}

export default Form;
