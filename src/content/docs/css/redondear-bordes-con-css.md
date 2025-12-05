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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVMPO72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCpS8OLXp%2Fq%2BhJRnuxGIBIGnTkSNslcWZfh%2B98DcQ0YAiAy%2BnbQlRSpChBGKx5ilc9fI4LMvyPA9Z%2FKh8BNr6OTBSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMWt6LzVegcnGB%2B6%2BgKtwDKuGz9065L4T9BAJClYTNv%2FXUdmg4fXMTv87kLX3rupVePttbGd2wTilKxMr8jzDyXgm%2Fgh%2B6WtCJJyF6Sm89bYoP%2BPdg0T31gq5LP5DKL8Ws1Hw%2FuvCMLjUm59Rm9uSz5jk9x4gUyO7%2BD90FWnoQFnkrQImSTwpvnNAsMpGXkRIQP5RWNPOTQxnUQLl%2BX3gkm44%2F%2BEq5JJMN4xYo%2FbuJ2muiEbL9w1asBXTdTCSlJaO6%2FjswI%2BXp99Gpr03XTU8pe26kyL0FG4RnG7%2FJPfCoamgKRcpOoY%2BtQCtuETzKh3RtwMdX7BdpBeXpQQ9pJzy75gqMChsUzN0IiACtMKWkRnHqwo1wxQRfWfyCqVG0ySUVQUr7WpVgP4PXs4MGPVN71MWwcEsPmYJ2EmqhYVYL3uXNU%2BTbb9GTMyNNbgMXfy56KfDAnfABhy1dUUiaKWGI8fraCdFjKEoa5jCWG2Z7EUyZUQQ%2Ber241JGDrdzWEo5k4OwU4b4Bxduj2BIwbeSMIKMZLdHGlaF44ogLKj78lprvOgOc4yx83qW2X9GANvjfLnulyp2NMtQMkB9wQ7Jdnuf9RezhmDmkQgCk%2FzueGTZKAoh%2BMGGVURlHC86jPkwgLuaYQbnHN8CTZsww8fzLyQY6pgFzq4vyF5QigdFF0YYsHG2LNhC%2FsdYAPHs63L6BvSRJ%2BlPelaDNus8%2B0kJpAO2RWhqWw3zv8T%2FwMvpR4WWxItGhRa3eVxf%2FqJFE8ZCWUPi0tUtjDEJ1oFQ7w32gN47bzsbsaHHG%2F5HCpu5lSAK5FQy8aitVKFczzyM82cm0JTNwwFGQ4HZFD8%2BAk2eE2q3JNflNV0b%2FF%2BWgsOuw2Xaz9B7hpPJ4xGRh&X-Amz-Signature=6623f6983cf585a903466428ad990acb0ae4035cb6da52d78a09da5bb47d1d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVMPO72%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCpS8OLXp%2Fq%2BhJRnuxGIBIGnTkSNslcWZfh%2B98DcQ0YAiAy%2BnbQlRSpChBGKx5ilc9fI4LMvyPA9Z%2FKh8BNr6OTBSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMWt6LzVegcnGB%2B6%2BgKtwDKuGz9065L4T9BAJClYTNv%2FXUdmg4fXMTv87kLX3rupVePttbGd2wTilKxMr8jzDyXgm%2Fgh%2B6WtCJJyF6Sm89bYoP%2BPdg0T31gq5LP5DKL8Ws1Hw%2FuvCMLjUm59Rm9uSz5jk9x4gUyO7%2BD90FWnoQFnkrQImSTwpvnNAsMpGXkRIQP5RWNPOTQxnUQLl%2BX3gkm44%2F%2BEq5JJMN4xYo%2FbuJ2muiEbL9w1asBXTdTCSlJaO6%2FjswI%2BXp99Gpr03XTU8pe26kyL0FG4RnG7%2FJPfCoamgKRcpOoY%2BtQCtuETzKh3RtwMdX7BdpBeXpQQ9pJzy75gqMChsUzN0IiACtMKWkRnHqwo1wxQRfWfyCqVG0ySUVQUr7WpVgP4PXs4MGPVN71MWwcEsPmYJ2EmqhYVYL3uXNU%2BTbb9GTMyNNbgMXfy56KfDAnfABhy1dUUiaKWGI8fraCdFjKEoa5jCWG2Z7EUyZUQQ%2Ber241JGDrdzWEo5k4OwU4b4Bxduj2BIwbeSMIKMZLdHGlaF44ogLKj78lprvOgOc4yx83qW2X9GANvjfLnulyp2NMtQMkB9wQ7Jdnuf9RezhmDmkQgCk%2FzueGTZKAoh%2BMGGVURlHC86jPkwgLuaYQbnHN8CTZsww8fzLyQY6pgFzq4vyF5QigdFF0YYsHG2LNhC%2FsdYAPHs63L6BvSRJ%2BlPelaDNus8%2B0kJpAO2RWhqWw3zv8T%2FwMvpR4WWxItGhRa3eVxf%2FqJFE8ZCWUPi0tUtjDEJ1oFQ7w32gN47bzsbsaHHG%2F5HCpu5lSAK5FQy8aitVKFczzyM82cm0JTNwwFGQ4HZFD8%2BAk2eE2q3JNflNV0b%2FF%2BWgsOuw2Xaz9B7hpPJ4xGRh&X-Amz-Signature=f2e091e17339a064cf85496a8b5e272b8d649dd3022bbf3364be4cdb48ea14d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
