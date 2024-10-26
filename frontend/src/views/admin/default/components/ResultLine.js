// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import React from "react";
// Assets
import {
  lineChartDataResultLine,
  lineChartOptionsResultLine,
} from "variables/charts";

export default function ResultLine(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card
  nt='center'
  align='center'
  direction='column'
  w='100%'
  mb='0px'
  {...rest}
>
  <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
    <Flex align='center' w='100%' px='15px' py='10px'>
      <Text
        me='auto'
        color={textColor}
        fontSize='xl'
        fontWeight='700'
        lineHeight='100%'
      >
        Resultado dos Questionários
      </Text>
    </Flex>
  </Flex>
  <Flex 
    w='100%' 
    flexDirection={{ base: "column", lg: "row" }} 
    justifyContent='center' // Centraliza horizontalmente
    alignItems='center' // Centraliza verticalmente
    mt={4} // Adiciona margem superior
  >
    <Box minH='260px' minW='75%' mt='auto' textAlign='center'> {/* Centraliza o conteúdo */}
      <LineChart
        chartData={lineChartDataResultLine}
        chartOptions={lineChartOptionsResultLine}
      />
    </Box>
  </Flex>
</Card>

  );
}
