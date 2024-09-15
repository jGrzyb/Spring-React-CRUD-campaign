import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [campaigns, setCampaigns] = useState([]);
    const [newCampaign, setNewCampaign] = useState({
        name: '',
        keywords: '',
        bidAmount: 0,
        campaignFund: 0,
        status: false,
        town: '',
        radius: 0
    });

    useEffect(() => {
        axios.get('/api/campaigns')
            .then(response => setCampaigns(response.data))
            .catch(error => console.error(error));
    }, []);

    const addCampaign = () => {
        axios.post('/api/campaigns', newCampaign)
            .then(response => setCampaigns([...campaigns, response.data]))
            .catch(error => console.error(error));
    };

    const updateCampaign = (id, updatedCampaign) => {
        axios.put(`/api/campaigns/${id}`, updatedCampaign)
            .then(response => setCampaigns(campaigns.map(campaign => campaign.id === id ? response.data : campaign)))
            .catch(error => console.error(error));
    };

    const deleteCampaign = (id) => {
        axios.delete(`/api/campaigns/${id}`)
            .then(() => setCampaigns(campaigns.filter(campaign => campaign.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Campaign List</h1>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign.id}>
                        {campaign.name} - {campaign.keywords} - {campaign.bidAmount} - {campaign.campaignFund} - {campaign.status ? 'On' : 'Off'} - {campaign.town} - {campaign.radius} km
                        <button onClick={() => deleteCampaign(campaign.id)}>Delete</button>
                        <button onClick={() => updateCampaign(campaign.id, { ...campaign, name: 'Updated Name' })}>Update</button>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Name" value={newCampaign.name} onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} />
            <input type="text" placeholder="Keywords" value={newCampaign.keywords} onChange={e => setNewCampaign({ ...newCampaign, keywords: e.target.value })} />
            <input type="number" placeholder="Bid Amount" value={newCampaign.bidAmount} onChange={e => setNewCampaign({ ...newCampaign, bidAmount: e.target.value })} />
            <input type="number" placeholder="Campaign Fund" value={newCampaign.campaignFund} onChange={e => setNewCampaign({ ...newCampaign, campaignFund: e.target.value })} />
            <input type="checkbox" checked={newCampaign.status} onChange={e => setNewCampaign({ ...newCampaign, status: e.target.checked })} /> Status
            <input type="text" placeholder="Town" value={newCampaign.town} onChange={e => setNewCampaign({ ...newCampaign, town: e.target.value })} />
            <input type="number" placeholder="Radius" value={newCampaign.radius} onChange={e => setNewCampaign({ ...newCampaign, radius: e.target.value })} />
            <button onClick={addCampaign}>Add Campaign</button>
        </div>
    );
}

export default App;