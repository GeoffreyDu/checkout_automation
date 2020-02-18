package com.formation.checkoutautomation.services;

import com.formation.checkoutautomation.dtos.CheckoutDto;
import com.formation.checkoutautomation.dtos.ClientDto;
import com.formation.checkoutautomation.dtos.StoreDto;
import org.springframework.stereotype.Service;


@Service
public class DispatcherService {


    public  void getLine(StoreDto storeDto){
        ClientDto[] clientDtos = storeDto.getClientDtos();
        CheckoutDto[] checkoutDtos = storeDto.getCheckoutDtos();

        int index = 1;
        for(ClientDto client : clientDtos){
            System.out.println("Client #" + index++ + " " + client.getNumberOfItems() + " items");
        }

        index = 1;
        for (CheckoutDto checkout : checkoutDtos){

            System.out.println("Checkout #" + index++ + " " + checkout.getVelocity() + " items per minute" );
        }
    }

    public void dispatchClients(){

    }
}
