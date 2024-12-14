import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/2048", // 你想要的访问路径
        destination: "/2048.html", // 指向public目录下的文件
      },
      {
        source: "/2048-baseball", // 你想要的访问路径
        destination: "/2048-baseball.html", // 指向public目录下的文件
      },
      {
        source: "/2048-cricket", // 你想要的访问路径
        destination: "/2048-cricket.html", // 指向public目录下的文件
      },
      {
        source: "/2048-cupcakes", // 你想要的访问路径
        destination: "/2048-cupcakes.html", // 指向public目录下的文件
      },
      {
        source: "/champion-island", // 你想要的访问路径
        destination: "/champion-island.html", // 指向public目录下的文件
      },
      {
        source: "/cricket-games", // 你想要的访问路径
        destination: "/cricket-games.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-baseball", // 你想要的访问路径
        destination: "/doodle-baseball.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-basketball", // 你想要的访问路径
        destination: "/doodle-basketball.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-bubble-tea", // 你想要的访问路径
        destination: "/doodle-bubble-tea.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-football", // 你想要的访问路径
        destination: "/doodle-football.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-garden-gnomes", // 你想要的访问路径
        destination: "/doodle-garden-gnomes.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-halloween", // 你想要的访问路径
        destination: "/doodle-halloween.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-jump", // 你想要的访问路径
        destination: "/doodle-jump.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-pacman", // 你想要的访问路径
        destination: "/doodle-pacman.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-snake", // 你想要的访问路径
        destination: "/doodle-snake.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-soccer", // 你想要的访问路径
        destination: "/doodle-soccer.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-solitaire", // 你想要的访问路径
        destination: "/doodle-solitaire.html", // 指向public目录下的文件
      },
      {
        source: "/google-doodle-games", // 你想要的访问路径
        destination: "/google-doodle-games.html", // 指向public目录下的文件
      },
      {
        source: "/doodle-cricket-game", // 你想要的访问路径
        destination: "/doodle-cricket-game.html", // 指向public目录下的文件
      },
      // {
      //   source: '/doodle-cricket/', // 你想要的访问路径
      //   destination: '/doodle-cricket.html', // 指向public目录下的文件
      // },
      // 文件资源重定向 一定要放在最后 否则会出现 404 错误

      {
        source: "/2048/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/2048-baseball/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/2048-cricket/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/2048-cupcakes/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/champion-island/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-baseball/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-basketball/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-bubble-tea/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-football/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-garden-gnomes/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      {
        source: "/doodle-halloween/:path*", // 原始路径模式
        destination: "/:path*", // 重定向到实际文件位置
      },
      // {
      //   source: "/doodle-jump/:path*", // 原始路径模式
      //   destination: "/:path*", // 重定向到实际文件位置
      // },
      {
        source: "/doodle-pacman/:path*",
        destination: "/:path*",
      },
      {
        source: "/doodle-snake/:path*",
        destination: "/:path*",
      },
      {
        source: "/doodle-soccer/:path*",
        destination: "/:path*",
      },
      {
        source: "/doodle-solitaire/:path*",
        destination: "/:path*",
      },
      {
        source: "/google-doodle-games/:path*",
        destination: "/:path*",
      },
      // {
      //   source: '/doodle-cricket/:path*',
      //   destination: '/:path*',
      // },
    ];
  },
};

export default nextConfig;
