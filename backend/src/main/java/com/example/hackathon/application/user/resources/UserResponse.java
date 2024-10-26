package com.example.hackathon.application.user.resources;

import com.example.hackathon.application.user.persistence.UserEntity;
import lombok.Getter;

@Getter
public class UserResponse {
    private Long id;

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

    public UserResponse(UserEntity userEntity){
        this.id = userEntity.getId();
        this.cpf = userEntity.getCpf();
        this.name = userEntity.getName();
        this.address = userEntity.getAddress();
        this.number = userEntity.getNumber();
        this.district = userEntity.getDistrict();
        this.cep = userEntity.getCep();
        this.city = userEntity.getCity();
        this.uf = userEntity.getUf();
        this.fone = userEntity.getFone();
        this.score = userEntity.getScore();
        this.email = userEntity.getEmail();
        this.password = userEntity.getPassword();
    }

    public static UserResponse from(UserEntity userEntity) {
        return new UserResponse(userEntity);
    }
}
