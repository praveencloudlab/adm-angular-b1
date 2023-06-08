package com.cts.ecart.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "categories")
public class Category {
    @Id
    @GeneratedValue
    private int categoryId;
    private String categoryTitle;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name="category_brands",joinColumns = {@JoinColumn(name = "category_id")},inverseJoinColumns = {@JoinColumn(name="brand_id")})
    private List<Brand> brands=new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name = "category_info",joinColumns = @JoinColumn(name="category_id"),inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> categoryInfo=new ArrayList<>();


    public List<Product> getCategoryInfo() {
        return categoryInfo;
    }

    public void setCategoryInfo(List<Product> categoryInfo) {
        this.categoryInfo = categoryInfo;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryTitle() {
        return categoryTitle;
    }

    public void setCategoryTitle(String categoryTitle) {
        this.categoryTitle = categoryTitle;
    }

    public List<Brand> getBrands() {
        return brands;
    }

    public void setBrands(List<Brand> brands) {
        this.brands = brands;
    }
}
