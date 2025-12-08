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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATGBMT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjfUOuZG%2BUUQHri24l5%2BgYKxXlyKJcLImVrbfi1oeRgIgKonkKdDabSB4zTeKOvzs9NXCPDZY1DA%2FiXuhGfM7sdEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfmOjcLQWrWrTozaSrcA2ochbHF36RGAHzZyIST72VilQMChEn%2B36Ct8%2B7LJk3Dme5WhGLksfBp063kafwYoCBs8S5BcZUonCeVUc8LQiwG4Ru4UGQ0c7Up1rxy1xYVzTSDgwMxWJM7VyDOqPw3kBJ2wGjNh6%2B9UV5Dj3GMDU3z6B%2F32Q9KF5pbUE5agwZxNiqgTi3wklqz1u0g8QBgJaDL3xpeyFtcI8UCfx04jTuDTvB789IWFP11uYsJS812F5s3fcm0wrxwndj5OX4gx0%2FmiFUSYX%2B6VrZBOqT%2BcByVW%2FINzkt6mw0GyrovvjpIK8zyYovEI6xBEawrtNnLkTHUzt1cAleDytNC9jvgUefhlyttxs66YUhjc038dmHrqgtV9oCPL60OPkSMLbprnYFtmQ7QR3DnIq8jVYwviq%2Bko%2BpOZfzb5ByGPgxVgTjJsfx3nZpoYNL4X1RE7UjkRYzsYtwK2lGlSeKHyZVTZegVRuZcOCD55dv2P9inW3zEcSgLWy1mJd%2BWY15drVBjNVT9a%2FcGZ815feLEJJSBQ%2F0i%2FKz%2B2PB%2BK2ggQX0zBQywko9WmLb9V%2Fj7W7r66Cg1f7wipr%2BO7bbD%2B8qxnNCvdHWDu0hMWOF%2BD76XSoyhoyamJXWjiFXbVTrFJNdRMMSh3ckGOqUBD4z%2Fq%2Bu6KQVvXVNi2wqhkfPL2394k78bOhtmGy50rpu%2Fys7%2FBsc2WqA5rDgR3kV6CG1r0v1YXXR80s3K3YWr%2BzrdKPRoPGZAzehTECz1B5VXRbpzEfjgLtp9sRG1NKKwJa%2BsGzh9b2hfOGJIG2Wg%2Blh%2FP6JAKABEdFUzsTbLmCLg9MVMuE%2FSk3TDk5R8cTilY3tkLL8OC0Fyt%2FJB85U9q%2Fzjls9a&X-Amz-Signature=6e70f58585c48a2edd1bce63f753494926a26d578758f7942ee55958c189874b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATGBMT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjfUOuZG%2BUUQHri24l5%2BgYKxXlyKJcLImVrbfi1oeRgIgKonkKdDabSB4zTeKOvzs9NXCPDZY1DA%2FiXuhGfM7sdEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfmOjcLQWrWrTozaSrcA2ochbHF36RGAHzZyIST72VilQMChEn%2B36Ct8%2B7LJk3Dme5WhGLksfBp063kafwYoCBs8S5BcZUonCeVUc8LQiwG4Ru4UGQ0c7Up1rxy1xYVzTSDgwMxWJM7VyDOqPw3kBJ2wGjNh6%2B9UV5Dj3GMDU3z6B%2F32Q9KF5pbUE5agwZxNiqgTi3wklqz1u0g8QBgJaDL3xpeyFtcI8UCfx04jTuDTvB789IWFP11uYsJS812F5s3fcm0wrxwndj5OX4gx0%2FmiFUSYX%2B6VrZBOqT%2BcByVW%2FINzkt6mw0GyrovvjpIK8zyYovEI6xBEawrtNnLkTHUzt1cAleDytNC9jvgUefhlyttxs66YUhjc038dmHrqgtV9oCPL60OPkSMLbprnYFtmQ7QR3DnIq8jVYwviq%2Bko%2BpOZfzb5ByGPgxVgTjJsfx3nZpoYNL4X1RE7UjkRYzsYtwK2lGlSeKHyZVTZegVRuZcOCD55dv2P9inW3zEcSgLWy1mJd%2BWY15drVBjNVT9a%2FcGZ815feLEJJSBQ%2F0i%2FKz%2B2PB%2BK2ggQX0zBQywko9WmLb9V%2Fj7W7r66Cg1f7wipr%2BO7bbD%2B8qxnNCvdHWDu0hMWOF%2BD76XSoyhoyamJXWjiFXbVTrFJNdRMMSh3ckGOqUBD4z%2Fq%2Bu6KQVvXVNi2wqhkfPL2394k78bOhtmGy50rpu%2Fys7%2FBsc2WqA5rDgR3kV6CG1r0v1YXXR80s3K3YWr%2BzrdKPRoPGZAzehTECz1B5VXRbpzEfjgLtp9sRG1NKKwJa%2BsGzh9b2hfOGJIG2Wg%2Blh%2FP6JAKABEdFUzsTbLmCLg9MVMuE%2FSk3TDk5R8cTilY3tkLL8OC0Fyt%2FJB85U9q%2Fzjls9a&X-Amz-Signature=642a40b6bc92af1198028dc9369cba23b15bd3906b80deb061d097809466bf76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
