# Security Policy

## Supported Versions

This is a static educational application with no backend or user data collection.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Security Measures

This application implements multiple layers of security:

### 1. Content Security Policy (CSP)
- Strict CSP headers prevent unauthorized script execution
- Only scripts from same origin are allowed
- External resources limited to Google Fonts
- Inline scripts removed (event handlers via JavaScript)

### 2. XSS Protection
- All user input is sanitized before processing
- HTML content is escaped using textContent
- DOM manipulation uses safe createElement/appendChild
- No use of innerHTML with user-provided data
- Input validation on all form fields

### 3. Path Traversal Protection
- File path validation for audio and image resources
- Paths restricted to assets/ and data/ directories
- Prevents directory traversal (../, //) attempts

### 4. Security Headers
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Browser XSS filter
- `Referrer-Policy: strict-origin-when-cross-origin` - Limits referrer info
- `Permissions-Policy` - Disables unnecessary browser features

### 5. No Sensitive Data
- No API keys or secrets in repository
- No user data collection or storage
- No cookies or local storage usage
- Static JSON data files only

### 6. Dependency Security
- Minimal external dependencies (Google Fonts only)
- No npm packages in production
- No third-party JavaScript libraries

## Architecture Security

### Static Site Benefits
- No server-side vulnerabilities
- No database injection risks
- No authentication bypasses
- No session hijacking possible

### Client-Side Only
- All code runs in browser
- No sensitive server operations
- Transparent source code
- Easy security auditing

## Reporting a Vulnerability

If you discover a security issue:

1. **DO NOT** open a public GitHub issue
2. Email: [Your security contact email]
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

**Response Time**: We aim to respond within 48 hours.

## Security Best Practices for Deployment

### GitHub Pages
- ✅ Enforces HTTPS automatically
- ✅ No server configuration needed
- ✅ Served from CDN with DDoS protection

### Custom Domain (Optional)
- Enable HTTPS via GitHub Pages settings
- Configure custom domain with HTTPS certificate
- Use DNS CAA records for certificate authority restriction

### Monitoring
- Enable GitHub security alerts
- Monitor repository for unauthorized changes
- Review audit logs regularly

## Known Limitations

### GitHub Pages Constraints
- Cannot set custom HTTP headers (use meta tags instead)
- Cannot implement server-side security measures
- No rate limiting capabilities

### Mitigations
- CSP via meta tags in HTML
- Client-side input validation
- Path validation in JavaScript

## Security Checklist

### Pre-Deployment
- [x] No API keys in repository
- [x] No sensitive data in git history
- [x] .gitignore properly configured
- [x] CSP headers implemented
- [x] XSS protection enabled
- [x] Input sanitization implemented

### Post-Deployment
- [ ] Test site over HTTPS
- [ ] Verify CSP policy works
- [ ] Test all security headers
- [ ] Run security audit (Lighthouse)
- [ ] Check for console errors
- [ ] Verify no mixed content warnings

## Updates and Patches

Security updates will be released as needed:
- Critical vulnerabilities: Immediate patch
- High severity: Within 7 days
- Medium severity: Next release cycle
- Low severity: Documented for future release

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [GitHub Pages Security](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## Contact

For security concerns, please contact:
- Email: [Your security email]
- GitHub: [@your-username]

---

**Last Updated**: 2025-11-03
**Security Version**: 1.0
