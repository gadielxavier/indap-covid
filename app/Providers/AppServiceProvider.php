<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // \URL::forceRootUrl(\Config::get('app.url'));

        // And this if you wanna handle https URL scheme
        // It's not usefull for http://www.example.com, it's just to make it more independant from the constant value
        // if (str_contains(\Config::get('app.url'), 'https://')) {
        //     \URL::forceScheme('https');
        //     //use \URL:forceSchema('https') if you use laravel < 5.4
        // }
        setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
		if(env('APP_PUBLIC_PATH')) {
			$this->app->bind( 'path.public', function () {
				return base_path() . env('APP_PUBLIC_PATH');
			});
		}
    }
}
