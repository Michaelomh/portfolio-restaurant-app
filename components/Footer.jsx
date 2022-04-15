import Image from "next/image";
import logoFooter from "../assets/images/logo-footer.svg";
import logoInstagram from "../assets/images/ig-logo.svg";
import logoFacebook from "../assets/images/fb-logo.svg";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-black">
      <div className="flex flex-col container justify-between items-center py-8 sm:flex-row">
        <div>
          <Image width="250px" height="50px" src={logoFooter} />
        </div>
        <div className="flex flex-row items-center">
          <span className="text-white uppercase m-0 font-bold text-sm font-heading tracking-[4px]">
            stay in the loop
          </span>
          <div className="m-2">
            <Image width="24px" height="24px" src={logoInstagram} alt="link to Instagram" />
          </div>
          <div className="m-2">
            <Image width="24px" height="24px" src={logoFacebook} alt="link to Facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
}
