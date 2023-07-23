function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var contactBtn = document.getElementById("contactBtn");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    memberBtn.style.backgroundColor = "#f8f9fa";
    skillsBtn.style.backgroundColor = "#e9ecef";
    contactBtn.style.backgroundColor = "#e9ecef";
}