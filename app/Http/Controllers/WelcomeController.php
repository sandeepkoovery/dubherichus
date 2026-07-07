<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Welcome', [
            'appName' => config('app.name'),
        ])->withViewData([
                    'meta_title' => 'Water Treatment Company in Kochi, Kerala | Home & Commercial Water Filters',
                    'meta_description' => 'Dubhe Richus is a trusted water treatment company in Kochi, Kerala, offering home, commercial, and industrial water treatment solutions across Kerala and India.'
                ]);
    }
}
