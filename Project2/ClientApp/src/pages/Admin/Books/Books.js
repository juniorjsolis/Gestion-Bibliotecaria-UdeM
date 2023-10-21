import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { LandingLayout } from "../../../layout";
import {
  Box,
  Input,
  useDisclosure,
  // Modal
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

  // Table
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export const Books = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [books, setBooks] = useState([]);
  const [imagen, setImagen] = useState();

  const formik = useFormik({
    initialValues: {
      titulo: "",
      autor: "",
      editorial: "",
      anio_publicacion: "",
      categoria: "",
      isbn: "",
      // imagen: "",
      descripcion: "",
      copias_disponibles: 2,
      ubicacion: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required(),
    }),
    onSubmit: async (values, actions) => {
      // values.imagen = imagen; 

      console.log(values, imagen)

      const res = await fetch("api/books/CreateBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          // imagen: imagen
        }),
      });

      const data = await res.json();
      console.log("res");
    },
  });

  useEffect(() => {
    fetch("api/books/GetBooks")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setBooks(responseJson);
      });
  }, []);

  return (
    <LandingLayout>
      <Box p={{ base: "10px", md: 10 }}>
        <Box
          mb={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading>Libros</Heading>
          <Button size={"sm"} colorScheme="blue" onClick={onOpen}>
            Agregar Libro
          </Button>
        </Box>
        <TableContainer>
          <Table variant="striped">
            <TableCaption>
              Registro General de los libros del sistema
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Titulo</Th>
                <Th>Autor</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books.map((book) => {
                return (
                  <Tr key={book.id}>
                    <Td py={2}>{book.titulo}</Td>
                    <Td py={2}>{book.autor}</Td>
                    <Td py={2}>
                      <Box display={"flex"} gap={2}>
                        <Button size="sm" variant="outline" colorScheme="green">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" colorScheme="red">
                          Eliminar
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            {/* <Tfoot></Tfoot> */}
          </Table>
        </TableContainer>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Agregar Libro</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                type="text"
                name="titulo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.titulo}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Autor</FormLabel>
              <Input
                type="text"
                name="autor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.autor}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Editorial</FormLabel>
              <Input
                type="text"
                name="editorial"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.editorial}
              />
            </FormControl>

            <FormControl>
              <FormLabel>anio_publicacion</FormLabel>
              <Input
                type="number"
                name="anio_publicacion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.anio_publicacion}
              />
            </FormControl>
{/* 
            <FormControl>
              <FormLabel>Imagen</FormLabel>
              <Input
                type="file"
                name="imagen"
                onChange={(e) => {
                  console.log(e)
                  return setImagen(e.currentTarget.files[0])

                }
                }
              />
            </FormControl> */}

            <FormControl>
              <FormLabel>Categoria</FormLabel>
              <Input
                type="text"
                name="categoria"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.categoria}
              />
            </FormControl>

            <FormControl>
              <FormLabel>isbn</FormLabel>
              <Input
                type="text"
                name="isbn"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isbn}
              />
            </FormControl>

            <FormControl>
              <FormLabel>descripcion</FormLabel>
              <Input
                type="text"
                name="descripcion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.descripcion}
              />
            </FormControl>

            <FormControl>
              <FormLabel>copias_disponibles</FormLabel>
              <Input
                type="number"
                name="copias_disponibles"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.copias_disponibles}
              />
            </FormControl>

            <FormControl>
              <FormLabel>ubicacion</FormLabel>
              <Input
                type="text"
                name="ubicacion"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ubicacion}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={formik.submitForm}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LandingLayout>
  );
};
