<?php

namespace App\Http\Controllers;

use App\Models\Consommations;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class ConsommationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Consommations::select('id', 'date', 'qte', 'montant', 'image')->get();


    }
 
        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required',
            'qte' => 'required',
            'montant' => 'required',

            'image' => 'required|image'
        ]);

        try {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('consommations/image', $request->image, $imageName);
            Consommations::create($request->post() + ['image' => $imageName]);

            return response()->json([
                'message' => 'Lopération a réussi !'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'une erreur s est produite'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function show(Consommations $consommation)
    {
        //
        return response()->json([
            'consommation' => $consommation
        ]);
    }

       /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Consommations  $consommation
     * @return \Illuminate\Http\Response
     */
    public function edit(Consommations $consommation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Consommations $consommation)
    {
        //
        $request->validate([
            'date' => 'required',
            'qte' => 'required',
            'montant' => 'required',
             

            'image' => 'nullable'
        ]);

        try {

            $consommation->fill($request->post())->update();

            if ($request->hasFile('image')) {
                // remove old image
                if ($consommation->image) {
                    $exists = Storage::disk('public')->exists("public/image/{$consommation->image}");
                    if ($exists) {
                        Storage::disk('public')->delete("public/image/{$consommation->image}");
                    }
                }

                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('consommations/image', $request->image, $imageName);
                $consommation->image = $imageName;
                $consommation->save();

                return response()->json([
                    'message' => 'Succès de l opération!'
                ]);
            } else {

                return response()->json([
                    'message' => 'Succès de l opération!'
                ]);
            }
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'une erreur s est produite !'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Consommation  $consommation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consommations $consommation)
    {
        //
        try {

            if ($consommation->image) {
                $exists = Storage::disk('public')->exists("public/image/{$consommation->image}");
                if ($exists) {
                    Storage::disk('public')->delete("public/image/{$consommation->image}");
                }
            }

            $consommation->delete();

            return response()->json([
                'message' => 'Succès de l opération!'
            ]);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => 'une erreur s est produite !'
            ], 500);
        }
        
    }
}
