package com.example.demo.Services;

import com.example.demo.Models.Seller;

import java.util.List;

public interface SellerService {
    Seller getSellerById(Long id);
    Seller updateSeller(Long id, Seller seller);
}
