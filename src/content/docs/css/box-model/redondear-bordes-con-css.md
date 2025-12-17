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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVUELXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANaMgB4M1R8vYRmSMLg0jHRirdzVRBx%2BlHs7aiGN5LAIhAPuFZbnvQP9U3Ga3MYLkwv1HPwx20mUG%2FZ9uoA6KStFVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxiLVYqIbebARffSXMq3AO5JiH7v%2F0Mf8T56Al8GclTuNxNmBdgnidM%2BOvmSJNY6yZv%2BuRdSwuqigN1IATtSDmlDeHfZk9FdnYMJcfLa3Ut9PY0kZI8yQ1mST4VreLAIdNTHbcnpHBtf8vmdn745RLpyue5WvsRVgP3BoNP9T3dshDm5SWEVPzpaw096BG91l1eyZO2zU%2BzcS20NBAX9DqZLlkmevPMUfShY70JOYtkwPYhkuARJjlKHIlJx6m9H1SFEP3VS%2FJOh9VahNuKPvdhrkyv%2Bf1driQAhZtqMw09iD55qXlkW7g4cLNxP5jKbqkcGUpallXmGXmIiRg11tNmd2V6wZKDcjQm2BrjyX2%2Bay91vHaYZX8nummjVxUiZfpSmGQ8i0YiNxrm5m%2FKj3J4qMPMAVDeLVcwlAr6sROhQ8w4BlNB6FywjovcMgLp0q%2BKTYcm1pZo1nWIIzIcnFrF8bEcmd0c4qkpyNWcJz10EOxP6WJXqevmM%2BDPyn44u4b41QQ%2FeOUFZs5%2F2MjuruPIuO8W8oPn7iTwnSMzU0yisLaoSEehF1rliIoiWjk7YVMIV%2FNIUbSC7LP5J6Prkt3ZBgdZ5Ve3ZE%2BIOvi2TkbfHboXvWoIR57Mqy6VRdQkDwkhi2MJ5DMrm08u7TDa6YjKBjqkAQM8Eg00gxfG2j7fTnL%2Bv7c%2F%2FTijCAy9oncgxGjM6FGWoeDnErmrY7VGQvxpBmvSfecQ65MvzuJj%2BL42%2Fs92z1rDYCEevsblHfg0U2nkw89QKI64n6Y4H5IOnIE88ncXkM68uPV%2FLBoaHnqEsSbe%2B6Q%2Fjxs4LFb3XQUFW1k1V0Zq40H0dG4m2GxhtARa0fm15CVIH2sOUydUnKlKWve6lbXzeiGl&X-Amz-Signature=60ef015c38b834b1e99d0318ef4daa8c8e7caa14374f14cd1a3a383e743cee4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVUELXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCANaMgB4M1R8vYRmSMLg0jHRirdzVRBx%2BlHs7aiGN5LAIhAPuFZbnvQP9U3Ga3MYLkwv1HPwx20mUG%2FZ9uoA6KStFVKv8DCHYQABoMNjM3NDIzMTgzODA1IgxiLVYqIbebARffSXMq3AO5JiH7v%2F0Mf8T56Al8GclTuNxNmBdgnidM%2BOvmSJNY6yZv%2BuRdSwuqigN1IATtSDmlDeHfZk9FdnYMJcfLa3Ut9PY0kZI8yQ1mST4VreLAIdNTHbcnpHBtf8vmdn745RLpyue5WvsRVgP3BoNP9T3dshDm5SWEVPzpaw096BG91l1eyZO2zU%2BzcS20NBAX9DqZLlkmevPMUfShY70JOYtkwPYhkuARJjlKHIlJx6m9H1SFEP3VS%2FJOh9VahNuKPvdhrkyv%2Bf1driQAhZtqMw09iD55qXlkW7g4cLNxP5jKbqkcGUpallXmGXmIiRg11tNmd2V6wZKDcjQm2BrjyX2%2Bay91vHaYZX8nummjVxUiZfpSmGQ8i0YiNxrm5m%2FKj3J4qMPMAVDeLVcwlAr6sROhQ8w4BlNB6FywjovcMgLp0q%2BKTYcm1pZo1nWIIzIcnFrF8bEcmd0c4qkpyNWcJz10EOxP6WJXqevmM%2BDPyn44u4b41QQ%2FeOUFZs5%2F2MjuruPIuO8W8oPn7iTwnSMzU0yisLaoSEehF1rliIoiWjk7YVMIV%2FNIUbSC7LP5J6Prkt3ZBgdZ5Ve3ZE%2BIOvi2TkbfHboXvWoIR57Mqy6VRdQkDwkhi2MJ5DMrm08u7TDa6YjKBjqkAQM8Eg00gxfG2j7fTnL%2Bv7c%2F%2FTijCAy9oncgxGjM6FGWoeDnErmrY7VGQvxpBmvSfecQ65MvzuJj%2BL42%2Fs92z1rDYCEevsblHfg0U2nkw89QKI64n6Y4H5IOnIE88ncXkM68uPV%2FLBoaHnqEsSbe%2B6Q%2Fjxs4LFb3XQUFW1k1V0Zq40H0dG4m2GxhtARa0fm15CVIH2sOUydUnKlKWve6lbXzeiGl&X-Amz-Signature=8eb5ab92caef3e7f9e292d8ff5cf4147cfafa0b71d25980c5ea6c3128e1a63c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
