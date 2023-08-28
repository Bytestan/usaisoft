import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      {/* Hero Header Section */}
      <header className="bg-gradient-to-r from-primary/50 to-primary-light/50 text-white h-[80vh] relative">
        <div className="bg-video">
          <video
            className="bg-video__content"
            autoPlay
            muted
            loop
            preload="preload"
          >
            <source src="/videos/home-page-video.mp4" type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>

        <div className="container relative mx-auto h-[100%]">
          <div className="absolute top-1/2 -translate-y-1/2">
            <h2 className="text-xl mb-2 font-bold">
              Web-based, mobile inspection app. No download required
            </h2>
            <h1 className="text-6xl font-bold mb-2">
              Vehicle Condition <br /> Reports Reimagined
            </h1>
            <p className="hero_subhead">
              Start using DeepDetect<sup>TM</sup>: the world’s most trusted{" "}
              <br />
              inspection technology
            </p>

            <Button className="mt-6">Click</Button>
          </div>
        </div>
      </header>

      {/* Trade In */}
      <section className="text-white py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-16">
            <div className="bg-gradient-to-tr from-primary/90 to-primary-light/90 shadow-lg p-4 rounded">
              <h6 className="text-2xl">Seller</h6>

              <p className="text-base mb-6">Selling your personal car?</p>
              <p className="mb-10">
                ‍Scan your car with a Ravin link, generate a condition report,
                and&nbsp;receive an offer.
              </p>

              <a href="/">Send me link</a>
            </div>
            <div className="bg-gradient-to-tr from-secondary/90 to-secondary-light/90 shadow-lg p-4 rounded">
              <h6 className="text-2xl">Buyer</h6>

              <p className="text-base mb-6">Selling your personal car?</p>
              <p className="mb-10">
                ‍Scan your car with a Ravin link, generate a condition report,
                and&nbsp;receive an offer.
              </p>

              <a href="/">Send me link</a>
            </div>
            <div className="bg-gradient-to-tr from-tertiary/90 to-tertiary-light/100 shadow-lg p-4 rounded">
              <h6 className="text-2xl">Bussiness</h6>

              <p className="text-base mb-6">Selling your personal car?</p>
              <p className="mb-10">
                ‍Scan your car with a Ravin link, generate a condition report,
                and&nbsp;receive an offer.
              </p>

              <a href="/">Send me link</a>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Section */}
      <section className="bg-gradient-to-r from-primary/50 to-primary-light/50 text-white h-[80vh] relative">
        <div className="bg-video">
          <video
            className="bg-video__content"
            autoPlay
            muted
            loop
            preload="preload"
          >
            <source src="/videos/inspection-section-video.mp4" type="video/mp4" />
            Your browser is not supported!
          </video>
        </div>

        <div className="container relative mx-auto h-[100%]">
          <div className="absolute top-1/2 -translate-y-1/2">
            <h2 className="text-xl mb-2 font-bold">
              Web-based, mobile inspection app. No download required
            </h2>
            <h1 className="text-6xl font-bold mb-2">
              Vehicle Condition <br /> Reports Reimagined
            </h1>
            <p className="hero_subhead">
              Start using DeepDetect<sup>TM</sup>: the world’s most trusted{" "}
              <br />
              inspection technology
            </p>

            <Button className="mt-6">Click</Button>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto container">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-white px-4 py-1.5 text-sm leading-6 text-grey ring-1 ring-inset ring-primary/100">
              <span className="hidden md:inline">
                Over 2500 companies use our tools to better their business.
              </span>
              <a href="#" className="font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" /> Read
                our customer stories <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
