# LICET Carpool - Smart Student Transportation

A modern, responsive web application for student carpooling at LICET (Loyola ICAM College of Engineering and Technology).

## Features

- 🚗 **Smart Ride Booking**: Find and book rides with fellow students
- 📱 **Real-time Tracking**: Track your rides with live updates
- 👥 **Student Community**: Connect with verified LICET students
- 🛡️ **Safety First**: Verified drivers and secure payment system
- 🌱 **Eco-Friendly**: Reduce carbon footprint through ride sharing
- 💰 **Cost Effective**: Save money on daily commute

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom glass morphism effects
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm 8+

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd licet-carpool
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite framework
3. Deploy with zero configuration needed

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/licet-carpool)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # Authentication
│   ├── Dashboard.tsx   # User dashboard
│   ├── RideBooking.tsx # Ride search and booking
│   ├── RideTracking.tsx# Real-time ride tracking
│   └── About.tsx       # About page
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Features Overview

### 🏠 Home Page
- Hero section with compelling CTA
- Feature highlights
- Student testimonials
- Statistics showcase

### 🔐 Authentication
- Student login/signup
- Form validation
- Social login options
- Responsive design

### 📊 Dashboard
- Ride history
- Quick actions
- Achievement system
- Statistics overview

### 🚗 Ride Booking
- Location search
- Available rides listing
- Driver profiles
- Real-time availability

### 📍 Ride Tracking
- Live GPS tracking
- Driver communication
- ETA updates
- Ride timeline

### ℹ️ About Page
- Mission and values
- Team information
- Impact statistics
- Contact information

## Design System

### Colors
- **Primary**: Blue to Purple gradient
- **Success**: Green tones
- **Warning**: Orange to Red gradient
- **Background**: Dark slate with gradients

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- Glass morphism effects
- Smooth animations
- Responsive design
- Accessibility focused

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:
- Email: contact@licetcarpool.com
- Website: [LICET Carpool]([https://fastidious-medovik-d2f950.netlify.app])

---

Made with ❤️ by LICET Students for LICET Students
