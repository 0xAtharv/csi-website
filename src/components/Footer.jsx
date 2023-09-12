import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#2E243C]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
          <div>
            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-2 ">
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm align-center justify-center font-semibold text-white uppercase dark:text-white">
                  Connect with us:
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <div className="flex items-center">
                      <img
                        src="../icons/github.png"
                        alt="1"
                        className="w-5 h-5"
                      />
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline p-2">
                        Github
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img
                        src="../icons/discord.png"
                        alt="1"
                        className="w-5 h-5"
                      />

                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline p-2">
                        Discord
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Socials
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <div className="flex items-center">
                      <img
                        src="../icons/instagram.png"
                        alt="1"
                        className="w-5 h-5"
                      />
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline p-2">
                        Instagram
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <img
                        src="../icons/facebook.png"
                        alt="1"
                        className="w-5 h-5"
                      />
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline p-2">
                        Facebook
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
