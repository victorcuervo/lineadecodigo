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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KH4HKR7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7g90iIBvf8v4ixQN2917dbpmZowB00%2ByBkb%2Fzcd0A2AiA0K9Rk%2F%2B%2ByH2my3L6lkXPKuKmT9wwcTWNlrs4vK0KptiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGVq%2B%2Bv8Q1Q939SfZKtwDfwagAu%2Bfz9CIPKs2IDWokDr5axHdjsIF%2BWQtaC7fQmTCJW9JEc9utxZNFvPG%2BDkDzu67qiCWIRG8zwK%2F%2BaLRBqzQOL7jZxCow4E%2BL6Au76RHnkE%2BtboCJOH6oErlU2KcxW%2F%2FnWer0EuhokZMoCXNuJzZkP36Q1go0K4NyVoTIR5rEsXiKmQ422mvl5OXiYyp17bzarpvFMLQyYCpU8F4Oz03FzqBSuj7MIO9fCiI3MXyV7%2FTmMoxchT7sfEcUnvzNafdjmGk4GxoOFVQj1ZW3dy%2Bi%2BY1QVPr%2FIMpe3D87wiJdHHj4pFq0jwhF15bwdHltGojBjqTOFXBDCsL2C1uNoI10GQfcqi%2BxAJKH7dyOe1N%2FFtJGqVBQjLvX60eNj9AIjkfE2Ji9AV1Pkw60Y%2Fy8ACviTmbAjtJFVCkI8xMMJhsPWZhF1mymUow7eUl0lze6Up8Jv7U4niHIToV7Hswkq%2BD4IDQeQzw54R7LNV3eKg4rd2NFnK4PpA%2B5PCQbEQbfTLqFeyNcIuX9T6Jwj7oaFRn3ANhMaiWy%2FraGqDTVNT%2FlRUjjqEQp3p%2F%2BSPnt09UsZIZLPWscd76kv9b9KdRGehtB%2FvQbROjykp1e5RY%2BUuhKKWu9tdNUoCTvGwwwZ%2BLygY6pgHBazq31P9o%2BbfVvkkVjApC684L4OvQwdNocVnPwBHiBk5NjYabzRQBPMTOG1DcPHrCe5boetyBsJSxhZIKOGpqgfWG3H0Dbr3Kz0dTVKfOZMkmL1bVIRT2QjtWA0cqMlJLilrWBs3kBCAD81z0UxQTGIdqbr%2F0z5kEDQg6H7nw22gkvKt4VHTFkA3sGTPxcJHmIiR3LbPpsssOpRudJXz77TvsssJL&X-Amz-Signature=75924b6bda95b98945dae41b4c1e4c44da7e4f42fb3213c545775cd4d20b5ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KH4HKR7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7g90iIBvf8v4ixQN2917dbpmZowB00%2ByBkb%2Fzcd0A2AiA0K9Rk%2F%2B%2ByH2my3L6lkXPKuKmT9wwcTWNlrs4vK0KptiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGVq%2B%2Bv8Q1Q939SfZKtwDfwagAu%2Bfz9CIPKs2IDWokDr5axHdjsIF%2BWQtaC7fQmTCJW9JEc9utxZNFvPG%2BDkDzu67qiCWIRG8zwK%2F%2BaLRBqzQOL7jZxCow4E%2BL6Au76RHnkE%2BtboCJOH6oErlU2KcxW%2F%2FnWer0EuhokZMoCXNuJzZkP36Q1go0K4NyVoTIR5rEsXiKmQ422mvl5OXiYyp17bzarpvFMLQyYCpU8F4Oz03FzqBSuj7MIO9fCiI3MXyV7%2FTmMoxchT7sfEcUnvzNafdjmGk4GxoOFVQj1ZW3dy%2Bi%2BY1QVPr%2FIMpe3D87wiJdHHj4pFq0jwhF15bwdHltGojBjqTOFXBDCsL2C1uNoI10GQfcqi%2BxAJKH7dyOe1N%2FFtJGqVBQjLvX60eNj9AIjkfE2Ji9AV1Pkw60Y%2Fy8ACviTmbAjtJFVCkI8xMMJhsPWZhF1mymUow7eUl0lze6Up8Jv7U4niHIToV7Hswkq%2BD4IDQeQzw54R7LNV3eKg4rd2NFnK4PpA%2B5PCQbEQbfTLqFeyNcIuX9T6Jwj7oaFRn3ANhMaiWy%2FraGqDTVNT%2FlRUjjqEQp3p%2F%2BSPnt09UsZIZLPWscd76kv9b9KdRGehtB%2FvQbROjykp1e5RY%2BUuhKKWu9tdNUoCTvGwwwZ%2BLygY6pgHBazq31P9o%2BbfVvkkVjApC684L4OvQwdNocVnPwBHiBk5NjYabzRQBPMTOG1DcPHrCe5boetyBsJSxhZIKOGpqgfWG3H0Dbr3Kz0dTVKfOZMkmL1bVIRT2QjtWA0cqMlJLilrWBs3kBCAD81z0UxQTGIdqbr%2F0z5kEDQg6H7nw22gkvKt4VHTFkA3sGTPxcJHmIiR3LbPpsssOpRudJXz77TvsssJL&X-Amz-Signature=f57e7596a691089174a18b5b2506ff297a00de39b2681d11810547fad7e35333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
