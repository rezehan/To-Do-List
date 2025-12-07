<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Tasks;

Route::post('/todos', function (Request $request) {
    $request->validate([
        'task' => 'required',
        'description' => 'nullable|string'
    ]);

    $tasks = Tasks::create([
        'task' => $request->task,
        'description' => $request->description
    ]);

    // 3. Kembalikan respons JSON
    return response()->json($tasks, 201);
});