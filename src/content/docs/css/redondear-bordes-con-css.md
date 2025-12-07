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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7CJ7VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSe70A1TIsTQu%2FT1j67NpA5mRSdzB21IiJp4sNYfY%2B%2FAiEAjVXo8o9SPrwt4bBZae9YwDWAXudeY8Gw5hC9wJ9Mw6oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPAGFHJIHgSz6ATqCrcA53v9XIMXncRXbD3MT%2BaO820JIrBJBKqqiUpvKSLJIxB2rAzO1tdMUofUC4aDHKuu5IVtvnFEPwFoXuAj6LFx6d%2F%2BTPE7fVMIAWb709So%2BIhSao7lASahcH4TbyJBeUf6L08t%2B5e9vigkkAbKu5YcOOXBkap%2Fj%2FyMLxobro6fTZTSWyeH%2BdTcsSNk1u2Q7hA5fGoMYf4e6mT0oz1HwLS%2FIioOfUB1HtIVsp2%2B2LXRanQ2jIx7%2F0CSWUdRzjVr782r7gL3MwvhRM9%2BVTL88a0YzJnImIpbHyr2OXFsMdYLCFgkAhw2Fg9Ua%2FYcjafSxhx3bYUqMcimh6lIyE6W%2BBmSQDiG6gwvHovbhT5trhcljTY4UYwHEmT%2FEUEPQKEroDJR6j%2BpCTVA2t5mGXz9idO49dflos5PGHJzy3A7WnFc6t7igje8q8T1Pxu9MBbnyQ1vo07sfrNYYZwH2fuf2F8pBWzUqDTdWRJFPE2xdjyWTO8g%2BHbQI6B9iOyHHCjgJZpcWLN640R9AFMU6vwr9iR0G123vzOs3QbsP2xEkrQfrKXIfbg2ft5MWUk1vagWjgkkRNj8Ok%2F58r2dr1vimM7xhN7dzu0DKqE%2B4AslEyltVfQ1%2Bjo3u5h43XoolgHMNac1MkGOqUB%2FkZO%2BjRI%2BVbvdOzLy7hFqXdOkWXRSWCKBmSbU%2BHQbZ%2F1lrPYRtvB5s50fk7kboZtbVVnRfZK2G7UQQPk%2BhAGtKaZddqCGTdoiDhVqz4MvjlBuJz52xEACWiG88OAmAjbK41CLruJKyMY0RoXZcoi8YshVu3Xe%2FqUp2tsgCvbkb9ZnJRuwRKgqzMnRL%2BP6FoosTztpNLaozvxYjhbbQ8HurxkEjaU&X-Amz-Signature=a1d635adcfc9db4792d384d724b4bfb62655bf88aa2a74d121ff71534408c19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7CJ7VPY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSe70A1TIsTQu%2FT1j67NpA5mRSdzB21IiJp4sNYfY%2B%2FAiEAjVXo8o9SPrwt4bBZae9YwDWAXudeY8Gw5hC9wJ9Mw6oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPAGFHJIHgSz6ATqCrcA53v9XIMXncRXbD3MT%2BaO820JIrBJBKqqiUpvKSLJIxB2rAzO1tdMUofUC4aDHKuu5IVtvnFEPwFoXuAj6LFx6d%2F%2BTPE7fVMIAWb709So%2BIhSao7lASahcH4TbyJBeUf6L08t%2B5e9vigkkAbKu5YcOOXBkap%2Fj%2FyMLxobro6fTZTSWyeH%2BdTcsSNk1u2Q7hA5fGoMYf4e6mT0oz1HwLS%2FIioOfUB1HtIVsp2%2B2LXRanQ2jIx7%2F0CSWUdRzjVr782r7gL3MwvhRM9%2BVTL88a0YzJnImIpbHyr2OXFsMdYLCFgkAhw2Fg9Ua%2FYcjafSxhx3bYUqMcimh6lIyE6W%2BBmSQDiG6gwvHovbhT5trhcljTY4UYwHEmT%2FEUEPQKEroDJR6j%2BpCTVA2t5mGXz9idO49dflos5PGHJzy3A7WnFc6t7igje8q8T1Pxu9MBbnyQ1vo07sfrNYYZwH2fuf2F8pBWzUqDTdWRJFPE2xdjyWTO8g%2BHbQI6B9iOyHHCjgJZpcWLN640R9AFMU6vwr9iR0G123vzOs3QbsP2xEkrQfrKXIfbg2ft5MWUk1vagWjgkkRNj8Ok%2F58r2dr1vimM7xhN7dzu0DKqE%2B4AslEyltVfQ1%2Bjo3u5h43XoolgHMNac1MkGOqUB%2FkZO%2BjRI%2BVbvdOzLy7hFqXdOkWXRSWCKBmSbU%2BHQbZ%2F1lrPYRtvB5s50fk7kboZtbVVnRfZK2G7UQQPk%2BhAGtKaZddqCGTdoiDhVqz4MvjlBuJz52xEACWiG88OAmAjbK41CLruJKyMY0RoXZcoi8YshVu3Xe%2FqUp2tsgCvbkb9ZnJRuwRKgqzMnRL%2BP6FoosTztpNLaozvxYjhbbQ8HurxkEjaU&X-Amz-Signature=aad68ca1f256eb4b4d221fe7a060271e6792275b846f066f35b13ba2ffd5b3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
