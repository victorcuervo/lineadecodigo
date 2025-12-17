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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGQLJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6kDqHcCe%2Bx0%2FaA3%2F9ZYhFl0H95FxlQ1674L25Q2x0hAiEAke8FHXZNzHTzYZHnAoptQ5PF866IBTDcx8HmFnLjP%2B8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJbRwxEAk8lwcbifCircA8qmV5heHaPetszsU6aZZy%2Fax6zF%2Fw7PkJX0AKgP9ubmcl0A2ka2SO119sqe%2FPo42o0WFsH85GyYl%2FXPdiC4ClQGl4B%2FYOv16n4qBWd4LqM%2B7fxsZ43mJieMpBpH9KAHCVAJRMt0i%2FgrsHvsclUQoUSA4cnQ1y6pLG%2BrUjR2MAzR6WPdA78bGRayzbS303xphRRhblpJQuWJwJDxfOQVeJWhxxXQKPAp2Zz2t5Z8H1sxCJfp3tJf%2FCC4TwumHo1fzkCboN49vPFKhp071iuYoAjFn1YeGe1jwAM3tPVvmcTpeP1HKgrLmx9%2BpjIusAioMBr8J0XT5kL3Q%2F2HHbYu%2FDSdSCA9zLpBFnH2ie6W4CPk57lnMGAbDe7ITyph9JM4IkPNs6FPTv6YdSejfx%2B5Wzz5J2861%2BGQW4sGEmcvzwKbKDTeAtNtyCAuyB67JAW0GCKVkmuT%2F9uqnhYjfXogrLL9DYadAgYSIUmYJ5yaIGq847vS9FLID2myA%2FWHNn3Et3%2F68XcBqJ1THJzx%2F61YXOL0pzYEF9d7kzCJOxPsZ6zQ8QnND5qnlo1RDr6uHSZaWBbEEM1iUbzy9R0Nq5QbZrUBbO7qA0sc%2ButYeBcmBSa0giHNuxVVQbqwnYEvMIffh8oGOqUBwwQummBQByRvEvtfrBB67Qj3s0K8FcupWRBwkitdtXU2pQnN4NbX%2BK7FISfKKZszxZC8DJNHHz6K%2FZrtmp4NOB4Lz70oXmM2DcnyatOEqCJ647M8k5lXq7HBl4HuTbMK59KiOq4Zj8Bs9Ol24jUuRVjPOVpsOPTQS7K9cPGEOo4yZkE87gCaHXc%2BhyyQOk3jD%2BKcKXOOiRsyrhTaBpcV4y0pEOk%2F&X-Amz-Signature=74051d375d8e91cf1d62bdd215d142c6d9d568f9dd2602c69083f774e8cae36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGQLJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6kDqHcCe%2Bx0%2FaA3%2F9ZYhFl0H95FxlQ1674L25Q2x0hAiEAke8FHXZNzHTzYZHnAoptQ5PF866IBTDcx8HmFnLjP%2B8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJbRwxEAk8lwcbifCircA8qmV5heHaPetszsU6aZZy%2Fax6zF%2Fw7PkJX0AKgP9ubmcl0A2ka2SO119sqe%2FPo42o0WFsH85GyYl%2FXPdiC4ClQGl4B%2FYOv16n4qBWd4LqM%2B7fxsZ43mJieMpBpH9KAHCVAJRMt0i%2FgrsHvsclUQoUSA4cnQ1y6pLG%2BrUjR2MAzR6WPdA78bGRayzbS303xphRRhblpJQuWJwJDxfOQVeJWhxxXQKPAp2Zz2t5Z8H1sxCJfp3tJf%2FCC4TwumHo1fzkCboN49vPFKhp071iuYoAjFn1YeGe1jwAM3tPVvmcTpeP1HKgrLmx9%2BpjIusAioMBr8J0XT5kL3Q%2F2HHbYu%2FDSdSCA9zLpBFnH2ie6W4CPk57lnMGAbDe7ITyph9JM4IkPNs6FPTv6YdSejfx%2B5Wzz5J2861%2BGQW4sGEmcvzwKbKDTeAtNtyCAuyB67JAW0GCKVkmuT%2F9uqnhYjfXogrLL9DYadAgYSIUmYJ5yaIGq847vS9FLID2myA%2FWHNn3Et3%2F68XcBqJ1THJzx%2F61YXOL0pzYEF9d7kzCJOxPsZ6zQ8QnND5qnlo1RDr6uHSZaWBbEEM1iUbzy9R0Nq5QbZrUBbO7qA0sc%2ButYeBcmBSa0giHNuxVVQbqwnYEvMIffh8oGOqUBwwQummBQByRvEvtfrBB67Qj3s0K8FcupWRBwkitdtXU2pQnN4NbX%2BK7FISfKKZszxZC8DJNHHz6K%2FZrtmp4NOB4Lz70oXmM2DcnyatOEqCJ647M8k5lXq7HBl4HuTbMK59KiOq4Zj8Bs9Ol24jUuRVjPOVpsOPTQS7K9cPGEOo4yZkE87gCaHXc%2BhyyQOk3jD%2BKcKXOOiRsyrhTaBpcV4y0pEOk%2F&X-Amz-Signature=a175838aa7f707b0f6b6f475bcf88340ae3896719f4296b49ff0ff9d1f24cdc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
