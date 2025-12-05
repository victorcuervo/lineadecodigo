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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLG4GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FzVvIriqXpmVZyPW6hColLahhzove55gBc4Xw8mYsAIgHE0LG7OzlnTtqHu8PdYB8d2S%2BOREVj5HPe%2B51hyE8Jkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUPsnyiS42ymy9b3CrcA59RFTOpKKpgvitA0ea2f4C9GLJz4uABqIJhBiIcNNqxPiLOnpF7dmYqyUdCZQRDiCkYkukdKByDu1qhvuPHzB%2F%2BfCl1Sh%2FO6LjO5%2FNRJxYSLoCz276grmvUDkYaPbI%2Fe9hO0qEAga5gG%2BwqGHrKZzMCZDT4CrUW3T%2FXM%2F7BxHwf2qkvTjOsF2qSjh3XQEUmKyeTbYCbfMl0%2Byy415muKs%2BlWEDuUZDE95GZ%2FooTcjv5mlB5jRY8m2D0MvOsprJGFRuv1%2B0jJFG%2BCfxtpshwkddEQvBXJKpUunNA7p%2Fv%2BcwSv%2B0yQnrG0AtJbOZ2WBAZ8Lls5lpREMxo8N4i8tw5iniijLSVe9v%2BO6Dxg4xrOrejdZlOulgIVik2uBLQLnjLTCixJoaKM7F8nrPfQWtVVtudXaBhIbvECa5Mcs9%2BjBqvzPB4v8LDNb2XP%2Fu%2FAp%2F1DQP0HJswa0zf%2BOm0FmmDyXyR10sAJCaNupAdqlLg6sKOPku9hsmkETVchAp6n5vIoxk1kdfSMWQHlRH0f7aSEaT7e9rz8dHq4PsoOiswuN%2FusysL76z531w7H19gDGibOkrRRDw3d6KhBxcS8w2fqS6PZ%2Bixwi3jK096I3xZ9r5uqIhp3T4X8fGzEhQoMKeuyckGOqUBnn1GGxBjGGhrcrgVWrNDckKibsMxiU6J6DPTe6tnudEXlrqz0ZVYIylaDX823fkzltN2K4aAwQUTq0UKdncit1Q1fKgxsbNOg7oqGhnqwYGa3h14YZN%2BPabCTu680Bfqgk3ckKwUZRMBYKy3d4hT%2FbgG2ZzJ2jsakiz%2BZdNl41RdtWz2qoI9z4HfV2ysHhkb8hj6yR0mqSwohZK8xuq2YRxZsaq%2B&X-Amz-Signature=5db69096a158da3f0f05684164447270b2df41dd467506aac7e28eed334d2127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLG4GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9FzVvIriqXpmVZyPW6hColLahhzove55gBc4Xw8mYsAIgHE0LG7OzlnTtqHu8PdYB8d2S%2BOREVj5HPe%2B51hyE8Jkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAUPsnyiS42ymy9b3CrcA59RFTOpKKpgvitA0ea2f4C9GLJz4uABqIJhBiIcNNqxPiLOnpF7dmYqyUdCZQRDiCkYkukdKByDu1qhvuPHzB%2F%2BfCl1Sh%2FO6LjO5%2FNRJxYSLoCz276grmvUDkYaPbI%2Fe9hO0qEAga5gG%2BwqGHrKZzMCZDT4CrUW3T%2FXM%2F7BxHwf2qkvTjOsF2qSjh3XQEUmKyeTbYCbfMl0%2Byy415muKs%2BlWEDuUZDE95GZ%2FooTcjv5mlB5jRY8m2D0MvOsprJGFRuv1%2B0jJFG%2BCfxtpshwkddEQvBXJKpUunNA7p%2Fv%2BcwSv%2B0yQnrG0AtJbOZ2WBAZ8Lls5lpREMxo8N4i8tw5iniijLSVe9v%2BO6Dxg4xrOrejdZlOulgIVik2uBLQLnjLTCixJoaKM7F8nrPfQWtVVtudXaBhIbvECa5Mcs9%2BjBqvzPB4v8LDNb2XP%2Fu%2FAp%2F1DQP0HJswa0zf%2BOm0FmmDyXyR10sAJCaNupAdqlLg6sKOPku9hsmkETVchAp6n5vIoxk1kdfSMWQHlRH0f7aSEaT7e9rz8dHq4PsoOiswuN%2FusysL76z531w7H19gDGibOkrRRDw3d6KhBxcS8w2fqS6PZ%2Bixwi3jK096I3xZ9r5uqIhp3T4X8fGzEhQoMKeuyckGOqUBnn1GGxBjGGhrcrgVWrNDckKibsMxiU6J6DPTe6tnudEXlrqz0ZVYIylaDX823fkzltN2K4aAwQUTq0UKdncit1Q1fKgxsbNOg7oqGhnqwYGa3h14YZN%2BPabCTu680Bfqgk3ckKwUZRMBYKy3d4hT%2FbgG2ZzJ2jsakiz%2BZdNl41RdtWz2qoI9z4HfV2ysHhkb8hj6yR0mqSwohZK8xuq2YRxZsaq%2B&X-Amz-Signature=3fa850051d3d1d8b2dfdaad5ada4c95cf8942e4bbb4072f7473cb8272df80024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
