<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\ContactController;

Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::get('/about', fn() => Inertia\Inertia::render('About'))->name('about');
Route::get('/projects', fn() => Inertia\Inertia::render('Projects'))->name('projects');
Route::get('/products/medium', fn() => Inertia\Inertia::render('Products/Medium'))->name('products.medium');
Route::get('/products/standard', fn() => Inertia\Inertia::render('Products/Standard'))->name('products.standard');
Route::get('/products/commercial', fn() => Inertia\Inertia::render('Products/Commercial'))->name('products.commercial');
Route::get('/products/bayaweaver', fn() => Inertia\Inertia::render('Products/Bayaweaver'))->name('products.bayaweaver');
Route::get('/contact', fn() => Inertia\Inertia::render('Contact'))->name('contact');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
