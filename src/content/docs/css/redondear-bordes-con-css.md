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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROY6H2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeFX8jlLOPLZO%2BCtqS8NHFvF48ipFrqT8Tdv7ct2%2FHFAiBJVfTZ69mu8s56q2EKzjTcVb3legcuBd%2FdK6nkeHuJxSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2QQoNl%2FgumBL4%2BFyKtwDENaJorhZ%2BfKAsZk%2FtqJDKYTrejZQUO2ZAtT61i9jvfs%2FDiEXlFuEl99M5rQqFfk2P8TrMvDt%2Fo%2Bf7zOOkM8gbUCmtGd7RCSZDvoLFH0zBMT3UcIw0GqaB56EyMPWBB%2Busqg%2FPRkvfPUcjyBvWy10tItP3Mj%2F0MNEa0DDhDyh%2FoTmMe5Zc1yqfsjphyLMapO5zO5HtEnmYt%2BKCBIPIUsWIX3GjzlcqwV7VIr2Dkz2sLmI6ny7a2EJgcWk4WprClROy0BzIn0%2FAR2%2Bfnn6ZuKzXkwMFpFe7iYeiL11NFMMm4WHjWJpZUFfgt2zQuYGsfKZ%2F1p7ha%2FkQeX8z19tFpIgun7aLN0THDkpblL9rolrcGEpv3y7%2FGnsYREpO8fwRgkHqOHXHNumNqlpzOGLSmoXCzCNBWwNLEAkSgFWBp51%2Feruo6gi61RaHUCeYx9zVr93sRPNsYWBcH6bTVP39aih4%2B1q8f7yzdf5V%2BmXO%2BmO0Gcax%2FhPqz6z5cZ04ESppV5lVB0Ygxh9Y%2FXN5e6O86ZiBbrAbmPbOVkVQEtQS4LZbY3AkQPxcxkpFfeUCDYRMnMgQFJI5TzP6U0xn02XYAvYIfPXGglCeCvCSmgAEa%2FTdlbmK%2FQWkrVh%2FXHNzeIwqIzIyQY6pgESuW5srQe%2BwhugIZ9GakBbuC8ogaQTd7dl3Q3nEXNmnV6YeTAtrYYeMY6GBxgo8P2AxDGl1d5QhAxs8dZVoLpAs4BTruxKrXrEVAFKQxT%2BAbyq7019Ikbdqi%2FCz7QCgSKjltUWmbu2WAuQg9pAfX5jN3s4G2WH%2FZMAdWO%2BP4KON2PRxOQjuSvZ6fjsFkzBEe%2FNZWi3ntIt5Wi1uAR9W7n8EMi%2FHloj&X-Amz-Signature=a9fd72e7c31dc258b555619d925e5a4610bfa9fd361102a9a5c1c13e0c1ad9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROY6H2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeFX8jlLOPLZO%2BCtqS8NHFvF48ipFrqT8Tdv7ct2%2FHFAiBJVfTZ69mu8s56q2EKzjTcVb3legcuBd%2FdK6nkeHuJxSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM2QQoNl%2FgumBL4%2BFyKtwDENaJorhZ%2BfKAsZk%2FtqJDKYTrejZQUO2ZAtT61i9jvfs%2FDiEXlFuEl99M5rQqFfk2P8TrMvDt%2Fo%2Bf7zOOkM8gbUCmtGd7RCSZDvoLFH0zBMT3UcIw0GqaB56EyMPWBB%2Busqg%2FPRkvfPUcjyBvWy10tItP3Mj%2F0MNEa0DDhDyh%2FoTmMe5Zc1yqfsjphyLMapO5zO5HtEnmYt%2BKCBIPIUsWIX3GjzlcqwV7VIr2Dkz2sLmI6ny7a2EJgcWk4WprClROy0BzIn0%2FAR2%2Bfnn6ZuKzXkwMFpFe7iYeiL11NFMMm4WHjWJpZUFfgt2zQuYGsfKZ%2F1p7ha%2FkQeX8z19tFpIgun7aLN0THDkpblL9rolrcGEpv3y7%2FGnsYREpO8fwRgkHqOHXHNumNqlpzOGLSmoXCzCNBWwNLEAkSgFWBp51%2Feruo6gi61RaHUCeYx9zVr93sRPNsYWBcH6bTVP39aih4%2B1q8f7yzdf5V%2BmXO%2BmO0Gcax%2FhPqz6z5cZ04ESppV5lVB0Ygxh9Y%2FXN5e6O86ZiBbrAbmPbOVkVQEtQS4LZbY3AkQPxcxkpFfeUCDYRMnMgQFJI5TzP6U0xn02XYAvYIfPXGglCeCvCSmgAEa%2FTdlbmK%2FQWkrVh%2FXHNzeIwqIzIyQY6pgESuW5srQe%2BwhugIZ9GakBbuC8ogaQTd7dl3Q3nEXNmnV6YeTAtrYYeMY6GBxgo8P2AxDGl1d5QhAxs8dZVoLpAs4BTruxKrXrEVAFKQxT%2BAbyq7019Ikbdqi%2FCz7QCgSKjltUWmbu2WAuQg9pAfX5jN3s4G2WH%2FZMAdWO%2BP4KON2PRxOQjuSvZ6fjsFkzBEe%2FNZWi3ntIt5Wi1uAR9W7n8EMi%2FHloj&X-Amz-Signature=48d4f7bd53f5ff4c8eea4ebec620ad4f3a67fae4755dcee9338cad421b9c7941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
