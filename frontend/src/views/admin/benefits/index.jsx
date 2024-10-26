import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Stack,
  Collapse,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const PartnerCard = ({ name, logo }) => (
  <Flex
    direction="column"
    alignItems="center"
    bg="white"
    borderRadius="10px"
    boxShadow="md"
    p="10px"
    textAlign="center"
  >
    <Box mb="10px">
      <img src={logo} alt={name} style={{ width: "60px", height: "60px" }} />
    </Box>
    <Text fontWeight="600">{name}</Text>
  </Flex>
);

export default function UserScore() {
  const history = useHistory();
  const bgColor = useColorModeValue("##f4f7fe", "gray.800");
  const cardBgColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("gray.500", "gray.400");
  const collapseBgColor = useColorModeValue("white", "gray.700");

  // Mock data for score and benefits
  const userScore = 275; // Exemplo de score do usuário
  const benefits = [
    {
      title: "Acesso a eventos exclusivos",
      details: "Participe de eventos como conferências, workshops e meetups com grandes nomes da indústria.",
      partners: [
        { name: "Allu", logo: require('assets/img/allu_logo.png') },
        { name: "Unimed", logo: require('assets/img/unimed_logo.png') },
        { name: "Irroba", logo: require('assets/img/irroba_logo.jpg') },
      ],
    },
    {
      title: "Descontos em parceiros",
      details: "Desfrute de descontos em produtos e serviços de empresas parceiras.",
      partners: [
        { name: "Allu", logo: require('assets/img/allu_logo.png') },
        { name: "Unimed", logo: require('assets/img/unimed_logo.png') },
        { name: "Irroba", logo: require('assets/img/irroba_logo.jpg') },
      ],
    },
    {
      title: "Conteúdo personalizado",
      details: "Receba recomendações de conteúdo baseado em seus interesses e atividades.",
      partners: [
        { name: "Allu", logo: require('assets/img/allu_logo.png') },
        { name: "Unimed", logo: require('assets/img/unimed_logo.png') },
        { name: "Irroba", logo: require('assets/img/irroba_logo.jpg') },
      ],
    },
    {
      title: "Suporte prioritário",
      details: "Obtenha ajuda imediata com uma equipe dedicada ao seu suporte.",
      partners: [
        { name: "Allu", logo: require('assets/img/allu_logo.png') },
        { name: "Unimed", logo: require('assets/img/unimed_logo.png') },
        { name: "Irroba", logo: require('assets/img/irroba_logo.jpg') },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} bg={bgColor}>
      <Flex
        maxW="1200px"
        w="100%"
        mx="auto"
        flexDirection="column"
        px={{ base: "25px", md: "50px" }}
        mt={{ base: "15px", md: "5vh" }}
      >
        {/* Título da Tela */}
        <Text fontSize="2xl" fontWeight="bold" color={textColor} mb="20px">
          Seus Créditos e Benefícios
        </Text>

        {/* Score do Usuário */}
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb="40px"
          p="40px"
          bg={cardBgColor}
          borderRadius="15px"
          boxShadow="lg"
        >
          <Text fontSize="6xl" fontWeight="bold" color={textColor}>
            {userScore}
          </Text>
          <Text fontSize="lg" color={textColorSecondary}>
            Pontos
          </Text>
        </Flex>

        {/* Título dos Benefícios */}
        <Text
          mb="16px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="600"
          fontSize="lg"
        >
          Benefícios
        </Text>

        {/* Lista de Benefícios */}
        <Stack spacing={4}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              bg={cardBgColor}
              p="20px"
              borderRadius="15px"
              boxShadow="md"
              textAlign="center"
              _hover={{ boxShadow: "lg", transform: "scale(1.02)", transition: "0.3s" }} // Efeito hover
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                onClick={() => toggleAccordion(index)}
                cursor="pointer"
              >
                <Text fontSize="lg" fontWeight="600" color={textColor}>
                  {benefit.title}
                </Text>
                <Icon
                  as={openIndex === index ? ChevronUpIcon : ChevronDownIcon}
                  boxSize={6}
                  color={textColor}
                />
              </Flex>
              <Collapse in={openIndex === index}>
                <Box
                  mt="10px"
                  bg={collapseBgColor}
                  borderRadius="10px"
                >
                  <Text color={textColorSecondary}>{benefit.details}</Text>
                  <Text fontWeight="bold" mt="5px">Parceiros:</Text>
                  <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                    {benefit.partners.map((partner, partnerIndex) => (
                      <PartnerCard key={partnerIndex} name={partner.name} logo={partner.logo} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Collapse>
            </Box>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
