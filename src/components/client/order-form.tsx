"use client";
import Button from "@/components/ui/button";

const OrderForm = ({ productName }: { productName: string }) => {
  return (
    <form className="flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 w-full">
      <div className="flex items-center gap-x-2 sm:gap-x-4 mb-1">
        <p className="w-[120px]">Product Name:</p>
        <h3 className="w-[calc(100%-120px)] text-lg text-main-color font-bold">
          {productName}
        </h3>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="conpany" className="w-[120px] block">
          Company:
        </label>
        <input
          id="company"
          type="text"
          className="block w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="user-name" className="w-[120px] block">
          Name:
        </label>
        <input
          id="user-name"
          type="text"
          className="block w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="user-phone" className="w-[120px] block">
          Phone:
        </label>
        <input
          id="user-phone"
          type="text"
          className="block w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="user-email" className="w-[120px] block">
          E-mail:
        </label>
        <input
          id="user-email"
          type="email"
          className="block w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <span className="w-[120px] block">Type:</span>
        <div className="grid grid-cols-2 gap-x-2 md:flex md:gap-x-4">
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
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="title" className="w-[120px] block">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="block w-[calc(100%-120px)] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        />
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="content" className="w-[120px] block">
          Content:
        </label>
        <textarea
          id="content"
          className="block w-[calc(100%-120px)] h-[150px] sm:h-[100px] resize-none outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
        ></textarea>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <label htmlFor="user-code" className="w-[120px] block">
          Code:
        </label>
        <div className="flex flex-col-reverse sm:items-center sm:flex-row sm:gap-x-2">
          <div className="flex gap-x-2 mt-2 sm:mt-0">
            <input
              id="user-code"
              type="text"
              placeholder="code"
              className="block w-[80px] outline-none border border-gray-400 duration-200 hover:border-main-color focus:border-main-color py-[6px] sm:py-2 px-3 sm:px-4 rounded-md"
            />
            <img
              src="http://www.trustmomed.com/includes/code.php"
              alt="code-image"
            />
          </div>
          <p>See? Replacing a</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4 mt-2 sm:mt-0">
        <div className="w-[120px]"></div>
        <div className="w-[calc(100%-120px)] flex flex-col sm:flex-row">
          <Button>
            <span className="px-6">Submit</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
