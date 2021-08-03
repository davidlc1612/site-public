import "./Common.css";
import Common from "./Common.js";

export default function Footer() {
    return (
        <div className="light-bg new-page">
            <div className="page-box dark-text2">
                Copyright © 2021 {Common.nameStr}. All Rights Reserved.<br />
                Developed with React.js and Bootstrap.
            </div>
        </div>
    );
}