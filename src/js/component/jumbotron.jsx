import React from "react";
import "./home"

const Jumbotron = () => {
    return (
        <>
            <div className="container-fluid bg-body-tertiary p-5 mt-1">
                <h1 className="display-3"> <strong>A Warm Wellcome!</strong> </h1>
                <p> The key of this project is to help you understand how to pick the components that you want to build. You have to think about the best way to organize and avoid future errors. What can be re-used? If your code is turning into something big and hard to understand, you will probably need to split it into components: Jumbotron, Navbar, Card. </p>
                <button className="btn btn-primary mb-1">Call to Action!</button>
            </div>
        </>
    )
}

export default Jumbotron