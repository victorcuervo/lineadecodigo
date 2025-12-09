---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWB42MO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtTdk2%2FQ3ZbtQCvwsZ1%2F6gfTOGsQcrkKqfWQssLYh2jAiB5fYyUDvvNgvYx2%2Fx4AUDF58pa3QWvxk%2BtgSFCRnIEpCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsk1KPSLRjgqbNQByKtwDQ0wHLRypikfzFXphd5ZqZquozldntcrX3y%2B%2BN%2BP496Nw6yxiiNWxOsnVIhmcJuunN%2F4oWO1b26Oa9lFK62Sfm2u5CAgi0wUix%2Fp34Amu%2FWAg5QydLMH5HmU1GnVhZ%2BE%2Fx4lUloBT%2FV0B3U96hT9XDxVPhCDzdKXm6FV%2F%2FemVrX5YsIh7Pu52DZjWeFxKabcvcyTWB%2F5bOVaONfSD7phcEhxJ2vOmoyAzRKjwGUUSQUsdRToCt0y5yaCjfEDCMhXgKVM04FJMCOjgAzQSKTc%2B%2Bw4dy7E86D48YG%2F96P8CET0gTcV%2B%2FDp0J6u2clfIT4DB0LK7gn0oeI%2F6mo5LsQM%2B8hSReKWijpv3zR5wh9lWAzp%2B5wrLvkvy7JCxmfC7UObUqn%2B9tPxcwLKIdccPMDPlHrHE0O3MyxRwsGQ26fCAnKo2Srcs%2FLxt2XTw48Wd3R7r1WuIY201gbhCyqPmyDciHvqp7aUssozFL9G68Smj9p2GTnK5Oa%2F2nhcClQhsjpq%2BDWcZDbK3UwIyZtoqU222WRaMW906qN7IeN6wpqLINONzZcU%2FdWlzCrGpciCruy1VKfxDN4ZPbUAY6JXJf373h0SJhBfdXk4zKTwm5lK%2FzfMcvqyuZISIsNr9a1MwmcPdyQY6pgEsPdN6GJ4F0FfnfK3DkStu5gBH3HViNnTnXx%2BYszB61YAM3oWzQ%2BS1EQGQg2DzmOI1hNX9IjgpY9Fabprn530s3xNcccI5Jf256yfWPGeSfbUR79dIm0VfItzBDfLOh2GXL4sQ9cAwYJTTxVRT2jbdacaWP321TI8FFd6%2FajEOqrDPuACeDgzRYK8KtACExZ7BzUpMK24fna%2F%2FUUf%2FxI6%2F9syAaDKN&X-Amz-Signature=96886e3788b2fc1a4ce8c4de7ef6172301f8a85f48ffc4e755d6dd00fde00c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWB42MO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtTdk2%2FQ3ZbtQCvwsZ1%2F6gfTOGsQcrkKqfWQssLYh2jAiB5fYyUDvvNgvYx2%2Fx4AUDF58pa3QWvxk%2BtgSFCRnIEpCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsk1KPSLRjgqbNQByKtwDQ0wHLRypikfzFXphd5ZqZquozldntcrX3y%2B%2BN%2BP496Nw6yxiiNWxOsnVIhmcJuunN%2F4oWO1b26Oa9lFK62Sfm2u5CAgi0wUix%2Fp34Amu%2FWAg5QydLMH5HmU1GnVhZ%2BE%2Fx4lUloBT%2FV0B3U96hT9XDxVPhCDzdKXm6FV%2F%2FemVrX5YsIh7Pu52DZjWeFxKabcvcyTWB%2F5bOVaONfSD7phcEhxJ2vOmoyAzRKjwGUUSQUsdRToCt0y5yaCjfEDCMhXgKVM04FJMCOjgAzQSKTc%2B%2Bw4dy7E86D48YG%2F96P8CET0gTcV%2B%2FDp0J6u2clfIT4DB0LK7gn0oeI%2F6mo5LsQM%2B8hSReKWijpv3zR5wh9lWAzp%2B5wrLvkvy7JCxmfC7UObUqn%2B9tPxcwLKIdccPMDPlHrHE0O3MyxRwsGQ26fCAnKo2Srcs%2FLxt2XTw48Wd3R7r1WuIY201gbhCyqPmyDciHvqp7aUssozFL9G68Smj9p2GTnK5Oa%2F2nhcClQhsjpq%2BDWcZDbK3UwIyZtoqU222WRaMW906qN7IeN6wpqLINONzZcU%2FdWlzCrGpciCruy1VKfxDN4ZPbUAY6JXJf373h0SJhBfdXk4zKTwm5lK%2FzfMcvqyuZISIsNr9a1MwmcPdyQY6pgEsPdN6GJ4F0FfnfK3DkStu5gBH3HViNnTnXx%2BYszB61YAM3oWzQ%2BS1EQGQg2DzmOI1hNX9IjgpY9Fabprn530s3xNcccI5Jf256yfWPGeSfbUR79dIm0VfItzBDfLOh2GXL4sQ9cAwYJTTxVRT2jbdacaWP321TI8FFd6%2FajEOqrDPuACeDgzRYK8KtACExZ7BzUpMK24fna%2F%2FUUf%2FxI6%2F9syAaDKN&X-Amz-Signature=24c02aa54d0e9d9ff84df4b80856145e6d0822f60268af46d2431b0326ebfd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
