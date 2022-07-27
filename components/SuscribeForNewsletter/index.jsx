import React from "react";
import EmailAddress from "../EmailAddress";
import "./SuscribeForNewsletter.css";

function SuscribeForNewsletter() {
  return (
    <div className="suscribe-for-newsletter">
      <div className="suscribe-for-newsletter-1">
        <div className="title-3 valign-text-middle epilogue-semi-bold-heavy-metal-20px">Suscribe for Newsletter</div>
        <p className="subtitle valign-text-middle epilogue-normal-masala-16px">
          Get our hand-picked discoveries &amp; articles delivered right to your inbox.
        </p>
      </div>
      <EmailAddress />
    </div>
  );
}

export default SuscribeForNewsletter;
