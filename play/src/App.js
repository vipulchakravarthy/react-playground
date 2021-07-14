import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const variant = ["success", "danger", "warning"]
  return (
    <div className="App">
      <h3>Vipul</h3>
      <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        {variant.map((item, index) => {
          return (
            <ListGroup.Item key={index} variant={item} onClick={() => alert('card clicked')}>{item}</ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  );
}

export default App;
