package com.example.demo.Controllers;

import com.example.demo.Models.Seller;
import com.example.demo.Services.CampaignService;
import com.example.demo.Services.SellerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/sellers")
@CrossOrigin(origins = "http://localhost:5173")
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping("/{id}")
    public ResponseEntity<Seller> getCampaignById(@PathVariable Long id) {
        Seller seller = sellerService.getSellerById(id);
        return ResponseEntity.ok(seller);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Seller> updateCampaign(@PathVariable Long id, @RequestBody @Valid Seller seller) {
        Seller updatedCampaign = sellerService.updateSeller(id, seller);
        return ResponseEntity.ok(updatedCampaign);
    }
}