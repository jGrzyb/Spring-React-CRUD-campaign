import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddCampaign.css';

function AddCampaign() {
    const [newCampaign, setNewCampaign] = useState({
        name: '',
        keywords: '',
        bidAmount: 0,
        campaignFund: 0,
        status: false,
        town: '',
        radius: 0
    });
    const navigate = useNavigate();

    const validateForm = () => {
        const { name, keywords, bidAmount, campaignFund, town, radius } = newCampaign;
        return (
            name.trim() !== '' &&
            keywords.trim() !== '' &&
            bidAmount > 0 &&
            campaignFund > 0 &&
            town.trim() !== '' &&
            radius > 0
        );
    };

    const addCampaign = () => {
        if (validateForm()) {
            axios.post('http://localhost:8080/api/campaigns', newCampaign)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    return (
        <div>
            <h1>Add Campaign</h1>
            <input 
                type="text" 
                placeholder="Name" 
                value={newCampaign.name} 
                onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} 
                required 
            /><br/>
            <input 
                type="text" 
                placeholder="Keywords" 
                value={newCampaign.keywords} 
                onChange={e => setNewCampaign({ ...newCampaign, keywords: e.target.value })} 
                required 
                list="keywords-list"
            /><br/>
            <datalist id="keywords-list">
                <option value="Marketing" />
                <option value="Sales" />
                <option value="Development" />
                <option value="Design" />
                <option value="Finance" />
            </datalist>
            <input 
                type="number" 
                placeholder="Bid Amount" 
                value={newCampaign.bidAmount} 
                onChange={e => setNewCampaign({ ...newCampaign, bidAmount: e.target.value })} 
                required 
            /><br/>
            <input 
                type="number" 
                placeholder="Campaign Fund" 
                value={newCampaign.campaignFund} 
                onChange={e => setNewCampaign({ ...newCampaign, campaignFund: e.target.value })} 
                required 
            /><br/>
            <input 
                type="checkbox" 
                checked={newCampaign.status} 
                onChange={e => setNewCampaign({ ...newCampaign, status: e.target.checked })} 
                required 
            /> Status<br/>
            <select 
                value={newCampaign.town} 
                onChange={e => setNewCampaign({ ...newCampaign, town: e.target.value })} 
                required
            >
                <option value="">Select Town</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select><br/>
            <input 
                type="number" 
                placeholder="Radius" 
                value={newCampaign.radius} 
                onChange={e => setNewCampaign({ ...newCampaign, radius: e.target.value })} 
                required 
            /><br/>
            <button onClick={addCampaign}>Add Campaign</button>
        </div>
    );
}

export default AddCampaign;