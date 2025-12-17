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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CH26ZOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0XvguKipt3mFg1IfDJTaTiDg%2FIRX2q11yAZn%2FzKS4qAiAwkZx%2FZ0iUbmz6Q6mn0q9h5qfzGeqYyDyhbALT6zLLdSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM2Kqds760OAMQCiq4KtwDIE8Ah%2BlB5muoos2k0im1pREeHPgnKy9j0Jv%2F%2FMBDnldSxaReftEynCSqUXsmded0sd%2B3MnyOzwXEzYIIqsdNS7h7PVCGQBINZoGYg1GRTCghC6F9iVpzCS1Uwwnykjs%2F5xYj%2BqMOOWMyWDXDimYwsGndLB03o9gv0jjunwjNdG9t2uD0O%2Fd1AKLdZqBSKKohjvRwFGe9YuZHAOIAGxaLCpYgspdg3E38rGnO0MM4xB4gDjz%2FszM7ETWtp6hzaHZK1xdfqOfSCgGNygxwHWDmqL0U6W7yXcYl9fowywrr%2FUt5GDQXtRGtxUHBrpozZIKf5obXtsKaVRhuF2n%2Bl1QSNILu8H7tJSriOerwOvcSKLkFveF9aFV295Q37vP8A5mbJBqgVkt6lzD2fS8zhrSQ4y1ULfYe6SuQbi9cEHtXQnv22JnSE2DZsyX4X0QhczNGkNMRU1EboYAAnaBw5DcheVkUduz7VNYgLlknehmXdhWiHA1bqjNkBI3ShTFqPjj0OVcd9FLQ1gYpKFr%2FB%2F4xFz3%2BTeXW2BefaJEXS6nfD0Iw9kHLGuz%2BITVBfTRdFgIWPMdfOQLnCQ%2BNRbe4IB5a0wNiUYVneXySNPzVKrM2B8IDklR2lDwScLBEH5cw75aIygY6pgGfEi2ZdnQtySofkpuE1BtvulfZmWLJYLCNM7IR26ahU%2FmxRGlm9V7tY8ZAso%2FylNI4rQ5iEhI6w%2B%2B7WnWBOOQX2qMM2J0CxUaWhZxnEpeQrJWGTCprZ%2BverdO4ZlyvFqDphF13UO5qeuuSmnJLs3hDq%2BU4%2F8lk74T1QsASPPbq7tfxT3vSi9QS%2BsUksudGtP9Uk2mOoEv%2FQ3VgbE%2B88fGslRV5zY05&X-Amz-Signature=ce89649ead3b767a95407c1e2002d20fd33db54466e11e4a560c9fc1b144e52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CH26ZOW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0XvguKipt3mFg1IfDJTaTiDg%2FIRX2q11yAZn%2FzKS4qAiAwkZx%2FZ0iUbmz6Q6mn0q9h5qfzGeqYyDyhbALT6zLLdSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM2Kqds760OAMQCiq4KtwDIE8Ah%2BlB5muoos2k0im1pREeHPgnKy9j0Jv%2F%2FMBDnldSxaReftEynCSqUXsmded0sd%2B3MnyOzwXEzYIIqsdNS7h7PVCGQBINZoGYg1GRTCghC6F9iVpzCS1Uwwnykjs%2F5xYj%2BqMOOWMyWDXDimYwsGndLB03o9gv0jjunwjNdG9t2uD0O%2Fd1AKLdZqBSKKohjvRwFGe9YuZHAOIAGxaLCpYgspdg3E38rGnO0MM4xB4gDjz%2FszM7ETWtp6hzaHZK1xdfqOfSCgGNygxwHWDmqL0U6W7yXcYl9fowywrr%2FUt5GDQXtRGtxUHBrpozZIKf5obXtsKaVRhuF2n%2Bl1QSNILu8H7tJSriOerwOvcSKLkFveF9aFV295Q37vP8A5mbJBqgVkt6lzD2fS8zhrSQ4y1ULfYe6SuQbi9cEHtXQnv22JnSE2DZsyX4X0QhczNGkNMRU1EboYAAnaBw5DcheVkUduz7VNYgLlknehmXdhWiHA1bqjNkBI3ShTFqPjj0OVcd9FLQ1gYpKFr%2FB%2F4xFz3%2BTeXW2BefaJEXS6nfD0Iw9kHLGuz%2BITVBfTRdFgIWPMdfOQLnCQ%2BNRbe4IB5a0wNiUYVneXySNPzVKrM2B8IDklR2lDwScLBEH5cw75aIygY6pgGfEi2ZdnQtySofkpuE1BtvulfZmWLJYLCNM7IR26ahU%2FmxRGlm9V7tY8ZAso%2FylNI4rQ5iEhI6w%2B%2B7WnWBOOQX2qMM2J0CxUaWhZxnEpeQrJWGTCprZ%2BverdO4ZlyvFqDphF13UO5qeuuSmnJLs3hDq%2BU4%2F8lk74T1QsASPPbq7tfxT3vSi9QS%2BsUksudGtP9Uk2mOoEv%2FQ3VgbE%2B88fGslRV5zY05&X-Amz-Signature=d3a4d75cb0bfac474c7fe271180c10f5f6dc84872fe8efc62bee080a6f377743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
