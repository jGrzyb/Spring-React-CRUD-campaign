package com.example.demo.Services;

import com.example.demo.Models.Campaign;
import java.util.List;

public interface CampaignService {
    List<Campaign> getAllCampaigns();
    Campaign getCampaignById(Long id);
    Campaign createCampaign(Campaign campaign);
    Campaign updateCampaign(Long id, Campaign campaignDetails);
    void deleteCampaign(Long id);
}