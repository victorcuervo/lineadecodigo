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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDE577S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbXjn4UoKPcfqmw0xswlFHxNKYTncd4wtutMer2AQtYAiB7fZSRS91xEia688YI3iTTaOKVZe%2F%2BKIn%2F1rhW3uxycSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMA8lkAHacGOsVWvhcKtwDQ37dy1Mahsxw8A63EWEdAEwOhBvumw0degCGX0TdPV3TcwxfavZRiomju5viqTl21o9iJCABmvOSDJ8Ww8c5ej866we4JtCVbAwHzE5%2F6tBDj5SmxwnwIRGFUGaPtMuWwRqHQXyOzZ2V5TV6rlArt4aXqay5nniURou%2F0NBDfFscdJNNe12mYJKJfCZT1ydphQpqAEQ9OHcabZpVc50qW6VoarpMW0v4VI%2FOeoRNGyvOjuDx%2BrOIm9FOZWTTVYyNKRkumWPc%2BItOIiNkndw7Cl%2F6P%2Foshy6bKMIxLp32V7UVTp3bTgxIaDuteKB%2BuX0Ft%2B0%2FC30Tx4VZcldrCiC%2FI1HyOen7xgyZnxZ7rxlcVNUcLHzrayj2MWsy936MSooZIIYbm24lzxs6eSNC5I8fhhiPsj4wo%2F3IS7FOZn6dNhdJYqrnCvEUYiRq0hl7ydxZtr9SGN8N7qMJrfkUJ5khTnnFBfM5iIKwMEFQyxUPR6dROl94AaRZlQMpSvjnMt9Gf%2F41jif0BrSJvgADTTKJyqKrEd9w1BX8lKkHd6G4DE%2Bv9A1S7nwxBh4%2ByTSxPZNi5FsABoAmj3RwS2RsN0uZJ1l3%2Bx7d52Kca%2Fn808re8eoiHSq4OJ2rLBJbdPgw3aqKygY6pgFS9Af3Rr3e7KiIkvl5dX4UD8p%2Fuppsg4kIxtkejpsQ0%2Bw8ipMeUGxIFONokUrqL9RWB7sGYagZjxZLmSWZynp6x%2B5cATURXbxeZn3ZoX%2Fv3H9gAFvQla4rvHGVUnwAmpVeuo4oWGV6WVcIUDSm7ZC3qRoreT%2F7Gzqmy2tU%2FJu8QCIGFihjGZo5MSJ1zYW%2BC8Mi%2FnEP0mvDDfsyqx4JmkP7zsEQzhgd&X-Amz-Signature=12e000a110e2fe4adfe14df29fe7e3f5b1b852eaa2be4b10d9c74843bc3ace90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDE577S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbXjn4UoKPcfqmw0xswlFHxNKYTncd4wtutMer2AQtYAiB7fZSRS91xEia688YI3iTTaOKVZe%2F%2BKIn%2F1rhW3uxycSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMA8lkAHacGOsVWvhcKtwDQ37dy1Mahsxw8A63EWEdAEwOhBvumw0degCGX0TdPV3TcwxfavZRiomju5viqTl21o9iJCABmvOSDJ8Ww8c5ej866we4JtCVbAwHzE5%2F6tBDj5SmxwnwIRGFUGaPtMuWwRqHQXyOzZ2V5TV6rlArt4aXqay5nniURou%2F0NBDfFscdJNNe12mYJKJfCZT1ydphQpqAEQ9OHcabZpVc50qW6VoarpMW0v4VI%2FOeoRNGyvOjuDx%2BrOIm9FOZWTTVYyNKRkumWPc%2BItOIiNkndw7Cl%2F6P%2Foshy6bKMIxLp32V7UVTp3bTgxIaDuteKB%2BuX0Ft%2B0%2FC30Tx4VZcldrCiC%2FI1HyOen7xgyZnxZ7rxlcVNUcLHzrayj2MWsy936MSooZIIYbm24lzxs6eSNC5I8fhhiPsj4wo%2F3IS7FOZn6dNhdJYqrnCvEUYiRq0hl7ydxZtr9SGN8N7qMJrfkUJ5khTnnFBfM5iIKwMEFQyxUPR6dROl94AaRZlQMpSvjnMt9Gf%2F41jif0BrSJvgADTTKJyqKrEd9w1BX8lKkHd6G4DE%2Bv9A1S7nwxBh4%2ByTSxPZNi5FsABoAmj3RwS2RsN0uZJ1l3%2Bx7d52Kca%2Fn808re8eoiHSq4OJ2rLBJbdPgw3aqKygY6pgFS9Af3Rr3e7KiIkvl5dX4UD8p%2Fuppsg4kIxtkejpsQ0%2Bw8ipMeUGxIFONokUrqL9RWB7sGYagZjxZLmSWZynp6x%2B5cATURXbxeZn3ZoX%2Fv3H9gAFvQla4rvHGVUnwAmpVeuo4oWGV6WVcIUDSm7ZC3qRoreT%2F7Gzqmy2tU%2FJu8QCIGFihjGZo5MSJ1zYW%2BC8Mi%2FnEP0mvDDfsyqx4JmkP7zsEQzhgd&X-Amz-Signature=e2b03d5de79e29faa4988e1dd4259f74ff7157abe75157d5b76b583b8a0e1dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
