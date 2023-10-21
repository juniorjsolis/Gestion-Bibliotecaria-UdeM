import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { LandingLayout } from "../../layout";
import { Book } from "../../components";

export const Home = () => {
  const [books, setBooks] = useState([]);

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
      <Box p={5}>
        <h1>Inicio</h1>
        <Box
          display={`flex`}
          flexWrap={`wrap`}
          gap={`10px`}
          // justifyContent={"center"}
        >
          {books.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </Box>
      </Box>
    </LandingLayout>
  );
};
