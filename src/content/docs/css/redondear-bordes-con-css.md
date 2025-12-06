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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7LFOAU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmQXCgRQ4B54v2dFs22QsGi%2FgfsI15eS7cHzsT7gligIhAJBWEiqX5Ti14O4qm8xQlXxhb%2FXFEESObMfGzehT3yrZKv8DCGwQABoMNjM3NDIzMTgzODA1Igx1UczgEkH92MaIKuEq3APeakGs60rhIIabbqyDv3HWuy8st2xw%2BfFgpzMFCIeW8ZtCU4677vTQmJYpAIdhuthDABu%2BnBgKku6hS6DLSCMGyIRwO8djAW2CnbfJ33gRmYnojFqRMTLX04Ird%2B9g5ZM2ukd86cWJDsIJo7SiJ64FdZZ4ZLmr%2FEc4r%2BPpg%2FtFQ%2B082lvloQO8eN56NBSYN1%2BceC%2BvdEWbw9o7Za4Jej3CyAqaIBbpGzcCmryLvhu7d0Vi%2FSJuPS61pKhRuSY855ylf4IwQ13pD1NQUDAgj9CfShtkZM%2BHOnlzJeV%2Fae5bcDHlYwnjMlXDOG%2FDucPFRu67xEvnRFlfAnNF3bF3k%2BlDzLo1ohMePz71vHv57HEOwd1j39%2FgT%2F0FYT9jEpqtpEBQlIaOygrYIG922BANldlX5rk9cHf5nyJMYiqQSre1N4LfkKmi40MjE%2BDfdkaxWtBjYFhxXTfhjc7eqwIvM8EuF3ud31id5vl%2F8nTD0adsKIfAxUDKWA0SYhLyAcXxtJkBnuQZHXOMtny6dU0xYM6XpQNQ98zTJsHpEKFrgHOI0oSDBoAlwxc8aH6D9JkshxK8%2B6T2fq3OHzY68LLImKxpr%2Bh6M0XwcIvILfFy9tl%2F4F6ycqFxbeoHM1Te2DDMw87JBjqkAeKioE3j%2BPNtw5W%2BDZx7cARiNXQ3Gb%2FX3Zh33LTG4jkgfocIKBCSHE1ki7YwT5xHOJGi0o3FiETQz6z9ax8t6WW%2Fj6vh0k0I7MTHdFCxO0D%2Fdp53fYKsjPtsZMaVoKzZ%2FyFhq2r6P2xlIrASxkgUO9heqVsU814wX8cpeMJnJaLt%2FVVS5wXP8iAfeb2JOsgpbyE1zguiMFriPB3pShwrbf2ps0Ii&X-Amz-Signature=f6a0167dd2c0f4226fffbc4620243cf3315a01d4ff204b73d7578b6d53f06684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7LFOAU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmQXCgRQ4B54v2dFs22QsGi%2FgfsI15eS7cHzsT7gligIhAJBWEiqX5Ti14O4qm8xQlXxhb%2FXFEESObMfGzehT3yrZKv8DCGwQABoMNjM3NDIzMTgzODA1Igx1UczgEkH92MaIKuEq3APeakGs60rhIIabbqyDv3HWuy8st2xw%2BfFgpzMFCIeW8ZtCU4677vTQmJYpAIdhuthDABu%2BnBgKku6hS6DLSCMGyIRwO8djAW2CnbfJ33gRmYnojFqRMTLX04Ird%2B9g5ZM2ukd86cWJDsIJo7SiJ64FdZZ4ZLmr%2FEc4r%2BPpg%2FtFQ%2B082lvloQO8eN56NBSYN1%2BceC%2BvdEWbw9o7Za4Jej3CyAqaIBbpGzcCmryLvhu7d0Vi%2FSJuPS61pKhRuSY855ylf4IwQ13pD1NQUDAgj9CfShtkZM%2BHOnlzJeV%2Fae5bcDHlYwnjMlXDOG%2FDucPFRu67xEvnRFlfAnNF3bF3k%2BlDzLo1ohMePz71vHv57HEOwd1j39%2FgT%2F0FYT9jEpqtpEBQlIaOygrYIG922BANldlX5rk9cHf5nyJMYiqQSre1N4LfkKmi40MjE%2BDfdkaxWtBjYFhxXTfhjc7eqwIvM8EuF3ud31id5vl%2F8nTD0adsKIfAxUDKWA0SYhLyAcXxtJkBnuQZHXOMtny6dU0xYM6XpQNQ98zTJsHpEKFrgHOI0oSDBoAlwxc8aH6D9JkshxK8%2B6T2fq3OHzY68LLImKxpr%2Bh6M0XwcIvILfFy9tl%2F4F6ycqFxbeoHM1Te2DDMw87JBjqkAeKioE3j%2BPNtw5W%2BDZx7cARiNXQ3Gb%2FX3Zh33LTG4jkgfocIKBCSHE1ki7YwT5xHOJGi0o3FiETQz6z9ax8t6WW%2Fj6vh0k0I7MTHdFCxO0D%2Fdp53fYKsjPtsZMaVoKzZ%2FyFhq2r6P2xlIrASxkgUO9heqVsU814wX8cpeMJnJaLt%2FVVS5wXP8iAfeb2JOsgpbyE1zguiMFriPB3pShwrbf2ps0Ii&X-Amz-Signature=b3fee20797a1c1586e35948793cd6ba6910cfc67322a702aee72b0efb2a03ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
