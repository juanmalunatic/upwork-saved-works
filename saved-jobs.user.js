// ==UserScript==
// @name         Saved Jobs API info
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.upwork.com/nx/jobs/search/saved*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=upwork.com
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    const button = document.createElement('button');
    button.style = "position:absolute; top:120px; right: 100px; outline:#f90 solid 1px;";
    button.innerHTML = "Parse Jobs";
    button.type = "submit";

    button.onclick = main_routine;
    document.body.appendChild(button);

})();

async function main_routine() {
    console.log("routine start");

    const jobs_ids  = gather_jobs_ids();
    const jobs_data = await gather_jobs_data(jobs_ids);
}

function get_regex_groups (str, regex) {
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        /*m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });*/

        // https://stackoverflow.com/questions/4724701/regexp-exec-returns-null-sporadically
        regex.lastIndex = 0;
        return m;
    }
}

function gather_jobs_ids() {
    const links = document.querySelectorAll(".job-tile-title a");
    const regex = /\_(\~.*)\//gm;

    let jobids = [];
    for (const link of links) {
        console.log("------------------------");
        const href = link.getAttribute("href");
        console.log(href);

        const m = get_regex_groups(href, regex);
        const jobid = m[1];
        jobids.push(jobid);
    }

    return jobids;
}

// https://stackoverflow.com/a/65561572/13090033
function make_api_call (job_id) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            // https://www.upwork.com/ab/proposals/api/v4/job/details/~01192675bad92ef68e
            url: "https://www.upwork.com/ab/proposals/api/v4/job/details/" + job_id,
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(response) {
                const data = JSON.parse(response.responseText);
                resolve(data);
            },
            onerror: function(error) {
                reject(error);
            }
        });
    })
}


async function gather_jobs_data(jobs_ids) {

    const promises = [];
    for (const job_id of jobs_ids) {
        let job_promise = make_api_call(job_id);
        promises.push(job_promise);
    }

    await Promise.all(promises).then((values) => {
        console.log(values);
    });

}