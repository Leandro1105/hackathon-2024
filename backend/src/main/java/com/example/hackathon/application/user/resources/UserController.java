package com.example.hackathon.application.user.resources;

import com.example.hackathon.application.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserResponse> findById(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(userService.findById(id));
    }

    @GetMapping("/login")
    public ResponseEntity<UserResponse> findByCpfAndPassword(
            @RequestParam(name = "cpf") String cpf,
            @RequestParam(name = "password") String password
    ) {
        UserResponse userResponse = userService.findByCpfAndPassword(cpf, password);

        if (userResponse != null) {
            return ResponseEntity.ok().body(userResponse);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> findAll() {

        return ResponseEntity.ok().body(userService.findAll());
    }

    @PostMapping
    public ResponseEntity<UserResponse> register(@RequestBody UserRequest userRequest, UriComponentsBuilder uriBuilder){

        UserResponse userResponse = userService.register(userRequest);

        URI uri = uriBuilder.path("/user/{id}").buildAndExpand(userResponse.getId()).toUri();

        return ResponseEntity.created(uri).body(userResponse);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<UserResponse> update(@RequestBody UserRequest companyDTO, @PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(userService.update(id, companyDTO));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") Long id){
        return ResponseEntity.ok().body(userService.delete(id));
    }
}
