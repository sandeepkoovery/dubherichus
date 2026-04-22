/**
 * Returns the base URL of the application (e.g. https://dubherichus.com or http://localhost/dubhemerak/public)
 * Reads the base URL from a <meta> tag injected by the Blade template using Laravel's url('/') helper.
 */
export function useAppUrl() {
    const base =
        document.querySelector('meta[name="app-url"]')?.getAttribute('content') || '';
    return base;
}
