function getCurrentSection() {
    let currentPosition = window.scrollY + window.innerHeight / 2; 
    let sections = document.querySelectorAll('section');
    let currentSection = null;

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;

        if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
            currentSection = section;
        }
    });

    return currentSection;
}

function updateNavigation() {
    let currentSection = getCurrentSection();
    let navLinks = document.querySelectorAll('.navbar-desktop .menu a');

    navLinks.forEach(link => {
        link.classList.remove('actived');
    });

    if (currentSection) {
        let currentLinkId = currentSection.getAttribute('id');
        let currentNavLink = document.querySelector(`.navbar-desktop .menu a[href="#${currentLinkId}"]`);
        if (currentNavLink) {
            currentNavLink.classList.add('actived');
        }
    }
}

let isScrolling = false;

window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        updateNavigation();
    }, 0); 
});
