import image from '../images/Mario and Adrian A.jpg';

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <div className="container">
                <div>
                    <h1>About us</h1>
                    <p>
                        Meet the visionary duo behind Little Lemon, Mario and
                        Adrian. United by their love for Mediterranean flavors,
                        the brothers embarked on a culinary adventure, inspired
                        by their family's heritage. Raised on the rich tapestry
                        of Mediterranean cuisine, they envisioned bringing those
                        timeless flavors to the vibrant city of Chicago. With a
                        shared commitment to authenticity and innovation, Mario
                        and Adrian meticulously crafted the menu, infusing
                        traditional recipes with a modern twist. Little Lemon is
                        not just a restaurant; it's a manifestation of their
                        passion and a testament to the authenticity and warmth
                        of Mediterranean hospitality. Join us and experience the
                        journey Mario and Adrian poured into every dish.
                    </p>
                </div>
                <img src={image} alt="little lemon restaurant staff" />
            </div>
        </section>
    );
};

export default AboutUs;
