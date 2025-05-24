import './App.css'
import Weather from './components/Weather'

export default function App() {

  return (
    <div className='App'>
      <Weather city="Linz" />
      <footer>
        This project is coded by Anastasiia Cherniakh and is {" "}
        <a href="https://github.com/AnastasiaCherniakh/react-weather-app" target='_blank'>open-sourced on Github</a>
      </footer>
    </div>
  )
}
