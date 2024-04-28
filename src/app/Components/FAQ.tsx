"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FAQ = () => {
    const faqData = [
        {
          question: "What is an e-waste facility locator?",
          answer:
            "An e-waste facility locator is a tool or service that helps individuals and businesses find the nearest facilities where they can responsibly dispose of their electronic waste (e-waste).",
        },
        {
          question: "How does an e-waste facility locator work?",
          answer:
            "E-waste facility locators typically utilize geographic information systems (GIS) technology to map out the locations of authorized e-waste recycling facilities. Users can input their location or address into the locator, and it will provide them with a list of nearby facilities.",
        },
        {
          question: "What types of electronic waste can be disposed of at these facilities?",
          answer:
            "E-waste recycling facilities typically accept a wide range of electronic devices, including old computers, laptops, smartphones, tablets, printers, TVs, and other consumer electronics.",
        },
        {
          question: "What educational resources are available on ELocate?",
          answer:
            "ELocate features an education section with blogs and informative content to raise awareness about the impact of e-waste. Explore articles that highlight the importance of responsible e-waste recycling and its positive effects on the environment.",
        },
        {
          question: "How can I stay updated on the latest rules and regulations regarding e-waste management?",
          answer:
            "ELocate provides a dedicated section that lists the latest government rules and regulations related to e-waste management. Stay informed about the legal aspects of e-waste disposal and contribute to a greener environment.",
        },
        {
          question: "Are there any fees associated with using e-waste facilities?",
          answer:
            "The fee structures for using e-waste facilities can vary depending on the facility and the type of electronic waste being disposed of. Some facilities may charge a small fee for certain items, while others may offer free recycling services.",
        },
      ];
      

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <section className="md:mb-40">
      <Container >
        <Row>
          <Col>
            <h2 className="text-center text-3xl">Frequently Asked Questions</h2>
            <div className="mt-8">
              {faqData.map((item, index) => (
                <div
                  className={`mb-6 p-8 rounded-xl shadow-md ${
                    activeQuestion === index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => toggleQuestion(index)}
                >
                  <div className="flex items-center justify-between text-center gap-12">
                    <h4 className="text-2xl font-bold">
                      {item.question}
                      <span className="text-xl font-semibold ">
                        {activeQuestion === index ? (
                          <RiArrowDropUpLine />
                        ) : (
                          <RiArrowDropDownLine />
                        )}
                      </span>
                    </h4>
                  </div>
                  {activeQuestion === index && (
                    <p className="text-xl mt-4 ">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
