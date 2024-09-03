import Image from "next/image";
import picOne from "../assets/pageImages/restaurant.svg";
import picTwo from "../assets/dumplings.jpg";
import NavLink from "@/components/nav-link";

export default function Home() {
  return (
    <>
      <main className="page">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <Image className="header_img" src={picOne} alt="food" />
            </div>
            <div className="col-12 box py-4">
              <h1 className="text-center">Share your food recipe</h1>
              <h3 className="text-center my-4">
                Minimalistic design used..... under construnction
              </h3>
              <p className="text-center text-dark my-4 pb-4">
                Find and share everyday cooking inspiration on Allrecipes.
                Discover recipes, cooks, videos, and how-tos based on the food
                you love and the friends you follow.
              </p>
              <div className="row pb-4 px-4">
                <div className="col">
                  <NavLink style="btn btn-md mb-2 w-100" href="/meals">
                    Explore Meals
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink style="btn btn-md w-100" href="/community">
                    Join the Community
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
