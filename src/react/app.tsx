import React from 'react';
import { createRoot } from 'react-dom/client';
import DashBoard from "./components/dashboard";
import PasswordModal from "./components/passwordModal";
import {ModalProvider} from "./providers/modalProvider";

const App = () => {
    return (
         <React.StrictMode>
             <ModalProvider >
                 <React.Fragment>
                     <DashBoard />
                 </React.Fragment>
             </ModalProvider>
         </React.StrictMode>

    )
}

const app = document.getElementById('app');
const root = createRoot(app);

root.render(<App />);