# Villa Mak - Booking Website

Professional booking website for Villa Mak in Sarajevo with integrated Airbnb synchronization.

## Features

- ✨ Responsive, modern design
- 📅 Full booking calendar system
- 💰 Dynamic pricing
- 🔗 Airbnb synchronization
- 📧 Email notifications
- 🛡️ Secure booking management
- 💳 Payment integration ready

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Integrations**: Airbnb API, SendGrid
- **Deployment**: Vercel

## Setup

### Prerequisites

- Node.js 18+
- Supabase account
- Airbnb API credentials
- SendGrid API key

### Installation

```bash
# Clone the repository
git clone https://github.com/adokaralic/villa-mak.git
cd villa-mak

# Install dependencies
npm install

# Configure environment variables
cp .env.local.example .env.local
# Edit .env.local with your API credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/
│   ├── supabase.ts   # Database client
│   ├── airbnb.ts     # Airbnb API integration
│   └── email.ts      # Email notifications
├── types/            # TypeScript interfaces
└── styles/           # Global styles
```

## Database Schema

Run migrations to set up the database:

```bash
# Supabase SQL migrations are in supabase/migrations/
```

## Environment Variables

See `.env.local.example` for required configuration.

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

Private - All rights reserved
