package com.example.hackathon.application.user.resources;

import lombok.Getter;

@Getter
public class UserRequest {
    private String cpf;

    private String name;

    private String address;

    private Integer number;

    private String district;

    private String cep;

    private String city;

    private String uf;

    private String fone;

    private Integer score;

    private String email;

    private String password;
}
