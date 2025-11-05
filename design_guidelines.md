# Design Guidelines for Vineet's Portfolio Website

## Design Approach
**Vibrant & Energetic**: Bold, modern portfolio aesthetic with high-energy colors and dynamic gradients. The design uses a vibrant color palette of purple, pink, blue, orange, and yellow for a creative, attention-grabbing appearance.

## Color Palette (User-Specified) - VIBRANT ENERGY
Using a bold, high-energy color combination:
- **Primary**: `#3a86ff` (Blue) - Main buttons, links, primary actions
- **Secondary**: `#8338ec` (Purple) - Secondary buttons, highlights
- **Accent**: `#ff006e` (Pink/Magenta) - Special elements, badges, accents
- **Supporting Colors**: 
  - `#fb5607` (Orange) - Warm accents, highlights
  - `#ffbe0b` (Yellow) - Bright accents, energy

Apply these colors through:
- Hero gradient: Purple (#8338ec) → Blue (#3a86ff) → Pink (#ff006e)
- Section backgrounds: Clean whites with vibrant color accents
- Buttons: Blue/purple gradients
- Tech stack badges: Purple and pink tones
- Card accents and borders using the full vibrant palette

## Typography
- **Heading Font**: Poppins (soft, rounded, modern - weights: 300, 400, 500, 600, 700, 800)
- **Body Font**: Inter (clean, elegant, highly readable - weights: 300, 400, 500, 600, 700)

Typography Hierarchy:
- **Hero Headline**: Extra large, bold weight (text-5xl to text-7xl) - Poppins 700-800
- **Section Headings**: Large, semi-bold (text-3xl to text-4xl) - Poppins 600-700
- **Subheadings**: Medium size, medium weight (text-xl to text-2xl) - Poppins 500-600
- **Body Text**: Comfortable reading size (text-base to text-lg) - Inter 400-500
- **UI Elements**: Slightly smaller, clear (text-sm to text-base) - Inter 400-600

## Visual Style
- **Rounded Corners**: Generous border-radius (16px-24px) on cards, buttons, and containers
- **Smooth Shadows**: Multi-layered shadow system for depth (shadow-lg, shadow-xl)
- **Gradients**: Bold, vibrant gradients using the full color spectrum
- **Glassmorphism**: Semi-transparent backgrounds with backdrop-blur effects on cards
- **Modern & Energetic**: Bold colors, dynamic feel, creative expression

## Layout System
**Spacing Units**: Use Tailwind spacing of `4, 6, 8, 12, 16, 20, 24` for consistent rhythm
- Section padding: `py-16 to py-24`
- Card padding: `p-6 to p-8`
- Component gaps: `gap-6 to gap-12`
- Container max-width: `max-w-7xl`

## Section-Specific Guidelines

### Hero Section
- Full viewport height (`min-h-screen`) with centered content
- Gradient background: from Purple (#8338ec) → Blue (#3a86ff) → Pink (#ff006e)
- Large, animated headline: "Hi, I'm Vineet" (Outfit font, bold)
- Tagline below: "Frontend Developer & Freelancer with 2+ Years of Experience"
- Descriptive paragraph with comfortable line-height
- Two prominent CTA buttons with glassmorphism effects
- Smooth scroll-down indicator at bottom

### About Section
- Two-column grid layout (`lg:grid-cols-2`)
- Left column: Profile image with rounded corners and vibrant shadow
- Right column: Story content with engaging narrative
- Stats cards with blue/purple and pink/orange gradients
- Fade-in animation on scroll
- Section divider: Blue → Purple → Pink gradient

### Skills Section
- Grid layout of skill cards (`grid-cols-2 md:grid-cols-3 lg:grid-cols-6`)
- Each card features: skill icon, skill name, subtle gradient background
- Glassmorphism effect with backdrop-blur
- Hover effects: scale up slightly, enhanced shadow
- Skills to display: React, Next.js, JavaScript, HTML, CSS, Tailwind CSS
- Section divider: Purple → Blue → Pink gradient

### Projects Section (Dynamic)
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Project cards with:
  - Featured image at top
  - Project title (bold, prominent - Outfit font)
  - Brief description (Nunito font)
  - Tech stack badges (purple and pink gradients)
  - Two action buttons: "View Live" (blue/purple gradient) and "View Code" (outline)
- Card hover: Blue/purple/pink gradient overlay with lift effect
- Stagger animation on scroll
- Section divider: Orange → Yellow → Blue gradient

### Contact Section
- Centered form with glassmorphism container
- Form fields: Name, Email, Message (textarea)
- Styled inputs with focus states using blue color
- Submit button with purple/blue/pink gradient background
- Social links below form with vibrant accents
- Section divider: Pink → Purple → Blue gradient

### Footer
- Minimal, centered design
- Copyright text: "© Vineet {current year}"
- Inspirational quote: "Crafting digital experiences with heart"
- Pink heart icons with pulse animation
- Subtle gradient background
- Comfortable padding

## Animations & Interactions (Framer Motion)
- **Section Fade-ins**: Sections animate into view on scroll (opacity 0 to 1, translateY 20px to 0)
- **Stagger Children**: Project cards and skill cards animate sequentially
- **Hover States**: Smooth scale transforms, shadow enhancements
- **Page Load**: Hero content animates in with slight delay cascade
- **Smooth Scrolling**: Anchor links scroll smoothly to sections
- Keep animations subtle and performant (0.3s-0.6s duration)

## Responsive Behavior
- **Mobile**: Single column layouts, stacked sections, full-width cards
- **Tablet**: Two-column grids where appropriate, comfortable spacing
- **Desktop**: Full multi-column layouts, generous whitespace
- Navigation transforms to hamburger menu on mobile

## Component Details

### Buttons
- Primary: Blue to purple gradient background, white text, rounded-full, px-8 py-3
- Secondary: Purple with border, white text, same padding
- Hover: Slight scale, enhanced shadow, smooth transition
- Glassmorphism: backdrop-blur-sm background for depth

### Cards
- Glassmorphism style: `bg-white/10 backdrop-blur-md`
- Border: Subtle border using vibrant colors
- Padding: p-6 to p-8
- Rounded: rounded-2xl to rounded-3xl
- Shadow: shadow-lg with colorful tint

### Forms
- Input fields: Rounded corners, subtle backgrounds, blue focus states
- Labels: Above inputs, Outfit font, clear typography
- Validation: Subtle error states
- Submit button with vibrant gradient (purple → blue → pink)

## Images
**Hero Section**: No large hero image - focus on typography and vibrant gradient backgrounds

**About Section**: Professional profile photo with rounded-2xl and shadow-xl

**Projects Section**: Each project card requires a project screenshot/mockup image (16:9 aspect ratio)

## Navigation
- Fixed header with logo/name on left (Outfit font)
- Menu items: Home, About, Skills, Projects, Contact (Nunito font)
- Smooth scroll to sections on click
- Subtle background blur when scrolled
- Mobile: Hamburger menu with slide-in panel
- Accent color: Blue for active states

## Technical Integration
- Data-driven projects from `/public/data/projects.json`
- Contact form with validation
- All animations use Framer Motion library
- Icons from lucide-react and react-icons
- Fully responsive using Tailwind's breakpoint system

This vibrant design uses a bold, high-energy color palette (purple, pink, blue, orange, yellow) creating an eye-catching, creative portfolio aesthetic with Outfit and Nunito typography. Perfect for showcasing personality and standing out from the crowd!
