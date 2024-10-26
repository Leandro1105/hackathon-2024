import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";

export default function ColumnsTable() {
  // Dados da tabela
  const discountSuggestions = [
    { name: "Cinema XYZ", type: "Cinema", date: "2024-12-01", discount: 20 },
    { name: "Clube da Praia", type: "Clube", date: "2024-11-15", discount: 15 },
    { name: "Parque de Diversões", type: "Parque", date: "2024-10-30", discount: 10 },
    { name: "Teatro ABC", type: "Teatro", date: "2024-11-20", discount: 25 },
    { name: "Museu de Arte", type: "Museu", date: "2024-12-05", discount: 30 },
  ];

  // Definindo as colunas
  const columnsData = useMemo(
    () => [
      { Header: "NOME", accessor: "name" },
      { Header: "TIPO", accessor: "type" },
      { Header: "DATA DE VALIDADE", accessor: "date" },
      { Header: "DESCONTO (%)", accessor: "discount" },
    ],
    []
  );

  // Usando react-table
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => discountSuggestions, [discountSuggestions]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;

  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction='column'
      w='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px='25px' justify='space-between' mb='10px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'>
          Sugestões de Desconto para Lazer
        </Text>
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}>
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color='gray.400'>
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => (
                  <Td
                    {...cell.getCellProps()}
                    key={index}
                    fontSize={{ sm: "14px" }}
                    py='8px'
                    borderColor='transparent'>
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
