import logo from './logo.svg';
import './App.css';
import BarChart from './cmps/chart';
import Vaccine from './cmps/vacciene';
import Vaccine2 from './cmps/vaccine2';
import VaccineByAge from './cmps/vaccineByAge';
import VaccineByAgeSecond from './cmps/vaccineByAgeSecond';
import Header from './cmps/header';

function App() {
  return (
    <div ><Header />
      <div className="main-layout">
        <Vaccine />
        <Vaccine2 />
        <BarChart></BarChart>
        <div> <VaccineByAge />
          <VaccineByAgeSecond /></div></div>
    </div>
  );
}

export default App;
