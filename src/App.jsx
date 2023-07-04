import './App.css'

function App() {

  return (
    <>
    <nav>
      <div>
      <a href=""><img src="./src/assets/Logo.png" alt="logo" className='img-logo'/></a>
      </div>
      <div className='search-climate'>
        <input type="text" placeholder="Busca una ciudad" className='search-climate_tracker' />
        <button type="submit"><i className="fa-brands fa-searchengin"></i></button>
      </div>
      <div className='toggle-switch'>
        <label>
          <input type = 'checkbox' className='toggle-switch_input'/>
          <span className = 'slider'></span>
        </label>
      </div>
    </nav>
    </>
  )
}

export default App
