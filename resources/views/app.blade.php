<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NXJJDBTH');</script>
    <!-- End Google Tag Manager -->
    <meta name="theme-color" content="#1a56db">
    <meta name="asset-url" content="{{ rtrim(asset(''), '/') }}">

    <title inertia>{!! $meta_title ?? 'Advanced Water Filters for Home & Industry | Dubhe Richus' !!}</title>
    <meta name="title" content="{{ $meta_title ?? 'Advanced Water Filters for Home & Industry | Dubhe Richus' }}">

    <!-- SEO Meta Tags -->
    <meta name="description"
        content="{{ $meta_description ?? 'Dubhe Richus provides STP, ETP and water treatment systems in Kerala for homes and industries. Get clean, safe, long-lasting water with expert installation and support.' }}">
    <meta name="keywords" content="luxury, premium, performance, dubhe richus">
    <meta name="author" content="Dubhe Richus">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title"
        content="{{ $meta_title ?? 'Advanced Water Filters for Home & Industry | Dubhe Richus' }}">
    <meta property="og:description"
        content="{{ $meta_description ?? 'Dubhe Richus provides STP, ETP and water treatment systems in Kerala for homes and industries. Get clean, safe, long-lasting water with expert installation and support.' }}">
    <meta property="og:image" content="{{ asset('images/og-image.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title"
        content="{{ $meta_title ?? 'Advanced Water Filters for Home & Industry | Dubhe Richus' }}">
    <meta property="twitter:description"
        content="{{ $meta_description ?? 'Dubhe Richus provides STP, ETP and water treatment systems in Kerala for homes and industries. Get clean, safe, long-lasting water with expert installation and support.' }}">
    <meta property="twitter:image" content="{{ asset('images/og-image.jpg') }}">

    <!-- Meta Pixel Code -->
    <script>
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1302509291728511');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1302509291728511&ev=PageView&noscript=1" /></noscript>
    <!-- End Meta Pixel Code -->

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/images/icon.svg">
    <link rel="apple-touch-icon" href="/images/apple-icon.png">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXJJDBTH" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @inertia
</body>

</html>