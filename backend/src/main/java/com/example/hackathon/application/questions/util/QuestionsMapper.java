package com.example.hackathon.application.questions.util;


import com.example.hackathon.application.questions.persistence.QuestionsEntity;
import com.example.hackathon.application.questions.resources.QuestionsRequest;
import com.example.hackathon.application.questions.resources.QuestionsResponse;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class QuestionsMapper {

    public QuestionsEntity toQuestion(QuestionsRequest questionDTO){

        return QuestionsEntity.builder()
                .userid(questionDTO.getUserid())
                .datecriation(questionDTO.getDatecriation())
                .q1(questionDTO.getQ1())
                .q2(questionDTO.getQ2())
                .q3(questionDTO.getQ3())
                .q4(questionDTO.getQ4())
                .q5(questionDTO.getQ5())
                .q6(questionDTO.getQ6())
                .q7(questionDTO.getQ7())
                .q8(questionDTO.getQ8())
                .q9(questionDTO.getQ9())
                .q10(questionDTO.getQ10())
                .q11(questionDTO.getQ11())
                .q12(questionDTO.getQ12())
                .q13(questionDTO.getQ13())
                .q14(questionDTO.getQ14())
                .q15(questionDTO.getQ15())
                .q16(questionDTO.getQ16())
                .q17(questionDTO.getQ17())
                .q18(questionDTO.getQ18())
                .q19(questionDTO.getQ19())
                .q20(questionDTO.getQ20())
                .q21(questionDTO.getQ21())
                .q22(questionDTO.getQ22())
                .q23(questionDTO.getQ23())
                .q24(questionDTO.getQ24())
                .q25(questionDTO.getQ25())
                .q26(questionDTO.getQ26())
                .q27(questionDTO.getQ27())
                .q28(questionDTO.getQ28())
                .q29(questionDTO.getQ29())
                .total(questionDTO.getTotal())
                .build();
    }

    public QuestionsResponse toQuestionDTO(QuestionsEntity questionsEntity){

        return new QuestionsResponse(questionsEntity);
    }

    public List<QuestionsResponse> toQuestionDTO(List<QuestionsEntity> questionList){
        return questionList.stream().map(QuestionsResponse::new).collect(Collectors.toList());
    }

    public void updateUserData(QuestionsEntity questionsEntity, QuestionsRequest questionDTO){

    }

    public QuestionsResponse toQuestionResponse(QuestionsEntity questionsEntity) {
        return new QuestionsResponse(questionsEntity);
    }
}
