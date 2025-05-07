'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "852083028556125f31a09ac3a4b86d44",
".git/config": "06ff6a5f331a624ec342a710c3cdbe0c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82601ffd4952e3d762c623fda6ccdd69",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85c6195ebf68ba1396bc792a9057ce51",
".git/logs/refs/heads/master": "85c6195ebf68ba1396bc792a9057ce51",
".git/logs/refs/remotes/origin/master": "08226392297adda4863d7b655dd0c353",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/c96025dea71a06c96492c4470da878717d05d7": "1d31a5efa16affdddf75f7fb7ae6ac50",
".git/objects/07/3563201e93cd72df5889b4ebb2a0e936f2df00": "be51b50f2abf6e48bcf80967dda3e57c",
".git/objects/08/227c7120bbd90971c20bf4581a3fc1ce9f7142": "8ea62aaada91f80e745fa49ecd206dc9",
".git/objects/08/a7f2296ae2995393a1d703042338c03dbe9393": "b0737780ffabbfd0ea308474cef127fb",
".git/objects/10/5fee7c1bc7599f2ea3577eb1e776c5912f1f12": "fb8b5da731b383ecc0f53a0d0b6c8940",
".git/objects/12/6929cc055ad4fab49c21a261682af38bd1f881": "8c37fe4f3c33deb5bdb5b60bb217a380",
".git/objects/1c/31574bf7e8a10ebee01430d3fbc8eff43df01a": "fab40a7da6b38579a87a6f590f7b9e92",
".git/objects/1e/9347f725ada474cebcd23fad50a5b8701ba78a": "e12f2e024abaf2cea64529dff6c56fe1",
".git/objects/1f/e6a911757d65f0c9f5a9d477f51d2763ac7037": "c698ac48be093afd883a7165db8fc5a9",
".git/objects/29/ac150fad2f1626b107b11485acb4aa4375113e": "617f7c4168bba3dc12d53b20f06e6c23",
".git/objects/2a/45906635fda2198b22e09d6963078a72e9b401": "d94635a71a29d51a4acd969ed72b44c9",
".git/objects/2c/f0acdd3636a58a19fb4b7525ad4d9b8b4c0d67": "d4c68a90ccd2de7f04d9e1754bf27c36",
".git/objects/2e/2eeb7d85b4427c8a05e639183678a17298977e": "a22f6e367dceb086cb6d91c87ee641ef",
".git/objects/2e/c1f887cb1685654f4daa95f488adab8bee5cac": "5ec334fe2318ff65c92ea5eeec1a20ad",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/4e1a24fa7e51b7f1f134720921f09fbbb7d633": "f5b14e7005740ad06f7ee8e3b32a8b0d",
".git/objects/35/0241b2d4f4debd36e2d183f4624e7a1823e363": "55996973a4df4755f75b3e159fda77a7",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/6cec3bcec68fabcac720249d0c369bae0354ff": "475f457697d7b528deedf9950b93def5",
".git/objects/38/8908e8b379b584e85b1028be3a8bd338ee9eb0": "a7058054e75579c04c1771e18c48d135",
".git/objects/3c/fb45bfb948586e20c0e601c72b11d74de7ed9d": "2127bb357acc7d50b98dd3dc0a7bfd59",
".git/objects/3e/b3bd8875d5e1790920588eeae8f91aceddfbf3": "a8ee8fe14ed4912e47e9d9d940b6d912",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/b2204a6fc94b791eab70615ee9789846aad39d": "1808a7e1374c91b7b418edf68f751831",
".git/objects/45/73845946e245f36600b7a9ebbbbdbc23604115": "c920e340de2a14f59252c732d7ae1450",
".git/objects/45/889d277a4cedd54021208bdfae67d588fe6c89": "a66397466d2f86bf039506a754cc5705",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/c5466c4e853867dd9efc81b53a89befb8c22fc": "aaf13b96f7d97bdeb6e39e4d99cde5bc",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/518e68cad29db4101b498efb51fa1bd2386292": "9af3088ee7c1d61a31140483c67de140",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/3ed78835dbdb0ed74a1fd494f69375339b9c55": "372191483653a1d803252af55a6a083d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/f696830f91bd1ffb586675c12fa63f08ff8539": "5d83ebb1b18a847b8721bccb91aa7543",
".git/objects/62/d5416446f408e63d8b4f166d6f4c9e4cc9cd2a": "cbc4f7ca47bacd9ee1dad18c47605145",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/7c4c5060aa1d1da17693178396a2e696d581e7": "99f303177161cc871ab742d252181566",
".git/objects/66/95b6599a46e1c32afc5ad31f8154c0b28d4780": "ad9bbbe588d17cd748e8e78b49962c41",
".git/objects/66/c1f14ec9cc9b729222e4de0d908515b2aadfd1": "212a27e4cb7497a1e25a9601385fc158",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/88/69550ed2dd9b8a14c0824695ca2aff51866819": "338e06cf4327e0694e3810097877a469",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/27bb5f843466634a3f19d33c3a618cca8750dc": "398feb6a5e9630daf1bf19e0c4fb9f02",
".git/objects/8f/921bb0996db88d0fc701b58a7e3e9f79acad4e": "1a9e83977ddab420adc2cab8967f4ddf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/058f78982abd86da190f5946a01f5934e3a315": "cab9d894ac9c9ea3946554e281796e63",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/97/2e37f800a37319bfd74280433ccd47de0a7c25": "e109bff46a3eb846ed33e948a90bcb46",
".git/objects/9a/d40709907b8838b5b4f3484600aa9bb72d299f": "fa4ad865e10d93e3d329243c7d7f581d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/d71be4c893b60a50126648bedf6a3c71500644": "3b63a601181a7cc706e558067d147afe",
".git/objects/ac/2b3d2d84bab1103608c56e9f24af356cb5d5da": "f5f74125ece3a970ac5d7b7c59be5cfc",
".git/objects/b1/7196f5999c283ca53e0e1a05c0a43e80b7ef76": "bbde4000cfdc87f90bd56007850c0d66",
".git/objects/b3/d1103666cd88bb4f9239e7d0de3f4cf2b44d2b": "9bdeb1ea120b8d5fa81d2bfaf8f013bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/dd4b28ffc4223b1f687238938f2ac2110180eb": "33f24ae8e5b0e2ac36a17a92a312ef27",
".git/objects/c0/295770e89d78e6242e8f1eb295864797ae63a7": "5c8ac5afcafff618603bbed97291754a",
".git/objects/c8/c70a7600b2f1501c36dacc8bcbc775e2806d2e": "eb6b808f67c704b25a5045f7b8785c56",
".git/objects/cb/37fdd36a74211c21b302f86f3fee2bec95e58f": "59523098dbb10d4e4ade2aa200a227bf",
".git/objects/d3/c680339bd6990b82075ed161d20a968a22e37d": "2b7201f8c986f48e4de8aaa98f80651a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f36b890b62eae7801d3ae3d3d507770ba05141": "24b9c4e787afb9af7fb978083d8f7072",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/c0742bf2624cb417986c364813cbc0b4d43806": "a85038144a0cbba2306a4868a01b6483",
".git/objects/dd/5ae17d83a5c60b3283ebc7a157e1ac4db0bbe7": "38aed7e997f0146e6acb9256a0e22445",
".git/objects/e0/e0c4bbaac4de7b869c7a80597613f9c2439aac": "1c7a5a2a1a812879b15ce2b22f96cb45",
".git/objects/e6/a1a409586add330604d05b902cecbaa25bbaa3": "deba3aa7a906dd0de62213a668806267",
".git/objects/e6/e3b2275b796c3bdb14cac90196bdf162b580c9": "30ac34cd96c84cdad2d0a6f13f2c3aef",
".git/objects/e7/d290e2db83b7f49a49d56e014172fbd76d75ee": "a325f17abef95cff4dd0ab5493169216",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/acaebe9ecb1c0ce7c46f320582aae06be83100": "de697ec6f2c7964337a1d7f0e0fefdfd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/1a1615f22ebf38d17b7ddb39acfd6358809518": "0a99a6c111d65877077b236e84a00be2",
".git/objects/f8/84c873ee4890758681b146699f48725442cd4b": "0fcf67a4b89f20981f810c4c8bf99b6a",
".git/objects/fc/4ed51ea48a7465cd6a1cf618b73cbd7f16c2c1": "904970e3f9aec480ebb772adf44371bc",
".git/objects/fd/b91d2dd823d89ef7e56c267266ca086f6d550b": "65b4e01783b20c64d81e8e304d05ee64",
".git/refs/heads/master": "b5bef24a11bb1d0394faa302024a2b57",
".git/refs/remotes/origin/master": "b5bef24a11bb1d0394faa302024a2b57",
"assets/AssetManifest.bin": "ca6a5dc545cce5c8d3d7da81477b370e",
"assets/AssetManifest.bin.json": "c89e72a84e6f8b78ac1296078d2b60c6",
"assets/AssetManifest.json": "de0171f5c493334fb6373a7a5394ba22",
"assets/assets/icons/add_quantity.svg": "fc676452e73fec2a6530dd3ca44afed4",
"assets/assets/icons/delete.svg": "babb6b0d2bb49e4ca04e218becd99a55",
"assets/assets/icons/edit.svg": "6e618eccbee02fb445e380ed87d7857b",
"assets/assets/icons/nav/history.svg": "72374fbc13fe94219f7afc89ac3ee091",
"assets/assets/icons/nav/home.svg": "d2d6e2ea158fc4b134417d90a82f58ff",
"assets/assets/icons/nav/scan.svg": "9e3f6a8951e21c1c0449ae62acecc09a",
"assets/assets/icons/nav/setting.svg": "609d5fd0d0d1d278c5c06dd1d4ecf753",
"assets/assets/icons/nav/ticket.svg": "d0ea0c00cdb4fc615dbc5b7d078982a4",
"assets/assets/icons/payment/qris.svg": "82420e9a7ac040839707cf40c8a4f93f",
"assets/assets/icons/payment/transfer.svg": "6a11111b39436ac06cf4ff21b9be1895",
"assets/assets/icons/payment/tunai.svg": "0d78209df497022f929a17273c7fbfa4",
"assets/assets/icons/plus.svg": "63832c999375463b0c802220ba456bb8",
"assets/assets/icons/reduce_quantity.svg": "68158ae9d8bcb143d5a76c3e2c27bd62",
"assets/assets/icons/settings/logout.svg": "aee90b165d9856ee30ad3f3761a8fe46",
"assets/assets/icons/settings/printer.svg": "8cf11a2173395bcd466071726c2d5c0e",
"assets/assets/icons/settings/sync-data.svg": "d670a1a1b1cdfe51c99e7af68ca61953",
"assets/assets/images/back.png": "b93378ebdcd554b899ba66c4b1cb53d6",
"assets/assets/images/logo_blue.png": "5d7506ef24eaa1824f9353ef762f86b6",
"assets/assets/images/logo_cwb.png": "4fca9a11034c18c5966976ac2802147a",
"assets/assets/images/logo_white.png": "c4d68d7a1e56566e2c08a8b705d9e4e5",
"assets/assets/images/receipt_card.png": "f3481c43a316ac7df5f446b923be23b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "64693f4059fb1b5643a6f18f35e7749e",
"assets/NOTICES": "10e41453fc5e95d0017f3ebe076b4c53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ea5e86ac3cac74c99e342b516dc74625",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "176f482acc60183eac6b801b4ffeb571",
"/": "176f482acc60183eac6b801b4ffeb571",
"main.dart.js": "291c411a34699fb1c06a647a0cd06ba4",
"manifest.json": "0699cb846db0c77cec368845a5f51546",
"version.json": "4326013da7c8fd53c4a8f710a182642a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
