package com.example.demo.Models;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.Setter;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.Check;

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
    @Column(nullable = false)
    private String name;

    @NotNull
    @Column(nullable = false)
    private String keywords;

    @NotNull
    @Min(0)
    @Column(nullable = false)
    @Check(constraints = "bid_amount >= 0")
    private Double bidAmount;

    @NotNull
    @Min(0)
    @Column(nullable = false)
    @Check(constraints = "campaign_fund >= 0")
    private Double campaignFund;

    @NotNull
    @Column(nullable = false)
    private Boolean status;

    @NotNull
    @Column(nullable = false)
    private String town;

    @NotNull
    @Min(0)
    @Column(nullable = false)
    @Check(constraints = "radius >= 0")
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