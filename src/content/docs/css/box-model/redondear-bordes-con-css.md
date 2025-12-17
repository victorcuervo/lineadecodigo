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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXGDSIZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYpOWvgHPiEN3YBMIpWWoW7%2F%2FGMgEPPFAwaDahjsTPhQIhAKdXjFHxxcgkrQ095ju9OkCiewgyQcjV0os3SVasnlXGKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvc%2BPhU6mhi8%2BiE98q3ANEH9UlgFsRwQBYWupuOJMQxYdeqVVP3ASkqyAOs1hp9Ckb0dskZjSFGpTD8lU%2BEopOeVugqNT5dYU%2BoulapbQDe0rhxQ5HlrV6vOW%2FnR%2BekvNi6LCJTPWjG%2FVpPCJ2dz6gDBhLkZMBVXsX7VuRCq2FFoJYeXfLut%2FlFWi8MTlUlDVeXdE%2Fnxg58O5Q8NTCU1fZnZ9FxfFszJQyUvu0rAZh%2Fn5lUTOMiedd%2FvL4BAadmC%2Fgt81YG6emWZZ8%2FYr5YymMCDjHn2gfgBV0cSS%2FlYi4A2Anjx5HpGI9d5etxRFBEpoa5UxDsXX02Q571MHqvXqcQ1kQuXDC0wtyffT6%2FlwnpRPwRnLhhPWH4d097uW8A3TpvZzZi%2F%2FPXLNoXxWFsgPGN1unM%2B58IN76FbT2bpk20Fv8PMkX0wYxnSL27PSg1cTri4hQ8%2FbEc24wOuZNwp7bhompgUKSxylrYAeAPZ2Rg%2BO8fDC9qParpQMWXucZr4pD8LoMqA4ijLs%2Fdw3JzisStSM1Z6G6AQ1d453WmLaFqaNwht9VIUfLZmMV5kdFdIJlRgfixlzaXiilL%2B2QiEkB2LS9acj9qAiIyNqHdj1f0nANldtv7SxDs7%2BuQD0L4sEEs%2FWOiq8jfIJoHDDfiozKBjqkAWVJVJ27K219bBLSmEFXPF9O0jESw1WGh5Qaqjoo0Cdt3%2BZTkylZgvlVY5LsvvicUFGmBFgNwdYVeptec1vWg%2BblCP8b4j0tmkwEd8XP7vzPNTgsmlnCJ1u087sOm73Xidv%2Bpb2qy5K47U29teVgD1pfN6xioIf6ga6VZXi92zl%2F2kEylUEkeoi6GYUN4hxsilJuBUC62tuRqjszeermA11SSPgt&X-Amz-Signature=0b8032777be26fe26098daf54144d1f4e3dd45ac2afdd8df1e3b4fa84bc612b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGXGDSIZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYpOWvgHPiEN3YBMIpWWoW7%2F%2FGMgEPPFAwaDahjsTPhQIhAKdXjFHxxcgkrQ095ju9OkCiewgyQcjV0os3SVasnlXGKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvc%2BPhU6mhi8%2BiE98q3ANEH9UlgFsRwQBYWupuOJMQxYdeqVVP3ASkqyAOs1hp9Ckb0dskZjSFGpTD8lU%2BEopOeVugqNT5dYU%2BoulapbQDe0rhxQ5HlrV6vOW%2FnR%2BekvNi6LCJTPWjG%2FVpPCJ2dz6gDBhLkZMBVXsX7VuRCq2FFoJYeXfLut%2FlFWi8MTlUlDVeXdE%2Fnxg58O5Q8NTCU1fZnZ9FxfFszJQyUvu0rAZh%2Fn5lUTOMiedd%2FvL4BAadmC%2Fgt81YG6emWZZ8%2FYr5YymMCDjHn2gfgBV0cSS%2FlYi4A2Anjx5HpGI9d5etxRFBEpoa5UxDsXX02Q571MHqvXqcQ1kQuXDC0wtyffT6%2FlwnpRPwRnLhhPWH4d097uW8A3TpvZzZi%2F%2FPXLNoXxWFsgPGN1unM%2B58IN76FbT2bpk20Fv8PMkX0wYxnSL27PSg1cTri4hQ8%2FbEc24wOuZNwp7bhompgUKSxylrYAeAPZ2Rg%2BO8fDC9qParpQMWXucZr4pD8LoMqA4ijLs%2Fdw3JzisStSM1Z6G6AQ1d453WmLaFqaNwht9VIUfLZmMV5kdFdIJlRgfixlzaXiilL%2B2QiEkB2LS9acj9qAiIyNqHdj1f0nANldtv7SxDs7%2BuQD0L4sEEs%2FWOiq8jfIJoHDDfiozKBjqkAWVJVJ27K219bBLSmEFXPF9O0jESw1WGh5Qaqjoo0Cdt3%2BZTkylZgvlVY5LsvvicUFGmBFgNwdYVeptec1vWg%2BblCP8b4j0tmkwEd8XP7vzPNTgsmlnCJ1u087sOm73Xidv%2Bpb2qy5K47U29teVgD1pfN6xioIf6ga6VZXi92zl%2F2kEylUEkeoi6GYUN4hxsilJuBUC62tuRqjszeermA11SSPgt&X-Amz-Signature=0b58aae0417d78d2ce4d6e6569d6a220f0bdd792591fed6f297189cb13dbd271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
