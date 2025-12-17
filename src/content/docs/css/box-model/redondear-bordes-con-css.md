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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZ5EY6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB2JEFyMSdcD%2B6Ahf%2FSJznAeU67STYcog%2FE8qLBvcX4AiEA3%2BZNdIfV7oYhLBnEyNESF3xqjfDRIXnaqjmNJJiGLoEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI%2FrvxgdJhRhl%2FNyOCrcA00KlgJlDJjQpUXne9TIsdF%2FqixW5znYJXVQNcjakx0KGrgGM8UGENydvFqFN5g3O2sA7IVP3qWN6%2BaS5tpnp3PXnV3r%2BbiE400UfxDL3mwFAB0ydRATEYf0Rk%2Fmh62eXise63v6%2Fu88ATCIy7P%2FQRGUDcsCRJM6mUlAyLPzg0Mn3%2FgaES7XjSL4%2BvmWIE2ARVr5eY154hINMklLWuBpDogWQ72lrNehIR0WkQJH%2FT4cmOSqRMqRM6NZporBWUvlGEhy%2BFMCtMQukKQF8bWs7P3eY8UN%2FtSymZFmkkDVa8e%2BHZkyPSzx1uGbu1ql64Xivnqsq367HhHskmU1NHWZgNMOJPtNV5Jt3UyVuZYPmgg9g308Y%2FrIzBPq5%2Bi4GYnQp2DOmojXsU7HAfOaFuuMWSE0FnOy47c%2FaMH%2FkCv6%2BnLazTJB12VrQV5y3Vn3N%2BAwAL4VpWa6bpLzebevawtZftVSyMKrjh5WOxsn1aNtk2UfuVQR0BovdC%2ByQ6XF%2Fk4suqj9Htaym7sFU40h8lnRpIOdRKJ63W4ASGmZbk962BnVdJSwLcGf1iOoSPj2k%2BzV7AV%2BWshABdwzJ69YzjtnIcirTRkPJgn2eBarUkBuv6iT4cXdxUyR3ahcQnUSMM6PisoGOqUBlT1f4l%2BYPcaUKv1QzQ0Ja%2B5guA%2B9Ie4ZP2WKnqChHLqxmQ%2F7t%2FMpC7hRJuuIuMRGn80%2BhTNiNZVSOeJ9BhpGdkj%2BWyylDMXkuUzvySys8t38J2wRSsugjxxmVemoeB0UsdFB2FwZClV%2BWKMWGU1UN6IVDmVgndryV%2Fj3KYPIakgnUn4p2R3T9FoVQsxWB%2B5pOp%2F1FEuQrUGTqyfktkTFmbwBJcSS&X-Amz-Signature=125de2e6559edfb4d03c37d11578cdee8f3a5be7511343eff9b441ec6fa258b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZ5EY6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB2JEFyMSdcD%2B6Ahf%2FSJznAeU67STYcog%2FE8qLBvcX4AiEA3%2BZNdIfV7oYhLBnEyNESF3xqjfDRIXnaqjmNJJiGLoEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI%2FrvxgdJhRhl%2FNyOCrcA00KlgJlDJjQpUXne9TIsdF%2FqixW5znYJXVQNcjakx0KGrgGM8UGENydvFqFN5g3O2sA7IVP3qWN6%2BaS5tpnp3PXnV3r%2BbiE400UfxDL3mwFAB0ydRATEYf0Rk%2Fmh62eXise63v6%2Fu88ATCIy7P%2FQRGUDcsCRJM6mUlAyLPzg0Mn3%2FgaES7XjSL4%2BvmWIE2ARVr5eY154hINMklLWuBpDogWQ72lrNehIR0WkQJH%2FT4cmOSqRMqRM6NZporBWUvlGEhy%2BFMCtMQukKQF8bWs7P3eY8UN%2FtSymZFmkkDVa8e%2BHZkyPSzx1uGbu1ql64Xivnqsq367HhHskmU1NHWZgNMOJPtNV5Jt3UyVuZYPmgg9g308Y%2FrIzBPq5%2Bi4GYnQp2DOmojXsU7HAfOaFuuMWSE0FnOy47c%2FaMH%2FkCv6%2BnLazTJB12VrQV5y3Vn3N%2BAwAL4VpWa6bpLzebevawtZftVSyMKrjh5WOxsn1aNtk2UfuVQR0BovdC%2ByQ6XF%2Fk4suqj9Htaym7sFU40h8lnRpIOdRKJ63W4ASGmZbk962BnVdJSwLcGf1iOoSPj2k%2BzV7AV%2BWshABdwzJ69YzjtnIcirTRkPJgn2eBarUkBuv6iT4cXdxUyR3ahcQnUSMM6PisoGOqUBlT1f4l%2BYPcaUKv1QzQ0Ja%2B5guA%2B9Ie4ZP2WKnqChHLqxmQ%2F7t%2FMpC7hRJuuIuMRGn80%2BhTNiNZVSOeJ9BhpGdkj%2BWyylDMXkuUzvySys8t38J2wRSsugjxxmVemoeB0UsdFB2FwZClV%2BWKMWGU1UN6IVDmVgndryV%2Fj3KYPIakgnUn4p2R3T9FoVQsxWB%2B5pOp%2F1FEuQrUGTqyfktkTFmbwBJcSS&X-Amz-Signature=7f2fafe3ef96dee7714b32760e0d9e0976166b77353c291f42ce5055de675bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
