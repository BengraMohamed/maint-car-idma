<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maint extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'date', 'type','kilo','frais', 'image'];
}
