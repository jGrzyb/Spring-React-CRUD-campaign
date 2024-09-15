import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditCampaign() {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/campaigns/${id}`)
            .then(response => setCampaign(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const updateCampaign = () => {
        axios.put(`/api/campaigns/${id}`, campaign)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    if (!campaign) return <div>Loading...</div>;

    return (
        <div>
            <h1>Edit Campaign</h1>
            <input type="text" placeholder="Name" value={campaign.name} onChange={e => setCampaign({ ...campaign, name: e.target.value })} /><br/>
            <input type="text" placeholder="Keywords" value={campaign.keywords} onChange={e => setCampaign({ ...campaign, keywords: e.target.value })} /><br/>
            <input type="number" placeholder="Bid Amount" value={campaign.bidAmount} onChange={e => setCampaign({ ...campaign, bidAmount: e.target.value })} /><br/>
            <input type="number" placeholder="Campaign Fund" value={campaign.campaignFund} onChange={e => setCampaign({ ...campaign, campaignFund: e.target.value })} /><br/>
            <input type="checkbox" checked={campaign.status} onChange={e => setCampaign({ ...campaign, status: e.target.checked })} /> Status<br/>
            <input type="text" placeholder="Town" value={campaign.town} onChange={e => setCampaign({ ...campaign, town: e.target.value })} /><br/>
            <input type="number" placeholder="Radius" value={campaign.radius} onChange={e => setCampaign({ ...campaign, radius: e.target.value })} /><br/>
            <button onClick={updateCampaign}>Update Campaign</button>
        </div>
    );
}

export default EditCampaign;