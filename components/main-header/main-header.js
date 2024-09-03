import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import classes from "@/components/main-header/main-header.module.scss";
import NavLink from "../nav-link";

export default function MainHeader() {
  return (
    <>
      <div className="container pt-2">
        <div className="row">
          <header className="d-flex align-items-center justify-content-between mt-3">
            <Link className="logo text-decoration-none" href="/">
              <Image
                className={classes.logo}
                src={logo}
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-white w-100"> Share Recepie</span>
            </Link>
            <nav className="navbar navbar-expand-lg">
              <ul className="d-flex align-items-center justify-content-between mb-0">
                <li className={classes.li}>
                  <NavLink
                    style={classes.a}
                    className="text-decoration-none btn-md"
                    href="/meals"
                  >
                    meals
                  </NavLink>
                </li>
                <li className={classes.li}>
                  <NavLink
                    style={classes.a}
                    className="text-decoration-none btn-md"
                    href="/community"
                  >
                    Foodie Community
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}
