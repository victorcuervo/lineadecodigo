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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCG3TKW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYGC6PMlS%2BhtCYDktdhHkK4NMZDQBcO35elCIFARohAiBEnz7v000pf04kRJ0qErZgN%2BhXjWjDYvM1fX7U8T2JtSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMDaKMZ78c9NHdFZJeKtwDS%2Fa4KNtnMm3i6MQ7bsYkZ0CAE7OgSRQaXSCAAp28p4hkkT0B88qYwhvnbuU1d1Afo1neizAChs2jmLegxDTZn%2B0JoFsZbfmVZ5OOM%2FjZXtzMtEvA96gWeocZlU7SV9sF%2Bd24qUDKuuSqGdT3Qq1BWbypkGnD%2BPR09kT47lM8XGWuMmWLp966QeFz8pf5R6sQH9LDd27Q%2FdleVBC3aH21nsAqyT5rzIAC2XoeS0QkzJjPmo7cRBkWPohbfF%2BhQOocs6DS5bZpmM8fxiROApuMDAmqpAOwFtggLadZLGGhdOLntOIWfca8SXimsh6EbRxgWHFDkDOS8b5ZD5Fj3HazowfWz2BLKVPxX88RrNK9aYjxM6aHyRih6%2F%2F%2Bwi9hYV%2BTuf4vQpbY0Tv%2B6DK%2F9NpvTjQckdV2h6WbIXlBdlIN%2BrOgLcDFWwySCk%2BfGieihOPWMYSQT4tW8Spdd7RsOok0BvWKwy8f6vProdriErdp%2FOIhzBCpPTFhcEoq0XZkv0QZVWrWuigtBglIO9yJM0SM1ffgF8Np4GFA795lVUVwUgxepVYwEV2YTfUcCOxmkNmtXgCt9PkJY7vxfrViWNvFG8mlyklzQUyl5kHYHXJMJGbDjKi2EzA4DPFuQpMwkevLyQY6pgFl3iIlj2T%2B0kc09d%2BciPsGcbFUq7Rz4O%2BrBzl3BuukDNUhHIaTF%2FSmH%2BZxZvlxJqmkdPs9JGOq4dWAKuZFtckXhuUv7VsVNH3F%2ByhRb0ONbwF1TzLt4GzTlOsBYeU3ZCWogaEn8O4tVFoLg94TI2HtAvN3SOpQkmLqB5FKxZHGkqGL5xIwxUHc%2FB6g8zN1K%2FaQSeuC2JTCHbZJzqxP5GDqk%2BUfYVry&X-Amz-Signature=378a614ea49cb811eb11275a7d2a7ce2c69aed524e96bad03757006f7dc0c72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SCG3TKW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGOYGC6PMlS%2BhtCYDktdhHkK4NMZDQBcO35elCIFARohAiBEnz7v000pf04kRJ0qErZgN%2BhXjWjDYvM1fX7U8T2JtSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMDaKMZ78c9NHdFZJeKtwDS%2Fa4KNtnMm3i6MQ7bsYkZ0CAE7OgSRQaXSCAAp28p4hkkT0B88qYwhvnbuU1d1Afo1neizAChs2jmLegxDTZn%2B0JoFsZbfmVZ5OOM%2FjZXtzMtEvA96gWeocZlU7SV9sF%2Bd24qUDKuuSqGdT3Qq1BWbypkGnD%2BPR09kT47lM8XGWuMmWLp966QeFz8pf5R6sQH9LDd27Q%2FdleVBC3aH21nsAqyT5rzIAC2XoeS0QkzJjPmo7cRBkWPohbfF%2BhQOocs6DS5bZpmM8fxiROApuMDAmqpAOwFtggLadZLGGhdOLntOIWfca8SXimsh6EbRxgWHFDkDOS8b5ZD5Fj3HazowfWz2BLKVPxX88RrNK9aYjxM6aHyRih6%2F%2F%2Bwi9hYV%2BTuf4vQpbY0Tv%2B6DK%2F9NpvTjQckdV2h6WbIXlBdlIN%2BrOgLcDFWwySCk%2BfGieihOPWMYSQT4tW8Spdd7RsOok0BvWKwy8f6vProdriErdp%2FOIhzBCpPTFhcEoq0XZkv0QZVWrWuigtBglIO9yJM0SM1ffgF8Np4GFA795lVUVwUgxepVYwEV2YTfUcCOxmkNmtXgCt9PkJY7vxfrViWNvFG8mlyklzQUyl5kHYHXJMJGbDjKi2EzA4DPFuQpMwkevLyQY6pgFl3iIlj2T%2B0kc09d%2BciPsGcbFUq7Rz4O%2BrBzl3BuukDNUhHIaTF%2FSmH%2BZxZvlxJqmkdPs9JGOq4dWAKuZFtckXhuUv7VsVNH3F%2ByhRb0ONbwF1TzLt4GzTlOsBYeU3ZCWogaEn8O4tVFoLg94TI2HtAvN3SOpQkmLqB5FKxZHGkqGL5xIwxUHc%2FB6g8zN1K%2FaQSeuC2JTCHbZJzqxP5GDqk%2BUfYVry&X-Amz-Signature=9ae503460045c3a25b5e1acf4ed6da4aaebe278ecddbbca71ad137da09b9b3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
