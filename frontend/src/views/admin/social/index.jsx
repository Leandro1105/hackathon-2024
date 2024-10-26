import React from "react";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const bgColor = useColorModeValue("white", "gray.700");
  const cardBgColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";

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
        flexDirection="column"
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "15px", md: "5vh" }}
      >
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="md"
        >
          Selecione uma opção
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          w="100%"
        >
          {/* Card para Grupos */}
          <Box
            bg={cardBgColor}
            p="24px"
            borderRadius="15px"
            boxShadow="lg"
            w={{ base: "100%", md: "420px" }}
            mb={{ base: "20px", md: "0" }}
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="600" color={textColor}>
              Comunidades
            </Text>
            <Text fontSize="sm" color={textColorSecondary} mb="24px">
              Acesse e gerencie comunidades.
            </Text>
            <Button
              variant="brand"
              color={"black"}
              onClick={() => history.push("/admin/groups")}
            >
              Acessar
            </Button>
          </Box>

          {/* Card para Eventos */}
          <Box
            bg={cardBgColor}
            p="24px"
            ml={{ base: "0", md: "20px" }}
            borderRadius="15px"
            boxShadow="lg"
            w={{ base: "100%", md: "420px" }}
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="600" color={textColor}>
              Eventos
            </Text>
            <Text fontSize="sm" color={textColorSecondary} mb="24px">
              Confira e gerencie eventos.
            </Text>
            <Button
              variant="brand"
              color={"black"}
              onClick={() => history.push("/admin/events")}
            >
              Acessar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
