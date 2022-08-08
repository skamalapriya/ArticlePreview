import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const newLocal = "lg:w-1/2 lg:h-auto lg:rounded-tl-md lg:rounded-bl-md";
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Article Preview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto my-auto lg:w-1/2 lg:flex lg:flex-row">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/image-product-desktop.jpg"
            alt=""
          />
          <img
            className="rounded-tl-md h-100 w-100 rounded-tr-md lg:rounded-tr-none lg:rounded-tl-md lg:rounded-bl-md"
            src="/images/image-product-mobile.jpg"
            alt=""
          />
        </picture>
        <div className="px-4 pb-2 bg-white rounded-bl-md rounded-br-md xl:px-6 xl:pt-5 xl:leading-loose lg:px-4 lg:pb-none lg:w-1/2 lg:h-auto lg:rounded-bl-none lg:rounded-tr-md">
          <h1 className="font-[Monospace] tracking-[.4em] font-semibold subpixel-antialiased text-sm text-gray-500 pt-5">
            PERFUME
          </h1>
          <p className="font-serif font-bold leading-7 text-3xl text-left text-black-500 pt-3 xl:leading-9 xl:pt-4 xl:text-4xl">
            Gabrielle Essence Eau De Parfum
          </p>
          <p className="font-[Sans-serif] subpixel-antialiased text-left tracking-normal font-medium text-sm xl:pt-5 xl:text-left xl:text-md lg:text-left lg:leading-normal lg:text-sm text-gray-500 pt-3">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row basis-1/2 text-left items-center w-[17rem] justify-between pt-3 lg:pt-4 xl:pt-6">
            <h1 className="font-fraunces text-bold text-green-800 text-3xl">
              $149.99
            </h1>
            <p className="font-[Sans-serif] subpixel-antialiased -ml-10 pr-20 font-medium line-through text-sm text-gray-500">
              $169.99
            </p>
          </div>
          <div className="mx-auto btn flex flex-row justify-center bg-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mt-1 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
