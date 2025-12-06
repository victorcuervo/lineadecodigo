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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTJ2PIG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVjyUb3x8JPeWuXilSL1eAa%2Bw9sIYn02XnfqvNDoTEzAiEAt%2FFfOJMg%2BD%2FjmP263UyW1WLoZbq2CgiD%2FLxIHHBkR3oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDYtpnvn0G2azKMyPSrcAyndob5fQsibwXhvBqTsdqd6XG3ao2pupYit9j32H1TcZb1MYPFWpp000LYcsHUC0GFzziMki56H%2FZM1oWZvnqeN36sHZD5JP3o%2BFcxLbIuIUkzwJAf1qYmIPgz6GReQxcNXEWeJpso0ICgRm8mQeBQwQZVUMvCiPTCrDws0%2F11IebfzlC1m7JKBANRg%2BO8CeGNVNDoLWeI1hxs97RpLyvWAdB93y19nu6Clnm%2BBexL1%2BtlYYS3yvrN0%2F1CLhK2O%2FqnzW92q%2B3oByu0%2FvmIWsFyM8QvMg6OJy1r96bDbjWQzGoeFP6yLYLxT7zSwR8PMiR5esJ%2BvpL57XbCLHQCz6n7JVe%2BaliLHfZWb3fw57zhWlhfiaKCK%2F6I%2FWCV0Dl0jkjD1MVD2Av0Vs6zmb0xt5yuP5lvxSpcagL69eCtvB4rBsaMxYycXrmk%2BolGfCL%2FiZ2g0I4d5GNHPlXp%2F4RZCkHgl5QWzdyHLGq7r%2FhQXzFU7Q%2B7G1sA361z6eL17w8jyldsNuTXFKSLSKlQiHN79VwJ6TbyJtGo1Z7o6U6u%2BMLp440huvVTwMgh8NAxCK8EwSnlFEpPzS%2FmTwYDPpaLaZbkgzXr%2FpTEtf76OlGKREcsbU3VZA4LM%2BefjzI0CMK%2FJ0ckGOqUBR9X5%2BFr%2F4NdY1X4zzfMt7YO8kIi9mlfQRay7%2FThccUrsVHxLuQ6JY7RjTYdn98mgxIJXDE5jnLTBF0p4ZXExC0rEcagAIKaFHezUlNogUxr9xiikxQqg%2FkczVHzziJlC7lryy0puu8GCRWRzL9BkcNYWkyw7DotiNolpefUfi0pt%2FrW0FzWgWP7vbXBcF0ypCjLR1CSZrMOtSbbwSYrlNcQacybm&X-Amz-Signature=cd45239ef29103e15217c8b4a8721e9fb1a0e3764a65644c015935ad7d91c288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTJ2PIG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T205051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVjyUb3x8JPeWuXilSL1eAa%2Bw9sIYn02XnfqvNDoTEzAiEAt%2FFfOJMg%2BD%2FjmP263UyW1WLoZbq2CgiD%2FLxIHHBkR3oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDYtpnvn0G2azKMyPSrcAyndob5fQsibwXhvBqTsdqd6XG3ao2pupYit9j32H1TcZb1MYPFWpp000LYcsHUC0GFzziMki56H%2FZM1oWZvnqeN36sHZD5JP3o%2BFcxLbIuIUkzwJAf1qYmIPgz6GReQxcNXEWeJpso0ICgRm8mQeBQwQZVUMvCiPTCrDws0%2F11IebfzlC1m7JKBANRg%2BO8CeGNVNDoLWeI1hxs97RpLyvWAdB93y19nu6Clnm%2BBexL1%2BtlYYS3yvrN0%2F1CLhK2O%2FqnzW92q%2B3oByu0%2FvmIWsFyM8QvMg6OJy1r96bDbjWQzGoeFP6yLYLxT7zSwR8PMiR5esJ%2BvpL57XbCLHQCz6n7JVe%2BaliLHfZWb3fw57zhWlhfiaKCK%2F6I%2FWCV0Dl0jkjD1MVD2Av0Vs6zmb0xt5yuP5lvxSpcagL69eCtvB4rBsaMxYycXrmk%2BolGfCL%2FiZ2g0I4d5GNHPlXp%2F4RZCkHgl5QWzdyHLGq7r%2FhQXzFU7Q%2B7G1sA361z6eL17w8jyldsNuTXFKSLSKlQiHN79VwJ6TbyJtGo1Z7o6U6u%2BMLp440huvVTwMgh8NAxCK8EwSnlFEpPzS%2FmTwYDPpaLaZbkgzXr%2FpTEtf76OlGKREcsbU3VZA4LM%2BefjzI0CMK%2FJ0ckGOqUBR9X5%2BFr%2F4NdY1X4zzfMt7YO8kIi9mlfQRay7%2FThccUrsVHxLuQ6JY7RjTYdn98mgxIJXDE5jnLTBF0p4ZXExC0rEcagAIKaFHezUlNogUxr9xiikxQqg%2FkczVHzziJlC7lryy0puu8GCRWRzL9BkcNYWkyw7DotiNolpefUfi0pt%2FrW0FzWgWP7vbXBcF0ypCjLR1CSZrMOtSbbwSYrlNcQacybm&X-Amz-Signature=e117c659b838be0a61d9a0f76b3d3eb24e5642323d5b5e5581736de771a2a751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
