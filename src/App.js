import { useState } from 'react'
import {React360Viewer} from 'react-360-product-viewer'
import './App.scss';
import axios from "axios"
const BASE_PATH = "https://vinylverse.s3.amazonaws.com/360";

function App() {
  const [ email, setEmail] = useState('')
  const submitEmail = () => {
    axios.post('https://sheet.best/api/sheets/38873ba3-264a-4e9e-9269-56a7b2eb48e9', {email})
    .then(response => {
      console.log("res", response);
    }).catch((e)=>{
      console.log(e)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <React360Viewer
          imagesBaseUrl={BASE_PATH}
          imagesCount={100}
          imagesFiletype="jpg"
          mouseDragSpeed={50}
          imageFilenamePrefix="vv_"
          // reverse
          // imageInitialIndex={1}
          // height={"100vh"}
        />
        <nav>
          <ul>
            <li><img width={100} height={100} src="https://vinyverse.vercel.app/vinylVerse/icons/Logo.svg" alt="vv logo"/></li>
          </ul>
        </nav>
        <div className='form-container'>
          <div className='input-box'>
          <input class="c-checkbox" type="checkbox" id="checkbox"></input>
          <div class="c-formContainer">
          <form class="c-form">
              <input class="c-form__input"  value={email} onChange={e =>  setEmail(e.currentTarget.value)}placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required/>
              <label class="c-form__buttonLabel" for="checkbox"  onClick={submitEmail}>
                <button class="c-form__button" type="button">Send</button>
              </label>
              <label class="c-form__toggle" for="checkbox" data-title="Notify me"></label>
            </form>
            </div>
          </div>
        
        </div>
      </header>
    </div>
  );
}

export default App;
