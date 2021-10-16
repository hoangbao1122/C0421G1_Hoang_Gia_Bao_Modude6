package com.example.demo.controller;

import com.example.demo.model.entity.Car;
import com.example.demo.model.service.CarServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/car")
public class CarController {

    private final CarServiceImpl carService;

    public CarController(CarServiceImpl carService) {
        this.carService = carService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Car>> getAllCar() {
        List<Car> cars = this.carService.findAll();
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Optional<Car> car = this.carService.findById(id);
        return new ResponseEntity(car, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Car> add(@RequestBody Car car) {
        Car newCar = this.carService.save(car);
        return new ResponseEntity<>(newCar, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Car> update(@RequestBody Car car) {
        Car updateCar = this.carService.save(car);
        return new ResponseEntity<>(updateCar, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        this.carService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
