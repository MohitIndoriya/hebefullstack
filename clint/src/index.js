import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {store} from './Store/Store';
import { CategoryProvider } from './ContextAPI/CategoryProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <CategoryProvider>
      <ChakraProvider>
          <Provider store={store}>
          <App />
          </Provider>
      </ChakraProvider>
    </CategoryProvider>
    </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
