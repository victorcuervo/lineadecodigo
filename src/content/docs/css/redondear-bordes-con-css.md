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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2NWYNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRSu7UUfnIBgHfq%2FLnXPF57UKoZQPPJGRjNJJjJ3TSAiBYesNHw4enOhHb9oXIR0vkJ0eSPh8rLsaYwkbs0vNBUir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4vPGjjMTF5zwPmmQKtwD89XqiM3RuQCiklgOmD%2FCj7FpxQbOICNfhK%2F1QuKbL%2FBJa8QdqD0RGzcyhLmNtNqC8DuMu4G1hLW9TiHVSGESvGO4QRdZqNlmfB7DSzXZCdpfBayeztufAhb%2FGLkgcCKQWDaMaYeGXoH7fTH%2BEfcjsdzcwKC7Q1Tu1L6TvGTD0kldgirbiVbRoATo%2F18mlEkv22tJHOU6hPpkOIq26aYVpLQHKSV49MyvSVuTRC5ACvTI6ShLpY88md5JvwMZRCC%2FA%2B94HwPXMOLeTnyCjIjCcGK3hIrcSmYvgJ0y4pizqnrWmDdrhNm%2BYAEoeRlRp4mijUDQHzaQluAr6wm4RYvRA57NA7jfPMAmlak7t1PsCqLEzZAy76FJT7F5%2BFUHDLNAnVEsizoEQNMnMH84TrnksPGry4bvlMAUthTLM4nZeZB%2FcoEmi5J7iy%2FUOrQ2c8456DPydY83JQl8q6aXSf3wx6UA4usBuhkrP%2FSulJSmtccPrGI%2BG3%2FrmqKpDy4YOd8o94ZNcLJEBVqzFGIfdPm%2FLSj6ckxoGfdq6adTg%2FyaIhHnJgxFHoKVtq10tUUnZ86wwqzXB2HpG1yJsxXcy7gP33tv%2BHRClBNAy12Ow9QPNMOyiiGhceawYNfqTsIwqsfRyQY6pgFVb%2FQsfLhGami6uRoQuyyTeCRq%2BV277dFyvjuN7jylsTi8IR90Vffb2nqH%2Bb9faE1FJK76S8E8HqShND1UA2pZAWvi54TJrTmrhdUw0Moid1NK%2FYu1G5nnHLVUITGaan%2Bs9GAK%2FnfhspyS49PvqELyF6%2Fp7rSp2M3cI0G%2BmbUQK75mLbnww5PUe1vu8bQ0aJInrFGSiET7l1FqTSyGRiwZISlyGN38&X-Amz-Signature=10e95751bc9a8e6b909329a9f8952edb3d8d12561f17be3045d9734e4169bb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2NWYNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaRSu7UUfnIBgHfq%2FLnXPF57UKoZQPPJGRjNJJjJ3TSAiBYesNHw4enOhHb9oXIR0vkJ0eSPh8rLsaYwkbs0vNBUir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4vPGjjMTF5zwPmmQKtwD89XqiM3RuQCiklgOmD%2FCj7FpxQbOICNfhK%2F1QuKbL%2FBJa8QdqD0RGzcyhLmNtNqC8DuMu4G1hLW9TiHVSGESvGO4QRdZqNlmfB7DSzXZCdpfBayeztufAhb%2FGLkgcCKQWDaMaYeGXoH7fTH%2BEfcjsdzcwKC7Q1Tu1L6TvGTD0kldgirbiVbRoATo%2F18mlEkv22tJHOU6hPpkOIq26aYVpLQHKSV49MyvSVuTRC5ACvTI6ShLpY88md5JvwMZRCC%2FA%2B94HwPXMOLeTnyCjIjCcGK3hIrcSmYvgJ0y4pizqnrWmDdrhNm%2BYAEoeRlRp4mijUDQHzaQluAr6wm4RYvRA57NA7jfPMAmlak7t1PsCqLEzZAy76FJT7F5%2BFUHDLNAnVEsizoEQNMnMH84TrnksPGry4bvlMAUthTLM4nZeZB%2FcoEmi5J7iy%2FUOrQ2c8456DPydY83JQl8q6aXSf3wx6UA4usBuhkrP%2FSulJSmtccPrGI%2BG3%2FrmqKpDy4YOd8o94ZNcLJEBVqzFGIfdPm%2FLSj6ckxoGfdq6adTg%2FyaIhHnJgxFHoKVtq10tUUnZ86wwqzXB2HpG1yJsxXcy7gP33tv%2BHRClBNAy12Ow9QPNMOyiiGhceawYNfqTsIwqsfRyQY6pgFVb%2FQsfLhGami6uRoQuyyTeCRq%2BV277dFyvjuN7jylsTi8IR90Vffb2nqH%2Bb9faE1FJK76S8E8HqShND1UA2pZAWvi54TJrTmrhdUw0Moid1NK%2FYu1G5nnHLVUITGaan%2Bs9GAK%2FnfhspyS49PvqELyF6%2Fp7rSp2M3cI0G%2BmbUQK75mLbnww5PUe1vu8bQ0aJInrFGSiET7l1FqTSyGRiwZISlyGN38&X-Amz-Signature=43e8698dfa4245321970687a0aa865ff9289a6aadc86e3885e81ef45a9ae2d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
