package com.example.hackathon.application.user.util;

import com.example.hackathon.application.user.persistence.UserEntity;
import com.example.hackathon.application.user.resources.UserRequest;
import com.example.hackathon.application.user.resources.UserResponse;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserEntity toUser(UserRequest userDTO){

        return UserEntity.builder()
                .cpf(userDTO.getCpf())
                .name(userDTO.getName())
                .address(userDTO.getAddress())
                .number(userDTO.getNumber())
                .district(userDTO.getDistrict())
                .cep(userDTO.getCep())
                .city(userDTO.getCity())
                .uf(userDTO.getUf())
                .fone(userDTO.getFone())
                .score(userDTO.getScore())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .build();
    }

    public UserResponse toUserDTO(UserEntity userEntity){

        return new UserResponse(userEntity);
    }

    public List<UserResponse> toUserDTO(List<UserEntity> userList){
        return userList.stream().map(UserResponse::new).collect(Collectors.toList());
    }

    public void updateUserData(UserEntity userEntity, UserRequest userDTO){
        if (userDTO.getCpf() != null) {
            userEntity.setCpf(userDTO.getCpf());
        }
        if (userDTO.getName() != null) {
            userEntity.setName(userDTO.getName());
        }
        if (userDTO.getAddress() != null) {
            userEntity.setAddress(userDTO.getAddress());
        }
        if (userDTO.getNumber() != null) {
            userEntity.setNumber(userDTO.getNumber());
        }
        if (userDTO.getDistrict() != null) {
            userEntity.setDistrict(userDTO.getDistrict());
        }
        if (userDTO.getCep() != null) {
            userEntity.setCep(userDTO.getCep());
        }
        if (userDTO.getCity() != null) {
            userEntity.setCity(userDTO.getCity());
        }
        if (userDTO.getUf() != null) {
            userEntity.setUf(userDTO.getUf());
        }
        if (userDTO.getFone() != null) {
            userEntity.setFone(userDTO.getFone());
        }
        if (userDTO.getEmail() != null) {
            userEntity.setEmail(userDTO.getEmail());
        }
    }

    public UserResponse toUserResponse(UserEntity userEntity) {
        return new UserResponse(userEntity);
    }
}
