import { Box, Flex, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

function AuthIllustration(props) {
  const { children, illustrationBackground } = props;

  return (
    <Flex position='relative' h='100vh' align='center' justify='center'>
      <Flex
        h='max-content'
        w='100%'
        maxW={{ md: "66%", lg: "1313px" }}
        mx='auto'
        pt={{ sm: "40px", md: "0px" }}
        justifyContent='start'
        direction='column'>
        <NavLink
          to='/admin'
          style={() => ({
            width: "fit-content",
            marginTop: "40px",
          })}>
        </NavLink>
        {children}
      </Flex>
      <Box
        display={{ base: "none", md: "block" }}
        h='50%'
        w='100%'
        position='absolute'
        top='0'
        left='0'
        overflow='hidden'>
        <Image
          src={illustrationBackground}
          alt="Auth Illustration"
          maxW={{ base: "300px", md: "400px", lg: "500px" }} 
          maxH="80%" 
          objectFit='contain'
          borderRadius='lg'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)' 
        />
      </Box>
    </Flex>
  );
}

// PROPS
AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
