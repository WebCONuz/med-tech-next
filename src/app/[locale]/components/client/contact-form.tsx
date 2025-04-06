"use client";

import Button from "@/app/[locale]/components/ui/button";
import Title from "@/app/[locale]/components/ui/title";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("ContactPage");

  return (
    <div>
      <Title title={t("sub_title")} />
      <p className="text-gray-500 leading-7 mb-5 sm:max-w-4/5">{t("info")}</p>

      <form className="w-full flex flex-col gap-y-2 sm:gap-y-4">
        <input
          type="text"
          className="outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder={t("name")}
        />
        <input
          type="email"
          className="outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder={t("email")}
        />
        <textarea
          className="h-[180px] resize-none outline-none border border-gray-300 duration-200 hover:border-main-color focus:border-main-color py-2 px-4 rounded-md"
          placeholder={t("msg")}
        ></textarea>
        <Button>{t("btn")}</Button>
      </form>
    </div>
  );
};

export default ContactForm;
