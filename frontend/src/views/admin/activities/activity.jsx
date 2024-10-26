import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import AuthApi from "../../../api/auth";

export default function ActivityList() {
  const [activities, setActivities] = useState([]);
  const history = useHistory();
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    const fetchActivities = async () => {
      if (!userId) {
        console.error("Usuário não está logado.");
        return;
      }

      try {
        const response = await AuthApi.GetActivities(userId); // Método atualizado para buscar atividades
        const sortedActivities = response.data.sort((a, b) =>
          new Date(a.event_date) - new Date(b.event_date)
        );
        setActivities(sortedActivities);
      } catch (err) {
        console.error("Erro ao buscar atividades:", err);
      }
    };

    fetchActivities();
  }, [userId]);

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const handleAddActivityClick = () => {
    history.push("/admin/registeractivity"); // Navega para a tela de cadastro de atividade
  };

  const handleDeleteActivity = async (eventId) => {
    try {
      await AuthApi.DeleteActivity(eventId); // Assumindo que este método deleta atividades
      setActivities((prevActivities) =>
        prevActivities.filter((activity) => activity.event_id !== eventId)
      );
    } catch (err) {
      console.error("Erro ao deletar atividade:", err);
    }
  };

  const handleEditActivity = (eventId) => {
    history.push(`/admin/editactivity/${eventId}`); // Navega para a tela de edição da atividade
  };

  return (
    <Box p="4" position="relative">
      <Grid
        templateColumns={gridTemplateColumns}
        gap="4"
        autoRows="minmax(100px, auto)"
        mt="15vh"
      >
        {activities.map((activity) => (
          <GridItem
            key={activity.event_id}
            borderWidth="1px"
            borderRadius="md"
            p="4"
            boxShadow="md"
            bg="white"
            overflow="hidden"
          >
            <Flex direction="column" align="start">
              <Text fontWeight="bold" mb="1">
                Evento ID: {activity.event_id} - Tipo: {activity.event_type}
              </Text>
              <Text color="gray.500" mb="3">
                Descrição: {activity.event_description}
              </Text>
              <Text color="gray.500" mb="1">
                Data: {new Date(activity.event_date).toLocaleString()}
              </Text>
              <Text color="gray.500" mb="1">
                Impacto Emocional: {activity.emotional_impact}
              </Text>
              <Text color="gray.500" mb="1">
                Humor Antes: {activity.mood_before} - Humor Depois: {activity.mood_after}
              </Text>
              <Flex justify="flex-end" mt="auto">
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Editar Atividade"
                  size="sm"
                  colorScheme="blue"
                  mr="2"
                  onClick={() => handleEditActivity(activity.event_id)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Deletar Atividade"
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDeleteActivity(activity.event_id)}
                />
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
      <IconButton
        icon={<AddIcon />}
        aria-label="Adicionar Nova Atividade"
        size="lg"
        colorScheme="blue"
        position="fixed"
        bottom="16px"
        right="16px"
        onClick={handleAddActivityClick}
        zIndex="tooltip"
      />
    </Box>
  );
}
