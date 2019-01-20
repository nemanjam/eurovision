<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Country;
use App\Vote;

class CountryController extends Controller
{
    /**
     * Fetch all countries
     * @return countries array with votes attached
     */
    public function index()
    {
        $all = Country::with('votes')->get()->sortBy('name_id')->values()->all();
        return $all;
    }
    /**
     * Update votes for a country
     * @param Request $request
     * @param type $name_id name of the country to update votes
     * @return type return votes
     */
    public function update(Request $request, $name_id)
    {
        $validator = Validator::make($request->all(), [
            "votes"    => "required|array|min:1",
            "votes.*.country"  => "required|string|distinct|min:3",
            "votes.*.points"  => "required|integer|distinct|min:1"
        ]);
        $validator->validate();
        
        $country = Country::find($name_id);
        $votes = $request->input('votes');
        
        foreach ($votes as $vote) {
            $v = new Vote();
            $v->voter_country = $name_id;
            $v->country = $vote['country'];
            $v->points = $vote['points'];
            $v->save();
        }
               
        $country->has_voted = true;      
        $country->save();

        return $country->votes;
    }
    /**
     * Reset all votes
     */
    public function destroy()
    {
        Vote::truncate();
        Country::where('has_voted', true)->update(['has_voted' => false]);      
    }
    
}

