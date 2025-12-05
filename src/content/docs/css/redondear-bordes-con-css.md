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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3XTNEK4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIj4xr3O5CHDewgencJD0n62L%2BhLJqEpDuhMVAlvc0SQIgShoC3dih%2BjnX1ZBUE79Ka%2BupoAVtZ5dDtdTF1w8NUh0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDe%2BK8GttvKd4wTcqyrcAyR4Ap9hiMkD0ZLSl6eIHRwJdr7spwYHkrvBaMvgzDYa8h8PZtatYIQE%2FNTlmfYJwHUkg7eNNS5vAttzambf24bdgK4QJ%2FuL7ctirUeNt28f2HzYd90w4QF8ZJHwtC7edmbaHK0MeNIISLuhmOmmBlDPD1ziw4wTv7Pmojl%2F899fMFjF3KeYp8h9hyi%2Bytw2HE%2FxpVt8664rgVUfDG4nMiqmdA0KBn98V%2FPSnZtzOz%2F5Xmz8fs2XGK5%2F3yw7AvcIpXsmXsP6pKFx3ij6qM9Sz2x8y8ySdFTWiwU0mD9kBCGk7wlCvkHnwrHG4L6efgJGIAzlb6RjK%2Bj2QxUKv2l9lEZORBGB0OluuGPkMBqE0rYx%2FSMLbU%2B1r2XyO9yLRt54J4Wn734aA%2F%2BOquCSa2aSmIqLhVKs45IzXdP6OhMbVtsgIgSf4GzHWOpl9YuM12vglvYg8WC2VmetqQcFT9Egoaw24LWjjh7HH8bPw7GX%2BJ4%2BpWFZiZX5R%2BUqsDXo3Ll2sKNcRnOQKnXv%2Bqj%2FP2pefLr5dT83CRgmTcFV6Dyh6PlpC99%2B524EH4F9uJzyx6kMlHW6W4%2Fedk8lpirGVOCh6m9oMvohKhC9W%2FikbArBjblC28aoukdj3mZndsLcMKqMyMkGOqUBcjn%2F0vgQ2lk%2FH3%2Bj6ZXRewX7EZIMoXF0bdVRKU7M%2F2muuxAvLrchD7VWfCpeiA4%2FwpYLPrl1ddNYBYMx5wS6HZhoer7bijarDTA8HzYRPssyAntfccfob7K3JUS98w%2FOEiesEeuBRo2Qe%2BAw0A8Agh7WhgR9gHb8GpbKob%2F7%2BZV48AeIhT9FY2vxC4jqBbhHu%2F2QJ%2FJ5lgxCJchDS0uOAt50XzpV&X-Amz-Signature=3bb7aa6f0838f35b08c0a0c335c691880f5b9604046710f22615e9c632c8c988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3XTNEK4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIj4xr3O5CHDewgencJD0n62L%2BhLJqEpDuhMVAlvc0SQIgShoC3dih%2BjnX1ZBUE79Ka%2BupoAVtZ5dDtdTF1w8NUh0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDe%2BK8GttvKd4wTcqyrcAyR4Ap9hiMkD0ZLSl6eIHRwJdr7spwYHkrvBaMvgzDYa8h8PZtatYIQE%2FNTlmfYJwHUkg7eNNS5vAttzambf24bdgK4QJ%2FuL7ctirUeNt28f2HzYd90w4QF8ZJHwtC7edmbaHK0MeNIISLuhmOmmBlDPD1ziw4wTv7Pmojl%2F899fMFjF3KeYp8h9hyi%2Bytw2HE%2FxpVt8664rgVUfDG4nMiqmdA0KBn98V%2FPSnZtzOz%2F5Xmz8fs2XGK5%2F3yw7AvcIpXsmXsP6pKFx3ij6qM9Sz2x8y8ySdFTWiwU0mD9kBCGk7wlCvkHnwrHG4L6efgJGIAzlb6RjK%2Bj2QxUKv2l9lEZORBGB0OluuGPkMBqE0rYx%2FSMLbU%2B1r2XyO9yLRt54J4Wn734aA%2F%2BOquCSa2aSmIqLhVKs45IzXdP6OhMbVtsgIgSf4GzHWOpl9YuM12vglvYg8WC2VmetqQcFT9Egoaw24LWjjh7HH8bPw7GX%2BJ4%2BpWFZiZX5R%2BUqsDXo3Ll2sKNcRnOQKnXv%2Bqj%2FP2pefLr5dT83CRgmTcFV6Dyh6PlpC99%2B524EH4F9uJzyx6kMlHW6W4%2Fedk8lpirGVOCh6m9oMvohKhC9W%2FikbArBjblC28aoukdj3mZndsLcMKqMyMkGOqUBcjn%2F0vgQ2lk%2FH3%2Bj6ZXRewX7EZIMoXF0bdVRKU7M%2F2muuxAvLrchD7VWfCpeiA4%2FwpYLPrl1ddNYBYMx5wS6HZhoer7bijarDTA8HzYRPssyAntfccfob7K3JUS98w%2FOEiesEeuBRo2Qe%2BAw0A8Agh7WhgR9gHb8GpbKob%2F7%2BZV48AeIhT9FY2vxC4jqBbhHu%2F2QJ%2FJ5lgxCJchDS0uOAt50XzpV&X-Amz-Signature=6b915f375d767b52e42db94294cd5589a08c59907c2e8c41d085f063f9005268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
