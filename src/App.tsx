import {TaskForm} from "./components/TaskForm";
import {Header} from "./components/Header";
import {MyCheckbox} from "./components/Checkbox.tsx";
function App() {
  return (
      <>
          <Header/>

          <main>
              <div className="container">
                  <TaskForm/>
                  <MyCheckbox/>
              </div>
          </main>

      </>
  )
}
export default App
