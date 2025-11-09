import React from "react";
import countries from "../../data/country";

const GiftaidFrom = () => {
  return (
    <div className="gift-aid-form-content">
      <form action="">
        <div className="gift-aid-header">
          <h3>Your Details</h3>
        </div>
        <div className="gift-aid-item">
          <h4>
            Name <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-4">
              <select
                className="form-select form-select-lg mb-2"
                aria-label="Large select example"
              >
                <option value=""></option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Dr">Dr</option>
                <option value="Prof.">Prof.</option>
                <option value="Rev.">Rev.</option>
              </select>
              <label htmlFor="">Prefix</label>
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
              <label htmlFor="">First</label>
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
              <label htmlFor="">Last</label>
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <h4>
            Address <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                House/Flat Number
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                Address Line 2
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="col-lg-6 ">
              <label htmlFor="" className="mb-2">
                City
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="" className="mb-2">
                Post Code
              </label>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="" className="mb-2">
                Country
              </label>
              <select
                className="form-select form-select-lg mb-2"
                aria-label="Large select example"
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="gift-aid-title mt-2">
                Email <span className="text-danger">*</span>
              </h4>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
              <label htmlFor="">
                By giving us your email, you consent to being contacted via this
                method
              </label>
            </div>
            <div className="col-lg-6">
              <h4 className="gift-aid-title mt-2">Telephone</h4>
              <input
                type="text"
                className="form-control form-control-lg mb-2"
              />
              <label htmlFor="">
                By giving us your email, you consent to being contacted via this
                method
              </label>
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Your Parish</h3>
            <p>Please let us know which Parish you attend.</p>
          </div>
          <h4>
            Parish Details <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-4 col-md-6 ">
              <select
                className="form-select form-select-lg mb-2"
                aria-label="Large select example"
              >
                <option value="">Parish Name</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-6">
              <select
                className="form-select form-select-lg mb-2"
                aria-label="Large select example"
              >
                <option value="">Parish Email</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-6">
              <select
                className="form-select form-select-lg mb-2"
                aria-label="Large select example"
              >
                <option value="">Gift Aid Coordinator</option>
              </select>
            </div>
          </div>
          <p>
            Please select the name of the Parish you attend, and your Parishes
            email address from the drop-down list.
          </p>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Gift Aid Declaration</h3>
          </div>
          <h4>
            I wish to Gift Aid my donations
            <span className="text-danger"> *</span>
          </h4>
          <div className="row">
            <div className="col-lg-12">
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  Yes, I would like the Archdiocese of Southwark to treat all
                  qualifying donations I make today, and any donations I make in
                  the future or have made in the past 4 years, until I notify
                  you otherwise, as Gift Aid donations.
                </label>
              </div>
            </div>
          </div>
          <h4>
            Today&apos;s Date
            <span className="text-danger">*</span>
          </h4>
          <div className="row">
            <div className="col-lg-6">
              <input
                type="date"
                className="form-control form-control-lg mb-2"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Ways to support the work and mission of your parish</h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4>
                Planned Giving: Would you like to become a regular supporter, or
                update an existing regular gift?
                <span className="text-danger">*</span>
              </h4>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Yes</label>
              </div>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">I am already giving regularly</label>
              </div>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Not at this time</label>
              </div>
            </div>
            <div className="col-lg-12">
              <h4>
                Would you be interested in volunteering opportunities within
                your Parish?*
                <span className="text-danger">*</span>
              </h4>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Yes</label>
              </div>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Not at this time</label>
              </div>
              <div className="from-check-box-list">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  I am already involved within my Parish as a volunteer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h3>Privacy Policy</h3>
            <p>
              Your Privacy: Your personal details and donations will be stored
              securely on the Archdiocese of Southwark’s database. We comply
              with data protection regulation and the Fundraising Regulator’s
              code of practice. We will never sell your data to third parties.
              We will use your details to administer your gifts, occasionally
              send you news on the work of the Church and give you the
              opportunity to support appeals. We only share information with
              external organisations working on our behalf or when required by
              law (e.g. to claim Gift Aid). You can read the full privacy policy
              on: www.rcaos.org.uk/diocese/policies
            </p>
          </div>
        </div>
        <div className="gift-aid-item">
          <div className="gift-aid-header">
            <h4>
              Consent
              <span className="text-danger">*</span>
            </h4>
            <div className="from-check-box-list">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I agree to the privacy policy.</label>
            </div>
          </div>
          <h5 className="gift-aid-deses">
            Roman Catholic Archdiocese of Southwark – A Charitable Incorporated
            Organisation – Registered Incorporated Charity Number 1173050
          </h5>
        </div>
        <div>
          <button className="custom-btn"> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default GiftaidFrom;
