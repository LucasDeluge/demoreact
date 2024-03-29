import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todolist from "./Components/Todolist/Todolist";
import JustePrix from "./Components/JustePrix";
import Hangman from "./Components/Hangman";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="todolist" element={<Todolist />} />
                    <Route path="justeprix" element={<JustePrix />} />
                    <Route path="hangman" element={<Hangman />} />
                </Route>
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
    ;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
