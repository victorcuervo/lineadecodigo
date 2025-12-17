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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPBUJVF5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTXYag2W4KoIFzeYnaXUR93v8y82tfG3S7lv2x2NWvBAiBYpe2%2B5FKC4Ve95D4EzmO9BLp1mQx3lP%2B2BldsDnfqnyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYVTthuubWYYsP%2BPKtwDPjCtVgYdFeLgmk0wMZTR8fAInHmLxBXNdG7NMwaJOmsOm%2BvWzRbSaIwHkHx%2F6RIpr76h3zhGH6XSaZyA7FQGt4FK1Ui1RGrALdOn8JgfI4FRbIeaDLMkJzQ%2B8hm2fd0d5BuCOqAJs4C98XEuyVdMVh1d1JI9bHf2%2B%2Bm3fqwPg96tgZ0mP%2FKbxxmHHnQjgRNniSD3nen6unYn4fU%2BB38s7uR8dDquyXkS4QxGAc%2BpMXGCUhaqfvJnFg6vCPXeCfyeYOFK3Wm6W2HU3zKp1STlfjIkboXhgqPJU1ZMpzwmeaPctQHdoBNkhAaDyiajWpMnD5FFIcRo%2B1pntIGXKi4d2By65J45izok6uhZlUJg7PeBT2a2MEtOCKiBa5fBi94%2B4FAmpdq0pL6JZrQ4mF0M0TC%2Fp59A0zRiSPJD7PJkm9OZvcPjvlceLubr9MR6YtJjvIXtwCA%2Fvaaeqdj05VCl9Z%2BC579CZUytaN%2FwhAn58CAXMUMvqrJPZGkdfICTKnXQ9bUiDxXn%2FN%2FwwgGJCFvvux03IsSOK3jTHRrGYT1Qk9IGPP13XocTmK9plQ6yA5vVKFLvMRwlOvWWA%2Bu0nccNefXmMZ%2Be5h%2BEzZmZE5EOxTQ7o02%2BA%2FrK4vTD1Jkwyp6LygY6pgH3o6afOblV%2B3pscu14HijK9voR5G2vH76nMZRVgVjgqZEcIw4%2FnHyCnae5JrDwRLNbXclvis4NeBwBB2Ix3QPizfXs1ybd8Yv0r0nGHBMUSYD%2FFIQ8jHIbp5re4kkRmgjvN%2FfEeuim%2BOBF5VMUwE2zsIB9U0F8EivgF2ZToOR1C8bnhcBRDzMMPhIcqH3Tuo3BYeFCdEmsicRfNMk9gtcuJ8myxFen&X-Amz-Signature=cab1749d9db2b2f0085a62b2f8125448c858750013688815cebd78c4ae7fc59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPBUJVF5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTXYag2W4KoIFzeYnaXUR93v8y82tfG3S7lv2x2NWvBAiBYpe2%2B5FKC4Ve95D4EzmO9BLp1mQx3lP%2B2BldsDnfqnyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSYVTthuubWYYsP%2BPKtwDPjCtVgYdFeLgmk0wMZTR8fAInHmLxBXNdG7NMwaJOmsOm%2BvWzRbSaIwHkHx%2F6RIpr76h3zhGH6XSaZyA7FQGt4FK1Ui1RGrALdOn8JgfI4FRbIeaDLMkJzQ%2B8hm2fd0d5BuCOqAJs4C98XEuyVdMVh1d1JI9bHf2%2B%2Bm3fqwPg96tgZ0mP%2FKbxxmHHnQjgRNniSD3nen6unYn4fU%2BB38s7uR8dDquyXkS4QxGAc%2BpMXGCUhaqfvJnFg6vCPXeCfyeYOFK3Wm6W2HU3zKp1STlfjIkboXhgqPJU1ZMpzwmeaPctQHdoBNkhAaDyiajWpMnD5FFIcRo%2B1pntIGXKi4d2By65J45izok6uhZlUJg7PeBT2a2MEtOCKiBa5fBi94%2B4FAmpdq0pL6JZrQ4mF0M0TC%2Fp59A0zRiSPJD7PJkm9OZvcPjvlceLubr9MR6YtJjvIXtwCA%2Fvaaeqdj05VCl9Z%2BC579CZUytaN%2FwhAn58CAXMUMvqrJPZGkdfICTKnXQ9bUiDxXn%2FN%2FwwgGJCFvvux03IsSOK3jTHRrGYT1Qk9IGPP13XocTmK9plQ6yA5vVKFLvMRwlOvWWA%2Bu0nccNefXmMZ%2Be5h%2BEzZmZE5EOxTQ7o02%2BA%2FrK4vTD1Jkwyp6LygY6pgH3o6afOblV%2B3pscu14HijK9voR5G2vH76nMZRVgVjgqZEcIw4%2FnHyCnae5JrDwRLNbXclvis4NeBwBB2Ix3QPizfXs1ybd8Yv0r0nGHBMUSYD%2FFIQ8jHIbp5re4kkRmgjvN%2FfEeuim%2BOBF5VMUwE2zsIB9U0F8EivgF2ZToOR1C8bnhcBRDzMMPhIcqH3Tuo3BYeFCdEmsicRfNMk9gtcuJ8myxFen&X-Amz-Signature=764aee743a9cecd5b46b9699618a08ed09d39c222d583a66425d1ee3dc014878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
