package com.example.demo.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
// import org.springframework.http.HttpStatus;
// import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.demo.Services.CampaignService;

import jakarta.validation.Valid;

import com.example.demo.Models.Campaign;

@RestController
@RequestMapping("/api/campaigns")
@CrossOrigin(origins = "http://localhost:5173")
public class CampaignController {

    @Autowired
    private CampaignService campaignService;

    @GetMapping
    public List<Campaign> getAllCampaigns() {
        return campaignService.getAllCampaigns();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Campaign> getCampaignById(@PathVariable Long id) {
        Campaign campaign = campaignService.getCampaignById(id);
        return ResponseEntity.ok(campaign);
    }

    @PostMapping
    public Campaign createCampaign(@RequestBody @Valid Campaign campaign) {
        return campaignService.createCampaign(campaign);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Campaign> updateCampaign(@PathVariable Long id, @RequestBody @Valid Campaign campaignDetails) {
        Campaign updatedCampaign = campaignService.updateCampaign(id, campaignDetails);
        return ResponseEntity.ok(updatedCampaign);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCampaign(@PathVariable Long id) {
        campaignService.deleteCampaign(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}