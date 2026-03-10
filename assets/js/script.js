/* ============================================================
   SPIRITEL — script.js
   Mobile nav · Sticky header · Smooth scroll · Scroll reveal
   Form validation · Netlify form submission
   ============================================================ */

(function () {
  'use strict';

  // ── DOM refs ──────────────────────────────────────────────
  const header    = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  const form      = document.getElementById('quote-form');
  const formWrap  = document.querySelector('.quote-form-wrap');
  const formSuccess = document.getElementById('form-success');

  // ── Sticky header on scroll ───────────────────────────────
  let lastScroll = 0;

  function handleScroll() {
    const y = window.scrollY;
    if (y > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load

  // ── Mobile nav toggle ─────────────────────────────────────
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
      });
    });

    // Close nav on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (
        navLinks.classList.contains('is-open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Scroll reveal (IntersectionObserver) ──────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-hero, .reveal-hero--delayed');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ── Phone number auto-format ──────────────────────────────
  const phoneInput = document.getElementById('f-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      const digits = this.value.replace(/\D/g, '').slice(0, 10);
      if (digits.length <= 3) {
        this.value = digits;
      } else if (digits.length <= 6) {
        this.value = digits.slice(0, 3) + '-' + digits.slice(3);
      } else {
        this.value = digits.slice(0, 3) + '-' + digits.slice(3, 6) + '-' + digits.slice(6);
      }
    });
  }

  // ── Form validation & submission ──────────────────────────
  if (form) {

    // Validate a single field and show/clear error
    function validateField(field) {
      const errorEl = field.parentElement.querySelector('.field-error');
      let message = '';

      if (field.required && !field.value.trim()) {
        message = 'This field is required.';
      } else if (field.type === 'email' && field.value.trim()) {
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(field.value.trim())) {
          message = 'Please enter a valid email address.';
        }
      } else if (field.tagName === 'SELECT' && field.required && !field.value) {
        message = 'Please select an option.';
      }

      if (errorEl) errorEl.textContent = message;
      field.classList.toggle('is-error', !!message);
      return !message;
    }

    // Validate checkboxes (at least one must be checked)
    function validateCheckboxGroup() {
      const boxes = form.querySelectorAll('input[name="protect"]');
      return Array.from(boxes).some(function (b) { return b.checked; });
    }

    // Live validation on blur
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-error')) validateField(field);
      });
    });

    // Submit handler
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all required fields
      let valid = true;
      inputs.forEach(function (field) {
        if (!validateField(field)) valid = false;
      });

      // Validate checkbox group
      if (!validateCheckboxGroup()) {
        valid = false;
        const legend = form.querySelector('legend');
        if (legend) {
          legend.style.color = '#EF4444';
          setTimeout(function () { legend.style.color = ''; }, 3000);
        }
      }

      if (!valid) {
        // Focus first error
        const firstError = form.querySelector('.is-error');
        if (firstError) firstError.focus();
        return;
      }

      // Submit to Netlify
      const submitBtn = document.getElementById('form-submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Sending…';
      }

      const formData = new FormData(form);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
        .then(function (res) {
          if (res.ok) {
            // Show success state
            form.hidden = true;
            formSuccess.hidden = false;
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').textContent = 'Send My Quote Request';
          }
          alert('Something went wrong. Please try again or email us directly.');
        });
    });
  }

})();
