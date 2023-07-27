import AboutC from "../Components/Aboutpage";
import HeaderPage from "../Components/Header";

export default function About() {
  return (
    <div className="pb-20">
      <HeaderPage img={true} title={"About Us"} namePage={"About"} />
      <AboutC />
    </div>
  );
}
