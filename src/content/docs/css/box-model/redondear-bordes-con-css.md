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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774VVMOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZzwrWfc74V3%2B7yxvUy8no0actCED9Z0r9O7Uh4SjkPAiEAvWdW5CirVULlKk0%2B1Y7I1Ur%2FJaniy%2FOk4Z2DYJaw9fEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbUHyM53i4TfUYwnyrcA83KvDbBiWchpCgMEWF7L%2Be27Uq2vmOW5E9u5dcV6HTpBT1bWjvW4H3%2BQSOAqHr6I%2BOczIVYdZAL2trPwrbCBr%2Brlstb2YgcVk04TseOSrdyH8YJcD3UxlDgSeHxbX11Tgj97GmA5ePvmbMd%2FMBrNJlx0hwlwD004BOkrepYHOIgKPHXpODQoxYTQMbR7ONz0qpYErlOpxQSX5PQzk6bRzuqqIOyZbz5I2TmeJf9Tw62qLyRXlt0T0mEm4uCi8VtZ4fnWPI3vNkU3fwPBXfEueZmT5NHJ45WvAJUtkwcr7y80nzQkDAEWRjeGO3rULjHOeLL8z1yf6hUWWeTULG0om7bcaqhPeB0lyjgWKJFktuiOsZNwL2trayjBbOtodzGz99hJdT%2BlvrgKD%2FFhfgpUBKoN0pGAlPh%2Bc6w%2FQg5HtU%2BDJARB8FKhZGLs%2Fx5QZKAjTrtUnXvXK15XFhscKGZxJGNYQzKZhR5yqMNpU99RfccZau9eP9Fxcz257PgaTGGphKwoUishDB5miujRCaQpFHQ9ISZ8YffOV3c9P8yLrsQURBc0Hsqpcn7KE1Mr4oZAEq4s%2B5a%2FfSoCKzG4rWfvwCoIPrzPW3GVSfmk70Y0gBeTdxcY%2F2V6BfwZ4QKMPLwicoGOqUBtNj15N6oR8GHWV7YqeTH10pg7uhFuFg8Ee61kp0%2Bd6ar22hUy1f1l7vN%2FbiXkYv51MxiiMBAC7giirXRr8INTm4HotAY89cTTOuXNMY7BvtcNCEZB3JqzrM%2BItSY7DJsjYUK%2BfHymZQA8dyOx9yP3lv6jUGBzt%2By6lDBG71SOThyc62Hae9GqdBsfoWPuMAR%2BFS65PjQyU%2FGH591w77Rgh1PwbdY&X-Amz-Signature=a348a957af4d56da4a504676a9066e252af39d078de5f540f85e8bfaf46834a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774VVMOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZzwrWfc74V3%2B7yxvUy8no0actCED9Z0r9O7Uh4SjkPAiEAvWdW5CirVULlKk0%2B1Y7I1Ur%2FJaniy%2FOk4Z2DYJaw9fEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbUHyM53i4TfUYwnyrcA83KvDbBiWchpCgMEWF7L%2Be27Uq2vmOW5E9u5dcV6HTpBT1bWjvW4H3%2BQSOAqHr6I%2BOczIVYdZAL2trPwrbCBr%2Brlstb2YgcVk04TseOSrdyH8YJcD3UxlDgSeHxbX11Tgj97GmA5ePvmbMd%2FMBrNJlx0hwlwD004BOkrepYHOIgKPHXpODQoxYTQMbR7ONz0qpYErlOpxQSX5PQzk6bRzuqqIOyZbz5I2TmeJf9Tw62qLyRXlt0T0mEm4uCi8VtZ4fnWPI3vNkU3fwPBXfEueZmT5NHJ45WvAJUtkwcr7y80nzQkDAEWRjeGO3rULjHOeLL8z1yf6hUWWeTULG0om7bcaqhPeB0lyjgWKJFktuiOsZNwL2trayjBbOtodzGz99hJdT%2BlvrgKD%2FFhfgpUBKoN0pGAlPh%2Bc6w%2FQg5HtU%2BDJARB8FKhZGLs%2Fx5QZKAjTrtUnXvXK15XFhscKGZxJGNYQzKZhR5yqMNpU99RfccZau9eP9Fxcz257PgaTGGphKwoUishDB5miujRCaQpFHQ9ISZ8YffOV3c9P8yLrsQURBc0Hsqpcn7KE1Mr4oZAEq4s%2B5a%2FfSoCKzG4rWfvwCoIPrzPW3GVSfmk70Y0gBeTdxcY%2F2V6BfwZ4QKMPLwicoGOqUBtNj15N6oR8GHWV7YqeTH10pg7uhFuFg8Ee61kp0%2Bd6ar22hUy1f1l7vN%2FbiXkYv51MxiiMBAC7giirXRr8INTm4HotAY89cTTOuXNMY7BvtcNCEZB3JqzrM%2BItSY7DJsjYUK%2BfHymZQA8dyOx9yP3lv6jUGBzt%2By6lDBG71SOThyc62Hae9GqdBsfoWPuMAR%2BFS65PjQyU%2FGH591w77Rgh1PwbdY&X-Amz-Signature=510e910caac961ed0d25ec8f8f155ad2436c3a0b2c50114b82fbce7aa598df0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
