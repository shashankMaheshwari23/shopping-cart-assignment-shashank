import {lazy, Suspense} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
import ErrorBoundary from './components/ErrorBoundary';
import { PersistGate } from 'redux-persist/integration/react'
const Home = lazy(()=>import('./components/home/Home')) ;
const Product = lazy(()=>import('./components/product/Product')) ;
const Login = lazy(()=>import('./components/register/Login')) ;
const Signup = lazy(()=>import('./components/register/Signup')) ;


function App() {
  return (
    <ErrorBoundary>
    <Provider store={Store.Store}>
      <PersistGate loading={null} persistor={Store.persistor} >
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div className="container-fluid">
          <div className="main-container">
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products/:key" component={Product}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
            </Switch>
            </Suspense>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
