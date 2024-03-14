import { Header, Footer ,ScrollTotop } from './components/index'
import './App.css';
import { AllRoutes } from './router/AllRoutes';


function App() {
  return (
    <div className="App dark:bg-gray-800">
      <Header />
      <ScrollTotop/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
