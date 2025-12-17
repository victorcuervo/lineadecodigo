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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6TEM3W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrAsO2XYQtu3mylo1B4WnfMCv%2F5GzxMh39H6JAPlieYAIhAOsbrKbGFlubIGHZ0XokoG3o5RBCLlgguRwVCgT2aljwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwseIkiYXoQEu%2B5RLkq3AOTWg7eYv6w3iA4E9u%2FckDSYgXFmCXy0xsZgE31U9NeuZVrCr55n6Rol6JXxxjGkicxRpaHnUeVYePreZjyDLZ7EssZ8ifkPTp5%2Beozz%2BDR8qMAT4l%2F9IVb25W0Ll5D74cN0%2BtVk8sr8Dy9uwVRlY0R5QtXdidOjfuaD2CGhvOI3RIsc28cBnJQ0Vkk6nTMntYffXQu9AQ8Avwpm4j8rbU2GbjzPvp0WLHClBYIcWYLUKJyfVxNSecacfqvtXCjIvq9DwiYDWgbRiVaVJvjRl4oyk6KtL5VFeVNBv5Nyg6E2PjEj7eENbpL83ooBIhAfCIlSc35be7P%2BiDgt%2B2yd7NsQVtcOT8LzJZXCvNZ9d%2F%2Fby0xbgWXG3ZXN4lEcGLP6uTy26mPZH7oe6MjClseC1tVfUtHPHKcj3hmyAsddI3D2llUgYI7oKu%2FJr7FNksM3xkpL00jtrhBfNllA3MPmd0CumDkBJ9JUjqM4SQOe7eCotnyHH%2FEWNYdhahYyMcXNt7QP5LK7EyhvsH%2FUueVN%2BoQNmZos1cL4fofAijJWhiFIiJZPZ0q40QOgcDtSWqld11ugy1r1L989l6EKGf8jhKVTV1KBW%2BiX4iea916kCGJlPPWYdYLYQoRAYy1LDDrn4vKBjqkASu9Jf1Y1VsacOnewDIzyHi2ez9KTyAOzZEQ43mZm%2FNQz%2F8YtwMYAN2Y7qlALzM3ePhIYh770u8S%2BEr6avXkOZCRCLKvGXQQd3xQt%2F5xLQUlIb2%2FWe5LNBb5Ye80g1TsgURWGW6nArO05f44hQDXIvPx2yZ3qM3pTTeEKRWX5kojU6uVvrMQgNC9iQ6kqyyGWGJ3TDlBSBgv2P9ZQPoMFecxFe7K&X-Amz-Signature=99a33fc66e8d5c064e1f4a706a946e67461bac1f12d17db90db597181d4eb233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6TEM3W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrAsO2XYQtu3mylo1B4WnfMCv%2F5GzxMh39H6JAPlieYAIhAOsbrKbGFlubIGHZ0XokoG3o5RBCLlgguRwVCgT2aljwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwseIkiYXoQEu%2B5RLkq3AOTWg7eYv6w3iA4E9u%2FckDSYgXFmCXy0xsZgE31U9NeuZVrCr55n6Rol6JXxxjGkicxRpaHnUeVYePreZjyDLZ7EssZ8ifkPTp5%2Beozz%2BDR8qMAT4l%2F9IVb25W0Ll5D74cN0%2BtVk8sr8Dy9uwVRlY0R5QtXdidOjfuaD2CGhvOI3RIsc28cBnJQ0Vkk6nTMntYffXQu9AQ8Avwpm4j8rbU2GbjzPvp0WLHClBYIcWYLUKJyfVxNSecacfqvtXCjIvq9DwiYDWgbRiVaVJvjRl4oyk6KtL5VFeVNBv5Nyg6E2PjEj7eENbpL83ooBIhAfCIlSc35be7P%2BiDgt%2B2yd7NsQVtcOT8LzJZXCvNZ9d%2F%2Fby0xbgWXG3ZXN4lEcGLP6uTy26mPZH7oe6MjClseC1tVfUtHPHKcj3hmyAsddI3D2llUgYI7oKu%2FJr7FNksM3xkpL00jtrhBfNllA3MPmd0CumDkBJ9JUjqM4SQOe7eCotnyHH%2FEWNYdhahYyMcXNt7QP5LK7EyhvsH%2FUueVN%2BoQNmZos1cL4fofAijJWhiFIiJZPZ0q40QOgcDtSWqld11ugy1r1L989l6EKGf8jhKVTV1KBW%2BiX4iea916kCGJlPPWYdYLYQoRAYy1LDDrn4vKBjqkASu9Jf1Y1VsacOnewDIzyHi2ez9KTyAOzZEQ43mZm%2FNQz%2F8YtwMYAN2Y7qlALzM3ePhIYh770u8S%2BEr6avXkOZCRCLKvGXQQd3xQt%2F5xLQUlIb2%2FWe5LNBb5Ye80g1TsgURWGW6nArO05f44hQDXIvPx2yZ3qM3pTTeEKRWX5kojU6uVvrMQgNC9iQ6kqyyGWGJ3TDlBSBgv2P9ZQPoMFecxFe7K&X-Amz-Signature=2a0feb7bbc3345a3e27e80c343d285e983149cc6a4a3f4aa9358431374e05223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
