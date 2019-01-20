<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $guarded = [];
    // public $timestamps = false;
    protected $hidden = ['created_at', 'updated_at'];
    
    /**
     * country side of the relationship
     * @return type country
     */
    public function country()
    {
        return $this->belongsTo('App\Country', 'name_id', 'country');
    }
    
}
