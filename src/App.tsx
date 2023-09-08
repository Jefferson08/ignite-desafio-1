import logo from "./assets/logo.svg"

function App() {
  return (
      <>
          <header className="bg-grey-700 lg:py-20">
              <div className="container flex justify-center">
                  <img src={logo} alt=""/>
              </div>
          </header>

          <main>
              <div className="container">
                  <h1 className="text-base text-white">teste</h1>
              </div>
          </main>

      </>
  )
}

export default App
