package com.silva.product.controller;

import com.silva.product.dto.ProductDto;
import com.silva.product.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDto>> findAll() {
        return ResponseEntity.ok(productService.findAll());
    }

    @PostMapping
    public ResponseEntity create(@RequestBody ProductDto productDto) {
        return ResponseEntity.ok(productService.save(productDto));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> findById(@PathVariable String id) {
       ProductDto productDto = productService.findById(id);
        if (productDto == null) {
            
           return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(productDto);
            
    }

}
