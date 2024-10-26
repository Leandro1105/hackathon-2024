package com.example.hackathon.application.questions.resources;

import com.example.hackathon.application.questions.persistence.QuestionsEntity;
import lombok.Getter;

import java.sql.Date;

@Getter
public class QuestionsResponse {
    private Long id;

    private Integer userid;

    private Date datecriation;

    private Integer q1;

    private Integer q2;

    private Integer q3;

    private Integer q4;

    private Integer q5;

    private Integer q6;

    private Integer q7;

    private Integer q8;

    private Integer q9;

    private Integer q10;

    private Integer q11;

    private Integer q12;

    private Integer q13;

    private Integer q14;

    private Integer q15;

    private Integer q16;

    private Integer q17;

    private Integer q18;

    private Integer q19;

    private Integer q20;

    private Integer q21;

    private Integer q22;

    private Integer q23;

    private Integer q24;

    private Integer q25;

    private Integer q26;

    private Integer q27;

    private Integer q28;

    private Integer q29;

    private Float total;

    public QuestionsResponse(QuestionsEntity questionsEntity){
        this.userid = questionsEntity.getUserid();
        this.datecriation = questionsEntity.getDatecriation();
        this.q1 = questionsEntity.getQ1();
        this.q2 = questionsEntity.getQ2();
        this.q3 = questionsEntity.getQ3();
        this.q4 = questionsEntity.getQ4();
        this.q5 = questionsEntity.getQ5();
        this.q6 = questionsEntity.getQ6();
        this.q7 = questionsEntity.getQ7();
        this.q8 = questionsEntity.getQ8();
        this.q9 = questionsEntity.getQ9();
        this.q10 = questionsEntity.getQ10();
        this.q11 = questionsEntity.getQ11();
        this.q12 = questionsEntity.getQ12();
        this.q13 = questionsEntity.getQ13();
        this.q14 = questionsEntity.getQ14();
        this.q15 = questionsEntity.getQ15();
        this.q16 = questionsEntity.getQ16();
        this.q17 = questionsEntity.getQ17();
        this.q18 = questionsEntity.getQ18();
        this.q19 = questionsEntity.getQ19();
        this.q20 = questionsEntity.getQ20();
        this.q21 = questionsEntity.getQ21();
        this.q22 = questionsEntity.getQ22();
        this.q23 = questionsEntity.getQ23();
        this.q24 = questionsEntity.getQ24();
        this.q25 = questionsEntity.getQ25();
        this.q26 = questionsEntity.getQ26();
        this.q27 = questionsEntity.getQ27();
        this.q28 = questionsEntity.getQ28();
        this.q29 = questionsEntity.getQ29();
        this.total = questionsEntity.getTotal();
    }

    public static QuestionsResponse from(QuestionsEntity questionsEntity) {
        return new QuestionsResponse(questionsEntity);
    }
}
