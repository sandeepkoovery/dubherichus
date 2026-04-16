<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ContactController;

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/about', fn() => Inertia\Inertia::render('About'))->name('about');
Route::get('/projects', fn() => Inertia\Inertia::render('Projects'))->name('projects');
Route::get('/products/medium', fn() => Inertia\Inertia::render('Products/Medium')->withViewData([
    'meta_title' => 'Water Purification Filters for Medium Homes (M) | Dubhe Richus',
    'meta_description' => 'Reliable home water purification system designed for family houses and villas. Treat borewell and hard water with eco-friendly filtration for clean water from every tap.'
]))->name('products.medium');
Route::get('/products/standard', fn() => Inertia\Inertia::render('Products/Standard')->withViewData([
    'meta_title' => 'Whole House Water Filters in Kerala | Dubhe Richus',
    'meta_description' => 'High-capacity whole house water filtration system for large homes and commercial spaces. Advanced iron removal and hard water treatment with long-lasting, eco-friendly performance.'
]))->name('products.standard');
Route::get('/products/classic', fn() => Inertia\Inertia::render('Products/Classic')->withViewData([
    'meta_title' => 'Classic Whole House Water Filters for Small Homes & Apartments',
    'meta_description' => 'Compact water filter system for apartments and small homes in Kerala. Removes iron, odor and hardness with chemical-free, low-maintenance filtration for safe everyday water use.'
]))->name('products.classic');
Route::get('/products/commercial', fn() => Inertia\Inertia::render('Products/Commercial')->withViewData([
    'meta_title' => 'Commercial & Industrial Water Treatment Plants in Kerala, India',
    'meta_description' => 'Commercial water treatment plants in India by Dubhe Richus, offering customized water filtration for borewell and hard water using sustainable, chemical-free, low-maintenance technology.'
]))->name('products.commercial');
Route::get('/products/bayaweaver', fn() => Inertia\Inertia::render('Products/Bayaweaver')->withViewData([
    'meta_title' => 'Automatic Water Treatment Plant in Kerala, India - Bayaweaver',
    'meta_description' => 'Bayaweaver is an AI-powered automatic water filtration system from Dubhe Richus. Complete water treatment with chemical-free, low-maintenance performance for homes and industries.'
]))->name('products.bayaweaver');
Route::get('/products/dubhemerak', fn() => Inertia\Inertia::render('Products/DubheMerak')->withViewData([
    'meta_title' => ' Branded Water Filtration Plant - Dubhe Merak | Dubhe Richus',
    'meta_description' => 'Choose the Dubhe Merak water treatment plant from Dubhe Richus for dependable iron removal, turbidity reduction, and clean water treatment across Kerala and India.'
]))->name('products.dubhemerak');
Route::get('/contact', fn() => Inertia\Inertia::render('Contact'))->name('contact');

// SEO Redirects
Route::redirect('/public/medium', '/products/medium', 301);
Route::redirect('/public/standard', '/products/standard', 301);
Route::redirect('/public/standar', '/products/standard', 301);
Route::redirect('/public/commercial', '/products/commercial', 301);
Route::redirect('/public/bayaweaver', '/products/bayaweaver', 301);

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
