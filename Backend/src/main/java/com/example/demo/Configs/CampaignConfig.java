package com.example.demo.Configs;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.Models.Campaign;
import com.example.demo.Repositories.CampaignRepository;

import java.util.List;

@Configuration
public class CampaignConfig {
    @Bean
    CommandLineRunner commandLineRunner(CampaignRepository repository) {
        return args -> {
            Campaign camp1 = new Campaign(
                    "camp1",
                    "key1, key2",
                    0.0,
                    0.0,
                    false,
                    "Cracow",
                    0
            );
            Campaign camp2 = new Campaign(
                    "camp2",
                    "key2, key3",
                    0.0,
                    0.0,
                    false,
                    "Warsaw",
                    0
            );
            repository.saveAll(
                    List.of(camp1, camp2)
            );
        };
    }
}