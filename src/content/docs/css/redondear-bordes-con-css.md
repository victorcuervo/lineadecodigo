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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOAYQYL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlHlXK%2Frupcs1D1cJM8YPEozuqjmZq%2FNls%2FpLf1%2FbmcAiAdzOYiBDZoJ8snGH3Nsk%2BcJRuN1ICGM3clq7d6c%2Bd5iSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKjOchReX3QonRnyPKtwDVxAku02LOH370gQDSLYdU1TwABDpk5ZNjdQUhmYKAgFEUOUS47H5YW8LRKEDxpKW0TvjWFTOW8v%2B0IwHdHKZhkzagH1VYb45C7sl3Kate7tVTZhoC%2F8uv%2BXkjf5wYJ%2BPnoKnZGXCm94xadJtMK9vwqmDnodS%2FHu5VQs4kptJ0FA693hpmH6J3hLPsxrwV8qjDcJRPp9OHS%2F0HMrUDB89JUMEQcAjaynWK7czpVOcFVihXj7Gv4%2BI45qXB1%2BoffXXq%2FAwwMXmQEeevSBUtn%2B5gaxyZoJz9qBmzQB8zGGV4t1XwnCfC4o%2FRt7bbxPkXBxI2Icrs%2F2Cxv79b2ul5trYz4hPD0Aum%2FKTEaUQL3AiPICXDVNguBK1EyZBwFbufjg%2BjrJgJcCBC9ZM13MR0MDaTyFBA0arMIWIIdj6Pep3NjHc%2FHDlXz9R4Yd50KF6sPIS8y%2B99XoO%2B6oEbxGyLk%2FFD%2F%2BskbUaOUGWCykMqBCVQNpdDPeW7h%2FOIRkOqlh6xqju0en%2BBG%2FTNMgMmx0ejMfVDRaoUPon8yBPCA7Hm%2FSOqEGpTghfnxLQycyMzIMbJ5a%2BaYir5wejkEJm%2FhphjxbAugaAIPjSzvmlY9ayv%2BqFGLY2XfqpBGe12rEGgekw46bQyQY6pgFR3J8Qe0OVyTre94eoAAXCKyjlmhGhK4cEmHw4GPATArLwHnpyg6xKZEvu9GXSXA8IHtMRRFqpshJNJU3pA%2FeIptuhKlpHx%2BOEsdlaxNhZe%2BbNCgh2i2lPm6cPSUBwFu9%2FyVOQjJlWZSCt28UkUQ3FFp6Be8BQoLsfb63BRNgYTuUkQZjaCvsSVawIW5bJS%2BGBmX%2FSs%2B2%2BKr9yvrIWb3PVUIm0Wqjl&X-Amz-Signature=0025c8a2f80a633d93c087d73cfb8361fea6fdb0866a3153863035766f699301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOAYQYL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlHlXK%2Frupcs1D1cJM8YPEozuqjmZq%2FNls%2FpLf1%2FbmcAiAdzOYiBDZoJ8snGH3Nsk%2BcJRuN1ICGM3clq7d6c%2Bd5iSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKjOchReX3QonRnyPKtwDVxAku02LOH370gQDSLYdU1TwABDpk5ZNjdQUhmYKAgFEUOUS47H5YW8LRKEDxpKW0TvjWFTOW8v%2B0IwHdHKZhkzagH1VYb45C7sl3Kate7tVTZhoC%2F8uv%2BXkjf5wYJ%2BPnoKnZGXCm94xadJtMK9vwqmDnodS%2FHu5VQs4kptJ0FA693hpmH6J3hLPsxrwV8qjDcJRPp9OHS%2F0HMrUDB89JUMEQcAjaynWK7czpVOcFVihXj7Gv4%2BI45qXB1%2BoffXXq%2FAwwMXmQEeevSBUtn%2B5gaxyZoJz9qBmzQB8zGGV4t1XwnCfC4o%2FRt7bbxPkXBxI2Icrs%2F2Cxv79b2ul5trYz4hPD0Aum%2FKTEaUQL3AiPICXDVNguBK1EyZBwFbufjg%2BjrJgJcCBC9ZM13MR0MDaTyFBA0arMIWIIdj6Pep3NjHc%2FHDlXz9R4Yd50KF6sPIS8y%2B99XoO%2B6oEbxGyLk%2FFD%2F%2BskbUaOUGWCykMqBCVQNpdDPeW7h%2FOIRkOqlh6xqju0en%2BBG%2FTNMgMmx0ejMfVDRaoUPon8yBPCA7Hm%2FSOqEGpTghfnxLQycyMzIMbJ5a%2BaYir5wejkEJm%2FhphjxbAugaAIPjSzvmlY9ayv%2BqFGLY2XfqpBGe12rEGgekw46bQyQY6pgFR3J8Qe0OVyTre94eoAAXCKyjlmhGhK4cEmHw4GPATArLwHnpyg6xKZEvu9GXSXA8IHtMRRFqpshJNJU3pA%2FeIptuhKlpHx%2BOEsdlaxNhZe%2BbNCgh2i2lPm6cPSUBwFu9%2FyVOQjJlWZSCt28UkUQ3FFp6Be8BQoLsfb63BRNgYTuUkQZjaCvsSVawIW5bJS%2BGBmX%2FSs%2B2%2BKr9yvrIWb3PVUIm0Wqjl&X-Amz-Signature=1e9f535e9966e2abea1a632f9bcd9b2bee17897dfc8fe17b453abad4f50f1c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
