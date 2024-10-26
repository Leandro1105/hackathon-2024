package com.example.hackathon.configuration;

public enum MessageCodeEnum {

    INVALID_REQUEST_DEFAULT_MESSAGE("invalid.request.default.message"),
    INVALID_ID("invalid.id"),
    REGISTER_NOT_FOUND("register.not.found"),
    REGISTER_NOT_FOUND_BY_ID("register.not.found.by.id"),
    INVALID_DOCUMENT("invalid.document");

    private String value;

    MessageCodeEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return this.value;
    }
}