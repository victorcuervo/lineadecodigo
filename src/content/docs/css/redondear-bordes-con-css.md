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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SEGV27%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYvyK7zKZw7g4JE2KW88FTyJLmBxNyg1xjOLIcqLkzLQIhAL2T2T3jUyELNPAbbz6nAhJpCWI032nE1r9Lo%2F9WL%2FCEKv8DCFsQABoMNjM3NDIzMTgzODA1Igy8VRy%2BF6wX%2Bi9FyPsq3APqjiSQpmeKcqwoH2IgqbIjVpW1GaeiRgDmdX6ol9R6O2eNNc0fc%2BT648gaOb0ASUt%2FtcSPb9xUA3iEFgsQZ8DHAkAzsMpMY5IYsCxiqEtcVUMrn790hoTO3EbxkL66Frim19L%2FoxK%2FobNKiIbuluIWL%2FS7o4WXzqbGto85EzbL5Y0pQB4%2FOQCwuxn4aJ8jukW1Ogu5qNyr8yNLRgTIYk5GvMcFP0rU7x5PizKw%2FYa%2BcHtjgt73Q0Ip%2FNVgi4pcHvovdsuTYqTZY3spQEAh1kRmxd42ongVns8dMR%2Fp8swNN3qj%2FxA4vzlXVKgB%2B9W1UsGnYPn%2F8fi29HETms%2FiiYhAaPc3ulzxx%2BZrP2%2BV8%2Fqb9hMxiKNEJ6A5zPEOQt8Vu%2FQH59uZ7EWsgjhzZBA0H8ag3AvelEcNH0QdskmEm6IDJA3uRZV9bnV%2BCE6m22iWwaK7a0wxaJBW%2B038BLNwNa5T%2Ftch1pZXyuL5KAwWclWRwJVnJ7NwtXWzNQ0Jr%2BldcZeUErm%2F7YM%2F1LLESUcp5JD990GLkgAx0JQxCSSv5P5AnQn06%2F0bI01Wcq5Wmz5RcsHU9vFWMJy4xwMlAmbZKeCMXJ5HOv5sbN0dKkN3HEoLvSEZmawcuq1FJADy1zDGz8rJBjqkAU%2FHiwwzLcFPbRLJvhArmo4wBCkbM5f9t76XnF9YxgHmyozDJzhN5R8g9ig6MvscKjIlHAEFy%2Bw0LpQKw%2F8vMk%2FMaoyWr%2Fg%2FGTLLLRC5XADhi0M2UQzYNtB5xmtgd2DY04gyBKEgGRKxi79rmwWHoeE3fFmsBoxmEs9a%2BEMwGiqCNa8t4qrAao8cKHcXheebbdmDGEmosk9OvuxCKW8OmtqvF7d%2F&X-Amz-Signature=6cf23fac195b4af44411edde47f8fb46f8551c17c1bdbc0f2b4cecf248634b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SEGV27%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYvyK7zKZw7g4JE2KW88FTyJLmBxNyg1xjOLIcqLkzLQIhAL2T2T3jUyELNPAbbz6nAhJpCWI032nE1r9Lo%2F9WL%2FCEKv8DCFsQABoMNjM3NDIzMTgzODA1Igy8VRy%2BF6wX%2Bi9FyPsq3APqjiSQpmeKcqwoH2IgqbIjVpW1GaeiRgDmdX6ol9R6O2eNNc0fc%2BT648gaOb0ASUt%2FtcSPb9xUA3iEFgsQZ8DHAkAzsMpMY5IYsCxiqEtcVUMrn790hoTO3EbxkL66Frim19L%2FoxK%2FobNKiIbuluIWL%2FS7o4WXzqbGto85EzbL5Y0pQB4%2FOQCwuxn4aJ8jukW1Ogu5qNyr8yNLRgTIYk5GvMcFP0rU7x5PizKw%2FYa%2BcHtjgt73Q0Ip%2FNVgi4pcHvovdsuTYqTZY3spQEAh1kRmxd42ongVns8dMR%2Fp8swNN3qj%2FxA4vzlXVKgB%2B9W1UsGnYPn%2F8fi29HETms%2FiiYhAaPc3ulzxx%2BZrP2%2BV8%2Fqb9hMxiKNEJ6A5zPEOQt8Vu%2FQH59uZ7EWsgjhzZBA0H8ag3AvelEcNH0QdskmEm6IDJA3uRZV9bnV%2BCE6m22iWwaK7a0wxaJBW%2B038BLNwNa5T%2Ftch1pZXyuL5KAwWclWRwJVnJ7NwtXWzNQ0Jr%2BldcZeUErm%2F7YM%2F1LLESUcp5JD990GLkgAx0JQxCSSv5P5AnQn06%2F0bI01Wcq5Wmz5RcsHU9vFWMJy4xwMlAmbZKeCMXJ5HOv5sbN0dKkN3HEoLvSEZmawcuq1FJADy1zDGz8rJBjqkAU%2FHiwwzLcFPbRLJvhArmo4wBCkbM5f9t76XnF9YxgHmyozDJzhN5R8g9ig6MvscKjIlHAEFy%2Bw0LpQKw%2F8vMk%2FMaoyWr%2Fg%2FGTLLLRC5XADhi0M2UQzYNtB5xmtgd2DY04gyBKEgGRKxi79rmwWHoeE3fFmsBoxmEs9a%2BEMwGiqCNa8t4qrAao8cKHcXheebbdmDGEmosk9OvuxCKW8OmtqvF7d%2F&X-Amz-Signature=d8390c50408fa0c77b0a2fec40c5431c8ded2e13b16f9fdf6433fec7734dae6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
