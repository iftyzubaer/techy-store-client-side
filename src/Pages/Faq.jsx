const Faq = () => {
    return (
        <div className="my-16">
            <h3 className="text-5xl py-6 font-bold text-center">Frequently Asked Questions</h3>
            <div className="px-2 md:px-20 lg:px-40">
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    Do you offer free shipping?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we provide free standard shipping on orders over a specified amount. Keep an eye out for promotions and banners indicating when free shipping is available during your purchase.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Are your products brand new and authentic?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! We only sell brand new, authentic products sourced directly from reputable manufacturers and distributors. Your satisfaction and trust in our products are our top priorities.</p>
                    </div>
                </div>
                <div className="collapse my-3 collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Is there a return policy?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we have a hassle-free 30-day return policy. If you&apos;re not satisfied with your purchase, contact our customer support to start the return process. We&apos;ll assist you in returning the item and processing a refund or exchange.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;