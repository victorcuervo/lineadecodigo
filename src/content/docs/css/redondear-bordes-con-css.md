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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD2KTOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wT6suWawoxBJTmS2uEdyqsBgfXIXyoCFFQSVaHIe6gIhAK%2BkmqztdaC%2B%2BtLXpMy3irZldXqRzJMzebsf5jhOW5VFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYwl6L7KUcpmhMtpAq3APCJonHsLAKAqMZYb09ivcfqe9w8%2FL5Rp4UP%2FAb6nlVgvR51LHERi3H9nUkvTD6ojFMO7w2Qp68gbeBY46p7%2Bo0AnCSHjB1qapVFJoySFKLS7dW2C0EvZziimmoxh5sLpt9hMnBWC2wumUX7OniJNWCEpVhoI026qQ68jz19b8LdD9VerAl8Ng0OC6CQHw3aMpzKmCsrRIHVIirI1Ynxf2a7LKmjZSJcTYMjGvFKmA76u25w9M0kiywCh0h4A8xNwcGio4KgHoo%2F3t0iD5qChJhbmcsspAXshVXWcGeQZ%2FqyHWa%2FLJJuXy1qPD5SroZbrYfYKvtrWfPrtqU%2FghVliHIhEvjk7an29%2BZAlum6xpvaApm0J592FMCTCOMWkEMrgwD4W0A7unHVRdb0tqr3%2F2sYSo6Iy2T4jkRw2bNNli5cHn6yE%2FAy7tAhmzvxcu9bbPSclh0T0hK5CKhIIc4l8O8aqezQ6fjhvLQP2xK0RUl%2F%2B6s%2BPlDh5czr7DWBgeTfxOZX1SeG1NGgGjYzNQ0Sf%2FLT5nAElh1Iszkkohj6TlgZdEUmLkzsE%2F7LJablBffZGUpNrFMOVwD56oy4czxQnIXAmTa5BYt5v%2FCkhRFgZ78da2AqabwUlEZGR%2BqoDDFptDJBjqkAcA7ChtvPWB18EKqUQtn1s8KId13Ez9CCPD8druwhaFycfrhW%2Fw7cw17NoIOunXPwLMtPZQcVpyolYx4Ad0Pln%2FzB8%2F8%2FouUX%2FTy3F73mqQbD%2F8wx73TPWYK%2FzEkPAB92DYcQKUKznITnK2nbTZafQsnD%2Bj4eHlNCLB6oLUgQHPpffbxKkwLxTJg0lFhgJgrqy5EypqFa%2B%2BV9GeVoxr%2Fo7quyUDL&X-Amz-Signature=1b308ffb2bc826a47ee38bb171e68218b39ffa343250deb4977d6a2d7ef539d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTD2KTOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0wT6suWawoxBJTmS2uEdyqsBgfXIXyoCFFQSVaHIe6gIhAK%2BkmqztdaC%2B%2BtLXpMy3irZldXqRzJMzebsf5jhOW5VFKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYwl6L7KUcpmhMtpAq3APCJonHsLAKAqMZYb09ivcfqe9w8%2FL5Rp4UP%2FAb6nlVgvR51LHERi3H9nUkvTD6ojFMO7w2Qp68gbeBY46p7%2Bo0AnCSHjB1qapVFJoySFKLS7dW2C0EvZziimmoxh5sLpt9hMnBWC2wumUX7OniJNWCEpVhoI026qQ68jz19b8LdD9VerAl8Ng0OC6CQHw3aMpzKmCsrRIHVIirI1Ynxf2a7LKmjZSJcTYMjGvFKmA76u25w9M0kiywCh0h4A8xNwcGio4KgHoo%2F3t0iD5qChJhbmcsspAXshVXWcGeQZ%2FqyHWa%2FLJJuXy1qPD5SroZbrYfYKvtrWfPrtqU%2FghVliHIhEvjk7an29%2BZAlum6xpvaApm0J592FMCTCOMWkEMrgwD4W0A7unHVRdb0tqr3%2F2sYSo6Iy2T4jkRw2bNNli5cHn6yE%2FAy7tAhmzvxcu9bbPSclh0T0hK5CKhIIc4l8O8aqezQ6fjhvLQP2xK0RUl%2F%2B6s%2BPlDh5czr7DWBgeTfxOZX1SeG1NGgGjYzNQ0Sf%2FLT5nAElh1Iszkkohj6TlgZdEUmLkzsE%2F7LJablBffZGUpNrFMOVwD56oy4czxQnIXAmTa5BYt5v%2FCkhRFgZ78da2AqabwUlEZGR%2BqoDDFptDJBjqkAcA7ChtvPWB18EKqUQtn1s8KId13Ez9CCPD8druwhaFycfrhW%2Fw7cw17NoIOunXPwLMtPZQcVpyolYx4Ad0Pln%2FzB8%2F8%2FouUX%2FTy3F73mqQbD%2F8wx73TPWYK%2FzEkPAB92DYcQKUKznITnK2nbTZafQsnD%2Bj4eHlNCLB6oLUgQHPpffbxKkwLxTJg0lFhgJgrqy5EypqFa%2B%2BV9GeVoxr%2Fo7quyUDL&X-Amz-Signature=a3f56be8d111fad9cd3a40fa5ea38e386dbf51bb122f9d9fbb54b355ba6f3095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
