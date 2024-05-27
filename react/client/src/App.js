import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WhatIsItPage from "./components/WhatIsItPage";
import SignPage from "./components/SignPage";
import LoginForm from "./components/LogPage";
import ProfilePage from "./components/ProfilePage";
import NoPage from "./components/NoPage";
import JobDetail from "./components/JobDetail";
import RandomCat from "./components/RandomCat";

function App() {
    return (
        <div className="bg-body-tertiary d-flex flex-column min-vh-100">
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path="/home" element={<MainPage/>}/>
                    <Route path="/what-is-it" element={<WhatIsItPage />}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/signin" element={<SignPage/>} />
                    <Route path="/profile" element={<ProfilePage/>} />
                    <Route path="/job" component={<JobDetail/>} />
                    <Route path="/cat" component={<RandomCat/>} />
                    <Route path="*" element={<NoPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
