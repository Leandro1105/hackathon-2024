import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import AuthApi from "../../../api/auth";
import { useHistory } from "react-router-dom";

export default function Questionnaire() {
  const [values, setValues] = useState({
    quest1: 0,
    quest2: 0,
    quest8: 0,
    quest21: 0,
    quest10: 0,
    quest16: 0,
    quest6: 0,
    quest4: 0,
    quest18: 0,
    quest5: 0,
    quest22: 0,
    quest23: 0,
    quest9: 0,
    quest11: 0,
    quest7: 0,
    quest19: 0,
    quest20: 0,
    quest12: 0,
    quest3: 0,
    quest27: 0,
    quest25: 0,
    quest24: 0,
    quest26: 0,
    quest15: 0,
    quest17: 0,
    quest13: 0,
    quest14: 0,
    quest28: 0,
    quest29: 0,
  });

  const [tabIndex, setTabIndex] = useState(0); // Estado para a aba atual
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Cadastrar");
  const textColor = useColorModeValue("navy.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const history = useHistory();

  const invertedQuestions = [
    "quest1",
    "quest5",
    "quest6",
    "quest10",
    "quest13",
    "quest14",
    "quest19",
    "quest23",
    "quest24",
    "quest27",
    "quest28",
    "quest29",
  ];

  const handleButtonClick = (question, value) => {
    setValues((prev) => ({ ...prev, [question]: value }));
  };

  const processValue = (question, value) => {
    return invertedQuestions.includes(question) ? 7 - value : value;
  };

  const register = async (event) => {
    if (event) event.preventDefault();
    try {
      setButtonText("Cadastrando");

      const userId = JSON.parse(localStorage.getItem("userId"));
      if (!userId) {
        return setError("Usuário não está logado.");
      }

      const processedResponses = Object.fromEntries(
        Object.entries(values).map(([key, val]) => [
          key,
          processValue(key, val),
        ])
      );

      // Calcula a soma das respostas e divide por 29
      const sumOfResponses = Object.values(processedResponses).reduce(
        (acc, val) => acc + val,
        0
      );
      const finalPoints = sumOfResponses / 29;

      // Cria o payload com os nomes de campo da tabela
      const payload = {
        userid: userId,
        datecriation: new Date(),
        q1: processedResponses.quest1,
        q2: processedResponses.quest2,
        q3: processedResponses.quest3,
        q4: processedResponses.quest4,
        q5: processedResponses.quest5,
        q6: processedResponses.quest6,
        q7: processedResponses.quest7,
        q8: processedResponses.quest8,
        q9: processedResponses.quest9,
        q10: processedResponses.quest10,
        q11: processedResponses.quest11,
        q12: processedResponses.quest12,
        q13: processedResponses.quest13,
        q14: processedResponses.quest14,
        q15: processedResponses.quest15,
        q16: processedResponses.quest16,
        q17: processedResponses.quest17,
        q18: processedResponses.quest18,
        q19: processedResponses.quest19,
        q20: processedResponses.quest20,
        q21: processedResponses.quest21,
        q22: processedResponses.quest22,
        q23: processedResponses.quest23,
        q24: processedResponses.quest24,
        q25: processedResponses.quest25,
        q26: processedResponses.quest26,
        q27: processedResponses.quest27,
        q28: processedResponses.quest28,
        q29: processedResponses.quest29,
        total: finalPoints,
      };

      console.log(payload);

      let response = await AuthApi.RegisterQuestion(payload);

      if (response.data && response.data.success === false) {
        setError(response.data.msg);
      } else {
        setError(undefined);
        history.push("/admin/questionnaire");
      }
    } catch (err) {
      setError("Houve um erro");
    } finally {
      setButtonText("Cadastrar");
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        flexDirection="column"
      >
        <Box me="auto">
          <Text
            mb="36px"
            ms="4px"
            fontSize="md"
            color="gray.400"
            fontWeight="400"
          >
            Responda o formulário de felicidade de Oxford (OHF) abaixo
          </Text>
          <Box
            bg={bgColor}
            p="24px"
            borderRadius="15px"
            w={{ base: "100%", md: "420px" }}
          >
            <Flex
              direction="column"
              w="100%"
              maxW="100%"
              mx="auto"
              mb={{ base: "20px", md: "auto" }}
            >
              <Text color="red" textAlign="center" fontSize="0.9em">
                {error}
              </Text>
              <Tabs
                isFitted
                variant="soft-rounded"
                colorScheme="blue"
                index={tabIndex}
              >
                <TabPanels>
                  {/* TabPanel1 */}
                  <TabPanel>
                    {[
                      {
                        label:
                          "Eu não me sinto particularmente satisfeito com o jeito que sou",
                        question: "quest1",
                      },
                      {
                        label:
                          "Sou uma pessoa muito interessada em outras pessoas",
                        question: "quest2",
                      },
                      {
                        label:
                          "Estou sempre comprometido e envolvido com várias iniciativas",
                        question: "quest8",
                      },
                      {
                        label: "Eu me considero uma pessoa mentalmente alerta",
                        question: "quest21",
                      },
                      {
                        label:
                          "Eu não acho que o mundo seja um bom lugar para viver",
                        question: "quest10",
                      },
                      {
                        label: "Eu encontro beleza e harmonia nas coisas",
                        question: "quest16",
                      },
                    ].map(({ label, question }, idx) => (
                      <FormControl key={idx} mb="24px">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="500"
                          color={textColor}
                        >
                          {label}
                        </FormLabel>
                        <ButtonGroup isAttached variant="outline" spacing="1">
                          {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleButtonClick(question, value)}
                              bg={
                                values[question] === value
                                  ? value <= 3
                                    ? "red.300"
                                    : "green.300"
                                  : "transparent"
                              }
                              color={textColor}
                              _hover={{
                                bg:
                                  values[question] === value
                                    ? value <= 3
                                      ? "red.400"
                                      : "green.400"
                                    : "gray.100",
                              }}
                              _active={{
                                bg: value <= 3 ? "red.500" : "green.500",
                              }}
                            >
                              {value}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </FormControl>
                    ))}
                  </TabPanel>

                  {/* TabPanel2 */}
                  <TabPanel>
                    {[
                      {
                        label:
                          "Eu não estou, particularmente, otimista em relação ao futuro",
                        question: "quest6",
                      },
                      {
                        label:
                          "Tenho sentimentos muito afetivos em relação a quase todos",
                        question: "quest4",
                      },
                      {
                        label:
                          "Sempre encontro tempo para tudo que quero realizar",
                        question: "quest18",
                      },
                      {
                        label: "Raramente acordo me sentindo cansado",
                        question: "quest5",
                      },
                      {
                        label:
                          "Muitas vezes me sinto experimentando alegria e euforia",
                        question: "quest22",
                      },
                      {
                        label:
                          "Sinto que não é fácil tomar decisões, em várias situações",
                        question: "quest23",
                      },
                    ].map(({ label, question }, idx) => (
                      <FormControl key={idx} mb="24px">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="500"
                          color={textColor}
                        >
                          {label}
                        </FormLabel>
                        <ButtonGroup isAttached variant="outline" spacing="1">
                          {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleButtonClick(question, value)}
                              bg={
                                values[question] === value
                                  ? value <= 3
                                    ? "red.300"
                                    : "green.300"
                                  : "transparent"
                              }
                              color={textColor}
                              _hover={{
                                bg:
                                  values[question] === value
                                    ? value <= 3
                                      ? "red.400"
                                      : "green.400"
                                    : "gray.100",
                              }}
                              _active={{
                                bg: value <= 3 ? "red.500" : "green.500",
                              }}
                            >
                              {value}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </FormControl>
                    ))}
                  </TabPanel>

                  {/* TabPanel3 */}
                  <TabPanel>
                    {[
                      { label: "A vida é boa", question: "quest9" },
                      {
                        label: "Eu me encontro, sempre sorrindo muito",
                        question: "quest11",
                      },
                      {
                        label:
                          "Sinto que a maioria das minhas experiências são divertidas",
                        question: "quest7",
                      },
                      {
                        label: "Sinto que não tenho controle da minha vida",
                        question: "quest19",
                      },
                      {
                        label:
                          "Sinto-me capaz de levar diversas iniciativas adiante",
                        question: "quest20",
                      },
                    ].map(({ label, question }, idx) => (
                      <FormControl key={idx} mb="24px">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="500"
                          color={textColor}
                        >
                          {label}
                        </FormLabel>
                        <ButtonGroup isAttached variant="outline" spacing="1">
                          {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleButtonClick(question, value)}
                              bg={
                                values[question] === value
                                  ? value <= 3
                                    ? "red.300"
                                    : "green.300"
                                  : "transparent"
                              }
                              color={textColor}
                              _hover={{
                                bg:
                                  values[question] === value
                                    ? value <= 3
                                      ? "red.400"
                                      : "green.400"
                                    : "gray.100",
                              }}
                              _active={{
                                bg: value <= 3 ? "red.500" : "green.500",
                              }}
                            >
                              {value}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </FormControl>
                    ))}
                  </TabPanel>

                  {/* TabPanel4 */}
                  <TabPanel>
                    {[
                      {
                        label: "Estou bem satisfeito com tudo em minha vida",
                        question: "quest12",
                      },
                      {
                        label: "Sinto que a vida é muito gratificante",
                        question: "quest3",
                      },
                      {
                        label: "Não costumo me divertir com outras pessoas",
                        question: "quest27",
                      },
                      {
                        label: "Sinto que tenho um nível elevado de energia",
                        question: "quest25",
                      },
                      {
                        label:
                          "Sinto não ter um significado e propósito em minha vida",
                        question: "quest24",
                      },
                      {
                        label:
                          "Eu geralmente, exerço uma boa influência sobre os acontecimentos",
                        question: "quest26",
                      },
                    ].map(({ label, question }, idx) => (
                      <FormControl key={idx} mb="24px">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="500"
                          color={textColor}
                        >
                          {label}
                        </FormLabel>
                        <ButtonGroup isAttached variant="outline" spacing="1">
                          {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleButtonClick(question, value)}
                              bg={
                                values[question] === value
                                  ? value <= 3
                                    ? "red.300"
                                    : "green.300"
                                  : "transparent"
                              }
                              color={textColor}
                              _hover={{
                                bg:
                                  values[question] === value
                                    ? value <= 3
                                      ? "red.400"
                                      : "green.400"
                                    : "gray.100",
                              }}
                              _active={{
                                bg: value <= 3 ? "red.500" : "green.500",
                              }}
                            >
                              {value}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </FormControl>
                    ))}
                  </TabPanel>

                  {/* TabPanel5 */}
                  <TabPanel>
                    {[
                      { label: "Estou muito feliz", question: "quest15" },
                      {
                        label: "Sempre consigo provocar alegria nas pessoas",
                        question: "quest17",
                      },
                      {
                        label: "Eu não me sinto uma pessoa atraente",
                        question: "quest13",
                      },
                      {
                        label:
                          "Existe uma lacuna entre o que gostaria de fazer e o que faço",
                        question: "quest14",
                      },
                      {
                        label:
                          "Não me sinto, particularmente, uma pessoa saudável",
                        question: "quest28",
                      },
                      {
                        label:
                          "Não tenho, particularmente, lembranças felizes do meu passado",
                        question: "quest29",
                      },
                    ].map(({ label, question }, idx) => (
                      <FormControl key={idx} mb="24px">
                        <FormLabel
                          fontSize="sm"
                          fontWeight="500"
                          color={textColor}
                        >
                          {label}
                        </FormLabel>
                        <ButtonGroup isAttached variant="outline" spacing="1">
                          {[1, 2, 3, 4, 5, 6].map((value) => (
                            <Button
                              key={value}
                              onClick={() => handleButtonClick(question, value)}
                              bg={
                                values[question] === value
                                  ? value <= 3
                                    ? "red.300"
                                    : "green.300"
                                  : "transparent"
                              }
                              color={textColor}
                              _hover={{
                                bg:
                                  values[question] === value
                                    ? value <= 3
                                      ? "red.400"
                                      : "green.400"
                                    : "gray.100",
                              }}
                              _active={{
                                bg: value <= 3 ? "red.500" : "green.500",
                              }}
                            >
                              {value}
                            </Button>
                          ))}
                        </ButtonGroup>
                      </FormControl>
                    ))}
                    <Button
                      fontSize="sm"
                      variant="brand"
                      w="100%"
                      mt="20px"
                      onClick={register}
                    >
                      {buttonText}
                    </Button>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Flex justifyContent="space-between" mt="20px">
                <Button
                  fontSize="sm"
                  variant="outline"
                  w="48%"
                  onClick={() => setTabIndex((prev) => Math.max(prev - 1, 0))}
                  isDisabled={tabIndex === 0}
                >
                  Retornar
                </Button>
                <Button
                  fontSize="sm"
                  variant="outline"
                  w="48%"
                  onClick={() => setTabIndex((prev) => Math.min(prev + 1, 4))}
                  isDisabled={tabIndex === 4}
                >
                  Próximo
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
