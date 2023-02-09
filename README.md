Needs the following Tampermonkey UserScript header:
And the instructions outlined here:
https://stackoverflow.com/a/55568502/13090033

// ==UserScript==
// @name         Saved Jobs API (local file)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.upwork.com/nx/jobs/search/saved*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=upwork.com
// @grant        GM_xmlhttpRequest
// @connect      *
// @require      https://cdn.jsdelivr.net/npm/jsonata/jsonata.min.js
// @require      file:///C:/WorkRepos/upwork-saved-jobs/saved-jobs.user.js
// ==/UserScript==