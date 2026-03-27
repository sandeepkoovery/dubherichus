<?php

// Legacy URL Redirects for SEO stability
$currentUri = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH);
$seoRedirects = [
    '/public/medium' => '/products/medium',
    '/public/standard' => '/products/standard',
    '/public/standar' => '/products/standard',
    '/public/commercial' => '/products/commercial',
    '/public/bayaweaver' => '/products/bayaweaver',
];
if ($currentUri && isset($seoRedirects[$currentUri])) {
    header("Location: " . $seoRedirects[$currentUri], true, 301);
    exit;
}


use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__ . '/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__ . '/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__ . '/../bootstrap/app.php';

$app->handleRequest(Request::capture());
