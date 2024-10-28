import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  IconButton,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { CiBookmarkPlus } from "react-icons/ci";
import { useHistory } from "react-router-dom";

export default function Events() {
  const [events, setEvents] = useState([
    {
      event_id: 1,
      event_name: "Festival de Música no Parque",
      event_description:
        "Um dia cheio de música ao ar livre com bandas locais.",
      event_address: "Parque Central, Cidade X",
      event_date: "2024-11-10T15:00:00Z",
      max_participants: 500,
      image_url: require('assets/img/festival.jpg'),
    },
    {
      event_id: 2,
      event_name: "Feira de Artesanato",
      event_description: "Venha conhecer artesanato local e gastronomia.",
      event_address: "Praça da Liberdade, Cidade Y",
      event_date: "2024-11-20T10:00:00Z",
      max_participants: 200,
      image_url: require('assets/img/feira.jpg'),
    },
    {
      event_id: 3,
      event_name: "Corrida Beneficente",
      event_description:
        "Participe da corrida para ajudar instituições locais.",
      event_address: "Avenida Principal, Cidade Z",
      event_date: "2024-12-05T08:00:00Z",
      max_participants: 1000,
      image_url: require('assets/img/corrida.jpg'),
    },
  ]);

  const history = useHistory();
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    // Lógica para buscar eventos pode ser adicionada aqui
  }, [userId]);

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  });

  const handleAddEventClick = () => {
    history.push("/admin/registerevent");
  };

  const handleParticipate = (eventId) => {
    // Lógica para participar de um evento pode ser adicionada aqui
  };

  return (
    <Box p="6" position="relative" bg="gray.50" minH="100vh">
      <Grid templateColumns={gridTemplateColumns} gap="6" mt="10vh">
        {events.map((event) => (
          <GridItem
            key={event.event_id}
            borderWidth="1px"
            borderRadius="lg"
            p="0"
            boxShadow="md"
            bg="white"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}
            height="100%"
          >
            <Image
              src={event.image_url}
              alt={event.event_name}
              borderRadius="md"
              mb="3"
              height="55%"
              objectFit="cover"
            />
            <Box p="2"  borderRadius="md" mb="3">
              <Text fontWeight="bold" fontSize="lg" color="black">
                {event.event_name}
              </Text>
            </Box>
            <Box p="3">
              <Text color="gray.600" mb="1">
                Descrição: {event.event_description}
              </Text>
              <Text color="gray.500" mb="1">
                Endereço: {event.event_address}
              </Text>
              <Text color="gray.500" mb="1">
                Data: {new Date(event.event_date).toLocaleString()}
              </Text>
              <Text color="gray.500" mb="1">
                Máx. Participantes: {event.max_participants}
              </Text>
              <Spacer mt="4" />
              <Flex justify="flex-end">
                <IconButton
                  icon={<CiBookmarkPlus />}
                  aria-label="Participar"
                  size="sm"
                  color={"white"}
                  bg={"#038c62"}
                  _hover={{ bg: "#036c4e" }}
                  onClick={() => handleParticipate(event.id)}
                />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <IconButton
        icon={<AddIcon />}
        aria-label="Adicionar Novo Evento"
        size="lg"
        color={"white"}
        bg={"#038c62"}
        _hover={{ bg: "#036c4e" }}
        position="fixed"
        bottom="24px"
        right="24px"
        onClick={handleAddEventClick}
        zIndex="tooltip"
      />
    </Box>
  );
}
