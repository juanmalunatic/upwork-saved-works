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

    css_inject();

    // Create the button to manually trigger the script
    const btn_parse = document.createElement('button');
    btn_parse.style = "position:absolute; top:120px; right: 100px; outline:#f90 solid 1px;";
    btn_parse.innerHTML = "Parse Jobs";
    btn_parse.type = "submit";

    // Create an overlay where UI elements may be displayed
    const ui_overlay = ui_overlay_create();

    btn_parse.onclick = () => { main_routine(ui_overlay) };
    document.body.appendChild(btn_parse);

})();


/*
Fetches data and injects the resulting HTML into element_target.
*/
async function main_routine(ui_overlay) {

    //const jobs_ids  = get_jobs_ids();
    //const jobs_data = await get_jobs_data(jobs_ids);
    //const jobs_flat = await jsonata_parse_jobs(jobs_data);
    //console.log(jobs_flat);

    let jobs_flat = `[{"job":{"id":"~01192675bad92ef68e","link":"https://www.upwork.com/jobs/~01192675bad92ef68e","title":"Complex LinkedIn Scraping - find company CEOs who are remote first (US HQ, workers abroad)","description":"STACK: You choose\\n\\nYOU WILL BE DOING: \\nComplex LinkedIn Scraping - find company CEOs who are remote first (US HQ, workers abroad) so that we can contact them on Linkedin, email, etc.\\n\\nWe need an endless list of CEOs and founders who run remote first companies (they have workers who are in many countries and not in the office). \\n\\nInitially we want to find CEOs/founders on LinkedIn who's company is HQ in the USA and have workers in other countries. We want to record how many workers in each country so that when we reach out to the perspective customer we can say, \\"Hey we noticed you have 5 workers in Estonia and 10 workers in France. Those are countries we handle with our software.\\" \\n\\nPrimary Responsibilities: \\n\\nCreate and maintain a codebase or stack that is flexible and allows us to scrape LinkedIn and other websites to find new prospects. \\n\\nHelp determine the structure and logic of the web app.\\n\\nBuild reusable code for future use.\\nOptimize for maximum speed and scalability.\\nMake sure we don't annoy Linkedin!\\n\\nExcellent English verbal communication skills.\\nAbility to work autonomously  \\n\\n\\nGood to have:\\n\\nDegree in computer science or related field.\\nGood problem-solving and logic skills.\\nGood interpersonal skills.\\nUnderstanding of key design principles.\\n\\nAbout Us\\nWe(legaltech/fintech) help businesses to survive and thrive even in the worst economies by increasing worker ownership worldwide. Did you know that today, workers in the US only own 8% of all corporate equity? Our goal is to get that number up to 30% internationally. According to an article from the Harvard Business Review, this will increase the median household wealth by 4X. \\n\\nOur vision is a universe where the most impactful companies will be owned by all of us, not just a few. Our mission is to create a system where every team member feels safe to become a genuine true believer in their company. We do this through cutting-edge, mission-aligned equity that inspires everyone to do the best work of their lives. We make sharing company ownership simple, secure, fair, accessible, and emotionally inspiring with our top-shelf digital legal equity system that helps each stakeholder to see their equity grow in real-time. \\n\\nJoin our team and help us to create a more fair, sustainable, and safer world by making our company the preferred way for companies to split ownership and create alignment in practically any kind of equity, over any geography.\\n\\n\\n\\nWhy work with us?\\nYou will be an important contributor to a company that will change the world for the better.\\nYou will receive high-quality equity that truly delivers on its promise; if the company wins, you win too.\\n\\nOur team embraces diversity and emotional intelligence, with the friendly and supportive work culture.\\n\\nWe help you attain your career goals together with the company's success.\\nFlexibility to work from where you like, you will be in charge of your schedule as a freelancer.\\n\\nIf this is you, please reach out asap. We want to hear from you!\\n","dateCreated":"2023-02-08T08:44:48.406Z","dateChecked":"2023-02-10T08:06:16.036Z","devsApplied":3,"devsHired":0,"devsInterviewing":0,"devsInvited":0,"devsUnanswered":0,"budgetType":"hourly","budgetValue":"$11.5","connects":6,"connectsBid":0,"clientName":"Upstock","clientEmployees":"10","clientCountry":"United States","clientPayverified":true,"clientScore":4.9,"clientSpent":"$75620.07","clientRateAvg":"$24"}},{"job":{"id":"~0198e3c72b6159e473","link":"https://www.upwork.com/jobs/~0198e3c72b6159e473","title":"Create GIANT search bar for Wordpress Viral News Sites","description":"We are looking to create a search bar in the site that highly encourages users to use the search function.\\nhttps://www.seekr.com/ is an example.\\nI'd like to integrate a giant search bar that floats as the lower header bar or a floating bar?\\n\\nPlease tell me how we can add this functionality and provide a highly engaging search box to the following 10 sites.\\n\\noneonlineusa.com\\nall-search-center.com\\neasysearchinc.com\\nfindsearch.org\\nsaless.org\\nsearching-inc.com\\nsearchingdeal.com\\nsearchingidea.com\\nsearchtech.org\\nwebdigitalmarketingusa.com\\n\\n\\n","dateCreated":"2023-02-08T17:13:52.817Z","dateChecked":"2023-02-09T19:08:18.613Z","devsApplied":20,"devsHired":0,"devsInterviewing":2,"devsInvited":0,"devsUnanswered":0,"budgetType":"none","budgetValue":"$none","connects":1,"connectsBid":13,"clientName":"Xwebseo Com","clientEmployees":null,"clientCountry":"United States","clientPayverified":true,"clientScore":5,"clientSpent":"$1855","clientRateAvg":"$0"}},{"job":{"id":"~01b563c2e7927640ce","link":"https://www.upwork.com/jobs/~01b563c2e7927640ce","title":"WordPress Stylish Calculator Expert","description":"I am looking for someone who has WordPress Stylish Calculator with GPL license that can be found at the link below:\\nhttps://stylishcostcalculator.com/templates/web-developer-calculator/?utm_source=scc-wordpress-readme&utm_medium=check-templates\\n\\nI need same layout, with floating sidebar and total. Please go through the estimate and at the end you will notice that customer can Download and Print and Email this quote. We don't want paypal or stripe functionality at all.\\n\\nSome layout changes such as color code, adding more categories and services etc. \\n\\nQuick turnaround needed, and ready to award the contract to the first legitimate freelancer.","dateCreated":"2023-02-08T13:52:21.021Z","dateChecked":"2023-02-08T15:44:05.449Z","devsApplied":5,"devsHired":0,"devsInterviewing":1,"devsInvited":1,"devsUnanswered":0,"budgetType":"fixed","budgetValue":"$10","connects":2,"connectsBid":7,"clientName":"Rich Mulder","clientEmployees":"2","clientCountry":"United States","clientPayverified":true,"clientScore":5,"clientSpent":"$685.25","clientRateAvg":"$0"}},{"job":{"id":"~0127de9d9175f5862a","link":"https://www.upwork.com/jobs/~0127de9d9175f5862a","title":"Build Website Calculator for Pricing Table","description":"I've got a service that needs a three column pricing/comparison table to display on our Wordpress site, and it needs a calculator at the top that will update the numbers in the columns.\\n\\nI have seen Calconic and Calculoid make tools like this, but this is more complex than one I can make myself.\\n\\nAttached is the visual example of what I'd like this to look like. The hard part for me is programming the numbers that will display with the different variables.\\n\\nWhat I'd plan on doing is providing you a data set for what numbers/amounts should be shown with each different selection combination, and then hope that you are able to program accordingly.","dateCreated":"2023-02-08T17:01:41.056Z","dateChecked":"2023-02-10T13:10:02.718Z","devsApplied":6,"devsHired":2,"devsInterviewing":1,"devsInvited":8,"devsUnanswered":3,"budgetType":"hourly","budgetValue":"$17.5","connects":2,"connectsBid":13,"clientName":"event1013","clientEmployees":"2","clientCountry":"United States","clientPayverified":true,"clientScore":5,"clientSpent":"$2150.83","clientRateAvg":"$13"}}]`;
    jobs_flat = JSON.parse(jobs_flat);
    ui_overlay_populate(ui_overlay, jobs_flat);
    show(ui_overlay);
    
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
    //let i=0;
    for (const job_id of jobs_ids) {
        const job_data = await get_job_data(job_id);
        jobs_data.push(job_data);
        
        //if(i==3) return jobs_data;
        //i++;
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


async function jsonata_parse_jobs(jobs_data) {
    
    const jsonataRules = '$.(  $details  := details; $connects := connects; $bids     := bids; $clientAct := $details.jobDetails.opening.job.clientActivity; $id := $details.jobDetails.opening.job.info.ciphertext; $budgetType := $details.jobDetails.opening.job.extendedBudgetInfo.hourlyBudgetType; $budgetType := ($budgetType = 1) ? "hourly" : $budgetType; $budgetType := ($budgetType != "hourly") ? $details.jobDetails.opening.job.budget.amount : $budgetType; $budgetType := ($budgetType = 0) ? "none" : $budgetType; $budgetType := ($type($budgetType) = "number") ? "fixed" : $budgetType;  $hourlyMin := $details.jobDetails.opening.job.extendedBudgetInfo.hourlyBudgetMin; $hourlyMax := $details.jobDetails.opening.job.extendedBudgetInfo.hourlyBudgetMax;  $forceNumber := function($input) { ($type($input) != "number") ? 0 : $input };  $hourlyMin := $forceNumber($hourlyMin); $hourlyMax := $forceNumber($hourlyMax);  $hourlyAvg := $average([$hourlyMin, $hourlyMax]);  $budgetValue := "none"; $budgetValue := ($budgetType = "hourly") ? $hourlyAvg : $budgetValue; $budgetValue := ($budgetType = "fixed") ? $details.jobDetails.opening.job.budget.amount : $budgetValue; $budgetDebug := [$details.jobDetails.opening.job.budget, $details.jobDetails.opening.job.extendedBudgetInfo]; $maxbid := $max($bids.bids.amountShown); $maxbid := $exists($maxbid) ? $maxbid : 0; $clientAvgRate := $details.jobDetails.buyer.info.avgHourlyJobsRate.amount; $clientAvgRate := $exists($clientAvgRate) ? $clientAvgRate : 0; $clientAvgRate := "$" & $round($clientAvgRate, 0); { "job" : { "id": $id, "link": "https://www.upwork.com/jobs/" & $id, "title": $details.jobDetails.opening.job.info.title, "description": $details.jobDetails.opening.job.description, "dateCreated": $details.jobDetails.opening.job.info.createdOn, "dateChecked": $details.jobDetails.opening.job.clientActivity.lastBuyerActivity, "devsApplied": $details.jobDetails.opening.job.clientActivity.totalApplicants, "devsHired": $details.jobDetails.opening.job.clientActivity.totalHired, "devsInterviewing": $details.jobDetails.opening.job.clientActivity.totalInvitedToInterview, "devsInvited": $details.jobDetails.opening.job.clientActivity.invitationsSent, "devsUnanswered": $details.jobDetails.opening.job.clientActivity.unansweredInvites, "budgetType": $budgetType, "budgetValue" : "$" & $budgetValue, "connects": $connects.jobsPrice, "connectsBid":  $maxbid, "clientName" : $details.jobDetails.buyer.info.company.name, "clientEmployees" : $details.jobDetails.buyer.info.company.profile.size, "clientCountry" : $details.jobDetails.buyer.info.location.country, "clientPayverified": $details.jobDetails.buyer.isPaymentMethodVerified, "clientScore": $round($details.jobDetails.buyer.info.stats.score, 1), "clientSpent": "$" & $details.jobDetails.buyer.info.stats.totalCharges.amount, "clientRateAvg": $clientAvgRate } } )';
    var result = await jsonata(jsonataRules).evaluate(jobs_data);
    return result;

}


/* UI functions */

function hide(element) {
    if (typeof element.style === 'undefined') {
        element.style = {};
    }
    element.style.display = "none";
}

function show(element) {
    if (typeof element.style === 'undefined') {
        element.style = {};
    }
    element.style.display = "block";
}

function ui_overlay_create() {
    const overlay = document.createElement('div');
    overlay.style = `
      width: 80%; height: 400px;
      z-index:1000; position:absolute; right: 0; left: 0; top:20px;
      margin: 0 auto;
      background: rgba(255,255,255,0.8);
      border-radius: 12px; border: #000 solid 1px;
      padding: 30px;
    `;
    overlay.id = "overlay";
    hide(overlay);

    // btnClose
    const btnClose = document.createElement("button");
    btnClose.innerHTML = "x";
    btnClose.style = "border: #777 solid 1px; border-radius: 40%; position: absolute; right: 10px; top:10px;";
    btnClose.type = "button";
    btnClose.onclick = () => { hide(overlay) };

    // btnClipboard
    const btnCpy = document.createElement("button");
    btnCpy.innerHTML = "📋 Copy to clipboard";
    btnCpy.style ="border: #069 solid 1px; position: absolute; top:0; left:0";
    btnCpy.type = "button";
    btnCpy.onclick = async () => { await copy_table_to_clipboard() };


    // DOM
    overlay.appendChild(btnClose);
    overlay.appendChild(btnCpy);
    document.body.appendChild(overlay);
    return overlay;
}

function ui_overlay_populate(ui_overlay, jobs_flat) {

    // remove existing tables
    try {
        ui_overlay.querySelector("#juan_table").remove();
    } catch (e) {
        // do nothing on failure
    }

    // create table
    const table = document.createElement("table");
    table.id = "juan_table";

    // take keys from first object
    const keys = Object.keys(jobs_flat[0].job);

    // header
    const row_header = document.createElement("tr");

    for (const key of keys) {
        const col_header = document.createElement("th");
        col_header.innerHTML = key;
        row_header.appendChild(col_header);
    }

    table.appendChild(row_header);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    
    for(const job of jobs_flat) {
        const row  = document.createElement("tr");
        for (const key of keys) {
            const col = document.createElement("td");
            col.innerHTML = job.job[key];
            row.appendChild(col);
        }        
        tbody.appendChild(row);
    }
    ui_overlay.appendChild(table);

}

function css_inject(){

    const stylesheet = document.createElement("style");
    stylesheet.innerHTML = `
        td
        {
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        table#juan_table
        {
            width: 100%;
            display: block;
            overflow-x: auto;
        }
    `;
    document.body.appendChild(stylesheet);
}

async function copy_table_to_clipboard()
{
    const tbody = document.querySelector('#juan_table tbody');
    selectNode(tbody);
    document.execCommand('copy')

    //copying the text once is not enough, somehow tabs are not recognized by sheets
    //but if we reread and restore, then it works. Nice (?).
    navigator.clipboard.writeText(await navigator.clipboard.readText());
}

function selectNode(node) {
    let range = document.createRange();
    range.selectNodeContents(node)
    let select = window.getSelection()
    select.removeAllRanges()
    select.addRange(range)
  }