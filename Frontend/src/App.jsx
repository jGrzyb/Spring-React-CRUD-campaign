import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CampaignList from './CampaignList';
import AddCampaign from './AddCampaign';
import './App.css';
import EditCampaign from './EditCampaign';

function App() {
    return (
        <div>
            <Router>
            <nav>
                <button onClick={() => window.location.href = "/"}>Campaign List</button>
                <button onClick={() => window.location.href = "/add"}>Add Campaign</button>
            </nav>
            <Routes>
                <Route path="/" element={<CampaignList />} />
                <Route path="/add" element={<AddCampaign />} />
                <Route path="/edit/:id" element={<EditCampaign />} />
            </Routes>
        </Router>
        </div>
        
    );
}

export default App;