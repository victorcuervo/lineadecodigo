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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZR2RCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH4hqwUWI%2F%2FIdj%2BC%2FbHdK3B7n22JHG9BZgDp0isYdbWgIgbmIzFSuOuFtK8SfEX4OtecQA2dNYfgc6FLf%2BTtq4fC4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDJe7QJfkKe54V5BleyrcA3aZKO2eDgWSaBRcttK%2FTV3DzFhDRNwfo%2B4LkzIqDmpisdo9I2zXwxRc%2FfqFG1Wdx4zERY%2FmU%2F8UnchwJRwu8nBRFV5crUoIp69gV%2FQodqnxcEPmwv6SUcI0EaU%2BjoLYd3w%2Fst%2F72FyULVHKjBAlnunuauhun7ufw0Yi7B7bZfrhL24sBGFICJGDMgkJ6nD7vYmOLGGL6ArgiOkxMGUsnE7KBcSkZTBcnYOJbauJC049oWoSLp2x08vQFpiztOF29MYPY6uXTdutS7WXvKobsRpDBGu%2FJKZHUM07HLYc%2FPM2nrIAtSjqWIMKNN%2FunCZBh2aImmgxernIPZu%2F8aGkA%2BLff1N1Vr%2FeSsXzavekxzEuyOuFlZiDHp0LPJqYGl05EfioMuNyGqxqfeWu0PlIn0PXFMRPFE2GrAaxqo3zJD2y8lU8r4QlDm0vuOVfrHcCvQfTXDFqE4w38AC58sRpyd46yVfQrAyM6FBxf5lTlEWcAfRkFMb2KxLbkWdMTXxa65yRlidtLexp2QgXhctb1Jp0EjLwfx42GWGbRCNXhlECQlSlj8d1ILxxXrHZ08gGhkXf4CPnON87FsSMFbkgyLL3iX6XyxpmyDjA%2F8MNTuPsg4TiCcvfJ6TSs4tdMICKzskGOqUBWfTo5TWPAo%2Bw3Ozy%2B9NAhXO2ILD%2BtWTt7y%2BZTsJgb9Ro17VSl%2BWiIt4VvJ2Ogt1VpHYPpK9dUb76TH8942l3EOiZQFRt651yPqYnSEwOBynqvwkfq8PDM9i1LHuf2L%2BbM%2FEBLrfX0KOiG3DRB1eMQz61o%2F1bw85x5EYgVyWCF2Ny2%2F%2BSyO3yA0i5nlmdBXM80SS0zBHmyfwnXP8TQ5VwJrOduzg%2B&X-Amz-Signature=c446c983f53b161b5cc0d651988a4acde9305b95645379af3ee144cb5ade2aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZR2RCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH4hqwUWI%2F%2FIdj%2BC%2FbHdK3B7n22JHG9BZgDp0isYdbWgIgbmIzFSuOuFtK8SfEX4OtecQA2dNYfgc6FLf%2BTtq4fC4q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDJe7QJfkKe54V5BleyrcA3aZKO2eDgWSaBRcttK%2FTV3DzFhDRNwfo%2B4LkzIqDmpisdo9I2zXwxRc%2FfqFG1Wdx4zERY%2FmU%2F8UnchwJRwu8nBRFV5crUoIp69gV%2FQodqnxcEPmwv6SUcI0EaU%2BjoLYd3w%2Fst%2F72FyULVHKjBAlnunuauhun7ufw0Yi7B7bZfrhL24sBGFICJGDMgkJ6nD7vYmOLGGL6ArgiOkxMGUsnE7KBcSkZTBcnYOJbauJC049oWoSLp2x08vQFpiztOF29MYPY6uXTdutS7WXvKobsRpDBGu%2FJKZHUM07HLYc%2FPM2nrIAtSjqWIMKNN%2FunCZBh2aImmgxernIPZu%2F8aGkA%2BLff1N1Vr%2FeSsXzavekxzEuyOuFlZiDHp0LPJqYGl05EfioMuNyGqxqfeWu0PlIn0PXFMRPFE2GrAaxqo3zJD2y8lU8r4QlDm0vuOVfrHcCvQfTXDFqE4w38AC58sRpyd46yVfQrAyM6FBxf5lTlEWcAfRkFMb2KxLbkWdMTXxa65yRlidtLexp2QgXhctb1Jp0EjLwfx42GWGbRCNXhlECQlSlj8d1ILxxXrHZ08gGhkXf4CPnON87FsSMFbkgyLL3iX6XyxpmyDjA%2F8MNTuPsg4TiCcvfJ6TSs4tdMICKzskGOqUBWfTo5TWPAo%2Bw3Ozy%2B9NAhXO2ILD%2BtWTt7y%2BZTsJgb9Ro17VSl%2BWiIt4VvJ2Ogt1VpHYPpK9dUb76TH8942l3EOiZQFRt651yPqYnSEwOBynqvwkfq8PDM9i1LHuf2L%2BbM%2FEBLrfX0KOiG3DRB1eMQz61o%2F1bw85x5EYgVyWCF2Ny2%2F%2BSyO3yA0i5nlmdBXM80SS0zBHmyfwnXP8TQ5VwJrOduzg%2B&X-Amz-Signature=08c4208fcf84df26a00b24f6c65793116e3fddd7acb547001ba0ceceb4bb5669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
