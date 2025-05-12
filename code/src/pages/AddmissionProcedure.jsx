import React from "react";
import { Link } from "react-router-dom";

const AddmissionProcedure = () => {
  const requiredDocuments = [
    "Original Transfer Certificate (From Class II Onwards)",
    "Caste Certificate (If Applicable)",
    "Original Birth Certificate (Upto Class I)",
    "Original Migration Certificate (XI)",
    "Aadhar Card (Optional)",
    "Report Card (Required)",
    "Latest Photographs (Name mentioned backside)",
    "Bonafide Certificate (Required)",
  ];

  return (
    <section className="w-full flex-center min-h-screen h-full flex-col relative mx-auto bg-gray-100">
      <div className="max-w-screen-xl w-full mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl md:mt-2 md:text-heading relative hori-strip after:top-10 md:after:top-17 text-shade-blue-light text-center font-bold">
          Addmission Procedure
        </h1>
        <div className="flex flex-col gap-3 mt-5">
          <h3 className="text-center font-semibold text-shadow-shade-blue-light">
            Procurement of Prospectus & Admission Form :
          </h3>
          <p className="text-center font-normal text-shadow-shade-blue-light">
            Procure the prospectus from the school office on any working day
            between 8.00 am and 2.00 pm. It can either be collected personally
            or a proxy can be deputed to collect the same on your behalf. The
            set of forms (in the prospectus) need to be submitted with necessary
            documents for registration. On submission of the registration form
            to the front desk of the school, necessary information shall be
            intimated to you.
          </p>
          <h3 className="text-center font-semibold text-shadow-shade-blue-light">
            Documents Required at Admission Time :
          </h3>
          <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
            <ul className="list-inside text-center font-normal text-shadow-shade-blue-light">
              {requiredDocuments.map((doc, index) => (
                <li
                  key={index}
                  className="text-center max-w-xl mx-auto mb-1 p-1 bg-blue-600 text-white rounded-md"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-center font-semibold text-shadow-shade-blue-light">
            Procedure for the Addmision :
          </h3>
          <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
            <ul className="list-inside text-center font-normal text-shadow-shade-blue-light">
              <li className="text-center max-w-5xl mx-auto mb-3 p-1 py-3 bg-blue-600 text-white rounded-md">
                Student have to attend a written test for the respective class
                (seeking for admission).
              </li>
              <li className="text-center max-w-5xl mx-auto mb-3 p-1 py-3 bg-blue-600 text-white rounded-md">
                After passing written test, ward is invited to a Oral test with
                director.
              </li>
              <li className="text-center max-w-5xl mx-auto mb-3 p-1 py-3 bg-blue-600 text-white rounded-md">
                After written and oral test admission form is accepted, along
                with the first Instalment of school fee & Registration Charges.
              </li>
            </ul>
          </div>
        </div>
        <h5 className="text-center font-nornal text-shade-blue-light text-2xl m-2 cursor-pointer">Click for Our <Link to={'/fee-structure'}>Fees Structure</Link></h5>
      </div>
    </section>
  );
};

export default AddmissionProcedure;
