import axios from "axios";

const URL = "http://localhost:8080/api";

const Api = {
  getAllCampaigns: async () => {
    return await axios.get(`${URL}/campaigns`);
  },
  getCampaign: async (id) => {
    return await axios.get(`${URL}/campaigns/${id}`);
  },
  getSeller: async () => {
    return await axios.get(`${URL}/sellers/1`);
  },
  updateSeller: async (newMoney) => {
    return await axios.put(`${URL}/sellers/1`, newMoney);
  },
  updateCampaign: async (campaign) => {
    return await axios.put(`${URL}/campaigns/${campaign.id}`, campaign);
  },
  addCampaign: async (campaign) => {
    return await axios.post(`${URL}/campaigns`, campaign);
  },
  deleteCampaign: async (id) => {
    return await axios.delete(`${URL}/campaigns/${id}`);
  },
  validateForm: (campaign) => {
    const { name, keywords, bidAmount, campaignFund, town, radius } = campaign;
    return (
      name.trim() !== "" &&
      keywords.trim() !== "" &&
      bidAmount > 0 &&
      campaignFund > 0 &&
      town.trim() !== "" &&
      radius > 0
    );
  },

  //   const getAllCampaignsAndSeller = async () => {
  //     campaigns = null;
  //     seller = null;
  //     const response1 = await axios
  //       .get(`${URL}/campaigns`)
  //       .then((response) => (campaigns = response.data))
  //       .catch((error) => console.error(error));
  //     const response2 = await axios
  //       .get(`${URL}/sellers/1`)
  //       .then((response) => (seller = response.data))
  //       .catch((error) => console.error(error));
  //     return {
  //       campaigns: await response1.json(),
  //       seller: await response2.json(),
  //     };
  //   };
};

export default Api;
