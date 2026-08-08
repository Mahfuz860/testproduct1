# ThreadCart

A one-product, mobile-friendly static store designed to run on GitHub Pages.

## Files

- `index.html` — product page and order form
- `style.css` — design
- `script.js` — product settings, quantity and delivery calculation
- `order-success.html` — order confirmation page

## 1. Change your product

Open `index.html`.

Search for:

`CHANGE PRODUCT TITLE HERE`

Change the text inside:

`<h1 id="productTitle">Your Product Title Here</h1>`

Then search for:

`CHANGE PRODUCT DESCRIPTION HERE`

Change the text inside the description paragraph.

You can also change the product image where the comment says:

`CHANGE PRODUCT IMAGE HERE`

## 2. Change price

Open `script.js` and change:

`const PRODUCT_PRICE = 990;`

For example:

`const PRODUCT_PRICE = 1490;`

## 3. Change the email address

Open `index.html` and find:

`https://formsubmit.co/YOUR_EMAIL_HERE`

Replace `YOUR_EMAIL_HERE` with the email address where you want orders to arrive.

Example:

`https://formsubmit.co/you@example.com`

The first time you receive an order, FormSubmit may ask you to confirm/activate the receiving email address.

## 4. Important: update the success page URL

In `index.html`, find:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/order-success.html`

Replace it with your actual GitHub Pages URL.

Example:

`https://rahim.github.io/threadcart/order-success.html`

If you use a custom domain, put that URL there instead.

## 5. GitHub Pages

1. Create a new GitHub repository, for example `threadcart`.
2. Upload all four files.
3. Go to Settings → Pages.
4. Under Build and deployment, select:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Save.
6. GitHub will give you your website URL.

## Delivery charges

The website is already configured as:

- Inside Dhaka: ৳120
- Outside Dhaka: ৳150

The total is calculated automatically before the customer submits the order.

## Email security note

Do not put Gmail passwords, SMTP passwords, private API keys, or secret tokens inside `index.html` or `script.js`. GitHub Pages is public, so anything in frontend JavaScript can be viewed by visitors.

This version uses FormSubmit so the static GitHub Pages website can send order information without exposing your email password.
