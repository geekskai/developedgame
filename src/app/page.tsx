import React from "react";
import Image from "next/image";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

// import "./style.css";

const GAME_LIST = [
  {
    title: "Google Doodle Baseball Game (2019)",
    image: "/doodle-baseball.png",
    description:
      "Released on July 4, 2019 for Independence Day, this baseball game had you bat as classic American foods like hot dogs against animated peanut pitchers.",
    link: "/doodle-baseball",
  },
  {
    title: "Doodle Jump Online",
    image: "/doodle-jump.jpeg",
    description:
      'Doodle Jump is an incredibly popular and addictive mobile game first released in 2009. The core gameplay is very simple - you control a cute creature called "The Doodler" who constantly jumps upwards. Your goal is to guide The Doodler up an endless series of platforms without falling off the screen.',
    link: "/doodle-jump",
  },
  {
    title: "Google PAC-MAN (2010)",
    image: "/pac-man.jpeg",
    description:
      "Released on May 21, 2010 to celebrate the 30th anniversary of the classic arcade game PAC-MAN. This was the first ever playable Google Doodle game. Users could play the full game on the Google homepage.",
    link: "/doodle-pacman",
  },
  {
    title: "Google Doodle Solitaire",
    image: "/doodle-solitaire/assets/solitaire.jpeg",
    description:
      "Google Doodle Solitaire was released on January 29, 2020 to celebrate the 30th anniversary of the classic card game. The game featured a simple version of the classic Klondike Solitaire game.",
    link: "/doodle-solitaire",
  },
  {
    title: "Google Doodle Snake",
    image: "/doodle-snake.png",
    description:
      "Google Doodle Snake is a simple version of the classic game Snake. You can choose different field style and different items to collect.",
    link: "/doodle-snake",
  },
  {
    title: "Google Football (2012)",
    image: "/doodle-football.png",
    description:
      "This game was released on 10 August, 2012 before the 2012 Summer Olympics. The game was a simple football game in a Doodle style.",
    link: "/doodle-football",
  },
  {
    title: "Google Soccer (2012)",
    image: "/doodle-soccer.png",
    description:
      "This game was also released on 10 August, 2012 before the 2012 Summer Olympics. The game was a simple soccer game in a funny Doodle style.",
    link: "/doodle-soccer",
  },
  {
    title: "Google Basketball (2012)",
    image: "/doodle-basketball.png",
    description:
      "This game was released on Aug 08, 2012 before the 2021 Summer Olympics. The game was a simple basketball game where you could shoot hoops with a basketball.",
    link: "/doodle-basketball",
  },
  {
    title: "Google Doodle Halloween Game (2016)",
    image: "/doodle-halloween.png",
    description:
      "A spooky game released on October 31, 2016 where you play as a magic cat named Momo who has to defeat ghosts by drawing symbols. It had multiple levels and a sequel was released in 2020.",
    link: "/doodle-halloween",
  },
  {
    title: "Cricket Game (2017)",
    image: "/banner.png",
    description:
      "Released for the 2017 ICC Champions Trophy, this game let you play a simple version of cricket as an animated cricket character.",
    link: "/cricket-games/",
  },
  {
    title: "Garden Gnomes (2018)",
    image: "/doodle-garden-gnomes/assets/splash.webp",
    description:
      "A fun game where you launched garden gnomes from a catapult to see how far they could fly, released on Garden Day in Germany in 2018.",
    link: "/doodle-garden-gnomes",
  },
  {
    title: "Doodle Champion Island Games (2021)",
    image: "/doodle-champion-island-games.jpeg",
    description:
      "An expansive, anime-inspired sports game released around the 2020 Tokyo Olympics with multiple mini-games and quests. One of Google's most ambitious Doodle games to date.",
    link: "/champion-island",
  },
  {
    title: "Bubble Tea Game (2023)",
    image: "/doodle-bubble-tea/assets/cta.png",
    description:
      "A short game released in 2023 where you run a bubble tea shop and fulfill orders as a Formosan mountain dog.",
    link: "/doodle-bubble-tea",
  },
  {
    title: "2048 Game",
    image: "/2048/style/img/bg.png",
    description:
      "2048 is a popular web-based puzzle game where the objective is to combine like tiles to reach the 2048 tile. The game is typically played on a 4x4 grid, with tiles representing powers of 2.",
    link: "/2048",
  },
  {
    title: "2048 Cricket Players",
    image: "/2048-cricket/style/img/bg.jpeg",
    description:
      "2048 Cricket Players is a spin-off of the popular 2048 puzzle game, where the objective is to combine like tiles to reach the 2048 tile. In this version, the tiles represent famous cricket players from around the world.",
    link: "/2048-cricket",
  },
  {
    title: "2048 Baseball",
    image: "/2048-baseball/style/img/bg.jpg",
    description:
      "2048 Baseball Teams is a spin-off of the popular 2048 puzzle game, where the objective is to combine like tiles to reach the 2048 tile. In this version, the tiles represent famous baseball teams from around the world.",
    link: "/2048-baseball",
  },
  {
    title: "2048 Cupcakes",
    image: "/2048-cupcakes/style/img/bg.jpg",
    description:
      "2048 Cupcakes is a popular web-based puzzle game where the objective is to combine like tiles to reach the 2048 tile. The game is typically played on a 4x4 grid, with tiles representing cupcakes of different flavors.",
    link: "/2048-cupcakes",
  },
];

const MyPlugin = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg min-h-[600px] p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold font-title text-neutral-950">
          unblocked games​ and google doodle games
        </h1>
        <a
          href="/google-doodle-games"
          title="Google Doodle Games"
          target="_blank"
          className="bg-primary-500 text-primary-50 py-2 px-4 rounded-md"
        >
          Join Now
        </a>
      </header>
      <main>
        <section className="grid grid-cols-3 gap-6">
          {GAME_LIST.map((game, index) => (
            <article key={index} className="bg-neutral-100 p-4 rounded-md">
              <Image
                src={game.image}
                alt={game.title}
                width={400}
                height={200}
              />
              <h2 className="text-xl font-semibold text-neutral-950 mb-2">
                {game.title}
              </h2>
              <p className="text-neutral-700 mb-4">{game.description}</p>

              <p className="w-full flex justify-end">
                <a
                  href={game.link}
                  className="bg-primary-500 text-primary-50 py-2 px-4 rounded-md"
                >
                  Play Now
                </a>
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      {/* <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
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
      </header> */}
      <main className="flex flex-col  justify-center w-full h-full">
        <MyPlugin />
      </main>
    </div>
  );
}
