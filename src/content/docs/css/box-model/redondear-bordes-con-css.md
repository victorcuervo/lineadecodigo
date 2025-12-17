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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCTLNUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErzlB02TDNerWHd6k1Nz43azuxNaqj72Pcx%2BdjCSUkdAiEAm3DIQKlDoO5A0hGAdhmM9XEzYfYewsOo6qS8g4gQF2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDH1gK28NQX0AROkH6yrcAw8k5tMkdHhcBxwthGDX74c8JGQ%2F4WE9JXgCCkNdaG8YNRS07p7VOSwZmDp%2BDmX1hRxnOn3XMdgzHOaQoyirItiD%2F9qzKIw%2BpIH5QcZpvuynIaeZfv84r39680FPl9FbnpoxIatIEM4%2B5ArMNMHnRnnOLbloakTEex3qlOeg2pQtg3ztuly8jxNPXbd7Z5hBbf55erdXZ5Gu0CrI%2BOcje9UuMtQ4uzLQPqIAjbNHBOJ6YTk6zWYgNYNdyeqNF7R6r6kKdaLFI8A9%2B%2FuP0gyxQAa7KXsX2Codc5q3mlXHnBVL9gRkXMsLolKUMSEu%2BGR0dSoJ9WjHMCn8qcgjSdNycESgsp%2FQ6kmZ5F4TKEyWU%2Fp5C8mZf%2FQVzLwDeT%2F65QNe08cMkZVEXbQkdtiHXEw%2BGZ7%2Bt8WNN8gXJNyHwn9MAxhGfK30uUGQS6ZeYGyyxyy8niaEzkDabHskhxkVtnceHnTHWvrvywA8N4YfD2KzdHClLK%2BXlPsju6RSDTRyhNVrHOoS8jncnuY5Sg1o2SgxFpcx0Xpx8mX4YVB%2F2N5PpvM5i6bYcsRdtMu10y7k3mJcd5aHEdrODcAMrD6sazFPpODNwuAi3ARbv1UWIrmJ78GOp4%2BhwBj0RBc7fAjEMPmWiMoGOqUBdaChKv66c4F2p3hpYrt0ZXzJvyJ5LvbP2OKYwx4fu%2FvKaNVf%2F77iNCdz4KVCnKHfFowDGbi8vphie6FNMMI63mHPh03po4QsKUwLrErEkd%2FOSowvDRRMUS02ftNzFvMRSY3njvrvL1m4CuShx7lwy2rdUhvF0RfVL8z2D1%2F1k1G2cTTzGH%2F3s2XvvS1OuB5sZitHfvYWpAIK%2BpmSsv2SPc44imp7&X-Amz-Signature=2ce24aff07af55305aaeb31a39ffd713fb2efe10cd5b545668c1958f69c5ec59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCTLNUI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErzlB02TDNerWHd6k1Nz43azuxNaqj72Pcx%2BdjCSUkdAiEAm3DIQKlDoO5A0hGAdhmM9XEzYfYewsOo6qS8g4gQF2Uq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDH1gK28NQX0AROkH6yrcAw8k5tMkdHhcBxwthGDX74c8JGQ%2F4WE9JXgCCkNdaG8YNRS07p7VOSwZmDp%2BDmX1hRxnOn3XMdgzHOaQoyirItiD%2F9qzKIw%2BpIH5QcZpvuynIaeZfv84r39680FPl9FbnpoxIatIEM4%2B5ArMNMHnRnnOLbloakTEex3qlOeg2pQtg3ztuly8jxNPXbd7Z5hBbf55erdXZ5Gu0CrI%2BOcje9UuMtQ4uzLQPqIAjbNHBOJ6YTk6zWYgNYNdyeqNF7R6r6kKdaLFI8A9%2B%2FuP0gyxQAa7KXsX2Codc5q3mlXHnBVL9gRkXMsLolKUMSEu%2BGR0dSoJ9WjHMCn8qcgjSdNycESgsp%2FQ6kmZ5F4TKEyWU%2Fp5C8mZf%2FQVzLwDeT%2F65QNe08cMkZVEXbQkdtiHXEw%2BGZ7%2Bt8WNN8gXJNyHwn9MAxhGfK30uUGQS6ZeYGyyxyy8niaEzkDabHskhxkVtnceHnTHWvrvywA8N4YfD2KzdHClLK%2BXlPsju6RSDTRyhNVrHOoS8jncnuY5Sg1o2SgxFpcx0Xpx8mX4YVB%2F2N5PpvM5i6bYcsRdtMu10y7k3mJcd5aHEdrODcAMrD6sazFPpODNwuAi3ARbv1UWIrmJ78GOp4%2BhwBj0RBc7fAjEMPmWiMoGOqUBdaChKv66c4F2p3hpYrt0ZXzJvyJ5LvbP2OKYwx4fu%2FvKaNVf%2F77iNCdz4KVCnKHfFowDGbi8vphie6FNMMI63mHPh03po4QsKUwLrErEkd%2FOSowvDRRMUS02ftNzFvMRSY3njvrvL1m4CuShx7lwy2rdUhvF0RfVL8z2D1%2F1k1G2cTTzGH%2F3s2XvvS1OuB5sZitHfvYWpAIK%2BpmSsv2SPc44imp7&X-Amz-Signature=213f1e675e4eaabe1ef09b445313a993a5272819637efd95c4957dd3be7aafad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
