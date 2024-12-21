import React from "react";

function PriceCards() {
  return (
    <div className="mx-5 mt-11">
      <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 md:grid-cols-3">
        <div className="card border-base-content/20 border shadow-none">
          <div className="card-body gap-3 text-center">
            <div>
              <span className="text-base-content/90 text-xl font-medium ">
                Basic
              </span>
              <p className="text-sm truncate">A simple start for everyone</p>
            </div>
            <div className="text-primary flex justify-center gap-x-1">
              <span className="text-base-content/80 text-xl">$</span>
              <p
                data-toggle-count='{
            "target": "#toggle-price-count",
            "min": 3,
            "max": 29
          }'
                className="text-5xl font-semibold"
              >
                90
              </p>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  100 responses a month
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Unlimited forms & surveys
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Unlimited fields
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Basic form creation tools
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Up to 2 subdomains
                </span>
              </li>
            </ul>
            <button className="btn btn-outline btn-sm btn-primary mt-4">
              UPGRADE
            </button>
          </div>
        </div>
        <div className="card border-primary border shadow-none">
          <div className="relative">
            <span className="badge badge-soft badge-sm badge-primary absolute end-2 top-2">
              Popular
            </span>
          </div>
          <div className="card-body gap-3 text-center">
            <div>
              <span className="text-base-content/90 text-xl font-medium ">
                Standard
              </span>
              <p className="text-sm">For small to medium businesses</p>
            </div>
            <div className="text-primary flex justify-center gap-x-1">
              <span className="text-base-content/80 text-xl">$</span>
              <p
                data-toggle-count='{
            "target": "#toggle-price-count",
            "min": 15,
            "max": 159
          }'
                className="text-5xl font-semibold"
              >
                120
              </p>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Unlimited responses
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Unlimited forms & surveys
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Instagram profile page
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Google Docs integration
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Custom Landing page
                </span>
              </li>
            </ul>
            <button className="btn btn-sm btn-primary mt-4">UPGRADE</button>
          </div>
        </div>
        <div className="card border-base-content/20 border shadow-none">
          <div className="card-body gap-3 text-center">
            <div>
              <span className="text-base-content/90 text-xl font-medium">
                Enterprise
              </span>
              <p className="text-sm truncate">Solution for big organizations</p>
            </div>
            <div className="text-primary flex justify-center gap-x-1">
              <span className="text-base-content/80 text-xl">$</span>
              <p
                data-toggle-count='{
            "target": "#toggle-price-count",
            "min": 79,
            "max": 999
          }'
                className="text-5xl font-semibold"
              >
                180
              </p>
            </div>
            <ul className="text-sm space-y-3">
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  PayPal payments
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Logic Jumps
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  File upload with 5GB storage
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Custom domain support
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="bg-primary/20 text-primary flex items-center justify-center rounded-full p-1">
                  <span className="icon-[tabler--arrow-right] size-4 rtl:rotate-180"></span>
                </span>
                <span className="text-base-content/80 truncate">
                  Stripe integration
                </span>
              </li>
            </ul>
            <button className="btn btn-outline btn-sm btn-primary mt-4">
              UPGRADE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCards;
