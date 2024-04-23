import React from "react";
import { Grid, IconButton } from "@mui/material";
import contactData from "../utils/Contact";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  return (
    <div id="Contact">
      <PageTitle title="Contact" />
      <Grid container justifyContent="center" sx={{ mb: 5 }}>
        {contactData.length > 0 &&
          contactData.map((contact, index) => (
            <IconButton
              key={index}
              onClick={() => {
                window.open(contact.link, "_blank", "noreferrer");
              }}
            >
              {contact.icon}
            </IconButton>
          ))}
      </Grid>
    </div>
  );
};

export default Contact;
