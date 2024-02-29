import sarah from '../images/Sarah.jpg';
import alex from '../images/64.jpg';
import mia from '../images/15.jpg';
import david from '../images/54.jpg';

const customerRevies = [
    {
        id: 'CR1',
        customerName: 'Sarah H',
        customerImage: sarah,
        startRating: 5,
        description:
            "Little Lemon's flavors are a Mediterranean dream. Every dish is a burst of freshness!",
        timeSincePosted: '2 Day',
    },
    {
        id: 'CR2',
        customerName: 'Alex M.',
        customerImage: alex,
        startRating: 5,
        description:
            'Delicious and authentic. Little Lemon exceeded my expectations. A culinary journey worth taking!',
        timeSincePosted: '2 Week',
    },
    {
        id: 'CR3',
        customerName: 'Mia S.',
        customerImage: mia,
        startRating: 4,
        description:
            "Little Lemon's Lemon Dessert is pure bliss. Sweet, tangy perfection on every plate!",
        timeSincePosted: '1 Month',
    },
    {
        id: 'CR4',
        customerName: 'David K.',
        customerImage: david,
        startRating: 5,
        description:
            "A taste of the Mediterranean at its finest. Little Lemon's Greek Salad is a refreshing delight!",
        timeSincePosted: '1 Month',
    },
];

const Testimonials = () => {
    const generateStarRating = (rating, id) => {
        const stars = Array.from(Array(rating).keys());
        return stars.map((star, index) => (
            <span key={`${id}-star-${index}`}>⭐</span>
        ));
    };

    return (
        <section className="customerReviews container">
            <h1>Customer Reviews</h1>
            <div className="allReviews">
                {customerRevies.map((review) => {
                    return (
                        <div key={review.id} className="review">
                            <div className="header">
                                <img
                                    src={review.customerImage}
                                    alt="customer"
                                />
                                <div className="customerDetails">
                                    <h5>{review.customerName}</h5>
                                    <div className="ratingWrapper">
                                        <div>
                                            {generateStarRating(
                                                review.startRating,
                                                review.id
                                            )}
                                        </div>
                                        <div className="date">
                                            {review.timeSincePosted} ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>{review.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Testimonials;
