import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthApi from "../../../api/auth";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");  // Adicionado
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [buttonText, setButtonText] = useState("Cadastrar");
  const [error, setError] = useState(undefined);
  const history = useHistory();

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (name === "") {
      return setError("Você deve informar um nome");
    }
    if (email === "") {
      return setError("Você deve informar um email");
    }
    if (password === "") {
      return setError("Você deve informar uma senha");
    }
    if (cpf === "") {
      return setError("Você deve informar um CPF");
    }
    if (bairro === "") {
      return setError("Você deve informar um bairro");
    }
    if (cep === "") {
      return setError("Você deve informar um CEP");
    }
    if (cidade === "") {  
      return setError("Você deve informar uma cidade");
    }
    if (uf === "") {
      return setError("Você deve informar um UF");
    }
    if (telefone === "") {
      return setError("Você deve informar um telefone");
    }
    if (endereco === "") {
      return setError("Você deve informar um endereço");
    }
    if (numero === "") {
      return setError("Você deve informar um número da residência");
    }

    try {
      setButtonText("Cadastrando");
      let response = await AuthApi.Register({
        cpf: cpf,
        name: name,
        address: endereco,
        number: numero,
        district: bairro,
        cep: cep,
        city: cidade,  // Adicionado
        uf: uf,
        fone: telefone,
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data && response.data.success === false) {
        setButtonText("Cadastrar");
        return setError(response.data.msg);
      }
      return history.push("/auth/sign-in");
    } catch (err) {
      console.log(err);
      setButtonText("Cadastrar");
      if (err.response) {
        return setError(err.response.data.msg);
      }
      return setError("Houve um erro");
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} minH="100vh">
  <Flex
    maxW={{ base: "100%", md: "max-content" }}
    w="100%"
    mx="auto"
    me="auto"
    h="100%"
    alignItems="center"
    justifyContent="center"
    px={{ base: "25px", md: "0px" }}
    flexDirection="column"
  >
    <Box me="auto">
      <Heading color={textColor} fontSize="36px" mb="10px">
        Cadastre-se
      </Heading>
      <Text
        mb="36px"
        ms="4px"
        color={textColorSecondary}
        fontWeight="400"
        fontSize="md"
      >
        Cadastre-se no sistema para acessar as informações
      </Text>
      <Box
        p="24px"
        borderRadius="15px"
        boxShadow="lg"
        w={{ base: "100%", md: "420px", lg: "600px" }} // Ajuste da largura para se adequar ao grid
      >
        <Flex
          zIndex="2"
          direction="column"
          w="100%"
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx="auto"
        >
          <FormControl>
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

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="24px" mb="24px">
              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Nome<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Digite seu nome"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setName(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  CPF<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="CPF"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setCpf(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Email<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  type="email"
                  placeholder="seuemail@gmail.com"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>
              
              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  CEP<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="CEP"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setCep(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Endereço<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Endereço"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setEndereco(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Número<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Número"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setNumero(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Bairro<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Bairro"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setBairro(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Cidade<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Cidade"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setCidade(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  UF<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="UF"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setUf(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Telefone<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  placeholder="Telefone"
                  fontWeight="500"
                  size="lg"
                  onChange={(event) => {
                    setTelefone(event.target.value);
                    setError(undefined);
                  }}
                />
              </Box>

              <Box>
                <FormLabel display="flex" fontSize="sm" fontWeight="500" color={textColor}>
                  Senha<Text color={brandStars}>*</Text>
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    isRequired={true}
                    fontSize="sm"
                    placeholder="Min. 8 caracteres"
                    size="lg"
                    type={show ? "text" : "password"}
                    variant="auth"
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setError(undefined);
                    }}
                  />
                  <InputRightElement display="flex" alignItems="center" mt="4px">
                    <Icon
                      color={textColorSecondary}
                      _hover={{ cursor: "pointer" }}
                      as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                      onClick={handleClick}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </SimpleGrid>

            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={register}
            >
              {buttonText}
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Já possui uma conta?
              <NavLink to="/auth/sign-in">
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Entrar
                </Text>
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  </Flex>
</Box>  
  );
}

export default SignIn;
