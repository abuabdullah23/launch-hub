import Banner from "../Banner/Banner";
import NewsletterSignup from "../NewsletterSignup/NewsletterSignup";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <OurTeam />
            <NewsletterSignup />
        </div>
    );
};

export default Home;