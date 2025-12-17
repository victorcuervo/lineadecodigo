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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFAOQLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ChrBIBPfnRxJ8q%2BhZiOSz1zmubkHNdl1DyXF%2BGGxFAIhAMHwQArNMUzD7FF%2F209GH%2BBVQoo3M4Mfs1WW6jqllAMfKv8DCHgQABoMNjM3NDIzMTgzODA1IgxghLzx8heVd9tHC9gq3ANZ1jFKaoZxHDepM%2FiOIRFJ3JkJFSsetRTLyfrQCZVNI79ErRyyoJQ2JIC6tp%2F58WATnjT0sRqNkI0QIYyTBjB%2Ba7zd5VMA8CuGT01uYC0TFNtvo5RNSbyCoAbAuR5FCK5p7%2Fs%2FwSgcXnJtHv2bWd%2Fag4CKUWqNBbie%2BfWg4ZsI7EQWHGUCNGw8kiGyTR0FFG2puP3i2lDwZJPuERPQ2zb31Hbw22EeqRFUlvv2cEfT6n79HAI1aDuaEoFZchopvL0gioqcn%2B%2F7ooUuBfCCXarkG6FAjJGMotlpfHKZn9wxojGu8EjtTEcyehJLuxXrfhR0bFSv59eqLi2yf9y0IUZpEi9Pf1rxbKIE%2B4c%2F5QC%2FvJ26i05tr%2FSb29vtZUhTduqiARFfydo4CHLI9oG2CMaD7tJyvqaV%2FFQLZ4exl1b571mVVZQR1GmQpHLoOEXGVdBGvSepWquXBobfeLfX4HJ0YUQC267VRXj0w4B0PnkOF5p5K3KhyB4XqI2ITvjkw%2BpMiYpDDIXmpkiBdEb%2B880QK7BX3kKPZRKkv%2FldeDpZn642Ytf%2FB4kKlFhLMMFSOeRpVxp5S%2FQCZg00F%2FGJ2cVtN%2FmEEqKlY%2B1yXJaMLgBIuyru%2BpRNtOuu33wlaTDsnYnKBjqkAfrR6iUS3V944fRFoNGwDEIA%2F%2BQDhcUsWNXpeNrwW5kX4xNKWRkbbY8gDql98zMWGGL2OtDtjjFeu9eSiEMUL9B2gSJgL6kOzMlACvbs5tBQLL7N05%2ByGrnr%2FiRWGlX7jyT0lUvpvnX6Pz%2FI79hkpaXGz5UXyd6tsHeL6ZWuZyb7kBKuvacS0gsHJVIrSsaY%2BWZCz7ZcLTCkHFhC4o2lCepGBgRq&X-Amz-Signature=af1e331629a24279d972592ee0f2dc62000d48dee6c5ccef3c4ae779332df694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFAOQLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ChrBIBPfnRxJ8q%2BhZiOSz1zmubkHNdl1DyXF%2BGGxFAIhAMHwQArNMUzD7FF%2F209GH%2BBVQoo3M4Mfs1WW6jqllAMfKv8DCHgQABoMNjM3NDIzMTgzODA1IgxghLzx8heVd9tHC9gq3ANZ1jFKaoZxHDepM%2FiOIRFJ3JkJFSsetRTLyfrQCZVNI79ErRyyoJQ2JIC6tp%2F58WATnjT0sRqNkI0QIYyTBjB%2Ba7zd5VMA8CuGT01uYC0TFNtvo5RNSbyCoAbAuR5FCK5p7%2Fs%2FwSgcXnJtHv2bWd%2Fag4CKUWqNBbie%2BfWg4ZsI7EQWHGUCNGw8kiGyTR0FFG2puP3i2lDwZJPuERPQ2zb31Hbw22EeqRFUlvv2cEfT6n79HAI1aDuaEoFZchopvL0gioqcn%2B%2F7ooUuBfCCXarkG6FAjJGMotlpfHKZn9wxojGu8EjtTEcyehJLuxXrfhR0bFSv59eqLi2yf9y0IUZpEi9Pf1rxbKIE%2B4c%2F5QC%2FvJ26i05tr%2FSb29vtZUhTduqiARFfydo4CHLI9oG2CMaD7tJyvqaV%2FFQLZ4exl1b571mVVZQR1GmQpHLoOEXGVdBGvSepWquXBobfeLfX4HJ0YUQC267VRXj0w4B0PnkOF5p5K3KhyB4XqI2ITvjkw%2BpMiYpDDIXmpkiBdEb%2B880QK7BX3kKPZRKkv%2FldeDpZn642Ytf%2FB4kKlFhLMMFSOeRpVxp5S%2FQCZg00F%2FGJ2cVtN%2FmEEqKlY%2B1yXJaMLgBIuyru%2BpRNtOuu33wlaTDsnYnKBjqkAfrR6iUS3V944fRFoNGwDEIA%2F%2BQDhcUsWNXpeNrwW5kX4xNKWRkbbY8gDql98zMWGGL2OtDtjjFeu9eSiEMUL9B2gSJgL6kOzMlACvbs5tBQLL7N05%2ByGrnr%2FiRWGlX7jyT0lUvpvnX6Pz%2FI79hkpaXGz5UXyd6tsHeL6ZWuZyb7kBKuvacS0gsHJVIrSsaY%2BWZCz7ZcLTCkHFhC4o2lCepGBgRq&X-Amz-Signature=35b2bf1f9bc8a00988311f5fe0a379857e9259562158aa140413dc7b1d15caac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
