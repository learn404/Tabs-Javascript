function tabs() {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");
    const radioButtons = document.querySelectorAll(".radio-button");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabId = tab.getAttribute("data-tab");
  
        // Hide all tab contents and uncheck all radio buttons
        tabContents.forEach((content) => content.classList.remove("active"));
        radioButtons.forEach((radio) => (radio.checked = false));
  
        // Show the selected tab content and check the corresponding radio button
        document.getElementById(`tab${tabId}-content`).classList.add("active");
        document.getElementById(`tab${tabId}`).checked = true;
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", tabs);
  