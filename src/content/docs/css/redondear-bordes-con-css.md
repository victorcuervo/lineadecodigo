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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFLJCSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyztuXrcEECjeDvfwQ7BMZ16he70DWrb8tDNrxBzL9FAIgK8v4SiCvWV3%2BpNTtcUlNt1NraaMxL5dRG6lNThq4Qkcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOWvz8bL1L0sN0r6WircA4RbfRmQdYFcPQl9OO%2Fn4w37S4Qp12DTcuhBEvawnuAAtX%2BudZy5Q2Aryru1BZe%2BVG6qpi2SOHXY3IEvX24BCWQy4re9ZqFwYUHjIlzH5aedxxErid9%2BJxHzIEgVOUsyVZ9TTRxS2H7zQKCrYLfwsiGjBV%2BOPF%2FiUvaZeLjkxYbFpnOKMU%2BDov%2B6dcFY4rX4IeRbKPTdf5GdV85xGW5UOR9%2FuvtvYsczDYt6nqqb7VhJWpY%2BkvpyIdhep%2By8s3tjQ7UvjUYuIXKRuSmLVPwax1kXWQeQVk3UtgtT5h65TxNdl9slv2Lq%2FPf3dKBGnMOcVpcg3sYv79J4543EHwDZEJcRExWUFC80emMW4Y7zoH%2Fj8GymCYIli5mh2xq%2FfHwK1o0Cx03q1kxYok8OYQzHdSYU%2BocgGXoKq6a1a4U4%2F15jO54J3UIcOTl4muLiV%2F0t1wIa%2BXsnunXW6%2Fu1UboSbaEOA%2BxkF93SmV1xr4K9dHEXJwKZhNBPJn6OC988rT%2BPaMgxu%2FYRzV7cyWchXObMB8L8jViBD%2FCSH9xOjz3WIVbvw3nXxaWSlxCqly1q%2Fxf8BiGgJM%2B6GPw7DgNlJkjb1hQAKTiEEY2oTuoElLoqpvT1OnEp70IEebMt8Bf8MNXrz8kGOqUBEK2IlA9wunIYVvc5RSUCUe%2FutK265%2FUqbeLw9mDMKgjuYuBCf56w7vqJPAYvMn%2FyL6Y6VbSCscTFrcO6dHt%2FGomxPVivFazOtbXlVh0TgYbohzYxnvF8bJqFduqYieMfg3THSj%2B2abVLIeHKho6hB0vxUcqUHl23wp8yU0E58CEJkZl5UG%2FLSgqq%2BZc58lYqHSAyXLXNSZUCltPXm0eNWd4h%2B739&X-Amz-Signature=8a40d52cba7a82a6cae65404b200970a4e66decbb203d44f8b713eb22f84fe25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFLJCSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyztuXrcEECjeDvfwQ7BMZ16he70DWrb8tDNrxBzL9FAIgK8v4SiCvWV3%2BpNTtcUlNt1NraaMxL5dRG6lNThq4Qkcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDOWvz8bL1L0sN0r6WircA4RbfRmQdYFcPQl9OO%2Fn4w37S4Qp12DTcuhBEvawnuAAtX%2BudZy5Q2Aryru1BZe%2BVG6qpi2SOHXY3IEvX24BCWQy4re9ZqFwYUHjIlzH5aedxxErid9%2BJxHzIEgVOUsyVZ9TTRxS2H7zQKCrYLfwsiGjBV%2BOPF%2FiUvaZeLjkxYbFpnOKMU%2BDov%2B6dcFY4rX4IeRbKPTdf5GdV85xGW5UOR9%2FuvtvYsczDYt6nqqb7VhJWpY%2BkvpyIdhep%2By8s3tjQ7UvjUYuIXKRuSmLVPwax1kXWQeQVk3UtgtT5h65TxNdl9slv2Lq%2FPf3dKBGnMOcVpcg3sYv79J4543EHwDZEJcRExWUFC80emMW4Y7zoH%2Fj8GymCYIli5mh2xq%2FfHwK1o0Cx03q1kxYok8OYQzHdSYU%2BocgGXoKq6a1a4U4%2F15jO54J3UIcOTl4muLiV%2F0t1wIa%2BXsnunXW6%2Fu1UboSbaEOA%2BxkF93SmV1xr4K9dHEXJwKZhNBPJn6OC988rT%2BPaMgxu%2FYRzV7cyWchXObMB8L8jViBD%2FCSH9xOjz3WIVbvw3nXxaWSlxCqly1q%2Fxf8BiGgJM%2B6GPw7DgNlJkjb1hQAKTiEEY2oTuoElLoqpvT1OnEp70IEebMt8Bf8MNXrz8kGOqUBEK2IlA9wunIYVvc5RSUCUe%2FutK265%2FUqbeLw9mDMKgjuYuBCf56w7vqJPAYvMn%2FyL6Y6VbSCscTFrcO6dHt%2FGomxPVivFazOtbXlVh0TgYbohzYxnvF8bJqFduqYieMfg3THSj%2B2abVLIeHKho6hB0vxUcqUHl23wp8yU0E58CEJkZl5UG%2FLSgqq%2BZc58lYqHSAyXLXNSZUCltPXm0eNWd4h%2B739&X-Amz-Signature=1cd98244c3d02ff6871d4a82025eee62b6ac39cbf5093107830b9c36fecd86dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
