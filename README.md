This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


my-next-app
├── node_modules
├── src
│   ├── app
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── about
│   │   │   └── page.js
│   │   ├── blog
│   │   │   ├── page.js
│   │   │   └── [id]
│   │   │       └── page.js
│   ├── public
│   │   ├── favicon.ico
│   │   └── vercel.svg
│   ├── styles
│   │   ├── globals.css
│   │   └── Home.module.css
├── .gitignore
├── package.json
└── README.md
```mermaid
graph TD
    A[User Login] --> B[Enter Username and Password]
    B --> C{Authenticate User}
    C -->|Success| D[Navigate to Data Upload Page]
    C -->|Fail| A[User Login]
    D --> E[Select and Upload GTFS Data File]
    E --> F{Receive and Process File}
    F -->|Success| G[Navigate to Data Filter Page]
    F -->|Fail| D[Select and Upload GTFS Data File]
    G --> H[Set Filter Criteria]
    H --> I[Submit Filter Criteria]
    I --> J{Process and Return Filtered Data}
    J --> K[View Filtered Route Data]
    K --> L[Click on a Route to See Details]
    L --> M[Display Route Visualization and Details]
    M --> N[Choose Export Format]
    N --> O[Submit Export Request]
    O --> P{Generate and Provide Export File}
    P --> Q[Download Exported File]
    Q --> R[Navigate to Path Search Page]
    R --> S[Enter Starting and Ending Locations]
    S --> T[Submit Path Query Request]
    T --> U{Calculate Shortest Path and Return Results}
    U --> V[View Path Search Results]
    V --> W[Choose to Re-query or Adjust Filters]
    W --> R[Navigate to Path Search Page]


```
