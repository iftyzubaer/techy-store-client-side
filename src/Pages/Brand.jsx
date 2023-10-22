const Brand = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-20 lg:px-40">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/yyGXyz6/knowledge-graph-logo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Apple</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/wc81y3V/2560px-Samsung-Logo-svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Samsung</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/94XzWtW/sony-logo-blue-RGB.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sony</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/FDNc77w/profile-vrt-raw-bytes-1587515358-10512.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Google</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/rdbwN2g/Intel-Logo-2005.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Intel</h2>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className="h-56" src="https://i.ibb.co/28swyJW/Nokia-Logo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nokia</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;