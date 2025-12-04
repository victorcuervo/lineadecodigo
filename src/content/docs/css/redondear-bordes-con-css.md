---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OK4JV5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIA5Li7OSPOnxDIrj0TpyRBKoeg6qLp8A4yzgnA30r6L0AiEAxKiG56bzpZUcgIMLQgZKxwlRQux%2BiSiH%2BkRu9KEkfmQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEVr9YKdhXAz3wK%2BbyrcA3DHpaw2JIgmXAUHJJH5%2BRcW9FoYeMvZMRI7S01yKQ%2FTduX2E9OgoZ%2BDRhfsgONJkm1OGichyNssSbNjqQ0uyjUkZqlw6WcwcQBBziMzOFph8FCrLjWUU9RsVDEFl%2B7Z1TWl2YPyuPKOwKmybBtsqloWSeBay9nonbfSxGDfAeWm2r%2FVxgqkjX2VIB%2Bgaf3exqSkXZ6VguYFcRgDUlDuEoBKTx%2BQ7sZ%2FE8hkCbbClwnCMQxZL574X4GiKmy7mgJG4NHB6RcEU9bn8mmoT45Vv3LQtyW1Nxp%2BxA%2FDZDUXHkTUlD4oHnF74oHpgfHCMxRRdNB4uLMWU8HCV0KtqWfRZPILTLfnB2tkDhqE0ztRfQSJ1q2O3KFg0FPs1PEDnUMv6xwqPy%2F98SIC0%2FoHTSWSl%2BaN80%2BohO8RV9HwkOcOACwlY5r53YOuWRXQTR8fxUsEGdbJcIzSU%2BGqzq5ZnzVNU914uED6ZeMf76kRIDIPrhkCXaPgSYXQLZL57Fa%2F2zs3xVUEWIb8toB5urVw1H6XsNUKdN3YLkobXaGKk4ZLOO06WNzYi9Wch2V4l96guakjPHfwM5nTIdNFfXRRuHXTNFEbXTR%2BI7D2C1Ru2Oje%2B57oUTJlCs24W2eJBJx7MN%2FnxMkGOqUBiFPF4ynw7kVFNYMiyMmRP0bZDbKLcrVb6LzTVh%2B9kDY8aqp4zfy2zB0QJroryxFXybyrTbTOOe2U0gBhJA3CQ2Nfn%2F%2BDrs4qAY3CwIAy7kyJ17p66oWpTlD4OG1LWXzjo5hPsawAohpOCX%2B8R%2BPWJZiGk1y3grxZMe5LRAdxjHridiXduKZAmNyikNPEJRnrc7w3iqSe9jaN7RUZt2xxb0PLSTNh&X-Amz-Signature=0c3bb594ba0eae1718adb6559de51a18ece1cfd308ef5f82ac08c2a49953703d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OK4JV5X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIA5Li7OSPOnxDIrj0TpyRBKoeg6qLp8A4yzgnA30r6L0AiEAxKiG56bzpZUcgIMLQgZKxwlRQux%2BiSiH%2BkRu9KEkfmQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEVr9YKdhXAz3wK%2BbyrcA3DHpaw2JIgmXAUHJJH5%2BRcW9FoYeMvZMRI7S01yKQ%2FTduX2E9OgoZ%2BDRhfsgONJkm1OGichyNssSbNjqQ0uyjUkZqlw6WcwcQBBziMzOFph8FCrLjWUU9RsVDEFl%2B7Z1TWl2YPyuPKOwKmybBtsqloWSeBay9nonbfSxGDfAeWm2r%2FVxgqkjX2VIB%2Bgaf3exqSkXZ6VguYFcRgDUlDuEoBKTx%2BQ7sZ%2FE8hkCbbClwnCMQxZL574X4GiKmy7mgJG4NHB6RcEU9bn8mmoT45Vv3LQtyW1Nxp%2BxA%2FDZDUXHkTUlD4oHnF74oHpgfHCMxRRdNB4uLMWU8HCV0KtqWfRZPILTLfnB2tkDhqE0ztRfQSJ1q2O3KFg0FPs1PEDnUMv6xwqPy%2F98SIC0%2FoHTSWSl%2BaN80%2BohO8RV9HwkOcOACwlY5r53YOuWRXQTR8fxUsEGdbJcIzSU%2BGqzq5ZnzVNU914uED6ZeMf76kRIDIPrhkCXaPgSYXQLZL57Fa%2F2zs3xVUEWIb8toB5urVw1H6XsNUKdN3YLkobXaGKk4ZLOO06WNzYi9Wch2V4l96guakjPHfwM5nTIdNFfXRRuHXTNFEbXTR%2BI7D2C1Ru2Oje%2B57oUTJlCs24W2eJBJx7MN%2FnxMkGOqUBiFPF4ynw7kVFNYMiyMmRP0bZDbKLcrVb6LzTVh%2B9kDY8aqp4zfy2zB0QJroryxFXybyrTbTOOe2U0gBhJA3CQ2Nfn%2F%2BDrs4qAY3CwIAy7kyJ17p66oWpTlD4OG1LWXzjo5hPsawAohpOCX%2B8R%2BPWJZiGk1y3grxZMe5LRAdxjHridiXduKZAmNyikNPEJRnrc7w3iqSe9jaN7RUZt2xxb0PLSTNh&X-Amz-Signature=d9e18db7407cd7aaaa375e59459ae5e92beb70708e8a002282c0dda36594526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
