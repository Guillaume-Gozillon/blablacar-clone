// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
import { Button } from "../stories/Button";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Button
        label="Go to About"
        primary
        //  component={Link}
        // to="/"
      />
    </>
  );
};

export default Home;
