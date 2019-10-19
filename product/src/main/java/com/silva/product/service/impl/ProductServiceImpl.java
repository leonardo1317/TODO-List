package com.silva.product.service.impl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.silva.product.dao.entities.ProductEmtity;
import com.silva.product.dao.repositories.ProductRepository;
import com.silva.product.dto.ProductDto;
import com.silva.product.service.ProductService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    private final static Gson GSON = new GsonBuilder()
            .setDateFormat("yyyy-MM-dd'T'HH:mm:ssz")
            .create();

    @Override
    public List<ProductDto> findAll() {

        String productListJson = GSON.toJson(productRepository.findAll());
        return GSON.fromJson(productListJson, new TypeToken<ArrayList<ProductDto>>() {
        }.getType());
    }

    @Override
    public ProductDto findById(String id) {
   
        String product = GSON.toJson(productRepository.findById(id));
        return GSON.fromJson(product, ProductDto.class);
    }

    @Override
    public boolean save(ProductDto productDto) {
        
        
        
       if(productDto != null){
            Date date = new Date();
            productDto.setCreatedAt(date);
        }

       String product = GSON.toJson(productDto);
       ProductEmtity productEmtity = GSON.fromJson(product, ProductEmtity.class);
       System.out.println(GSON.toJson(productEmtity));
        return productRepository.save(productEmtity) != null;
    }

    @Override
    public void deleteById(String id) {
        productRepository.deleteById(id);
    }

}
