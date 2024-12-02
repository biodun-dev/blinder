import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";

export default function GetStarted() {
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
        <title>Contact Us - AOR Global</title>
        <meta
          name="description"
          content="Get in touch with AOR Global for expert marketing, sales strategies, logistics, and innovative solutions tailored to your business needs."
        />
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Talk to an AOR Global Expert
              </h1>
              <p className="mt-3">
                AOR Global is here to empower your business. Contact us to
                explore how we can help with innovative marketing, logistics, and
                sales strategies tailored to your goals. Email us at{" "}
                <a
                  href="mailto:support@aorglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:text-red-400 font-medium duration-150"
                >
                  support@aorglobalworld.com
                </a>
                , or reach us directly via WhatsApp.
              </p>
              <a
                href="https://wa.me/234XXXXXXXXXX" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v6.75m0 0H10.5M3.75 9.75L10.5 3M3.75 21v-6.75m0 0H10.5m-6.75 0L10.5 21m10.5-9h6.75M21 9.75L14.25 3m6.75 18v-6.75m0 0H14.25m6.75 0L14.25 21"
                  />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5 font-medium"
              >
                <div>
                  <label>Full Name</label>
                  <Input
                    aria-label="Full Name"
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
                  <label>Service</label>
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
