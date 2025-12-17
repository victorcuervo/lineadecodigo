---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXGWZXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTiEBF79CgPPP8dVxJK%2FLCzPwNJ%2BqOlSt3B9B1KnNfbQIgbgNJctne8UIxuPWqIakUUrabG%2Fd4qoOHSb5s5rzUAksq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDApxyQtuFAjJPHn4vircAwtqMl6NYSLRnWuu3EJHQsbxXacLW1YudkzFYkugsgIsZuP3YsYLEoX%2F5biifViduvJy9tEsovT9%2F%2BjEJ2UJ5%2BeLTs3JScza6lbCZaTiffC%2BurE7E3BCSIF1b8uH936vc7qQXApHo2wFLLP%2F%2BAxcX61kWDptJDhqn65PJHNyd3IHSrUATU4jsiwFzqtdg%2B4RBeAz0mwgLpt1yj%2FxVKiGqVcY6cz%2FDRld%2FLCHiLzbDeN8hLp7XOjj1efW8TSpmhz%2FRqhV1r3Iz%2FPpx9TKiOkRkpYOIyWKmuY4goyv8J1D8Ysnr4wOSI1AmclJHqfCu0Ojiw0kVMoLyY4LWKd3pb1Oe3GJBTLcY04OgGyf4txVoFyQdz6cNC6V42gWH7LqSeZC0GMAOYJuWlOXJjEgLn%2BNr60b8oqhakDa%2BHzpZR3uBBW4I508qrgofFqfz72UCbPJYFVjrp3kM7YgNUOeWbktv%2BJc04rUxXFiMw%2FQy9cUDtUGDoKMdiT2b3hwpghINYCcAak4lTls6EdRbtHtI%2Fpwyi%2BRui8yGXQpwSqjUtLhvY56cc3Dj7BMjVHvyx2IEh%2FhhcNG8UumkNI8U7I0wOPH8xx4aDAf7qYylL0pTcziBV4AAVZhnvyfTUwPg%2BfMMPeCicoGOqUBgLveePlJd7VQqJQY7qrNc18s8VIWkv%2B%2FyA3Bz43zoT%2B60duCsIQuqMWrvqTXHQbMQ6m8McDU0PMA9JwQH5cpmlYhrnb9amA5CvMeo6efwMSKSbPPAjsDfxkjOx%2FVST%2FUgHP92TXorofqw3R%2B5AbmTvxEEeSbGW1TJrm%2FfZxIrn28a6WfzhC%2BzwrtNpodWQVBn3RY3v2YYdrCXdHnptiDBWgfCzCq&X-Amz-Signature=18463483ecef68db7719af98fe882e614c5673707f6ecf3e8e5f589b9685b0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXGWZXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTiEBF79CgPPP8dVxJK%2FLCzPwNJ%2BqOlSt3B9B1KnNfbQIgbgNJctne8UIxuPWqIakUUrabG%2Fd4qoOHSb5s5rzUAksq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDApxyQtuFAjJPHn4vircAwtqMl6NYSLRnWuu3EJHQsbxXacLW1YudkzFYkugsgIsZuP3YsYLEoX%2F5biifViduvJy9tEsovT9%2F%2BjEJ2UJ5%2BeLTs3JScza6lbCZaTiffC%2BurE7E3BCSIF1b8uH936vc7qQXApHo2wFLLP%2F%2BAxcX61kWDptJDhqn65PJHNyd3IHSrUATU4jsiwFzqtdg%2B4RBeAz0mwgLpt1yj%2FxVKiGqVcY6cz%2FDRld%2FLCHiLzbDeN8hLp7XOjj1efW8TSpmhz%2FRqhV1r3Iz%2FPpx9TKiOkRkpYOIyWKmuY4goyv8J1D8Ysnr4wOSI1AmclJHqfCu0Ojiw0kVMoLyY4LWKd3pb1Oe3GJBTLcY04OgGyf4txVoFyQdz6cNC6V42gWH7LqSeZC0GMAOYJuWlOXJjEgLn%2BNr60b8oqhakDa%2BHzpZR3uBBW4I508qrgofFqfz72UCbPJYFVjrp3kM7YgNUOeWbktv%2BJc04rUxXFiMw%2FQy9cUDtUGDoKMdiT2b3hwpghINYCcAak4lTls6EdRbtHtI%2Fpwyi%2BRui8yGXQpwSqjUtLhvY56cc3Dj7BMjVHvyx2IEh%2FhhcNG8UumkNI8U7I0wOPH8xx4aDAf7qYylL0pTcziBV4AAVZhnvyfTUwPg%2BfMMPeCicoGOqUBgLveePlJd7VQqJQY7qrNc18s8VIWkv%2B%2FyA3Bz43zoT%2B60duCsIQuqMWrvqTXHQbMQ6m8McDU0PMA9JwQH5cpmlYhrnb9amA5CvMeo6efwMSKSbPPAjsDfxkjOx%2FVST%2FUgHP92TXorofqw3R%2B5AbmTvxEEeSbGW1TJrm%2FfZxIrn28a6WfzhC%2BzwrtNpodWQVBn3RY3v2YYdrCXdHnptiDBWgfCzCq&X-Amz-Signature=0656fdbe8a01ba393b4216da65f4ad02a99ea37b4db199e39c4a487785ca07de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
