import { NavButton } from "../stories/NavButton";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <NavButton label="À propos" primary to="/about" />
    </>
  );
};

export default Home;
