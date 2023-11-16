import React from "react";
import PhotoUploadBox from "./PhotoUploadBox ";
import toast from "react-hot-toast";

const MyProfile = () => {
  const sendVerificationData = () => {
    toast.success("Sent successfully");
  };
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
            <button className="btn btn-primary mt-5">Edit</button>
            <br />
            <br />
            <div className="flex items-center justify-center">
              <label htmlFor="my_modal_7" className="btn btn-success">
                Verification
              </label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <div className="bg-base p-3 m-3 grid justify-center">
                  Send NID/PASSPORT for verification
                  <PhotoUploadBox></PhotoUploadBox>
                  <div className="flex justify-end">
                    <label
                      className="modal-backdrop btn btn-active btn-success mx-2 mt-2 pt-1"
                      htmlFor="my_modal_7"
                      onClick={sendVerificationData}
                    >
                      Send
                    </label>
                    <label
                      className="modal-backdrop btn btn-active btn-error mt-2 pt-1"
                      htmlFor="my_modal_7"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
              {/* <label
                className="modal-backdrop btn btn-active btn-error "
                htmlFor="my_modal_7"
              >
                Close
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
