<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ContactController;

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/about', fn() => Inertia\Inertia::render('About'))->name('about');
Route::get('/services', fn() => Inertia\Inertia::render('Services'))->name('services');
Route::get('/products', fn() => Inertia\Inertia::render('Products'))->name('products');
Route::get('/contact', fn() => Inertia\Inertia::render('Contact'))->name('contact');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
