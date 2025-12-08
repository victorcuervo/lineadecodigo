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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5J2TIG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMFLPujwVyK3VGftLnCC8zTn9Xl6MtqkzFYcccOqLicAiEAyJOJeIGEHmv2zwxn6%2BuiptsDlwquzPCGYYxaGVDvteQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt3ltnX7ajik6hz5ircA8iv0fl%2BZvJvAcLDJJesRTVIzyS4wzDI0oScdWHGmcumKrICpajH8DcCEmbmYG6%2BXbPiYYZ4eZYmEVV85TL04rh5F5%2B%2F9AYicfWNPkvXZECNr%2FK1fMVnAz8eiMzrpSD3hPYzL4YOAg3Ph4qEwtHXOPRs%2BHaMGkI%2F78wTWbN6dNsJBV0s9FiaH9gkAJPBn%2BM3bvJlkMrqQiT2lORitpPOcT%2BAWL1sYgliOD%2BVzLMS%2Fdu4AW6YdjpC24W9Kg%2BoEbAQakmlafUi2t9kr4JPbtxAcKrWlvGVSkidGXaWSlLHNJbt%2Fw2RzgFra%2BoVDGqDGeblIVX5xJ75fVoFBnrGFm7S4hrf%2FLcn4gTtOjnHoHBT1uv8ADz23NHmlwCuCPTWRlW3Qqoy%2FMiOonNcpA90TugVSARXUrQSA61iyos6p8caRhW7sca638CsT7QLodCUo%2B9Qs9Vrgqmze5sl8J2NqzJUobxFyVJk%2BEyLVKSkbs24w0gp83C43ZUhQw10vg0v6zHb6QB%2FK28bzv5xLNW0PoCisL21DjsDsqPjIUdAF53a4U8QDoIAbzpXDOyLM5%2BTtDRAqxaX66%2BqPqYlAbAqQVFZxXIfFbQCAGxNGS79hhKLyogDw6wEIcN%2Bx7qf0R49MNWh2MkGOqUBJNSiDnswHdzi%2BJ3TNe5QMNmpfsoHmrzfx4%2BzW1jpeTmn5XMM830YccwN7xgODLSjFJkKooswdQvoQtNqrDHaIJ00NKY99YXOZrZDL5bKaH91bQEDQ2KOF4JBi3dokL%2FjMWufJAD2OyqxOY15PGtnui4UFHMMngvydL%2Bf%2FueIeeevkTA7YAQePfYM%2BnXJfURWbceeci8BINpEbJOVY2WAmcq33AWk&X-Amz-Signature=03b902d9154e610a1ee23a5d1762220a3e871470cb3217215b11efb69ee5a553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5J2TIG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMFLPujwVyK3VGftLnCC8zTn9Xl6MtqkzFYcccOqLicAiEAyJOJeIGEHmv2zwxn6%2BuiptsDlwquzPCGYYxaGVDvteQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEt3ltnX7ajik6hz5ircA8iv0fl%2BZvJvAcLDJJesRTVIzyS4wzDI0oScdWHGmcumKrICpajH8DcCEmbmYG6%2BXbPiYYZ4eZYmEVV85TL04rh5F5%2B%2F9AYicfWNPkvXZECNr%2FK1fMVnAz8eiMzrpSD3hPYzL4YOAg3Ph4qEwtHXOPRs%2BHaMGkI%2F78wTWbN6dNsJBV0s9FiaH9gkAJPBn%2BM3bvJlkMrqQiT2lORitpPOcT%2BAWL1sYgliOD%2BVzLMS%2Fdu4AW6YdjpC24W9Kg%2BoEbAQakmlafUi2t9kr4JPbtxAcKrWlvGVSkidGXaWSlLHNJbt%2Fw2RzgFra%2BoVDGqDGeblIVX5xJ75fVoFBnrGFm7S4hrf%2FLcn4gTtOjnHoHBT1uv8ADz23NHmlwCuCPTWRlW3Qqoy%2FMiOonNcpA90TugVSARXUrQSA61iyos6p8caRhW7sca638CsT7QLodCUo%2B9Qs9Vrgqmze5sl8J2NqzJUobxFyVJk%2BEyLVKSkbs24w0gp83C43ZUhQw10vg0v6zHb6QB%2FK28bzv5xLNW0PoCisL21DjsDsqPjIUdAF53a4U8QDoIAbzpXDOyLM5%2BTtDRAqxaX66%2BqPqYlAbAqQVFZxXIfFbQCAGxNGS79hhKLyogDw6wEIcN%2Bx7qf0R49MNWh2MkGOqUBJNSiDnswHdzi%2BJ3TNe5QMNmpfsoHmrzfx4%2BzW1jpeTmn5XMM830YccwN7xgODLSjFJkKooswdQvoQtNqrDHaIJ00NKY99YXOZrZDL5bKaH91bQEDQ2KOF4JBi3dokL%2FjMWufJAD2OyqxOY15PGtnui4UFHMMngvydL%2Bf%2FueIeeevkTA7YAQePfYM%2BnXJfURWbceeci8BINpEbJOVY2WAmcq33AWk&X-Amz-Signature=f33bb56da6502b9dd20cff2d5bb79b6c4c240480ed40de75fec00dec5e73e877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
