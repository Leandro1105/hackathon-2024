package com.example.hackathon.application.questions;


import com.example.hackathon.application.questions.persistence.QuestionsEntity;
import com.example.hackathon.application.questions.resources.QuestionsRequest;
import com.example.hackathon.application.questions.resources.QuestionsResponse;

import java.util.List;

public interface QuestionsService {

    QuestionsResponse findById(Long id);

    QuestionsEntity returnQuestion(Long id);

    List<QuestionsResponse> findAll();

    QuestionsResponse register(QuestionsRequest questionDTO);

    QuestionsResponse update(Long id, QuestionsRequest questionDTO);

    String delete(Long id);

}
