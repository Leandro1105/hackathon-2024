package com.example.hackathon.application.questions.resources;

import br.com.java.tcc.application.questions.QuestionsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/question")
@RequiredArgsConstructor
public class QuestionsController {
    private final QuestionsService questionsService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<QuestionsResponse> findById(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(questionsService.findById(id));
    }

    @GetMapping
    public ResponseEntity<List<QuestionsResponse>> findAll() {

        return ResponseEntity.ok().body(questionsService.findAll());
    }

    @PostMapping
    public ResponseEntity<QuestionsResponse> register(@RequestBody QuestionsRequest questionsRequest, UriComponentsBuilder uriBuilder){

        QuestionsResponse questionsResponse = questionsService.register(questionsRequest);

        URI uri = uriBuilder.path("/question/{id}").buildAndExpand(questionsResponse.getId()).toUri();

        return ResponseEntity.created(uri).body(questionsResponse);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<QuestionsResponse> update(@RequestBody QuestionsRequest questionDTO, @PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(questionsService.update(id, questionDTO));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") Long id){
        return ResponseEntity.ok().body(questionsService.delete(id));
    }
}
