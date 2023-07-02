import { Form } from "./Component/Form";
import  Add  from "./Component/Add";
function App() {
 
  return (
    <div className="wrapper">
      <h3>TODOAPP</h3>
      <div className="form-and-todo-box">
      
        <Form/>
    <Add/>
      </div>
    </div>
  );
}

export default App;