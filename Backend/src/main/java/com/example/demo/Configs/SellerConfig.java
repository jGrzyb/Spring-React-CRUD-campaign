package com.example.demo.Configs;

import com.example.demo.Models.Seller;
import com.example.demo.Repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SellerConfig {
    @Autowired
    private SellerRepository sellerRepository;

    @Bean
    CommandLineRunner commandLineRunnerSeller(SellerRepository repository) {
        return args -> {
            Seller sel1 = new Seller(
                    "sel1",
                    100.0f
            );
            repository.save(sel1);
        };
    }
}
