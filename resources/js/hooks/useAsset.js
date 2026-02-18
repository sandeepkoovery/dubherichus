/**
 * Returns a function that builds the correct URL for static assets
 * in the public/ directory. Reads the base URL from a <meta> tag
 * injected by the Blade template using Laravel's asset() helper.
 *
 * Usage:
 *   const asset = useAsset();
 *   <img src={asset('/images/hero-bg.jpg')} />
 */
export function useAsset() {
    const base =
        document.querySelector('meta[name="asset-url"]')?.getAttribute('content') || '';
    return (path) => `${base}${path}`;
}
