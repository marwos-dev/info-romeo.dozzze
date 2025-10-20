This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Production build with Docker

The repository includes a multi-stage Dockerfile that produces an optimized production image ready to serve the site from
[`https://info-romeo.dozzze.es/`](https://info-romeo.dozzze.es/). To build and run the container locally:

```bash
# Build the production image
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://info-romeo.dozzze.es/ \
  -t info-romeo:latest .

# Run the container listening on port 3000 inside the container and 8080 on the host
docker run --rm -p 8080:3000 info-romeo:latest
```

Override `NEXT_PUBLIC_SITE_URL` at build or runtime if you need to point the site to a different domain.
