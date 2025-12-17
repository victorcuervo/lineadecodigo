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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOIKHN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHylihrJlak278aVO3AEjLmqawS6QPu6kqJfSVZaGsQMAiB4rvPlNyDzbXbV5mYMqcMfjZzcRcaNuPmsEe9JJ9Xweyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnu7w%2FAU%2B2Zm31BRqKtwDlvTIyo%2BQsJRXGzGKGw4fukGBORuBS3g%2FfJUGJ%2BvHgMIFpI9tJdPH2BdVQ3YJevSbPKgjdzF3wO14dkLXtAmpvRvJAFz%2FRqyIL8gxzj9ux1J%2FbrUD6T%2BEIPjSU7k16WJPo%2BY4IFoPPV1QICjQJGpbbFAFDIgFu4eolvhm6%2BvP31ahgSBqP9r%2F2lZ4LV9aCMPMkChJPAKEHND4326kVDpLvOOfHJ2SEA1LJfJ3ZXpZYb9LeOPgRR6cek9zyYct4JqjysbW%2FQxh56TGJTeMt%2FhfhtNbzzqE7TTa3b2aSiu19jNWHK4fe697qzkZDNXmAo%2F5gonZSwZQs%2F66PmJinOBHB806bYWEDNmj4Kzgl0lKHOrOdWsSlCqts2i34Q16F0VcHCfS9ZDoLi5yElqSfMLRtOXJP0orPABMrN%2FLelROd4O40YcerVvAIuAVnpjHJyH7s%2FGBx52MvIrTy0AG14byFoTpjHy%2F0cKXM30h23uwv5B3nNNk6io3kgZpCgRDL6qqFJKyt7t0VQVEPb30uZ1IUgSunVZa7nflYy8kPKRSivgY1U6u%2FcmaOI9OyqZR3oeWaAKupWxD2SCt3lc%2FoxYEM4WSRUZ%2Bs56KzOmKdjKNewcZyRaXgai864kE4DYw052JygY6pgFt3%2FvK11KgRP7PqSyKEKe7Qc9rlYiGWulmAzQi0zhuC75Yv1wnwVJ1SivSPJuUv7EN4BMg7RpMHTvTYifcvWPOsc5xlKnd9MfbPT7EHr5%2FVvAXK8oiYlJ1%2FJjxHQgMG8d3TLsHDuFppl5Di6a%2BHNDa10ufSEYJOMhnK0AizNMK7kh74M2IN2D%2FfFPpdycuQCz6ZCQGfHFgz3fo4jLVC1ACVBC6NttJ&X-Amz-Signature=4f1197d418b7265fb7b86ae2481ae47901f43b965d591baee6e2f2ae350770c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOIKHN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHylihrJlak278aVO3AEjLmqawS6QPu6kqJfSVZaGsQMAiB4rvPlNyDzbXbV5mYMqcMfjZzcRcaNuPmsEe9JJ9Xweyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnu7w%2FAU%2B2Zm31BRqKtwDlvTIyo%2BQsJRXGzGKGw4fukGBORuBS3g%2FfJUGJ%2BvHgMIFpI9tJdPH2BdVQ3YJevSbPKgjdzF3wO14dkLXtAmpvRvJAFz%2FRqyIL8gxzj9ux1J%2FbrUD6T%2BEIPjSU7k16WJPo%2BY4IFoPPV1QICjQJGpbbFAFDIgFu4eolvhm6%2BvP31ahgSBqP9r%2F2lZ4LV9aCMPMkChJPAKEHND4326kVDpLvOOfHJ2SEA1LJfJ3ZXpZYb9LeOPgRR6cek9zyYct4JqjysbW%2FQxh56TGJTeMt%2FhfhtNbzzqE7TTa3b2aSiu19jNWHK4fe697qzkZDNXmAo%2F5gonZSwZQs%2F66PmJinOBHB806bYWEDNmj4Kzgl0lKHOrOdWsSlCqts2i34Q16F0VcHCfS9ZDoLi5yElqSfMLRtOXJP0orPABMrN%2FLelROd4O40YcerVvAIuAVnpjHJyH7s%2FGBx52MvIrTy0AG14byFoTpjHy%2F0cKXM30h23uwv5B3nNNk6io3kgZpCgRDL6qqFJKyt7t0VQVEPb30uZ1IUgSunVZa7nflYy8kPKRSivgY1U6u%2FcmaOI9OyqZR3oeWaAKupWxD2SCt3lc%2FoxYEM4WSRUZ%2Bs56KzOmKdjKNewcZyRaXgai864kE4DYw052JygY6pgFt3%2FvK11KgRP7PqSyKEKe7Qc9rlYiGWulmAzQi0zhuC75Yv1wnwVJ1SivSPJuUv7EN4BMg7RpMHTvTYifcvWPOsc5xlKnd9MfbPT7EHr5%2FVvAXK8oiYlJ1%2FJjxHQgMG8d3TLsHDuFppl5Di6a%2BHNDa10ufSEYJOMhnK0AizNMK7kh74M2IN2D%2FfFPpdycuQCz6ZCQGfHFgz3fo4jLVC1ACVBC6NttJ&X-Amz-Signature=65ebe8da4c01db190baaa0e083e7f5394cd8a6d90ffd3927243b4ce8644efe06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
