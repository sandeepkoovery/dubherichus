<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\ContactInquiry;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'service' => 'nullable|string|max:100',
            'message' => 'nullable|string|max:5000',
        ]);

        ContactInquiry::create($validated);

        return redirect()->back()->with('success', 'Thank you! We will get back to you within 24 hours.');
    }
}
