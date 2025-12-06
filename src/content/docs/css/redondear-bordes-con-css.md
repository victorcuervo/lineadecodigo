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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZN6ZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQFNja7ryrgqYWgT7smWZWoXKO3EyonwVWq3ncjVbxUAiEAnzch%2F8FAJ6aCiwgQP7nFwmZEyZAv0bLikMmZhXFHCZAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHguQwm5GA5mrMLYUircA3Kvh%2Bd2okGLjpTYcV9SCj9XSP5czly1g%2F7cFNzH7SL0U3%2FnEbh8UGx38rysAf1cspGanikz93AR1YPfMBxmsE7BZtoO8E6YI8S39j1peZj%2FBspDZRpFThboDsPoS05G84oFPwA9apDCIUCIOVdT2TPJhXMDVluqzG6fQWMOn8sU6T0LDQtrEp4lSZJXbEXjdjDdzR1I3jSJ2BsAIKpUFL4%2BddUlkYOVbIcjBFZ7z5W2kvBG1e7PAGQ37RSUNJ36KZjNHw%2BMcKealX9ZejPnCpSJH7OhsblJ%2Bcpn%2Bv1Mj7JsTv2QbrbqyybuciU71T9OxCfV%2BdstOFaakt98Ztdmq3feqVkUfTVex%2Bsw7gkAnCJwmH2Ye6%2B63ElizXelavWsDiH%2BZx7HRRRPMm0LY%2BzDP0BBwkfpaRy%2BBK5YB4EBUVY2uKN1FFEZLXxFWm0VbsXT%2Fb5zrEZQjpfQd%2Fca50D80N5KzoV1IDnFIC3ntjxCWXZm%2FMPM%2Brbberaw1Z8%2BMmv6Ma3WbeO9JKn8TLYFk7nr70hNWqnMvD0IqU%2Bs2eNPMlrT0gYxnKQTv0AGknmFnBBQpdH7jPwcWKPODxHzJMui4%2BGzM8SfB4qJW%2FoXLGoXOzitlQF3SgQfn0WGVKnQMOCez8kGOqUBWS85fj1LY%2F3LbqrgLhltotBw6y%2F4kGrCNDxUrUf1g94gb%2F9TdQJMxWRUODjc8Q3F86U5rYxFAeBz5%2BBFPwID%2F52bPvDwMo2bM7%2FRT5iGTg5Ct5HHWy9aELaCu5DYYjM9w2ZpuTPRySBHApSVBn6qResalWf1xRKF2aFq70gMAZB2yiTYKWQaPqZYjIAMqVet%2FKn8tMx7lfzEnYgXSPGafGeqbonC&X-Amz-Signature=18fdd6898645c6d2e60dfdcb52a94b6e6b3d2187b44c9caddb3ce2359d6dcfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZN6ZN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQFNja7ryrgqYWgT7smWZWoXKO3EyonwVWq3ncjVbxUAiEAnzch%2F8FAJ6aCiwgQP7nFwmZEyZAv0bLikMmZhXFHCZAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHguQwm5GA5mrMLYUircA3Kvh%2Bd2okGLjpTYcV9SCj9XSP5czly1g%2F7cFNzH7SL0U3%2FnEbh8UGx38rysAf1cspGanikz93AR1YPfMBxmsE7BZtoO8E6YI8S39j1peZj%2FBspDZRpFThboDsPoS05G84oFPwA9apDCIUCIOVdT2TPJhXMDVluqzG6fQWMOn8sU6T0LDQtrEp4lSZJXbEXjdjDdzR1I3jSJ2BsAIKpUFL4%2BddUlkYOVbIcjBFZ7z5W2kvBG1e7PAGQ37RSUNJ36KZjNHw%2BMcKealX9ZejPnCpSJH7OhsblJ%2Bcpn%2Bv1Mj7JsTv2QbrbqyybuciU71T9OxCfV%2BdstOFaakt98Ztdmq3feqVkUfTVex%2Bsw7gkAnCJwmH2Ye6%2B63ElizXelavWsDiH%2BZx7HRRRPMm0LY%2BzDP0BBwkfpaRy%2BBK5YB4EBUVY2uKN1FFEZLXxFWm0VbsXT%2Fb5zrEZQjpfQd%2Fca50D80N5KzoV1IDnFIC3ntjxCWXZm%2FMPM%2Brbberaw1Z8%2BMmv6Ma3WbeO9JKn8TLYFk7nr70hNWqnMvD0IqU%2Bs2eNPMlrT0gYxnKQTv0AGknmFnBBQpdH7jPwcWKPODxHzJMui4%2BGzM8SfB4qJW%2FoXLGoXOzitlQF3SgQfn0WGVKnQMOCez8kGOqUBWS85fj1LY%2F3LbqrgLhltotBw6y%2F4kGrCNDxUrUf1g94gb%2F9TdQJMxWRUODjc8Q3F86U5rYxFAeBz5%2BBFPwID%2F52bPvDwMo2bM7%2FRT5iGTg5Ct5HHWy9aELaCu5DYYjM9w2ZpuTPRySBHApSVBn6qResalWf1xRKF2aFq70gMAZB2yiTYKWQaPqZYjIAMqVet%2FKn8tMx7lfzEnYgXSPGafGeqbonC&X-Amz-Signature=ae0506c877371875a673dedb18f746035f37144236851493dfc584b20d6f786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
