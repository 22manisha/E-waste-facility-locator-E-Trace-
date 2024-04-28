import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature from "../../assets/features/banner.svg";

const About = () => {
  return (
    <section className="section features" id="features" aria-label="features">
      <div className="container mx-auto px-4 text-center">
        <p className="section-subtitle font-bold text-gray-700 mb-2">
        -About E-Trace
        </p>

        <h2 className=" text-4xl section-title font-bold text-black mb-4">
        Making a revolution in E-Waste 
        </h2>

        <div className=" mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pl-8">
              <p className="section-text text-3xl text-gray-600  font-semibold leading-relaxed">
              Improper disposal of e-waste in India poses a significant environmental and health hazard. 
              With the rapid growth of technology adoption across the country, electronic devices such as mobile phones, computers, and 
              televisions are becoming increasingly ubiquitous. However, the improper disposal of these devices leads to the release of hazardous substances like lead, mercury, and cadmium into the environment, contaminating soil, water, and air.  
              </p>
              <div className="flex flex-wrap justify-center md:justify-start">
                <p className="btn btn-primary mr-3">
                  <Link href="/contactus"> Contact Us</Link>
                </p>
                <p className="btn btn-secondary mr-3">
                  <Link href="/recycle"> Recycling Services</Link>
                </p>{" "}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center section-banner has-before">
              <Image
                src={feature}
                alt="Image"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
