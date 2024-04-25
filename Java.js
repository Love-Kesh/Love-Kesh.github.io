// Toggle the display for its description when the element is clicked
document.querySelectorAll("dt").forEach(element =>
    {
    element.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("hidden");
    });
});

document.querySelectorAll("dt").forEach(content =>
    {
    content.addEventListener("click", function(event)
    {
        event.preventDefault();
        window.location.href = this.querySelector("dd").getAttribute("href");
    });
});

function toggleAbout()
{
    var aboutDiv = document.getElementById("about");
    if (aboutDiv.style.display === "none")
    {
        aboutDiv.style.display = "block";
    }
    else
    {
        aboutDiv.style.display = "none";
    }
}