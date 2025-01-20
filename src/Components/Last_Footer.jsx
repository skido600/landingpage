import { FaXTwitter } from "react-icons/fa6";
function Last_Footer() {
  return (
    <>
      <footer className="bg-[#FDF8ECBD] px-4 text-center py-4 mt-4">
        <p className="font-inter">
          Copyright 2024 All Rights Reserved Company Name.
        </p>
        <div className="mt-4">
          <p>
            Designed by Amena @ Musais <span className="animate-pulse">👨‍🍳</span>
          </p>
          <div>
            <div className="flex items-center mt-4 justify-center">
              <a
                href="https://x.com/AmenaiSabuwala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <p>connect with designer on </p>
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Last_Footer;
