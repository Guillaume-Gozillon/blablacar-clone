import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import logo from "../assets/logo.png";

type MyComponentProps = {
  children: ReactNode;
};

const Navigation = ({ children }: MyComponentProps) => {
  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <img src={logo} alt="Logo" style={{ width: "200px", height: "auto" }} />
        <Typography>Nav</Typography>
      </Stack>
      {children}
    </>
  );
};

export default Navigation;
