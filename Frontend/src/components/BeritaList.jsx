import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BeritaList = () => {
    const [beritas, setBerita] = useState([]);

    useEffect(() => {
        getBeritas();
    }, []);

    const getBeritas = async () => {
        const response = await axios.get("http://localhost:5000/berita");
        setBerita(response.data);
    };

    //   const deleteProduct = async (productId) => {
    //     await axios.delete(`http://localhost:5000/products/${productId}`);
    //     getProducts();
    //   };

    return (
        <div className="container">
            {beritas.map((berita, index) => (
                <div className="card-body">
                    <p>{berita.title}</p>
                    <img ></img>
                    <p>{berita.content}</p>
                </div>
            ))}




            {/* <Link to="/products/add" className="button is-primary mb-2">
        Add New
      </Link> */}
            {/* <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}


            {/* <div>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beritas.map((berita) => (
                            <tr key={berita.id}>
                                <td>{berita + 1}</td>
                                <td>{berita.title_berita}</td>
                                <td>{berita.desc_berita}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default BeritaList;
