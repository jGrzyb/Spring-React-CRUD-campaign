import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./Api";
import CampaignForm from "./CampaignForm";

function AddCampaign() {
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: "",
    keywords: "",
    bidAmount: 0,
    campaignFund: 0,
    status: false,
    town: "",
    radius: 0,
  });
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    Api.getSeller().then((response) => {
      setSeller(response.data);
      setCampaign((prevCampaign) => ({
        ...prevCampaign,
        campaignFund: response.data.money || 0,
      }));
    });
  }, []);

  const addCampaign = (campaign) => {
    if (Api.validateForm(campaign)) {
      Api.addCampaign(campaign)
        .then(() => {
          Api.updateSeller({
            name: seller.name,
            money: seller.money - campaign.campaignFund,
          })
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.error(error));
        })
        .catch((error) => console.error(error));
    } else {
      alert(
        "Please fill in all the fields correctly. Text fields and dropdowns cannot be empty. Numbers cannot be equal or less than 0."
      );
    }
  };

  if (!campaign || !seller) return <div>Loading...</div>;

  return (
    <CampaignForm
      onSubmit={addCampaign}
      conf={(initialData, setC, setS, setD) => {
        setC(initialData.campaign);
        setS({
          ...initialData.seller,
          money: initialData.seller.money,
        });
        setD(initialData.seller.money - initialData.campaign.campaignFund);
      }}
      initialData={{ campaign, seller }}
      text="Add Campaign"
    />
  );
}

export default AddCampaign;
