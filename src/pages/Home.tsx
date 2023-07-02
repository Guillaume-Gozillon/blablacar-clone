import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Button component={Link} to="/about" variant="contained" color="primary">
        Go to About
      </Button>
    </>
  );
};

export default Home;
