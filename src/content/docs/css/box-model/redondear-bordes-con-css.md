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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4GT2UW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2G87m9Glt8dPAN3V38P4zT93pAN1A437lkKEenqzmSQIhAM0qUY1ALomPmnEqqu9dlTH2z5j0kOb%2Bd1W%2Bbc08M4UFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJozLI1uE11tMuPrUq3APgADp4cj39PkjVOrMoa7yP6CoF%2BYNdJgeIf9yhISwgjvyMRtXERu9eak2p2CvKMG%2BNKwWPFTTPcQ4H1SY%2Fz8MmfjDYh6OBvHt9NbKaK2zjaeR%2BNH%2FxgxZ9tURnOhdrmR7fWcW1syQZJXUioYDMfXC90n4Ti5VOjvzjzW812NmMZMN7zDq0I86p6nXauMmixzX6CJ4k%2BCoOjWiphK5WFdFmo1fK6boaqNBIWR3%2BF6P906HidxToTTTsmANND0wV3VDVO9QF%2FSx5RcITwLnK3mv%2BtarhaNnv2QdvIdBkZ%2BZZoy947B%2BedcAllP3mhDsXvZgb9El%2FZjIB1coBvjHErCpFEgrikkH705XlDYjMFuxY0IuASvzc9UJB8U306iZzYwabvGbq7unIa7rXvoGYjqbtDOdYlzcVtmXBeGPj8YqhSFWf8tV45de7gZxrkNMJMkcnkAycC%2FdSl4VYmUeeLtrtdRxRNKZSxWIn%2FYhko%2BAJOUlpPS8x2oQA9LvI7%2BL%2FQbduVyqI0Lumsy7SRWbPPEsvJAm3YKWVnccBFuZSeTQvanmSSXI3KZWiBeWfxZA6Txv5xF6yNm803YkV%2ByH6ZS%2FjPfGW%2Bg5Shcau9Liy6pcIrmENO0Q3l%2BFMrvq4IjDcrYzKBjqkAWbLPQZ1r%2BoonsLk7ZnIuE5TU9M287qgZTiQtw3RjI2Kt%2BNgPbqGRF94QOmW%2F1ezwByST6oCQU5FBU%2B%2BIT%2BWlkdQ65%2FhgaB3ugzX9n%2FTILSO5dB23o3xeK1K%2B%2FAHxvefc0brG6gachmWooH0eAfYUu8X77jf0FgBaHSh%2FqSkn8DIwHcphFsX0aj2ix660i4W64e0hq0VH4csH2KkJxASCmeIX093&X-Amz-Signature=6235c2c1e4244df28f3569e6500de904ff1f3635dce7639da1cbc23057b68c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X4GT2UW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2G87m9Glt8dPAN3V38P4zT93pAN1A437lkKEenqzmSQIhAM0qUY1ALomPmnEqqu9dlTH2z5j0kOb%2Bd1W%2Bbc08M4UFKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJozLI1uE11tMuPrUq3APgADp4cj39PkjVOrMoa7yP6CoF%2BYNdJgeIf9yhISwgjvyMRtXERu9eak2p2CvKMG%2BNKwWPFTTPcQ4H1SY%2Fz8MmfjDYh6OBvHt9NbKaK2zjaeR%2BNH%2FxgxZ9tURnOhdrmR7fWcW1syQZJXUioYDMfXC90n4Ti5VOjvzjzW812NmMZMN7zDq0I86p6nXauMmixzX6CJ4k%2BCoOjWiphK5WFdFmo1fK6boaqNBIWR3%2BF6P906HidxToTTTsmANND0wV3VDVO9QF%2FSx5RcITwLnK3mv%2BtarhaNnv2QdvIdBkZ%2BZZoy947B%2BedcAllP3mhDsXvZgb9El%2FZjIB1coBvjHErCpFEgrikkH705XlDYjMFuxY0IuASvzc9UJB8U306iZzYwabvGbq7unIa7rXvoGYjqbtDOdYlzcVtmXBeGPj8YqhSFWf8tV45de7gZxrkNMJMkcnkAycC%2FdSl4VYmUeeLtrtdRxRNKZSxWIn%2FYhko%2BAJOUlpPS8x2oQA9LvI7%2BL%2FQbduVyqI0Lumsy7SRWbPPEsvJAm3YKWVnccBFuZSeTQvanmSSXI3KZWiBeWfxZA6Txv5xF6yNm803YkV%2ByH6ZS%2FjPfGW%2Bg5Shcau9Liy6pcIrmENO0Q3l%2BFMrvq4IjDcrYzKBjqkAWbLPQZ1r%2BoonsLk7ZnIuE5TU9M287qgZTiQtw3RjI2Kt%2BNgPbqGRF94QOmW%2F1ezwByST6oCQU5FBU%2B%2BIT%2BWlkdQ65%2FhgaB3ugzX9n%2FTILSO5dB23o3xeK1K%2B%2FAHxvefc0brG6gachmWooH0eAfYUu8X77jf0FgBaHSh%2FqSkn8DIwHcphFsX0aj2ix660i4W64e0hq0VH4csH2KkJxASCmeIX093&X-Amz-Signature=c1257e8191b3afcf943ca749365067d547797b99eb74a358b37b52999e7cf709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
