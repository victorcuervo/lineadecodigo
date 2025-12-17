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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQHBVU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRJDhS55a1Khk7yFu46VqvEU5LmNUnfbqqY4Wcywv27wIhAJ0JTzYNRrgdYDOEJywV1MCmWi15bbm5R2nGtYLm6zfJKv8DCH4QABoMNjM3NDIzMTgzODA1IgwGQyps9r9ta99qYi4q3AP1NJJhV62a8aCsFck3snmab%2B75iTFUv9YtFcdHPY1hg18r5iXwnp2NjXGlq7SwcMjqAJPehCij7uENb5wWD9DBwSve2gvc2JzcH2mDDukZzSMvaoBpmk9yQxC8A9LErS4f3rN%2FmPLPRR1l1vQsrk%2FIWpYmMLAkFZAeDKdLCs8jQDrYwrKTKJWd%2BVYECBjQU5wMFilWJKwqP8OhgJQs3QPgM9NTLT9mTUdxttUuI0Q5DG2u2uJNqu%2FzWw45mWWVqYkmjlCGGKoK8nqHrWJmo%2BJvaBRno8dOdh0dsnPLwIgUPIkfOEWWyhvtNlNbHuuhH3aIWgndHByy6A653LA0RQK7oQIpT8ubo99XCqIQFZ53TK3Upzsoxyl3QcBamA7kc8XZhBqnWURuSwDUCdosWY7sX8sk9Z68VY%2FlzRGXnGDmhJoRzSRX6OYN5sjNQdvOX3DgmOWDTh%2B4Y4wEw%2Fd2680dDNqU1apHehqD7caYEVSjqYEqVQNXkApt39S7FhVPEfGnSK2HjyiNy%2FVmM4KAmi3UZ1x3qsvd0yHJP9H3Zgya%2BvaNQZ00ti1daQsqjjhp0wquAVZbfzOGPadaEJZ3YNoAHjWV1yW5vWr9dVa26RFwkQlP3HbhhCGBd6sNMDD6xYrKBjqkAZOrn3qb8vnd1M%2BO%2FDIhxpzGlrPyCjsNYURy2sX5EA8wiX1ddu99qe%2BX8ldlRiX5wS%2FwV83SCDgneVkeHznLlEz77eLVaFNxr7U9XQnHPaK8l3PJe9pliHH%2BcUqSUlOvmie5Tlvttn3Zj1CKJgSBnX87qQ5mUPZOGyJTKqnPxoHfFcOdPVkbCo7KWhFQJKFOUJetPr9%2Bk8NhNkPs0ZraD0IAaCnn&X-Amz-Signature=b0f9e6f770a1ea632f809d26f7ffd2610a5190c27cd42ba21b87c586e1990752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQHBVU2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRJDhS55a1Khk7yFu46VqvEU5LmNUnfbqqY4Wcywv27wIhAJ0JTzYNRrgdYDOEJywV1MCmWi15bbm5R2nGtYLm6zfJKv8DCH4QABoMNjM3NDIzMTgzODA1IgwGQyps9r9ta99qYi4q3AP1NJJhV62a8aCsFck3snmab%2B75iTFUv9YtFcdHPY1hg18r5iXwnp2NjXGlq7SwcMjqAJPehCij7uENb5wWD9DBwSve2gvc2JzcH2mDDukZzSMvaoBpmk9yQxC8A9LErS4f3rN%2FmPLPRR1l1vQsrk%2FIWpYmMLAkFZAeDKdLCs8jQDrYwrKTKJWd%2BVYECBjQU5wMFilWJKwqP8OhgJQs3QPgM9NTLT9mTUdxttUuI0Q5DG2u2uJNqu%2FzWw45mWWVqYkmjlCGGKoK8nqHrWJmo%2BJvaBRno8dOdh0dsnPLwIgUPIkfOEWWyhvtNlNbHuuhH3aIWgndHByy6A653LA0RQK7oQIpT8ubo99XCqIQFZ53TK3Upzsoxyl3QcBamA7kc8XZhBqnWURuSwDUCdosWY7sX8sk9Z68VY%2FlzRGXnGDmhJoRzSRX6OYN5sjNQdvOX3DgmOWDTh%2B4Y4wEw%2Fd2680dDNqU1apHehqD7caYEVSjqYEqVQNXkApt39S7FhVPEfGnSK2HjyiNy%2FVmM4KAmi3UZ1x3qsvd0yHJP9H3Zgya%2BvaNQZ00ti1daQsqjjhp0wquAVZbfzOGPadaEJZ3YNoAHjWV1yW5vWr9dVa26RFwkQlP3HbhhCGBd6sNMDD6xYrKBjqkAZOrn3qb8vnd1M%2BO%2FDIhxpzGlrPyCjsNYURy2sX5EA8wiX1ddu99qe%2BX8ldlRiX5wS%2FwV83SCDgneVkeHznLlEz77eLVaFNxr7U9XQnHPaK8l3PJe9pliHH%2BcUqSUlOvmie5Tlvttn3Zj1CKJgSBnX87qQ5mUPZOGyJTKqnPxoHfFcOdPVkbCo7KWhFQJKFOUJetPr9%2Bk8NhNkPs0ZraD0IAaCnn&X-Amz-Signature=8957e0bc517dc1b4e3f8f48e726b376b855131905bd109ef5d3bf90e34339168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
