import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export const BookSkeleton = () => {
  return (
    <>
      <Box
        p="10"
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        gap="10"
        boxSizing="border-box"
      >
        <Skeleton
          height={{ base: "350px" }}
          width={{ base: "100%", md: "250px" }}
        />
        <Box w="100%" maxW="800px">
          <Skeleton w={{ base: "100%", md: "300px" }} h="30px" />

          <SkeletonText
            mt="4"
            noOfLines={7}
            spacing="4"
            skeletonHeight="2"
            width="100%"
          />

          <Box display="flex" gap="3" mt="4">
            <Skeleton
              w="50px"
              rounded="xl"
              startColor="red.500"
              endColor="orange.500"
              height="20px"
            />
            <Skeleton
              w="50px"
              rounded="xl"
              startColor="blue.500"
              endColor="green.500"
              height="20px"
            />
            <Skeleton
              w="50px"
              rounded="xl"
              startColor="gray.500"
              endColor="yellow.500"
              height="20px"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
