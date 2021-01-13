import './styles.css';
import EventDashboard from '../../features/events/eventDashboard/EventDashboards';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <div >
      <h1>Re-vents!</h1>
      <NavBar/>
      <EventDashboard />
    </div>
  );
}

export default App;