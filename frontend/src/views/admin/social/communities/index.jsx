import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import AuthApi from "api/auth";
import { useHistory } from "react-router-dom"; // Import para navegação

export default function RegisterCommunity() {
  const [communityName, setCommunityName] = useState("");
  const [communityTheme, setCommunityTheme] = useState("");
  const [communityLocation, setCommunityLocation] = useState("");
  const [error, setError] = useState(undefined);
  const [buttonText, setButtonText] = useState("Cadastrar");

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const bgColor = useColorModeValue("white", "gray.700");

  const history = useHistory();

  const register = async (event) => {
    if (event) event.preventDefault();
    try {
      setButtonText("Cadastrando");

      const payload = {
        name: communityName, // Nome da comunidade
        theme: communityTheme, // Tema da comunidade
        location: communityLocation, // Localização da comunidade
      };

      let response = await AuthApi.RegisterCommunity(payload); // Chamada para cadastrar comunidade

      if (response.data && response.data.success === false) {
        resetForm();
        setError(response.data.msg);
      } else {
        resetForm();
        setError(undefined);
        setButtonText("Cadastrar");
        history.push("/admin/communities"); // Redirecionando para uma rota de comunidades
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
    setCommunityName("");
    setCommunityTheme("");
    setCommunityLocation("");
    setError(undefined);
  };

  const handleClose = () => {
    history.push("/admin/groups"); // Redirecionando ao fechar
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
            Cadastre uma comunidade abaixo
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
                <FormLabel fontSize="sm" fontWeight="500" color={textColor} mb="8px">
                  Nome da comunidade
                </FormLabel>
                <Input
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite o nome da comunidade"
                  mb="24px"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                />
                <FormLabel fontSize="sm" fontWeight="500" color={textColor} mb="8px">
                  Tema da comunidade
                </FormLabel>
                <Input
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite o tema da comunidade"
                  mb="24px"
                  value={communityTheme}
                  onChange={(e) => setCommunityTheme(e.target.value)}
                />
                <FormLabel fontSize="sm" fontWeight="500" color={textColor} mb="8px">
                  Localização da comunidade
                </FormLabel>
                <Input
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite a localização da comunidade"
                  mb="24px"
                  value={communityLocation}
                  onChange={(e) => setCommunityLocation(e.target.value)}
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
                    color={"white"}
                    bg={"#038c62"}
                    _hover={{ bg: "#036c4e" }}
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
