import React from "react";
import { NavLink } from "react-router-dom";

const img1="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg";
const img2="https://png.pngtree.com/templates/20180906/lily-flower-logo-png_31619.jpg";
const img3="https://png.pngtree.com/element_pic/17/03/24/007195df20f05557152a28173d202d39.jpg";
const img4="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg";
const img5="https://png.pngtree.com/templates/20180829/abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-png_29778.jpg";
const img6="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-2018-world-cup-football-match-russia-world-cup-student-movement-png-image_371161.jpg";

const Service = () => {
    return(
        <>
        <div className="col-md-12 col-10 mx-auto d-flex ">
        <div className="card" >
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title  fw-bold">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary bg-primary">Go Somewhere</NavLink>
        </div>
    </div>
    <div className="card" >
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
        </div>
    </div>
    <div className="card" >
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
        </div>
    </div>
    <div className="card" >
        <img src={img4} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
        </div>
    </div>
    <div className="card" >
        <img src={img5} className="card-img-top " alt="..." />
        <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
        </div>
    </div>
            <div className="card" >
        <img src={img6} className="card-img-top " alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
        <NavLink to="" className="btn btn-primary">Go Somewhere</NavLink>
        </div>
        </div>
            </div>
        </>
    );
}

export default Service;