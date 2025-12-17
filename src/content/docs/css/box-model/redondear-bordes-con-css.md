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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAEPFJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM9AUhWC5geRpGwsiHSb3AC%2FxqYUK6XWLhbkYt%2B%2B%2BVVAiEA84XvDbcjf2S40ADNKt2xt500s0A9tPz%2BuBkRukhnbeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1BA7eRO27xyG4jXSrcA4xCHORfAMoZWK85T2Hhn%2B8%2B6Yo5x4AuxMUBHpeP6e2UCJEeWhNOot4MseX7AbB9oaWuvPk8mxgpwKjQ4jPan7hbjI9gF33PxSVhgd7IA7ysqwdyo%2FyXt5qilOF3jc0Ol1pAK4wEUQQd3NJRzmaQxhBTrfeuyFodZJ5IZQFBhNIO9if1%2FA9I7zS%2FmOTWp1i0FOG0py%2Bnn30vKAYl0u%2FXQPJJl6CzAgl2zKNUw3NpOtSjaBNoNTH%2BS46VqklQkOL39wFYUk6uPZwudJbALYkQPMurropvWql4KIudMvbrYfQom2e74q4mBf9rbrC7mb8eXmDUUs7CSqk8N4r1SqwnbKNLYLnE1pITBc1YwPhVGvCq78c%2Bo%2F6ZN6EDZH6jG23%2B6q0if7JSthlI5f9UFrTio5Hj5gLWI4n10U063W%2FyrN59TcVHQPX4Ki%2FnK9UV%2F%2F5Pej1NIRI6FqOZ7g1lBj7CkKYg9JtCp1GlEoiBvdATpzEe6SJf%2BCFO9hBObhJSYgyheZ43pVWSNycskmYIXJrQsWxeTzRgKGU58qTa4feEHi%2F5yf7DA5KazOYwll958NWKzxRRJe9aH8JXECZX9pvdESQypex5XzJb0Y%2BNH0l8W1iE0a8%2FEKLIkrTpYv2jMKmgi8oGOqUBkjygcPsvlD4ISqVf5u0D0Sb33U2gF3G6faakhGpTaDfMIzy4HwbO09YuNEmr%2FrGaXndBlpRKG8fVOrO2q%2F8TPbW2HkJNd%2FlIjtGwShCvztPC7nex0wBadW6Vwb6smFaCfmwPPnpfKxKGhAVWNrOSLn4pFcR3nOuKrsbvtKpbkIiqkn%2BfB%2FsKxEjg8TcY2hz99claz9GYS1BhrRFl%2FCW2pun2OLsE&X-Amz-Signature=00b1744e9b0179bb6cc54047049056c576f715e45a150e559917cfb6d9fc7139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAEPFJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM9AUhWC5geRpGwsiHSb3AC%2FxqYUK6XWLhbkYt%2B%2B%2BVVAiEA84XvDbcjf2S40ADNKt2xt500s0A9tPz%2BuBkRukhnbeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1BA7eRO27xyG4jXSrcA4xCHORfAMoZWK85T2Hhn%2B8%2B6Yo5x4AuxMUBHpeP6e2UCJEeWhNOot4MseX7AbB9oaWuvPk8mxgpwKjQ4jPan7hbjI9gF33PxSVhgd7IA7ysqwdyo%2FyXt5qilOF3jc0Ol1pAK4wEUQQd3NJRzmaQxhBTrfeuyFodZJ5IZQFBhNIO9if1%2FA9I7zS%2FmOTWp1i0FOG0py%2Bnn30vKAYl0u%2FXQPJJl6CzAgl2zKNUw3NpOtSjaBNoNTH%2BS46VqklQkOL39wFYUk6uPZwudJbALYkQPMurropvWql4KIudMvbrYfQom2e74q4mBf9rbrC7mb8eXmDUUs7CSqk8N4r1SqwnbKNLYLnE1pITBc1YwPhVGvCq78c%2Bo%2F6ZN6EDZH6jG23%2B6q0if7JSthlI5f9UFrTio5Hj5gLWI4n10U063W%2FyrN59TcVHQPX4Ki%2FnK9UV%2F%2F5Pej1NIRI6FqOZ7g1lBj7CkKYg9JtCp1GlEoiBvdATpzEe6SJf%2BCFO9hBObhJSYgyheZ43pVWSNycskmYIXJrQsWxeTzRgKGU58qTa4feEHi%2F5yf7DA5KazOYwll958NWKzxRRJe9aH8JXECZX9pvdESQypex5XzJb0Y%2BNH0l8W1iE0a8%2FEKLIkrTpYv2jMKmgi8oGOqUBkjygcPsvlD4ISqVf5u0D0Sb33U2gF3G6faakhGpTaDfMIzy4HwbO09YuNEmr%2FrGaXndBlpRKG8fVOrO2q%2F8TPbW2HkJNd%2FlIjtGwShCvztPC7nex0wBadW6Vwb6smFaCfmwPPnpfKxKGhAVWNrOSLn4pFcR3nOuKrsbvtKpbkIiqkn%2BfB%2FsKxEjg8TcY2hz99claz9GYS1BhrRFl%2FCW2pun2OLsE&X-Amz-Signature=3af0f5a78437e8b2c353d595d9e204533fd252a8d6a8f33329d1a29ad1bd661d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
