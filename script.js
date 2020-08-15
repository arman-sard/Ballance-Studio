// -------------------------- List of equipment -------------------- //

let menuContainer = document.getElementById('Boss');

menuContainer.onclick = function (e) {
    let target = e.target;
    if (target.classList.contains('mainCatalogWrapperItemIcon')) {
        target.classList.toggle('is_active');
    }
};

// -------------------------- SocialNetworksIcons -------------------//

let SocialNetworks = document.getElementById("SocialNetworks");
let h3 = document.getElementById("h3");
let S_N_Icons = document.getElementById("S_N_Icons");

function blackBackground() {
    SocialNetworks.style.backgroundColor = "#000";
    SocialNetworks.style.color = "gray";
    h3.style.fontWeight = "normal";
    S_N_Icons.style.backgroundImage = 'url("/images/SocialNetworkIcons.png")';
}

function whiteBackground() {
    SocialNetworks.style.backgroundColor = "";
    SocialNetworks.style.color = "";
    h3.style.fontWeight = "";
    S_N_Icons.style.backgroundImage = "";
}
