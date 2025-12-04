---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMUNJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHBsy6USOwYTLreYAu12gx1liqdZY%2F9rvbi6usPaN7mcAiEA%2F7I8u9%2BuvwSSVfXLAYXONrZbV9Z8z8LTAUpePfnprGoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDL7qYYiv1qDtn7EwrircA43MVY3tgO4FIh5ErRJRqDB7k2et0LcgA9tKsZn3PSpivojLTXNyI7h3rRYoj%2B%2BuWLGueZjtniOuKh0J74nwEWovyOmOcTAe57uMyxDnf6UN28VA0wXIKX679aGHhjM%2FUTSod0DD2%2FaJOXfJJhHhZiClccPYjjpnkroxE2ZEiHdZNSP9V%2B0xKWvxaVij1SSkJEjY%2F%2FCZS09VHeIjkRlFdup75rG6o4DbEERSMPG5NPjG3TiCF2ElDWWdEhtK21UI4Lo6tRk%2F37xKQ%2F%2B%2Fu51rXOntJn167KjnF%2BupwZEDFEPNAPES4SGrsQv9nI2PRN0g7Ggx%2BfELnvEp0asU8sl3JSfujjt%2FetR0UnIfS0ohaWbwj8CCH7PBRK8ZJ2a%2BHDVkXzPEH%2F%2BRcS8xSSm2qaGDtb98bwehkGk78vXuq0ThXruqUkHLs4g1m1OkIIVn3koNHCff0%2BTIGhgmX23vgEOQMLEhfUq33%2BfA3JiXfcKT5fL9FiAehD5Yu%2B6DTxcfF6e2YJGz%2B6eO8XV3co6UHt%2FQ5hNSLWxV2t%2FPFwXzsvmsaoXUyDVDEyC6lAGqVL3oFm63p1FqGDR2YwN6R9WTQkxkvMT%2F7deg1C3rCpIOVqojN6NdNvUdwBPRXP9T4R68MNq%2FxskGOqUBqWPx7nlcrlrVGlSLOY9THVpW08BKCWRaKLyZBjNulo%2BHhzRoIvJKv%2FdUXB2sWpB0wYLh0UwnibKdHX7FA76WJczVq51SML5Gla7jmILU1k0DB4cDmKbwLVOxI57osIEWu0LVNULk7k78aJnNi%2BEkOb%2Bw4dsVNUb32GlSs3F1f22z2%2B3w04b%2BhFNJKpWxGas2dKM39Ww5fyKMtR65P20xTiK8po6J&X-Amz-Signature=f2423545f91633302b9d168a1bd4c4cd2b4730bd26c5f83ec32b7b902f5894cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMUNJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHBsy6USOwYTLreYAu12gx1liqdZY%2F9rvbi6usPaN7mcAiEA%2F7I8u9%2BuvwSSVfXLAYXONrZbV9Z8z8LTAUpePfnprGoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDL7qYYiv1qDtn7EwrircA43MVY3tgO4FIh5ErRJRqDB7k2et0LcgA9tKsZn3PSpivojLTXNyI7h3rRYoj%2B%2BuWLGueZjtniOuKh0J74nwEWovyOmOcTAe57uMyxDnf6UN28VA0wXIKX679aGHhjM%2FUTSod0DD2%2FaJOXfJJhHhZiClccPYjjpnkroxE2ZEiHdZNSP9V%2B0xKWvxaVij1SSkJEjY%2F%2FCZS09VHeIjkRlFdup75rG6o4DbEERSMPG5NPjG3TiCF2ElDWWdEhtK21UI4Lo6tRk%2F37xKQ%2F%2B%2Fu51rXOntJn167KjnF%2BupwZEDFEPNAPES4SGrsQv9nI2PRN0g7Ggx%2BfELnvEp0asU8sl3JSfujjt%2FetR0UnIfS0ohaWbwj8CCH7PBRK8ZJ2a%2BHDVkXzPEH%2F%2BRcS8xSSm2qaGDtb98bwehkGk78vXuq0ThXruqUkHLs4g1m1OkIIVn3koNHCff0%2BTIGhgmX23vgEOQMLEhfUq33%2BfA3JiXfcKT5fL9FiAehD5Yu%2B6DTxcfF6e2YJGz%2B6eO8XV3co6UHt%2FQ5hNSLWxV2t%2FPFwXzsvmsaoXUyDVDEyC6lAGqVL3oFm63p1FqGDR2YwN6R9WTQkxkvMT%2F7deg1C3rCpIOVqojN6NdNvUdwBPRXP9T4R68MNq%2FxskGOqUBqWPx7nlcrlrVGlSLOY9THVpW08BKCWRaKLyZBjNulo%2BHhzRoIvJKv%2FdUXB2sWpB0wYLh0UwnibKdHX7FA76WJczVq51SML5Gla7jmILU1k0DB4cDmKbwLVOxI57osIEWu0LVNULk7k78aJnNi%2BEkOb%2Bw4dsVNUb32GlSs3F1f22z2%2B3w04b%2BhFNJKpWxGas2dKM39Ww5fyKMtR65P20xTiK8po6J&X-Amz-Signature=84dea458f6f965112fb42473561cf543f271a209c9954a22aa464876d1583e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
