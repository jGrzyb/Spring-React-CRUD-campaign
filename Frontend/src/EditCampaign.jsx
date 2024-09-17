import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "./Api";
import CampaignForm from "./CampaignForm";

function EditCampaign() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    Api.getCampaign(id)
      .then((response) => {
        setCampaign(response.data);
        Api.getSeller().then((res) => {
          setSeller({
            ...res.data,
            money: res.data.money + response.data.campaignFund,
          });
          setDiff(res.data.money);
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const updateCampaign = (campaign) => {
    if (Api.validateForm(campaign)) {
      Api.updateCampaign(campaign)
        .then(() => {
          Api.updateSeller({
            name: seller.name,
            money: seller.money - campaign.campaignFund,
          })
            .then(() => {
              navigate("/");
            })
            .catch((error) => console.error("Error updating seller:", error));
        })
        .catch((error) => console.error("Error updating campaign:", error));
    } else {
      alert("Please fill in all the fields correctly.");
    }
  };

  if (!campaign || !seller) return <div>Loading...</div>;

  return (
    <CampaignForm
      onSubmit={updateCampaign}
      conf={(initialData, setC, setS, setD) => {
        setC(initialData.campaign);
        setS({
          ...initialData.seller,
          money: initialData.seller.money,
        });
        setD(initialData.seller.money - initialData.campaign.campaignFund);
      }}
      initialData={{ campaign, seller }}
      text="Edit Campaign"
    />
  );
}

export default EditCampaign;
