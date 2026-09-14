const componentLoads = [
    ["component-navbar", "components/navbar.html"],
    ["component-footer", "components/footer.html"]
].map(async ([componentId, componentPath]) => {
    const container = document.getElementById(componentId);

    if (!container) {
        return;
    }

    const response = await fetch(componentPath);
    container.innerHTML = await response.text();
});

Promise.allSettled(componentLoads).then(() => {
    lucide.createIcons();
});