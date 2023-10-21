import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header, Aside } from "../../components";
import {
  gridAside,
  gridContainer,
  gridHeader,
  gridMain,
} from "./LandingLayoutStyles";

export const LandingLayout = ({ children }) => {
  return (
    <Grid {...gridContainer}>
      <GridItem {...gridHeader}>
        <Header />
      </GridItem>
      <GridItem {...gridMain}>{children}</GridItem>
      <GridItem {...gridAside}>
        <Aside />
      </GridItem>
    </Grid>
  );
};
