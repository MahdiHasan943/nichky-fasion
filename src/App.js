import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';

function App() {
  return (
    <div className=" max-w-[1520px]  mx-auto">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
