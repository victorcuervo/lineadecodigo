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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WPQG4TF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCiHwX5fO3i6cr%2FKBsKhsIad8vz45V3alhkxV9vSV2VBgIgOXzPz0ScQARed%2FNvdZfSLlbNT9wAVpu5v%2FbY8Cn0KKMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLnrgAOTv%2B3soX6m5SrcA9RWvxjz2prs3ntPi6YiStMyhRVMy9xFhUZkeA6m5TuA7EgA6mRrycDupeioSx6YWNS8hUPgPhRzIkKuv4KbavxZnqX8Sari%2BQoA43Z73Gd%2B%2BgsBJkjdWQnSucSKrZOKICWVsepX7G5xRRtVxLgVER7I%2B11NJAGjZBmoRAJOvsP0bL7P%2BNJhDnCKYis5skH0Z%2BX6Q8ecHcNrxlE%2FqC8mwKLSKixvBs7IOWKyc5lybdkdaAFq1Qw1VxW5asKef3l1tWwnBfIqreKO2UAJNe1Cb6vHyA%2BGcFn32N54YhC1ZlXrXZxpU%2FBcmQwqVraO7prx4OLaJM1TkkI%2FN%2BJ3IWXtowNX%2Ffbdl2crKQ5mKWHPlzd1C28SpE61UnSlgXB%2FpBRjW%2BMW9iaBmw9pU%2BJphS0Nq%2FISfM4RP3oSUSgd4YHt8CzA5V%2F0sCsRjxqVeW5qK0f2ggJI7xo9MhIRg4Z0omc9Ex2TOaWeDzQCxubN2UooeA7a9y8x2gtLFWM8zsp303xL6bfDbJ7VdAFTOqnAcHfUjR2ysK6qofBiZ9WPV618jy7D39VyL0KOgOWpPo14SuHmD8oCFthJbfDQdwFjRIzauhpFgGdshiWeDNUGl7YblbEV0PiMpzevTvfPJIP6MLiuxMkGOqUBt1zdNqAWJnJBxzyXVoKh2XK03QSONhWHyzN0gqHCdnOSUKv3w7QYTTGc1kgqF1dv9XrKatbAgLbHVs4lmeac8qheh2ukAxdIUXRaZZAAywZxZTd5F0Fi%2BGqU1X8mm3QV0u6pUz2e8lyDIhAIwI%2FY5OAr%2BIhZShZ3Ha9kMaybJhLHbr6WYcf0CH%2BiwEE1GzNd1DykmPHI1aeAOA3SxULx%2F4EbnN9i&X-Amz-Signature=d0b3d11bc869a84ded63c341d6bd84e02a981a36c9d4b8ab92d07b30390f1a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WPQG4TF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCiHwX5fO3i6cr%2FKBsKhsIad8vz45V3alhkxV9vSV2VBgIgOXzPz0ScQARed%2FNvdZfSLlbNT9wAVpu5v%2FbY8Cn0KKMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLnrgAOTv%2B3soX6m5SrcA9RWvxjz2prs3ntPi6YiStMyhRVMy9xFhUZkeA6m5TuA7EgA6mRrycDupeioSx6YWNS8hUPgPhRzIkKuv4KbavxZnqX8Sari%2BQoA43Z73Gd%2B%2BgsBJkjdWQnSucSKrZOKICWVsepX7G5xRRtVxLgVER7I%2B11NJAGjZBmoRAJOvsP0bL7P%2BNJhDnCKYis5skH0Z%2BX6Q8ecHcNrxlE%2FqC8mwKLSKixvBs7IOWKyc5lybdkdaAFq1Qw1VxW5asKef3l1tWwnBfIqreKO2UAJNe1Cb6vHyA%2BGcFn32N54YhC1ZlXrXZxpU%2FBcmQwqVraO7prx4OLaJM1TkkI%2FN%2BJ3IWXtowNX%2Ffbdl2crKQ5mKWHPlzd1C28SpE61UnSlgXB%2FpBRjW%2BMW9iaBmw9pU%2BJphS0Nq%2FISfM4RP3oSUSgd4YHt8CzA5V%2F0sCsRjxqVeW5qK0f2ggJI7xo9MhIRg4Z0omc9Ex2TOaWeDzQCxubN2UooeA7a9y8x2gtLFWM8zsp303xL6bfDbJ7VdAFTOqnAcHfUjR2ysK6qofBiZ9WPV618jy7D39VyL0KOgOWpPo14SuHmD8oCFthJbfDQdwFjRIzauhpFgGdshiWeDNUGl7YblbEV0PiMpzevTvfPJIP6MLiuxMkGOqUBt1zdNqAWJnJBxzyXVoKh2XK03QSONhWHyzN0gqHCdnOSUKv3w7QYTTGc1kgqF1dv9XrKatbAgLbHVs4lmeac8qheh2ukAxdIUXRaZZAAywZxZTd5F0Fi%2BGqU1X8mm3QV0u6pUz2e8lyDIhAIwI%2FY5OAr%2BIhZShZ3Ha9kMaybJhLHbr6WYcf0CH%2BiwEE1GzNd1DykmPHI1aeAOA3SxULx%2F4EbnN9i&X-Amz-Signature=c8a5cf2fec8dbee6605bd5b01d0edb3e6ee9de5ef0ad4e37df4e2baa18d340f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
