<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Auth\EmailVerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\ForgetPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\ConsommationController;
use App\Http\Controllers\MaintController;
use App\Http\Controllers\ProductController;

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

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('email_verification', [EmailVerificationController::class, 'email_verification']);
    Route::get('email_verification', [EmailVerificationController::class, 'sendEmailVerification']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forget_password', [ForgetPasswordController::class, 'forgetPassword']);
Route::post('/rest_password', [ResetPasswordController::class, 'passwordReset']);
Route::resource('products', ProductController::class);
Route::resource('maints', MaintController::class);
Route::resource('consommations', ConsommationController::class);



