import { useState } from "react";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <Container>

        {/* SECTION TITLE */}
        <SectionTitle
          title="Contact Me"
          subtitle="Let's build something amazing together."
        />

        {/* MAIN GRID */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:gap-8
            lg:grid-cols-2
            lg:gap-10
            xl:gap-12
            items-stretch
          "
        >

          {/* ================= CONTACT INFO ================= */}

          <div
            className="
              rounded-[24px]
              sm:rounded-[28px]
              border
              border-[#E5D6C5]
              bg-white/60
              p-5
              sm:p-7
              lg:p-8
              xl:p-10
              shadow-xl
              backdrop-blur-xl
            "
          >
            <h3
              className="
                text-2xl
                sm:text-3xl
                lg:text-3xl
                font-bold
                text-[#4F3B2D]
              "
            >
              Let's Connect
            </h3>

            <p
              className="
                mt-3
                sm:mt-5
                text-sm
                sm:text-base
                leading-7
                sm:leading-8
                text-[#6D5A49]
              "
            >
              Feel free to reach out for projects, collaborations,
              or frontend opportunities.
            </p>

            {/* CONTACT DETAILS */}
            <div
              className="
                mt-7
                sm:mt-10
                space-y-4
                sm:space-y-5
              "
            >

              {/* EMAIL */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-5
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/20
                  p-4
                  sm:p-5
                  backdrop-blur-2xl
                  shadow-[0_8px_30px_rgba(176,137,104,0.12)]
                  hover:bg-white/30
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope
                  className="
                    shrink-0
                    text-lg
                    sm:text-xl
                    text-[#5A4030]
                  "
                />

                <span
                  className="
                    min-w-0
                    break-all
                    text-sm
                    sm:text-base
                    text-[#5A4030]
                  "
                >
                  mohammedadil1809@gmail.com
                </span>
              </div>

              {/* PHONE */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-5
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/20
                  p-4
                  sm:p-5
                  backdrop-blur-2xl
                  shadow-[0_8px_30px_rgba(176,137,104,0.12)]
                  hover:bg-white/30
                  transition-all
                  duration-300
                "
              >
                <FaPhone
                  className="
                    shrink-0
                    text-lg
                    sm:text-xl
                    text-[#5A4030]
                  "
                />

                <span
                  className="
                    text-sm
                    sm:text-base
                    text-[#5A4030]
                  "
                >
                  +91 6300690083
                </span>
              </div>

              {/* LOCATION */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-5
                  rounded-2xl
                  border
                  border-white/40
                  bg-white/20
                  p-4
                  sm:p-5
                  backdrop-blur-2xl
                  shadow-[0_8px_30px_rgba(176,137,104,0.12)]
                  hover:bg-white/30
                  transition-all
                  duration-300
                "
              >
                <FaMapMarkerAlt
                  className="
                    shrink-0
                    text-lg
                    sm:text-xl
                    text-[#5A4030]
                  "
                />

                <span
                  className="
                    text-sm
                    sm:text-base
                    text-[#5A4030]
                  "
                >
                  Hyderabad, India
                </span>
              </div>

            </div>
          </div>

          {/* ================= FORM ================= */}

          <form
            onSubmit={onSubmit}
            className="
              rounded-[24px]
              sm:rounded-[28px]
              border
              border-[#E5D6C5]
              bg-white/60
              p-5
              sm:p-7
              lg:p-8
              xl:p-10
              shadow-xl
              backdrop-blur-xl
              space-y-4
              sm:space-y-5
              lg:space-y-6
            "
          >

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                rounded-xl
                border
                border-[#DCCAB7]
                bg-white
                px-4
                sm:px-5
                py-3
                sm:py-4
                text-sm
                sm:text-base
                text-[#4F3B2D]
                outline-none
                transition
                focus:border-[#8B6B4A]
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                rounded-xl
                border
                border-[#DCCAB7]
                bg-white
                px-4
                sm:px-5
                py-3
                sm:py-4
                text-sm
                sm:text-base
                text-[#4F3B2D]
                outline-none
                transition
                focus:border-[#8B6B4A]
              "
            />

            {/* SUBJECT */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                rounded-xl
                border
                border-[#DCCAB7]
                bg-white
                px-4
                sm:px-5
                py-3
                sm:py-4
                text-sm
                sm:text-base
                text-[#4F3B2D]
                outline-none
                transition
                focus:border-[#8B6B4A]
              "
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-[#DCCAB7]
                bg-white
                px-4
                sm:px-5
                py-3
                sm:py-4
                text-sm
                sm:text-base
                text-[#4F3B2D]
                outline-none
                transition
                focus:border-[#8B6B4A]
              "
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-[#8B6B4A]
                py-3
                sm:py-4
                text-sm
                sm:text-base
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-[#6D4C41]
                active:scale-[0.98]
              "
            >
              Send Message
            </button>

            {/* RESULT */}
            {result && (
              <p
                className="
                  text-center
                  text-sm
                  sm:text-base
                  font-medium
                  text-[#8B6B4A]
                "
              >
                {result}
              </p>
            )}

          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;