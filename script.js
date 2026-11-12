document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skillsContainer");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const themeToggleBtn = document.getElementById("togglemonbtn");

  let currentCategory = "All";



      function getW3SchoolsUrl(skillName) {
        let cleanSkill = skillName.toLowerCase().trim();


        const w3Map = {
        "html": "https://www.w3schools.com/html/default.asp",
        "css": "https://www.w3schools.com/css/default.asp",
        "javascript": "https://www.w3schools.com/js/default.asp",
        "sql": "https://www.w3schools.com/sql/default.asp",
        "python": "https://www.w3schools.com/python/default.asp",
        "java": "https://www.w3schools.com/java/default.asp",
        "php": "https://www.w3schools.com/php/default.asp",
        "c": "https://www.w3schools.com/c/index.php",
        "c++": "https://www.w3schools.com/cpp/default.asp",
        "c#": "https://www.w3schools.com/cs/default.asp",
        "aws": "https://www.w3schools.com/aws/index.php",
        "w3.css": "https://www.w3schools.com/w3css/default.asp",
        "how to": "https://www.w3schools.com/howto/default.asp",
        "bootstrap": "https://www.w3schools.com/bootstrap5/bootstrap_get_started.asp",

      
        "html5": "https://www.w3schools.com/html/default.asp",
        "css3": "https://www.w3schools.com/css/default.asp",
        "js": "https://www.w3schools.com/js/default.asp",
        "react.js": "https://www.w3schools.com/react/default.asp",
        "jquery": "https://www.w3schools.com/jquery/default.asp",
        "typescript": "https://www.w3schools.com/typescript/index.php",
        "vue.js": "https://www.w3schools.com/vue/index.php",
        "next.js": "https://www.w3schools.com/react/react_nex_js.asp",
        "tailwind css": "https://www.w3schools.com/tailwind/index.php",
        "sass": "https://www.w3schools.com/sass/default.php",
        "node.js": "https://www.w3schools.com/nodejs/default.asp",
        "express.js": "https://www.w3schools.com/nodejs/nodejs_express.asp",
        "mysql": "https://www.w3schools.com/mysql/default.asp",
        "mongodb": "https://www.w3schools.com/mongodb/index.php",
        "postgresql": "https://www.w3schools.com/postgresql/index.php",
        "django": "https://www.w3schools.com/django/index.php",
        "firebase": "https://www.w3schools.com/firebase/index.php",
        "asp.net": "https://www.w3schools.com/asp/default.asp",
        "json": "https://www.w3schools.com/js/js_json_intro.asp",
        "xml": "https://www.w3schools.com/xml/default.asp",

        "r": "https://www.w3schools.com/r/default.asp",
        "go": "https://www.w3schools.com/go/index.php",
        "kotlin": "https://www.w3schools.com/kotlin/index.php",
        "swift": "https://www.w3schools.com/swift/index.php",
        "rust": "https://www.w3schools.com/rust/index.php",
        "numpy": "https://www.w3schools.com/python/numpy/default.asp",
        "pandas": "https://www.w3schools.com/python/pandas/default.asp",
        "scipy": "https://www.w3schools.com/python/scipy/index.php",
        "statistics": "https://www.w3schools.com/statistics/index.php",
        "excel & google sheets": "https://www.w3schools.com/excel/index.php",

        "git / github": "https://www.w3schools.com/git/default.asp",
        "cyber security": "https://www.w3schools.com/cybersecurity/index.php",
        "artificial intelligence (ai)": "https://www.w3schools.com/ai/default.asp",
        "machine learning": "https://www.w3schools.com/python/python_ml.asp",
        "data analytics": "https://www.w3schools.com/dataanalytics/index.php",
        "ethical hacking": "https://www.w3schools.com/cybersecurity/index.php",
        "java programming": "https://www.w3schools.com/java/default.asp",
        "java": "https://www.w3schools.com/java/default.asp",
        "advanced excel": "https://www.w3schools.com/excel/index.php",
        "dsa": "https://www.w3schools.com/dsa/index.php",
        

    };

  
    if (w3Map[cleanSkill]) {
      return w3Map[cleanSkill];
    }

   
    return `https://www.google.com/search?q=site:w3schools.com+${encodeURIComponent(skillName)}`;
  }


  themeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      themeToggleBtn.textContent = "☀️  Mode";
      themeToggleBtn.classList.replace("btn-outline-secondary", "btn-outline-warning");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      themeToggleBtn.textContent = "🌙  Mode";
      themeToggleBtn.classList.replace("btn-outline-warning", "btn-outline-secondary");
    }
  });

  function displaySkills(filterText = "", category = "All") {
    container.innerHTML = "";

    const query = filterText.toLowerCase().trim();

    const filtered = skillsData.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(query);
      const matchesCategory = category === "All" || skill.category === category;
      return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-muted text-center small mt-4">No skills found matching your search.</p>`;
      return;
    }

    filtered.forEach(skill => {
      let sourcesHtml = skill.sources.map(s => 
        `<a href="${s.url}" target="_blank" class="badge bg-${s.type.includes('Free') ? 'success' : 'warning'} text-decoration-none me-1 mb-1">${s.name} (${s.type})</a>`
      ).join('');

      let q = encodeURIComponent(skill.name);
      
     
      let w3SchoolsUrl = getW3SchoolsUrl(skill.name);

      let searchBadges = `
        <div class="mt-2 pt-2 border-top">
          <small class="text-muted fw-bold d-block mb-1">Search Skill On Web:</small>
          <div class="d-flex flex-wrap gap-1">
            <a href="https://www.youtube.com/results?search_query=${q}+tutorial" target="_blank" class="badge bg-danger text-decoration-none">📺 YouTube</a>
            <a href="https://www.google.com/search?q=${q}+free+course" target="_blank" class="badge bg-primary text-decoration-none">🌐 Google</a>
            <a href="https://www.coursera.org/search?query=${q}" target="_blank" class="badge bg-info text-dark text-decoration-none">🎓 Coursera</a>
            <a href="https://www.udemy.com/courses/search/?q=${q}" target="_blank" class="badge bg-dark text-decoration-none">🥷 Udemy</a>
            <a href="https://github.com/search?q=${q}" target="_blank" class="badge bg-secondary text-decoration-none">🐙 GitHub</a>
            <a href="https://www.freecodecamp.org/news/search/?query=${q}" target="_blank" class="badge bg-warning text-dark text-decoration-none">🔥 freeCodeCamp</a>
            <a href="https://stackoverflow.com/search?q=${q}" target="_blank" class="badge bg-green text-dark  text-decoration-none">💻 StackOverflow</a>
            <a href="${w3SchoolsUrl}" target="_blank" class="badge bg-success text-decoration-none">📘 W3Schools</a>
            <a href="https://medium.com/search?q=${q}" target="_blank" class="badge bg-dark text-decoration-none">✍️ Medium</a>
            <a href="https://www.reddit.com/search/?q=${q}" target="_blank" class="badge bg-danger text-decoration-none">💬 Reddit</a>
          </div>
        </div>
      `;

      const card = document.createElement("div");
      card.className = "card p-3 shadow-sm mb-2";
      card.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="mb-1 fw-bold text-dark">${skill.name}</h6>
          <span class="badge badge bg-dark"> 💡${skill.level}</span>
        </div>
        <p class="small text-muted mb-2">Category: <span class="fw-semibold">${skill.category}</span></p>
        <div class="mb-1">${sourcesHtml}</div>
        ${searchBadges}
      `;
      container.appendChild(card);
    });
  }

  
  searchInput.addEventListener("input", (e) => {
    displaySkills(e.target.value, currentCategory);
  });


  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      currentCategory = e.target.getAttribute("data-category");
      displaySkills(searchInput.value, currentCategory);
    });
  });

  
  displaySkills();
});