"use client";
import Button from "@/components/ui/button";

const OrderForm = ({ productName }: { productName: string }) => {
  return (
    <form className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 w-full">
      <div className="flex items-center gap-x-2 sm:gap-x-4 sm:mb-1">
        <p className="w-[120px] font-bold sm:font-normal">Product Name:</p>
        <h3 className="w-[calc(100%-120px)] text-lg text-main-color font-bold">
          {productName}
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="company"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Company:
        </label>
        <input
          id="company"
          type="text"
          className="block w-full sm:w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="user-name"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Name:
        </label>
        <input
          id="user-name"
          type="text"
          className="block w-full sm:w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="user-phone"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Phone:
        </label>
        <input
          id="user-phone"
          type="text"
          className="block w-full sm:w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="user-email"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          E-mail:
        </label>
        <input
          id="user-email"
          type="email"
          className="block w-full sm:w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <span className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0">
          Type:
        </span>
        <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-y-0 sm:grid sm:grid-cols-2 sm:gap-x-2 md:flex md:gap-x-4">
          <div className="flex items-center gap-x-2">
            <input id="msg" type="radio" name="radio-type" className="" />
            <label htmlFor="msg">Message</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              id="Complaints"
              type="radio"
              name="radio-type"
              className=""
            />
            <label htmlFor="Complaints">Complaints</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input id="Ask" type="radio" name="radio-type" className="" />
            <label htmlFor="Ask">Ask</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              id="Aftermarket"
              type="radio"
              name="radio-type"
              className=""
            />
            <label htmlFor="Aftermarket">Aftermarket</label>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="title"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="block w-full sm:w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="content"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Content:
        </label>
        <textarea
          id="content"
          className="block w-full sm:w-[calc(100%-120px)] h-[150px] sm:h-[100px] resize-none outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        ></textarea>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4">
        <label
          htmlFor="user-code"
          className="font-bold sm:font-normal sm:w-[120px] block mb-1 sm:mb-0"
        >
          Code:
        </label>
        <div className="flex items-center gap-x-2">
          <input
            id="user-code"
            type="text"
            placeholder="code"
            className="block w-28 sm:w-20 outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
          />
          <img
            src="http://www.trustmomed.com/includes/code.php"
            alt="code-image"
          />
          <p className="hidden sm:block">See? Replacing a</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4 mt-2 sm:mt-0">
        <div className="w-[120px] hidden sm:block"></div>
        <div className="w-full sm:w-[calc(100%-120px)] flex flex-col sm:flex-row">
          <Button>
            <span className="px-6">Submit</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
