import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/campaigns')
            .then(response => {
                setCampaigns(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the campaigns!', error);
            });
    }, []);

    return (
        <>
        <h1>Campaign List</h1>
        <table style={{ width: '100%', tableLayout: 'fixed' }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Keywords</th>
                    <th>BidAmount</th>
                    <th>Status</th>
                    <th>Town</th>
                    <th>Radius</th>
                </tr>
            </thead>
            <tbody>
                {campaigns.map(campaign => (
                    <tr key={campaign.id}>
                        <td>{campaign.id}</td>
                        <td>{campaign.name}</td>
                        <td>{campaign.keywords}</td>
                        <td>{campaign.bidAmount}</td>
                        <td>{campaign.status ? 'true' : 'false'}</td>
                        <td>{campaign.town}</td>
                        <td>{campaign.radius}</td>
                        <td><Link to={`/edit/${campaign.id}`}>Edit</Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default CampaignList;
