package com.silva.product.dao.repositories;

import com.silva.product.dao.entities.ProductEmtity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductRepository extends JpaRepository<ProductEmtity, String> {
    
}
