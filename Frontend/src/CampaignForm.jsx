import React, { useState, useEffect } from "react";
import "./AddCampaign.css";

const CampaignForm = ({ onSubmit, conf, initialData, text = {} }) => {
  const [campaign, setCampaign] = useState({
    name: "",
    keywords: "",
    bidAmount: 0,
    campaignFund: 0,
    status: false,
    town: "",
    radius: 0,
  });
  const [diff, setDiff] = useState(0);
  const [seller, setSeller] = useState(null);

  conf = (initialData) => {
    setCampaign(initialData.campaign);
    setSeller({
      ...initialData.seller,
      money: initialData.seller.money,
    });
    setDiff(initialData.seller.money - initialData.campaign.campaignFund);
  };

  useEffect(() => {
    conf(initialData, setCampaign, setSeller, setDiff);
  }, [initialData]);

  return (
    <div>
      <p>Emerald account: {diff}</p>
      <h1>{text}</h1>
      <input
        type="text"
        placeholder="Name"
        value={campaign.name}
        onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
        required
      />
      Name
      <br />
      <input
        type="text"
        placeholder="Keywords"
        value={campaign.keywords}
        onChange={(e) => setCampaign({ ...campaign, keywords: e.target.value })}
        required
        list="keywords-list"
      />
      Keywords
      <br />
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
        value={campaign.bidAmount}
        onChange={(e) =>
          setCampaign({ ...campaign, bidAmount: e.target.value })
        }
        required
      />
      Bid Amount
      <br />
      <input
        type="number"
        placeholder="Campaign Fund"
        value={campaign.campaignFund}
        onChange={(e) => {
          setCampaign({ ...campaign, campaignFund: e.target.value });
          setDiff(seller.money - e.target.value);
        }}
        required
      />
      Campaign Fund
      <br />
      <input
        type="checkbox"
        checked={campaign.status}
        onChange={(e) => setCampaign({ ...campaign, status: e.target.checked })}
        required
      />{" "}
      Status
      <br />
      <select
        value={campaign.town}
        onChange={(e) => setCampaign({ ...campaign, town: e.target.value })}
        required
      >
        <option value="">Select Town</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
        <option value="Houston">Houston</option>
        <option value="Phoenix">Phoenix</option>
      </select>
      Town
      <br />
      <input
        type="number"
        placeholder="Radius"
        value={campaign.radius}
        onChange={(e) => setCampaign({ ...campaign, radius: e.target.value })}
        required
      />
      Radius
      <br />
      <button onClick={() => onSubmit(campaign)}>{text}</button>
    </div>
  );
};

export default CampaignForm;
