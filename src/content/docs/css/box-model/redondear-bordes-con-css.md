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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2Z4OJIN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5hmUMfZ9g9dqnKnO7%2BZYcfdcEtnt8qWL17IzC3YOZFAiEA6J8D9LfS5yI9Fyf8%2FU3fbXfvh%2BVWtbmfY7VmxyXi0rUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLL7THZS1osZmDMTjSrcA60qON2S2ABcR2%2FhaTQjGS%2FHqPKeJhTbG1eQu6Y1y1PV5mfem6ruB7vICC%2Bghsd6ZxYVRU2pWTqoIdpjBgh2hfWFYxVnAzQKjiEf39S%2F2UtcI84U%2F0oOvFYREGZS9g7ICj8k1FOJ80R28c1cWaOwXQixGNlLS2Zpjgg%2F6SAi4CJdWhksi25iezr%2FfCaDQvvscUL65%2FE0NasIVjpUAayziLdX5laqnPxpGjGjXeyP3zmQr20foDxODU8ypulPIFMzCi0rJQ7sHZOEOPnlgkmYltRlF73gq9yQSeFG%2BJKyXhbGB4WNhOAaDH8qsg%2FlGyGaLIogN%2B8IiGv9ijZZyuT2tr1n8qZa%2Fj45pF05xOCUIlUw%2FDo5SaM%2FShCWrHs7%2BaB%2BQGVU7YO0%2F8roWdMkwRzTHT%2FPcwnFKibu8YCC4CT%2BMBYrViZ7uDGn7baZ%2FW3L7EdZFF3H3VqWs%2FzR0%2B%2BCufCuBukPMkcqN4eZO3yb%2FnYcwQgJss7z8HP18QRT4xR8rFSMR8nqr%2F%2BnS1KAaETjzv4kNz59AebCs6hW71%2BHq2HgK38L2x%2BrLANywebiLJ8xmmz%2BRwwNGbHdWq2Chec7KrKaHp4wmtCwr3X57ejRrGnCByLiCvmTd2YOzyndgtedMKTwicoGOqUBfzeN0FIboEVZFajIWsgKS%2BL8YZDXa%2B2e0intbPP2gP39VU4J1RtTVkCXcLU9NdtYiSYKo1SKJvQSxWP6VrrfAfYgOff31e%2B9ZY7wU1ImlyWOX7o7GZaOJjlQnr6Qz9mJAAplxc3rVt7bCNMRuflCOnkPi%2B5OVagpBi8TiudFdIoBH%2FLHh4nNSyFixliWTQi8mGx%2F3mQ7YPLw2B7C5DuhyCdK0UyL&X-Amz-Signature=ba52da6d7b626d6471086ad6756c1d96e6ed885ce55b956b950e67de3a67431f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2Z4OJIN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5hmUMfZ9g9dqnKnO7%2BZYcfdcEtnt8qWL17IzC3YOZFAiEA6J8D9LfS5yI9Fyf8%2FU3fbXfvh%2BVWtbmfY7VmxyXi0rUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLL7THZS1osZmDMTjSrcA60qON2S2ABcR2%2FhaTQjGS%2FHqPKeJhTbG1eQu6Y1y1PV5mfem6ruB7vICC%2Bghsd6ZxYVRU2pWTqoIdpjBgh2hfWFYxVnAzQKjiEf39S%2F2UtcI84U%2F0oOvFYREGZS9g7ICj8k1FOJ80R28c1cWaOwXQixGNlLS2Zpjgg%2F6SAi4CJdWhksi25iezr%2FfCaDQvvscUL65%2FE0NasIVjpUAayziLdX5laqnPxpGjGjXeyP3zmQr20foDxODU8ypulPIFMzCi0rJQ7sHZOEOPnlgkmYltRlF73gq9yQSeFG%2BJKyXhbGB4WNhOAaDH8qsg%2FlGyGaLIogN%2B8IiGv9ijZZyuT2tr1n8qZa%2Fj45pF05xOCUIlUw%2FDo5SaM%2FShCWrHs7%2BaB%2BQGVU7YO0%2F8roWdMkwRzTHT%2FPcwnFKibu8YCC4CT%2BMBYrViZ7uDGn7baZ%2FW3L7EdZFF3H3VqWs%2FzR0%2B%2BCufCuBukPMkcqN4eZO3yb%2FnYcwQgJss7z8HP18QRT4xR8rFSMR8nqr%2F%2BnS1KAaETjzv4kNz59AebCs6hW71%2BHq2HgK38L2x%2BrLANywebiLJ8xmmz%2BRwwNGbHdWq2Chec7KrKaHp4wmtCwr3X57ejRrGnCByLiCvmTd2YOzyndgtedMKTwicoGOqUBfzeN0FIboEVZFajIWsgKS%2BL8YZDXa%2B2e0intbPP2gP39VU4J1RtTVkCXcLU9NdtYiSYKo1SKJvQSxWP6VrrfAfYgOff31e%2B9ZY7wU1ImlyWOX7o7GZaOJjlQnr6Qz9mJAAplxc3rVt7bCNMRuflCOnkPi%2B5OVagpBi8TiudFdIoBH%2FLHh4nNSyFixliWTQi8mGx%2F3mQ7YPLw2B7C5DuhyCdK0UyL&X-Amz-Signature=4bd1bc322ccd0cd27e9590ba8a1f1c638eaaac01c3e3a170ecfbbce7d7f00a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
