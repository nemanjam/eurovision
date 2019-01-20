<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $primaryKey = 'name_id';
    protected $table = 'countries';
    protected $guarded = [];
    public $incrementing = false;
    // public $timestamps = false;
    protected $hidden = ['created_at', 'updated_at'];
    
    /**
     * votes end of the relationship 1xN
     * @return type votes
     */
    public function votes()
    {
        return $this->hasMany('App\Vote', 'country', 'name_id');
    }
}
