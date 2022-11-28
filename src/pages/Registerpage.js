import React from "react";
import styles from "../css/Loginpage.module.css";
import s1Image from "../images/login.jpg";

const Registerpage = (props) => {
  return (
      <section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
        >
          <div className={styles.Authformcontainer}>
      <form className={styles.Authform} action = "http://localhost:80/code/server.php" method = 'post'>
        <div className={styles.Authformcontent}>
          <h3 className={styles.Authformtitle}>Register</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="uname"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="pass"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="user name"
            />
          </div>
          <div className="form-group mt-3">
            <label>phone number</label>
            <input
              type="number"
              name="phone"
              className="form-control mt-1"
              placeholder="Enter mobile number"
            />
            <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control mt-1"
              placeholder="Enter your address"
            />
          </div>
          </div>
          <div className="d-grid gap-2 mt-3">
          <input type="submit" name="register" value="register" className="btn btn-primary" />
          </div>
          <p className="forgot-password text-right mt-2">
            Already exist ? <a href="Loginpage">Login</a>
          </p>
        </div>
      </form>
      </div>
      </section>
    
  );
};

export default Registerpage;
