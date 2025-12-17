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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVWLY3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NlfGGQ4jKmeuDZJlGKjNyJZNZoQhN2PMKmg6gardzQIhAJrvwMtlS5xhUR5of%2F%2BfOnAek%2B3%2BXcX0rYWrghB7UO01Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwA3X497NCqaXPzv%2Bsq3ANcqNh70F8w7RLNQ63XHysaCIIdkuzYLdyiWTzvIiKZ%2Fp659svAlgEZFZRZXw1jfpFlP8HGO8zEVMxi3%2FaN9G5A2OzpljyuoYIB0KIZzKAcF4xkWKrCtEw%2BOKdCVnGVwtgr1UBDEkOfBRWoYB2h8YovdeR8X%2FAEL2eB1DDeIelArDMSPQxJ4mY3kJzVh3Gor5qckyizINX2JEbFcSRqQhtMEm%2F7gUT28HWK6JUAG389%2FEQG5pPDF0%2BPnlaurZjZ4GHfdTQH3x1RztMcW9bTtqDo10erpoO8Xcm2gqG%2BdJrHqI0jg2cNOjUd2FHl6SF6Y9sNtn%2BGcHmvcFx5jOxO5ObEVeihEAhZPQKqheQhUrQJx5WmiTL68y8Fzv0JbmjeXWZXlMLYZWH4XdVXy%2BFxSAfYIU6en9OOt3wymcfpySTt3DXqrRrWyd8QzT3zdmPLEy0AHqb1lL266NN3jRIvDQcsefGy%2FjevxjG5%2FI9mLlqxiMHRldPMmU1CLoqCDq2RDZfkmnRrJH8mNg%2FQUVM5SzMpULPGD4OWdyzVOWnV0E78%2FqXFy%2FWqD2VjS7suOse1S6ofN1ajtfXCPsBsxFpd2OS2HyBhYgWIAi%2FhM%2Buwf4DS3E9nQqhYe%2F1WZ8bW1DDJ4YrKBjqkAd6bRlCPbDLXVGhY79v4%2FYchnk9209gDaPd%2FpfHHNIMX%2BJeXo9fwO1TQuw3CUqTtSflqctZ9g3H%2F3O1TQXzudGrQqZZkJ%2Bsi6gQvycg7BDMlADZnlu2khtrE4XCmlMHjcm7sMolA6mAW7DEAM2rVakYL%2F97%2FMnp5hGjrT8H4lvUxTA9t%2B3O42c3nXzNiHAaEuUMZmjPYR9mRSTQo6%2Fl%2FZhcr0f45&X-Amz-Signature=104393007a674fc9dfd5b9ac238dfdf8e8e15163e60d22d687cf6574c05e5b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVWLY3A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NlfGGQ4jKmeuDZJlGKjNyJZNZoQhN2PMKmg6gardzQIhAJrvwMtlS5xhUR5of%2F%2BfOnAek%2B3%2BXcX0rYWrghB7UO01Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwA3X497NCqaXPzv%2Bsq3ANcqNh70F8w7RLNQ63XHysaCIIdkuzYLdyiWTzvIiKZ%2Fp659svAlgEZFZRZXw1jfpFlP8HGO8zEVMxi3%2FaN9G5A2OzpljyuoYIB0KIZzKAcF4xkWKrCtEw%2BOKdCVnGVwtgr1UBDEkOfBRWoYB2h8YovdeR8X%2FAEL2eB1DDeIelArDMSPQxJ4mY3kJzVh3Gor5qckyizINX2JEbFcSRqQhtMEm%2F7gUT28HWK6JUAG389%2FEQG5pPDF0%2BPnlaurZjZ4GHfdTQH3x1RztMcW9bTtqDo10erpoO8Xcm2gqG%2BdJrHqI0jg2cNOjUd2FHl6SF6Y9sNtn%2BGcHmvcFx5jOxO5ObEVeihEAhZPQKqheQhUrQJx5WmiTL68y8Fzv0JbmjeXWZXlMLYZWH4XdVXy%2BFxSAfYIU6en9OOt3wymcfpySTt3DXqrRrWyd8QzT3zdmPLEy0AHqb1lL266NN3jRIvDQcsefGy%2FjevxjG5%2FI9mLlqxiMHRldPMmU1CLoqCDq2RDZfkmnRrJH8mNg%2FQUVM5SzMpULPGD4OWdyzVOWnV0E78%2FqXFy%2FWqD2VjS7suOse1S6ofN1ajtfXCPsBsxFpd2OS2HyBhYgWIAi%2FhM%2Buwf4DS3E9nQqhYe%2F1WZ8bW1DDJ4YrKBjqkAd6bRlCPbDLXVGhY79v4%2FYchnk9209gDaPd%2FpfHHNIMX%2BJeXo9fwO1TQuw3CUqTtSflqctZ9g3H%2F3O1TQXzudGrQqZZkJ%2Bsi6gQvycg7BDMlADZnlu2khtrE4XCmlMHjcm7sMolA6mAW7DEAM2rVakYL%2F97%2FMnp5hGjrT8H4lvUxTA9t%2B3O42c3nXzNiHAaEuUMZmjPYR9mRSTQo6%2Fl%2FZhcr0f45&X-Amz-Signature=fbbc3368e7bce35f99c3e93d1c69dbe7f3c1f9dcee61d060cd9acf9e18949dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
