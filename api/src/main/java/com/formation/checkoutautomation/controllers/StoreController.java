package com.formation.checkoutautomation.controllers;


import com.formation.checkoutautomation.dtos.StoreDto;
import com.formation.checkoutautomation.services.DispatcherService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin
@RestController
@RequestMapping("/store")
public class StoreController {

    private final DispatcherService dispatcherService;

    public StoreController(DispatcherService dispatcherService) {
        this.dispatcherService = dispatcherService;
    }


    @PostMapping("/automation")
    protected void getLine(@Valid @RequestBody StoreDto storeDto){
        dispatcherService.getLine(storeDto);
    }
}
