package com.example.hackathon.application.user.persistence;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.*;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    @Setter(AccessLevel.NONE)
    private Long Id;

    @Column(name = "cpf", nullable = false, unique = true)
    private String cpf;

    @NotBlank(message = "O nome é obrigatório e não pode estar vazio.")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "O endereço é obrigatório e não pode estar vazio.")
    @Column(name = "address", nullable = false)
    private String address;

    @Positive(message = "O número deve ser maior que 0.")
    @Column(name = "number", nullable = false)
    private Integer number;

    @NotBlank(message = "O bairro é obrigatório e não pode estar vazio.")
    @Column(name = "district", nullable = false)
    private String district;

    @Positive(message = "O cep deve ser maior que 0.")
    @Column(name = "cep", nullable = false)
    private String cep;

    @NotBlank(message = "A cidade é obrigatória e não pode estar vazia.")
    @Column(name = "city", nullable = false)
    private String city;

    @NotBlank(message = "A uf é obrigatória e não pode estar vazia.")
    @Column(name = "uf", nullable = false)
    private String uf;

    @NotBlank(message = "O telefone é obrigatório e não pode estar vazio.")
    @Column(name = "fone", nullable = false)
    private String fone;

    @Column(name = "score", nullable = false)
    private Integer score;

    @NotBlank(message = "O email é obrigatório e não pode estar vazio.")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "A senha é obrigatória e não pode estar vazia.")
    @Column(name = "password", nullable = false)
    private String password;

    @Builder
    public UserEntity(String cpf, String name, String address, Integer number, String district, String cep, String city, String uf, String fone, Integer score, String email, String password) {
        this.cpf = cpf;
        this.name = name;
        this.address = address;
        this.number = number;
        this.district = district;
        this.cep = cep;
        this.city = city;
        this.uf = uf;
        this.fone = fone;
        this.score = score;
        this.email = email;
        this.password = password;
    }

    public void setId(Long id){
        this.Id = id;
    }
}