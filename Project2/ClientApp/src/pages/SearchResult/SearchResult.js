import { useEffect, useState } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { Book } from "../../components";
import { LandingLayout } from "../../layout";

export const SearchResult = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const decodedBookName = decodeURIComponent(
      location.pathname.split("/").pop()
    );

    const searchBooks = async () => {
      const search = await fetch(
        `api/books/FindBooksByName?name=${decodedBookName}`
      );

      if (search.status === 404) {
        setError(search);
        setIsLoading(false);
        setBooks([]);

        return;
      }

      const data = await search.json();

      setIsLoading(false);
      setBooks(data);
    };

    searchBooks();
  }, [location.pathname]);

  if (isLoading) {
    return (
      <LandingLayout>
        <Box p={10} h={"100%"}>
          <Box
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <Spinner color="blue.500" size="lg" thickness="5px" />
            <Text as="b" color={"gray.500"}>
              Espere un momento
            </Text>
          </Box>
        </Box>
      </LandingLayout>
    );
  }

  return (
    <LandingLayout>
      <Box p={{ base: "10px" }} h={"100%"}>
        {!books.length && (
          <Box
            w={"100%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.700"
              fontWeight={600}
            >
              No se han Encontrado Resultados
            </Text>
          </Box>
        )}
        <Box display={`flex`} flexWrap={`wrap`} gap={`10px`}>
          {books.length > 0 && books.map((book) => <Book book={book} />)}
        </Box>
      </Box>
    </LandingLayout>
  );
};
