if (!self.define) {
  let e,
    a = {}
  const i = (i, o) => (
    (i = new URL(i + '.js', o).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = i), (e.onload = a), document.head.appendChild(e)
        } else (e = i), importScripts(i), a()
      }).then(() => {
        let e = a[i]
        if (!e) throw new Error(`Module ${i} didn’t register its module`)
        return e
      })
  )
  self.define = (o, d) => {
    const s = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (a[s]) return
    let n = {}
    const c = (e) => i(e, s),
      l = { module: { uri: s }, exports: n, require: c }
    a[s] = Promise.all(o.map((e) => l[e] || c(e))).then((e) => (d(...e), n))
  }
}
define(['./workbox-37fde244'], function (e) {
  'use strict'
  e.setCacheNameDetails({ prefix: 'doodlecricket' }),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '2048-cupcakes.html', revision: 'acf834054ccb9b39faa0e531e1655024' },
        {
          url: '2048-cupcakes/js/animframe_polyfill.js',
          revision: '662dce419e5221e1513bff83105e3b51',
        },
        { url: '2048-cupcakes/js/application.js', revision: '761f76a3fb1219922d05cda85a734a0c' },
        { url: '2048-cupcakes/js/bind_polyfill.js', revision: 'dc3ec09e5eccbaa071a6d71a15d3fc52' },
        {
          url: '2048-cupcakes/js/classlist_polyfill.js',
          revision: 'e565744097576fa604948c29012c7a02',
        },
        { url: '2048-cupcakes/js/game_manager.js', revision: '3a7914ebfe799fee04a943f181027912' },
        { url: '2048-cupcakes/js/grid.js', revision: '29c4bd95cc49bc1b0acde5543748e9c2' },
        { url: '2048-cupcakes/js/html_actuator.js', revision: '411be7150b2f421d2c0def0a8169dfe1' },
        {
          url: '2048-cupcakes/js/keyboard_input_manager.js',
          revision: '6d1bd5b7b5f6b43f38b276f3563d126d',
        },
        { url: '2048-cupcakes/js/l10n.js', revision: '79a7f1c421f70fed317d9130c44dfe38' },
        {
          url: '2048-cupcakes/js/local_storage_manager.js',
          revision: '3cb4ea74bf42e497616354537a5130a2',
        },
        { url: '2048-cupcakes/js/localization.js', revision: '2c1e4fe2f695226ef95c8fd70ca9f902' },
        { url: '2048-cupcakes/js/tile.js', revision: '581495efb73cfea279196387d77c83e3' },
        {
          url: '2048-cupcakes/meta/apple-touch-icon.png',
          revision: '4208c2c582716595c67b9faf24de1bef',
        },
        {
          url: '2048-cupcakes/style/fonts/clear-sans.css',
          revision: 'feea68df19f07727a3cb09e9971a09e9',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Bold-webfont.eot',
          revision: '92a9c29a5c673efec034d61617369a37',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Bold-webfont.svg',
          revision: '637ed43d88cc8d27eb7390d16e8413ca',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Bold-webfont.woff',
          revision: '8e55742896553de18fbed1a44baf1d79',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Light-webfont.eot',
          revision: '43f90ca76c3585fc286161208be42ca4',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Light-webfont.svg',
          revision: 'f6a8d8d7f680d9eef1f499a8ebcedd87',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Light-webfont.woff',
          revision: '930193fff909a5f270126f7b1c885268',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Regular-webfont.eot',
          revision: '207557cd41a54883b13627dcfd0240aa',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Regular-webfont.svg',
          revision: '067209713c5d920e1b705e13bd290559',
        },
        {
          url: '2048-cupcakes/style/fonts/ClearSans-Regular-webfont.woff',
          revision: '051b44622bff6697c5591a681f33eb6a',
        },
        { url: '2048-cupcakes/style/helpers.scss', revision: 'cd4ebbbcb22bfa59ba945de8b67f262f' },
        { url: '2048-cupcakes/style/img/1024.jpg', revision: '7eec6c84bed21fe48d0b891b5c8b79bc' },
        { url: '2048-cupcakes/style/img/128.jpg', revision: '068269c13fc8bb95aed3b9ecfd8f1b79' },
        { url: '2048-cupcakes/style/img/16.jpg', revision: '802492928c8a7dc74f3e2ac9e3a57aef' },
        { url: '2048-cupcakes/style/img/2.jpg', revision: '33d293a50457d8982691e332a9fa2ee6' },
        { url: '2048-cupcakes/style/img/2048.jpg', revision: 'efe6bcb487b4eb967f4b898f4abae183' },
        { url: '2048-cupcakes/style/img/256.jpg', revision: 'c45f4000d2af80ef5d1afe593e6e5f66' },
        { url: '2048-cupcakes/style/img/32.jpg', revision: 'a50eed5d8b81ed4edaaf16ef6124d801' },
        { url: '2048-cupcakes/style/img/4.jpg', revision: '0e1a66c23307620a429b7b3746c0d5fa' },
        { url: '2048-cupcakes/style/img/4096.jpg', revision: '6d6884dcfc7fc23f141276f3ebdb3472' },
        { url: '2048-cupcakes/style/img/512.jpg', revision: 'bacbffe7dea0246bf8a7aa0dacc394de' },
        { url: '2048-cupcakes/style/img/64.jpg', revision: '159784009b645f99e3712b2083d33fca' },
        { url: '2048-cupcakes/style/img/8.jpg', revision: 'cf0d5c5fde52af0f715f9d45ba505bbe' },
        { url: '2048-cupcakes/style/img/8192.jpg', revision: '7cedc1f74ddf2be624ebd537686a91f2' },
        { url: '2048-cupcakes/style/img/bg.jpg', revision: 'f9da9ae06b9bef517f54b2d6159639ed' },
        { url: '2048-cupcakes/style/main.css', revision: 'a5dc8866854f5496d3731991ceffd575' },
        { url: '2048-cupcakes/style/main.css.map', revision: '7018603ee281aec8c5d59a53113fd87a' },
        { url: '2048-cupcakes/style/main.scss', revision: '369b4dfc5c22e8e70cc441453dd6652a' },
        { url: 'ads.txt', revision: '68985d9ceeade686dd134151c93f3514' },
        { url: 'assets/audio/beake_platfrom.mp3', revision: '79414574370478ba0bbcc073222f60c6' },
        { url: 'assets/audio/black_hole.mp3', revision: 'a101a0959539a84d8ef604942e9c5531' },
        { url: 'assets/audio/falling.mp3', revision: 'e2607eedfa49dede9924ff8cddbfa6d5' },
        { url: 'assets/audio/jetpack.mp3', revision: 'a74f5df3c0b33d124fee272c62de69b0' },
        { url: 'assets/audio/jump.mp3', revision: '7717256fc72069c209c4d8502a5a9abf' },
        { url: 'assets/audio/jumponmonster.mp3', revision: 'fcc358d18fdbadd99fc0d3b33341f7fd' },
        { url: 'assets/audio/monster_hit.mp3', revision: 'b83c1f0dce21413f8686b36bbb87f9e2' },
        { url: 'assets/audio/monster_kill.mp3', revision: '35096eae0b6a1e83f448ee1f4e441d47' },
        { url: 'assets/audio/monster_warning.mp3', revision: '6414d1966b98e49266ecde47708deb8f' },
        { url: 'assets/audio/propeller.mp3', revision: '1a62f124393899db41df906076fe6afe' },
        { url: 'assets/audio/shoot.mp3', revision: '32546f8dcc43f8f65967c078cad3c031' },
        { url: 'assets/audio/shoot2.mp3', revision: '1c18d45e2c18ee4b1a2a5e4231b74225' },
        { url: 'assets/audio/spring.mp3', revision: 'fc80798a9bd7e591b5eca9387d018292' },
        { url: 'assets/audio/ufo_abduct.mp3', revision: 'cffe67d9a266341a410cb9ce38e18d93' },
        { url: 'assets/audio/ufo_kill.mp3', revision: '042f246af16401686a7a37bd1e48630d' },
        { url: 'assets/audio/ufo_warning.mp3', revision: '1d746d79ded569f51bc61a62c17d8c8c' },
        { url: 'assets/audio/white.mp3', revision: 'fd052f3e1a1783556e5c3f3e1d777020' },
        { url: 'assets/data/skin0Scenes.json', revision: 'dee403f9a2d7a5c83e6c07966cbd9c25' },
        { url: 'assets/data/statachieve.json', revision: 'e31d64c48013b69c4a8c66d60aa15bba' },
        {
          url: 'assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa-Dr0goTwe.woff',
          revision: '3e1afe59fa075c9e04c436606b77f640',
        },
        {
          url: 'assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ-D-x-0Q06.woff2',
          revision: 'a4160421d2605545f69a4cd6cd642902',
        },
        { url: 'assets/fonts/bitmapFont_0.webp', revision: 'cb97917d20e8c318f39565d09dc480d0' },
        { url: 'assets/fonts/bitmapFont.fnt', revision: 'a28f8a8b894f7197dde1ac68ad39cb27' },
        { url: 'assets/fonts/bitmapFont2_0.webp', revision: '5f77f11fc7d1db1976c12886c755143c' },
        { url: 'assets/fonts/bitmapFont2.fnt', revision: 'd50210f0c9e1924044d12d4ab41bff57' },
        { url: 'assets/images/appstore.webp', revision: 'cda661faf5e60e281e5f56067e7909db' },
        { url: 'assets/images/atlas.json', revision: 'e21806b60f26d2a755fc51592bbfc0ef' },
        { url: 'assets/images/atlas.webp', revision: '7379a0cbb4ba09a2acbcb8d606eb61e2' },
        { url: 'assets/images/atlas2.json', revision: '74e4727fcb88fbb93ab7d0e725a58b98' },
        { url: 'assets/images/atlas2.webp', revision: 'dea192be7d6d7477767e95c8365ad73b' },
        { url: 'assets/images/atlas3.json', revision: '1ad5d565b78601ebdcf376135fc14256' },
        { url: 'assets/images/atlas3.webp', revision: 'e51aa6aa6795609c873bba261d1b591b' },
        { url: 'assets/images/gameicon.webp', revision: '794898b18e733a40d23cefdeb43b16c7' },
        { url: 'assets/images/googleplay.webp', revision: 'cda661faf5e60e281e5f56067e7909db' },
        { url: 'assets/images/logo.png', revision: '9fda0578bfd106b71ed0328c50bf2aab' },
        { url: 'assets/images/playerSheet.webp', revision: '56f62a5b78ea5e1a359400cd0b1b84b8' },
        { url: 'assets/images/popupAtlas.json', revision: 'd8aa3d4a4d288abb4be954ba667046be' },
        { url: 'assets/images/popupAtlas.webp', revision: 'bc5e1262cd7a6ec24387b360951f4108' },
        { url: 'assets/images/splash.webp', revision: '1a5dd61eb49d7edf7a7ee9f162f0e6d2' },
        { url: 'assets/index-BGn-wZ8K.css', revision: 'a6785020e3824447328e7a8443cbc155' },
        { url: 'assets/index-Es8od-WT.js', revision: '056f2df7e1de31a980ba4d8079a27238' },
        { url: 'assets/IndexPage-D2G_A6ku.js', revision: 'c0202334e7acb3654be29d66d0e00502' },
        { url: 'assets/IndexPage-DZtkVFsT.css', revision: 'ab321ee25a4ab36f9ff694b6b72665a6' },
        {
          url: 'assets/KFOkCnqEu92Fr1MmgVxIIzQ-C5u4Lasg.woff',
          revision: '4aa2e69855e3b83110a251c47fdd05fc',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmEU9fBBc--j0ba7u44.woff',
          revision: '40bcb2b8cc5ed94c4c21d06128e0e532',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmSU5fBBc--CDXAfhRl.woff',
          revision: 'ea60988be8d6faebb4bc2a55b1f76e22',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmWUlfBBc--7z0HfM8a.woff',
          revision: '0774a8b7ca338dc1aba5a0ec8f2b9454',
        },
        {
          url: 'assets/KFOlCnqEu92Fr1MmYUtfBBc--Yv75Cvt_.woff',
          revision: 'bcb7c7e2499a055f0e2f93203bdb282b',
        },
        {
          url: 'assets/KFOmCnqEu92Fr1Mu4mxM-CEBEUyyq.woff',
          revision: 'd3907d0ccd03b1134c24d3bcaf05b698',
        },
        { url: 'assets/MainLayout-DKFYgSA1.js', revision: '5c29459d695bc55a1535ec161b8d99a8' },
        { url: 'assets/PrivacyPage-BrbArane.js', revision: '034dd8f79109f01e71b30d74a1890b12' },
        { url: 'assets/utils-DdjZO0oE.js', revision: 'b41190e8d77ad647fafb059d9ea4d390' },
        { url: 'banner.png', revision: 'd3a4a0e545075511b560bae537119c63' },
        { url: 'champion-island.html', revision: '9f76bbec5f3ee1951fc638fa12f7b29c' },
        { url: 'champion-island/archery-sprite.png', revision: 'ae4433e03b91ab05f319febd89ab6bac' },
        { url: 'champion-island/archery.mp3', revision: '0872508845feecf5d164672a5ab3ec64' },
        { url: 'champion-island/archeryintro.mp4', revision: 'aa31d2e648dcb65d117c58974e099df7' },
        { url: 'champion-island/archeryoutro.mp4', revision: '4b464c8b3a95604c1f5ce38c64a8bd80' },
        { url: 'champion-island/ballad.mp3', revision: '949151564a7f46ec49b30d8600578a95' },
        { url: 'champion-island/bundle.min.js', revision: '3b1f8d6c8a7d6219f07e78f4c3f4caaf' },
        { url: 'champion-island/cannon.min.js', revision: '02bb8b2efe8eb5ca2cafea47582c0c94' },
        {
          url: 'champion-island/climbing-sprite.png',
          revision: 'b2f246bd6e5ec0e987f80033ec3bdcda',
        },
        { url: 'champion-island/climbing.mp3', revision: '5dc28ece00f7f7a5e32d6898f6c8c80d' },
        { url: 'champion-island/climbingoutro.mp4', revision: 'aeecde4884b1324545f105a9f741ab24' },
        {
          url: 'champion-island/createjs-2015.11.26.min.js',
          revision: 'b3eb1294d4f0d786cf6bef0abfdd93af',
        },
        {
          url: 'champion-island/CTA_Climbing-174787997.png',
          revision: '32a210098fd621796c9e44e36f9c703e',
        },
        {
          url: 'champion-island/CTA-Archery-174787996-174787824.png',
          revision: '722a444d850fa2fc917e293bfbd33417',
        },
        {
          url: 'champion-island/CTA-CenteredPlayButtonFrame1.png',
          revision: 'a2e1adda80d94dfee5c7dc6b0b4835bb',
        },
        {
          url: 'champion-island/CTA-CenteredPlayButtonFrame2.png',
          revision: 'd60439177700151d4d84d720028e6120',
        },
        {
          url: 'champion-island/CTA-Closing-174787829-192414335.png',
          revision: '8c84c00ffedbb87a8e5a3cf6842e299c',
        },
        {
          url: 'champion-island/CTA-Marathon-174788017-174787794.png',
          revision: '44c0af588ba82eddaf3f7c5e1a3ad9ef',
        },
        {
          url: 'champion-island/CTA-OffsetPlayButtonFrame1.png',
          revision: 'a236a4ae560818253d5c0b57d15c0351',
        },
        {
          url: 'champion-island/CTA-OffsetPlayButtonFrame2.png',
          revision: '0c9abbaba29ad16a74445b48ef53d10b',
        },
        {
          url: 'champion-island/CTA-Opening-144867217-174787752-174787825-192413481.png',
          revision: '73503aa64b7250ceb1fa9a975f323ac9',
        },
        {
          url: 'champion-island/CTA-Rugby-174787947-174787773.png',
          revision: '36199b3404da1faa4d41948130870fee',
        },
        {
          url: 'champion-island/CTA-Skateboarding-174787927.png',
          revision: 'ba3f89b069e5996fed1122d94d549442',
        },
        {
          url: 'champion-island/CTA-Swimming-174787828-174787766.png',
          revision: 'd4444a85ba1bb93260953da8fcacabe5',
        },
        {
          url: 'champion-island/CTA-TableTennis-174787827-174787820.png',
          revision: '027e785a488100310df4a0890ef991a7',
        },
        {
          url: 'champion-island/cutscene-sprite.png',
          revision: '6893a1753706a61e496e90fbe155b06d',
        },
        { url: 'champion-island/disco.mp3', revision: 'f2d85309f75c241dd4971048102d3cd0' },
        {
          url: 'champion-island/doodle-champion-island-games-july-24-6753651837109015.3-l.png',
          revision: 'c368aca15222b4bbf5284b51920afdac',
        },
        { url: 'champion-island/favicon.ico', revision: '43017cd66fb6d2d63474dcfd5ae1ba66' },
        { url: 'champion-island/index.js', revision: '3fe9da6c485ae9cc139546045c273170' },
        { url: 'champion-island/kitsune20.js', revision: 'ebc2cbb5490085fde2536f4e45ffe603' },
        {
          url: 'champion-island/marathon-sprite.png',
          revision: '86fcc9b48b271773e4c3569dca4989e3',
        },
        { url: 'champion-island/marathon.mp3', revision: 'b41314ca29eb2e01f82c7aceac081fe1' },
        { url: 'champion-island/marathonoutro.mp4', revision: 'b31a8e42af9749e171bd8cc2447bfdf6' },
        {
          url: 'champion-island/messages.en-GB.nocache.json',
          revision: '0931ce9b43e017822280c2f0eed1f7c8',
        },
        {
          url: 'champion-island/overworld-sprite.png',
          revision: 'c3591542585b7ecadd9135559d524eba',
        },
        { url: 'champion-island/overworld.mp3', revision: 'f8d4c4021a11af2a32d9c75f3bab78d5' },
        {
          url: 'champion-island/pingpong-sprite.png',
          revision: '44294e4a53c61803d03b5acfc8d1082e',
        },
        { url: 'champion-island/pingpong.mp3', revision: 'a14dd2a1ce82b3f8f1f15452c9e7e6e3' },
        { url: 'champion-island/pingpongoutro.mp4', revision: '22f549dc67c9d3caf36ee322d8eaa4fc' },
        {
          url: 'champion-island/PixelMplus10-Regular.ttf',
          revision: '876f5b70a2a1304418e2e8b7479bf6da',
        },
        { url: 'champion-island/preload-sprite.png', revision: 'd3447b1d32ff9377489cfc689bd12b44' },
        { url: 'champion-island/README.md', revision: '8de693ea002b37080f0f812fa86661cc' },
        { url: 'champion-island/rock.mp3', revision: 'e35c3205027fa70959408b98f8352962' },
        { url: 'champion-island/rugby-sprite.png', revision: 'bdc4bc63f7019c441966778ec241b761' },
        { url: 'champion-island/rugby.mp3', revision: 'ee7a15326c83b138eb625c2c3d4502aa' },
        { url: 'champion-island/rugbyintro.mp4', revision: 'faf755b87b4fd4b6273b262c709008ea' },
        { url: 'champion-island/rugbyoutro.mp4', revision: '61f01edf8c067d00dec131237c3dbd57' },
        { url: 'champion-island/scores.json', revision: 'f3cc290562ec771500bcb389535354f9' },
        { url: 'champion-island/shared-sprite.png', revision: 'da4fde5c8a3e94d43b42a35dcd00e8ca' },
        { url: 'champion-island/shared.mp3', revision: '1723d5621816e650321f7392b078eb83' },
        { url: 'champion-island/skate-sprite.png', revision: '9da06395ba59b456855effa8fd7a954f' },
        { url: 'champion-island/skate.mp3', revision: 'd559560abf70971c0cab72692c5f17e6' },
        { url: 'champion-island/skateintro.mp4', revision: '4e3b2005e46f96cd198189ca14cc99bd' },
        { url: 'champion-island/skateoutro.mp4', revision: '89311befaaa65ac1dd1db8b65269534a' },
        { url: 'champion-island/splash.png', revision: '58b74b75205800e89f7f037be429ea44' },
        { url: 'champion-island/swim-sprite.png', revision: 'dd8eab1badfac84675593a0949ab28a9' },
        { url: 'champion-island/swimoutro.mp4', revision: 'bcfb1803434afeaef30238dd004d74b6' },
        { url: 'doodle-baseball.html', revision: '1d6ad15512d59f50a97c0a5cda3c9be0' },
        { url: 'doodle-baseball.png', revision: '0dde438c1daf1471c8a76354e301044a' },
        {
          url: 'doodle-baseball/assets/cta-sprite.png',
          revision: '881923749208d1865fb1b556f10473e0',
        },
        {
          url: 'doodle-baseball/assets/main-sprite.png',
          revision: '82b65c57786a8d113fd990da139ed21a',
        },
        {
          url: 'doodle-baseball/assets/messages.en.nocache.json',
          revision: '457f194112f3779e89b2226b2b190620',
        },
        {
          url: 'doodle-baseball/assets/pitcher-sprite.svg',
          revision: '7f20a28c02f9690a89203ff3914c6b68',
        },
        {
          url: 'doodle-baseball/assets/share-sprite-a.png',
          revision: '9381a6f29c81ae28d81a05c68cee02f7',
        },
        {
          url: 'doodle-baseball/assets/share-sprite-b.png',
          revision: '2f32949b25a738b2636aa4816430b187',
        },
        { url: 'doodle-baseball/assets/sounds.mp3', revision: '01dff224bdbf5e767cdd7ac757fbb8ce' },
        {
          url: 'doodle-baseball/assets/svg-sprite.svg',
          revision: '56c4feb1fc9d90e6c3daab752fd88873',
        },
        { url: 'doodle-baseball/css/styles.css', revision: '166a5d9ab07992511a5de457688d95aa' },
        {
          url: 'doodle-baseball/icons/android-icon-144x144.png',
          revision: 'd448bed82e70a1cf75ed565b57d967d4',
        },
        {
          url: 'doodle-baseball/icons/android-icon-192x192.png',
          revision: '5de4dd2a53335137a622224eb3bd29c1',
        },
        {
          url: 'doodle-baseball/icons/android-icon-36x36.png',
          revision: '20a5339bafe41643a736da3138723740',
        },
        {
          url: 'doodle-baseball/icons/android-icon-48x48.png',
          revision: 'c5ab368eda53e84dcf8400702528d176',
        },
        {
          url: 'doodle-baseball/icons/android-icon-72x72.png',
          revision: 'f3d1a007ef2ca981eb8f8faf05ad70c7',
        },
        {
          url: 'doodle-baseball/icons/android-icon-96x96.png',
          revision: 'd98c028068ea101e55e02a27cdd41d33',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-114x114.png',
          revision: '4035117caf9ebb1de5f521fa64b26d18',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-120x120.png',
          revision: '1d9f38d48b2f7995bd18b029d9ddba6f',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-144x144.png',
          revision: 'd448bed82e70a1cf75ed565b57d967d4',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-152x152.png',
          revision: 'f8a896db4e5c5d2f265355d4054bd6a0',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-180x180.png',
          revision: 'ba19bd552d259e086df9675bf1522a1a',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-57x57.png',
          revision: 'c9f180608eb0cacaf5ebc900bd0b750d',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-60x60.png',
          revision: '6db240f3fa168ae485c244dad89ac9d5',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-72x72.png',
          revision: 'f3d1a007ef2ca981eb8f8faf05ad70c7',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-76x76.png',
          revision: 'f6a1608e4d09704a1df6d521371fe825',
        },
        {
          url: 'doodle-baseball/icons/apple-icon-precomposed.png',
          revision: '262f7e6712f813e72ec90d62b04d41fa',
        },
        {
          url: 'doodle-baseball/icons/apple-icon.png',
          revision: '262f7e6712f813e72ec90d62b04d41fa',
        },
        {
          url: 'doodle-baseball/icons/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: 'doodle-baseball/icons/favicon-16x16.png',
          revision: '642401f482588b3e3980ceaa5059b49d',
        },
        {
          url: 'doodle-baseball/icons/favicon-32x32.png',
          revision: '6ba88c5131fc5a4295dff5ff5082ef9f',
        },
        {
          url: 'doodle-baseball/icons/favicon-96x96.png',
          revision: '357b911fbd5bb3dd7631bb0b3d6224f7',
        },
        { url: 'doodle-baseball/icons/favicon.ico', revision: 'a21efed7a0f63b6c94511058efb20232' },
        {
          url: 'doodle-baseball/icons/manifest.json',
          revision: 'b58fcfa7628c9205cb11a1b2c3e8f99a',
        },
        {
          url: 'doodle-baseball/icons/ms-icon-144x144.png',
          revision: 'd448bed82e70a1cf75ed565b57d967d4',
        },
        {
          url: 'doodle-baseball/icons/ms-icon-150x150.png',
          revision: '7f970afd068d118449370131515bc086',
        },
        {
          url: 'doodle-baseball/icons/ms-icon-310x310.png',
          revision: '6d1825f163622a7be2019ec86f36abff',
        },
        {
          url: 'doodle-baseball/icons/ms-icon-70x70.png',
          revision: '25ddf2851b122d97a7d09e6c52a53214',
        },
        { url: 'doodle-baseball/js/game.js', revision: 'ea4b55a1f03655d845b85e4b9c5870ae' },
        { url: 'doodle-baseball/manifest.json', revision: 'b58fcfa7628c9205cb11a1b2c3e8f99a' },
        { url: 'doodle-champion-island-games.jpeg', revision: '294a8aa5862dcd16ddfad35228ad2524' },
        { url: 'doodle-halloween.html', revision: '5041223e47092c03b59dd92d80a54bdf' },
        { url: 'doodle-halloween.png', revision: 'bc97cc99f43ff1f1eb89c828d8638c6c' },
        { url: 'doodle-halloween/audio/end.ogg', revision: '722a95613e2dd761e149e4a33a2c0b3b' },
        { url: 'doodle-halloween/audio/initial.ogg', revision: '0677ade112239062361536bb7e0a01bc' },
        { url: 'doodle-halloween/audio/main.ogg', revision: '3314852134d9b894391e55faeb02789f' },
        { url: 'doodle-halloween/audio/victory.ogg', revision: 'fef8dbc7f153822c784808d98d425714' },
        { url: 'doodle-halloween/css/styles.css', revision: '8c3c00a11b0c2f1ec12e26912d9104b7' },
        {
          url: 'doodle-halloween/icons/android-icon-144x144.png',
          revision: 'a572a89bc3dfc21e99f26703f964b44e',
        },
        {
          url: 'doodle-halloween/icons/android-icon-192x192.png',
          revision: 'a68c43aa32d70805d061211e571d840a',
        },
        {
          url: 'doodle-halloween/icons/android-icon-36x36.png',
          revision: '084f397f2f6a9632fb27fa70c7d6b42a',
        },
        {
          url: 'doodle-halloween/icons/android-icon-48x48.png',
          revision: '360abe4a897d04f2ce4b023ab7e2fbdc',
        },
        {
          url: 'doodle-halloween/icons/android-icon-72x72.png',
          revision: '2a15612f6126c5a88e83b33819ffaa3b',
        },
        {
          url: 'doodle-halloween/icons/android-icon-96x96.png',
          revision: '1b10baf65dd90e9705e744feaeaf70a6',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-114x114.png',
          revision: '55330be206d9d0bb08946dd9798af18f',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-120x120.png',
          revision: '2e66d0b9a4ceda21e979408576aee1c0',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-144x144.png',
          revision: 'a572a89bc3dfc21e99f26703f964b44e',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-152x152.png',
          revision: 'fed8855bce94862fccac73d944bad4ea',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-180x180.png',
          revision: '9ceb5aff71293ef791dc73727f1470ea',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-57x57.png',
          revision: 'f5d6a3bc12a464b124632b4dc39ffd55',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-60x60.png',
          revision: '1dd84327ef2fcb39f1d0a58d5330001d',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-72x72.png',
          revision: '2a15612f6126c5a88e83b33819ffaa3b',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-76x76.png',
          revision: '84a2a1ca7fae85c8a379fbc1149d93e2',
        },
        {
          url: 'doodle-halloween/icons/apple-icon-precomposed.png',
          revision: '13ad32d6c750433fcfa5df5519aa95e7',
        },
        {
          url: 'doodle-halloween/icons/apple-icon.png',
          revision: '13ad32d6c750433fcfa5df5519aa95e7',
        },
        {
          url: 'doodle-halloween/icons/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: 'doodle-halloween/icons/favicon-16x16.png',
          revision: '558877f32c50590da4f07e7a9a0ca9f3',
        },
        {
          url: 'doodle-halloween/icons/favicon-32x32.png',
          revision: 'f3d0b7eaf1257c1202fd9e12d4e6c971',
        },
        {
          url: 'doodle-halloween/icons/favicon-96x96.png',
          revision: '1b10baf65dd90e9705e744feaeaf70a6',
        },
        { url: 'doodle-halloween/icons/favicon.ico', revision: '4d9221d2a85f17aa86cb6e35ee9c7359' },
        {
          url: 'doodle-halloween/icons/ms-icon-144x144.png',
          revision: 'a572a89bc3dfc21e99f26703f964b44e',
        },
        {
          url: 'doodle-halloween/icons/ms-icon-150x150.png',
          revision: 'abf871fccb3d138787656f73165be323',
        },
        {
          url: 'doodle-halloween/icons/ms-icon-310x310.png',
          revision: '4877bfc8bfbf151165faf9140c781617',
        },
        {
          url: 'doodle-halloween/icons/ms-icon-70x70.png',
          revision: '895f66ef242d992f9394802373c2162a',
        },
        { url: 'doodle-halloween/img/cta_bg.png', revision: 'e107618b455a93f632594f73ae36c19b' },
        {
          url: 'doodle-halloween/img/cta-png-sprite.png',
          revision: '78328f5b639e9d06148cc212f833923d',
        },
        {
          url: 'doodle-halloween/img/end-jpg-sprite.png',
          revision: '94f0e1f42ddd78460869d71adaa07b45',
        },
        {
          url: 'doodle-halloween/img/end-png-sprite.png',
          revision: '0abd70d86129a8c95411211250654de7',
        },
        {
          url: 'doodle-halloween/img/end-png1-sprite.png',
          revision: 'c8134dff79ee18d613484ce2a2c2334a',
        },
        {
          url: 'doodle-halloween/img/gameover-png-sprite.png',
          revision: '04459776629e9207f547866e5a1fa487',
        },
        {
          url: 'doodle-halloween/img/level1-jpg-sprite.png',
          revision: '637d24399118b47ba7d7422ca8cd899e',
        },
        {
          url: 'doodle-halloween/img/level1-png-sprite.png',
          revision: '5b3a88ebc97b66ae769d350cf023bb7f',
        },
        {
          url: 'doodle-halloween/img/level1-png1-sprite.png',
          revision: '13c87365b011645f0de3acadff628076',
        },
        {
          url: 'doodle-halloween/img/level2-jpg-sprite.png',
          revision: 'd4edc65fec8c902519d8bab0ef4ae11f',
        },
        {
          url: 'doodle-halloween/img/level2-png-sprite.png',
          revision: 'b5fa05a422c73fcf83c48de072b5dfd5',
        },
        {
          url: 'doodle-halloween/img/level3-jpg-sprite.png',
          revision: 'fadba9731306fe7e1f6568e61709dd78',
        },
        {
          url: 'doodle-halloween/img/level3-png-sprite.png',
          revision: '4c7bb01cc4bd2fa4e934cdb1da2d8690',
        },
        {
          url: 'doodle-halloween/img/level4-jpg-sprite.png',
          revision: '22c010e16f8553f2211c957ab6a30a29',
        },
        {
          url: 'doodle-halloween/img/level4-png-sprite.png',
          revision: '6315d825b8fccfd97be8354409eab74e',
        },
        {
          url: 'doodle-halloween/img/level5-jpg-sprite.jpg',
          revision: 'cec93ef4ae5b52b4adb00e0d1aeba3ed',
        },
        {
          url: 'doodle-halloween/img/level5-png-sprite.png',
          revision: '1782f674d6e938dfe4da140e3b7f3a49',
        },
        {
          url: 'doodle-halloween/img/level5-png1-sprite.png',
          revision: 'f8a0e3166381614639beeb0c5b09b7e5',
        },
        {
          url: 'doodle-halloween/img/level5-png2-sprite.png',
          revision: '97fe713c4072e7ebb3e994b5296bcd7e',
        },
        {
          url: 'doodle-halloween/img/level5-png3-sprite.png',
          revision: 'b2dc300ddf9712b80eb548d07ab41187',
        },
        {
          url: 'doodle-halloween/img/main-jpg-sprite.jpg',
          revision: 'f58f703306afcc9f14c20be4110af7f1',
        },
        {
          url: 'doodle-halloween/img/main-png-sprite.png',
          revision: '99a45dd79fe46342b33fdbb84037fb00',
        },
        { url: 'doodle-halloween/img/ntp_bg.jpg', revision: 'a212c298b518a47218408b18d54edb3a' },
        { url: 'doodle-halloween/js/game.js', revision: '900579d5f92a17fb1d91bfd2788a9fd1' },
        { url: 'doodle-halloween/manifest.json', revision: 'aa398811a18e3a16ca4f2b7c7b85eaf1' },
        { url: 'doodle-jump.html', revision: '04ff6a953526803a2dae15ecf77423d5' },
        { url: 'doodle-jump.jpeg', revision: '937f98b10bbe67dd6a7432401a28984d' },
        { url: 'doodle-jump/css/styles.css', revision: '9079e904a52b7bcbbbd16f1d0214fb11' },
        {
          url: 'doodle-jump/icons/android-icon-144x144.png',
          revision: '7a62bdb22767cdb160acbccca6a97154',
        },
        {
          url: 'doodle-jump/icons/android-icon-192x192.png',
          revision: 'afe897b0e0e4b6cd0a5f58dc1c988486',
        },
        {
          url: 'doodle-jump/icons/android-icon-36x36.png',
          revision: '418be30c1070dc1e4d29fd9ef2b38ff9',
        },
        {
          url: 'doodle-jump/icons/android-icon-48x48.png',
          revision: '6fb0c11c99b61d7318b2185909ebe034',
        },
        {
          url: 'doodle-jump/icons/android-icon-72x72.png',
          revision: '89326117c32375267c45802197b1bc59',
        },
        {
          url: 'doodle-jump/icons/android-icon-96x96.png',
          revision: 'cb9d75cdda60e4a9d24b091794b2f727',
        },
        {
          url: 'doodle-jump/icons/apple-icon-114x114.png',
          revision: '8980e2cf723f60ff5226fb9b0125b35f',
        },
        {
          url: 'doodle-jump/icons/apple-icon-120x120.png',
          revision: 'e875bfb9c5418ad245a1f1a6f9d71ef1',
        },
        {
          url: 'doodle-jump/icons/apple-icon-144x144.png',
          revision: '7a62bdb22767cdb160acbccca6a97154',
        },
        {
          url: 'doodle-jump/icons/apple-icon-152x152.png',
          revision: 'c38e7e240535d06a6299c010c06744c2',
        },
        {
          url: 'doodle-jump/icons/apple-icon-180x180.png',
          revision: 'aa6c42b41bb1d0ab7a8df7ee6e7ff721',
        },
        {
          url: 'doodle-jump/icons/apple-icon-57x57.png',
          revision: '976277d913cdabf6c5d9d8cbb12c2dee',
        },
        {
          url: 'doodle-jump/icons/apple-icon-60x60.png',
          revision: 'b5eca5a695d047cc32a91fff848627a4',
        },
        {
          url: 'doodle-jump/icons/apple-icon-72x72.png',
          revision: '89326117c32375267c45802197b1bc59',
        },
        {
          url: 'doodle-jump/icons/apple-icon-76x76.png',
          revision: '1f63a9248aeed5a294dafb53ac2c70d8',
        },
        {
          url: 'doodle-jump/icons/apple-icon-precomposed.png',
          revision: 'f2db7e519a572ca6df4b9c81e883df0b',
        },
        { url: 'doodle-jump/icons/apple-icon.png', revision: 'f2db7e519a572ca6df4b9c81e883df0b' },
        {
          url: 'doodle-jump/icons/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: 'doodle-jump/icons/favicon-16x16.png',
          revision: 'cb3e2b80efca0bc7f7dd89195256db8d',
        },
        {
          url: 'doodle-jump/icons/favicon-32x32.png',
          revision: 'beef2b5e4dafcc7d373e4dc8eb496064',
        },
        {
          url: 'doodle-jump/icons/favicon-96x96.png',
          revision: 'cb9d75cdda60e4a9d24b091794b2f727',
        },
        { url: 'doodle-jump/icons/favicon.ico', revision: 'e74a5c4073bb0ad61731103bfab2c301' },
        {
          url: 'doodle-jump/icons/ms-icon-144x144.png',
          revision: '7a62bdb22767cdb160acbccca6a97154',
        },
        {
          url: 'doodle-jump/icons/ms-icon-150x150.png',
          revision: '19ee8255c00e094e3ebdab8d87cb7075',
        },
        {
          url: 'doodle-jump/icons/ms-icon-310x310.png',
          revision: '6590d5f67688ffa49cc296842b302418',
        },
        {
          url: 'doodle-jump/icons/ms-icon-70x70.png',
          revision: '504aae10e30e986f12b06aab25ed075e',
        },
        { url: 'doodle-jump/js/fulltilt.min.js', revision: 'f3815a3628a71de46e47cada27034371' },
        { url: 'doodle-jump/js/game.js', revision: 'ddecd3048d843e0f19341b66008eb400' },
        { url: 'doodle-jump/js/main.js', revision: 'ebe40734e3793fce54419ed75327156b' },
        { url: 'doodle-jump/js/phaser.min.js', revision: '5df6d1b39810cc2a67dd1962dc0f3c7d' },
        { url: 'doodle-jump/js/screenfull.min.js', revision: '38940118f628790ade08baa25d67222a' },
        { url: 'doodle-jump/js/scripts.js', revision: 'aa216e1246ee1054ead86bfa38f82162' },
        { url: 'doodle-jump/manifest.json', revision: '5892ea697cab46a4bdd87b8ddd297014' },
        { url: 'doodle-jump/package.json', revision: '3e971184d5d8dcc9be65c23d5eb8c04f' },
        { url: 'doodle-jump/pnpm-lock.yaml', revision: 'c66b4224e001374cf0b7bb720a86e121' },
        { url: 'google-doodle-games.html', revision: 'e234cabd3ca9291da2394836aca40177' },
        { url: 'icons/apple-icon-152x152.png', revision: '35e205faa221c16a19fcb5d0fb16869b' },
        { url: 'icons/apple-icon-180x180.png', revision: '7c0325a8e1c4b41c0f0a7cdfc4a6c579' },
        { url: 'icons/favicon-16x16.png', revision: '32385a4565bd2a219d8077c5c4cb62ed' },
        { url: 'icons/favicon-32x32.png', revision: '785f5224835fc0ac368c65c347981d7a' },
        { url: 'icons/favicon-96x96.png', revision: 'faf5307c241e794f6f5391c1d6d1dea1' },
        { url: 'icons/favicon.ico', revision: 'b6b0420620f8623022ea763aa8524cee' },
        { url: 'icons/icon-192x192.png', revision: 'cc0e6f58b369b8c37e2284e23d56ed4c' },
        { url: 'icons/icon-512x512.png', revision: '984f905f470c93f1aa0b65ff2f5c25ed' },
        { url: 'icons/ms-icon-144x144.png', revision: 'd4ae8e49aaf5ee7d8e3a43f5610bb30e' },
        { url: 'icons/safari-pinned-tab.svg', revision: '1c31d1ea60f0c2648426e2cdac4bf4a9' },
        { url: 'index.html', revision: 'dc0e7d2a90b6222424d3a95ef0aa8d5f' },
        { url: 'manifest.json', revision: '146d37b32acaba6f9aaad98ec4476f0b' },
        { url: 'pac-man.jpeg', revision: '6488b3eb16a396397bb23f22a6f78346' },
        { url: 'doodle-pacman.html', revision: '1a5429a611b1e81dce82b3945e4ec537' },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('index.html'), {
        denylist: [/sw\.js$/, /workbox-(.)*\\.js$/],
      })
    )
})
