const jobList = document.getElementById("job-list");
const tagsContainer = document.getElementById("tags-container");

const jobs = [
    {
      
        title: "Senior Frontend Developer",
        company: "Photosnap",
        tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        location: "USA only",
        time: "1d ago",
        type: "Full Time",
    },
    {
       
        title: "Fullstack Developer",
        company: "Manage",
        tags: ["Fullstack", "Midweight", "Python", "React"],
        location: "Remote",
        time: "1d ago",
        type: "Part Time",
    },
    {
       
        title: "Junior Frontend Developer",
        company: "Account",
        tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
        location: "USA only",
        time: "2d ago",
        type: "Part Time",
    },
    {
       
        title: "Software Engineer",
        company: "Loop Studios",
        tags: ["Fullstack", "Midweight", "JavaScript", "Ruby", "Sass"],
        location: "Worldwide",
        time: "1w ago",
        type: "Full Time",
    },
];

let selectedTags = [];


function renderJobs() {
    jobList.innerHTML = "";

    jobs.forEach(job => {

        if (selectedTags.length > 0 && !selectedTags.every(tag => job.tags.includes(tag))) {
            return;
        }

        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <div class="job-header">
                <div class="job-info">
                    <h2>${job.title}</h2>
                    <p>${job.company} - ${job.type}</p>
                    <small>${job.time} • ${job.location}</small>
                </div>
            </div>
            <div class="job-tags">
                ${job.tags.map(tag => `<span onclick="selectTag('${tag}')">${tag}</span>`).join("")}
            </div>
        `;
        jobList.appendChild(jobCard);
    });
}


function selectTag(tag) {
    if (selectedTags.includes(tag)) {       
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        selectedTags.push(tag);
    }
    renderSelectedTags();
    renderJobs();
}
function renderSelectedTags() {
    tagsContainer.innerHTML = "";

    selectedTags.forEach(tag => {
        const tagButton = document.createElement("button");
        tagButton.className = "tag-selected";
        tagButton.innerText = tag;
        tagButton.onclick = () => {
            selectedTags = selectedTags.filter(t => t !== tag);
            renderSelectedTags();
            renderJobs();
        };

        tagsContainer.appendChild(tagButton);
    });
    if (selectedTags.length > 0) {
        const clearButton = document.createElement("button");
        clearButton.className = "tag-clear";
        clearButton.innerText = "Clear All";

        clearButton.onclick = () => {
            selectedTags = [];
            renderSelectedTags();
            renderJobs();
        };

        tagsContainer.appendChild(clearButton);
    }
}
renderJobs();
