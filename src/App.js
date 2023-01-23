
import './App.css';
import AdminLogin from './components/admin/AdminLogin';
// import UserLogin from './components/user/UserLogin';
import SearchUsers from './components/user/UserLogin';

function App() {
  return (
    <div className="App">
      <div>
        {/* <UserLogin /> */}
        <SearchUsers/>
      </div>
      <div>
        <AdminLogin/>
      </div>
    </div>
  );
}

export default App;
