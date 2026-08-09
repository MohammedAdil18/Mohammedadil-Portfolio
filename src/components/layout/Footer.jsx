import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { personalInfo } from "../../data/portfolio";

function Footer() {
  return (
    <footer
      className="
        border-t
        border-[#E5D6C5]
        bg-[#F8F4EC]
        py-12
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          text-center
        "
      >

        {/* Name */}

        <h2
          className="
            text-3xl
            font-black
            text-[#4F3B2D]
          "
        >
          {personalInfo.name}
        </h2>


        {/* Role */}

        <p
          className="
            mt-3
            text-[#7B6856]
          "
        >
          {personalInfo.role}
        </p>



        {/* Social Icons */}

        <div
          className="
            mt-8
            flex
            justify-center
            gap-5
          "
        >

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-[#8B6B4A]
              shadow-md
              transition-all
              duration-300
              hover:bg-[#8B6B4A]
              hover:text-white
            "
          >
            <FaGithub />
          </a>


          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-[#8B6B4A]
              shadow-md
              transition-all
              duration-300
              hover:bg-[#8B6B4A]
              hover:text-white
            "
          >
            <FaLinkedin />
          </a>


          <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
  target="_blank"
  rel="noreferrer"
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-white
    text-xl
    text-[#8B6B4A]
    shadow-md
    transition-all
    duration-300
    hover:bg-[#8B6B4A]
    hover:text-white
  "
>
  <FaEnvelope />
</a>
        </div>



        {/* Copyright */}

        <p
          className="
            mt-8
            text-sm
            text-[#8B7868]
          "
        >
          © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </p>


      </div>

    </footer>
  );
}

export default Footer;