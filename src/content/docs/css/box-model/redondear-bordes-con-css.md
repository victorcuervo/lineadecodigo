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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ5NOXN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmsUBD4COHNNXJDiVyF7zjdtdCsOT%2FjVd42GqkgERg2AIhANB%2Bzj%2F4WcQV0WWK0Cb5JAjVBjzzqKk3zJGtuQVdKQKtKv8DCHEQABoMNjM3NDIzMTgzODA1IgxyAPsvEqmTNEhdY1Uq3AOjznfxMzUoYy3aEazLQBCRV%2FYBaZQ3Bh1MNJBVZIN8t3fAXiZFKV7AVmqZqrK%2BMqvLpVKyyN1k0lz8Mm1vYYVytyITQbpqD%2FEAgW79qErrIRFANePKIEvXLnWkUMVVj%2BX%2F%2F7wKE6FunCZdFVzFZoWDFR7j4dMgbmPWnz6hDlo6DdDXvkn4%2BCnL%2BtkLxCbjF9O35bxKeKC%2FWMaro%2BTFh%2FHJfLHgNNyq7zlkJER5dxoZgBKOyCEG%2BItsYzir5Gp7999lDI8ms8uoA35oy3y3fBxjsEE5YiRItWAHf2oS94aaUER2VG6ubpoPQKOKjVh4IkI4vBRxzWKv%2FrXNCyXxDlyXmU6%2BUoWE7Q4XhfWgff9uPcV7WBKODnljeBeaDriCKkb0VKUl15jtTp%2BSvL2%2FrbuWQHU%2BcotpV%2F6nLMx3uCNn66vrAowQ8H54qZtLYutQBoqLEXBjKUOUarEC8a9xlEOaqPuupshRCve5kdQXDhLLu1492ZHG96cfYAcohz4R74KxHDQttHhAOib9zgA6kEK%2BCnB8%2FH0iI0%2Bwvc5GHKWWmHLKgd0FYDjfwpgiEJ9KdK0yBWve24eRuxYody2iJTqlqZ5DlY3bu08PX8nYyz6RPr%2BjcMUhcuj3hBUEejDh3ofKBjqkAZCT8EHpvXII9gctWXoo6x9e%2Bzdtij12r4vG9eUwOjml0ETt1tP8jJviZLkBmebXXb%2FOW7NQxH%2Ffgs0IClOhi2W0ULBFjUbNQUgLun8ra29iYV6HpTTTgcE%2BcnPNzGwyUQoexaJjdH2pBK0pL5t0O3PsYabDEYBfk15RRvj4UKtA9wEAb%2BALF0RLjJNdRUfVIvPHHtxhqU2zB8MCqDLn%2FycIaW7y&X-Amz-Signature=8d8bacac1b125429ca0bf51688543897b5e01f2bc3cb4c66eeafed74271fd8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ5NOXN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmsUBD4COHNNXJDiVyF7zjdtdCsOT%2FjVd42GqkgERg2AIhANB%2Bzj%2F4WcQV0WWK0Cb5JAjVBjzzqKk3zJGtuQVdKQKtKv8DCHEQABoMNjM3NDIzMTgzODA1IgxyAPsvEqmTNEhdY1Uq3AOjznfxMzUoYy3aEazLQBCRV%2FYBaZQ3Bh1MNJBVZIN8t3fAXiZFKV7AVmqZqrK%2BMqvLpVKyyN1k0lz8Mm1vYYVytyITQbpqD%2FEAgW79qErrIRFANePKIEvXLnWkUMVVj%2BX%2F%2F7wKE6FunCZdFVzFZoWDFR7j4dMgbmPWnz6hDlo6DdDXvkn4%2BCnL%2BtkLxCbjF9O35bxKeKC%2FWMaro%2BTFh%2FHJfLHgNNyq7zlkJER5dxoZgBKOyCEG%2BItsYzir5Gp7999lDI8ms8uoA35oy3y3fBxjsEE5YiRItWAHf2oS94aaUER2VG6ubpoPQKOKjVh4IkI4vBRxzWKv%2FrXNCyXxDlyXmU6%2BUoWE7Q4XhfWgff9uPcV7WBKODnljeBeaDriCKkb0VKUl15jtTp%2BSvL2%2FrbuWQHU%2BcotpV%2F6nLMx3uCNn66vrAowQ8H54qZtLYutQBoqLEXBjKUOUarEC8a9xlEOaqPuupshRCve5kdQXDhLLu1492ZHG96cfYAcohz4R74KxHDQttHhAOib9zgA6kEK%2BCnB8%2FH0iI0%2Bwvc5GHKWWmHLKgd0FYDjfwpgiEJ9KdK0yBWve24eRuxYody2iJTqlqZ5DlY3bu08PX8nYyz6RPr%2BjcMUhcuj3hBUEejDh3ofKBjqkAZCT8EHpvXII9gctWXoo6x9e%2Bzdtij12r4vG9eUwOjml0ETt1tP8jJviZLkBmebXXb%2FOW7NQxH%2Ffgs0IClOhi2W0ULBFjUbNQUgLun8ra29iYV6HpTTTgcE%2BcnPNzGwyUQoexaJjdH2pBK0pL5t0O3PsYabDEYBfk15RRvj4UKtA9wEAb%2BALF0RLjJNdRUfVIvPHHtxhqU2zB8MCqDLn%2FycIaW7y&X-Amz-Signature=803d57977d1d5311a5609428f1f79a0a77d751dd9348bb1dde4b0988ae7d4e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
