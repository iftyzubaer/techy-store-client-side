import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()

        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const brandName = form.brandName.value
        const category = form.category.value
        const price = form.price.value
        const details = form.details.value
        const rating = form.rating.value

        const newProduct = { photo, name, brandName, category, price, details, rating }
        console.log(newProduct);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedID > 0) {
                    toast("Product Added Successfully");
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen my-16">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Add a Product</h1>
                            </div>
                            <div className="grid">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Product's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <select name="brandName" className="select select-bordered" required>
                                        <option disabled selected>Select Brand</option>
                                        <option>Apple</option>
                                        <option>Samsung</option>
                                        <option>Sony</option>
                                        <option>Google</option>
                                        <option>Intel</option>
                                        <option>Nokia</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Product's Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Product's Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea type="text" name="details" placeholder="Product's Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="number" name="rating" placeholder="Product's Rating" className="input input-bordered" min="1" max="5" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;