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
        const response = await AuthApi.GetQuestions(); // Alterado para GetQuestions
        const sortedAnswers = response.data.sort((a, b) => new Date(b.datecriation) - new Date(a.datecriation)); // Ordenar por data
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
              <Box p="2" bg="blue.500" borderRadius="md">
                <Text fontWeight="bold" fontSize="lg" color="white">
                  Data: {new Date(answer.datecriation).toLocaleDateString()} {/* Exibe a data de criação */}
                </Text>
              </Box>
              <Text color="gray.600" mb="1" mt="3">
                Nota Final: {answer.total} {/* Exibe a nota final */}
              </Text>
              <Spacer mt="4" />
              <Flex justify="flex-end">
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Editar Resposta"
                  size="sm"
                  colorScheme="blue"
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
        colorScheme="blue"
        position="fixed"
        bottom="24px"
        right="24px"
        onClick={handleAddAnswerClick}
        zIndex="tooltip"
      />
    </Box>
  );
}
