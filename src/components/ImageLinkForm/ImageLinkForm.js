import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {
                    "This Magic Brain will detect faces in your pictures. Give it a try:"
                }
            </p>
            <div className="face-input-btn">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="face-btn w-30 grow f4 link ph3 pv2 dib white bg-light-blue ">
                    Detect
                </button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
