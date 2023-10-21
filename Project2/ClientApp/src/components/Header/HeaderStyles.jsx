export const headerContainer = {
  fontFamily: `'Inter', sans-serif`,
  backgroundColor: `#0F1C3F`,
  color: `white`,
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `space-between`,
  height: `100%`,
  h: `100%`,
  pr: { base: `10px`, sm: `20px` },
  boxShadow: `0 4px 10px rgba(0, 0, 0, 25%)`,
  gap: "10px",
};

export const headerLogoContainer = {
  w: "240px",
  h: "100%",
  py: "20px",
};

export const headerLogoLink = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  pl: "10px",
};

export const headerLogoText = {
  display: "inline-block",
  fontFamily: `inherit`,
  fontSize: `16px`,
  fontWeight: `600`,
  letterSpacing: `0.2em`,
  color: `#FFD700`,
  _hover: {
    color: `#FFD700`,
    opacity: `0.8`,
  },
};

export const menuItem = {
  gap: "12px",
  _hover: {
    bg: "#70707042",
    color: "#484848",
    borderRadius: "8px",
  },
};

export const headerSearchContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // w: "100%",
  // h: "100%",
  // py: "20px",
};

export const headerSearchBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // w: "100%",
  // h: "100%",
  // py: "20px",
};

export const headerSearchInput = {
  h: "100%",
  w: { base: "100%", md: "400px" },
  py: "10px",
  placeholder: "Search",
  borderRadius: "8px",
  bg: "#FFFFFF",
  color: "#484848",
  border: "1px solid #E5E5E5",
  _focus: {
    outline: "none",
    border: "1px solid #FFD700",
  },
};
