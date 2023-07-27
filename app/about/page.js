import AboutC from "../Components/Aboutpage";
import HeaderPage from "../Components/Header";

export default function About() {
  return (
    <div>
      <HeaderPage img={true} title={"About Us"} namePage={"About"} />
      <AboutC />
    </div>
  );
}
