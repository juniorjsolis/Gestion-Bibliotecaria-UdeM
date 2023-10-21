export const asideMainContainer = {
  width: `240px`,
  height: `100%`,
  backgroundColor: `mainColor`,
  color: `white`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  fontFamily: `interVariable`,
  overflowY: `auto`,
};

export const asideButton = {
  position: "absolute",
  background: "transparent",
  p: 0,
  top: 5,
  fontSize: `20px`,
  color: `#6b778c`,
  cursor: "pointer",
  boxShadow: "rgb(9 30 66 / 8%) 0px 0px 0px 1px, rgb(9 30 66 / 8%) 0px 2px 4px",
  borderRadius: "50%",
  zIndex: 10,
  display: { base: "inline-flex", md: "none" },
};

export const asideTopContainer = {
  position: `relative`,
};

export const asideBottomContainer = {
  display: `flex`,
  alignItems: `center`,
  gap: `10px`,
  pt: `24px`,
  m: 0,
  transition: `all 0.8s ease-in-out`,
  _hover: { width: `240px` },
};

export const asideLogo = {
  fontSize: `32px`,
  fontWeight: `500`,
};

export const asideNav = {
  display: `flex`,
  flexDirection: `column`,
  gap: `4px`,
  mt: `24px`,
};

export const asideNavLink = {
  borderRadius: `4px`,
  transition: `all 0.5s ease-in-out`,
  width: `100%`,
  cursor: `pointer`,
  _hover: {
    backgroundColor: `#00295d`,
  },
  display: `flex`,
  alignItems: `center`,
  gap: `12px`,
  px: `16px`,
  py: `8px`,
  color: `ebf8ff`,
  fontSize: `16px`,
  fontWeight: `500`,
  fontFamily: `inherit`,
};

export const asideNavTeams = {
  display: `flex`,
};

export const asideNavTeamsAccordion = {
  gap: 2,
  padding: 0,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export const asideNavTeamsAccordionTitle = {
  flex: "1",
  textAlign: "left",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "inline",
};

export const asideTeamLink = {
  borderRadius: `4px`,
  width: `100%`,
  cursor: `pointer`,
  display: `flex`,
  alignItems: `center`,
  gap: `12px`,
  px: `16px`,
  py: `8px`,
  color: `ebf8ff`,
  fontSize: `16px`,
  fontWeight: `500`,
  fontFamily: `inherit`,
  justifyContent: `space-between`,
};

export const asideNavIcon = {
  size: `24px`,
  color: `#bee3f8`,
};

export const asideProfilePicture = {
  size: `30px`,
};

export const asideUserName = {
  fontSize: `14px`,
  fontWeight: `600`,
  color: `white`,
};

export const asideUserEmail = {
  fontSize: `14px`,
  fontWeight: `400px`,
  color: `white`,
};

export const menuButtonItems = {
  display: `flex`,
  alignItems: `center`,
  gap: `5px`,
};

export const menuList = {
  width: `272px`,
};

export const menuItem = {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `5px`,
  _focus: {
    backgroundColor: `white`,
  },
  _hover: {
    backgroundColor: `backgroundGrey`,
  },
};

export const menuItemLogout = {
  color: `red`,
};

export const asideStyleButtonTeams = {
  display: `flex`,
  gap: 2,
};

export const asideSizeTeams = {
  variant: `ghost`,
  _hover: { backgroundColor: `gray.700` },
  p: 0,
};

export const containerTeams = {
  display: `flex`,
  flexDirection: `column`,
  border: `0px`,
  p: `1.5`,
  py: `0px`,
};

export const buttonColorTeams = {
  display: `flex`,
  justifyContent: `space-evenly`,
  overflow: `hidden`,
  w: `100%`,
  p: `2`,
  mt: `1`,
  gap: `2`,
  borderRadius: `5px`,
  position: `static`,
  _hover: { backgroundColor: `gray.500` },
};

export const asideStyleTextTeams = {
  textAlign: `center`,
  opacity: `.2`,
  pb: `3`,
};

export const containerInsideTeams = {
  marginBottom: "3",
};

export const textMenu = {
  color: "black",
};

export const sizeIconsTeams = {
  size: `25`,
};

export const buttonModals = {
  type: `submit`,
  bgColor: `black`,
  color: `white`,
  _hover: { bg: "#11376b" },
  mr: `3`,
  marginLeft: `5`,
};
