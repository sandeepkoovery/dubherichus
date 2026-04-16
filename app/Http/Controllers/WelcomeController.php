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
                    'meta_title' => 'Advanced Water Filters for Home & Industry | Dubhe Richus',
                    'meta_description' => 'Dubhe Richus provides STP, ETP and water treatment systems in Kerala for homes and industries. Get clean, safe, long-lasting water with expert installation and support.'
                ]);
    }
}
