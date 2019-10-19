package com.silva.product.service;

import com.silva.product.dto.ProductDto;
import java.util.List;

public interface ProductService {

    public List<ProductDto> findAll();
    public ProductDto findById(String id);
    public boolean save (ProductDto productDto);
    public void deleteById(String id);
}
