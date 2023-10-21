import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Book = ({ book }) => {
  const navigate = useNavigate();

  const goToABookView = (id, name) => {
    navigate(`/book/${name}`, {
      state: {
        id,
      },
    });
  };

  return (
    <Box
      key={book.id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      h={"135px"}
      w={"100%"}
    >
      <Flex gap={3}>
        <Image
          src={
            book.image ||
            "https://image.lexica.art/full_jpg/76e9031e-ef70-4599-ad5d-577ebcdcd57d"
          }
          alt={book.titulo}
          w={"83px"}
          rounded={"lg"}
        />
        <Box py={2} px={4}>
          <Box d="flex" alignItems="baseline">
            <Text
              fontSize="lg"
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              color={`gray.700`}
            >
              {book.titulo}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={`md`}
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              color={`gray.600`}
            >
              - {book.autor}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={`sm`}
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              Editorial: {book.editorial}
            </Text>
          </Box>
          <Box Box mt={2}>
            <Button
              colorScheme="messenger"
              size="sm"
              onClick={() => goToABookView(book.id, book.titulo)}
              w={"83px"}
            >
              Ver más
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
