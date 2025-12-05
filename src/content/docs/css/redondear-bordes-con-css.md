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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CCY67V6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3TJMS%2BgDwkO9b%2BDCXBTVrAd1xIRs%2B58UwGn8WMi09EAiAzUsuZ3DFDkHrz%2F9SDif2v1hz1kmjvizFCYfU%2FhGTM2ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2eiWKKqJAkMcP6fvKtwDwXl4HUCpwYPvK4sbQzUfBoCMARmS1gmogjibJTqmvIfDhxv5EXjHVyLyMmxVLl1HiEZ2gn96ET4sv%2FZJQLN%2FgtikLdN9JR0vtvtp%2FapaJZTI7dGETJaPql0Qc60ldXrhRHaDKI86bshBz8ChxPzHpNeGptKtwnH5mauzQgKhdZzpL3tIx1nUtvflnygJsOi7lPPPVX%2BeOWZXFq%2ByRXHQySaBkGMYJfO47kk6Yw1KypV%2BHPa86xFnkRQQuF%2BN%2BH8M6usb9jtL%2Blah3qpN3ilfr1H1sRrJ%2Bp4rbocq3QRwbW6kCid0PB5wP0R0sdS1EiD0bY1Aqbkpe4LK9cYEm8iCI3xAOd%2FAxUTdNiwX4jVKEapNRHM0uNJ%2BSDRsDhbqBlrmXWgFGbowT0xjYPnpldvjHJFf2poJwHd9NKtZ7HOQKwTYk6Tj%2ButfuXyplkxbypU4LjEyejstgpJWOclK%2BcLeRVZamcWVMX1IoRRG1eTdV100bDbSdsFy9x4BMsk8%2FM8UcfOxcOH%2BuEa1knNOjgEz%2BCwfzsWKTEwkESGzQK7unvqaFi3Fc%2Fte274zuHIWnYe0jX7djb6QTJMhdksXrHcjOTLg%2FjSwr3xZzEaTdJHAne%2FP8iCUj54FQnSZPlswwNXKyQY6pgE4ATwrm08XUjMUsybbwpahhU4nyu1aVtZ%2BrdTcqyYN%2F%2FUxoOlg4ELf5qIzCLtPJLl%2BcT%2B2xGHhsb3jdbvCVBDrLKrMoUQjT9iR%2F25yW2V%2Fu1dADMUouIGDy7wXJ7B3o9Y%2FDyetuLo3W1K%2F66KNlA%2FyxH7GFYsbNNVXq3eZmy0JOfBu9j1nqxIjjVOHslkOkASS7N%2F2wZLptlIpQ%2F%2Bdv9F5vDe1MIbL&X-Amz-Signature=8e832367aa78ce330b09482c030f46fa6e6e42353575c31de181d086e538f8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CCY67V6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3TJMS%2BgDwkO9b%2BDCXBTVrAd1xIRs%2B58UwGn8WMi09EAiAzUsuZ3DFDkHrz%2F9SDif2v1hz1kmjvizFCYfU%2FhGTM2ir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2eiWKKqJAkMcP6fvKtwDwXl4HUCpwYPvK4sbQzUfBoCMARmS1gmogjibJTqmvIfDhxv5EXjHVyLyMmxVLl1HiEZ2gn96ET4sv%2FZJQLN%2FgtikLdN9JR0vtvtp%2FapaJZTI7dGETJaPql0Qc60ldXrhRHaDKI86bshBz8ChxPzHpNeGptKtwnH5mauzQgKhdZzpL3tIx1nUtvflnygJsOi7lPPPVX%2BeOWZXFq%2ByRXHQySaBkGMYJfO47kk6Yw1KypV%2BHPa86xFnkRQQuF%2BN%2BH8M6usb9jtL%2Blah3qpN3ilfr1H1sRrJ%2Bp4rbocq3QRwbW6kCid0PB5wP0R0sdS1EiD0bY1Aqbkpe4LK9cYEm8iCI3xAOd%2FAxUTdNiwX4jVKEapNRHM0uNJ%2BSDRsDhbqBlrmXWgFGbowT0xjYPnpldvjHJFf2poJwHd9NKtZ7HOQKwTYk6Tj%2ButfuXyplkxbypU4LjEyejstgpJWOclK%2BcLeRVZamcWVMX1IoRRG1eTdV100bDbSdsFy9x4BMsk8%2FM8UcfOxcOH%2BuEa1knNOjgEz%2BCwfzsWKTEwkESGzQK7unvqaFi3Fc%2Fte274zuHIWnYe0jX7djb6QTJMhdksXrHcjOTLg%2FjSwr3xZzEaTdJHAne%2FP8iCUj54FQnSZPlswwNXKyQY6pgE4ATwrm08XUjMUsybbwpahhU4nyu1aVtZ%2BrdTcqyYN%2F%2FUxoOlg4ELf5qIzCLtPJLl%2BcT%2B2xGHhsb3jdbvCVBDrLKrMoUQjT9iR%2F25yW2V%2Fu1dADMUouIGDy7wXJ7B3o9Y%2FDyetuLo3W1K%2F66KNlA%2FyxH7GFYsbNNVXq3eZmy0JOfBu9j1nqxIjjVOHslkOkASS7N%2F2wZLptlIpQ%2F%2Bdv9F5vDe1MIbL&X-Amz-Signature=a22f4d1527c46b658ff0187f51e720d94b6fd7cf5871a5e91bb43f8e99d19d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
