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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGNZK4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1iWSUij22vrINp0Uevb0R4j9Kg7syAEB1qsjfvp0ZqAiAh%2Bch0dhLXVJ6n%2FqbT9oEWoJTizS9fK8DgTAErRwjHaCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMkB5MVmo6jdqV7hH4KtwDuxnUp3wjGonxDnMyVa7kS9Me%2F2r6B953USwsg8iy0bNpfaJkwGAX4nSHvQOGGv71EWqPlvR5jTK%2Fm9xiPT2%2B0F8971wDwIOG6wra0y8eO87MKGeDDOlDFmwvCBDCB1yv%2BZH9wIBZXRLwgawGK0v%2FbQvQGCNbX5NW4UqKv9i7YWgkTPIXqCJK2GJaZcIE%2BqUpFMl2o77ERsWSrpQa3P3yvTzU6v8qYjMxrVUDXi6HotKrMAdAhFvSqLRp5hyL3wHBp8QI2KXWEu%2BaL8RG9XZ040qqS93VBC7GG4j7DYKC9ifhaokS3K4XTTMT24em4Hba7ZzW1Q9rnrrZZsEIqw4GGalgmymZ6GC4kDWDp9GoaAv0kzUH%2FDj60CsFc5OFQDQj8FsgyF0HUE1xy6bKdvwrN2IDg5x5Jf1CqU1vegXyI7Mx8Uyq5IOieqJDGb2fwRCbbtVfCJtHGIuBJjmbpQpHYToxA3%2FnZ8ResGIvlCJFHQ%2FpoPkw6VJM8NQRW4XJ7P2O27aJTy31VYliHfHWJSVMN71UY6paFqCGj7FZ7vzAN3zZNJRHcNZsLF2HhdcWwsw1rhWwXrnY9QHPEcEc7VWDdtG8%2Bugyt4IWJjX54TPViHD0HdDr9%2BtR3Y4coVgw1NbKyQY6pgE6j%2FeJopx5i5fPKfoNK%2FDkTwsXmyVlGgVFULBdmlIS75qgd0IydBmGGlV8%2F3Kxv0inDSFFDQUchnwJPi5ftKvcDiixsQrdEDrBicbJsp793YLrBH0CxoED6eS6M3YgIFhS0daKyh9kw633bvTpkw%2B5YRHbCDeFYiup6qxup%2FoKC2Fir%2BglZde1JPpVfVHAJQqjnTYYEPZkjYcRPHPHjnxoCu039gAi&X-Amz-Signature=07bdedb519f07ff74a4cfe6e43378d7b4143c5b4e13aaaf370e6418a651f0ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGNZK4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1iWSUij22vrINp0Uevb0R4j9Kg7syAEB1qsjfvp0ZqAiAh%2Bch0dhLXVJ6n%2FqbT9oEWoJTizS9fK8DgTAErRwjHaCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMkB5MVmo6jdqV7hH4KtwDuxnUp3wjGonxDnMyVa7kS9Me%2F2r6B953USwsg8iy0bNpfaJkwGAX4nSHvQOGGv71EWqPlvR5jTK%2Fm9xiPT2%2B0F8971wDwIOG6wra0y8eO87MKGeDDOlDFmwvCBDCB1yv%2BZH9wIBZXRLwgawGK0v%2FbQvQGCNbX5NW4UqKv9i7YWgkTPIXqCJK2GJaZcIE%2BqUpFMl2o77ERsWSrpQa3P3yvTzU6v8qYjMxrVUDXi6HotKrMAdAhFvSqLRp5hyL3wHBp8QI2KXWEu%2BaL8RG9XZ040qqS93VBC7GG4j7DYKC9ifhaokS3K4XTTMT24em4Hba7ZzW1Q9rnrrZZsEIqw4GGalgmymZ6GC4kDWDp9GoaAv0kzUH%2FDj60CsFc5OFQDQj8FsgyF0HUE1xy6bKdvwrN2IDg5x5Jf1CqU1vegXyI7Mx8Uyq5IOieqJDGb2fwRCbbtVfCJtHGIuBJjmbpQpHYToxA3%2FnZ8ResGIvlCJFHQ%2FpoPkw6VJM8NQRW4XJ7P2O27aJTy31VYliHfHWJSVMN71UY6paFqCGj7FZ7vzAN3zZNJRHcNZsLF2HhdcWwsw1rhWwXrnY9QHPEcEc7VWDdtG8%2Bugyt4IWJjX54TPViHD0HdDr9%2BtR3Y4coVgw1NbKyQY6pgE6j%2FeJopx5i5fPKfoNK%2FDkTwsXmyVlGgVFULBdmlIS75qgd0IydBmGGlV8%2F3Kxv0inDSFFDQUchnwJPi5ftKvcDiixsQrdEDrBicbJsp793YLrBH0CxoED6eS6M3YgIFhS0daKyh9kw633bvTpkw%2B5YRHbCDeFYiup6qxup%2FoKC2Fir%2BglZde1JPpVfVHAJQqjnTYYEPZkjYcRPHPHjnxoCu039gAi&X-Amz-Signature=87f192c328811be28d2ce0f2e969da01e2e08215b1dfe7b58b4e584646f38444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
