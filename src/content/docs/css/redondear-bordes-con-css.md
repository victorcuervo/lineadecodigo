---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2H52L3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCyYJmiExKu8%2BdUDCYCTIJds3lutnG5BXA6NgdTSA6HHwIhALs6eGldEQmqw2xGGJpGG7a5vlWCXVG%2BI0kwTPYIUL2BKv8DCDkQABoMNjM3NDIzMTgzODA1Igy%2Fg7P4A%2BsayWuoxeUq3APvLcsX37xXL5gdSLwdtqkahlNhQ3nHcREwqOvlDvyhMWRt1b54LGNg2XdNU5eUjGkv3UGI9yOdEc5uHjG36PN76ilstFDdtIWFTOlRQVf7BAMJ8HUxzHOgZDokv3O9i5jLwTUz8lZlFziIGK8D%2BapOPMiq29pFobl3rqc9tU7LHOkeXQwnQsbNhMRU1macp7gjlNgWmx2%2FMjI%2FE2ESg%2BEazqqGfAzts8cRrls75%2FrwbaFoQDNBTd0ugRHvEqgy5c85%2F8JCYvs6nMyS0bABTv3RmzRlV2YRn34DOYko7KDWRISEQk%2B8fucIuyMMlwUdEb%2BsMwZ4GdMbG2Wh%2FO1f5ALFos2td%2BPcMTPYckBj5gko2FmnTHU%2BY1DEpcRof%2BVOXopZV2HXVSWXE2mw19WgFywpoYIJcJSj47DxxjWyyM4HJ1o%2BKaSo8zswOdMNq0%2BKdH%2FGumwQkpOqrAJsSha925mlqRmyy4pIoGEFux%2FfTTUFan2cq3QPYxV4%2BA7YZ9nK4M%2BjD%2BlUorF6fxOfpilF0nGATNbPm0lHKK1Azt7tQHDylZV%2FETPP7mF5FI0hmiR56%2FViJTkxKxLSn4bcTHBOwwSeCR4esg%2F%2Blo06RpBqRdAJ0a3iNRYdBZaxmaN6nDDNlMPJBjqkAS4VtcZjuMRVoHpZnjo%2B9dI9BwlP3fj%2BVpFr9cwQUO3yjKdR%2BFo2nY%2BJV%2FPhlH4p8mFcnroBbrm8cjOB2F1d18uRVai2jUC%2BdH9G%2FCgf8bJ%2BHIzJpvVtVfqQKXIDlQDWoBDdH3UfVaMlcMsXJ7VSl0YSeEJD57YaYvH1S9Og7%2BfFNMclKT2Sql8IZEVacLBZabwykDBHgoSyWkpKg3xfS6eWJjAT&X-Amz-Signature=431ee3ad80a2e43a9f14020c088a2e648c19ff245e8c08d19cb14fcf4cb470d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2H52L3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCyYJmiExKu8%2BdUDCYCTIJds3lutnG5BXA6NgdTSA6HHwIhALs6eGldEQmqw2xGGJpGG7a5vlWCXVG%2BI0kwTPYIUL2BKv8DCDkQABoMNjM3NDIzMTgzODA1Igy%2Fg7P4A%2BsayWuoxeUq3APvLcsX37xXL5gdSLwdtqkahlNhQ3nHcREwqOvlDvyhMWRt1b54LGNg2XdNU5eUjGkv3UGI9yOdEc5uHjG36PN76ilstFDdtIWFTOlRQVf7BAMJ8HUxzHOgZDokv3O9i5jLwTUz8lZlFziIGK8D%2BapOPMiq29pFobl3rqc9tU7LHOkeXQwnQsbNhMRU1macp7gjlNgWmx2%2FMjI%2FE2ESg%2BEazqqGfAzts8cRrls75%2FrwbaFoQDNBTd0ugRHvEqgy5c85%2F8JCYvs6nMyS0bABTv3RmzRlV2YRn34DOYko7KDWRISEQk%2B8fucIuyMMlwUdEb%2BsMwZ4GdMbG2Wh%2FO1f5ALFos2td%2BPcMTPYckBj5gko2FmnTHU%2BY1DEpcRof%2BVOXopZV2HXVSWXE2mw19WgFywpoYIJcJSj47DxxjWyyM4HJ1o%2BKaSo8zswOdMNq0%2BKdH%2FGumwQkpOqrAJsSha925mlqRmyy4pIoGEFux%2FfTTUFan2cq3QPYxV4%2BA7YZ9nK4M%2BjD%2BlUorF6fxOfpilF0nGATNbPm0lHKK1Azt7tQHDylZV%2FETPP7mF5FI0hmiR56%2FViJTkxKxLSn4bcTHBOwwSeCR4esg%2F%2Blo06RpBqRdAJ0a3iNRYdBZaxmaN6nDDNlMPJBjqkAS4VtcZjuMRVoHpZnjo%2B9dI9BwlP3fj%2BVpFr9cwQUO3yjKdR%2BFo2nY%2BJV%2FPhlH4p8mFcnroBbrm8cjOB2F1d18uRVai2jUC%2BdH9G%2FCgf8bJ%2BHIzJpvVtVfqQKXIDlQDWoBDdH3UfVaMlcMsXJ7VSl0YSeEJD57YaYvH1S9Og7%2BfFNMclKT2Sql8IZEVacLBZabwykDBHgoSyWkpKg3xfS6eWJjAT&X-Amz-Signature=9b2d969ae8aadc72246375ae6140e6627be9e3221fb75cb02d98a0226a558695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
