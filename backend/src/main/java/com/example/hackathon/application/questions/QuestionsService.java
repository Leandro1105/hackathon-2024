package com.example.hackathon.application.questions;

import br.com.java.tcc.application.questions.persistence.QuestionsEntity;
import br.com.java.tcc.application.questions.resources.QuestionsRequest;
import br.com.java.tcc.application.questions.resources.QuestionsResponse;

import java.util.List;

public interface QuestionsService {

    QuestionsResponse findById(Long id);

    QuestionsEntity returnQuestion(Long id);

    List<QuestionsResponse> findAll();

    QuestionsResponse register(QuestionsRequest questionDTO);

    QuestionsResponse update(Long id, QuestionsRequest questionDTO);

    String delete(Long id);

}
