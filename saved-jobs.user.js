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

    // Create the button to manually trigger the script
    const button = document.createElement('button');
    button.style = "position:absolute; top:120px; right: 100px; outline:#f90 solid 1px;";
    button.innerHTML = "Parse Jobs";
    button.type = "submit";

    button.onclick = main_routine;
    document.body.appendChild(button);

})();

async function main_routine() {

    const jobs_ids  = get_jobs_ids();
    const jobs_data = await get_jobs_data(jobs_ids);
    console.log(jobs_data);

}



function get_jobs_ids() {
    const links = document.querySelectorAll(".job-tile-title a");
    const regex = /\_(\~.*)\//gm;

    let jobids = [];
    for (const link of links) {
        //console.log("------------------------");
        const href = link.getAttribute("href");
        //console.log(href);

        const m = get_regex_groups(href, regex);
        const jobid = m[1];
        jobids.push(jobid);
    }

    return jobids;
}



async function get_jobs_data(jobs_ids) {

    const jobs_data = [];
    for (const job_id of jobs_ids) {

        const job_data = await get_job_data(job_id);
        //console.log(job_data);
        //console.log("Should end here ----");        

        jobs_data.push(job_data);
    }
    return jobs_data;
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

// https://stackoverflow.com/a/65561572/13090033
function json_get_promise (url) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(response) {

                try {
                    const data = JSON.parse(response.responseText);;
                    resolve(data);
                } catch (error) {
                    reject(JSON.stringify(error))
                }                
            },
            onerror: function(error) {
                reject(JSON.stringify(error));
            }
        });
    })
}

async function get_job_data (job_id) {

    console.log(`get_job_data for ${job_id}`);

    let job_connects, job_bids, job_details = null;

    // Needs to run first to get the job_uid
    job_details = await get_job_promise_details(job_id);
    const job_uid = job_details.jobDetails.opening.job.info.uid;

    // singles to debug
    // job_connects = await get_job_promise_connects(job_id); 
    // job_bids = await get_job_promise_bids(job_uid);

    [job_connects, job_bids] = await Promise.all([
        get_job_promise_connects(job_id),
        get_job_promise_bids(job_uid)
    ]);

    // to-do format
    // the value added to bids is amount + jobsPrice

    if (job_bids.bids.length > 0) {
        //console.log(">>> do be bids <<<");
        job_bids.bids.forEach((part, index) => {
            //console.log(index);
            job_bids.bids[index].amountShown = job_bids.bids[index].amount + job_connects.jobsPrice;
        });
    }

    return {
        "details": job_details,
        "connects": job_connects,
        "bids" : job_bids
    };

}

function get_job_promise_details(job_id) {
    // https://www.upwork.com/ab/proposals/api/v4/job/details/~01192675bad92ef68e
    const api_url = `https://www.upwork.com/ab/proposals/api/v4/job/details/${job_id}`;
    const promise_details = json_get_promise(api_url);
    return promise_details;
}

function get_job_promise_connects(job_id) {

    // https://www.upwork.com/job-details/jobdetails/api/job/~01192675bad92ef68e/connects
    // const api_url = `https://www.upwork.com/job-details/jobdetails/api/job/${job_id}/connects`;


    // https://www.upwork.com/ab/proposals/api/connects/~0198e3c72b6159e473/freelancer/19275890
    const api_url = `https://www.upwork.com/ab/proposals/api/connects/${job_id}/freelancer/19275890`
    const promise_connects = json_get_promise(api_url);
    return promise_connects;

}

function get_job_promise_bids (job_uid) {

    // https://www.upwork.com/ab/proposals/api/v4/application/bids?jobUid=1623369535162777600
    const api_url = `https://www.upwork.com/ab/proposals/api/v4/application/bids?jobUid=${job_uid}`;
    const promise_bids = json_get_promise(api_url);
    return promise_bids;
}


