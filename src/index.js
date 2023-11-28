import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import Amplify from "@aws-amplify/core";
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsConfig from './aws-exports';
import { BrowserRouter } from 'react-router-dom'
const container = document.getElementById("root")
const root = createRoot(container)

Amplify.configure(awsConfig);

root.render(
    <React.StrictMode>
        <BrowserRouter>
         <AmplifyProvider>
            <App/>
         </AmplifyProvider>
        </BrowserRouter>
    </React.StrictMode>,
    
);