import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation'
import StarfieldAnimation from 'react-starfield-animation'
import { Home } from './routes/Home';
import { Films } from './routes/Films';
import { People } from './routes/People';
import { Planets } from './routes/Planets';
import { Species } from './routes/Species';
import { Starships } from './routes/Starships';
import { Vehicle } from './routes/Vehicle';
import { DetailPage } from './routes/DetailPage';
import './style.css';


function App() {

  useEffect(() => {
  })

  return (
    <BrowserRouter>
        <div className='starfield-bg'>
          <StarfieldAnimation className='starfield'/>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navigation />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/films' element={<Films />} />
              <Route path='/people' element={<People />} />
              <Route path='/planets' element={<Planets />} />
              <Route path='/species' element={<Species />} />
              <Route path='/starships' element={<Starships />} />
              <Route path='/vehicle' element={<Vehicle />} />
              <Route path='/:itemID' element={<DetailPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
