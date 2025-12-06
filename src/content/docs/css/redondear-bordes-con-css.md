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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBKYN3U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjQZ1F08538ZPoY6UzUYnAAW%2BjQJ6ZBkTTEB1lgE1ywIgaomc5m5nCfRjVXC1iYB%2F8IhEBlonRYqcmsGSDA%2FwuuAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOgxVlUA2%2FOI9rL%2BxCrcA3I6jYyKIEFe7X01ZlRK14d8c5X9eCuQAZmx7YQCfDq8ySRvWLmWfvWi0VTgixm8MgNrsVIiSLTtkt9AYscLo89O9ytgg4EM4m0lgB9sMFfG3kR14qLmkUwtsSzgH1blXATmXnUuvk2DW%2BfYJrNvM8CLs9vHG9%2FfY8cvNpfo9RDDLeFZ0CgEm4OYfNmINjBGFzRff%2FOTsxYP3jFZrZl3yBQ8UOdFftRjJoL35DYm6GbtmcYP5nb9glYAsFirxAbKw7t%2BFuMnPkvOjvQ60DT4fIPxRsnVMWRVRUERyepSXNAntaJ%2BfgQ1Rb1KO02EQtpHuJbu2kto2VJIegFEyBjczaF%2BP%2BaIghyr1g%2Fdp%2Fpm0v4czlJsokINtZiOdrk%2FU0ZedOb9l6TYTof7%2BNrxkw3IFuhW4O%2FtGGmj2LpKxuEWUNpfZKFS5DjpEUt27T%2FD1rZyGngqBHCmuv084RY3m3wxLeKnmQTn5EKoVgOKpjRhHQjgPCHsSa%2Bs4YmLcdVxEMN2D5BPatQuraXQGQx%2FOFutooXTtwyAF%2BeJMO7eVCuXqZfcb0zE6ze%2BYovxnYkAKNLT4lAADGbldngsqnboU3raTaeNyNpwvW64NBJaHQdl%2FrdtKBRzCk0IwY3wL81PMP6m0MkGOqUBMpAY0zm65phGUYy%2FSiUjICSvxPeaxzYdqtTQ5MJvVf1IIuqabs%2F23%2BxNxZsmnOrKQkP2nEfK4JgB%2FaFqkbhLnOm7LctMi3njoqGqjf2om4PjF5HoS%2F3GTo5c9Z1PzS6jQW6qZ8bbU8Y7hURA13r7HrHSWIpC3vzItpmunZxcqwiz%2Fxs0Sk3%2FFisfMCsdbJGu8I92IDDcONjxPFuz8lDcnA3eHYp0&X-Amz-Signature=08b6936afe5aa619853af9a4087d5dc7a053c5a5a2d754c69f691e470a3c92eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBKYN3U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjQZ1F08538ZPoY6UzUYnAAW%2BjQJ6ZBkTTEB1lgE1ywIgaomc5m5nCfRjVXC1iYB%2F8IhEBlonRYqcmsGSDA%2FwuuAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOgxVlUA2%2FOI9rL%2BxCrcA3I6jYyKIEFe7X01ZlRK14d8c5X9eCuQAZmx7YQCfDq8ySRvWLmWfvWi0VTgixm8MgNrsVIiSLTtkt9AYscLo89O9ytgg4EM4m0lgB9sMFfG3kR14qLmkUwtsSzgH1blXATmXnUuvk2DW%2BfYJrNvM8CLs9vHG9%2FfY8cvNpfo9RDDLeFZ0CgEm4OYfNmINjBGFzRff%2FOTsxYP3jFZrZl3yBQ8UOdFftRjJoL35DYm6GbtmcYP5nb9glYAsFirxAbKw7t%2BFuMnPkvOjvQ60DT4fIPxRsnVMWRVRUERyepSXNAntaJ%2BfgQ1Rb1KO02EQtpHuJbu2kto2VJIegFEyBjczaF%2BP%2BaIghyr1g%2Fdp%2Fpm0v4czlJsokINtZiOdrk%2FU0ZedOb9l6TYTof7%2BNrxkw3IFuhW4O%2FtGGmj2LpKxuEWUNpfZKFS5DjpEUt27T%2FD1rZyGngqBHCmuv084RY3m3wxLeKnmQTn5EKoVgOKpjRhHQjgPCHsSa%2Bs4YmLcdVxEMN2D5BPatQuraXQGQx%2FOFutooXTtwyAF%2BeJMO7eVCuXqZfcb0zE6ze%2BYovxnYkAKNLT4lAADGbldngsqnboU3raTaeNyNpwvW64NBJaHQdl%2FrdtKBRzCk0IwY3wL81PMP6m0MkGOqUBMpAY0zm65phGUYy%2FSiUjICSvxPeaxzYdqtTQ5MJvVf1IIuqabs%2F23%2BxNxZsmnOrKQkP2nEfK4JgB%2FaFqkbhLnOm7LctMi3njoqGqjf2om4PjF5HoS%2F3GTo5c9Z1PzS6jQW6qZ8bbU8Y7hURA13r7HrHSWIpC3vzItpmunZxcqwiz%2Fxs0Sk3%2FFisfMCsdbJGu8I92IDDcONjxPFuz8lDcnA3eHYp0&X-Amz-Signature=6243c3522e56c99013058037019a73ad8bcc23ef77f8a5a4f3001e13656ba828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
