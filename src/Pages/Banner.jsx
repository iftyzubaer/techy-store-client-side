const Banner = () => {
    return (
        <div className="mb-16">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SfjsSK3/cute-robots-digital-assistants-computer-keyboard-vector-cartoon-illustration-chat-bots-funny-electro.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Techy Store</h1>
                        <p className="mb-5">Your one stop tech solution.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;