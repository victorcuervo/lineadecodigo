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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPRO63Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeVyMxBTWZPsOG45K3blWwWl9aFF6KqKPM%2FaftlQX8GAiEAs%2Fwz6UJhJsZmi4OJJu%2B8Tjm%2Fltus1NdQkuoRn2TcwKQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPZwsDv5vIFrRUe5wCrcA78cH1mBc%2FUKxYnuLkCKfiXLGzxEFVPaSpVqOEmqPOdTbRLa3gLCIjnm%2F2gNXd%2BwdfWOAYmq8kzdY65peR4cN9YOs4I%2FpAU8%2FN59NqFXIF%2FulTsV98R5FexXGjATX%2F%2B%2BNij0LsIwOqyWqPBUgMYWPaz7fCtfNBCMgyKsQFO9GuB5Y9SeweCMHg0TzgoohNWqklwz9r9wECb7jp19aV%2BhoL5beff7A3SNvcVaPnY9%2B1UytTJtlpD8cUbcvjSVWKm5eElnEukNMpwDP8ixnWlz%2BDivxGBZO%2BEcSnItqtuMYUu27gIdMR4fKlBLt%2FJQcXppebC9PR00Tgz%2BA5xf7zj7AAfk3XpeZtpr7JBT6xId5xfulCKK3VJ56YadtOOvMPAlMpENqF9YSEjqACWHY%2BfJlkpGRYK58G21FRjGIsuuETUY5E1buJqvZV3sDa9dzqkSfyv8LNw%2BT2gRtDlojxcrJqufwhmX3JOIZPIN8WhX9NVm%2F83NqC7eHYnlnZmi64o2GORPpYzGQO%2BgK6cDmL0qJLEco%2BYyx1PcM0ZM0fHQUndgZoXeVN%2BRALva3yelQCu4w%2FfZCa%2BNfB4ltJv5oDa2%2FtN5Ccp5ImmOj2aobzJWs7wl2Zpk9%2F1caYi1WsglMK3SicoGOqUBi9ieCSsCrg7L9n%2BGg82f%2BDY6U1RrOX7mIMTXnCdcncb4eo4zzubgy6eI1v3QK9H6YSOO3ySZcb7eJ3Q9umm3TgAY%2FHKxMetI9F7NimBQK%2F%2FbmeP1EdlHsE0a%2Ff%2BQn3CoLfqazVe0er3GlvIf7m%2BFDtnpBRDobSAMfKUo6jcw8Y8LdAYDbSMN%2FF3L4fVXflskOKsq2rqPFIqJk6ab6iZZ788C3iru&X-Amz-Signature=ede26a1fe6d93363f2912ec354db83ae1dcfefe55592414824614ba7afab5fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPRO63Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeVyMxBTWZPsOG45K3blWwWl9aFF6KqKPM%2FaftlQX8GAiEAs%2Fwz6UJhJsZmi4OJJu%2B8Tjm%2Fltus1NdQkuoRn2TcwKQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPZwsDv5vIFrRUe5wCrcA78cH1mBc%2FUKxYnuLkCKfiXLGzxEFVPaSpVqOEmqPOdTbRLa3gLCIjnm%2F2gNXd%2BwdfWOAYmq8kzdY65peR4cN9YOs4I%2FpAU8%2FN59NqFXIF%2FulTsV98R5FexXGjATX%2F%2B%2BNij0LsIwOqyWqPBUgMYWPaz7fCtfNBCMgyKsQFO9GuB5Y9SeweCMHg0TzgoohNWqklwz9r9wECb7jp19aV%2BhoL5beff7A3SNvcVaPnY9%2B1UytTJtlpD8cUbcvjSVWKm5eElnEukNMpwDP8ixnWlz%2BDivxGBZO%2BEcSnItqtuMYUu27gIdMR4fKlBLt%2FJQcXppebC9PR00Tgz%2BA5xf7zj7AAfk3XpeZtpr7JBT6xId5xfulCKK3VJ56YadtOOvMPAlMpENqF9YSEjqACWHY%2BfJlkpGRYK58G21FRjGIsuuETUY5E1buJqvZV3sDa9dzqkSfyv8LNw%2BT2gRtDlojxcrJqufwhmX3JOIZPIN8WhX9NVm%2F83NqC7eHYnlnZmi64o2GORPpYzGQO%2BgK6cDmL0qJLEco%2BYyx1PcM0ZM0fHQUndgZoXeVN%2BRALva3yelQCu4w%2FfZCa%2BNfB4ltJv5oDa2%2FtN5Ccp5ImmOj2aobzJWs7wl2Zpk9%2F1caYi1WsglMK3SicoGOqUBi9ieCSsCrg7L9n%2BGg82f%2BDY6U1RrOX7mIMTXnCdcncb4eo4zzubgy6eI1v3QK9H6YSOO3ySZcb7eJ3Q9umm3TgAY%2FHKxMetI9F7NimBQK%2F%2FbmeP1EdlHsE0a%2Ff%2BQn3CoLfqazVe0er3GlvIf7m%2BFDtnpBRDobSAMfKUo6jcw8Y8LdAYDbSMN%2FF3L4fVXflskOKsq2rqPFIqJk6ab6iZZ788C3iru&X-Amz-Signature=b5b90ec58673939db871d894e36899142187cb7c949dc1f3be676b8cb0ab3a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
