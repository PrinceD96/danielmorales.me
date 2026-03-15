# SEO and Google Search Console

## Google Search Console

Primary setup for production uses a Google Search Console Domain property for `danielmorales.me`.

1. Open Google Search Console and add a new **Domain** property for `danielmorales.me`.
2. Copy the TXT verification record Google provides.
3. In Cloudflare DNS, add that TXT record at the apex domain.
4. Wait for DNS to propagate, then click **Verify** in Search Console.
5. Submit `https://danielmorales.me/sitemap-index.xml` in the Sitemaps section.
6. After the next production deploy, inspect and request indexing for:
   - `https://danielmorales.me/`
   - `https://danielmorales.me/about`
   - `https://danielmorales.me/blog`
   - each live post URL

## Optional URL-prefix verification

The site supports an optional HTML meta verification token through:

- `PUBLIC_GOOGLE_SITE_VERIFICATION`

Only set it if you need URL-prefix verification later. The current production setup should stay DNS-based.

## Validation checklist

- `robots.txt` resolves at `https://danielmorales.me/robots.txt`
- sitemap index resolves at `https://danielmorales.me/sitemap-index.xml`
- homepage and about page emit personal-brand schema
- blog posts emit `BlogPosting` schema with frontmatter keywords when present
