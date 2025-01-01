# Sharefiy

Sharefiy is a web application built with [Next.js](https://nextjs.org) that provides analytics for shared links. It allows users to track various metrics such as clicks, referrers, device types, and geographic data.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
    cp .env.example .env

    git clone https://github.com/your-username/sharefiy.git
    cd sharefiy

    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
```

## Features

- Link Analytics: Track clicks, referrers, device types, and geographic data for shared links.
- Interactive Map: Visualize geographic data on an interactive map.
- Dropdown Menu: Easily switch between different slugs to view their analytics.
- Favicons: Display favicons for referrers and links.

## Viewing Analytics

1. Select a slug from the dropdown menu in the header.
2. View detailed analytics for the selected slug, including clicks, referrers, device types, and geographic data.
