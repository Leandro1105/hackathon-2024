import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { CiBookmarkPlus } from "react-icons/ci";
import { useHistory } from "react-router-dom";

export default function CommunityGroupList() {
  const [groups, setGroups] = useState([
    { id: 1, name: "Grupo A", theme: "Tecnologia", location: "São Paulo" },
    { id: 2, name: "Grupo B", theme: "Saúde", location: "Rio de Janeiro" },
    { id: 3, name: "Grupo C", theme: "Educação", location: "Belo Horizonte" },
    { id: 4, name: "Grupo D", theme: "Meio Ambiente", location: "Curitiba" },
  ]);

  const history = useHistory();

  useEffect(() => {
    // Fetch groups from API
    // const fetchGroups = async () => {
    //   try {
    //     const response = await AuthApi.GetCommunityGroups();
    //     setGroups(response.data);
    //   } catch (err) {
    //     console.error("Erro ao buscar grupos:", err);
    //   }
    // };
    // fetchGroups();
  }, []);

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const handleAddGroupClick = () => {
    history.push("/admin/registergroup");
  };

  const handleParticipate = (groupId) => {
    history.push(`/admin/editcommunitygroup/${groupId}`);
  };

  return (
    <Box p="6" position="relative" bg="gray.50" minH="100vh">
      <Grid templateColumns={gridTemplateColumns} gap="6" mt="10vh">
        {groups.map((group) => (
          <GridItem
            key={group.id}
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            boxShadow="md"
            bg="white"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}
          >
            <Box p="2"  borderRadius="md">
              <Text fontWeight="bold" fontSize="lg" color="black">
                {group.name}
              </Text>
            </Box>
            <Box p="3">
              <Text color="gray.800" mb="1">
                Tema: {group.theme}
              </Text>
              <Text color="gray.500">Localização: {group.location}</Text>
              <Spacer mt="4" />
              <Flex justify="flex-end">
                <IconButton
                  icon={<CiBookmarkPlus />}
                  aria-label="Participar"
                  size="sm"
                  bg={"#038c62"}
                  _hover={{ bg: "#036c4e" }}
                  color={"white"}
                  onClick={() => handleParticipate(group.id)}
                />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <IconButton
        icon={<AddIcon />}
        aria-label="Adicionar Novo Grupo"
        size="lg"
        position="fixed"
        bottom="24px"
        right="24px"
        onClick={handleAddGroupClick}
        zIndex="tooltip"
        color={"white"}
        bg={"#038c62"}
        _hover={{ bg: "#036c4e" }}
      />
    </Box>
  );
}
