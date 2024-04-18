import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/app';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import ErrorPage from "./routes/error";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
	  path: "/",
	  element: (<App/>),
	  errorElement : (<ErrorPage/>)
	},
  ]);

root.render(
  <React.StrictMode>
  	<RouterProvider router={router} />
  </React.StrictMode>
);


