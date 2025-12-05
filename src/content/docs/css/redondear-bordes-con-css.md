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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CZ5BMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw%2FG%2BRGGBziSlNyr9iOCeaJBCdALZF3B5HFhgI%2BgVVZAiEAs%2FOxlyPaCZNNWOJEQyE56vHYLpWlt0pXa1XTxzrww0kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJR8ZH0bZkOBRYxpnCrcA25o46dNJb1cCThYacGIHmdD%2B5eI6stYv4xsu2p1wviGG2p9SrUzQc3%2Byx%2BBvYPsmFNZsQ0e1eT4Qr1wHXhSLGA2HBUP8T8hM%2BH9zHIsY%2FBRTlF6upYHpOrWE6CpOtTjm4uXqWle3fHWxU3wEsxDKHAQCRO848WfYJAQm%2BJLQ16xh10Kt3SWAZHZkXk3cmLC9%2BIzkLsR4f%2B%2BmWgfmS4pOOTXNXCeaJbVL%2B3QbFpws4kNk5Rq0oXvZMQzG9SqPbjEO3XGBWPtjT0lfvTjdYHiFcBs%2F4kbXzK99nmoruaVGOoGf4NZ2EJPVmA5njvMhsm2GxhyA%2BYe6gltBUXimVvjkgT25hLjSMcedoyUbR84JjIRVLz1owBR2RJlX1qh0QdcOFz6jaR1ttivJ0JHq7ySkbPkOnB0Y5Iu4WJWgMhWaKUg8ZAkItK4AfKtOvChQ4sFtw1l1qM1Y1I8ONj1uqbOPVCu4HneCRb7tKrfJjJ9EvxvkhDp3c2moYVeE1ps7mrRdsFtRbGnniG%2BLgX%2Bnx5jXze7qXszGsKNxWOwCnfxXNWvdeDyC8Do6vssKss3w4nzhOvwb9nq2D7DH6CcLaJoAVgbN6BU1RaYR%2F1%2B0fF%2FyvMxZeJl0xCvD9Lv8gEsMIGqyckGOqUB5%2Bngdl5V8m3ixzKhPiiLbWhe3nZUEhuyK3S4xr7J8tY%2FqI%2F2SMYUs3Fdz%2BwQef6dAzQ3mYOYIg6akI%2FuSjtMqsNybqmdTH5iaD9ZLBu5%2FvdnvtGiWXolbGuiMfXd%2BToPjxpnogpwLvGHQLQ6DkbUKRGIB%2BLQGCJBOhL4TA9SXu2O8SclZIbcJ6Kt6agBigHtEi3ICHGkKgFYNyJi64ziyZoW%2FBiE&X-Amz-Signature=1e8a32abfde2c6ce2b9f5e7ba65f9e4b0f825add2a0dd70035c7f1dca0978a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CZ5BMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw%2FG%2BRGGBziSlNyr9iOCeaJBCdALZF3B5HFhgI%2BgVVZAiEAs%2FOxlyPaCZNNWOJEQyE56vHYLpWlt0pXa1XTxzrww0kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJR8ZH0bZkOBRYxpnCrcA25o46dNJb1cCThYacGIHmdD%2B5eI6stYv4xsu2p1wviGG2p9SrUzQc3%2Byx%2BBvYPsmFNZsQ0e1eT4Qr1wHXhSLGA2HBUP8T8hM%2BH9zHIsY%2FBRTlF6upYHpOrWE6CpOtTjm4uXqWle3fHWxU3wEsxDKHAQCRO848WfYJAQm%2BJLQ16xh10Kt3SWAZHZkXk3cmLC9%2BIzkLsR4f%2B%2BmWgfmS4pOOTXNXCeaJbVL%2B3QbFpws4kNk5Rq0oXvZMQzG9SqPbjEO3XGBWPtjT0lfvTjdYHiFcBs%2F4kbXzK99nmoruaVGOoGf4NZ2EJPVmA5njvMhsm2GxhyA%2BYe6gltBUXimVvjkgT25hLjSMcedoyUbR84JjIRVLz1owBR2RJlX1qh0QdcOFz6jaR1ttivJ0JHq7ySkbPkOnB0Y5Iu4WJWgMhWaKUg8ZAkItK4AfKtOvChQ4sFtw1l1qM1Y1I8ONj1uqbOPVCu4HneCRb7tKrfJjJ9EvxvkhDp3c2moYVeE1ps7mrRdsFtRbGnniG%2BLgX%2Bnx5jXze7qXszGsKNxWOwCnfxXNWvdeDyC8Do6vssKss3w4nzhOvwb9nq2D7DH6CcLaJoAVgbN6BU1RaYR%2F1%2B0fF%2FyvMxZeJl0xCvD9Lv8gEsMIGqyckGOqUB5%2Bngdl5V8m3ixzKhPiiLbWhe3nZUEhuyK3S4xr7J8tY%2FqI%2F2SMYUs3Fdz%2BwQef6dAzQ3mYOYIg6akI%2FuSjtMqsNybqmdTH5iaD9ZLBu5%2FvdnvtGiWXolbGuiMfXd%2BToPjxpnogpwLvGHQLQ6DkbUKRGIB%2BLQGCJBOhL4TA9SXu2O8SclZIbcJ6Kt6agBigHtEi3ICHGkKgFYNyJi64ziyZoW%2FBiE&X-Amz-Signature=d2d1c7f92e5a47d873f098f559c7ba31cad6ad6011811a5c99873ff76f9237d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
