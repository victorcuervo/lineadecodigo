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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSXBB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvpaFzslc4sxkclltk8ONqKyLVv2SIxUkRxAb4cdSJGAiB%2B452Ez2%2BmzwiJ8Mz5DIyhx9DZ4EVz3kDPVUwz2EB75SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvQavohcuaLe1MQwKtwD53raNngPDGAlcgIyd%2BPO0Anh2H8BccBcR5l3Wrxijzp0YCsVF40SccC6LWjJuuXocmTM4Xyf5uFCvA4cn09mCyOxs8Wsgoexu%2BoiKiwGN04SVWytmAOU4Xf4BimolLgHvYsEuIxtRTXToQl%2BrVXrPq6RancWGsxsqRBzrq4J1ttCxl%2BJyE2eC4Majdp2ZZC5X%2Fg7%2BKmEjxxXkuVlWr6hDmCDMDamoKQBS2%2FLfDJhIqB%2FG1p%2Fb9kXeV%2BJNPxMT9TPwfqfstiEvfDWEmRYlU7kd9y1pKDWEsjqIMM%2BO%2BA1QTJCjoBJ2S4UH6O2o%2FBqe0FPb7CO4%2FPXP9W0xWr0uGNnvgvkqVzBVKnUCO3vYKnhdDW%2BiPxqbHqYsNC%2FYkPmWZnXt9t%2BfjLeuKX9sXzjXs4p0eia99S9eOrN0ML3ArE%2F3hO3PghtAyoN8vHRvJs9gHGUHQpdUhuI1jVhgmxAcd9WopLDkXWpXqafbQUgJq5m5Oum0kMTaH7lwDVnPJrHzLyEDekqUYv1aQz8O7o4%2F1hgBYNs7XlZepjUO%2BDYNfXVHUxtjNCcUmB8paVBRgvxsgRo%2BPSNPHXP9qdI7FaKBYefmuXMxQZ%2FAxuuZjlpuKzoT78ImdPw1OawNAMAbVww8YuMygY6pgExihf1TrhVexp5jXXyD6dg2I1UCGuyi9tUNGMICEQ0UHLwsgezPgqhpcqrxOMFOi1qW8u24COU7%2BYed7tBY2XcEVoEyq%2FDRVEDgEvjooW13dnC0xJ%2FaRZdfiIyRj8excF6%2FPf7gRHqYTDdIq2kVcyhV6ce6yNSySTWD5U0U1GO5cVL5F31O0SThiaCBP2h7V6BZzc%2BrzYZ66FYnf8iDtl2nPg0D5JL&X-Amz-Signature=0653abaf32a37ccf19921caf1b985b2beeb7ae0fab2393aca38936726af17276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUSXBB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvpaFzslc4sxkclltk8ONqKyLVv2SIxUkRxAb4cdSJGAiB%2B452Ez2%2BmzwiJ8Mz5DIyhx9DZ4EVz3kDPVUwz2EB75SqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzvQavohcuaLe1MQwKtwD53raNngPDGAlcgIyd%2BPO0Anh2H8BccBcR5l3Wrxijzp0YCsVF40SccC6LWjJuuXocmTM4Xyf5uFCvA4cn09mCyOxs8Wsgoexu%2BoiKiwGN04SVWytmAOU4Xf4BimolLgHvYsEuIxtRTXToQl%2BrVXrPq6RancWGsxsqRBzrq4J1ttCxl%2BJyE2eC4Majdp2ZZC5X%2Fg7%2BKmEjxxXkuVlWr6hDmCDMDamoKQBS2%2FLfDJhIqB%2FG1p%2Fb9kXeV%2BJNPxMT9TPwfqfstiEvfDWEmRYlU7kd9y1pKDWEsjqIMM%2BO%2BA1QTJCjoBJ2S4UH6O2o%2FBqe0FPb7CO4%2FPXP9W0xWr0uGNnvgvkqVzBVKnUCO3vYKnhdDW%2BiPxqbHqYsNC%2FYkPmWZnXt9t%2BfjLeuKX9sXzjXs4p0eia99S9eOrN0ML3ArE%2F3hO3PghtAyoN8vHRvJs9gHGUHQpdUhuI1jVhgmxAcd9WopLDkXWpXqafbQUgJq5m5Oum0kMTaH7lwDVnPJrHzLyEDekqUYv1aQz8O7o4%2F1hgBYNs7XlZepjUO%2BDYNfXVHUxtjNCcUmB8paVBRgvxsgRo%2BPSNPHXP9qdI7FaKBYefmuXMxQZ%2FAxuuZjlpuKzoT78ImdPw1OawNAMAbVww8YuMygY6pgExihf1TrhVexp5jXXyD6dg2I1UCGuyi9tUNGMICEQ0UHLwsgezPgqhpcqrxOMFOi1qW8u24COU7%2BYed7tBY2XcEVoEyq%2FDRVEDgEvjooW13dnC0xJ%2FaRZdfiIyRj8excF6%2FPf7gRHqYTDdIq2kVcyhV6ce6yNSySTWD5U0U1GO5cVL5F31O0SThiaCBP2h7V6BZzc%2BrzYZ66FYnf8iDtl2nPg0D5JL&X-Amz-Signature=e023e2cab1b2adfc0fb9edae9621ff5381965b323006c0ebb7b4a4a6a73ab5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
