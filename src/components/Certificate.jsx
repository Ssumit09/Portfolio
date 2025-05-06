import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";

const CertificateCard = ({ title, image, link }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-lg">
        <div
          className="cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full h-[200px] object-cover"
          />
        </div>
        <h3 className="text-white font-bold text-[20px] mt-4 text-center">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-center text-sm text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md"
          >
            View Certificate
          </a>
        )}
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </>
  );
};

const Certificates = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>Certifications</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are some of the certifications I have completed to enhance my skills and knowledge.
        </p>
      </div>

      <div className="certificates-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {certificates.map((cert, index) => (
          <CertificateCard key={`certificate-${index}`} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
