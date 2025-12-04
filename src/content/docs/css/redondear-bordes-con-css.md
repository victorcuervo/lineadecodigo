---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5XHA5KX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC5Uh8TqQChQI0tXfPDfIz6zypLISsfmrMVQLjJJEofmwIgfHfUnXMMkVddnQBQ775wzAGOl26i3DtWfarokmGsmeQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGHm4YO51ui9ldGhPSrcA2nUlhmK3IKZg6QTrRGAXv8oOo3uX6WZYpYHIbRPTqTxB%2Bn1mOq90TI%2BRSu5p0Ehr9XzIsT5f5NFYpD4Q3uoW89UUKzgEFl0Ct3Lr2T21vuAZxAoKg%2F1lJQ%2B91BD1CfalIIaX5vi%2BDw4bQsmu4HCwWwFMsS38n2Q3Rb%2BSsvAxkijDy%2FSZ6wmLiSitUwdUyIn1LaWH5jigVJWE5msdPiqB3CKXbDLRdZYs8AurHWH7u1nOg8e8bY1Psq35RUQt2ex0sdE4ufAgYvEM2YGBoCeiR14%2Fsd%2BO0uGSF29NgTMn61Ul5cxSkA%2BByTBB3fLyIt%2Bx9GzV0FIpivmGal6l%2FQb3p%2F0hsxsQztg0atY4ZpmezeWNmyuXugLAQJQ4RBy4lW841pct3EiLY1q%2FsF7kyYsiLJyjuiq0Vd1%2BEpRhUN8FmhWIVxL8OkVNoAadT%2FTRDi7NHxpGvHGV8MZ5Z5nEln6z0oYILH0zail8dspQfjCnGV2kr78Ly7dnWCutsHMgPOpw7zV%2FAFRvwG3SPQLOPP5NpvH0v20GiC4ty%2BJcpTbU55x1J%2FKaR5Io1vAIKadwhltvHq66dmixUlClVW1G3mlOOPIQCJy2nqO9DtiqJ3q6xcONnt0DxjkOcu%2Bp8aXMKPLxMkGOqUBaBgwulrZFU3E4uQbooxZy43b%2F5O9qmm3P4TyxgmyI25uKF5kKET3UxOfXZqgwKw0NW45eTbZgmXxG2%2B4uh7pwKLcckNqVIZFeayIUoUq0OHfCyING75idOvP%2FlnMb7NCpmXh%2BUqo7UvQukTUW8Az4%2FprIccg6YdhV660tgbJGrv7kvRl3wMSW4vLGgYyn5HsV870NZ11acm80PL1mEz%2F7XW9%2F%2BKg&X-Amz-Signature=1407eafce5500579f875a21e20bee9638cf3130c8449730f77bfb3ea654ce770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5XHA5KX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC5Uh8TqQChQI0tXfPDfIz6zypLISsfmrMVQLjJJEofmwIgfHfUnXMMkVddnQBQ775wzAGOl26i3DtWfarokmGsmeQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGHm4YO51ui9ldGhPSrcA2nUlhmK3IKZg6QTrRGAXv8oOo3uX6WZYpYHIbRPTqTxB%2Bn1mOq90TI%2BRSu5p0Ehr9XzIsT5f5NFYpD4Q3uoW89UUKzgEFl0Ct3Lr2T21vuAZxAoKg%2F1lJQ%2B91BD1CfalIIaX5vi%2BDw4bQsmu4HCwWwFMsS38n2Q3Rb%2BSsvAxkijDy%2FSZ6wmLiSitUwdUyIn1LaWH5jigVJWE5msdPiqB3CKXbDLRdZYs8AurHWH7u1nOg8e8bY1Psq35RUQt2ex0sdE4ufAgYvEM2YGBoCeiR14%2Fsd%2BO0uGSF29NgTMn61Ul5cxSkA%2BByTBB3fLyIt%2Bx9GzV0FIpivmGal6l%2FQb3p%2F0hsxsQztg0atY4ZpmezeWNmyuXugLAQJQ4RBy4lW841pct3EiLY1q%2FsF7kyYsiLJyjuiq0Vd1%2BEpRhUN8FmhWIVxL8OkVNoAadT%2FTRDi7NHxpGvHGV8MZ5Z5nEln6z0oYILH0zail8dspQfjCnGV2kr78Ly7dnWCutsHMgPOpw7zV%2FAFRvwG3SPQLOPP5NpvH0v20GiC4ty%2BJcpTbU55x1J%2FKaR5Io1vAIKadwhltvHq66dmixUlClVW1G3mlOOPIQCJy2nqO9DtiqJ3q6xcONnt0DxjkOcu%2Bp8aXMKPLxMkGOqUBaBgwulrZFU3E4uQbooxZy43b%2F5O9qmm3P4TyxgmyI25uKF5kKET3UxOfXZqgwKw0NW45eTbZgmXxG2%2B4uh7pwKLcckNqVIZFeayIUoUq0OHfCyING75idOvP%2FlnMb7NCpmXh%2BUqo7UvQukTUW8Az4%2FprIccg6YdhV660tgbJGrv7kvRl3wMSW4vLGgYyn5HsV870NZ11acm80PL1mEz%2F7XW9%2F%2BKg&X-Amz-Signature=da09c5208e8067da5cb1da27db2904355973cacc8ea48dce0a9d7d703460fcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
