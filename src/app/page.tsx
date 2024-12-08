export default function Home() {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-blue-500 focus:outline-none"
              href="/google-doodle-games"
              aria-current="page"
            >
              doodle games
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col  justify-center w-full h-full">
        <p className=" text-center">waiting for content</p>
      </main>
    </div>
  );
}
