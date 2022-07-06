
import Button from './component/button'
import './App.css';

function App() {
  return (
    <>
    <h1>button color</h1>
    <Button 
      border="none"
      color="blue"
      height = "50px"
      onClick={() => alert("You clicked on the pink circle!")}
      radius = "5%"
      width = "100px"
      text = "click"
      className='p-8'
    />
  </>
  );
}

export default App;
