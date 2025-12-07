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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRB54NWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqipP%2FSGRjsHWWtwl1%2BFWZ0E1CiswCMxLdRcqh9btxNgIgH08%2BfLX%2FHwG9zDmm2NgzPU6nRUv37MKh62SOmX%2F0CrIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL8VtW8fWP4sI95UircA90QIKZSxsMjs7Ni%2FPTyvNsyRZHjVjENzwOl2I27CLy9WX1iIbvUsXBUvL9p4fxoSzre0%2B%2FSCeLvy9637ub5zZSvW7jYt1TPjM4YbenNANcn5i6uQpHgzoTNFuf%2FeX9dUJrird5AkQg3Lhr5c4t86cAJU%2BCXkR4UO7XQSKDIjHLi9LgKJST00qWonw3Abqzvrilm3ky7duGAORWlsjxJdilrtHJW3qCA4pnF0CjPEWB7jDc6SI%2Bl6XMgfDUdz6YFupk0wqJgD4n16BqCnEFrbTh5meeAvIOk31hG37H75TqoHMwkMC9NJH0ZM62QIKKID2jFGMW%2B4nczz3gNSYKLJGITaxierY6u09V%2BPQC%2FvkgjJ%2F37vUtvNzQTWx%2FY%2B1AxwkMNTty%2B9TpUiMFhdAwOm8%2B2RtY2eDwwm83nMRxq51D3VMVq9%2FTJ3DHcHCPpIHhxolGhm3JKPFeCcq%2BpRO543LgciNypPUhn6gK1P65P917eRHEVon7n46AsWJtHQLfZbuDywX1tTl3mhpS9XHk98qWvppf9tBCkOmpQmMiuPKegsLQT%2BWi9oyzJuvmskXWaOnSPMYYYd4rw88ZZxbFv9dOkNpuBOPKWBsSyVe1UJ5bJ%2FrnqEnLWngQ1ht1aMOn90skGOqUBQS9kdnCZPgYMhua%2BkH%2F7Jgv%2Fdx%2BuoF9fx0%2BbjsLih2NSmM2%2BPXQlIDmcIh8FLSdlGtYZucWrJCxI%2FTRdnqi0pJLaHYIGIQgl3pGUKEWDHhN7ZixVn%2BvIS%2FN9Ze2YQiuog0sCb6RHNeeegLlA2Smy1p7xKKIDOgqf46SNi8Pj2NYW8FKHa2eo%2BBF4RyJY6qn1dLn8ab%2BdBzyBR81URqLSeVFHfk1w&X-Amz-Signature=a556dc4fcc334571cf9a9f843e778a0db81a3123075f77254bf82497ada92f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRB54NWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqipP%2FSGRjsHWWtwl1%2BFWZ0E1CiswCMxLdRcqh9btxNgIgH08%2BfLX%2FHwG9zDmm2NgzPU6nRUv37MKh62SOmX%2F0CrIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL8VtW8fWP4sI95UircA90QIKZSxsMjs7Ni%2FPTyvNsyRZHjVjENzwOl2I27CLy9WX1iIbvUsXBUvL9p4fxoSzre0%2B%2FSCeLvy9637ub5zZSvW7jYt1TPjM4YbenNANcn5i6uQpHgzoTNFuf%2FeX9dUJrird5AkQg3Lhr5c4t86cAJU%2BCXkR4UO7XQSKDIjHLi9LgKJST00qWonw3Abqzvrilm3ky7duGAORWlsjxJdilrtHJW3qCA4pnF0CjPEWB7jDc6SI%2Bl6XMgfDUdz6YFupk0wqJgD4n16BqCnEFrbTh5meeAvIOk31hG37H75TqoHMwkMC9NJH0ZM62QIKKID2jFGMW%2B4nczz3gNSYKLJGITaxierY6u09V%2BPQC%2FvkgjJ%2F37vUtvNzQTWx%2FY%2B1AxwkMNTty%2B9TpUiMFhdAwOm8%2B2RtY2eDwwm83nMRxq51D3VMVq9%2FTJ3DHcHCPpIHhxolGhm3JKPFeCcq%2BpRO543LgciNypPUhn6gK1P65P917eRHEVon7n46AsWJtHQLfZbuDywX1tTl3mhpS9XHk98qWvppf9tBCkOmpQmMiuPKegsLQT%2BWi9oyzJuvmskXWaOnSPMYYYd4rw88ZZxbFv9dOkNpuBOPKWBsSyVe1UJ5bJ%2FrnqEnLWngQ1ht1aMOn90skGOqUBQS9kdnCZPgYMhua%2BkH%2F7Jgv%2Fdx%2BuoF9fx0%2BbjsLih2NSmM2%2BPXQlIDmcIh8FLSdlGtYZucWrJCxI%2FTRdnqi0pJLaHYIGIQgl3pGUKEWDHhN7ZixVn%2BvIS%2FN9Ze2YQiuog0sCb6RHNeeegLlA2Smy1p7xKKIDOgqf46SNi8Pj2NYW8FKHa2eo%2BBF4RyJY6qn1dLn8ab%2BdBzyBR81URqLSeVFHfk1w&X-Amz-Signature=e53c8e0506a36b7fb22606807a1d863ef85fc40d8f45055c68b4c04ced38f504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
