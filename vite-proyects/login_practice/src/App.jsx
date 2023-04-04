import React from 'react'
import Form from './Form'
import Spinner from './components/Spinner'
import useFormSubmission from './hooks/useFormSubmission'

function App() {
  const [formData, setFormData] = React.useState(null);
  const { status, responseData, errorMessage } = useFormSubmission({
    endpoint: 'https://reqres.in/api/login',
    data: formData,
  });

  return (
    <>
      {status === 'resolved' ? (
        <div>
          Welcome, your token is <strong>{responseData.token}</strong>
        </div>
      ) : (
        <Form onSubmit={(data) => setFormData(data)} />
      )}
      <div style={{height: 200}}>
        {status === 'pending' ? <Spinner /> : null}
        {status === 'rejected' ? (
          <div role='alert' style={{color: 'red'}}>
            {errorMessage}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
