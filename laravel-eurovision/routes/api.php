<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Get all countries
Route::get('countries','CountryController@index');
// Update existing Country (set Votes)
Route::put('country/{name_id}','CountryController@update');
// Reset all votes
Route::delete('countries/reset','CountryController@destroy');