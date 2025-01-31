import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import Footer from "~/components/footer";
import Header from "~/components/header-burger";
import Bubble from "~/components/icons/bubble";
import Call from "~/components/icons/call";
import Facebook from "~/components/icons/facebook";
import LinkedIn from "~/components/icons/linkedIn";
import Location from "~/components/icons/location";
import Youtube from "~/components/icons/youtube";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const formData = new FormData(event.currentTarget);
  //     const jsonData: { [key: string]: string } = {};
  //     formData.forEach((value, key) => {
  //       jsonData[key] = value.toString();
  //     });

  //     const response = await fetch("/api/send", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(jsonData),
  //     });

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  const [open, setOpen] = useState<boolean>(false);
  const form = useRef(null);
  const sendmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_47akfid",
        "template_yz5j35d",
        form.current ?? "",
        "Ul_MQWKc5I8gI90Gt"
      )

      .then(
        () => {
          toast.success("message envoyé!");
        },
        () => {
          toast.error("Quelque chose ne va pas :(");
        }
      );
    e.target.reset();
  };
  return (
    <div className="h-screen">
      <Header open={open} setOpen={setOpen} />
      <div className="my-20 px-5 laptop:px-20">
        <div className="grid grid-cols-12 gap-y-10 laptop:gap-y-0">
          <form
            // onSubmit={onSubmit}
            ref={form}
            onSubmit={sendmail}
            className="col-span-12 laptop:hidden laptop:col-span-7 space-y-20 m-4 laptop:px-10 rounded-3xl "
          >
            <div className="space-y-4">
              <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-redeclic">
                Say Hi!
              </h2>
              <h4 className="text-gray-400 scroll-m-20 text-xl font-semibold tracking-tight">
                We are always excited to welcome new projects and partners. So,
                drop us a message or simply say hello!
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="relative w-full">
                <input
                  className="peer  h-fit w-full outline-none px-2 py-1 bg-transparent border-black focus:border-redeclic border-b placeholder-transparent"
                  type="text"
                  id="First_name"
                  name="First_name"
                  placeholder="First name"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  First name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="text"
                  id="Last_name"
                  name="Last_name"
                  placeholder="Last name"
                  required
                />
                <label className="absolute -z-10  left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Last name
                </label>
              </div>
              <div className="relative  w-full">
                <input
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  E-mail
                </label>
              </div>
              <div className="relative  w-full">
                <input
                  className="peer h-fit w-full outline-none bg-transparent px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  id="phone"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Phone number
                </label>
              </div>
              <div className="relative col-span-2 w-full">
                <textarea
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  placeholder="Message"
                  id="message"
                  name="message"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Message
                </label>
              </div>

              <button
                className="col-span-2 text-white bg-redeclic py-4 hover:scale-95 transition-all transform "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Let's get started!"}
              </button>
            </div>
          </form>
          <div className="col-span-12 laptop:col-span-5 gap-y-4 flex flex-col justify-between">
            <div className="space-y-6 pt-5">
              <div className="flex items-start gap-3">
                <div className="border rounded-md w-fit p-2">
                  <Bubble className="size-5 text-redeclic" />
                </div>
                <div>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Chat with us
                  </p>
                  {/* <p className="leading-7">Our friendly team is here to help</p> */}
                  <p className="text-lg font-semibold">
                    contact@declicagency.ma
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="border rounded-md w-fit p-2">
                  <Location className="size-5 fill-redeclic" />
                </div>
                <div>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Visit us
                  </p>
                  {/* <p className="leading-7">Come say hello at Our office HQ</p> */}
                  <p className="text-lg font-semibold">
                    Rue de L’Adjudant Jean Chelle Quartier Oasis <br />{" "}
                    Casablanca –Maroc
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="border rounded-md w-fit p-2">
                  <Call className="size-5 fill-redeclic" />
                </div>
                <div>
                  <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Call us
                  </p>
                  {/* <p className="leading-7">Mon-Fri from 9:00 to 18:00</p> */}

                  <p className=" text-lg font-semibold">+212 (0) 661325808</p>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3667.728540654623!2d-7.637687806105563!3d33.55683801252535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sma!4v1736414435494!5m2!1sfr!2sma"
              className="w-full border-4 border-redeclic h-52"
              loading="lazy"
            ></iframe>
            {/* social media */}
            <div className="flex items-center gap-x-4">
              <Link
                href="https://www.instagram.com/declic_agency/"
                className="border-2 rounded-full p-1.5  group hover:bg-white"
              >
                <FaInstagram
                  size={20}
                  className="fill-redeclic group-hover:fill-black  transition-all duration-300 transform"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/d%C3%A9clic-agency/about/"
                className="border-2 rounded-full p-1.5 group hover:bg-white"
              >
                <FaLinkedin
                  size={20}
                  className="fill-redeclic group-hover:fill-black  transition-all duration-300 transform"
                />
              </Link>
              <Link
                href="https://www.facebook.com/declicagency"
                className="border-2 rounded-full p-1.5 group hover:bg-white"
              >
                <FaFacebook
                  size={20}
                  className="fill-redeclic group-hover:fill-black  transition-all duration-300 transform"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC6wt8nivSSkdNWymLrEtj0g/featured"
                className="border-2 rounded-full p-1.5 group hover:bg-white"
              >
                <ImYoutube
                  size={20}
                  className="fill-redeclic group-hover:fill-black  transition-all duration-300 transform"
                />
              </Link>
            </div>
          </div>
          <form
            // onSubmit={onSubmit}
            ref={form}
            onSubmit={sendmail}
            className="col-span-12 hidden laptop:block laptop:col-span-7 space-y-20 m-4 laptop:px-10 rounded-3xl "
          >
            <div className="space-y-4">
              <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-redeclic">
                Say Hi!
              </h2>
              <h4 className="text-gray-400 scroll-m-20 text-xl font-semibold tracking-tight">
                We are always excited to welcome new projects and partners. So,
                drop us a message or simply say hello!
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="relative w-full">
                <input
                  className="peer  h-fit w-full outline-none px-2 py-1 bg-transparent border-black focus:border-redeclic border-b placeholder-transparent"
                  type="text"
                  id="First_name"
                  name="First_name"
                  placeholder="First name"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  First name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="text"
                  id="Last_name"
                  name="Last_name"
                  placeholder="Last name"
                  required
                />
                <label className="absolute -z-10  left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Last name
                </label>
              </div>
              <div className="relative  w-full">
                <input
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  E-mail
                </label>
              </div>
              <div className="relative  w-full">
                <input
                  className="peer h-fit w-full outline-none bg-transparent px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  id="phone"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Phone number
                </label>
              </div>
              <div className="relative col-span-2 w-full">
                <textarea
                  className="peer h-fit w-full bg-transparent outline-none px-2 py-1 border-black focus:border-redeclic border-b placeholder-transparent"
                  placeholder="Message"
                  id="message"
                  name="message"
                  required
                />
                <label className="absolute -z-10 left-2 top-1/2 transform -translate-y-1/2 text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-redeclic">
                  Message
                </label>
              </div>

              <button
                className="col-span-2 text-white bg-redeclic py-4 hover:scale-95 transition-all transform "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Let's get started!"}
              </button>
            </div>
          </form>
        </div>
        <ToastContainer
          position="bottom-right"
          hideProgressBar={true}
          theme="light"
          autoClose={2000}
        />
      </div>
      <Footer />
    </div>
  );
}

const options = [
  "Website design",
  "UX design",
  "User research",
  "Content creation",
  "Strategy & consulting",
  "Other",
];
