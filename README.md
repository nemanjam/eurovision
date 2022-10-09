# Instructions (English)

Project is done using angular 7 frontend and laravel 5.4 backend. I used 5.4 because at the moment I have php 5.6 on my machine, and also I saw that [https://chinesepod.com](https://chinesepod.com) is running on php 5.6.

All functionalities from assignment are working, demo can be seen on [http://laravel-angular-eurovision.herokuapp.com](http://laravel-angular-eurovision.herokuapp.com), the list of functionalities is following:


### Angular

* router with 4 pages `home`, `countries`, `countries/country` and `results`
* voting, disabling countries that already voted in the list
* filtering country that is voted for and countries that already voted from the options of the select control
* template driven form with validation
* report with scores list and matrix with voting overview 
* reset votes link for removing all the votes and voting all over again

### Laravel

* CORS middleware for frontend on another domain which can be disabled in `app\http\kernel.php`
* 2 tables, countries and votes, and eloquent models with foreign key
* migrations and seed
* CountryController with 3 services
  * index() which returns all countries with all votes, `/api/countries` route
  * update() service which validates and receives votes for given country, `/api/countries/{name_id}` route
  * destroy() which resets all the votes for all the countries, `/api/reset` route

### List of bugs:
* the select control is loosing the view of selected country while options list is filtered which is needed for the following controls. Value is kept and the form is submitted correctly. Solution can be in reactive angular forms instead template driven or using 3rd party control which is not build on top of the native html select control
  
***

## Installation and running (Windows)

### Requirements

* php 5.6
* postgresql or mysql
* apache2
* node and npm
* composer


## Laravel setup

### Install dependencies:

From the root laravel folder (`laravel-eurovision`) install dependencies with: 

`composer install`

### Create virtual host:

For apache2 in `httpd-vhosts.conf` file add the following:  

```
<VirtualHost 127.0.0.7:80>
	DocumentRoot "C:/xampp/htdocs/1/eurovision/laravel-eurovision/public" # absolute path to the laravels /public folder 
	ServerName laravel-eurovision.app 	# domain
	ServerAlias www.laravel-eurovision.app  # domain
	<Directory "C:/xampp/htdocs/1/eurovision/laravel-eurovision/public"> # absolute path to the laravels /public folder
		DirectoryIndex index.php
		AllowOverride All
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>
```

In the hosts file add mapping domain to IP:

`127.0.0.7   laravel-eurovision.app`

Restart apache2.

In `.env` file set the domain:
`APP_URL=http://laravel-eurovision.app`

### Create database:

Create database using phppgadmin or phpmyadmin. I used postgresql dbms. Then in `.env` file add credentials, for example:
 
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_DATABASE=eurovisiondb
DB_USERNAME=postgres
DB_PASSWORD=root
```
Run migrations:

`php artisan migrate`

Seed database:

`php artisan db:seed --class=CountriesTableSeeder`

***

## Angular setup

### Install dependencies:

From the root angular folder (`ng-eurovision`) in console run:

`npm install`

### Set laravel api endpoint:

In the `environments/environment.ts` file set `app_url` to the laravel domain + `'/api'`, for example:

`api_url: 'http://laravel-eurovision.app/api'`

### Run the application:

From the root angular folder run:

`ng serve`

Now the angular application should be available on link `http://localhost:4200`

## Author

Nemanja Mitic, nemanja.mitic.elfak@hotmail.com 20. 1. 2019.

***
***


# Uputstvo (Srpsko-Hrvatski)

Projekat je radjen u angular 7 frontend i laravel 5.4 backend. 5.4 sam koristio jer trenutno imam php 5.6 na racunaru, a i [https://chinesepod.com](https://chinesepod.com) sam video da je na php 5.6. 

Sve funkcionalnosti iz zadatka rade, demo se moze videti na [http://laravel-angular-eurovision.herokuapp.com](http://laravel-angular-eurovision.herokuapp.com), lista funkcionalnosti je sledeca:

### Angular

* ruter sa 4 stranice `home`, `countries`, `countries/country` i `results`
* glasanje, disabliranje zemalja koje su vec glasale u listi
* uklanjanje zemlje za koju se glasa i zemalja koje su glasale iz opcija select kontrole
* template driven forma sa validacijom
* izvestaj sa listom poena i matrica sa pregledom glasanja
* reset votes link za brisanje svih glasova za glasanje iz pocetka

### Laravel

* CORS middleware za frontend sa drugog domena koji se po potrebi moze iskljuciti u `app\http\kernel.php`
* 2 tabele, countries i votes, i eloquent modeli sa stranim kljucem
* migracije i seed
* CountryController sa 3 servisa
  * index() koji vraca sve zemlje sa svim glasovima, `/api/countries` ruta
  * update() servis koji validira i prihvata glasove za odredjenu zemlju, `/api/countries/{name_id}` ruta
  * destroy() koji resetuje sve glasove za sve zemlje, `/api/reset` ruta

### Lista bugova:

* select kontrola gubi prikaz selektovane zemlje kada se filtrira lista optiona sto je neophodno za sledece kontrole. Inace vrednost je zadrzana i forma je uredno submitovana. Resenje moze biti u reaktivnim angular formama umesto template driven ili koriscenje 3rd party kontrole koja se ne zasniva na native html select.
  
***

## Instalacija i pokretanje (Windows)

### Requrements

* php 5.6
* postgres ili mysql
* apache2
* node i npm
* composer


## Laravel setup

### Instalirati zavisnosti:

U root folderu laravela (`laravel-eurovision`) instalirati zavisnosti sa: 

`composer install`

### Kreirati virtual host:

U apache2 u `httpd-vhosts.conf` fajlu dodati sledece:  

```
<VirtualHost 127.0.0.7:80>
	DocumentRoot "C:/xampp/htdocs/1/eurovision/laravel-eurovision/public" # apsolutna staza do laravelovog /public foldera
	ServerName laravel-eurovision.app 	# domen
	ServerAlias www.laravel-eurovision.app  # domen
	<Directory "C:/xampp/htdocs/1/eurovision/laravel-eurovision/public"> # apsolutna staza do laravelovog /public foldera
		DirectoryIndex index.php
		AllowOverride All
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>
```

U hosts fajlu dodati mapiranje domena na IP:

`127.0.0.7   laravel-eurovision.app`

Restartovati apache2.

U `.env` fajlu podesiti domen:
`APP_URL=http://laravel-eurovision.app`

### Kreirati bazu:

Kreirati bazu u pgphpmyadmin ili phpmyadmin. Ja sam koristio postgresql bazu.
Zatim u `.env` fajlu dodati credentials od baze, na primer:
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_DATABASE=eurovisiondb
DB_USERNAME=postgres
DB_PASSWORD=root
```
Pokrenuti migracije:

`php artisan migrate`

Seedovati bazu:

`php artisan db:seed --class=CountriesTableSeeder`

***

## Angular setup

### Instalirati zavisnosti:

U konzoli u root folderu angulara (`ng-eurovision`) pokrenuti:

`npm install`

### Podesiti laravel api endpoint:

U fajlu `environments/environment.ts` podesiti `app_url` do laravel domena + `'/api'`, npr:

`api_url: 'http://laravel-eurovision.app/api'`

### Pokrenuti aplikaciju:

U konzoli u root folderu angulara pokrenuti:

`ng serve`

Sada bi angular aplikacija trebala biti dostupna na linku `http://localhost:4200`

## Autor

Nemanja Mitic, 20. 1. 2019.

