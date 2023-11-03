import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="hero min-h-screen text-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-2xl font-bold">Peter Parker</h1>
            <p className="py-6">
              <b>Contact: </b> 01777777777
            </p>
            <p>
              <b>Email: </b> peterparker@gmail.com
            </p>
            <button className="btn btn-primary mt-5">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
