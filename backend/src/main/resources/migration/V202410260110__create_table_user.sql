CREATE TABLE users (
    id              SERIAL,
    cpf        VARCHAR(20),
    name            VARCHAR(255),
    address         VARCHAR(255),
    number          INTEGER,
    district        VARCHAR(255),
    cep             VARCHAR(20),
    city            VARCHAR(100),
    uf              VARCHAR(2),
    fone            VARCHAR(20),
    score           INTEGER,
    email           VARCHAR(255),
    password        VARCHAR(255),
    CONSTRAINT user_id_pk PRIMARY KEY (id)
);
