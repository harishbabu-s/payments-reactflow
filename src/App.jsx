import './App.css';
import UpdateNode from './Payments';
import OnlinePayments from './OnlinePayments';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' , alignItems: 'center'}}>
      <h3 style={{ marginTop: '5px', marginBottom: '10px' }}>Payments Provider</h3>
      <div style={{ width: '90vw', height: '90vh', border: '1px solid black', marginInline: '5vw'}}>
      <OnlinePayments />
      </div>
    </div>
  );
}

export default App;
