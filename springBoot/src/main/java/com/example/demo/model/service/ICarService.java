package com.example.demo.model.service;

import com.example.demo.model.entity.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {
    List<Car> findAll();

    Car save(Car car);



    Optional<Car> findById(Long id);

    void delete(Long id);
}
