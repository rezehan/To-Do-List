<?php

namespace App\Http\Controllers;

use App\Models\Tasks;

class TaskController extends Controller
{
        /**
     * index
     *
     * @return void
     */

    public function index()
    {
        $todos = Tasks::all(); // Ambil semua data dari model Todo
        return response()->json($todos);
    }
}
