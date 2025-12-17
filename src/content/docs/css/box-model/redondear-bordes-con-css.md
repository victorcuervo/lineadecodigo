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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCUVKQX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUzosSONf%2BpOmoGbkGe0tcUT09nIBvO5pRC3b3Vchm2QIhAL8MMmA4Npp1H1D%2FwWow%2BIkgNqIq3Um2PWEhFkblHwwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyUXTtcNt5m60MevN8q3AM7MSTHkivzeAiJouD%2FpGEKzUPIuQks1a5ccDzCIgFSqCuY9iBm92ccqaNGVjEwPTwV2LB4QtUtiI5FMt%2B%2Fwh9s6O3WQarQtM%2BDecmBUGHHMSYRAoCC4F8HUdxsyrzsKZB37N2HBYcynXluESHZ5j0Uv30V4TDiKQpub59oT%2BPXborBNuvRANsdFGgvVGD%2B7jD9K%2FaIiODdY%2BXAXOfUj0i7ESl2qyMGu37QVJRGf%2BNCP6FvRoZATc6A7mUniE8z38HHcazTiHVyYhWeoJslnOUTrT3pPsvJXkL9fIKdMdG6LkGPShe2Fb9S6A4s29suXC1VJd%2BS7MZIXGb4%2FM5WvSkEzcBq9wGlUWNITNDjALF9KZkZ3UJslZgtjlQM4rd2B%2BZvkJEBh8Rm0Qcp5XbrahzQXEA6qj%2F3%2B2Ef9DafyaeL5LHF6le%2BCfYDmk26ETcN23w6FElZNmLCbOh3y%2FE%2F2VIDU8B7Z%2FIKZ9qAJi915rxoCDLr5R1J7LwALpCrhb1ImPJ7XRfavLzUKGW6NBR6IVGfRHtAyfNQodoILpY8lL3fPo8cTOKmYjxaagA1E0fCxTVhrWEsYxWMkxj00fQyx5AT6EHdmVi%2BiZVwG9%2FXuvJn4ubpRYrrMSgwCSHGhDDag4nKBjqkAVGn6AF9U35zd29MTCfwWKESestueZ8nOPdMXVBt%2Bt0mxEOx5v%2FhrhaS3W4Xe%2Bcd4CTkGJI9FsegB8xPKeMbtAj%2F6DtouQHp2ObxhSfbUPkB6s%2BMp45HfiOuq2AMVdMfpO3XE8ah87t%2BdVv2AQmUgIrXSBF2YjywziV%2FEOOmNjJnYlHW%2B3OSW4VwDpTnM5SaLYC%2F8UePaRTlAe6SZGJVkdiTlFpt&X-Amz-Signature=fd9bedd742ed118795413d885ba0f2575720479b1665f80ede14e5ebab4dd7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCUVKQX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUzosSONf%2BpOmoGbkGe0tcUT09nIBvO5pRC3b3Vchm2QIhAL8MMmA4Npp1H1D%2FwWow%2BIkgNqIq3Um2PWEhFkblHwwiKv8DCHcQABoMNjM3NDIzMTgzODA1IgyUXTtcNt5m60MevN8q3AM7MSTHkivzeAiJouD%2FpGEKzUPIuQks1a5ccDzCIgFSqCuY9iBm92ccqaNGVjEwPTwV2LB4QtUtiI5FMt%2B%2Fwh9s6O3WQarQtM%2BDecmBUGHHMSYRAoCC4F8HUdxsyrzsKZB37N2HBYcynXluESHZ5j0Uv30V4TDiKQpub59oT%2BPXborBNuvRANsdFGgvVGD%2B7jD9K%2FaIiODdY%2BXAXOfUj0i7ESl2qyMGu37QVJRGf%2BNCP6FvRoZATc6A7mUniE8z38HHcazTiHVyYhWeoJslnOUTrT3pPsvJXkL9fIKdMdG6LkGPShe2Fb9S6A4s29suXC1VJd%2BS7MZIXGb4%2FM5WvSkEzcBq9wGlUWNITNDjALF9KZkZ3UJslZgtjlQM4rd2B%2BZvkJEBh8Rm0Qcp5XbrahzQXEA6qj%2F3%2B2Ef9DafyaeL5LHF6le%2BCfYDmk26ETcN23w6FElZNmLCbOh3y%2FE%2F2VIDU8B7Z%2FIKZ9qAJi915rxoCDLr5R1J7LwALpCrhb1ImPJ7XRfavLzUKGW6NBR6IVGfRHtAyfNQodoILpY8lL3fPo8cTOKmYjxaagA1E0fCxTVhrWEsYxWMkxj00fQyx5AT6EHdmVi%2BiZVwG9%2FXuvJn4ubpRYrrMSgwCSHGhDDag4nKBjqkAVGn6AF9U35zd29MTCfwWKESestueZ8nOPdMXVBt%2Bt0mxEOx5v%2FhrhaS3W4Xe%2Bcd4CTkGJI9FsegB8xPKeMbtAj%2F6DtouQHp2ObxhSfbUPkB6s%2BMp45HfiOuq2AMVdMfpO3XE8ah87t%2BdVv2AQmUgIrXSBF2YjywziV%2FEOOmNjJnYlHW%2B3OSW4VwDpTnM5SaLYC%2F8UePaRTlAe6SZGJVkdiTlFpt&X-Amz-Signature=5647caadd8237429d4fcb31b89cf5d0f69775c43b5a79848ee067cb6614f5afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
