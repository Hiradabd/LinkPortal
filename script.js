const websites = [
    { name: "Chat GPT", url: "https://chat.openai.com", icon: "images/chatgpt-icon.png", tags: ["کاربردی"] },
    { name: "Google", url: "https://google.com", icon: "images/google-icon.png", tags: ["کاربردی"] },
    { name: "Wikipedia", url: "https://wikipedia.org", icon: "images/wikipedia-icon.png", tags: ["کاربردی"]},
    { name: "Youtube", url: "https://youtube.com", icon: "images/youtube-icon.png", tags: ["تفریحی"] }
];

document.getElementById('search-bar').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = websites.filter(site => site.name.toLowerCase().includes(query));
    displayResults(results, 'search-results');
});

function scrollToTag(tag) {
    document.getElementById(tag).scrollIntoView({ behavior: "smooth" });
}

function displayResults(results, elementId) {
    let resultsDiv = document.getElementById(elementId);
    resultsDiv.innerHTML = '';
    results.forEach(site => {
        let siteDiv = document.createElement('div');
        siteDiv.className = 'site';
        siteDiv.innerHTML = `<a href="${site.url}" target="_blank">
                                <img src="${site.icon}" alt="${site.name} Icon">
                                ${site.name}
                             </a>`;
        resultsDiv.appendChild(siteDiv);
    });
}

// نمایش نتایج تگ‌ها
websites.forEach(site => {
    site.tags.forEach(tag => {
        let tagResultsDiv = document.querySelector(`#${tag} .results`);
        if (tagResultsDiv) {
            let siteDiv = document.createElement('div');
            siteDiv.className = 'site';
            siteDiv.innerHTML = `<a href="${site.url}" target="_blank">
                                    <img src="${site.icon}" alt="${site.name} Icon">
                                    ${site.name}
                                 </a>`;
            tagResultsDiv.appendChild(siteDiv);
        }
    });
});
