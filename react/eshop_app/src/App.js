import './App.css';
import Home from './pages/Home'
import Appbar from './components/Appbar'
import ItemForm from './pages/ItemForm';
import LogInForm from './pages/LogInForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/itemform' element={<ItemForm/>}/>
          <Route exact path='/login' element={<LogInForm/>} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
