<?php

use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        DB::table('countries')->delete();
        DB::table('countries')->insert([
            ['name_id' => 'France', 'flag' => 'flag-icon-fr', 'has_voted' => false],
            ['name_id' => 'Germany', 'flag' => 'flag-icon-de', 'has_voted' => false],
            ['name_id' => 'Austria', 'flag' => 'flag-icon-at', 'has_voted' => false],
            ['name_id' => 'Hungary', 'flag' => 'flag-icon-hu', 'has_voted' => false],
            ['name_id' => 'Italy', 'flag' => 'flag-icon-it', 'has_voted' => false],
            ['name_id' => 'Romania', 'flag' => 'flag-icon-ro', 'has_voted' => false],
            ['name_id' => 'Bulgaria', 'flag' => 'flag-icon-bg', 'has_voted' => false],
            ['name_id' => 'Israel', 'flag' => 'flag-icon-il', 'has_voted' => false],
            ['name_id' => 'Portugal', 'flag' => 'flag-icon-pt', 'has_voted' => false],
            ['name_id' => 'Belgium', 'flag' => 'flag-icon-be', 'has_voted' => false],
            ['name_id' => 'Greece', 'flag' => 'flag-icon-gr', 'has_voted' => false],
            ['name_id' => 'Spain', 'flag' => 'flag-icon-es', 'has_voted' => false]
        ]);
    }
}
/*
 * php artisan migrate:reset
 * php artisan migrate
 * php artisan db:seed --class=CountriesTableSeeder
 * php artisan migrate:refresh --seed
 *   countries: Country[] = [
    {name: 'France', flag: 'flag-icon-fr', hasVoted: false, votes: []},
    {name: 'Germany', flag: 'flag-icon-de', hasVoted: false, votes: []},
    {name: 'Austria', flag: 'flag-icon-at', hasVoted: false, votes: []},
    {name: 'Hungary', flag: 'flag-icon-hu', hasVoted: false, votes: []},
    {name: 'Italy', flag: 'flag-icon-it', hasVoted: false, votes: []},
    {name: 'Romania', flag: 'flag-icon-ro', hasVoted: false, votes: []},
    {name: 'Bulgaria', flag: 'flag-icon-bg', hasVoted: false, votes: []},
    {name: 'Israel', flag: 'flag-icon-il', hasVoted: false, votes: []},
    {name: 'Portugal', flag: 'flag-icon-pt', hasVoted: false, votes: []},
    {name: 'Belgium', flag: 'flag-icon-be', hasVoted: false, votes: []}
  ];
 */