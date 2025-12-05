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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPFDVZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeKuG%2F%2FPRv72mV5gWvTH9vzw7qTR77syGC1NIWTdLElgIgD%2FZ6iANqydaaR3DVRvUlfrGSCc09d7eXjBfzFX53b1sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOl7rknBQF78WfwwxircA0Zp1GdsnOz%2BqxRf4H0c9K9YV8Mr2%2FSMvkHFpWeB%2FK%2FoevqY29bH3bedibq83adMeKVHkIU73umGB%2FoMfxsvhVI5K7CEPHf2udTmJ5zNezLG%2BpJlIwcsUtEu1M2tqu4%2FTFkyvIBslnJjkSrNEtoGf6rs65QVNiaFx0ayBc%2BIdhH2vvzD06rYL%2FF3b08VwghmqzfAAjGqps1YEglm1Qcn9P1H3Kg63PSBBe1BlCbGX92G4V2uNAUur4ssPlX%2Br6yyW43iwoD5VHX4ITSxu9idv28WBYWjVws9pl%2BQSLt1w2pFr8rxVYnayozgPWjgtwZfoqF1jGhGfApoVq83j0mgmjqrlXkcNnIJowa9J8%2BwVXy%2Bc2Fo9pWQ4fT%2F49X2Hs1%2BLk9GWPpetqtpbr%2BX7OU8rgqPLhDOIVmI8jnZMVQylY4%2Fkq5z3gmUNjlC9OXO%2F%2F5YQKLihcR1QhJSjWe%2Ff4lghkqRziuuJNPJ6aBtkGAQ27kouR8bvqzSuAl99pRlXhmMg10R9XuSSjde%2FqtA6m3Sc2uR752rOh6O8jra8fEjeem%2FO%2Fzs6twWTggMo7OLf5M2u7zheztUHe60lQid74BJ6CQ1UHIjN3n0zQv7zeDCGHsshMtn52sx5Oo8lL7LMJj1y8kGOqUBVw1dx%2Fo2BjFuwFVp25c%2FKZMWDbLEJstLjmBiDpNRR3TX2ftpqy%2F7QNJzwY1PxiWzckI1XUgibqjo5Z5JyDWvKHuoOSIUoWVw%2BlaiJws%2FD9SR%2BmKwjqka%2Bx8NbrlTsBDuJaXYyVtyaa8osbIQYX82KF1rTRsiaCBpk2kyQd%2BeaIrN1dOEAvKTSfVbq826SvekZtZKOhQAqnbjkD4dQJ7Cwc0jyiW%2B&X-Amz-Signature=1c25864b96380aa46141f345662f250d0ed3428f2d229262ccae1e2297c23e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHPFDVZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeKuG%2F%2FPRv72mV5gWvTH9vzw7qTR77syGC1NIWTdLElgIgD%2FZ6iANqydaaR3DVRvUlfrGSCc09d7eXjBfzFX53b1sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOl7rknBQF78WfwwxircA0Zp1GdsnOz%2BqxRf4H0c9K9YV8Mr2%2FSMvkHFpWeB%2FK%2FoevqY29bH3bedibq83adMeKVHkIU73umGB%2FoMfxsvhVI5K7CEPHf2udTmJ5zNezLG%2BpJlIwcsUtEu1M2tqu4%2FTFkyvIBslnJjkSrNEtoGf6rs65QVNiaFx0ayBc%2BIdhH2vvzD06rYL%2FF3b08VwghmqzfAAjGqps1YEglm1Qcn9P1H3Kg63PSBBe1BlCbGX92G4V2uNAUur4ssPlX%2Br6yyW43iwoD5VHX4ITSxu9idv28WBYWjVws9pl%2BQSLt1w2pFr8rxVYnayozgPWjgtwZfoqF1jGhGfApoVq83j0mgmjqrlXkcNnIJowa9J8%2BwVXy%2Bc2Fo9pWQ4fT%2F49X2Hs1%2BLk9GWPpetqtpbr%2BX7OU8rgqPLhDOIVmI8jnZMVQylY4%2Fkq5z3gmUNjlC9OXO%2F%2F5YQKLihcR1QhJSjWe%2Ff4lghkqRziuuJNPJ6aBtkGAQ27kouR8bvqzSuAl99pRlXhmMg10R9XuSSjde%2FqtA6m3Sc2uR752rOh6O8jra8fEjeem%2FO%2Fzs6twWTggMo7OLf5M2u7zheztUHe60lQid74BJ6CQ1UHIjN3n0zQv7zeDCGHsshMtn52sx5Oo8lL7LMJj1y8kGOqUBVw1dx%2Fo2BjFuwFVp25c%2FKZMWDbLEJstLjmBiDpNRR3TX2ftpqy%2F7QNJzwY1PxiWzckI1XUgibqjo5Z5JyDWvKHuoOSIUoWVw%2BlaiJws%2FD9SR%2BmKwjqka%2Bx8NbrlTsBDuJaXYyVtyaa8osbIQYX82KF1rTRsiaCBpk2kyQd%2BeaIrN1dOEAvKTSfVbq826SvekZtZKOhQAqnbjkD4dQJ7Cwc0jyiW%2B&X-Amz-Signature=0ba13b536a03315113d21921ef089a18cce51717019bde2aa9cfb77e36857b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
