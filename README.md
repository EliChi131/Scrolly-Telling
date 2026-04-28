# Museum of the Electric Guitar - Scrolly Telling Edition

A scrolly-telling website exploring the fascinating history and evolution of the electric guitar, from its experimental origins in the 1920s to the digital revolution of today.

## Project Structure

```
Scrolly-Telling/
├── index.html           # Main HTML file with museum content
├── css/
│   └── style.css        # Dark museum aesthetic with scroll animations
├── js/
│   └── script.js        # Intersection Observer for scroll effects
├── assets/              # Folder for guitar images and media
└── README.md            # This file
```

## Features

- **Scrolly-Telling Layout**: Experience the museum as a continuous narrative by scrolling
- **Seven Historical Eras**: 
  - 1920s–1930s: Origins and the need for volume
  - 1931–1932: Rickenbacker "Frying Pan" breakthrough
  - Early 1940s: Les Paul's "Log" prototype
  - 1950s: The golden era of Fender and Gibson
  - 1960s–1980s: Cultural explosion with iconic players
  - 1960s–Present: Technology expansion
  - 1990s–Present: Modern digital era
- **Sticky Visuals**: Images stay anchored while text scrolls
- **Smooth Animations**: Content fades and slides in as you scroll
- **Dark Museum Aesthetic**: Sophisticated dark theme with gold accents
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile

## Getting Started

1. Open `index.html` in your web browser
2. Scroll through the history of the electric guitar
3. Customize the content in `index.html`
4. Add your guitar images to the `assets/` folder
5. Modify colors and styling in `css/style.css`

## Customization

### Adding Images
1. Place guitar/music images in the `assets/` folder
2. Update the `src` attributes in `index.html` with your image paths
3. The images will automatically fit the sticky visual panels

### Changing Colors
The color scheme is defined in CSS custom properties at the top of `style.css`:
```css
--bg-page: #1f2328;          /* Dark background */
--text-strong: #f0e7d8;      /* Light text */
--label: #d2b06c;            /* Gold accents */
--border-soft: #8f7446;      /* Subtle borders */
```

### Adding More Eras
1. Duplicate a `<section class="scroll-section">` block in `index.html`
2. Update the era label, title, and content
3. Toggle the `alternate` class on alternating sections for left-right layout
4. The scroll animations will automatically apply

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Grid, Flexbox, Animations, Backdrop Filters
- **JavaScript**: Intersection Observer API for scroll triggers
- **Google Fonts**: Fraunces (display) and Manrope (UI)

## Design Highlights

- **Parallax Header**: Hero section responds to scroll position
- **Intersection Observer**: Efficient scroll-based animations
- **Alternating Layout**: Left-right-left layout for visual interest
- **Sticky Visuals**: Images remain visible while text scrolls
- **Responsive Grid**: Automatically adapts to screen size

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Requires JavaScript for animations.

## License

Educational project - Feel free to modify and use as needed!

---

*Created for IS117 at NJIT*