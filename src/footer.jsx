import React, { Component } from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import fb from "./Images/fb.png"


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid" style={{backgroundColor: "#f5f5f5"}}>
    <div className="container">
        <div className="row">

            <div className="columnextra">
                <p><b>&emsp;&emsp;&ensp;Navigate</b></p>
                <ul id="ctl00_ctl13_divFlNavSIn" class="module_list veryTight no-border">
                    <li id="ctl00_ctl13_divFlDashBoard"><a href="https://www.guru.com/pro/" id="f-footer-dash-in" tabindex="-1">Dashboard</a></li>
                    <li id="ctl00_ctl13_divFlFindWork"><a href="/work/" id="f-footer-find-work-in" tabindex="-1">Find Work</a></li>
                    <li><a href="https://www.guru.com/pro/jobs/" id="f-footer-projects-in" tabindex="-1">Jobs</a></li>
                    <li id="ctl00_ctl13_divFlPayments"><a href="/payments/invoices/" id="f-footer-payments-in" tabindex="-1">Payments</a></li>
                    <li id="ctl00_ctl13_divFlMyAgency"><a href="/agency/" id="f-footer-leads-in" tabindex="-1" target="_blank">Agency Solutions</a></li>
                </ul>
            </div>


            <div className="columnextra">
                <p><b>&emsp;&ensp;&ensp;&ensp;CompanyInfo</b></p>
                <ul id="ctl00_ctl13_CIEmpSin" class="module_list veryTight no-border">
                    <li id="ctl00_ctl13_divcinfoag"><a href="https://www.guru.com/about/" id="f-footer-about-in" tabindex="-1">About Guru</a></li>

                    <li id="ctl00_ctl13_divFlHowitwork"><a href="/how-it-works-freelancer/" id="f-footer-fl-how-guru-works-in" tabindex="-1">How Guru Works</a></li>
                    <li id="ctl00_ctl13_divcinfowg"><a href="/why-guru/" id="f-footer-why-guru-in" tabindex="-1">Why Guru</a></li>
                    <li id="ctl00_ctl13_divcinfowa"><a href="/agreements/" id="f-footer-work-agreement-in" tabindex="-1">Work Agreements</a></li>
                    <li id="ctl00_ctl13_divcinfosp"><a href="/safepay/" id="f-footer-safepay-in" tabindex="-1">SafePay</a></li>

                    <li id="ctl00_ctl13_divFlPricing"><a href="/pricing-freelancer/" id="f-footer-fl-pricing-in" tabindex="-1">Pricing</a></li>
                </ul>

            </div>

            <div className="columnextra">
                <p><b>&emsp;&emsp;&ensp;Resources</b></p>
                <ul class="module_list veryTight no-border">

                    <li id="ctl00_ctl13_divFlHelp"><a href="/help/freelancer/" id="f-footer-fl-help-in" tabindex="-1">Help &amp; FAQ</a></li>
                    <li><a href="https://www.guru.com/blog/" id="f-footer-blog-in" tabindex="-1">Blog</a></li>
                    <li><a href="https://www.guru.com/contact.aspx/" id="f-footer-contactus" tabindex="-1">Contact Us</a></li>
                    <li><a href="https://www.guru.com/apihelp/help.html" id="f-footer-apis-in" tabindex="-1">APIs</a></li>

                </ul>
            </div>

            <div className="columnextra">
                <p><b>&ensp;&emsp;&emsp;Policies</b></p>
                <ul class="module_list veryTight no-border">
                    <li><a href="//www.guru.com/trademark-copyright-policy/" id="f-footer-ip-in" tabindex="-1">IP Policy</a></li>
                    <li><a href="//www.guru.com/privacy-policy/" id="f-footer-privacy-in" tabindex="-1">Privacy Policy</a></li>
                    <li><a href="//www.guru.com/terms-of-service/" id="f-footer-terms-in" tabindex="-1">Terms of Service</a></li>
                </ul>
            </div>



            <div className="columnextra">


                <p><b>Get Hired Today!</b></p>
                <div class="rhythmMargin input-group">
                    <input type="text" className="niceInput" placeholder="Search Jobs"></input>

                </div><br></br>
                <p><b>&ensp;Connect with Us!</b></p>
                <img src={fb} alt="" />
            </div>
        </div>
</div>
    </div>
    );
  }
}

export default Footer;
