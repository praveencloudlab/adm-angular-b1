package com.cts.ecart.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "brands")
public class Brand {

    @Id
    @GeneratedValue
    private int brandId;
    private String brandTitle;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name = "brand_info",joinColumns = @JoinColumn(name="brand_id"),inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> brandsInfo=new ArrayList<>();

    public List<Product> getBrandsInfo() {
        return brandsInfo;
    }

    public void setBrandsInfo(List<Product> brandsInfo) {
        this.brandsInfo = brandsInfo;
    }

    public int getBrandId() {
        return brandId;
    }

    public void setBrandId(int brandId) {
        this.brandId = brandId;
    }

    public String getBrandTitle() {
        return brandTitle;
    }

    public void setBrandTitle(String brandTitle) {
        this.brandTitle = brandTitle;
    }
}
