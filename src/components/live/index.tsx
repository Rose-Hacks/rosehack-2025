import Landing from "./landing";
import About from "./about";
import Schedule from "./schedule";
import Tracks from "./tracks/index";
import Sponsors from "./sponsors";
import Team from "./team";
import Committees from "./committees";
import Judges from "./judges";
import FAQ from "./faq";
import Footer from "./footer";
import Content from "./landing/content";

const Live = () => {
  return (
    <div className="flex w-full flex-col items-center overflow-clip">
      <Landing />
      <Content />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <Team />
      <Committees />
      <Judges />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
