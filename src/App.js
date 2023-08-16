import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './components/Cover/Cover';
import MainPage2 from './components/CoverPage2/MainPage2';
import MainPage3 from './components/CoverPage3/MainPage3';
import MainPage4 from './components/CoverPage4/MainPage4';
import NavBar from './components/NavBar/NavBar';
import MainPage5 from './components/Page5/MainPage5';
import MainPage6 from './components/Page6/MainPage6';
import MainPage7 from './components/Page7/MainPage7';
import FooterPage from './components/Footer/FooterPage';
import MainFooterPart2 from './components/FooterPart2/MainFooterPart2';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Cover />
      <MainPage2 />
      <MainPage3 />
      <MainPage4 />
      <MainPage5 />
      <MainPage6 /> 
      <MainPage7 />
      <FooterPage />
      <MainFooterPart2 />
    </div>
  );
}

export default App;
