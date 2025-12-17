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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3CU2KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DeR8A2O%2BjJYREEB3kN1RkSaOZxqV0Zc674Sk2moEWAiByyi3Hbk8NKJzS58e%2FESiAUcoGZ25Xa0GWgUTDlGRP6Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2F%2F5PY3t44bSJCSjKtwDOhxCcU26r5Dh6H%2Bz7IlNoZwujZL1sSGOaaifI8eCjMF%2BDyZCwWit6dymZRrcH4wod8FJY3vB93nf41ZBBRCurfmmjqRAcOeaPMFXNVuD%2BoFePWG5ekuV1A0Rhkqc8K1iVL5EdS3faCz7u4O5PF3J0hoQhKmztsntTd38kFsR9MCpKw8gzKlbQyO508LkMUpN1MX%2FL64PHrtcRDrZ1q8ORyPn7d%2B4iI2n9AE0xR%2Fp3Hij3TgejzBy98q7aexomBNMxAsA7E9u4egfz0qBX%2Ft2J87t6zi%2BhiFm2XDVX5LMtZzCIlYdbhK8YUKJk54t9wACw%2B7BswsfmPbcGAyTM%2FXLDnxAai%2F9iJv4pam%2Fb6lxITJuueTfB72x3BFPkc9LHPMkbq%2Fhs6ccibhgcQy9xm7BQWB0CeKkXpTjJ4GXxfggD%2B8h0UkGy8iWxbVH9%2Bi2o3csVU6lOUzp74Kww%2FSoUjSed64%2FjKEbQvc4BArD8ZpWdSZ1btCCHMm9DJXQeke%2B1vi2hd2roULV5JJRfr2FPkwDtgUhbxKdH0KzorGQSefJ30DjV2H%2BGUjtOxSknUE1or3%2BtLqrbINPdc9Nl7%2B4jR%2BppSEYMxTRmdV5FOkhM0kCOwOZZLBa0ftb1I4X0SIwmNKJygY6pgEj4DvKXoQiEacRtLo46Q5BsH6BzTKpN8adiRkCcbQ2c8BHdhLRzyWYxcIC%2FUF61jlIS9XOcZjTLF333oBqHJ3RG8TV1hZvephoG%2BgE8s8uggF6lPWRi5PIrys5Yp52xqnbFPkb5LlCz2xAipFZloQ3GdVIfL8cMGKnqEUNIGA65musg4M%2FhMkjz%2B6b4dFgLTo1%2BjiGVI8XbEHb%2FLFPy%2BnLVCO0%2Bx0%2B&X-Amz-Signature=cacc470718b514e92db3833357039af50bf48df28f4c16b17b084bb86364f97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3CU2KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DeR8A2O%2BjJYREEB3kN1RkSaOZxqV0Zc674Sk2moEWAiByyi3Hbk8NKJzS58e%2FESiAUcoGZ25Xa0GWgUTDlGRP6Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2F%2F5PY3t44bSJCSjKtwDOhxCcU26r5Dh6H%2Bz7IlNoZwujZL1sSGOaaifI8eCjMF%2BDyZCwWit6dymZRrcH4wod8FJY3vB93nf41ZBBRCurfmmjqRAcOeaPMFXNVuD%2BoFePWG5ekuV1A0Rhkqc8K1iVL5EdS3faCz7u4O5PF3J0hoQhKmztsntTd38kFsR9MCpKw8gzKlbQyO508LkMUpN1MX%2FL64PHrtcRDrZ1q8ORyPn7d%2B4iI2n9AE0xR%2Fp3Hij3TgejzBy98q7aexomBNMxAsA7E9u4egfz0qBX%2Ft2J87t6zi%2BhiFm2XDVX5LMtZzCIlYdbhK8YUKJk54t9wACw%2B7BswsfmPbcGAyTM%2FXLDnxAai%2F9iJv4pam%2Fb6lxITJuueTfB72x3BFPkc9LHPMkbq%2Fhs6ccibhgcQy9xm7BQWB0CeKkXpTjJ4GXxfggD%2B8h0UkGy8iWxbVH9%2Bi2o3csVU6lOUzp74Kww%2FSoUjSed64%2FjKEbQvc4BArD8ZpWdSZ1btCCHMm9DJXQeke%2B1vi2hd2roULV5JJRfr2FPkwDtgUhbxKdH0KzorGQSefJ30DjV2H%2BGUjtOxSknUE1or3%2BtLqrbINPdc9Nl7%2B4jR%2BppSEYMxTRmdV5FOkhM0kCOwOZZLBa0ftb1I4X0SIwmNKJygY6pgEj4DvKXoQiEacRtLo46Q5BsH6BzTKpN8adiRkCcbQ2c8BHdhLRzyWYxcIC%2FUF61jlIS9XOcZjTLF333oBqHJ3RG8TV1hZvephoG%2BgE8s8uggF6lPWRi5PIrys5Yp52xqnbFPkb5LlCz2xAipFZloQ3GdVIfL8cMGKnqEUNIGA65musg4M%2FhMkjz%2B6b4dFgLTo1%2BjiGVI8XbEHb%2FLFPy%2BnLVCO0%2Bx0%2B&X-Amz-Signature=3aacdfeaf10aefc3d6d30e2850e8908be8953cedfecb9227f85aee5895a831da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
