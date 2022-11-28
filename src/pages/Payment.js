import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Payment.module.css";
import s1Image from "../images/login.jpg";

const Payment = (props) => {
  return (
    <>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <section
          style={{ backgroundImage: `url(${s1Image})` }}
          className={styles.s1}
        >
    <div className={styles.container}>
    <div className="container" >
        <div className="row">
            <div className="col-xs-12 col-md-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>
                            Payment Details
                        </h3>
                        <div>
                            <label>
                                <input type="checkbox" />
                                Remember
                            </label>
                        </div>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                        <div className="form-group">
                            <label for="cardNumber">
                                CARD NUMBER</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="cardNumber" placeholder="Valid Card Number"
                                    required autofocus />
                                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-7 col-md-7">
                                <div className="form-group">
                                    <label for="expityMonth">
                                        EXPIRY DATE</label>
                                    <div className="col-xs-6 col-lg-6 plziro">
                                        <input type="text" className="form-control" id="expityMonth" placeholder="MM" required />
                                    </div>
                                    <div className="col-xs-6 col-lg-6 plziro">
                                        <input type="text" className="form-control" id="expityYear" placeholder="YY" required /></div>
                                </div>
                            </div>
                            <div className="col-xs-5 col-md-5 pullright">
                                <div className="form-group">
                                    <label for="cvCode">
                                        CVV </label>
                                    <input type="password" className="form-control" id="cvCode" placeholder="CVV" required />
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <ul className="nav nav-pills nav-stacked">
                <a href="/Thankyou" className="btn btn-success btn-lg btn-block" role="button">Cash On Delivery</a>
                </ul>
                <br/>
                <a href="/Thankyou" className="btn btn-success btn-lg btn-block" role="button">Pay</a>
            </div>
        </div>
    </div>
    </div>
    </section>
    </>
     
    
  );
};

export default Payment;