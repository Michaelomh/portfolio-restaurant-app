import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 2,
    stroke: "white",
  },
};
const center = {
  closed: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  opened: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};
const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -2,
    stroke: "white",
  },
};

export default function Navigation() {
  const [isMenuShowing, setMenuShowing] = useState(false);
  const [mobileButtonOpen, setMobileButtonOpen] = useState(false);
  const router = useRouter();
  const pathName = router.pathname.split("/")[1];
  const pathParam = router.pathname.split("/")[2] || "0";

  const unitHeight = 4;
  const unitWidth = (unitHeight * 18) / 18;

  const lineProps = {
    stroke: "black",
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: mobileButtonOpen ? "opened" : "closed",
    transition: null,
  };

  return (
    <header className="w-full flex justify-center items-center bg-white h-14 ">
      <div className="flex container justify-between items-center px-8">
        <div className="w-2/5 hover:cursor-pointer">
          <Link href="/" passHref>
            <Image width="210px" height="20px" alt="Company logo" src="/images/logo.svg" />
          </Link>
        </div>
        <div className="w-3/5 max-w-[500px]">
          <nav className=" justify-between hidden md:flex">
            <div
              className={
                pathName.includes("location")
                  ? "navigation__anchor--active navigation__anchor z-20"
                  : "navigation__anchor z-20"
              }
              onMouseEnter={() => setMenuShowing(true)}
              onMouseLeave={() => setMenuShowing(false)}
            >
              Menus
              {isMenuShowing && (
                <div className="bg-white shadow-lg absolute border-2 flex flex-col p-4 px-2 top-10">
                  <Link href="/location/1">
                    <a
                      className={
                        pathParam.includes("1")
                          ? "navigation__anchor--active navigation__anchor px-10 py-4"
                          : "navigation__anchor px-10 py-4"
                      }
                    >
                      Location 1
                    </a>
                  </Link>
                  <Link href="/location/2">
                    <a
                      className={
                        pathParam.includes("2")
                          ? "navigation__anchor--active navigation__anchor px-10 py-4"
                          : "navigation__anchor px-10 py-4"
                      }
                    >
                      Location 2
                    </a>
                  </Link>
                  <Link href="/location/3">
                    <a
                      className={
                        pathParam.includes("3")
                          ? "navigation__anchor--active navigation__anchor px-10 py-4"
                          : "navigation__anchor px-10 py-4"
                      }
                    >
                      Location 3
                    </a>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/taps">
              <a
                className={
                  pathName.includes("taps") ? "navigation__anchor--active navigation__anchor" : "navigation__anchor"
                }
              >
                Taps
              </a>
            </Link>
            <Link href="/gift-cards">
              <a
                className={
                  pathName.includes("gift-cards")
                    ? "navigation__anchor--active navigation__anchor"
                    : "navigation__anchor"
                }
              >
                Gift Cards
              </a>
            </Link>
            <Link href="/careers">
              <a
                className={
                  pathName.includes("careers") ? "navigation__anchor--active navigation__anchor" : "navigation__anchor"
                }
              >
                Careers
              </a>
            </Link>
            <Link href="/contact-us">
              <a
                className={
                  pathName.includes("contact-us")
                    ? "navigation__anchor--active navigation__anchor"
                    : "navigation__anchor"
                }
              >
                Contact us
              </a>
            </Link>
          </nav>

          <div className="text-right md:hidden">
            <button className="z-20 absolute top-4 right-8" onClick={() => setMobileButtonOpen(!mobileButtonOpen)}>
              <motion.svg
                viewBox={`0 0 ${unitWidth} ${unitHeight}`}
                overflow="visible"
                preserveAspectRatio="none"
                width={18}
                height={18}
              >
                <motion.line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
                <motion.line x1="0" x2={unitWidth} y1="2" y2="2" variants={center} {...lineProps} />
                <motion.line x1="0" x2={unitWidth} y1="4" y2="4" variants={bottom} {...lineProps} />
              </motion.svg>
            </button>
            {mobileButtonOpen && (
              <nav className="z-0 absolute bg-orange-700 w-[100vw] h-[100vh] top-0 left-0">
                <div className="flex flex-col items-center justify-center h-full">
                  <div
                    className={
                      pathName.includes("location")
                        ? "navigation__mobile__anchor--active navigation__mobile__anchor z-20"
                        : "navigation__mobile__anchor z-20"
                    }
                    onClick={() => setMenuShowing(!isMenuShowing)}
                  >
                    Menus
                    {isMenuShowing && (
                      <div className="bg-black shadow-lg absolute border-2 flex flex-col p-4 px-2 left-[25%]">
                        <Link href="/location/1">
                          <a
                            className={
                              pathParam.includes("1")
                                ? "navigation__mobile__anchor--active navigation__mobile__anchor px-5 py-2"
                                : "navigation__mobile__anchor px-5 py-2 text-xl"
                            }
                          >
                            Location 1
                          </a>
                        </Link>
                        <Link href="/location/2">
                          <a
                            className={
                              pathParam.includes("2")
                                ? "navigation__mobile__anchor--active navigation__mobile__anchor px-5 py-2"
                                : "navigation__mobile__anchor px-5 py-2 text-xl"
                            }
                          >
                            Location 2
                          </a>
                        </Link>
                        <Link href="/location/3">
                          <a
                            className={
                              pathParam.includes("3")
                                ? "navigation__mobile__anchor--active navigation__mobile__anchor px-5 py-2"
                                : "navigation__mobile__anchor px-5 py-2 text-xl"
                            }
                          >
                            Location 3
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/taps">
                    <a
                      className={
                        pathName.includes("taps")
                          ? "navigation__mobile__anchor--active navigation__mobile__anchor"
                          : "navigation__mobile__anchor"
                      }
                    >
                      Taps
                    </a>
                  </Link>
                  <Link href="/gift-cards">
                    <a
                      className={
                        pathName.includes("gift-cards")
                          ? "navigation__mobile__anchor--active navigation__mobile__anchor"
                          : "navigation__mobile__anchor"
                      }
                    >
                      Gift Cards
                    </a>
                  </Link>
                  <Link href="/careers">
                    <a
                      className={
                        pathName.includes("careers")
                          ? "navigation__mobile__anchor--active navigation__mobile__anchor"
                          : "navigation__mobile__anchor"
                      }
                    >
                      Careers
                    </a>
                  </Link>
                  <Link href="/contact-us">
                    <a
                      className={
                        pathName.includes("contact-us")
                          ? "navigation__mobile__anchor--active navigation__mobile__anchor"
                          : "navigation__mobile__anchor"
                      }
                    >
                      Contact us
                    </a>
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
