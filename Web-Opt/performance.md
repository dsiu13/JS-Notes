# Performance
- Get Request
- Server gets info and returns it
- The browser then displays

## Three Keys to Performance
- Improve Client Side(Critical Render Path, Optimized Code, Progressive Web App)
- Improve Transfer of files/Network Latency (Minimize Files, Minimize Delivery)
- Backend Processing (CDNs, Caching, Load Balancing, GZIP, DB Scaling)

## Frontend
### Critical Render Path
 1.DOM(html) => (2.CSS, 3.JS) CSSOM => (DOMContentLoaded) Render Tree => Layout => Paint
- Want to load CSS files as soon as possible, and JS as late as possible with exceptions.
- CSS is rendering block, we need it to finish before we can get our Render Tree
- Only load what is needed for css, above the fold loading, Media attributes, and Less specificity
- Above the fold loading, create a JS function to load the css. use window onload

## Network Performance
- Reducing file sizes(Html,JS,CSS). Minimize Text and Images. (Uglifyjs)
- Reducing Images sizes (SVG, JPG, GIF, PNG)
- JPG usually used for photos, images, Complex images with many colors. Not used for transparent background.
- GIFS, color limit
- PNG color limit, used for logos, can be transparent
- SVG, simplistic visual things.
- CSS is rendering block, we need it to finish before we can get our Render Tree
- Only load what is needed for css, above the fold loading, Media attributes, and Less specificity

### General Rules for image optimization
1. Transparency? - PNG
2. Animation? - GIFS
3. Colorful detailed imgs? - JPG
4. Simple Icons/Logos, or Illustrations - SVG
5. Reduce PNG with TinyPNG
6. Reduce JPG with JPEG-optimizer
7. Simple Illustrations over over highly detailed photos
8. Lower JPEG img quality (30%-60%)
9. Resize images based on its display size
10. Use different sized images for different backgrounds
11. Use CDNs like Imigx
12. Remove image metadata - verexif

## Backend
