importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "ico/114x114.png",
    "revision": "4bb3218f6f0883f6b3fdc0045f516849"
  },
  {
    "url": "ico/120x120.png",
    "revision": "ae664e873bf7229e1292b1680cbc1a8f"
  },
  {
    "url": "ico/128x128.png",
    "revision": "ea8a9dcca437db6414b2837f330cbcc7"
  },
  {
    "url": "ico/144x144.png",
    "revision": "8fb8a1c9fd883037fe35a22d8138654d"
  },
  {
    "url": "ico/152x152.png",
    "revision": "c6fb48880fe034cc0d66269b17336661"
  },
  {
    "url": "ico/16x16.png",
    "revision": "8f7e68cd39aa79d9d0f4848004b0ba7f"
  },
  {
    "url": "ico/196x196.png",
    "revision": "bbd146459d896dd198a0ad1ae86da585"
  },
  {
    "url": "ico/270x270.png",
    "revision": "90528b923954d3016537d92128b0b3b3"
  },
  {
    "url": "ico/32x32.png",
    "revision": "06d390272ca596dc9835e37ac78deb6c"
  },
  {
    "url": "ico/558x558.png",
    "revision": "7b650cdd7147d66aa747464e2d580c50"
  },
  {
    "url": "ico/57x57.png",
    "revision": "5b2daac06823c84c9ebd6938095b79f2"
  },
  {
    "url": "ico/60x60.png",
    "revision": "c18be284fb5d5e17af84b47e9574eae2"
  },
  {
    "url": "ico/72x72.png",
    "revision": "ccbd6a54cbe07df6f19e3c220f92aafb"
  },
  {
    "url": "ico/76x76.png",
    "revision": "0e669cd042b266c4c511abe48c4baf37"
  },
  {
    "url": "ico/96x96.png",
    "revision": "70962f56b06f8e5166c24c5bc49f9ffb"
  },
  {
    "url": "robots.txt",
    "revision": "bbbcde0b15cabd06aace1df82d335978"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
