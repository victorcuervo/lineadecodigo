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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWZCYL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD0SwVpvMEZfKiP1JxljEwgiUop%2B6rNGJJx5UUnLVZT6QIhAKIlocrUHG0aHEZ0C1%2B9Omc%2FT5GwjsR8ICJV3KgbfMCQKv8DCEEQABoMNjM3NDIzMTgzODA1IgxEhf4cC1El4L1ZQpYq3AMGaEnAAoDUcYp6n6xv5es8k7WwvP6nAtO5hfLpRqJr%2FQMJCAkvgdzSbDVco7E12ZF1GMTL3FCovsGngH7ODpXCqDB%2FNnFEv%2Fc2bFa%2Fz8U%2BoxpScKWSe9MEG%2FYb8JsIRjQnKVK4HrP8NFShUZjBbb0UXeh7aSjBO%2FgSI7JABHzGC1eHe%2Fy%2FnEqCKVfxIRTz6wzOGAmvsqiy1Ahe7i6CHdT7bYB90XNEcHYSJcN0klcjMROCFGCf%2FSccYzXlfKUwJMrHQlUiVWpuejFPmOD4Hq9stIH%2FWFs5l72jhaj2O0BinJDY5Hs0RsKGJU2eqcBY6QOce4uZCDADjnSxgtzlNjl04pzYI5E7bhtvLhj%2FTdoRU0fuGnCi4h9wIMYkhg5Wu%2BKbOR%2FFSUEry5XlXSzOsILzokpy9IjUQzO6mX1WoQcNUbE3xxuTfaXInIAEzqEGQ519aMJX2AEVNk4LXuzuyIzkwcQJKA4x31Jk87MOu2cYKB6txS9iaazOLwnSWnqT23e0Yovf7yaAVu0vw7jJYKYoDjqpNbeHvXeBe2yTIMZIdnuv6vElW%2B%2BaY779xOI2LbmygnnnX5pjv6UU%2BG%2F6XkeLIsUoEG7%2B3lXx31FYpIwGsoBdVUs8LGNu5ERAvDDhhMXJBjqkAc66ZUGrswWgatDnUQvfN73Am0pzESr%2BudyYaYArnIrk7WGwCWfWPNXdXFd571cpOaXN8zdkeuVaRGcMeNdTLCSDs0Dwhz6jkevn3nWkRGG%2BgISnuzA8sgDvySp2Eg%2BFp9vAcMM%2BmwJEKY%2BCrvu%2FBif55a4bZNTOYxBv%2BiaaG6vpWjzCz%2BPqlK1mcN3ejHdc8UiqwLdKScKVwyTDB8QxHJjHB39S&X-Amz-Signature=e55376057edb319ddade6bd23677e0f87a2781af918adb1c2d296145e54260cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWZCYL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD0SwVpvMEZfKiP1JxljEwgiUop%2B6rNGJJx5UUnLVZT6QIhAKIlocrUHG0aHEZ0C1%2B9Omc%2FT5GwjsR8ICJV3KgbfMCQKv8DCEEQABoMNjM3NDIzMTgzODA1IgxEhf4cC1El4L1ZQpYq3AMGaEnAAoDUcYp6n6xv5es8k7WwvP6nAtO5hfLpRqJr%2FQMJCAkvgdzSbDVco7E12ZF1GMTL3FCovsGngH7ODpXCqDB%2FNnFEv%2Fc2bFa%2Fz8U%2BoxpScKWSe9MEG%2FYb8JsIRjQnKVK4HrP8NFShUZjBbb0UXeh7aSjBO%2FgSI7JABHzGC1eHe%2Fy%2FnEqCKVfxIRTz6wzOGAmvsqiy1Ahe7i6CHdT7bYB90XNEcHYSJcN0klcjMROCFGCf%2FSccYzXlfKUwJMrHQlUiVWpuejFPmOD4Hq9stIH%2FWFs5l72jhaj2O0BinJDY5Hs0RsKGJU2eqcBY6QOce4uZCDADjnSxgtzlNjl04pzYI5E7bhtvLhj%2FTdoRU0fuGnCi4h9wIMYkhg5Wu%2BKbOR%2FFSUEry5XlXSzOsILzokpy9IjUQzO6mX1WoQcNUbE3xxuTfaXInIAEzqEGQ519aMJX2AEVNk4LXuzuyIzkwcQJKA4x31Jk87MOu2cYKB6txS9iaazOLwnSWnqT23e0Yovf7yaAVu0vw7jJYKYoDjqpNbeHvXeBe2yTIMZIdnuv6vElW%2B%2BaY779xOI2LbmygnnnX5pjv6UU%2BG%2F6XkeLIsUoEG7%2B3lXx31FYpIwGsoBdVUs8LGNu5ERAvDDhhMXJBjqkAc66ZUGrswWgatDnUQvfN73Am0pzESr%2BudyYaYArnIrk7WGwCWfWPNXdXFd571cpOaXN8zdkeuVaRGcMeNdTLCSDs0Dwhz6jkevn3nWkRGG%2BgISnuzA8sgDvySp2Eg%2BFp9vAcMM%2BmwJEKY%2BCrvu%2FBif55a4bZNTOYxBv%2BiaaG6vpWjzCz%2BPqlK1mcN3ejHdc8UiqwLdKScKVwyTDB8QxHJjHB39S&X-Amz-Signature=f2fc4e866bef36c21cf289121f05c635a1362e18499cdc69a5fa00ec50017453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
