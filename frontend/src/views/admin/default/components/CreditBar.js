import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
  barChartDataCreditBar,
  barChartOptionsCreditBar,
} from "variables/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function CreditBar(props) {
  const { ...rest } = props;

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Ganhos de Crédito
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color='#038c62' />
          <Text color='#038c62' fontSize='sm' fontWeight='700'>
            +5%
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataCreditBar}
          chartOptions={barChartOptionsCreditBar}
        />
      </Box>
    </Card>
  );
}
