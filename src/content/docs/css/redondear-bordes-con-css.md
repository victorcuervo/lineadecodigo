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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFVSEI3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8qI%2FH5XD5cipWYiJ9WCvkunbX12lFtHm8GIhxDnmFqAiAztwhVlIiQX4qxMM30kJPIw6G0q6e%2B5qBOGJVJ%2FjJ3aiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA1ELXtUANyh5Q4xKtwDONd%2FVg21k01ej%2FdvhRyHe%2FJ%2B6Oq1FV47BYdi69Jax%2FpZ2SvKN4Eo%2BARb4PdOo6L%2BVki393IhZVGKfasew6QDFCnzXyW90tfLNIrXw4bzugluR3tBQEztGT00X%2FoFJMEIkoHU1kCl0TyzjUUt9Ll3IfPJzi3SJG%2FwVsKNrJzMRIW1JyYjdzneb6elSGeLDyVWWQn1pLB8BThm3j8WXO38s09BQ2oyzWnpFgXLiPPMjpzQ5%2B6AdulPaJ9O%2B5dD2fezbwT3esmZ0xzaa5hfrlEyRO0pATxc48w27YBdyKVPuBvClXEvF5PXQRrvgOKj2eBmv0gTQSJ2eXI%2F1g%2FQcqsh2HBvdUdav0W2e%2F0t4Dw7b%2Bi7u7bOigCrHCvwYQm7bCFq9672PGmXwU1Ijd9w2dzlYvsJAASMWNPrAAiTB%2B6OgXMQUgddwxxvwwG2gXusvOcSKhDmquk48S4Am4U8o7YaPZQ7amb5fDs9u0uRSKABOft9uRvuwloOhWo5Lb8HOeCMy0KIW6lCMgTyBhdiDmlGRFYu53zPgyMlCpNOvY9jf%2FuukPT4DkeqJUnjQjQm%2Flh1Wc2dJvyJ7IAMMYcrWhHFoPvel2ujZNNzcZRM3VTXPp75R5Siyj7JbFEtWmUwmpnVyQY6pgFDrvrYiY3EC2cXpMRU7ZxJN%2BPrs9hWlLHoMAhyJ%2F3D5vRiAsIaNWJYaZ5Bq4zOWw%2FggLo0TaHA0nAHo4Vf065O5eHTB7bGh3AJL45PApyafI3%2Fr1QkeBEDUsFU82UpIOSqWRuO0sCiuBR%2BFz%2B6qR8PwdKgeTGFgFxOUOFU7vW7gfj1YdGcWlWfnR6xn5NvKjGNQXPtuOivcCI%2B9yySiRFO%2FzRA8bZE&X-Amz-Signature=9c9e2d93ef9e450288ccf6575996b97efecf2b6d3b0b927b337798999d299e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFVSEI3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8qI%2FH5XD5cipWYiJ9WCvkunbX12lFtHm8GIhxDnmFqAiAztwhVlIiQX4qxMM30kJPIw6G0q6e%2B5qBOGJVJ%2FjJ3aiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA1ELXtUANyh5Q4xKtwDONd%2FVg21k01ej%2FdvhRyHe%2FJ%2B6Oq1FV47BYdi69Jax%2FpZ2SvKN4Eo%2BARb4PdOo6L%2BVki393IhZVGKfasew6QDFCnzXyW90tfLNIrXw4bzugluR3tBQEztGT00X%2FoFJMEIkoHU1kCl0TyzjUUt9Ll3IfPJzi3SJG%2FwVsKNrJzMRIW1JyYjdzneb6elSGeLDyVWWQn1pLB8BThm3j8WXO38s09BQ2oyzWnpFgXLiPPMjpzQ5%2B6AdulPaJ9O%2B5dD2fezbwT3esmZ0xzaa5hfrlEyRO0pATxc48w27YBdyKVPuBvClXEvF5PXQRrvgOKj2eBmv0gTQSJ2eXI%2F1g%2FQcqsh2HBvdUdav0W2e%2F0t4Dw7b%2Bi7u7bOigCrHCvwYQm7bCFq9672PGmXwU1Ijd9w2dzlYvsJAASMWNPrAAiTB%2B6OgXMQUgddwxxvwwG2gXusvOcSKhDmquk48S4Am4U8o7YaPZQ7amb5fDs9u0uRSKABOft9uRvuwloOhWo5Lb8HOeCMy0KIW6lCMgTyBhdiDmlGRFYu53zPgyMlCpNOvY9jf%2FuukPT4DkeqJUnjQjQm%2Flh1Wc2dJvyJ7IAMMYcrWhHFoPvel2ujZNNzcZRM3VTXPp75R5Siyj7JbFEtWmUwmpnVyQY6pgFDrvrYiY3EC2cXpMRU7ZxJN%2BPrs9hWlLHoMAhyJ%2F3D5vRiAsIaNWJYaZ5Bq4zOWw%2FggLo0TaHA0nAHo4Vf065O5eHTB7bGh3AJL45PApyafI3%2Fr1QkeBEDUsFU82UpIOSqWRuO0sCiuBR%2BFz%2B6qR8PwdKgeTGFgFxOUOFU7vW7gfj1YdGcWlWfnR6xn5NvKjGNQXPtuOivcCI%2B9yySiRFO%2FzRA8bZE&X-Amz-Signature=12b12f288d839d5019d89317053a9e8a0250658dae4b171aa9c1832060796c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
