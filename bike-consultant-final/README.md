# Motora — Bike Consultant (React + Clerk)

A responsive frontend-only bike marketplace demo. This ZIP includes the complete source project, original Motora styling, Clerk authentication, real local image-file upload, API fetch, search/filter/brand pages, favourites, account, and My Uploads.

## Run the project

1. Install Node.js LTS.
2. Extract the ZIP and open the `bike-consultant` folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to a new file named `.env`.
5. In `.env`, replace the sample value with your Clerk **Publishable Key**:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key
   VITE_CLERK_ADMIN_EMAILS=
   ```

6. In the Clerk Dashboard, configure sign-in methods and set your local development URL to `http://localhost:5173`.
7. Run `npm run dev` and open the local URL shown in the terminal.

## Admin role

In Clerk Dashboard → Users → choose the admin user → Public metadata, set:

```json
{
  "role": "admin"
}
```

No Admin/Customer choice is displayed on the login screen. Users sign in normally; the app reads the role from Clerk public metadata. For local demo use only, you may also add admin email addresses to `VITE_CLERK_ADMIN_EMAILS` as a comma-separated list. Restart Vite after editing `.env`.

## Included functionality

- Home, Bikes, Brands, Search, Favourites, My Uploads, Account
- Clerk sign-in/sign-up and user menu
- Customers and admins can add bike listings
- Admin-only edit and delete controls
- Select a real photo file from your computer/phone, preview it, and save it in browser storage
- Call seller and WhatsApp seller actions
- Search, category/brand filters, responsive layout

## Important limitations

This is a frontend demo. DummyJSON bike data is fetched from its public API; its write endpoints simulate changes rather than permanently saving them. User-added bikes and photos are stored in the current browser, not shared with other users or devices. For production, add a trusted backend/database and image hosting such as Cloudinary. Client-side role checks control the UI only and are not secure authorization by themselves. Never expose a Clerk Secret Key in frontend code.
