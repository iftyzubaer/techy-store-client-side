import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {

    const product = useLoaderData()

    const handleUpdateProduct = e => {
        e.preventDefault()

        const form = e.target
        const photo = form.photo.value
        const name = form.name.value
        const brandName = form.brandName.value
        const category = form.category.value
        const price = form.price.value
        const details = form.details.value
        const rating = form.rating.value

        const updatedProduct = { photo, name, brandName, category, price, details, rating }
        console.log(updatedProduct);

        fetch(`https://techy-store-server.vercel.app/product/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast("Product Updated Successfully");
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen my-16">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Update the Product</h1>
                            </div>
                            <div className="grid">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="url" name="photo" defaultValue={product.photo} placeholder="Product's Image URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={product.name} placeholder="Product Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <select name="brandName" defaultValue={product.brandName} className="select select-bordered" required>
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
                                    <input type="text" name="category" defaultValue={product.category} placeholder="Product's Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" defaultValue={product.price} placeholder="Product's Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short Description</span>
                                    </label>
                                    <textarea type="text" name="details" defaultValue={product.details} placeholder="Product's Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="number" name="rating" defaultValue={product.rating} placeholder="Product's Rating" className="input input-bordered" min="1" max="5" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProduct;