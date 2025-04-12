# Plumbing Company Website Template

A modern, responsive, and animated website template designed specifically for plumbing businesses. Built with clean HTML, CSS (including CSS Variables for easy theming), and vanilla JavaScript for animations and interactivity.

---

## ✨ Features

*   **Slick & Unique Design:** Modern aesthetics with unique touches like slanted section dividers.
*   **Responsive Layout:** Adapts seamlessly to desktops, tablets, and mobile devices using Flexbox and Grid.
*   **Scroll Animations:** Subtle fade-in and slide-in animations triggered on scroll (using Intersection Observer API for performance).
*   **Interactive Elements:** Hover effects on buttons, service cards, etc.
*   **CSS Variables:** Easily customize primary colors, fonts, and more.
*   **Smooth Scrolling:** For navigation links within the page.
*   **Image Placeholders:** Clear guidance on the types and sizes of images needed.
*   **Contact Form Structure:** Basic HTML structure for a contact form (requires backend/service for actual submission).
*   **Mobile Navigation:** Includes a functional toggle menu for smaller screens.
*   **SEO Friendly:** Basic meta description included.
  
---

## 🛠️ Tech Stack

*   **HTML5:** Semantic structure.
*   **CSS3:** Styling, Layout (Flexbox, Grid), Animations, CSS Variables.
*   **JavaScript (ES6+):** DOM Manipulation, Intersection Observer API for scroll animations, Mobile Menu Toggle, Smooth Scrolling.
*   **(Optional) Font Awesome:** Can be easily integrated for icons (link included but commented out in `index.html`).

---

## 📁 Folder Structure
plumbing-website/
├── index.html # Main HTML file
├── css/
│ └── style.css # All CSS styles
├── js/
│ └── script.js # All JavaScript code
├── images/ # Placeholder for all website images
│ ├── logo.png
│ ├── hero-bg.jpg
│ ├── about-us-image.jpg
│ ├── service-icon-1.svg
│ ├── service-icon-2.svg
│ ├── service-icon-3.svg
│ ├── service-icon-4.svg
│ ├── testimonial-avatar-1.jpg
│ ├── testimonial-avatar-2.jpg
│ └── plumber-working.jpg
└── README.md # This file

---

## ⚙️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
    *(Replace `your-username/your-repo-name` with your actual GitHub repository details)*
    *   Alternatively, download the repository as a ZIP file.

2.  **Navigate to the project directory:**
    ```bash
    cd plumbing-website
    ```

3.  **Open `index.html`:**
    Simply open the `index.html` file in your preferred web browser. No build steps or local server are strictly required to view the basic template.

---

## 🎨 Customization

1.  **Content:**
    *   Edit `index.html` to change text content, company name, phone numbers, address, service details, testimonials, etc.
    *   Look for placeholder text like `[Year]`, `(123) 456-7890`, etc.

2.  **Styling (Colors, Fonts):**
    *   Open `css/style.css`.
    *   Modify the CSS variables defined within the `:root` block at the top of the file to easily change the primary color (`--primary-color`), accent color (`--accent-color`), fonts (`--font-family`), etc., throughout the site.

3.  **Images:**
    *   Replace the placeholder images in the `images/` folder with your own.
    *   Refer to the comments in `index.html` and the folder structure list above for suggested image types and dimensions.
    *   **Recommended Sources:** Unsplash, Pexels (for photos), Flaticon, Font Awesome (for icons).
    *   **Optimization:** Ensure your images are optimized for the web (use tools like TinyPNG or Squoosh).

4.  **Google Maps:**
    *   Go to Google Maps, find your business location.
    *   Click "Share" -> "Embed a map".
    *   Copy the HTML `<iframe>` code provided.
    *   Paste this code into the `.map-container` div within the Contact section (`#contact`) in `index.html`, replacing the placeholder `<iframe>`.

5.  **Contact Form:**
    *   The provided form in `index.html` is front-end only. To receive submissions, you'll need to:
        *   Add server-side code (PHP, Node.js, Python, etc.) to process the form data.
        *   OR use a third-party form service like Netlify Forms, Formspree, Getform, etc. Update the `<form>` tag's `action` and `method` attributes accordingly.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues of the page.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 🙏 Acknowledgements (Optional)

*   [Google Fonts](https://fonts.google.com/)
*   [Placeholder image sources (e.g., Unsplash)](https://unsplash.com/)
*   Inspiration Source (if any)
