import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";

export default function PartnerWithUs() {
  const servicesItems = [
    "Logistics",
    "Marketing & Brand Strategy",
    "Targeted Advertising Campaigns",
    "Sales Strategy & Execution",
    "Data-Driven Market Research",
   
  ];

  return (
    <>
      <Head>
        <title>Partner With Us - AOR Global</title>
        <meta
          name="description"
          content="Partner with AOR Global for innovative marketing, logistics, and sales solutions that empower your business."
        />
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Partner With AOR Global
              </h1>
              <p className="mt-3">
                AOR Global is committed to forming lasting partnerships that
                drive success. Collaborate with us to achieve innovative
                marketing, logistics, and sales strategies tailored to your
                business needs. Email us at{" "}
                <a
                  href="mailto:partners@aorglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-red-400 font-medium duration-150"
                >
                  partners@aorglobalworld.com
                </a>
                , or contact us directly through the form below.
              </p>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 font-medium"
              >
                <div>
                  <label>Organization Name</label>
                  <Input
                    aria-label="Organization Name"
                    type="text"
                    required
                    className="mt-2 focus:border-red-600"
                  />
                </div>
                <div>
                  <label>Contact Name</label>
                  <Input
                    aria-label="Contact Name"
                    type="text"
                    required
                    className="mt-2 focus:border-red-600"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    aria-label="Email"
                    type="email"
                    required
                    className="mt-2 focus:border-red-600"
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    aria-label="Message"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <div>
                  <label>Interested Services</label>
                  <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16">
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className="flex gap-x-2 items-center">
                        <Checkbox id={`service-${idx}`} />
                        <label htmlFor={`service-${idx}`} className="text-sm">
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-1">
                  <Button className="w-full text-white bg-red-600 hover:bg-red-500 active:bg-red-600 ring-offset-2 ring-red-600 focus:ring">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
