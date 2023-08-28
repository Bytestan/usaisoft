import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-primary-light text-white py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/USAiSOFTLogo.png"
            alt="logo"
            width={50}
            height={40}
          />
        </Link>

        <ul className="flex gap-8">
            <li>
                <Link className="border-b-2 border-transparent hover:border-primary pb-1" href="">Tools</Link>
            </li>
            <li>
                <Link className="border-b-2 border-transparent hover:border-primary pb-1" href="">Inspect Now</Link>
            </li>
            <li>
                <Link className="border-b-2 border-transparent hover:border-primary pb-1" href="">Solutions</Link>
            </li>
            <li>
                <Link className="border-b-2 border-transparent hover:border-primary pb-1" href="">Media</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
