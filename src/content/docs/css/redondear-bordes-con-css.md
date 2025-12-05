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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ5JXP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKroQ3yLHiDUpygjl37UEUY3%2FxzqfAauWNqhtJLaag%2FgIgJJmA7nAq4eAznfY2KXeJHMvZ5Vnmt3rBVjniHPIblDYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBK%2Brv3lGgcvTBRArCrcAwlQG%2BxzUOg%2F7gAlQweOZ9We5DiKk7n3qmWB5S23h9Ky%2F3pxuuMqEEaYXpiNGq%2FlzKvxZkhSGWFAJQWNncqhfnn2hU7KL0%2BjWQu4cQ9g%2BSNuzV5tG2RJRt7V0dRdJnMcQUBC8YjKD%2B5Bw%2F4m2fvSXKL3IuaxHIhgXL88avcL4ljMlosjdbi0bCMyJJXn%2BDliACqHHfezFFBVL0WUd48JUzQRG7TPcCiEhe1BIUVREWTLCFTmb1bEG5QaA2eBZqTenSzhGHf%2Bd7q2QO4TvQ0Cod90%2BlTLq%2FVF7sR%2B2ddKFkwcGmi7yuZzHwxqDUHQfqj57Cl%2FViorhjwMqM%2FAx5K7NNFBYmg5e%2BT28QQBUhuis27ziUsTQ9aWTWQTJv6cmzrPf7Ongz6XLqqYzGSGKjm6cq5uXSXx8Qmxtdntj4dXZzMDiqt2u4y%2FJU7KULMKx9kMEpbO1p6fsupqQY7Yl4C5RpB2%2FfWed5TPunOG05jxprJ0S9t%2BySWl7fq0fckJiowS6%2F6nGgJmgKTJl5Kkf5McWEuHLwlycoIeTOQuCGNPq86kKJhjHoKUR7ONzTwz9DbcVWjxPxZXePdTv4dkw2SsUl6VgjqwtKxZ44xa%2Fri%2BEnt03XI2hbuf9gyXaZpKMN2MyMkGOqUBSBMm5Ul2EoMOV0BsKM3Y%2BOpL9nB3S7bW5G7P8ueudF4yovIJib6B%2F%2BGdhYfJqUmDZ4uzGBXscgTu6HpSlivUzZQcRTVdBdgonBVewzV7XyOynlj0Uty%2B6OkgWoxgqJXUwYMuAxo64Ub03hy5zybMgdNCAJzzZbsL26rBM%2FIsLiv2Ws%2FgeL4z59cW3hb1Hm4R8zf4R8v9q%2FJQtxt8zbUPUfTPD7li&X-Amz-Signature=8b02b4276a50b3510b826f6dc885b413273da8312f085655b95304d728c45aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ5JXP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKroQ3yLHiDUpygjl37UEUY3%2FxzqfAauWNqhtJLaag%2FgIgJJmA7nAq4eAznfY2KXeJHMvZ5Vnmt3rBVjniHPIblDYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBK%2Brv3lGgcvTBRArCrcAwlQG%2BxzUOg%2F7gAlQweOZ9We5DiKk7n3qmWB5S23h9Ky%2F3pxuuMqEEaYXpiNGq%2FlzKvxZkhSGWFAJQWNncqhfnn2hU7KL0%2BjWQu4cQ9g%2BSNuzV5tG2RJRt7V0dRdJnMcQUBC8YjKD%2B5Bw%2F4m2fvSXKL3IuaxHIhgXL88avcL4ljMlosjdbi0bCMyJJXn%2BDliACqHHfezFFBVL0WUd48JUzQRG7TPcCiEhe1BIUVREWTLCFTmb1bEG5QaA2eBZqTenSzhGHf%2Bd7q2QO4TvQ0Cod90%2BlTLq%2FVF7sR%2B2ddKFkwcGmi7yuZzHwxqDUHQfqj57Cl%2FViorhjwMqM%2FAx5K7NNFBYmg5e%2BT28QQBUhuis27ziUsTQ9aWTWQTJv6cmzrPf7Ongz6XLqqYzGSGKjm6cq5uXSXx8Qmxtdntj4dXZzMDiqt2u4y%2FJU7KULMKx9kMEpbO1p6fsupqQY7Yl4C5RpB2%2FfWed5TPunOG05jxprJ0S9t%2BySWl7fq0fckJiowS6%2F6nGgJmgKTJl5Kkf5McWEuHLwlycoIeTOQuCGNPq86kKJhjHoKUR7ONzTwz9DbcVWjxPxZXePdTv4dkw2SsUl6VgjqwtKxZ44xa%2Fri%2BEnt03XI2hbuf9gyXaZpKMN2MyMkGOqUBSBMm5Ul2EoMOV0BsKM3Y%2BOpL9nB3S7bW5G7P8ueudF4yovIJib6B%2F%2BGdhYfJqUmDZ4uzGBXscgTu6HpSlivUzZQcRTVdBdgonBVewzV7XyOynlj0Uty%2B6OkgWoxgqJXUwYMuAxo64Ub03hy5zybMgdNCAJzzZbsL26rBM%2FIsLiv2Ws%2FgeL4z59cW3hb1Hm4R8zf4R8v9q%2FJQtxt8zbUPUfTPD7li&X-Amz-Signature=580f1e69b7c3a7d42172cfbd48fad4fe4e4484d73f9069a195aaf5d0c35dada1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
