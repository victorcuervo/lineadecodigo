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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE76TAZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUx7SArjhCf6S4Bvlqxrl4XLaWf3%2BeNUJ0Tg2dEENECQIhAMQYY6BkkVpcyQvRw1Eu2OsRgRzxuuXsXC5LHaMhfPaZKv8DCHcQABoMNjM3NDIzMTgzODA1Igxe3XzKTgyUcTlPAu4q3APf8P92bkqEpti9O8q3fjQ5CY6vHppC6sP6CP17jVwxUjB8H%2BWHW89I97SB5w1uJQhwdvPvas%2Bv%2Bi2OYbJl7ognQw8yykuZo7%2Fsjkebh9uSgXu7fHsR9OLSa4fjc2FCoHzBgOt%2BiydmtUtN0slUMBo2yGlyqrbzJVIwGa2CjyHmR7TvKLwECsv1iLYYFCOKAN6T2El7w3LDbN0OzTpBpxX8JaCRc4%2FkPAPquTUON2sIRSqDgROs%2BN0ENfUFKw3AUqjSYyfZe55L3bzAtjnEu5XU2nahzQFoQed2N2%2BM%2BiSGeotmxFinrGnNpMQKWCiwwjlIcoM0RkM4Jamz6T3z0u9dAK7D6oreTTIU08KXKqgAOpAVlFqjiDQxkYsfWWe%2FP4ZIgxzwvSheRndGlJYEq3T%2FSjrlfrrK8M4rEdtxm30TVNtUHge2IG8DZrAGY1jhjfWUty9hv5ghD3tmWwFV8liCWKxNw%2BPoYI6FD%2F7h5%2BeboTxVdbhlX1N8utVDJ%2FY6F3tpiBIwO4WZYRTbXreChrqcJzlgO1dKNnkG4gnEYblmuD%2BhWCAvN2jM6qqrhVa%2FjFPJszTbq5lV6FdP16W6pYmqI4rjhRr72Eu0%2BPb2%2Fo5S9zvgoKoIH1NDicUqjDD0gonKBjqkAZ44Z6y66dF8plLE0JdPp%2FZqPNKIRJRyDBS9SL6Tjtk4XMOh79I3GkEeTxNAtoI8aEIjSP8riJRDhympRpAyT9YntqnA3364E84dr%2Bs4tgVxKeUWnJwGDatvsQVA0tHjUVekwPGbxhwcQlusJm3Ef04UQ1zBHu4T3fruMVQeRxqn7dXf1hmx5h7c%2B3075CzsV6VhJDiycAZcEtm6%2FkQUHl2ayeQi&X-Amz-Signature=41a8aacf7d85c73a9e22c0b5daa912d4fde3db2bef8f12524c595c79e0d1254a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE76TAZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUx7SArjhCf6S4Bvlqxrl4XLaWf3%2BeNUJ0Tg2dEENECQIhAMQYY6BkkVpcyQvRw1Eu2OsRgRzxuuXsXC5LHaMhfPaZKv8DCHcQABoMNjM3NDIzMTgzODA1Igxe3XzKTgyUcTlPAu4q3APf8P92bkqEpti9O8q3fjQ5CY6vHppC6sP6CP17jVwxUjB8H%2BWHW89I97SB5w1uJQhwdvPvas%2Bv%2Bi2OYbJl7ognQw8yykuZo7%2Fsjkebh9uSgXu7fHsR9OLSa4fjc2FCoHzBgOt%2BiydmtUtN0slUMBo2yGlyqrbzJVIwGa2CjyHmR7TvKLwECsv1iLYYFCOKAN6T2El7w3LDbN0OzTpBpxX8JaCRc4%2FkPAPquTUON2sIRSqDgROs%2BN0ENfUFKw3AUqjSYyfZe55L3bzAtjnEu5XU2nahzQFoQed2N2%2BM%2BiSGeotmxFinrGnNpMQKWCiwwjlIcoM0RkM4Jamz6T3z0u9dAK7D6oreTTIU08KXKqgAOpAVlFqjiDQxkYsfWWe%2FP4ZIgxzwvSheRndGlJYEq3T%2FSjrlfrrK8M4rEdtxm30TVNtUHge2IG8DZrAGY1jhjfWUty9hv5ghD3tmWwFV8liCWKxNw%2BPoYI6FD%2F7h5%2BeboTxVdbhlX1N8utVDJ%2FY6F3tpiBIwO4WZYRTbXreChrqcJzlgO1dKNnkG4gnEYblmuD%2BhWCAvN2jM6qqrhVa%2FjFPJszTbq5lV6FdP16W6pYmqI4rjhRr72Eu0%2BPb2%2Fo5S9zvgoKoIH1NDicUqjDD0gonKBjqkAZ44Z6y66dF8plLE0JdPp%2FZqPNKIRJRyDBS9SL6Tjtk4XMOh79I3GkEeTxNAtoI8aEIjSP8riJRDhympRpAyT9YntqnA3364E84dr%2Bs4tgVxKeUWnJwGDatvsQVA0tHjUVekwPGbxhwcQlusJm3Ef04UQ1zBHu4T3fruMVQeRxqn7dXf1hmx5h7c%2B3075CzsV6VhJDiycAZcEtm6%2FkQUHl2ayeQi&X-Amz-Signature=310edb93307722f276560ffd022ebc46f81a3a0411bae411f04967b4d7a38494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
