import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "./Api";

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    Api.getAllCampaigns()
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the campaigns!", error);
      });
  }, []);

  const handleDelete = (id) => {
    Api.deleteCampaign(id)
      .then(() => {
        setCampaigns((prevCampaigns) =>
          prevCampaigns.filter((campaign) => campaign.id !== id)
        );
      })
      .catch((error) => {
        console.error("There was an error deleting the campaign!", error);
      });
  };

  return (
    <>
      <h1>Campaign List</h1>
      <table style={{ width: "100%", tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Keywords</th>
            <th>Campaign Fund</th>
            <th>BidAmount</th>
            <th>Status</th>
            <th>Town</th>
            <th>Radius</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.id}</td>
              <td>{campaign.name}</td>
              <td>{campaign.keywords}</td>
              <td>{campaign.campaignFund}</td>
              <td>{campaign.bidAmount}</td>
              <td>{campaign.status ? "true" : "false"}</td>
              <td>{campaign.town}</td>
              <td>{campaign.radius}</td>
              <td>
                <Link to={`/edit/${campaign.id}`}>Edit</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(campaign.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CampaignList;
