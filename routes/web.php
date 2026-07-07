<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ContactController;

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/about', fn() => Inertia\Inertia::render('About')->withViewData([
    'meta_title' => 'About Dubhe Richus | Water Filter Manufacturer in Kochi, Kerala',
    'meta_description' => 'Learn about Dubhe Richus, a trusted water treatment manufacturer in Kochi, Kerala, delivering reliable and sustainable water treatment solutions since 1991.'
]))->name('about');
Route::get('/projects', fn() => Inertia\Inertia::render('Projects'))->name('projects');
Route::get('/products/medium', fn() => Inertia\Inertia::render('Products/Medium')->withViewData([
    'meta_title' => 'Whole House Water Filter | Home Water Treatment in Kerala | Dubhe Richus',
    'meta_description' => 'Medium Whole House Water Filters from Kerala for homes across India. Chemical free water filtration helps reduce various water impurities with no electricity and minimal maintenance.'
]))->name('products.medium');
Route::get('/products/standard', fn() => Inertia\Inertia::render('Products/Standard')->withViewData([
    'meta_title' => 'Home Water Filters | Whole House Water Filtration Systems | Dubhe Richus',
    'meta_description' => 'Experience the Standard Water Filter from Dubhe Richus, proudly from Kochi, Kerala. Advanced water filtration helps improve everyday home water quality for homes across Kerala and India.'
]))->name('products.standard');
Route::get('/products/classic', fn() => Inertia\Inertia::render('Products/Classic')->withViewData([
    'meta_title' => 'Classic Whole House Water Filters for Small Homes & Apartments',
    'meta_description' => 'Compact water filter system for apartments and small homes in Kerala. Removes iron, odor and hardness with chemical-free, low-maintenance filtration for safe everyday water use.'
]))->name('products.classic');
Route::get('/products/commercial', fn() => Inertia\Inertia::render('Products/Commercial')->withViewData([
    'meta_title' => 'Commercial Water Treatment Filters in Kerala | Dubhe Richus',
    'meta_description' => 'Customised commercial water treatment plants in Kerala for industries, hospitals, hotels, and large facilities. High-capacity, chemical-free solutions available across India.'
]))->name('products.commercial');
Route::get('/products/bayaweaver', fn() => Inertia\Inertia::render('Products/Bayaweaver')->withViewData([
    'meta_title' => 'Automatic Water Treatment Plant in Kerala - Bayaweaver | Dubhe Richus',
    'meta_description' => 'Automatic water treatment plant with AI-powered automation, self-cleaning technology, and chemical-free filtration for hospitals, industries, hotels, and commercial facilities across India.'
]))->name('products.bayaweaver');
Route::get('/products/dubhemerak', fn() => Inertia\Inertia::render('Products/DubheMerak')->withViewData([
    'meta_title' => 'Sewage & Wastewater Treatment Plant in Kerala - Dubhe Merak | Dubhe Richus',
    'meta_description' => 'Advanced biological wastewater treatment solution in Kerala for villas, apartments, commercial buildings, and industries. Eco-friendly STP systems available across India.'
]))->name('products.dubhemerak');
Route::get('/contact', fn() => Inertia\Inertia::render('Contact')->withViewData([
    'meta_title' => 'Contact Dubhe Richus | Water Treatment Solutions in Kochi, Kerala',
    'meta_description' => 'Get in touch with Dubhe Richus in Kochi, Kerala, for expert consultation, installation, and customer support for all your water treatment requirements across Kerala and India.'
]))->name('contact');

// SEO Redirects
Route::redirect('/public/medium', '/products/medium', 301);
Route::redirect('/public/standard', '/products/standard', 301);
Route::redirect('/public/standar', '/products/standard', 301);
Route::redirect('/public/commercial', '/products/commercial', 301);
Route::redirect('/public/bayaweaver', '/products/bayaweaver', 301);

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
