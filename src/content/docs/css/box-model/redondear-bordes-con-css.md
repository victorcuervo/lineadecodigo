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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMKPF2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7Ibea1NpfXoPH7j5mbIWHTI%2FuVPeIWT%2BomS9dkbTwAIgJCT29NrDpdVHN6n9UAaH7Yi59I8KBh8y%2Fd33Zrs1pAgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOZsPgDHaEynDxY%2FXircA9JL5nU8jaP8Jm%2BHUMs4zT7678nlzSBaTqaV1PYZEOJ23S%2B%2BBKUXXrL2n0MKfV3TkB5%2BFpeNjgPEeWjvIdBfkfidG0%2FMxX2KO60Jzj0SCzZO%2FimD5TGFYMhMq0J2erkz2DiAI1XQfttoXLf6hYAZB%2BSjTKkVfcXf1%2FzpbKeaCHJ%2BYtMPMMWNrawYNUCNPmHEHRjooLRROGhf49mFaADLij2ZXtVRYOFNn%2F%2BtSEkiAKrFsTQqUfJiVY5V9ogtpN1Fs%2BI%2B3w%2Fyp%2F8cd%2F358d4Y%2FfgcfkczBX1xSCoTafg8FimgrXPlVjexG6BESa0jDYCNS4tX0cxy3Zn7PFT1Y%2FnL2ApIi8cH2HP2HHJ8LX6MFfxJO9vOqLirrkHaQGsTFYs1Pmt2iZxjkifAxiednnK85XEKY2PPnyUJ%2BHmNB9NkT4p0gr%2F5goRGZwhX0KuAbL%2Bsg4WlRmDKUNvLnkK1t8EKK1SwiIO%2BX0ysMw6MTRynIBdre3JVgwVL5qfC7lW7G3VQVhcXaqpHJG9drU5OeqQEXr7Jqm04jabZW0MN7%2FKEwy%2FqXksXGqXPkPSdFFt2jl0qNu0tgZscbb2ZtWJt1YY2oInr1fBBYI%2B%2F709Q92G9LjYy4DwQXvEbK%2Bve1Ok5MK6dicoGOqUBq%2FY7h2uI7Rh3Kx%2BDX7rZGGuZnLcthVy%2F%2BTt%2F8pQQ26fxczcPLGLSQ28LaVs4ctzKINJU2HAj1nCj3wZsK%2BDVKN033%2FdnMQOnX%2FTIZhsmrbfNXNhbLoP0v5U8QIG%2BTv9oUBOTWUKpCHx50zboOy2BTpbXpD512ac5d4NKkxIZyRsQfuZEEEUpPNdyPIKGFxzDHfleEql%2BPrgkiCwkuNSmd9Z%2F5%2BBh&X-Amz-Signature=1e3d95893d20b257c16803a8af2d2b6df6d06d94e498c83be6846409191ee0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMKPF2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX7Ibea1NpfXoPH7j5mbIWHTI%2FuVPeIWT%2BomS9dkbTwAIgJCT29NrDpdVHN6n9UAaH7Yi59I8KBh8y%2Fd33Zrs1pAgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOZsPgDHaEynDxY%2FXircA9JL5nU8jaP8Jm%2BHUMs4zT7678nlzSBaTqaV1PYZEOJ23S%2B%2BBKUXXrL2n0MKfV3TkB5%2BFpeNjgPEeWjvIdBfkfidG0%2FMxX2KO60Jzj0SCzZO%2FimD5TGFYMhMq0J2erkz2DiAI1XQfttoXLf6hYAZB%2BSjTKkVfcXf1%2FzpbKeaCHJ%2BYtMPMMWNrawYNUCNPmHEHRjooLRROGhf49mFaADLij2ZXtVRYOFNn%2F%2BtSEkiAKrFsTQqUfJiVY5V9ogtpN1Fs%2BI%2B3w%2Fyp%2F8cd%2F358d4Y%2FfgcfkczBX1xSCoTafg8FimgrXPlVjexG6BESa0jDYCNS4tX0cxy3Zn7PFT1Y%2FnL2ApIi8cH2HP2HHJ8LX6MFfxJO9vOqLirrkHaQGsTFYs1Pmt2iZxjkifAxiednnK85XEKY2PPnyUJ%2BHmNB9NkT4p0gr%2F5goRGZwhX0KuAbL%2Bsg4WlRmDKUNvLnkK1t8EKK1SwiIO%2BX0ysMw6MTRynIBdre3JVgwVL5qfC7lW7G3VQVhcXaqpHJG9drU5OeqQEXr7Jqm04jabZW0MN7%2FKEwy%2FqXksXGqXPkPSdFFt2jl0qNu0tgZscbb2ZtWJt1YY2oInr1fBBYI%2B%2F709Q92G9LjYy4DwQXvEbK%2Bve1Ok5MK6dicoGOqUBq%2FY7h2uI7Rh3Kx%2BDX7rZGGuZnLcthVy%2F%2BTt%2F8pQQ26fxczcPLGLSQ28LaVs4ctzKINJU2HAj1nCj3wZsK%2BDVKN033%2FdnMQOnX%2FTIZhsmrbfNXNhbLoP0v5U8QIG%2BTv9oUBOTWUKpCHx50zboOy2BTpbXpD512ac5d4NKkxIZyRsQfuZEEEUpPNdyPIKGFxzDHfleEql%2BPrgkiCwkuNSmd9Z%2F5%2BBh&X-Amz-Signature=a936c4368e9df130f5e45b03a1301e8aad78840d8c580abe288235da678defdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
