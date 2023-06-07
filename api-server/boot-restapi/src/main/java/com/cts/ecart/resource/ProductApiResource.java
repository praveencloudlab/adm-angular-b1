package com.cts.ecart.resource;

import java.util.List;

import com.cts.ecart.entity.Brand;
import com.cts.ecart.entity.Category;
import com.cts.ecart.repository.BrandRepository;
import com.cts.ecart.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cts.ecart.entity.Product;
import com.cts.ecart.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductApiResource {
	
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private CategoryRepository catRepo;
	@Autowired
	private BrandRepository brandRepo;
	
	@GetMapping
	public List<Product> listAll() {
		return productRepository.findAll();
	}
	
	@GetMapping("/{productId}")
	public Product findById(@PathVariable() int productId) {
		return productRepository.findById(productId).orElse(null);
	}


	@PostMapping
	public Product saveProduct(@RequestBody Product product){




		return productRepository.save(product);
	}

	@GetMapping("categories/{categoryId}")
	public Category findCategoriesBycategoryId(@PathVariable int categoryId){
		return catRepo.findById(categoryId).orElse(null);
	}

	@GetMapping("/brands")
	public List<Brand> ListAllBrands(){
		return brandRepo.findAll();
	}

	@GetMapping("/categories")
	public List<Category> listAllCategories(){
		return catRepo.findAll();
	}


}
