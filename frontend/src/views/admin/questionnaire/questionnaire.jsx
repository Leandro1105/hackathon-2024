import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import AuthApi from "../../../api/auth";

export default function QuestionnaireAnswersList() {
  const [answers, setAnswers] = useState([]);
  const history = useHistory();
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    const fetchAnswers = async () => {
      if (!userId) {
        console.error("Usuário não está logado.");
        return;
      }

      try {
        const response = await AuthApi.GetQuestions();
        const sortedAnswers = response.data.sort((a, b) => new Date(b.datecriation) - new Date(a.datecriation));
        setAnswers(sortedAnswers);
      } catch (err) {
        console.error("Erro ao buscar respostas do questionário:", err);
      }
    };

    fetchAnswers();
  }, [userId]);

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const handleAddAnswerClick = () => {
    history.push("/admin/registerquestionnaire");
  };

  const handleEditAnswer = (answerId) => {
    history.push(`/admin/editanswer/${answerId}`);
  };

  // Função para definir a classificação com base na nota
  const getClassification = (score) => {
    if (score >= 1 && score < 3) {
      return "Não Feliz: Se você respondeu honestamente e obteve esse score baixo, recomendamos que procure observar seu estilo de vida e procure ajuda profissional para compreender melhor esses sentimentos e estabelecer uma avaliação mais apurada desse momento.";
    } else if (score >= 3 && score < 5) {
      return "Moderadamente Feliz: Um score entre 3 e 5 pode ser uma média numérica exata de suas respostas de felicidade e infelicidade. Fortaleça, ainda mais, estes sentimentos com estilo de vida saudável, alimentação, lazer, trabalho, atividades físicas e relações humanas afetivas e próximas, para se tornar uma pessoa ainda mais feliz.";
    } else if (score >= 5 && score <= 6) {
      return "Muito Feliz: Se sentir feliz tem mais benefícios do que apenas sentir-se bem, porque a felicidade está relacionada a saúde, qualidade dos relacionamentos e desempenho acadêmico e profissional.";
    }
    return "";
  };

  return (
    <Box p="6" position="relative" bg="gray.50" minH="100vh">
      <Grid templateColumns={gridTemplateColumns} gap="6" mt="10vh">
        {answers.map((answer) => (
          <GridItem
            key={answer.id}
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            boxShadow="md"
            bg="white"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}
          >
            <Flex direction="column" align="start">
              <Box p="2" borderRadius="md">
                <Text fontWeight="bold" fontSize="lg" color="black">
                  Data: {new Date(answer.datecriation).toLocaleDateString()}
                </Text>
              </Box>
              <Text color="gray.600" mb="1" mt="3">
                Nota Final: {answer.total.toFixed(2)}
              </Text>
              <Text color="gray.500" fontSize="sm" mt="2">
                Classificação: {getClassification(answer.total)}
              </Text>
              <Spacer mt="4" />
              <Flex justify="flex-end">
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Editar Resposta"
                  size="sm"
                  onClick={() => handleEditAnswer(answer.id)}
                />
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      <IconButton
        icon={<AddIcon />}
        aria-label="Adicionar Nova Resposta"
        size="lg"
        position="fixed"
        bottom="24px"
        right="24px"
        onClick={handleAddAnswerClick}
        zIndex="tooltip"
      />
    </Box>
  );
}
