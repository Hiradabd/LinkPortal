const websites = [
    { name: "چت جی پی تی", url: "https://chat.openai.com", tags: ["کاربردی"] },
    { name: "گوگل", url: "https://google.com", tags: ["کاربردی"] },
    { name: "یوتیوب", url: "https://youtube.com", tags: ["تفریحی"] }
];

document.getElementById('search-bar').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let results = websites.filter(site => site.name.toLowerCase().includes(query));
    displayResults(results, 'search-results');
});

function showTag(tag) {
    let results = websites.filter(site => site.tags.includes(tag));
    displayResults(results, 'tag-results');
}

function displayResults(results, elementId) {
    let resultsDiv = document.getElementById(elementId);
    resultsDiv.innerHTML = '';
    results.forEach(site => {
        let siteDiv = document.createElement('div');
        siteDiv.className = 'site';
        siteDiv.innerHTML = `<a href="${site.url}" target="_blank">${site.name}</a>`;
        resultsDiv.appendChild(siteDiv);
    });
}