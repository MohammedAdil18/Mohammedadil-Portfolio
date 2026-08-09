import { useState } from "react";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionTitle
          title="Contact Me"
          subtitle="Have a project or opportunity? I'd love to hear from you."
        />

        <div
          className="
            mt-16
            grid
            gap-10
            lg:grid-cols-2
            items-start
          "
        >
          {/* CONTACT INFO CARD */}

          <div
            className="
              rounded-[28px]
              border
              border-[#E5D6C5]
              bg-white/60
              p-10
              shadow-xl
              backdrop-blur-xl
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-[#4F3B2D]
              "
            >
              Let's Connect
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-[#6D5A49]
              "
            >
              Feel free to reach out for projects, collaborations, or frontend
              opportunities.
            </p>

            <div className="mt-10 space-y-5">
              {/* Email Card */}

              <div
                className="
      flex
      items-center
      gap-5
      rounded-2xl
border
border-white/40
bg-white/20
p-5
backdrop-blur-2xl
shadow-[0_8px_30px_rgba(176,137,104,0.12)]
hover:bg-white/30
transition-all
duration-300
    "
              >
                <div
                  className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#8B6B4A]
        text-white
      "
                >
                  <FaEnvelope />
                </div>

                <span className="text-[#5A4030]">
                  mohammedadil1809@gmail.com
                </span>
              </div>

              {/* Phone Card */}

              <div
                className="
      flex
      items-center
      gap-5
      rounded-2xl
border
border-white/40
bg-white/20
p-5
backdrop-blur-2xl
shadow-[0_8px_30px_rgba(176,137,104,0.12)]
hover:bg-white/30
transition-all
duration-300
    "
              >
                <div
                  className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#8B6B4A]
        text-white
      "
                >
                  <FaPhone />
                </div>

                <span className="text-[#5A4030]">+91 6300690083</span>
              </div>

              {/* Location Card */}

              <div
                className="
      flex
      items-center
      gap-5
      rounded-2xl
border
border-white/40
bg-white/20
p-5
backdrop-blur-2xl
shadow-[0_8px_30px_rgba(176,137,104,0.12)]
hover:bg-white/30
transition-all
duration-300
    "
              >
                <div
                  className="
        flex
        h-14
        w-14
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#8B6B4A]
        text-white
      "
                >
                  <FaMapMarkerAlt />
                </div>

                <span className="text-[#5A4030]">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* FORM CARD */}

          <form
            onSubmit={onSubmit}
            className="
              rounded-[28px]
              border
              border-[#E5D6C5]
              bg-white/60
              p-10
              shadow-xl
              backdrop-blur-xl
              space-y-6
            "
          >
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
                px-5
                py-4
                text-[#4F3B2D]
                outline-none
                focus:border-[#8B6B4A]
              "
            />

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
                px-5
                py-4
                text-[#4F3B2D]
                outline-none
                focus:border-[#8B6B4A]
              "
            />

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
                px-5
                py-4
                text-[#4F3B2D]
                outline-none
                focus:border-[#8B6B4A]
              "
            />

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
                px-5
                py-4
                text-[#4F3B2D]
                outline-none
                focus:border-[#8B6B4A]
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-[#8B6B4A]
                py-4
                font-semibold
                text-white
                transition
                hover:bg-[#6D4C41]
              "
            >
              Send Message
            </button>

            {result && (
              <p className="text-center font-medium text-[#8B6B4A]">{result}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
