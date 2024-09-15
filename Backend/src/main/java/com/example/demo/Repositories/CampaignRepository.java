package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Campaign;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}