package com.example.hackathon.application.user;

import br.com.java.tcc.application.user.persistence.UserEntity;
import br.com.java.tcc.application.user.persistence.UserRepository;
import br.com.java.tcc.application.user.resources.UserRequest;
import br.com.java.tcc.application.user.resources.UserResponse;
import br.com.java.tcc.application.user.util.UserMapper;
import br.com.java.tcc.configuration.MessageCodeEnum;
import br.com.java.tcc.configuration.MessageConfiguration;
import br.com.java.tcc.exceptions.CustomException;
import br.com.java.tcc.util.Util;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    MessageConfiguration messageConfiguration;

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    @Override
    public UserResponse findById(Long id) {

        return userMapper.toUserDTO(returnUser(id));
    }

    @Override
    public UserResponse findByCpfAndPassword(String cpf, String password) {
        // Encontre a empresa com base no CNPJ e senha
        UserEntity userEntity = userRepository.findByCpfAndPassword(cpf, password);

        // Verifique se a empresa foi encontrada
        if (userEntity != null) {
            // Mapeie a entidade para a resposta e retorne
            return userMapper.toUserDTO(userEntity);
        } else {
            // Lançar uma exceção ou retornar uma resposta adequada se a empresa não for encontrada
            throw new EntityNotFoundException("User not found with the provided CPF/CNPJ and password.");
        }
    }

    @Override
    public List<UserResponse> findAll() {

        return userMapper.toUserDTO(userRepository.findAll());
    }

    @Override
    public UserResponse register(UserRequest userDTO) {
        if(!Util.validationDocument(userDTO.getCpf())){
            throw new RuntimeException("CPF/CNPj inválido");
        }

        UserEntity userEntity = userMapper.toUser(userDTO);

        return userMapper.toUserDTO(userRepository.save(userEntity));
    }

    @Override
    public UserResponse update(Long id, UserRequest userDTO) {

        if (!userRepository.existsById(id)) {
            throw new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Usuario)"), HttpStatus.NOT_FOUND);
        }

        UserEntity userEntity = returnUser(id);
        userMapper.updateUserData(userEntity, userDTO);
        UserEntity updateEntity = userRepository.save(userEntity);
        return userMapper.toUserDTO(updateEntity);
    }

    @Override
    public String delete(Long id) {
        if (!userRepository.existsById(id)) {
            throw new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Usuario)"), HttpStatus.NOT_FOUND);
        }

        userRepository.deleteById(id);
        return "Usuário id: " + id + " deletado";
    }

    @Override
    public UserEntity returnUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()-> new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Usuario)"), HttpStatus.NOT_FOUND));
    }
}