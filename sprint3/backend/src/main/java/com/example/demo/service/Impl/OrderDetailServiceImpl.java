package com.example.demo.service.Impl;

import com.example.demo.entity.order.OrderDetail;
import com.example.demo.repository.IOrderDetailRepository;
import com.example.demo.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;

    @Override
    public List<OrderDetail> list() {
        return this.iOrderDetailRepository.findAll();
    }

    @Override
    public void saveOrder(OrderDetail orderDetail) {
        this.iOrderDetailRepository.createOrderDetail(orderDetail.getFood().getFadId(), orderDetail.getOrders().getOrderId(), orderDetail.getQuantity());
    }

    @Override
    public List<OrderDetail> findCartCustomer() {
        return this.iOrderDetailRepository.getFindByCustomer();
    }
}
