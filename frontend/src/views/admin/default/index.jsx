// Chakra imports
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAttachMoney,
  MdAssessment,
  MdAssignment,
  MdGroup,
} from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import CreditBar from "views/admin/default/components/CreditBar";
import PieCard from "views/admin/default/components/PieCard";
import ResultLine from "views/admin/default/components/ResultLine";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }} // Ajustado para 4 colunas em telas grandes
          gap='20px'
          mb='20px'
          justifyContent="center" // Centraliza horizontalmente
          alignItems="center" // Centraliza verticalmente
        >
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdGroup} color={brandColor} />
                }
              />
            }
            name='Quantidade de Comunidade'
            value='4'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdAssignment} color={brandColor} />
                }
              />
            }
            name='Formulários Respondidos'
            value='11'
          />
          <MiniStatistics 
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={<Icon w='28px' h='28px' as={MdAssessment} color={brandColor} />}
              />
            }
            name='Quantidade de Atividade'
            value='17'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg='linear-gradient(90deg, #f7da40 0%, #f7da40 100%)' // Amarelo para Branco
                icon={<Icon w='28px' h='28px' as={MdAttachMoney} color='white' />}
              />
            }
            name='Créditos'
            value='27'
          />
        </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <ResultLine />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <CreditBar />
          <PieCard />
        </SimpleGrid>
        
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
