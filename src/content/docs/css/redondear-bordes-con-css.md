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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KR2C24%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAZwDCz6ujXdOGU2%2BVaK8xRt69aXehRW2NmmdIxU8IQIgVQERNdkvTTsYAofR8ToZvCcJQjqAyHu1x03joWB3Rgsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBBKZOjB97UOONN05yrcA%2B9GU5auC2D%2BbnPUg0OweFJtyK443O%2BdwI3nI7MiGtYn9AXKj2%2BqWi8sq1idEYwxXys6pGixTLZa7Rk5KhLA1gsLD9z8J0BhwbCsTmE6dLjH1CC3uFw51HSsf8PMtH2zk8%2B5klytEx6svAe%2B5UVaT3Mkwg7g4ZHYrSNefK2HsNQWRNCR%2BYMbbZtLM4al632eWymsCWrtysi9lTuOdH3Lca3SsXmXZ4Rp6C2hvs1lADMxTYpCGrJliWoqTk2%2FKyjs%2FYVLiSmjIai5iFEjUStzFZtrgJ5vXD9YMm%2Bm1GPIuYK9OaUGLLa%2Fm3M1jUcjlFNdxnK%2BvxEgDu14ESut64%2BgCXoAH2ntxBLLwTTIGb8hzfI9DRQH7ePATioXtC%2Bd%2FaN0hkLbAmAs%2BUDhzI8CqIAGxRq1IFdBvZcb1ClLlFyYcGbTFBAYyTWWHLzcOfu2Q4DpBENyKNRvxbemGbPMv4RX7hYsN5KF9znp%2FuimbyAJ3HEQmd3Gvok%2F%2BxkWlrTdF52n68BZkH%2Bs1WljSXreUyjZ2rLtnffKo3gChHbrdhb2QLwwKw9pT%2FHnla2qF1olYqEbJAShlzVn1VE97cYYGY808ZkXsziT19VzpYyZ45chhsHgujU6qoXAgPZR5qLiML3GyskGOqUBN%2F3sfQifOWlbrG4D5qzLvxz9yFDeC9eH7KZl2B8IMIWqDZ3CacKtqaEKmuJBa5s7U3pGiyYMNRg8xMUsvoc2XxXQ62UYHip9unc0kRwrR2q5yVyvxIWV4ClmYyNTvUp%2FVYQt5TF%2BKjFz839vW19GmAX%2FbcX6fIN5adHHLP1uo0OzyxAPh8xUdoYAhGkHccplCVbbtgoGGh642qh9uX7j%2F63JcfNR&X-Amz-Signature=3c541b49619d59314679ecf4e6594e10e35e70e71eb30badf55e266082b14e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KR2C24%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FAZwDCz6ujXdOGU2%2BVaK8xRt69aXehRW2NmmdIxU8IQIgVQERNdkvTTsYAofR8ToZvCcJQjqAyHu1x03joWB3Rgsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBBKZOjB97UOONN05yrcA%2B9GU5auC2D%2BbnPUg0OweFJtyK443O%2BdwI3nI7MiGtYn9AXKj2%2BqWi8sq1idEYwxXys6pGixTLZa7Rk5KhLA1gsLD9z8J0BhwbCsTmE6dLjH1CC3uFw51HSsf8PMtH2zk8%2B5klytEx6svAe%2B5UVaT3Mkwg7g4ZHYrSNefK2HsNQWRNCR%2BYMbbZtLM4al632eWymsCWrtysi9lTuOdH3Lca3SsXmXZ4Rp6C2hvs1lADMxTYpCGrJliWoqTk2%2FKyjs%2FYVLiSmjIai5iFEjUStzFZtrgJ5vXD9YMm%2Bm1GPIuYK9OaUGLLa%2Fm3M1jUcjlFNdxnK%2BvxEgDu14ESut64%2BgCXoAH2ntxBLLwTTIGb8hzfI9DRQH7ePATioXtC%2Bd%2FaN0hkLbAmAs%2BUDhzI8CqIAGxRq1IFdBvZcb1ClLlFyYcGbTFBAYyTWWHLzcOfu2Q4DpBENyKNRvxbemGbPMv4RX7hYsN5KF9znp%2FuimbyAJ3HEQmd3Gvok%2F%2BxkWlrTdF52n68BZkH%2Bs1WljSXreUyjZ2rLtnffKo3gChHbrdhb2QLwwKw9pT%2FHnla2qF1olYqEbJAShlzVn1VE97cYYGY808ZkXsziT19VzpYyZ45chhsHgujU6qoXAgPZR5qLiML3GyskGOqUBN%2F3sfQifOWlbrG4D5qzLvxz9yFDeC9eH7KZl2B8IMIWqDZ3CacKtqaEKmuJBa5s7U3pGiyYMNRg8xMUsvoc2XxXQ62UYHip9unc0kRwrR2q5yVyvxIWV4ClmYyNTvUp%2FVYQt5TF%2BKjFz839vW19GmAX%2FbcX6fIN5adHHLP1uo0OzyxAPh8xUdoYAhGkHccplCVbbtgoGGh642qh9uX7j%2F63JcfNR&X-Amz-Signature=a54c2bbacf8f4ac78763023875d237dead52120e94e4bc08c98c994f07828d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
