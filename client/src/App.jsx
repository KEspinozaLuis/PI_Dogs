import { Landing, Home, Detail, Form } from './view';
import { Routes, Route, useLocation} from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import './app.css';

function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      {pathname !== '/' && <NavBar/>}
       <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/create' element={<Form />}/>
       </Routes>
    </div>
  );
}

export default App;
