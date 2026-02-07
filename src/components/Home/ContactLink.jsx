import React from "react";

const ContactLink = () => {
  return (
    <div className="py-[64px] w-324 mx-auto flex flex-col items-center justify-center">
      <h2 className="text-[32px] text-secondary font-bold mb-6  text-center">
        Be a part of our growing real state agents
      </h2>
      <button className="mx-auto bg-primary text-white py-4 px-6 rounded-full">
        {" "}
        Apply for real estate agent
      </button>
    </div>
  );
};

export default ContactLink;
