import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Register from './Components/Register/Register';
import Page404 from './Components/Page404/Page404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" children={<Register />} />
          {/* <Route path="/" children={}/> */}
          <Route path="*" children={<Page404 />}/>
        </Switch>
      
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
