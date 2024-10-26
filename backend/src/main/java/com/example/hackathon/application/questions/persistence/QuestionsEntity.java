package com.example.hackathon.application.questions.persistence;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table(name = "questions")
@NoArgsConstructor
@Getter
@Setter
public class QuestionsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    @Setter(AccessLevel.NONE)
    private Long Id;

    @Column(name = "userid", nullable = false)
    private Integer userid;

    @Column(name = "datecriation", nullable = false)
    private Date datecriation;

    @Column(name = "q1", nullable = false)
    private Integer q1;

    @Column(name = "q2", nullable = false)
    private Integer q2;

    @Column(name = "q3", nullable = false)
    private Integer q3;

    @Column(name = "q4", nullable = false)
    private Integer q4;

    @Column(name = "q5", nullable = false)
    private Integer q5;

    @Column(name = "q6", nullable = false)
    private Integer q6;

    @Column(name = "q7", nullable = false)
    private Integer q7;

    @Column(name = "q8", nullable = false)
    private Integer q8;

    @Column(name = "q9", nullable = false)
    private Integer q9;

    @Column(name = "q10", nullable = false)
    private Integer q10;

    @Column(name = "q11", nullable = false)
    private Integer q11;

    @Column(name = "q12", nullable = false)
    private Integer q12;

    @Column(name = "q13", nullable = false)
    private Integer q13;

    @Column(name = "q14", nullable = false)
    private Integer q14;

    @Column(name = "q15", nullable = false)
    private Integer q15;

    @Column(name = "q16", nullable = false)
    private Integer q16;

    @Column(name = "q17", nullable = false)
    private Integer q17;

    @Column(name = "q18", nullable = false)
    private Integer q18;

    @Column(name = "q19", nullable = false)
    private Integer q19;

    @Column(name = "q20", nullable = false)
    private Integer q20;

    @Column(name = "q21", nullable = false)
    private Integer q21;

    @Column(name = "q22", nullable = false)
    private Integer q22;

    @Column(name = "q23", nullable = false)
    private Integer q23;

    @Column(name = "q24", nullable = false)
    private Integer q24;

    @Column(name = "q25", nullable = false)
    private Integer q25;

    @Column(name = "q26", nullable = false)
    private Integer q26;

    @Column(name = "q27", nullable = false)
    private Integer q27;

    @Column(name = "q28", nullable = false)
    private Integer q28;

    @Column(name = "q29", nullable = false)
    private Integer q29;

    @Column(name = "total", nullable = false)
    private Float total;

    @Builder
    public QuestionsEntity(Integer userid, Date datecriation, Integer q1, Integer q2, Integer q3, Integer q4, Integer q5, Integer q6, Integer q7, Integer q8, Integer q9, Integer q10, Integer q11, Integer q12, Integer q13, Integer q14, Integer q15, Integer q16, Integer q17, Integer q18, Integer q19, Integer q20, Integer q21, Integer q22, Integer q23, Integer q24, Integer q25, Integer q26, Integer q27, Integer q28, Integer q29, Float total) {
        this.userid = userid;
        this.datecriation = datecriation;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.q6 = q6;
        this.q7 = q7;
        this.q8 = q8;
        this.q9 = q9;
        this.q10 = q10;
        this.q11 = q11;
        this.q12 = q12;
        this.q13 = q13;
        this.q14 = q14;
        this.q15 = q15;
        this.q16 = q16;
        this.q17 = q17;
        this.q18 = q18;
        this.q19 = q19;
        this.q20 = q20;
        this.q21 = q21;
        this.q22 = q22;
        this.q23 = q23;
        this.q24 = q24;
        this.q25 = q25;
        this.q26 = q26;
        this.q27 = q27;
        this.q28 = q28;
        this.q29 = q29;
        this.total = total;
    }

    public void setId(Long id){
        this.Id = id;
    }
}