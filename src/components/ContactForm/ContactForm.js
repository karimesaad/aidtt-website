// import React from "react";
// import styles from "./ContactForm.module.css";

// const Contact = () => {
//   return (
//     <section className={styles.contact}>
//       <div className={styles.container}>
//         <div className={styles.title} id="contacto">
//           Contacto
//         </div>
//         <form className={styles.contact__form} action="">
//           <label htmlFor="">Nombre</label>
//           <input type="text" />
//           <label htmlFor="">Email</label>
//           <input type="email" name="" id="" />
//           <label htmlFor="">Mensaje</label>
//           <textarea rows="10"></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

import axios from "axios";

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xvowdbbn",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title} id="contacto">
          Contacto
        </div>
        <form onSubmit={handleOnSubmit} className={styles.contact__form}>
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" value="Send" disabled={serverState.submitting}>
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
export default Contact;
