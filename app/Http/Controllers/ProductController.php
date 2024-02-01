<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Product::select('id', 'nom', 'marque', 'modele', 'image')->get();
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
            'marque' => 'required',
            'modele' => 'required',
            'image' => 'required|image'
        ]);

        try {
            $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
            Product::create($request->post() + ['image' => $imageName]);

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
    public function show(Product $product)
    {
        //
        return response()->json([
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
        $request->validate([
            'nom' => 'required',
            'marque' => 'required',
            'modele' => 'required',
            'image' => 'nullable'
        ]);

        try {

            $product->fill($request->post())->update();

            if ($request->hasFile('image')) {
                // remove old image
                if ($product->image) {
                    $exists = Storage::disk('public')->exists("public/image/{$product->image}");
                    if ($exists) {
                        Storage::disk('public')->delete("public/image/{$product->image}");
                    }
                }

                $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image, $imageName);
                $product->image = $imageName;
                $product->save();

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
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
        try {

            if ($product->image) {
                $exists = Storage::disk('public')->exists("public/image/{$product->image}");
                if ($exists) {
                    Storage::disk('public')->delete("public/image/{$product->image}");
                }
            }

            $product->delete();

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
