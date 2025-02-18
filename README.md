- Clone the repo

```jsx
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

- npm install
- Run postgres either locally or on the cloud (neon.tech)

- if using docker

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Create .env file in packages/db with the right db url

```jsx
DATABASE_URL = "postgres connection string";
```

- Create .env file in apps/user-app with your JWT secret and next-auth url

```jsx
JWT_SECRET="super-secret-string"
NEXTAUTH_URL=http://localhost:3001
```

- Go to `packages/db`
  - npx prisma migrate dev
  - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - alice (See `seed.ts`)

- Go to `apps/bank-webhook` , run `npm run dev`
