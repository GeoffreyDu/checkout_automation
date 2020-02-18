package com.formation.checkoutautomation.dtos;

public class StoreDto {

    private ClientDto[] clientDtos;
    private CheckoutDto[] checkoutDtos;

    public StoreDto() {
    }

    public StoreDto(ClientDto[] clientsDtos, CheckoutDto[] checkoutDtos) {
        this.clientDtos = clientsDtos;
        this.checkoutDtos = checkoutDtos;
    }

    public ClientDto[] getClientDtos() {
        return clientDtos;
    }

    public void setClientDtos(ClientDto[] clientDtos) {
        this.clientDtos = clientDtos;
    }

    public CheckoutDto[] getCheckoutDtos() {
        return checkoutDtos;
    }

    public void setCheckoutDtos(CheckoutDto[] checkoutDtos) {
        this.checkoutDtos = checkoutDtos;
    }
}
