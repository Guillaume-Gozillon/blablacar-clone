import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>ABOUT Page</h1>
      <Button component={Link} to="/" variant="contained" color="primary">
        Go to HOME
      </Button>
    </>
  );
};

export default About;
