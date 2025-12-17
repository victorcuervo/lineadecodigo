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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWKH3HN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmkx%2Fo%2FeNURqGcq2Yvud7CFMuzdQ5brumnlBX1DfQhfAiEAmX565I%2FjrtIRvj98bIgMrhWPhywh5EqyRcTO1J5HaDQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL4bBOiAQfXJRjur7CrcA7OUzFHSpcf4Sc2t9dcPFCPs3qHTM%2F7zp9wlrPZSGV7Vy3tWfkAM82OqhiJAyfyKrnpgBCmhKPkSMvk%2BGqWRjN%2FSL1yd5PXH3Cd%2Fr1%2FrhUuxw5WCtlVNLlYLGKVXT5vHdbEGIRPssGOXHLa73zT%2FKDWHEhgHjjsmBWWZpmESbCD57SUtBfshUapdcJP0YLlD%2BEaiIMK3VAal34dUCdq64ICqLbv9Q80mhlShvjcUuZtjrwQ0SzsE%2BhoHwSFseIc548msWNWJliwUUPDnm%2FBLN%2F9BKgCeREoaILMSH0JL%2Ft5gAFm8h8otUP7AmLZ7qNGWHCnbGHCx7OnEO3%2BCngYnelKsTFjPkqgx8pN5Os6WGbTy%2FeEN6ksghDVY4RiKTiqLHQwREOzZNFHud7owU7oFz45uKWMN5zmMj9q4nrbwFhinTlrnzy0vm0nCp%2BxsLKY0a49tLtMwmYkxWRtKux%2FNvTNHvZeGeeeqLigfgMW9W2n3akATvPJowFIFjx6AQd5jA6%2FwnMbuwW8e85hFKjDijWicjT8SW0lSsRs1t63zDL61Ogzvuf4ePTimnofp32n1CFD%2BLqBAlJbNWOY6mCWtMwppjf4ojk8jdGyCBtlShvJ%2FMGbXhQvnPN2h%2BrZQMLHOiMoGOqUBclKkwA39XknYAPUQJa6H9HaDGCtDrTBTf0BnO5kAt4qAeAIeQ7X8p%2BguUHCDLnCJ%2FySqyC7I7%2F1ijJLCERsS6plCy2sHuUgB%2B%2FQ4ydaGxCnzjmYNn%2BZfwMp61%2BBzfMQJjzqnUUYsJJaUXwIDMxV58d%2FWkJGmfBRRp77TVjX4bVsH8e0KXgdWXGuvoZnNPY3pSI7qtF9Wu5o1faZmBYFCzmWmkUQX&X-Amz-Signature=65ff78a041bc503d6cc3eebb65ce7bad51e813ead93ed644269d865f64075571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWKH3HN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmkx%2Fo%2FeNURqGcq2Yvud7CFMuzdQ5brumnlBX1DfQhfAiEAmX565I%2FjrtIRvj98bIgMrhWPhywh5EqyRcTO1J5HaDQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL4bBOiAQfXJRjur7CrcA7OUzFHSpcf4Sc2t9dcPFCPs3qHTM%2F7zp9wlrPZSGV7Vy3tWfkAM82OqhiJAyfyKrnpgBCmhKPkSMvk%2BGqWRjN%2FSL1yd5PXH3Cd%2Fr1%2FrhUuxw5WCtlVNLlYLGKVXT5vHdbEGIRPssGOXHLa73zT%2FKDWHEhgHjjsmBWWZpmESbCD57SUtBfshUapdcJP0YLlD%2BEaiIMK3VAal34dUCdq64ICqLbv9Q80mhlShvjcUuZtjrwQ0SzsE%2BhoHwSFseIc548msWNWJliwUUPDnm%2FBLN%2F9BKgCeREoaILMSH0JL%2Ft5gAFm8h8otUP7AmLZ7qNGWHCnbGHCx7OnEO3%2BCngYnelKsTFjPkqgx8pN5Os6WGbTy%2FeEN6ksghDVY4RiKTiqLHQwREOzZNFHud7owU7oFz45uKWMN5zmMj9q4nrbwFhinTlrnzy0vm0nCp%2BxsLKY0a49tLtMwmYkxWRtKux%2FNvTNHvZeGeeeqLigfgMW9W2n3akATvPJowFIFjx6AQd5jA6%2FwnMbuwW8e85hFKjDijWicjT8SW0lSsRs1t63zDL61Ogzvuf4ePTimnofp32n1CFD%2BLqBAlJbNWOY6mCWtMwppjf4ojk8jdGyCBtlShvJ%2FMGbXhQvnPN2h%2BrZQMLHOiMoGOqUBclKkwA39XknYAPUQJa6H9HaDGCtDrTBTf0BnO5kAt4qAeAIeQ7X8p%2BguUHCDLnCJ%2FySqyC7I7%2F1ijJLCERsS6plCy2sHuUgB%2B%2FQ4ydaGxCnzjmYNn%2BZfwMp61%2BBzfMQJjzqnUUYsJJaUXwIDMxV58d%2FWkJGmfBRRp77TVjX4bVsH8e0KXgdWXGuvoZnNPY3pSI7qtF9Wu5o1faZmBYFCzmWmkUQX&X-Amz-Signature=03ecdf0bb2d3709966056f45a7f87c58368df6526c409cedf3fbe6c7acb4b279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
