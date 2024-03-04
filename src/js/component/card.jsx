import React from "react";
import "./home"
import rigoImage from "../../img/rigo-baby.jpg";
const Card = () => {
    return (
        <>
            <div className="p-2 m-4 bg-body-tertiary border text-center">
                <img className="img img-fluid" src="https://dummyimage.com/500x325/fff/aaa" />
                <h3 className="mt-1 text-center">Card Title</h3>
                <p className="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.</p>
                <button className="btn btn-primary">Find Out More!</button>
            </div>
        </>
    )
}

export default Card