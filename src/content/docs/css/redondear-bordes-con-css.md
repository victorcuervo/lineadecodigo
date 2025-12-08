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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHIZ6K3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FjM0DY6VDIPliWW%2BiiH9mG%2FcHN9Es6F9%2FkrAWxNBf2wIgSE4P8LZVq4K%2BfXK30RwJ%2B5nmsyRvQq9E%2BIxJzDAYblcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALqJfdMroPaXSRNxCrcA1JTjSO%2BenhaShx9rPqwo%2BkF%2FrInpcAW%2BLkAyg6XP6XDOqpFuQeIA1zx%2FHfpeaBqVDbprtMrjPCmlRkB1NL7YO8wLICDVUgJ0u%2Fdo2icgUa8tSuox3Lv%2BnVIF2lwpGvXbNLiKn994XNFCMk1UXkbQbqE%2BFjN6uAYfqLfDRji0SLrHbXxENxzbzSUqVSL5MzqL2IgT2oiIYBmmKpXNB9gb5HgCHh4NJO9pu%2BwV7Ad5OCq6i0iLNq55zhnB%2BRqL9ahZN0uFMVHwi2pGFqtPmU%2Fa6d3MuvoZoDyXNDpEDg%2FiLtFtloW%2BsXdQodLrgMZo28HVq5I6cKTe5IONjemLaNlBivkoYs%2Bnb2hDdiGU3Ljx8RoAWu7UIuJ0xrfdhaBROdtV0n8CI%2BMLnysI4w2%2B%2F5rr0U53vzTDrdXLgetZLV0J1WORVueQOacAV0tn6trxeGKA5KbbN8Tayx5KOBMLPqy9m0tlYYgbPVFAoc77WcTXaUcgKZEg6a%2FMPYaPpe1QkfTVsD2nfZwpZgvNFoE8h9CVJ7YBwsjolwKI7e9iO5vd%2BYPhd7nkRYCp5h9KqEb1%2BjjaPPr3jyMc7dDcDwnOMJTJ1M3oov3jePsXNfqNZXByHlnhKTZUWnPkeQrdrcyMM2h2MkGOqUB0bDXc%2Fr5sVXujGMvyS4jQisB4LeutDNABWYF2K%2FK1z%2B9EQqrfgK34211CRrmsMeLioQvhPG%2FXeWGIbWLGhtzLxC8KdWCYTzbWHLNm0j2ftp5vZv19xN57qxGv5oacrwPcGX3kOyhO8vQ%2BdiLQ%2F8Csnj0GJMYXvF%2Fw1GnbGsWeyumVPEV104rssWGjc0Rg2g0ECVAb4yuWO0RmIJGtTnRYJANa%2BYX&X-Amz-Signature=a28d02802c8a512c42b58dba927cf1579f1db67f9f0d74a25e2c894f8d29c673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHIZ6K3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FjM0DY6VDIPliWW%2BiiH9mG%2FcHN9Es6F9%2FkrAWxNBf2wIgSE4P8LZVq4K%2BfXK30RwJ%2B5nmsyRvQq9E%2BIxJzDAYblcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALqJfdMroPaXSRNxCrcA1JTjSO%2BenhaShx9rPqwo%2BkF%2FrInpcAW%2BLkAyg6XP6XDOqpFuQeIA1zx%2FHfpeaBqVDbprtMrjPCmlRkB1NL7YO8wLICDVUgJ0u%2Fdo2icgUa8tSuox3Lv%2BnVIF2lwpGvXbNLiKn994XNFCMk1UXkbQbqE%2BFjN6uAYfqLfDRji0SLrHbXxENxzbzSUqVSL5MzqL2IgT2oiIYBmmKpXNB9gb5HgCHh4NJO9pu%2BwV7Ad5OCq6i0iLNq55zhnB%2BRqL9ahZN0uFMVHwi2pGFqtPmU%2Fa6d3MuvoZoDyXNDpEDg%2FiLtFtloW%2BsXdQodLrgMZo28HVq5I6cKTe5IONjemLaNlBivkoYs%2Bnb2hDdiGU3Ljx8RoAWu7UIuJ0xrfdhaBROdtV0n8CI%2BMLnysI4w2%2B%2F5rr0U53vzTDrdXLgetZLV0J1WORVueQOacAV0tn6trxeGKA5KbbN8Tayx5KOBMLPqy9m0tlYYgbPVFAoc77WcTXaUcgKZEg6a%2FMPYaPpe1QkfTVsD2nfZwpZgvNFoE8h9CVJ7YBwsjolwKI7e9iO5vd%2BYPhd7nkRYCp5h9KqEb1%2BjjaPPr3jyMc7dDcDwnOMJTJ1M3oov3jePsXNfqNZXByHlnhKTZUWnPkeQrdrcyMM2h2MkGOqUB0bDXc%2Fr5sVXujGMvyS4jQisB4LeutDNABWYF2K%2FK1z%2B9EQqrfgK34211CRrmsMeLioQvhPG%2FXeWGIbWLGhtzLxC8KdWCYTzbWHLNm0j2ftp5vZv19xN57qxGv5oacrwPcGX3kOyhO8vQ%2BdiLQ%2F8Csnj0GJMYXvF%2Fw1GnbGsWeyumVPEV104rssWGjc0Rg2g0ECVAb4yuWO0RmIJGtTnRYJANa%2BYX&X-Amz-Signature=ea2e5ed30e63b5c9ee7528c519009e45d0bec9f994af15a9b48ac71052194e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
