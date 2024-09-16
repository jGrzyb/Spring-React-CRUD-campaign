import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditCampaign() {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const navigate = useNavigate();
    const [seller, setSeller] = useState({
        name: '',
        money: 0
    });
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/sellers/1`)
            .then(response => {
                console.log(response.data);
                setSeller(response.data);
            })
            .catch(error => console.error(error));
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/campaigns/${id}`)
            .then(response => {setCampaign(response.data)
                setSeller({...seller, money: seller.money + response.data.campaignFund});
            })
            .catch(error => console.error(error));
    }, [id]);

    

    const updateCampaign = () => {
        axios.put(`http://localhost:8080/api/campaigns/${id}`, campaign)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    if (!campaign) return <div>Loading...</div>;

    return (
        <div>
            <p>Emerald account: {diff}</p>
            <h1>Edit Campaign</h1>
            <input type="text" placeholder="Name" value={campaign.name} onChange={e => setCampaign({ ...campaign, name: e.target.value })} /><br/>
            <input 
                type="text" 
                placeholder="Keywords" 
                value={campaign.keywords} 
                onChange={e => setCampaign({ ...campaign, keywords: e.target.value })} 
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
            <input type="number" placeholder="Bid Amount" value={campaign.bidAmount} onChange={e => setCampaign({ ...campaign, bidAmount: e.target.value })} /><br/>
            <input type="number" placeholder="Campaign Fund" value={campaign.campaignFund} onChange={e => {
                setCampaign({ ...campaign, campaignFund: e.target.value });
                setDiff(seller.money - e.target.value);
            }} /><br/>
            <input type="checkbox" checked={campaign.status} onChange={e => setCampaign({ ...campaign, status: e.target.checked })} /> Status<br/>
            <select 
                value={campaign.town} 
                onChange={e => setCampaign({ ...campaign, town: e.target.value })} 
                required
            >
                <option value="">Select Town</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select><br/>
            <input type="number" placeholder="Radius" value={campaign.radius} onChange={e => setCampaign({ ...campaign, radius: e.target.value })} /><br/>
            <button onClick={updateCampaign}>Update Campaign</button>
        </div>
    );
}

export default EditCampaign;