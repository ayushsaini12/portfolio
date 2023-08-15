import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Contact = ({ resumeData }) => {
  return (
    <Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email : {resumeData.email}</h4>
              <h4>LinkedIn : {resumeData.linkedinId}</h4>
            </div>
          </aside>
        </div>
      </section>
    </Fragment>
  );
};

Contact.propTypes = {
  resumeData: PropTypes.object.isRequired,
};

export default Contact;
