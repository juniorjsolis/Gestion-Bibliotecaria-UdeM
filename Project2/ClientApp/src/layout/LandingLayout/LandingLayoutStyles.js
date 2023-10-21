export const gridContainer = {
  backgroundColor: `backgroundGrey`,
  gridTemplateAreas: {
    base: `"header header" "aside main"`,
    lg: `"header header" "aside main"`,
  },
  gridTemplateRows: { base: `auto 1fr`, lg: `auto 1fr` },
  gridTemplateColumns: "auto 1fr",
  minHeight: `100vh`,
};

export const gridHeader = {
  gridArea: `header`,
  display: { base: `block` },
  backgroundColor: `blue.800`,
  color: `green.500`,
};

export const gridMain = {
  gridArea: `main`,
};

export const gridAside = {
  gridArea: `aside`,
  position: { base: "absolute", sm: "relative" },
  top: { base: "45px", sm: "0" },
  backgroundColor: `gray.900`,
  opacity: { base: "0.9" },
};
