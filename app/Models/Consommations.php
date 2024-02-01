<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consommations extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'qte', 'montant', 'image'];

}
