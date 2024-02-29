import { Header, Footer } from './components/index'
import './App.css';
import { AllRoutes } from './router/AllRoutes';


function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
