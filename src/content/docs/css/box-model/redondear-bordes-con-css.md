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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOILTPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiah%2FH5QwEq2wYxKrqUfpcs9kubQCrEqBBnlzTeurjygIhAKB2%2B0duRfJ0xriqDC6Dg6qbPGe73t%2BONeAm0R7ACLtQKv8DCH0QABoMNjM3NDIzMTgzODA1IgyZO2U49iErHZPLkQkq3AMVnE8%2BZ3gf2nxAaYAFmw1%2Bx9jZpiWLcK2q0nX56j7MkE7wtar1yw59k69NwCo0d2jRiw5F%2FSNtV92KiKwwLgB5vkviMJwhgjgOAj4dCRMybLqtBBFjUkR92idWKG2HNcs7KEGe0btVgl7bTtBVI1pYUlstARO7ZRAVCJ19Zo%2Bl0enp1xHkRndaiQD390h2sWLbcqspCuPp85zFLk%2BPsh0rqshoVKiDW3P6521TZgnaXv0%2F%2BoTSdZ%2BxHcXz1zXpXOMbU0I%2FQ%2F22sbu7s4BqFr2aF9ASDyQIFKNX4R%2FbJwlgvQo%2Fhl%2F8UVgFJImi3Lc6f%2BZQGJFtjQMTKOO6I6i%2BIR%2FHhZqxCJ4ccotHiMhNJHmnRAFvTdAmp4lQDLbwSbh3POuxxVPo6ItAhEgfj1wGv9BK%2F5qwCz7H4YoxHV2fi%2BT%2BS30XGhkbufW1PpiA6HFkVWrUbedRbktQaNi9SCwNxVf7EW0txW%2BW2eYO%2BPPXOMyq23x%2FI%2Fn7pmtFctWnbUa4u12YncEZwU297k5dKSJV%2FL8rQcXbqrxbwmB5MenDgavVKRnXBkzssmGMGw9xEJgULnzmyNGHJHghMk6YZ%2BlaI8FwGSHu7aHJQ9lpHoxZsY%2BxfOyt5Lu5JLvgcCijyzCaq4rKBjqkAUW9Pa3FuhOn8SZN%2B1%2Bhp01cOpW1rnRy1sfFQH0Mc3%2FH4eiq77g0RqjPK5PBL1E6jhVKeeSYTP%2B58OBmeE0wZq7419fSY%2FTCVSSvEM4F4n0SsYleL7OUN1an5erjQNC9RzG46j3y1u%2BrvrGd%2Bh9touQfP9NGqBgGza5Ls9NAUVgXWuKy%2Bo5DeG2TOHwvUqSCDvOmIyEwRkY8aEecoDYWlPsO%2FhfC&X-Amz-Signature=b758cda7d99a81b69b32db9602dcfd704dc214c0038abf8c0e92f6e3a13c45ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOILTPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiah%2FH5QwEq2wYxKrqUfpcs9kubQCrEqBBnlzTeurjygIhAKB2%2B0duRfJ0xriqDC6Dg6qbPGe73t%2BONeAm0R7ACLtQKv8DCH0QABoMNjM3NDIzMTgzODA1IgyZO2U49iErHZPLkQkq3AMVnE8%2BZ3gf2nxAaYAFmw1%2Bx9jZpiWLcK2q0nX56j7MkE7wtar1yw59k69NwCo0d2jRiw5F%2FSNtV92KiKwwLgB5vkviMJwhgjgOAj4dCRMybLqtBBFjUkR92idWKG2HNcs7KEGe0btVgl7bTtBVI1pYUlstARO7ZRAVCJ19Zo%2Bl0enp1xHkRndaiQD390h2sWLbcqspCuPp85zFLk%2BPsh0rqshoVKiDW3P6521TZgnaXv0%2F%2BoTSdZ%2BxHcXz1zXpXOMbU0I%2FQ%2F22sbu7s4BqFr2aF9ASDyQIFKNX4R%2FbJwlgvQo%2Fhl%2F8UVgFJImi3Lc6f%2BZQGJFtjQMTKOO6I6i%2BIR%2FHhZqxCJ4ccotHiMhNJHmnRAFvTdAmp4lQDLbwSbh3POuxxVPo6ItAhEgfj1wGv9BK%2F5qwCz7H4YoxHV2fi%2BT%2BS30XGhkbufW1PpiA6HFkVWrUbedRbktQaNi9SCwNxVf7EW0txW%2BW2eYO%2BPPXOMyq23x%2FI%2Fn7pmtFctWnbUa4u12YncEZwU297k5dKSJV%2FL8rQcXbqrxbwmB5MenDgavVKRnXBkzssmGMGw9xEJgULnzmyNGHJHghMk6YZ%2BlaI8FwGSHu7aHJQ9lpHoxZsY%2BxfOyt5Lu5JLvgcCijyzCaq4rKBjqkAUW9Pa3FuhOn8SZN%2B1%2Bhp01cOpW1rnRy1sfFQH0Mc3%2FH4eiq77g0RqjPK5PBL1E6jhVKeeSYTP%2B58OBmeE0wZq7419fSY%2FTCVSSvEM4F4n0SsYleL7OUN1an5erjQNC9RzG46j3y1u%2BrvrGd%2Bh9touQfP9NGqBgGza5Ls9NAUVgXWuKy%2Bo5DeG2TOHwvUqSCDvOmIyEwRkY8aEecoDYWlPsO%2FhfC&X-Amz-Signature=1e242cd6538088d4d966018922ab052bae0603b653eb3e8a6096b3fd20ddb5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
