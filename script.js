// Main JavaScript for animations and interactions

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    const menuIcon = mobileMenuButton.querySelector('i');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
}

// Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form validation logic here
        console.log('Form submitted');
    });
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-pink-500', 'font-bold');
    }
});

// Account dropdown toggle
const accountDropdownButton = document.getElementById('account-dropdown-button');
const accountDropdownMenu = document.getElementById('account-dropdown-menu');

if (accountDropdownButton && accountDropdownMenu) {
    accountDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        accountDropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!accountDropdownButton.contains(e.target) && !accountDropdownMenu.contains(e.target)) {
            accountDropdownMenu.classList.add('hidden');
        }
    });

    // Close dropdown when clicking on a link
    accountDropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            accountDropdownMenu.classList.add('hidden');
        });
    });
}

// Mobile account menu toggle
const mobileAccountButton = document.getElementById('mobile-account-button');
const mobileAccountMenu = document.getElementById('mobile-account-menu');

if (mobileAccountButton && mobileAccountMenu) {
    mobileAccountButton.addEventListener('click', () => {
        mobileAccountMenu.classList.toggle('hidden');
        const icon = mobileAccountButton.querySelector('i');
        if (mobileAccountMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
}

// Home dropdown toggle
const homeDropdownButton = document.getElementById('home-dropdown-button');
const homeDropdownMenu = document.getElementById('home-dropdown-menu');

if (homeDropdownButton && homeDropdownMenu) {
    homeDropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        homeDropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!homeDropdownButton.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
            homeDropdownMenu.classList.add('hidden');
        }
    });

    // Close dropdown when clicking on a link
    homeDropdownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            homeDropdownMenu.classList.add('hidden');
        });
    });
}

// Mobile home menu toggle
const mobileHomeButton = document.getElementById('mobile-home-button');
const mobileHomeMenu = document.getElementById('mobile-home-menu');

if (mobileHomeButton && mobileHomeMenu) {
    mobileHomeButton.addEventListener('click', () => {
        mobileHomeMenu.classList.toggle('hidden');
        const icon = mobileHomeButton.querySelector('i');
        if (mobileHomeMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
}


