# Projeto de Bem-Estar Subjetivo

Este projeto é um sistema completo de gerenciamento de bem-estar subjetivo, permitindo que usuários acompanhem sua felicidade e qualidade de vida. O projeto é dividido em três principais componentes: Backend (Java + Spring Boot), Frontend Web (React) e Mobile (Expo).

## Tecnologias

- **Docker**: Containerização dos serviços.
- **Backend**: Java + Spring Boot, com uma API RESTful.
- **Frontend Web**: React para a interface web.
- **Mobile**: Expo (React Native) para a aplicação móvel.

## Estrutura do Projeto

```plaintext
├── backend        # Backend (API) - Java + Spring Boot
├── frontend       # Frontend Web - React
└── mobile         # Aplicação Mobile - Expo (React Native)

## Telas da aplicação Mobile

Nos prints abaixo podemos ver as telas de login, de legenda do questionário e do questionário. Na tela de login temos o campos de login e o campo de senha, ambos são autenticados e devem estar previamente cadastrados para que não retorne 'Credenciais inválidas':
[![Login-Mob.jpg](https://i.postimg.cc/xdsvWsq5/Login-Mob.jpg)](https://postimg.cc/2qZLW7QL)
A tela abaixo éa tela após o usuário selecionar no menu a opção para responder ao questionário, onde é aberto a tela de legenda de como funciona os questionário para que ele não fique perdido ao se deparar com os campos numéricos de 1 ao 6:
[![Legendas-Mob.jpg](https://i.postimg.cc/zfDw2mD3/Legendas-Mob.jpg)](https://postimg.cc/jD9JCF7r)
O print abaixo é a tela onde o usuário terá de responder ao questionário, sendo reenderizado 4 questões por pagina e com os botões de passar para as próximas perguntas ou para retornar a tela anterior, com os campos bem coloridos para que seja intuitivo as ações necessárias:
[![Questionario-Mob.jpg](https://i.postimg.cc/8s8s2vht/Questionario-Mob.jpg)](https://postimg.cc/XB8VFp1C)

## Telas da aplicação Mobile

A imagem abaixo demonstra a front-end da aplicação, na sua tela de login, onde tambem é validado se o login e a senha estão cadastradas
[![Login-Web.jpg](https://i.postimg.cc/jjjNQzv7/Login-Web.jpg)](https://postimg.cc/Js9GRHfr)
A imagem abaixo demonstra como é a tela de dashboard, tendo várias opções de dashboard diferentes para consultar os resultados dos questionários do usuário  de acordo com o modelo que mais o agrada
[![Dash-Web.jpg](https://i.postimg.cc/0ynDwtGv/Dash-Web.jpg)](https://postimg.cc/CRZRys6r)

