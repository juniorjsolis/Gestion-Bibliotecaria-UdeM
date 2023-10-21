import {
  Avatar,
  Box,
  Text,
  Menu,
  MenuButton,
  InputGroup,
  InputLeftElement,
  MenuList,
  MenuItem,
  Input,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { FaSistrix } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

import {
  headerContainer,
  headerLogoContainer,
  headerLogoText,
  headerLogoLink,
  menuItem,
  headerSearchContainer,
  headerSearchBox,
  headerSearchInput,
} from "./HeaderStyles";

export const Header = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchInput: "",
    },
    validationSchema: Yup.object({
      searchInput: Yup.string()
        .min(1)
        .transform((value) => value.trim())
        .required(),
    }),
    onSubmit: async (values, actions) => {
      try {
        navigate(`/search/${values.searchInput}`);

        // const response = await fetch(
        //   `api/books/FindBooksByName?name=${values.searchInput}`
        // );

        // const data = await response.json();
        // console.log(data);
      } catch (error) {
        // Manejo de errores
      }
    },
  });

  return (
    <Box as={"header"} {...headerContainer}>
      <Box {...headerLogoContainer}>
        <Box {...headerLogoLink}>
          <Text as={RouterLink} to="/" {...headerLogoText}>
            Liberia Ruben Dario
          </Text>
        </Box>
      </Box>
      {/* Search Bar */}
      <Box {...headerSearchContainer}>
        <Box {...headerSearchBox}>
          <InputGroup w={`400`}>
            <InputLeftElement>
              <Button
                p={0}
                m={0}
                bg={`transparent`}
                onClick={formik.submitForm}
              >
                <FaSistrix color="darkGray" />
              </Button>
            </InputLeftElement>
            <Input
              {...headerSearchInput}
              placeholder="Buscar ..."
              icon
              type="text"
              name="searchInput"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.searchInput}
            />
          </InputGroup>
        </Box>
      </Box>
      <Menu>
        <MenuButton>
          <Avatar
            backgroundColor={"gray.300"}
            size={"md"}
            name={"Liberia Ruben Dario"}
            src={"https://bit.ly/dan-abramov"}
          />
        </MenuButton>
        <MenuList color={"gray"} m={2} w={"10px"}>
          <RouterLink to="/profile">
            <MenuItem {...menuItem}>
              <Text>Profile</Text>
            </MenuItem>
          </RouterLink>
          <MenuItem {...menuItem}>
            <Text>Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
