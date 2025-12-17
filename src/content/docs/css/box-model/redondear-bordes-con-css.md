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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVRPH2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfTfFzlfxdIdnJYpZiQ%2Bv8ydr%2B%2F9vAFag%2Bu7CvCrlZqAiBSk6Z304pJ2W%2FERa9YnRPz5fqGrZyQO%2B0iCLjBx3U1JiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSA8LDrAWWFj6i4HEKtwDWoJ5Fa%2B1WcNvZAyGXMjrQyCDqJ2tzAnwbSEgYHzc8DXw6iaUc5dIFesk9fVx6wXEJkq18Z%2BA9d7kofWeDUceV9u4nrikVbruK%2FXLMoTLF8PnxsL2ye0ZhuiHiHHZNea%2Fx6Ue1j4%2Fy4VjoFBhsIEVH8AluzBmEioZTcPmrVOQPX33MWdMKAZvPcnBvG2wWG9RSCQf9u90lqngxSMR1qT4VN449qKdCFRGWW9H2nkVSSlBCTqeLZDxUY8dd4iZ7evm82qgl%2FN0a5pYSIuEzXklTbNmsrfAKBIDjbgz%2FRO28Kz9qhGIWLvn%2BR1ymMc4v8QsXFP91t%2B%2BP9PhG3Sz5k5TabaOjmLzdqKQjeB28i5%2FGfQn7ElnlYKDIGnYnqamERsXt1cDglYgjNqyZfU1ShT6GQEd8EG%2F2dSW5AzhkkVgEBqxLBd9vIiBkjRrl51NABjKv3wdrqAG7eJYfH1LErAGVezhbM3m%2BAQWOZMOiL7MOti7kcSA4MyIWxAiC8SQvMBrB0ClSQP2lD6gEE2Cjb4QnQ6VilZS6Vjt6OD6hN1G7gOYyvVUyIN29NLzl%2ByrUcYUprzKMJ7Y051aQKJHOvXK%2BR0VK7VQZNlI6zA8ZcPS3oWPbdYMPegy5QJWQIwwrZ%2BLygY6pgGNmKwIa%2B0Xddw8hGq9IL4Tb%2BnZcOzvnLg4Sxn5UHy0QBkUajvokYErvPAjbk2PMBR9vJXPTzTuPBy971AbJ7GeTLMiSEVqDUnEFvFSqmyJeEqMbaRcRzMCdS579IZHrCpXaz%2BnN1v62rbVCO%2BrbM5tPB8BM%2BxlwogZ8CDVTGlsWanXM8sOZ3uSAr8I3maBQlM7hABkZt%2FgBiK1MxrKKyfQEQme3evr&X-Amz-Signature=380457675764519ea828dd56888782cd4fa1ee0dec7dc128a6bda5a43e2cb152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVRPH2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfTfFzlfxdIdnJYpZiQ%2Bv8ydr%2B%2F9vAFag%2Bu7CvCrlZqAiBSk6Z304pJ2W%2FERa9YnRPz5fqGrZyQO%2B0iCLjBx3U1JiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSA8LDrAWWFj6i4HEKtwDWoJ5Fa%2B1WcNvZAyGXMjrQyCDqJ2tzAnwbSEgYHzc8DXw6iaUc5dIFesk9fVx6wXEJkq18Z%2BA9d7kofWeDUceV9u4nrikVbruK%2FXLMoTLF8PnxsL2ye0ZhuiHiHHZNea%2Fx6Ue1j4%2Fy4VjoFBhsIEVH8AluzBmEioZTcPmrVOQPX33MWdMKAZvPcnBvG2wWG9RSCQf9u90lqngxSMR1qT4VN449qKdCFRGWW9H2nkVSSlBCTqeLZDxUY8dd4iZ7evm82qgl%2FN0a5pYSIuEzXklTbNmsrfAKBIDjbgz%2FRO28Kz9qhGIWLvn%2BR1ymMc4v8QsXFP91t%2B%2BP9PhG3Sz5k5TabaOjmLzdqKQjeB28i5%2FGfQn7ElnlYKDIGnYnqamERsXt1cDglYgjNqyZfU1ShT6GQEd8EG%2F2dSW5AzhkkVgEBqxLBd9vIiBkjRrl51NABjKv3wdrqAG7eJYfH1LErAGVezhbM3m%2BAQWOZMOiL7MOti7kcSA4MyIWxAiC8SQvMBrB0ClSQP2lD6gEE2Cjb4QnQ6VilZS6Vjt6OD6hN1G7gOYyvVUyIN29NLzl%2ByrUcYUprzKMJ7Y051aQKJHOvXK%2BR0VK7VQZNlI6zA8ZcPS3oWPbdYMPegy5QJWQIwwrZ%2BLygY6pgGNmKwIa%2B0Xddw8hGq9IL4Tb%2BnZcOzvnLg4Sxn5UHy0QBkUajvokYErvPAjbk2PMBR9vJXPTzTuPBy971AbJ7GeTLMiSEVqDUnEFvFSqmyJeEqMbaRcRzMCdS579IZHrCpXaz%2BnN1v62rbVCO%2BrbM5tPB8BM%2BxlwogZ8CDVTGlsWanXM8sOZ3uSAr8I3maBQlM7hABkZt%2FgBiK1MxrKKyfQEQme3evr&X-Amz-Signature=2842ad483d27dd86256f61b39b06f98ac8b409e8c98193985fa53bfe2b07f3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
