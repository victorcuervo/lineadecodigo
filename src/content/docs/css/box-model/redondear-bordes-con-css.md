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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDO66SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUF6eYo%2FJCkfYe4nS2YplfWqY3nYgHaBVQigkcMWyH9AiEAs52YzAu%2F5b5vNsFPC91VJ%2BkWH3e0Xv3u2uRetWP1nG4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLChN8sDCACObtdxuSrcAw26OczTCkRaXbZoh6HwL52R5aUfKkG42CzHsttKWzwBO5UKJ9ZjKYOJ0Qt64nLTdbFXLhmosyIEk1NyrzXmXUxLAwW%2F4ipbFZQPUrC8XStLJnKP7zknnfOjYBdeUY8dLiVrZFBNb3ECvp%2BJlqMO7%2F9OyrCR4QcZDKGqB7cWYIQVxCfHn69AO4GeReE9gD4wr4c0%2FBIIEhPJG%2Bu2%2BYRhH9HtIugQnd0JbXq97SzyHWSVon7irivv%2FPY%2FrBLyq9TCoffJcAgy5vbEsnYX3%2FwjHCsJN4ay9QB2vLrfb%2F2d7L6%2Bv9bzSEVv0hATo5RhcETraH%2FGmuvhtXEdQKC4xxZAmg0H9EV2uVZRFOqK%2FQ5k%2Fb8ks7BM7DsV7vsyTfL2O8jOH9eX9zjCE9oFv4%2BMx0fZQhp7WPoaOBzyBcRshtq2hADYZcA72tg6g3yXh7UvkH4sLYqjSb4jI00wfMfftx5f8P%2B3Qf9GfF2EUBzpVGkXhPeEO1fqM3L4%2F9fIIqnLDIMO8m6bkN%2BLa9mTgwRHp9MgrImPAIl8%2B%2FbwWcq2zLvLG9ieU79lcPLVvt9WjGUNlgACegYlCcD9%2BPoMPXqy9bDk8A2y45qIEgkCnBfq60%2B730y1GLZwSV1h6FeUtSHMMOfhisoGOqUBS9YQQOk9I7wr%2F9pXU%2Fp%2B1bR6KTBe1CaO1ThNd5w3ERzpDAjDXysDduPZy0z8nXOIjVuVTwJn7%2Fqg3zosuuNc4Z%2FTwrVIsMIKpjV0yuVL6%2BNVQ8CZkaGLhC6BwVlUWAWU9QhspTp3ug4Et3KLyT8PDjsCXLtMFTJ8h%2B00O3B18GPiS46PlzqpPJfWhMw8BLKOlfN3zEhaDCHEhJvOxgI3jjhJmGkf&X-Amz-Signature=5564211f9f39ce8b7f641c2043e68936e644171115e05dc5e37ae3845eb35cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SDO66SP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUF6eYo%2FJCkfYe4nS2YplfWqY3nYgHaBVQigkcMWyH9AiEAs52YzAu%2F5b5vNsFPC91VJ%2BkWH3e0Xv3u2uRetWP1nG4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLChN8sDCACObtdxuSrcAw26OczTCkRaXbZoh6HwL52R5aUfKkG42CzHsttKWzwBO5UKJ9ZjKYOJ0Qt64nLTdbFXLhmosyIEk1NyrzXmXUxLAwW%2F4ipbFZQPUrC8XStLJnKP7zknnfOjYBdeUY8dLiVrZFBNb3ECvp%2BJlqMO7%2F9OyrCR4QcZDKGqB7cWYIQVxCfHn69AO4GeReE9gD4wr4c0%2FBIIEhPJG%2Bu2%2BYRhH9HtIugQnd0JbXq97SzyHWSVon7irivv%2FPY%2FrBLyq9TCoffJcAgy5vbEsnYX3%2FwjHCsJN4ay9QB2vLrfb%2F2d7L6%2Bv9bzSEVv0hATo5RhcETraH%2FGmuvhtXEdQKC4xxZAmg0H9EV2uVZRFOqK%2FQ5k%2Fb8ks7BM7DsV7vsyTfL2O8jOH9eX9zjCE9oFv4%2BMx0fZQhp7WPoaOBzyBcRshtq2hADYZcA72tg6g3yXh7UvkH4sLYqjSb4jI00wfMfftx5f8P%2B3Qf9GfF2EUBzpVGkXhPeEO1fqM3L4%2F9fIIqnLDIMO8m6bkN%2BLa9mTgwRHp9MgrImPAIl8%2B%2FbwWcq2zLvLG9ieU79lcPLVvt9WjGUNlgACegYlCcD9%2BPoMPXqy9bDk8A2y45qIEgkCnBfq60%2B730y1GLZwSV1h6FeUtSHMMOfhisoGOqUBS9YQQOk9I7wr%2F9pXU%2Fp%2B1bR6KTBe1CaO1ThNd5w3ERzpDAjDXysDduPZy0z8nXOIjVuVTwJn7%2Fqg3zosuuNc4Z%2FTwrVIsMIKpjV0yuVL6%2BNVQ8CZkaGLhC6BwVlUWAWU9QhspTp3ug4Et3KLyT8PDjsCXLtMFTJ8h%2B00O3B18GPiS46PlzqpPJfWhMw8BLKOlfN3zEhaDCHEhJvOxgI3jjhJmGkf&X-Amz-Signature=998d89f26289e24184783fc844a33de504449094771af603c53be771c3fa6e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
