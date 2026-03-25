// home.js
window.onload = function () {
  const mybutton = document.getElementById("myBtn");
  const searchForm = document.querySelector("form");
  const searchInput = document.getElementById("searchInput");

  // Show/hide "scroll to top" button
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // Scroll to top function
  window.topFunction = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Search redirect function
  window.searchPages = function () {
    const query = searchInput.value.toLowerCase();

    if (query.includes("about")) {
      window.location.href = "AboutUs.html";
    } else if (query.includes("join") || query.includes("register")) {
      window.location.href = "JoinUs.html";
    } else if (query.includes("awareness") || query.includes("nature")) {
      window.location.href = "Awareness.html";
    } else if (query.includes("why") || query.includes("benefits")) {
      window.location.href = "WhyJogging.html";
    } else if (query.includes("schedule")) {
      window.location.href = "schedule.html";
    } else if (query.includes("challenges")) {
      window.location.href = "challenges.html";
    } else if (query.includes("highlights")) {
      window.location.href = "highlights.html";
    } else if (query.includes("moments")) {
      window.location.href = "moments.html";
    } else if (query.includes("mindfulness")) {
      window.location.href = "mindfulness.html";
    } else if (query.includes("tip")) {
      window.location.href = "tips.html";
    } else if (query.includes("blog")) {
      window.location.href = "blog.html";
    } else if (query.includes("video")) {
      window.location.href = "videos.html";
    } else if (query.includes("photo")) {
      window.location.href = "photo.html";
    } else if (query.includes("faq") || query.includes("contact")) {
      window.location.href = "faq&contacts.html";
    } else if (query.includes("trail") || query.includes("tree")) {
      window.location.href = "trees.html";
    } else if (query.includes("green") || query.includes("route")) {
      window.location.href = "green-routes.html";
    } else if (query.includes("air") || query.includes("jogging")) {
      window.location.href = "air.html";
    } else if (query.includes("weather")) {
      window.location.href = "weathering.html";
    } else if (query.includes("eco") || query.includes("ethic")) {
      window.location.href = "ecoethics.html";
    } else {
      alert("No matching page found.");
    }

    return false; // Prevent form submission
  };
  
  if (searchForm) {
    searchForm.onsubmit = function () {
      return searchPages();
    };
  }
};