import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  asideButton,
  asideMainContainer,
  asideNav,
  asideNavLink,
  asideTopContainer,
} from "./AsideStyles";

export const Aside = () => {
  const [isExpanded, setIsExpanded] = useState(`20px`);

  const asideState = () => {
    if (isExpanded === `240px`) {
      setIsExpanded(`20px`);
    } else {
      setIsExpanded(`240px`);
    }
  };

  return (
    <>
      <Box position="relative" h={`100%`} maxW={`240px`}>
        {/* <Button
          {...asideButton}
          right={isExpanded === `240px` ? "-20px" : "-20px"}
          onClick={() => asideState()}
        ></Button> */}
        <Stack
          as={"aside"}
          {...asideMainContainer}
          width={{ base: isExpanded, md: `240px` }}
          display={{
            base: isExpanded === "20px" ? "none" : "block",
            md: "block",
          }}
        >
          <Stack {...asideTopContainer}>
            <Box as={"nav"} {...asideNav}>
              <RouterLink to="/">
                <Box {...asideNavLink}>Inicio</Box>
              </RouterLink>
              <RouterLink to="/reservas">
                <Box {...asideNavLink}>Reservas</Box>
              </RouterLink>
              {/* lIBROS  */}
              <RouterLink to="/admin/books">
                <Box {...asideNavLink}>Libros</Box>
              </RouterLink>
              {/* AUTORES  */}
              <RouterLink to="/autores">
                <Box {...asideNavLink}>Autores</Box>
              </RouterLink>
              {/* EDITORIALES  */}
              <RouterLink to="/editoriales">
                <Box {...asideNavLink}>Editoriales</Box>
              </RouterLink>
              {/* CATEGORIAS  */}
              <RouterLink to="/categorias">
                <Box {...asideNavLink}>Categorias</Box>
              </RouterLink>
              {/* USUARIOS  */}
              <RouterLink to="/usuarios">
                <Box {...asideNavLink}>Usuarios</Box>
              </RouterLink>

              <RouterLink to="/reportes">
                <Box {...asideNavLink}>Reportes</Box>
              </RouterLink>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
