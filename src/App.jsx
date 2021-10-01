import './App.css';
import DropDown from "./components/DropDown"
import store from '../src/Store/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <>
    <Provider store={store}>
    <DropDown></DropDown>
    </Provider>
    </>
  );
}

export default App;
