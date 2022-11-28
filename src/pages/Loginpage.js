import React from "react";
import styles from "../css/Loginpage.module.css";
import s1Image from "../images/login.jpg";

const Loginpage = (props) => {
  return (
      <section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
        >
          <div className={styles.Authformcontainer}>
      <form className={styles.Authform} action = "http://localhost:80/code/server.php" method = 'post'>
        <div className={styles.Authformcontent}>
          <h3 className={styles.Authformtitle}>Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name = "uname"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name = "pass"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <input type="submit" name="login" value="login" className="btn btn-primary" />
          </div>
          <p className="forgot-password text-right mt-2">
            New User ? <a href="Registerpage"> Sign Up </a>
          </p>
        </div>
      </form>
      </div>
      </section>
    
  );
};

export default Loginpage;
