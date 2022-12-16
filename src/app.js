import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import History from './components/history';
import Results from './components/results';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [history, setHistory] = useState([]);

  const fetchData = async (requestParams) => {
    let res = await fetch(requestParams.url);
    let json = await res.json();
    let entry = {
      method: requestParams.method,
      url: requestParams.url,
      data: json
    };
    setHistory([...history, entry]);
    setData(json);
  }

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
    fetchData(requestParams);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History history={history} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
