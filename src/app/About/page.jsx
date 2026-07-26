//"use client"; 
import React from "react";
import { initFlowbite } from "flowbite";

export default function page() {
  const items = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      name: "Power tools",
      image: "/tes-1.jpg",
      buyer: "Verified Buyer",
      review:
        " Totally obsessed with this outfit! The fit is perfect, the fabric feels premiu , and Ive been getting compliments non-stop  It instantly lifts my confidence —   such a great find!",
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐⭐",
      name: "Hand tools",
      image: "/tes-2.jpg",
      buyer: "Verified Buyer",
      review:
        "Im amazed by how comfortable yet stylish this piece is. It pairs effortlessly with everything, and the quality really stands out. Definitely becoming my go-tofor everyday looks!",
    },
  ];

  const teams = [
    {
      id: 1,
      name: "Annette Black",
      title: "Founder/CEO",
      image: "/member-1.jpg",
    },
    {
      id: 2,
      name: "Jane Cooper",
      title: "Sales Director",
      image: "/member-2.jpg",
    },
    {
      id: 3,
      name: "Lisa Bonet",
      title: "Sales Director",
      image: "/member-3.jpg",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      title: "Manager",
      image: "/member-4.jpg",
    },
  ];

  return (
    <div className="">
      <h2 className="text-4xl mt-6 font-bold mb-4 text-center">About Us</h2>
      <p className="text-gray-600 text-center">
        Welcome to our company! We are a team of passionate professionals
        dedicated to providing the best services possible.
      </p>
      <div className="flex justify-center mt-6 ">
        <img
          src="/about-main.jpg"
          alt="About Us"
          className="w-full h-auto mt-6 "
        />
      </div>
      <div className="grid grid-cols-1 gap-6 flex justify-center mt-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-5xl font-semibold mb-4">
            Design, attention to detail & efficiency to delight the world
          </h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            From the moment it is conceived to the moment it is worn, every one
            of our garments follows this path. We could do it at a fast pace.
            However, at Mango, we choose to take care of all those who are
            walking this path with us.
          </p>
        </div>
      </div>

      <div className="bg-[#f7f7f7] shadow-md">
        <div className="max-w-[1320px] mx-auto p-10 grid grid-cols-1 gap-6 flex justify-center mt-6 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="accordion_image">
            <img src="/s-contact-2.jpg" alt="" className="rounded-[40px]" />
          </div>
          <div className="accordion_main">
            <h2 className="text-2xl font-bold">
              Offering Rare And Beautiful Items Worldwide
            </h2>
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className="rounded-base overflow-hidden shadow-xs"
            >
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body
                   rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading 
                   hover:bg-neutral-secondary-medium gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    data-accordion-icon=""
                    className="w-5 h-5 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-4 md:p-5">
                  <p className="mb-2 text-body">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-body">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-fg-brand hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body border border-x-0 border-b-default border-t-0 hover:text-heading hover:bg-neutral-secondary-medium gap-3"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    data-accordion-icon=""
                    className="w-5 h-5 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden border border-s-0 border-e-0 border-t-0 border-b-default"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-4 md:p-5">
                  <p className="mb-2 text-body">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-body">
                    Check out the{" "}
                    <a
                      href="https://flowbite.com/figma/"
                      className="text-fg-brand hover:underline"
                    >
                      Figma design system
                    </a>{" "}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body hover:text-heading hover:bg-neutral-secondary-medium gap-3"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    data-accordion-icon=""
                    className="w-5 h-5 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-4 md:p-5 border border-t-default border-b-0 border-x-0">
                  <p className="mb-2 text-body">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-body">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-body">
                    Learn more about these technologies:
                  </p>
                  <ul className="ps-5 text-body list-disc">
                    <li>
                      <a
                        href="https://flowbite.com/pro/"
                        className="text-fg-brand hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindui.com/"
                        rel="nofollow"
                        className="text-fg-brand hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="customer_says mt-10">
        <h2 className="text-center text-4xl font-bold">Products Left</h2>
        <p className="text-center text-gray mt-4">
          Our customers adore our products, and we constantly aim to delight
          them.
        </p>
        <div className="grid grid-cols-1 gap-6 flex justify-center mt-6 md:grid-cols-4 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-4xl">4.6K</h3>
            <h4 className="font-bold-[400] text-2xl">Products available</h4>
            <p className="text-center">
              We offer a wide selection of high quality products to meet every
              need
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-4xl">3.1K</h3>
            <h4 className="font-bold-[400] text-2xl">Products available</h4>
            <p className="text-center">
              We offer a wide selection of high quality products to meet every
              need
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-4xl">8.6K</h3>
            <h4 className="font-bold-[400] text-2xl">Products available</h4>
            <p className="text-center">
              We offer a wide selection of high quality products to meet every
              need
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold text-4xl">10K</h3>
            <h4 className="font-bold-[400] text-2xl">Products available</h4>
            <p className="text-center">
              We offer a wide selection of high quality products to meet every
              need
            </p>
          </div>
        </div>
      </div>

      <div className="customer_says mt-10">
        <h2 className="text-center text-4xl font-bold">Customer Say!</h2>
        <p className="text-center text-gray mt-4">
          Our customers adore our products, and we constantly aim to delight
          them.
        </p>
        <div className="max-w-[1320px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full sm:w-2/5 h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-yellow-500 text-lg mb-2">
                    {item.rating}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-green-600 font-medium mb-4">
                    {item.buyer}
                  </p>

                  <p className="text-gray-600 leading-7 italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.buyer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="customer_says mt-10">
        <h2 className="text-center text-4xl font-bold">Meet Our Teams</h2>
        <p className="text-center text-gray mt-4">
          Experts committed to excellence in every detail.
        </p>

        <div className="max-w-[1320px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {team.name}
                </h3>
                <p className="text-md font-semibold text-gray-900">{team.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
