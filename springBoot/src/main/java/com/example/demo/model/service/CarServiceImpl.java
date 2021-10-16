package com.example.demo.model.service;

import com.example.demo.model.entity.Car;
import com.example.demo.model.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarServiceImpl implements ICarService {
    @Autowired
    private CarRepository carRepository;


    @Override
    public List<Car> findAll() {
        return this.carRepository.findAll();
    }

    @Override
    public Car save(Car car) {
        return this.carRepository.save(car);
    }


    @Override
    public Optional<Car> findById(Long id) {
        return this.carRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        this.carRepository.deleteById(id);
    }


}
