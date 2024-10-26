package com.example.hackathon.application.questions;

import br.com.java.tcc.application.questions.persistence.QuestionsEntity;
import br.com.java.tcc.application.questions.persistence.QuestionsRepository;
import br.com.java.tcc.application.questions.resources.QuestionsRequest;
import br.com.java.tcc.application.questions.resources.QuestionsResponse;
import br.com.java.tcc.application.questions.util.QuestionsMapper;
import br.com.java.tcc.configuration.MessageCodeEnum;
import br.com.java.tcc.configuration.MessageConfiguration;
import br.com.java.tcc.exceptions.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
@RequiredArgsConstructor
public class QuestionsServiceImpl implements QuestionsService {

    @Autowired
    MessageConfiguration messageConfiguration;

    private final QuestionsRepository questionsRepository;

    private final QuestionsMapper questionsMapper;

    @Override
    public QuestionsResponse findById(Long id) {

        return questionsMapper.toQuestionDTO(returnQuestion(id));
    }

    @Override
    public List<QuestionsResponse> findAll() {

        return questionsMapper.toQuestionDTO(questionsRepository.findAll());
    }

    @Override
    public QuestionsResponse register(QuestionsRequest questionDTO) {

        QuestionsEntity questionsEntity = questionsMapper.toQuestion(questionDTO);

        return questionsMapper.toQuestionDTO(questionsRepository.save(questionsEntity));
    }

    @Override
    public QuestionsResponse update(Long id, QuestionsRequest questionDTO) {

        if (!questionsRepository.existsById(id)) {
            throw new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Questao)"), HttpStatus.NOT_FOUND);
        }

        QuestionsEntity questionsEntity = returnQuestion(id);
        questionsMapper.updateUserData(questionsEntity, questionDTO);
        QuestionsEntity updateEntity = questionsRepository.save(questionsEntity);
        return questionsMapper.toQuestionDTO(updateEntity);
    }

    @Override
    public String delete(Long id) {
        if (!questionsRepository.existsById(id)) {
            throw new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Questao)"), HttpStatus.NOT_FOUND);
        }

        questionsRepository.deleteById(id);
        return "Formulario id: " + id + " deletado";
    }

    @Override
    public QuestionsEntity returnQuestion(Long id) {
        return questionsRepository.findById(id)
                .orElseThrow(()-> new CustomException(messageConfiguration.getMessageByCode(MessageCodeEnum.REGISTER_NOT_FOUND, "(Questao)"), HttpStatus.NOT_FOUND));
    }
}