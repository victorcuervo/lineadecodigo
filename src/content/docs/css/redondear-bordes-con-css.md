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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6A2XI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLiiAcCLvUOp7XRubeBv16jozYywnKy8H20d07H2fMPAIhANnff6oZOCNQjlwMQSB%2B%2Be2dDbYpYbO8fwb7X9MzpziYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwCc%2F6MVtGLDZ%2Fxlpgq3AO6NtL%2B9GTmFeXUBh5or%2FRq2hnIj9RPucqaJTpbugu74InOQOcTBcVMotf%2B85VMWqiL6gTBO6bPpBgfv5OyqON7gWCxDAHzpGNBGTsmfaYJNNaj2HiwW1jEwGdMIB3he9vyApYGXUXV%2Bsez%2BfVFsSt%2BZa%2B2chFp9hnyq4ejfphel%2F4Wn5%2FM3aC1AVT8%2FHaHnSzgUEfGN6VWIRsuD7wOcUVFiZeGhgv9GswFqXcmo%2BwFnPhSZo8KfzyrANAo4vmX2rzbJPo%2BwtBmIqrWHycdKeXF%2FzjjDvsR7dCztN9HgMQa%2FH6Bph9bNsPvgO3h5GWhSsPzsYpN58woN20oD6dhsG3r8qgi373oLnW0WEb7HQH3OrLM30N2gPulEvmN6Cjqr7rvmb1ZgCLAKzo03oEEo6%2FNg%2B9sWYvST9zE9jgU10imtVqVKnfKIxJ4jO5J%2FxoXs4w9wd2rsmQyi%2Fx5bgkjioWPvqQnGzM9GJZQsRp2nO758NlazKEWRRVrtPuxVsaBhO6zaPLsgPCgscocPbCMw%2F4TF%2FoBscZw8h8%2Fy0WAeY5bcCOd0tiBmf597Lcz8LPqICIh0V1%2BakwaQDVHhdMn0ifmc0p7xJz%2BgGmulxzmLF2jwXF7UUmfrDpJytkDKDCKjMjJBjqkAQZn1JsUMP8lIqZE1Rss3SR6q4z%2B6EVxiK3zyLyQyfRCmI6oikNllvuZMQ05ICmNlRS1EIF%2FmPYT34m16k%2Ft5hMktR5kz5CvcOwq8%2FwKYHTnra1fnstkEn5eTORk8GlMDB7GyDGR3hmQMfBXL2ZzdpdhWQDRNuXtA4jcsT8LK%2B9aUnNaGBJYdRSPhm9rcktP2ttQ%2F5BpZnb8JWO4XaVQ7WEKRDSm&X-Amz-Signature=e5f5d8011f1582b2b36ad3151a107c8df145c2356e6a20d038656d0b1d0870ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF6A2XI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLiiAcCLvUOp7XRubeBv16jozYywnKy8H20d07H2fMPAIhANnff6oZOCNQjlwMQSB%2B%2Be2dDbYpYbO8fwb7X9MzpziYKv8DCE8QABoMNjM3NDIzMTgzODA1IgwCc%2F6MVtGLDZ%2Fxlpgq3AO6NtL%2B9GTmFeXUBh5or%2FRq2hnIj9RPucqaJTpbugu74InOQOcTBcVMotf%2B85VMWqiL6gTBO6bPpBgfv5OyqON7gWCxDAHzpGNBGTsmfaYJNNaj2HiwW1jEwGdMIB3he9vyApYGXUXV%2Bsez%2BfVFsSt%2BZa%2B2chFp9hnyq4ejfphel%2F4Wn5%2FM3aC1AVT8%2FHaHnSzgUEfGN6VWIRsuD7wOcUVFiZeGhgv9GswFqXcmo%2BwFnPhSZo8KfzyrANAo4vmX2rzbJPo%2BwtBmIqrWHycdKeXF%2FzjjDvsR7dCztN9HgMQa%2FH6Bph9bNsPvgO3h5GWhSsPzsYpN58woN20oD6dhsG3r8qgi373oLnW0WEb7HQH3OrLM30N2gPulEvmN6Cjqr7rvmb1ZgCLAKzo03oEEo6%2FNg%2B9sWYvST9zE9jgU10imtVqVKnfKIxJ4jO5J%2FxoXs4w9wd2rsmQyi%2Fx5bgkjioWPvqQnGzM9GJZQsRp2nO758NlazKEWRRVrtPuxVsaBhO6zaPLsgPCgscocPbCMw%2F4TF%2FoBscZw8h8%2Fy0WAeY5bcCOd0tiBmf597Lcz8LPqICIh0V1%2BakwaQDVHhdMn0ifmc0p7xJz%2BgGmulxzmLF2jwXF7UUmfrDpJytkDKDCKjMjJBjqkAQZn1JsUMP8lIqZE1Rss3SR6q4z%2B6EVxiK3zyLyQyfRCmI6oikNllvuZMQ05ICmNlRS1EIF%2FmPYT34m16k%2Ft5hMktR5kz5CvcOwq8%2FwKYHTnra1fnstkEn5eTORk8GlMDB7GyDGR3hmQMfBXL2ZzdpdhWQDRNuXtA4jcsT8LK%2B9aUnNaGBJYdRSPhm9rcktP2ttQ%2F5BpZnb8JWO4XaVQ7WEKRDSm&X-Amz-Signature=b3aad5b4982ea6cd0c38fa06b444810fe23b5b548d102acb8eeb59973efb4dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
