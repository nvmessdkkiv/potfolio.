/**
 * Portfolio JavaScript for Tharshini K
 * Handles mobile drawer, smooth navigation, safe scroll animations,
 * email clipboard copying, and mailto form integration.
 * Zero external dependencies. Guaranteed text visibility.
 */

(function () {
  'use strict';

  // 1. Mark JavaScript as enabled for progressive enhancements
  document.documentElement.classList.add('js-enabled');

  // Cache DOM references
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const navBackdrop = document.getElementById('nav-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailText = 'tharshinikrt07@gmail.com';
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const currentYearSpan = document.getElementById('current-year');
  const backToTopBtn = document.getElementById('back-to-top');

  let toastTimeout = null;

  // 2. Set Current Year in Footer dynamically
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. Mobile Navigation Drawer Controls
  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('is-open');
    if (navBackdrop) navBackdrop.classList.add('is-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'true');
    }
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    if (navBackdrop) navBackdrop.classList.remove('is-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = mobileNav && mobileNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close drawer when any mobile nav link is clicked
  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });

  // Close drawer on ESC key
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  // 4. Navbar Sticky Shadow on Scroll
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // 5. Active Link Highlighting (Scrollspy)
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileNavLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  // 6. Safe Progressive Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });

    // CRITICAL DEPLOYMENT SAFEGUARD:
    // Failsafe timer ensures all content is guaranteed visible after 1200ms
    // even if IntersectionObserver fails to trigger or device scrolls fast.
    setTimeout(function () {
      revealElements.forEach(function (element) {
        if (!element.classList.contains('is-revealed')) {
          element.classList.add('is-revealed');
        }
      });
    }, 1200);
  } else {
    // If IntersectionObserver is not supported or user prefers reduced motion
    revealElements.forEach(function (element) {
      element.classList.add('is-revealed');
    });
  }

  // 7. Toast Notification Handler
  function showToast(message) {
    if (!toast) return;
    if (toastMessage) {
      toastMessage.textContent = message;
    }
    toast.classList.add('is-active');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(function () {
      toast.classList.remove('is-active');
    }, 3500);
  }

  // 8. Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(emailText)
          .then(function () {
            showToast('Email address copied to clipboard!');
          })
          .catch(function () {
            fallbackCopyText(emailText);
          });
      } else {
        fallbackCopyText(emailText);
      }
    });
  }

  function fallbackCopyText(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Email address copied to clipboard!');
    } catch (err) {
      showToast('Please copy: ' + text);
    }
    document.body.removeChild(tempInput);
  }

  // 9. Contact Form Mailto Integration with Input Validation
  if (contactForm) {
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const subjectInput = document.getElementById('message-subject');
    const messageInput = document.getElementById('message-body');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).trim());
    }

    function clearErrors() {
      [nameInput, emailInput, subjectInput, messageInput].forEach(function (input) {
        if (input) input.classList.remove('has-error');
      });
      [nameError, emailError, subjectError, messageError].forEach(function (err) {
        if (err) err.classList.remove('is-visible');
      });
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name) {
        if (nameInput) nameInput.classList.add('has-error');
        if (nameError) nameError.classList.add('is-visible');
        isValid = false;
      }

      if (!email || !validateEmail(email)) {
        if (emailInput) emailInput.classList.add('has-error');
        if (emailError) emailError.classList.add('is-visible');
        isValid = false;
      }

      if (!subject) {
        if (subjectInput) subjectInput.classList.add('has-error');
        if (subjectError) subjectError.classList.add('is-visible');
        isValid = false;
      }

      if (!message) {
        if (messageInput) messageInput.classList.add('has-error');
        if (messageError) messageError.classList.add('is-visible');
        isValid = false;
      }

      if (!isValid) {
        // Focus first invalid element
        const firstError = contactForm.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }

      // Build structured email body
      const mailSubject = `[Portfolio Inquiry] ${subject}`;
      const mailBody = `Hello Tharshini,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent from your personal portfolio website (tharshini-k.vercel.app)`;

      // Construct mailto URI
      const mailtoUri = `mailto:${emailText}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      showToast('Opening your email application...');

      // Give toast time to show, then launch mail client
      setTimeout(function () {
        window.location.href = mailtoUri;
      }, 300);
    });

    // Real-time error removal on user typing
    [nameInput, emailInput, subjectInput, messageInput].forEach(function (input) {
      if (!input) return;
      input.addEventListener('input', function () {
        if (input.classList.contains('has-error')) {
          input.classList.remove('has-error');
          const errorSpan = input.closest('.form-group').querySelector('.field-error');
          if (errorSpan) errorSpan.classList.remove('is-visible');
        }
      });
    });
  }

  // 10. Smooth Back to Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  console.log('Tharshini K Portfolio initialized successfully.');
})();
