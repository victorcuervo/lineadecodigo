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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5GDA3E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSt0PMduqJYGiN%2FvSPrMEM6CjKb9Pt%2FtvxzhYmAHXmQIhAPsUEg3fblmVRfwE1dX1c%2BKbl0%2B1ZcrdWjrC0gJvnrLYKv8DCHoQABoMNjM3NDIzMTgzODA1IgxnijVecJF0qL5rtG0q3AOoqHymxMmeyuArX4H2HmWNfev7lvWgLdDU3TJIHjFMYemE1WsPp5FEgRIaoji6upaP%2BDqSjQfQzzBBeh9qLTogPvg%2FeaW2LK7e5na6ArtevbZ698xH%2BaYpxnF4kZ7we9ZWqxnZrZ1PQ9OUP4iQialExot%2BgnxUfYSYdqvqrq6dyqKdBnIhbBSZlk6FxNqjRGWs%2Bcd8nBabd5HT65z6GOkzLl8jMM0Qz4VpNUyv41j3MY0wb95iWz%2BaHWz3u69AULbRwMv8VI4rcUxmlmWDgZ02SikkXOoL2iJ%2BHbTx2kdbghUruyCXYlVfa6qDm%2FGMayNrH9aa2ooKD9QZxTzCU1sl%2FLiEFiZWe6c%2FgQbT%2BqHgGSkMVMLz6JdwgbdQY6BnLBf%2Fg8ruHPsdM5AQ8vKtEQpJg1lcbg7bBjeOk6Bo%2Bu5a6596aPH4j7MnHdU6VM7iqyZz9GKlwisgrZd7EqsS3ojpJeMpr38awu%2FtYyAiVR9KkVnHy3q1rVUqF7UB9nzX6je0IDedhHPM9AXpLdnBTIYgNmfP%2FNky75XkrsjwvRlctmDNClyJHsQTT%2BrfsT7n%2Bn7ff0MAc0mG8oCCLrpWYCKsvK%2BV0K74bLYNMve%2BtNMbamlfAWa8dv8yt%2Br0fjDOyNHJBjqkAePb9th49hYbyvKHKd0YPN0%2F6zeP7oLxT05guGnktiBnfCZkprrqKWZCAQvUuxxJXT0%2BuDCULuTDsoY10ScYCJ9Z4ggmZHjOkiLKf4uYQHNXCUF0Q1Q7Q3pXGF0ciamSKDnWGfPX%2BCgkPlMgBnqNN6hUfvGNVo7FKlzJDxsG50AvuwR10INxJx0Mj%2BVvyPUaK%2FApKMuyNBVnVty4aS5ouhEp%2FQkD&X-Amz-Signature=7b7834ae1689b5e57772421c90d766bb50ba73e1a0e1e04f70568fb48456d99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5GDA3E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSt0PMduqJYGiN%2FvSPrMEM6CjKb9Pt%2FtvxzhYmAHXmQIhAPsUEg3fblmVRfwE1dX1c%2BKbl0%2B1ZcrdWjrC0gJvnrLYKv8DCHoQABoMNjM3NDIzMTgzODA1IgxnijVecJF0qL5rtG0q3AOoqHymxMmeyuArX4H2HmWNfev7lvWgLdDU3TJIHjFMYemE1WsPp5FEgRIaoji6upaP%2BDqSjQfQzzBBeh9qLTogPvg%2FeaW2LK7e5na6ArtevbZ698xH%2BaYpxnF4kZ7we9ZWqxnZrZ1PQ9OUP4iQialExot%2BgnxUfYSYdqvqrq6dyqKdBnIhbBSZlk6FxNqjRGWs%2Bcd8nBabd5HT65z6GOkzLl8jMM0Qz4VpNUyv41j3MY0wb95iWz%2BaHWz3u69AULbRwMv8VI4rcUxmlmWDgZ02SikkXOoL2iJ%2BHbTx2kdbghUruyCXYlVfa6qDm%2FGMayNrH9aa2ooKD9QZxTzCU1sl%2FLiEFiZWe6c%2FgQbT%2BqHgGSkMVMLz6JdwgbdQY6BnLBf%2Fg8ruHPsdM5AQ8vKtEQpJg1lcbg7bBjeOk6Bo%2Bu5a6596aPH4j7MnHdU6VM7iqyZz9GKlwisgrZd7EqsS3ojpJeMpr38awu%2FtYyAiVR9KkVnHy3q1rVUqF7UB9nzX6je0IDedhHPM9AXpLdnBTIYgNmfP%2FNky75XkrsjwvRlctmDNClyJHsQTT%2BrfsT7n%2Bn7ff0MAc0mG8oCCLrpWYCKsvK%2BV0K74bLYNMve%2BtNMbamlfAWa8dv8yt%2Br0fjDOyNHJBjqkAePb9th49hYbyvKHKd0YPN0%2F6zeP7oLxT05guGnktiBnfCZkprrqKWZCAQvUuxxJXT0%2BuDCULuTDsoY10ScYCJ9Z4ggmZHjOkiLKf4uYQHNXCUF0Q1Q7Q3pXGF0ciamSKDnWGfPX%2BCgkPlMgBnqNN6hUfvGNVo7FKlzJDxsG50AvuwR10INxJx0Mj%2BVvyPUaK%2FApKMuyNBVnVty4aS5ouhEp%2FQkD&X-Amz-Signature=3005a3eea86b0c7b12e64fd279add85737735a8112fc9d59fd78fa5011d5ae38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
