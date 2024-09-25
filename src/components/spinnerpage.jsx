import Spinner from 'react-bootstrap/Spinner';

function Spinnerpage() {
  return (
    <Spinner style={{marginTop:"20px"}} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Spinnerpage