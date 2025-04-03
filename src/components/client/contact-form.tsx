"use client";

import Button from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Have any Questions?</h2>
      <p className="text-gray-500 leading-7 mb-5 max-w-4/5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        maxime nihil atque conse
      </p>

      <form className="w-full flex flex-col gap-y-4">
        <input
          type="text"
          className="outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder="Your name"
        />
        <input
          type="email"
          className="outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder="Your email"
        />
        <textarea
          className="h-[180px] resize-none outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder="Your message"
        ></textarea>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
