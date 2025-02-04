import Header from './Header.js'
import Event_details from './Event_details.jsx'
import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h2>hi</h2>
      <Event_details eventId="1108930032579"/>
      <Button>Hello! Click me pls</Button>
    </div>

    
  );
}
