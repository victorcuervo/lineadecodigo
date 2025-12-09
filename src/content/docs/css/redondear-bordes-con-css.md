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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SQTQ37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfh%2BedxDyk22OR4CLYxx1x0r6%2F%2B5GRIkR9UEGpt8aI3QIgREmpMumBOfYY4KQMOG2hsdlSBA2KhGfUGoXnuEwtCUkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4%2FQeWDiWuHuXcn%2BircA4iJB2HOBUlV2LOsUbz0WbeF5kvfcgWADP6pJjEwjYZ5SSmO7EmDW3riq4Hem6L3WiLSv4l%2BCwcMBpYvVx1n3Cf%2BfqePeKMWSNqMsySnwo8pG6vrrXuBChwNN8qSWBExsK7SYb8bTMmptZ%2BlaQVBOvBLH3Ijp5EFNnXo4NPpw8AQ6jhQwYB1P%2FZbz%2Bd7IXu5rKsL23gLr8lwOcEnP8O0B%2Faj1okucX4e%2BpKM3gBXhMk526Vp1D7L65xZGr9kVOJcUoI7gBvUM5tLJO9QJso8uDVkRxIs30D%2BokbVk9KG%2FvOeUdFdYWoskvnp8kh7WM8AW70l%2Bo4sfB5xUmz6zrLUguKss2E%2BWJ8rJWfLuNDy7pZDMk8bQlrEuVArt2o2E5T%2F7F0WXFCtgb1vr5tvVxp0Hei5DGQ4wRZg5ISVVlwFgwivFLNSSYbbhIQ4HXwR3vgFGcN4LAGHOiPshQ%2BB9oQt%2FyR774o8fjqnFL0JtHWjbCzzdg0M0t%2FH8YzPK0N6TjmlfevpOZp9qM%2BzkhlkW0U6MI%2F2AAliY%2FEL8iTPB8C9ScBszxJRUX5LqRivNOtbwLtYCV4JArnOx3tr%2BJVz%2Bu%2FGS4E06THq88AHtUK5RFY5n%2BlnXqnMlge%2BDUre8VqdMJHD3ckGOqUBCeeBvEqAjki2Lq7GBbziTcqehcUnpu5L2kSdierTFCkj%2FRObZgAqXr1s6jfhBEGk9X%2FywgTwr301UkuPE0JSNli8Qk6h7c9yxAd34SmAhjHAaGdmPIpu4gAGE5%2BZAQVqZY1zDWRsjvKgykqtoOEI8w%2BDg2VQ41tYBrUuc8k6FYnaMQGEsxg1W1ulV7i4zUYlvdvtsJvCkSNSht6Ct5XvYezMn1Az&X-Amz-Signature=a8cac3b1b084cf9f333b16371034f589e65cf16d4858e8ba37456b48f076bf6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5SQTQ37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfh%2BedxDyk22OR4CLYxx1x0r6%2F%2B5GRIkR9UEGpt8aI3QIgREmpMumBOfYY4KQMOG2hsdlSBA2KhGfUGoXnuEwtCUkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4%2FQeWDiWuHuXcn%2BircA4iJB2HOBUlV2LOsUbz0WbeF5kvfcgWADP6pJjEwjYZ5SSmO7EmDW3riq4Hem6L3WiLSv4l%2BCwcMBpYvVx1n3Cf%2BfqePeKMWSNqMsySnwo8pG6vrrXuBChwNN8qSWBExsK7SYb8bTMmptZ%2BlaQVBOvBLH3Ijp5EFNnXo4NPpw8AQ6jhQwYB1P%2FZbz%2Bd7IXu5rKsL23gLr8lwOcEnP8O0B%2Faj1okucX4e%2BpKM3gBXhMk526Vp1D7L65xZGr9kVOJcUoI7gBvUM5tLJO9QJso8uDVkRxIs30D%2BokbVk9KG%2FvOeUdFdYWoskvnp8kh7WM8AW70l%2Bo4sfB5xUmz6zrLUguKss2E%2BWJ8rJWfLuNDy7pZDMk8bQlrEuVArt2o2E5T%2F7F0WXFCtgb1vr5tvVxp0Hei5DGQ4wRZg5ISVVlwFgwivFLNSSYbbhIQ4HXwR3vgFGcN4LAGHOiPshQ%2BB9oQt%2FyR774o8fjqnFL0JtHWjbCzzdg0M0t%2FH8YzPK0N6TjmlfevpOZp9qM%2BzkhlkW0U6MI%2F2AAliY%2FEL8iTPB8C9ScBszxJRUX5LqRivNOtbwLtYCV4JArnOx3tr%2BJVz%2Bu%2FGS4E06THq88AHtUK5RFY5n%2BlnXqnMlge%2BDUre8VqdMJHD3ckGOqUBCeeBvEqAjki2Lq7GBbziTcqehcUnpu5L2kSdierTFCkj%2FRObZgAqXr1s6jfhBEGk9X%2FywgTwr301UkuPE0JSNli8Qk6h7c9yxAd34SmAhjHAaGdmPIpu4gAGE5%2BZAQVqZY1zDWRsjvKgykqtoOEI8w%2BDg2VQ41tYBrUuc8k6FYnaMQGEsxg1W1ulV7i4zUYlvdvtsJvCkSNSht6Ct5XvYezMn1Az&X-Amz-Signature=aa42ca224962f9882f909227f26b5ca65d2bcebc4b0128b8d2cf720619492140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
