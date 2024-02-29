import greekSalad from '../images/greek salad.jpg';
import bruschetta from '../images/bruchetta.jpg';
import lemonDessert from '../images/lemon dessert2.jpg';
import { Link } from 'react-router-dom';

const weeklySpecials = [
    {
        name: 'Greek Salad',
        price: '$16.99',
        description:
            'Savor the refreshing simplicity of our Greek Salad, a vibrant medley of crisp cucumbers, juicy tomatoes, briny Kalamata olives, and creamy feta cheese, harmoniously tossed with our signature herb-infused vinaigrette. Each bite is a delightful journey to the sun-kissed shores of Greece, capturing the essence of the Mediterranean with every fresh and flavorful ingredient.',
        imageURL: greekSalad,
    },
    {
        name: 'Bruschetta',
        price: '$5.99',
        description:
            'Experience the Italian tradition with our Bruschetta. Freshly diced tomatoes, aromatic basil, and garlic mingle atop toasted artisanal bread, drizzled with extra virgin olive oil. This classic antipasto is a harmonious fusion of simplicity and sophistication, delivering a burst of Mediterranean flavors. Join us for an exquisite taste of tradition at our family-owned restaurant.',
        imageURL: bruschetta,
    },
    {
        name: 'Lemon Dessert',
        price: '$5.99',
        description:
            'Indulge in the tantalizing allure of our Lemon Dessert, where zesty citrus flavors take center stage in a symphony of sweetness. Immerse yourself in the perfect balance of tangy and sweet, as our chef crafts a delightful creation that captures the essence of Mediterranean sunshine in every luscious bite. Elevate your dessert experience at our family-owned restaurant.',
        imageURL: lemonDessert,
    },
];

const WeeklySpecials = () => {
    return (
        <section className="weeklySpecials container">
            <h1>This Weeks Specials!</h1>

            <div className="weeklySpecialItems">
                {weeklySpecials.map((special) => {
                    return (
                        <article key={special.name}>
                            <img src={special.imageURL} alt="weekly special" />
                            <div className="content">
                                <h2>{special.name}</h2>
                                <span>{special.price}</span>
                                <p>{special.description}</p>

                                <Link to={'/reservations'}>Order Now</Link>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default WeeklySpecials;
