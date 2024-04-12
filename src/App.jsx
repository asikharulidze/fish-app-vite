import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import FishWrapper, {fishLoader} from './components/Wrapper/FishWrapper';
//import fishes from './components/Wrapper/fishes';
const router = createBrowserRouter([
  {
    element:<AppLayout />,
    errorElement:<Error />,
    children:[{
      path: "/",
      element:<Home />
    },
    {
      path: "/fishes",
      element:<FishWrapper />,
      loader: fishLoader,
    }]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
