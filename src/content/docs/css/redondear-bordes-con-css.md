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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQDKEEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuWx8K0QGH4wTJVOcLr0EoGyWVZpow2Smk48qxJtZ4gIgas0bG5oVxug5S38XfStfvnLwHfBffwMoc%2B6rvp8lh9kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGN5WSkBHJHCKPLdnSrcA30d%2Bsg0xjvhxxcjIiTGQ4RPy6gEac1Wnh2CwN%2BgJXykd4DKdiby6i3s%2FTc3yFzlXbn%2FscuE5XNEsG2F3pFk8sO3KRSZ2amlSbe3kCQj3NCCsGu%2BGrJ3ZuX%2BWrDBV4zCaROcSMqBwWdtU6RQ7w%2Fdmc3xASxNSyyOhRAuZTZXmsg2fVGYwVyeWZWFjIiSkqzGKnbQpcyhXqbvhDZ1y6ueTT1wBPkdD%2BDU66TapDVO6ZJKa8vuEK2P5i2MCf2mJeGSTs090jxFFvnLcj263f5fPPbNTwi6EP54hSc1P1FmOiCXIqTFalodMzgY6L1q2eQXOkNf4X0Vp1aBT8Tz7y4KFQXlRev7kKjcNA5gMbNoTUwgEuyr%2FSWPKv1AdOLL6JoOu4OFz3tCK%2FEtux7BQULripP6e6OLmAkqn7jrFvtFUt5YOsftzexSQG0GVHJQEOkgizO91KSyEfLjWq7f4k43RiSgpjJfAuNyseCoTzqK0RLmwkEcx68MeWaMbn5LJ55tlZ0EreGRdfBUcfYwf5F9xiESdYNF4npG9i3E9k9YuL1ZjFP0xozS3atKjpT%2BLZUlisUWzJpPZWxq9vR7n62mckI5766gCht%2Fq2gy6zBTXkFMQb2bI4bk0c5V6XFnMI79zskGOqUBXHbYXZ6mdxiz6SJ6181GU61WwUbHcWPrxV%2B9XBONfsXTossIBJ4DpjQiXX%2Bgnj6MkB8ntBLDWH3xmN%2BpG3e%2F3ZZahCc7XgCFJ0rawNCslN8QOR%2BnugB7tE0XF0B0zG%2FVfJuIeDkdUlVLC7nAFbNWMy8Z6j4IshUGu1qsXGWTiAh5EBHWJOhZQppLuddw5aIW%2BG0B0UY%2BTuNO6VYejkfg91U4k3tw&X-Amz-Signature=1e664d0b0f66c29f88c6fc5a56e0597504f07da654119d52353adb555b518233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQDKEEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHuWx8K0QGH4wTJVOcLr0EoGyWVZpow2Smk48qxJtZ4gIgas0bG5oVxug5S38XfStfvnLwHfBffwMoc%2B6rvp8lh9kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGN5WSkBHJHCKPLdnSrcA30d%2Bsg0xjvhxxcjIiTGQ4RPy6gEac1Wnh2CwN%2BgJXykd4DKdiby6i3s%2FTc3yFzlXbn%2FscuE5XNEsG2F3pFk8sO3KRSZ2amlSbe3kCQj3NCCsGu%2BGrJ3ZuX%2BWrDBV4zCaROcSMqBwWdtU6RQ7w%2Fdmc3xASxNSyyOhRAuZTZXmsg2fVGYwVyeWZWFjIiSkqzGKnbQpcyhXqbvhDZ1y6ueTT1wBPkdD%2BDU66TapDVO6ZJKa8vuEK2P5i2MCf2mJeGSTs090jxFFvnLcj263f5fPPbNTwi6EP54hSc1P1FmOiCXIqTFalodMzgY6L1q2eQXOkNf4X0Vp1aBT8Tz7y4KFQXlRev7kKjcNA5gMbNoTUwgEuyr%2FSWPKv1AdOLL6JoOu4OFz3tCK%2FEtux7BQULripP6e6OLmAkqn7jrFvtFUt5YOsftzexSQG0GVHJQEOkgizO91KSyEfLjWq7f4k43RiSgpjJfAuNyseCoTzqK0RLmwkEcx68MeWaMbn5LJ55tlZ0EreGRdfBUcfYwf5F9xiESdYNF4npG9i3E9k9YuL1ZjFP0xozS3atKjpT%2BLZUlisUWzJpPZWxq9vR7n62mckI5766gCht%2Fq2gy6zBTXkFMQb2bI4bk0c5V6XFnMI79zskGOqUBXHbYXZ6mdxiz6SJ6181GU61WwUbHcWPrxV%2B9XBONfsXTossIBJ4DpjQiXX%2Bgnj6MkB8ntBLDWH3xmN%2BpG3e%2F3ZZahCc7XgCFJ0rawNCslN8QOR%2BnugB7tE0XF0B0zG%2FVfJuIeDkdUlVLC7nAFbNWMy8Z6j4IshUGu1qsXGWTiAh5EBHWJOhZQppLuddw5aIW%2BG0B0UY%2BTuNO6VYejkfg91U4k3tw&X-Amz-Signature=85c9a49a6e33ee887f9dd8bdc8861bff227a30ba2e4aa2a2d283e1486ebbea97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
