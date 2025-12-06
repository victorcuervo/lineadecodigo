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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZB666S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1vcmFiWAx6MAPF7jJSp1N6mQGUu%2FkVivroN4eLbdazAiAa%2BHCZntfkscbL0m93U5QpDmCaCNos0qNOpE4JRPlY0yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfOh1MJw0l5VsXWRCKtwDnhrCCVjU7%2FUCKy0WPjMKIp2sCJGwWYS1vkTE29yW8V1XNDXdGMJo%2FQ6DbHu%2B6mc5pt3o6UP2%2BhOY3Wbq%2B2HBa5zLNlk0tb7%2FxX91FkLwdY2N4wz4VoCkIZCBVfz%2BmvG3MSMbmg6iMTr424dsMEF4M2oi7%2B9OP7k%2FL%2BR%2BagCvsotLOJG8CVIYWIKb6WmaEeXqY7JRR6amcqCT2Ysh01Gj06fll2c7e47Lzjl0%2BxMu3rqUbYeyqi88ocqOgdXforZANOfda2IFu2AIU4eMtXFob3kqomFkym1TE1J5kRoTtA9Svm3q8CVPb0SjwAvfclWvg6LGJdhjG6KLVRE%2FTPA7YwRE2rvdpChZEVW97easUKKuWvqOwcwvrcCeQIqhZmPexsVbLC4SDXRuhhE9Hbk3Fg6%2BdYTyyENtXlO70fAxIfEkaOHTZ8SEPcj2RRK%2BkuWQHSRKo6H8ADFO1SDzVvCkOCLzgryMXPcPRg9RXp16WRxFVYX0aVWfwiNllO3UvF7rSqm9YHFxw%2Bmj1Ps42h8Ki%2BEQM7l2oU5YjpwY4lq5uRX1AG1TR0pOMT423HRw2nZrOUQlQRbTEW2k1%2FmO1UEA9mLHI6uMtL5ss%2FHoZFJJBX7MRgxL%2FSrSc2hb1pwwq7zPyQY6pgGkMCwsldnUOfgDcggAgg7my0n4NMDynDJR7tjlFbbi8iXfge%2B7cruRD8dnM7xQuhAWKkXRUTLpQKSaMZJ%2Fdz3weHAHE2De0gW7Cm8fNpGDsMUnuBjqCjc%2FdfPVBXmsDXM66483cefUy0h3NiWO6jAHVWEvLr%2FonVZiErN0rbHfZKngIY68QGi4GxRxAXlry6Nfv0ErUj4E4ozV7dXy%2BDws5j8S1EQz&X-Amz-Signature=cb74a064556f78bfb162fbd5341c9266d492ca1f8835f3bdd0d06f288ed025c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSZB666S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1vcmFiWAx6MAPF7jJSp1N6mQGUu%2FkVivroN4eLbdazAiAa%2BHCZntfkscbL0m93U5QpDmCaCNos0qNOpE4JRPlY0yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfOh1MJw0l5VsXWRCKtwDnhrCCVjU7%2FUCKy0WPjMKIp2sCJGwWYS1vkTE29yW8V1XNDXdGMJo%2FQ6DbHu%2B6mc5pt3o6UP2%2BhOY3Wbq%2B2HBa5zLNlk0tb7%2FxX91FkLwdY2N4wz4VoCkIZCBVfz%2BmvG3MSMbmg6iMTr424dsMEF4M2oi7%2B9OP7k%2FL%2BR%2BagCvsotLOJG8CVIYWIKb6WmaEeXqY7JRR6amcqCT2Ysh01Gj06fll2c7e47Lzjl0%2BxMu3rqUbYeyqi88ocqOgdXforZANOfda2IFu2AIU4eMtXFob3kqomFkym1TE1J5kRoTtA9Svm3q8CVPb0SjwAvfclWvg6LGJdhjG6KLVRE%2FTPA7YwRE2rvdpChZEVW97easUKKuWvqOwcwvrcCeQIqhZmPexsVbLC4SDXRuhhE9Hbk3Fg6%2BdYTyyENtXlO70fAxIfEkaOHTZ8SEPcj2RRK%2BkuWQHSRKo6H8ADFO1SDzVvCkOCLzgryMXPcPRg9RXp16WRxFVYX0aVWfwiNllO3UvF7rSqm9YHFxw%2Bmj1Ps42h8Ki%2BEQM7l2oU5YjpwY4lq5uRX1AG1TR0pOMT423HRw2nZrOUQlQRbTEW2k1%2FmO1UEA9mLHI6uMtL5ss%2FHoZFJJBX7MRgxL%2FSrSc2hb1pwwq7zPyQY6pgGkMCwsldnUOfgDcggAgg7my0n4NMDynDJR7tjlFbbi8iXfge%2B7cruRD8dnM7xQuhAWKkXRUTLpQKSaMZJ%2Fdz3weHAHE2De0gW7Cm8fNpGDsMUnuBjqCjc%2FdfPVBXmsDXM66483cefUy0h3NiWO6jAHVWEvLr%2FonVZiErN0rbHfZKngIY68QGi4GxRxAXlry6Nfv0ErUj4E4ozV7dXy%2BDws5j8S1EQz&X-Amz-Signature=5f318dfd2d777a6ef585233eef85bff1ad2d2a156ffa5b6c53895ef9a1970b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
