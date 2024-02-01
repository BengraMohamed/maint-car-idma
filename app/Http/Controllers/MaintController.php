<?php

namespace App\Http\Controllers;

use App\Models\Maint;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class MaintController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Maint::select('id', 'nom', 'date', 'type', 'kilo', 'frais', 'image')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'nom' => 'required',
            'date' => 'required',
            'type' => 'required',
            'kilo' => 'required',
            'frais' => 'required',

            'image' => 'required|image'
        ]);

        try {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('maint/image', $request->image, $imageName);
            Maint::create($request->post() + ['image' => $imageName]);

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
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Maint $maint)
    {
        //
        return response()->json([
            'maint' => $maint
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Maint $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Maint  $maint
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Maint $maint)
    {
        //
        $request->validate([
            'nom' => 'required',
            'date' => 'required',
            'type' => 'required',
            'kilo' => 'required',
            'frais' => 'required',

            'image' => 'nullable'
        ]);

        try {

            $maint->fill($request->post())->update();

            if ($request->hasFile('image')) {
                // remove old image
                if ($maint->image) {
                    $exists = Storage::disk('public')->exists("public/image/{$maint->image}");
                    if ($exists) {
                        Storage::disk('public')->delete("public/image/{$maint->image}");
                    }
                }

                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('maint/image', $request->image, $imageName);
                $maint->image = $imageName;
                $maint->save();

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
     * @param  \App\Models\Maint  $maint
     * @return \Illuminate\Http\Response
     */
    public function destroy(Maint $maint)
    {
        //
        try {

            if ($maint->image) {
                $exists = Storage::disk('public')->exists("public/image/{$maint->image}");
                if ($exists) {
                    Storage::disk('public')->delete("public/image/{$maint->image}");
                }
            }

            $maint->delete();

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
