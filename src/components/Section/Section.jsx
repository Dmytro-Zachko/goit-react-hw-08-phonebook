import React from "react";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <section>
            <h2 style={{textAlign: "center",fontWeight: 500,
    fontSize: 48,marginBottom: -50}}>{title}</h2>
            {children}
        </section>
        )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}