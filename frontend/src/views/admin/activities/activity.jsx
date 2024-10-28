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

      // Mock de dados de atividades
      const mockActivities = [
        {
          event_id: 1,
          user_id: userId,
          event_date: "2024-10-25T10:00:00Z",
          event_type: "Exercício Físico",
          emotional_impact: 3,
          mood_before: 5,
          mood_after: 8,
          event_description: "Caminhada no parque.",
        },
        {
          event_id: 2,
          user_id: userId,
          event_date: "2024-10-24T08:00:00Z",
          event_type: "Meditação",
          emotional_impact: 3,
          mood_before: 4,
          mood_after: 9,
          event_description: "Sessão de meditação guiada.",
        },
        {
          event_id: 3,
          user_id: userId,
          event_date: "2024-10-23T15:30:00Z",
          event_type: "Leitura",
          emotional_impact: 2,
          mood_before: 6,
          mood_after: 8,
          event_description: "Leitura de um livro de autoajuda.",
        },
        {
          event_id: 4,
          user_id: userId,
          event_date: "2024-10-22T19:00:00Z",
          event_type: "Encontro Social",
          emotional_impact: 3,
          mood_before: 2,
          mood_after: 7,
          event_description: "Jantar com amigos próximos.",
        },
      ];

      const sortedActivities = mockActivities.sort((a, b) =>
        new Date(a.event_date) - new Date(b.event_date)
      );
      setActivities(sortedActivities);
    };

    fetchActivities();
  }, [userId]);

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const handleAddActivityClick = () => {
    history.push("/admin/registeractivity");
  };

  const handleDeleteActivity = async (eventId) => {
    try {
      await AuthApi.DeleteActivity(eventId);
      setActivities((prevActivities) =>
        prevActivities.filter((activity) => activity.event_id !== eventId)
      );
    } catch (err) {
      console.error("Erro ao deletar atividade:", err);
    }
  };

  const handleEditActivity = (eventId) => {
    history.push(`/admin/editactivity/${eventId}`);
  };

  return (
    <Box p="6" position="relative" bg="gray.50" minH="100vh">
      <Grid
        templateColumns={gridTemplateColumns}
        gap="6"
        autoRows="minmax(100px, auto)"
        mt="10vh"
      >
        {activities.map((activity) => (
          <GridItem
            key={activity.event_id}
            borderWidth="1px"
            borderRadius="lg"
            p="4"
            boxShadow="md"
            bg="white"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}
          >
            <Flex direction="column" align="start">
              <Text fontWeight="bold" mb="1" color="black">
                Evento ID: {activity.event_id} - Tipo: {activity.event_type}
              </Text>
              <Text color="gray.600" mb="3">
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
              <Spacer mt="4" />
              <Flex justify="flex-end">
                <IconButton
                  icon={<EditIcon />}
                  aria-label="Editar Atividade"
                  size="sm"
                  bg="#038c62"
                  color={"white"}
                  mr="2"
                  onClick={() => handleEditActivity(activity.event_id)}
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
        position="fixed"
        bottom="24px"
        right="24px"
        onClick={handleAddActivityClick}
        zIndex="tooltip"
        color={"white"}
        bg={"#038c62"}
        _hover={{ bg: "#038c62" }}
      />
    </Box>
  );
}
