import { useEffect, useState } from "react";
import { LandingLayout } from "../../layout";
import { useLocation } from "react-router-dom";
import { BookSkeleton } from "../../components";
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const Book = () => {
  const [book, setBook] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const params = location.state;

  useEffect(() => {
    try {
      const decodedBookName = decodeURIComponent(
        location.pathname.split("/").pop()
      );

      const getBook = async () => {
        const url = params
          ? `/GetBookById?id=${params.id}`
          : `/GetBookByName?name=${decodedBookName}`;

        const result = await fetch(`/api/books/${url}`);

        const data = await result.json();
        setIsLoading(false);

        setBook(data.libro);
      };

      getBook();
    } catch (e) {
      console.error(e);
    }
  }, [location.pathname]);

  return (
    <LandingLayout>
      {isLoading && <BookSkeleton />}
      {!isLoading && (
        <Box p="10" boxSizing="border-box">
          {/* Box */}
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            gap="10"
            boxSizing="border-box"
          >
            <Box>
              <Image
                src="https://image.lexica.art/full_jpg/f49f5cb7-8bc1-42e2-893c-cfd78b2fe4a9"
                alt="Japanese House"
                maxH="350px"
                maxW={{ base: "100%", md: "250px" }}
              />
            </Box>
            <Box>
              <Heading as="h2" lineHeight="tall">
                {book.titulo}
              </Heading>
              <Text>{book.descripcion}</Text>
              <Box my="3" display="flex" gap="2">
                {!categories ? (
                  <Text>No Categories found</Text>
                ) : (
                  categories.map((category, index) => (
                    <Badge
                      key={index}
                      fontSize={"10px"}
                      colorScheme="blue"
                      variant="subtle"
                      rounded="xl"
                      py="1"
                      px="2"
                    >
                      {category.category.nombre}
                    </Badge>
                  ))
                )}
              </Box>{" "}
              <Button variant="outline" color="yellow.500">
                Obtener Libro
              </Button>
            </Box>
          </Box>

          <Divider h="2" colorScheme="messenger" />

          {/* Recommended */}
          <Box>
            <Heading as="h3" size="md">
              Similares:
            </Heading>
          </Box>
        </Box>
      )}
    </LandingLayout>
  );
};
