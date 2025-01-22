import Landing from "./landing";
import About from "./about";
import Tracks from "./tracks/index";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import Team from "./team";
// import Committees from "./committees";
import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Speaker from "./speaker";

const Live = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-clip">
      <Landing />
      <About />
      <Tracks />
      <Schedule />
      <Speaker />
      <Sponsors />
      <Team />
      {/* <Committees /> */}
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
