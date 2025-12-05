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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662TGCXIG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6ZswyW0W4T59imy42ZFd2VHqNHtLnB4zivqTj7BDu%2BAIhAJi8gkolAfruwCVCtInzJ2oaYTyUGqwWPekRSdj5pQOBKv8DCE8QABoMNjM3NDIzMTgzODA1Igw97Apn%2Ft3mQWBv%2BmIq3AMKcEhDEOrvyspclUpdfGoxkDJyggwW9KRnnEYvdJohk2ffDcHnyqw711tT8Jx2JdGxqjMS3gJGvV9eKIi7MnkhIdsu9W4l0N2fZtCHqtxHEGpT8mTrGVZADjf%2FmHSVv%2BvUpKAtBtH0wrCNKnTm20XViiCk04T9tou%2BhjW3bmoUfn4hVs%2BXSWPCT%2B42DkkJL10DPqDY3Nla6WlhhGCW6QVsNdqHAYxhWLJSbIG3eCVg1XDIHZEO8ptHXRYXA8dK%2FGl3D5KSEQDa9N%2Ft1GGIVu5qu5xf3JClvXFurqsCjAEJjGtiiFAFyVZttNnGKIXb%2Fay30ob%2B3qwhQ0MPF0%2FDZJKRoAzfDlNg2u5%2BJGJ800H1eVqhKaUpbBjXqk5a2uQc87%2Bh9Q9MzWeB%2FvBoBAZLES5l2tXzYf2WDf%2F2L69wJxKvs7r%2BZXWWuGdM09YJOzfCa3XLzgUy8g0fn4mkC4xfl2kQ7HaC5rM3Brk5k1t%2Bj58imWM23VAgWlVQMubI1Msoz0JV0glvWP0N3nLm3PRpwLmE1JROv84f40MFkGTbdnz5FqNS1x0hpSJOAR2SU%2BZlHhthfZ3DgDbanFt2QWpn%2Fa9XgI1JAf1NjeEB8y3VaCqcMNsr9fQ3bATPVP2%2FqDD3i8jJBjqkAestKcB0tyvhIiD93ke5QtzFxNyARiDlCwQQodE7vspbW57mUbCOBIXY3ZYsae%2FE5BkAwbYdaKZcF%2FkEtUdfhunnAJp8sFNc3MmpRsCsPnysWws1V25drRyR6QRM%2FRhCTP8ZkARAD2IuM9Kh8Zy30k0aCjXzjmlEbzkKXvl1TS%2Fwfw5yKb%2B%2FLqJvFuUkcayBF7Q%2FA%2B6BdAmkWLskyuc77Zm5eTfr&X-Amz-Signature=af7c7690c2302e6b1c32495f391110368a61e441fc82d8357e8d3200bed0c8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662TGCXIG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6ZswyW0W4T59imy42ZFd2VHqNHtLnB4zivqTj7BDu%2BAIhAJi8gkolAfruwCVCtInzJ2oaYTyUGqwWPekRSdj5pQOBKv8DCE8QABoMNjM3NDIzMTgzODA1Igw97Apn%2Ft3mQWBv%2BmIq3AMKcEhDEOrvyspclUpdfGoxkDJyggwW9KRnnEYvdJohk2ffDcHnyqw711tT8Jx2JdGxqjMS3gJGvV9eKIi7MnkhIdsu9W4l0N2fZtCHqtxHEGpT8mTrGVZADjf%2FmHSVv%2BvUpKAtBtH0wrCNKnTm20XViiCk04T9tou%2BhjW3bmoUfn4hVs%2BXSWPCT%2B42DkkJL10DPqDY3Nla6WlhhGCW6QVsNdqHAYxhWLJSbIG3eCVg1XDIHZEO8ptHXRYXA8dK%2FGl3D5KSEQDa9N%2Ft1GGIVu5qu5xf3JClvXFurqsCjAEJjGtiiFAFyVZttNnGKIXb%2Fay30ob%2B3qwhQ0MPF0%2FDZJKRoAzfDlNg2u5%2BJGJ800H1eVqhKaUpbBjXqk5a2uQc87%2Bh9Q9MzWeB%2FvBoBAZLES5l2tXzYf2WDf%2F2L69wJxKvs7r%2BZXWWuGdM09YJOzfCa3XLzgUy8g0fn4mkC4xfl2kQ7HaC5rM3Brk5k1t%2Bj58imWM23VAgWlVQMubI1Msoz0JV0glvWP0N3nLm3PRpwLmE1JROv84f40MFkGTbdnz5FqNS1x0hpSJOAR2SU%2BZlHhthfZ3DgDbanFt2QWpn%2Fa9XgI1JAf1NjeEB8y3VaCqcMNsr9fQ3bATPVP2%2FqDD3i8jJBjqkAestKcB0tyvhIiD93ke5QtzFxNyARiDlCwQQodE7vspbW57mUbCOBIXY3ZYsae%2FE5BkAwbYdaKZcF%2FkEtUdfhunnAJp8sFNc3MmpRsCsPnysWws1V25drRyR6QRM%2FRhCTP8ZkARAD2IuM9Kh8Zy30k0aCjXzjmlEbzkKXvl1TS%2Fwfw5yKb%2B%2FLqJvFuUkcayBF7Q%2FA%2B6BdAmkWLskyuc77Zm5eTfr&X-Amz-Signature=14244809f36dd74d7edaf5e40d1b29200328c9546c0f8cfae36120ea5f825c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
