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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEKBA7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBaLABJjqMLNVX4SDvOVm4eOU2upUQsS7KFbtHJK3ZcAIgD3H6PaC9V4dScw4d5%2Bctk1kGrvvhI0GVGZJ76UT9vbgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnfyrRqBhKwBSfmQSrcA0%2FwbI1aUBsTTOv8Ge5%2BoX4LKJmN%2B1jzuMZaCZkvhDOEuOywCcOCSaOZzyhpgp7INnlmAMxhGeLRXK8r0ZCRig9XbHLNMf165r1fZs9FyOca6bVcgxco0eIDyy3h65hBP4BzI3tfj2%2B544h0YCVbANSnyyLOUsIX8fYG310pW6Sy%2Baz0zkEbBFaHyCDPzCSVlcbe5I31haZIObYG5KLuGeLa%2Bq7h%2FMcBQxsAEt5UEF%2BdItB6hn9ofaO3dVrBkcDNrxapZ7xpMl55Ghz8YAWVINGhFu0VnbbEsMk4rol2YPKQHVP4U3ux%2F9DzqisChjOrR4sWMH4ueGzEG5ZQNHtveiYn4ZJJSvA6oAk6jRnesL936YHDShilztyeYsnzLivyrImBY1%2BiNzNVJHb1zOl4NlnAk%2BqpJRMCjJ%2FP%2FwpALjkBUx9yK6IxVx7ZTgh6fcz1bkYzwpo0gadeu3WP7tzds6TC1QhYFaVXbxnJjWFCP4S4eIP3TRk93lT1jbfwtlRFWl5RxQPztooHGMdYYg82FEAA9xYQ0674RM5B%2B5sd6yMiDI%2BgeJhzBEPmpnIgf2MHJ63iB4qryhd6wnoIeLAyAKcuhg6H6BpXeAAggw5uNPXoA3fsQ%2BZKqJLTxiUqMMX6h8oGOqUBZYHMspgurAWFf51vj2i8h8SRYYIClIbfzKT7U2XDr5wGBPCAgz%2BtsI6CQWrMMETrsWtupme6WxjCu9fRUmD5Du%2BQFM1UYoeagKe1sMc3V0wXmSMHwAwd8h1OKZMUiM%2F8%2BSXuv8oIEZ6FySezYXjqIR7sGXq7DqlrnREWKeLJSpIoN9n8%2Fe9MZN3otPO7234D6Tg2lalHZBs3lSWsOAgL9HzHJXfk&X-Amz-Signature=294d58903ca785f655d6bd9b33eaa0385d88efe39e379744cd24b5b828719ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEKBA7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBaLABJjqMLNVX4SDvOVm4eOU2upUQsS7KFbtHJK3ZcAIgD3H6PaC9V4dScw4d5%2Bctk1kGrvvhI0GVGZJ76UT9vbgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKnfyrRqBhKwBSfmQSrcA0%2FwbI1aUBsTTOv8Ge5%2BoX4LKJmN%2B1jzuMZaCZkvhDOEuOywCcOCSaOZzyhpgp7INnlmAMxhGeLRXK8r0ZCRig9XbHLNMf165r1fZs9FyOca6bVcgxco0eIDyy3h65hBP4BzI3tfj2%2B544h0YCVbANSnyyLOUsIX8fYG310pW6Sy%2Baz0zkEbBFaHyCDPzCSVlcbe5I31haZIObYG5KLuGeLa%2Bq7h%2FMcBQxsAEt5UEF%2BdItB6hn9ofaO3dVrBkcDNrxapZ7xpMl55Ghz8YAWVINGhFu0VnbbEsMk4rol2YPKQHVP4U3ux%2F9DzqisChjOrR4sWMH4ueGzEG5ZQNHtveiYn4ZJJSvA6oAk6jRnesL936YHDShilztyeYsnzLivyrImBY1%2BiNzNVJHb1zOl4NlnAk%2BqpJRMCjJ%2FP%2FwpALjkBUx9yK6IxVx7ZTgh6fcz1bkYzwpo0gadeu3WP7tzds6TC1QhYFaVXbxnJjWFCP4S4eIP3TRk93lT1jbfwtlRFWl5RxQPztooHGMdYYg82FEAA9xYQ0674RM5B%2B5sd6yMiDI%2BgeJhzBEPmpnIgf2MHJ63iB4qryhd6wnoIeLAyAKcuhg6H6BpXeAAggw5uNPXoA3fsQ%2BZKqJLTxiUqMMX6h8oGOqUBZYHMspgurAWFf51vj2i8h8SRYYIClIbfzKT7U2XDr5wGBPCAgz%2BtsI6CQWrMMETrsWtupme6WxjCu9fRUmD5Du%2BQFM1UYoeagKe1sMc3V0wXmSMHwAwd8h1OKZMUiM%2F8%2BSXuv8oIEZ6FySezYXjqIR7sGXq7DqlrnREWKeLJSpIoN9n8%2Fe9MZN3otPO7234D6Tg2lalHZBs3lSWsOAgL9HzHJXfk&X-Amz-Signature=752fee4a77f04dbdaa95131ec9c3892fdabfb8d795eda1c05f2125ceda8cc1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
