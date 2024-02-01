<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('maints', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('date');
            $table->text('type');
            $table->text('kilo');
            $table->text('frais');
            $table->text('image');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('maints');
    }
};
