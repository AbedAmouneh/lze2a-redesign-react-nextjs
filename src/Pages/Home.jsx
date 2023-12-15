import { BlackFridayOffer } from "../Components/Home/blackFridayOffer";
import { CustomizeSection } from "../Components/Home/customizeSection";
import { NewCollection } from "../Components/Home/newCollection";
import { OurProductsSection } from "../Components/Home/ourProductsSection";
import { ShareFeedback } from "../Components/Home/shareFeedback";
import { Showcase } from "../Components/Home/showcase";
import { WelcomeSection } from "../Components/Home/welcomeSection";
import { YourFeedback } from "../Components/Home/yourFeedback";

export const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <OurProductsSection />
      <NewCollection />
      <BlackFridayOffer />
      <CustomizeSection />
      <Showcase />
      <YourFeedback />
      <ShareFeedback />
    </div>
  );
};
