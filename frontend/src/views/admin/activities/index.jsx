import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
} from "@chakra-ui/react";
import AuthApi from "../../../api/auth";
import { useHistory } from "react-router-dom"; // Import para navegação

export default function RegisterActivity() { // Alterado o nome do componente
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); // Adicionado estado para descrição
  const [activityDate, setActivityDate] = useState(""); // Corrigido o nome da variável
  const [activityType, setActivityType] = useState(""); // Adicionado estado para tipo
  const [activityIntensity, setActivityIntensity] = useState(0); // Adicionado estado para intensidade
  const [moodBefore, setMoodBefore] = useState(5); // Adicionado estado para humor antes
  const [moodAfter, setMoodAfter] = useState(5); // Adicionado estado para humor depois
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Cadastrar");

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const bgColor = useColorModeValue("white", "gray.700"); // Cor de fundo branca no modo claro e cinza no modo escuro

  const history = useHistory();

  const register = async (event) => {
    if (event) event.preventDefault();
    try {
      setButtonText("Cadastrando");

      const userId = JSON.parse(localStorage.getItem("userId"));
      if (!userId) {
        return setError("Usuário não está logado.");
      }

      const payload = {
        companyEntity: { id: userId },
        name: name,
        description: description, // Adicionado descrição ao payload
      };

      let response = await AuthApi.RegisterActivity(payload); // Alterado para RegisterActivity

      if (response.data && response.data.success === false) {
        resetForm();
        setError(response.data.msg);
      } else {
        resetForm();
        setError(undefined);
        setButtonText("Cadastrar");
        history.push("/admin/activity"); // Alterado para rota de atividades
      }
    } catch (err) {
      setButtonText("Cadastrar");
      console.log(err);
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("Houve um erro");
    }
  };

  const resetForm = () => {
    setName("");
    setDescription(""); // Limpar descrição ao resetar o formulário
    setError(undefined);
  };

  const handleClose = () => {
    history.push("/admin/activity"); // Alterado para rota de atividades
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "15px", md: "5vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Cadastre nova atividade abaixo
          </Text>
          <Box
            bg={bgColor}
            p="24px"
            borderRadius="15px"
            boxShadow="lg"
            w={{ base: "100%", md: "420px" }}
          >
            <Flex
              zIndex="2"
              direction="column"
              w="100%"
              maxW="100%"
              background="transparent"
              borderRadius="15px"
              mx="auto"
              mb={{ base: "20px", md: "auto" }}
            >
              <h4
                style={{
                  fontSize: ".9em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 400,
                  transition: ".2s all",
                }}
              >
                {error}
              </h4>
              <FormControl>
                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Data da Atividade
                </FormLabel>
                <Input
                  type="datetime-local" // Usando datetime-local para capturar data e hora
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite a data da atividade"
                  mb="24px"
                  value={activityDate} // Corrigido o nome da variável
                  onChange={(e) => setActivityDate(e.target.value)} // Corrigido o nome da variável
                />
                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Tipo
                </FormLabel>
                <Select
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  mb="24px"
                  value={activityType}
                  onChange={(e) => setActivityType(e.target.value)}
                >
                  <option value=""></option>
                  <option value="exercicio_fisico">Exercício Físico</option>
                  <option value="desabafo_reflexao">
                    Desabafo ou Reflexão
                  </option>
                  <option value="atividades_criativas">
                    Atividades Criativas
                  </option>
                  <option value="socializacao">Socialização</option>
                  <option value="autocuidado">Autocuidado</option>
                  <option value="atividades_ao_ar_livre">
                    Atividades ao Ar Livre
                  </option>
                  <option value="realizacao_metas_tarefas">
                    Realização de Metas ou Tarefas
                  </option>
                  <option value="hobbies_lazer">Hobbies e Lazer</option>
                  <option value="praticas_espirituais">
                    Práticas Espirituais
                  </option>
                  <option value="eventos_felizes">
                    Eventos Especialmente Felizes
                  </option>
                </Select>
                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Intensidade Emocional
                </FormLabel>
                <Select
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  mb="24px"
                  value={activityIntensity}
                  onChange={(e) => setActivityIntensity(e.target.value)}
                >
                  <option value={0}></option>
                  <option value={1}>Baixa</option>
                  <option value={2}>Média</option>
                  <option value={3}>Alta</option>
                </Select>
                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Estado Emocional Antes (1 a 10)
                </FormLabel>
                <Slider
                  defaultValue={5}
                  min={1}
                  max={10}
                  step={1}
                  value={moodBefore}
                  onChange={(val) => setMoodBefore(val)}
                  mb="8px"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text fontSize="sm" color={textColor} mb="24px">
                  Valor selecionado: {moodBefore}
                </Text>

                {/* Mood After Slider */}
                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Estado Emocional Após (1 a 10)
                </FormLabel>
                <Slider
                  defaultValue={5}
                  min={1}
                  max={10}
                  step={1}
                  value={moodAfter}
                  onChange={(val) => setMoodAfter(val)}
                  mb="8px"
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text fontSize="sm" color={textColor} mb="24px">
                  Valor selecionado: {moodAfter}
                </Text>

                <FormLabel
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Descrição da atividade
                </FormLabel>
                <Textarea
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite a descrição"
                  mb="24px"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Flex justifyContent="space-between">
                  <Button
                    fontSize="sm"
                    variant="outline"
                    fontWeight="500"
                    w="48%"
                    h="50"
                    mb="24px"
                    onClick={handleClose}
                  >
                    Fechar
                  </Button>
                  <Button
                    fontSize="sm"
                    variant="brand"
                    fontWeight="500"
                    w="48%"
                    h="50"
                    mb="24px"
                    onClick={register}
                  >
                    {buttonText}
                  </Button>
                </Flex>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
