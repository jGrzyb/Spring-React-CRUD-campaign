package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "campaign")
@Getter
@Setter
public class Campaign {
    @Id
    @SequenceGenerator(
        name = "campaign_sequence",
        sequenceName = "campaign_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "campaign_sequence"
    )
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String keywords;

    @NotNull
    @Min(0)
    private Double bidAmount;

    @NotNull
    @Min(0)
    private Double campaignFund;

    @NotNull
    private Boolean status;

    @NotNull
    private String town;

    @NotNull
    @Min(0)
    private Integer radius;

    public Campaign(String name, String keywords, Double bidAmount, Double campaignFund, Boolean status, String town, Integer radius) {
        this.name = name;
        this.keywords = keywords;
        this.bidAmount = bidAmount;
        this.campaignFund = campaignFund;
        this.status = status;
        this.town = town;
        this.radius = radius;
    }

    public Campaign() {
    }
}