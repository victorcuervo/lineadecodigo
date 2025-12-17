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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YM6IIO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCafYg8m3S3cZQKtRzXNi0cDLS4Dfr5aAXTbRPNfzsK%2FwIhAIJSRVeIn9kuNCFHnl7ptlf1AB6HMYeHfmF1yEyqCJOmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyBC1d4y2RM50Wgw0Aq3APqhzNAq%2Bj%2F4QkuHZc6UJnoeKOm5VemhD2IRYSer8MAcqi9sFcHcQ9a55ccTTJ4F9wqu%2F0HPTvJeppPI7wEdlXhUReFDMhLwixJokS0avAP%2FKXvP0bmS7eNpvSdiCEesC9V%2BhGRCwgk%2BqFdz3ofBDDmWCQUM04p8wi%2F4fyrrRvgOmbwZ1LfD3r%2Bw4eZU9bKZe2QLw5Qin9UCCEJsuf3tV9%2BdhLxsSUwU12EI4zT63JezraeaTYaqT2HM7tiPIG4DinZavDf%2F6Fx23UOE2ScH3SFP8GcLOAaD9D2iojhA5%2Bi%2BvBOe%2Fm7zkQRnBEyMDcJPZiqI7eNl4NFncTuL3GmRaW%2FK8bitmRKLVCTxPSLzB6ms1hJBo%2FdSXUxTtwsu3QwxlUoVkIn8dy0N61NCJVmGqFErmq619Dsgm2dX0K1iz6%2BkOvbYonkzUxwe0CLdoFYM%2FX%2FTC6qUY8y6I%2F3s%2FS16JJWhQ%2F5Hk%2BNlnaf7frCFfRXcgGtlKdi8xTkfyymo895ehrYt0DRRGqp3N%2FmuIazvqhWEth94LsrgoQsrkr5Fd%2FO7ocyvrojklvHxJIsGDzsdN75UK%2FX7rnm3JsnroumWdjYHhXk61d8mxGMqCpj5L4W%2FIGN4641hDLdLWxxOzCG6ojKBjqkAZP4Qkr2fv9TwYWwFvbpg59S9zPUh2dknBRpDOBQ4dTwjZ2m7erfFeD8EYs7%2BBHbzbUY1UlXiO%2BDtPL9%2FOiTVtjwXeQwJbbgcLrd4uKUttVecblRQ12tdViCl1OZRPJW3evhw9vHit3iKh5Dback%2FKhJb3Hg0mg4GFJ0Cq0yZ7bH%2FdsWrjhfLHZkEEQInFxQICNOGj5VGlurX8TwmgXKb4y73to0&X-Amz-Signature=718addd9e2ffef7b47f91186a85b43513e44df789b7b5501505f09a2073908e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YM6IIO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCafYg8m3S3cZQKtRzXNi0cDLS4Dfr5aAXTbRPNfzsK%2FwIhAIJSRVeIn9kuNCFHnl7ptlf1AB6HMYeHfmF1yEyqCJOmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyBC1d4y2RM50Wgw0Aq3APqhzNAq%2Bj%2F4QkuHZc6UJnoeKOm5VemhD2IRYSer8MAcqi9sFcHcQ9a55ccTTJ4F9wqu%2F0HPTvJeppPI7wEdlXhUReFDMhLwixJokS0avAP%2FKXvP0bmS7eNpvSdiCEesC9V%2BhGRCwgk%2BqFdz3ofBDDmWCQUM04p8wi%2F4fyrrRvgOmbwZ1LfD3r%2Bw4eZU9bKZe2QLw5Qin9UCCEJsuf3tV9%2BdhLxsSUwU12EI4zT63JezraeaTYaqT2HM7tiPIG4DinZavDf%2F6Fx23UOE2ScH3SFP8GcLOAaD9D2iojhA5%2Bi%2BvBOe%2Fm7zkQRnBEyMDcJPZiqI7eNl4NFncTuL3GmRaW%2FK8bitmRKLVCTxPSLzB6ms1hJBo%2FdSXUxTtwsu3QwxlUoVkIn8dy0N61NCJVmGqFErmq619Dsgm2dX0K1iz6%2BkOvbYonkzUxwe0CLdoFYM%2FX%2FTC6qUY8y6I%2F3s%2FS16JJWhQ%2F5Hk%2BNlnaf7frCFfRXcgGtlKdi8xTkfyymo895ehrYt0DRRGqp3N%2FmuIazvqhWEth94LsrgoQsrkr5Fd%2FO7ocyvrojklvHxJIsGDzsdN75UK%2FX7rnm3JsnroumWdjYHhXk61d8mxGMqCpj5L4W%2FIGN4641hDLdLWxxOzCG6ojKBjqkAZP4Qkr2fv9TwYWwFvbpg59S9zPUh2dknBRpDOBQ4dTwjZ2m7erfFeD8EYs7%2BBHbzbUY1UlXiO%2BDtPL9%2FOiTVtjwXeQwJbbgcLrd4uKUttVecblRQ12tdViCl1OZRPJW3evhw9vHit3iKh5Dback%2FKhJb3Hg0mg4GFJ0Cq0yZ7bH%2FdsWrjhfLHZkEEQInFxQICNOGj5VGlurX8TwmgXKb4y73to0&X-Amz-Signature=899b338a8c645b9c9aa143e460eeb02c8d66248b84819554de4f5693ac0064a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
