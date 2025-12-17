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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXQ7ZHD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJbe7N18TVvA7SJR158v6LuBED8Qb9ui01MLux8m33AIhAIma6%2FJO%2BgDuSBvSt3CxVO25otWs5T%2ByIBfpVUtv4IlCKv8DCH8QABoMNjM3NDIzMTgzODA1IgxMUnRt9NT%2BsBdz5bgq3AMb60pzHTm%2B7OmEmyGEpeiX80ofTRYn3YJ1a526KHPikDNRMZZ8nMJUlXg0GjYvjjRMIKXNQSnHlfb%2FQc9adDtvH%2FNZuOhrxHDkM8yHB4GClPbg4DjTkctu5mc%2BKrOv7tkAhaNxMW3F5QLO8DS5LUPtdk63a476HXXkSNEsCYQ6FnFlcUasua6peCHtVXCfyOrn9EF7FdGT7ojiUxDcqv9a6wSa2jPp3rPi%2FWPz6R9Ys43KDO97dofmzbFA715KJ71UtlryWhpIobLbEDn3WxHdyb98BajGLll76OFuSyPnfE1%2BJZFGQttvUT6o%2BNTRB9i1q49TbHEbPUHweyaxxTUwhONTL%2FprzVuOHeRmGE4X9PsDkl3lDpwD%2FP34IUMZqs%2BiCrqH%2FeMi8wgaNq%2FogmvAuoFqoBU32s6fpPQt9U1vTwN%2Fv05LZiKB7euziDjtYurlXILb7KTMY8DwXEgHKHXlZGp5BkWsn0RFfHaxOQZEYnEjhhyKzh%2Fq6S8tOZ6yI1qnJxLbsnnZFPvpnQD9ylz9%2FD2KVXYgm70wF6VJXJEWJaK98w0nNnjiLGXTbSRQejL%2B0IsUMp0eNnXvRZadDBjaeVmnk2d9lvZr%2FiE%2FBFCI4yFz%2BclLl3gkOQ4RuzDm4YrKBjqkAaK1LP%2Bl9UeU%2BGbLyuL6XCkc%2BSkcBxrdqkDmQhYLCKYuZYP6%2BU0wE4plgfW2XwJq%2BUdIFtnS8jyJL5A6Sr8ADsWqtzqRCgVvnJ04JtTlsWt%2FWSviImjYIq5luspAS%2FtCuHa9khvhUg%2Fcj%2FkGhqV8ki1y31znrSETupkyWVzdM%2F5pMPlfUwPhhXJj%2FcZbolPgHtYRWAgTWoUrSDMO8BtVKtbmsd1N&X-Amz-Signature=15e36a283bfe911e4f453f89de1c14533ded89642252724dbdac5fd93f253fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXQ7ZHD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTJbe7N18TVvA7SJR158v6LuBED8Qb9ui01MLux8m33AIhAIma6%2FJO%2BgDuSBvSt3CxVO25otWs5T%2ByIBfpVUtv4IlCKv8DCH8QABoMNjM3NDIzMTgzODA1IgxMUnRt9NT%2BsBdz5bgq3AMb60pzHTm%2B7OmEmyGEpeiX80ofTRYn3YJ1a526KHPikDNRMZZ8nMJUlXg0GjYvjjRMIKXNQSnHlfb%2FQc9adDtvH%2FNZuOhrxHDkM8yHB4GClPbg4DjTkctu5mc%2BKrOv7tkAhaNxMW3F5QLO8DS5LUPtdk63a476HXXkSNEsCYQ6FnFlcUasua6peCHtVXCfyOrn9EF7FdGT7ojiUxDcqv9a6wSa2jPp3rPi%2FWPz6R9Ys43KDO97dofmzbFA715KJ71UtlryWhpIobLbEDn3WxHdyb98BajGLll76OFuSyPnfE1%2BJZFGQttvUT6o%2BNTRB9i1q49TbHEbPUHweyaxxTUwhONTL%2FprzVuOHeRmGE4X9PsDkl3lDpwD%2FP34IUMZqs%2BiCrqH%2FeMi8wgaNq%2FogmvAuoFqoBU32s6fpPQt9U1vTwN%2Fv05LZiKB7euziDjtYurlXILb7KTMY8DwXEgHKHXlZGp5BkWsn0RFfHaxOQZEYnEjhhyKzh%2Fq6S8tOZ6yI1qnJxLbsnnZFPvpnQD9ylz9%2FD2KVXYgm70wF6VJXJEWJaK98w0nNnjiLGXTbSRQejL%2B0IsUMp0eNnXvRZadDBjaeVmnk2d9lvZr%2FiE%2FBFCI4yFz%2BclLl3gkOQ4RuzDm4YrKBjqkAaK1LP%2Bl9UeU%2BGbLyuL6XCkc%2BSkcBxrdqkDmQhYLCKYuZYP6%2BU0wE4plgfW2XwJq%2BUdIFtnS8jyJL5A6Sr8ADsWqtzqRCgVvnJ04JtTlsWt%2FWSviImjYIq5luspAS%2FtCuHa9khvhUg%2Fcj%2FkGhqV8ki1y31znrSETupkyWVzdM%2F5pMPlfUwPhhXJj%2FcZbolPgHtYRWAgTWoUrSDMO8BtVKtbmsd1N&X-Amz-Signature=2a5d5f593585ccf0c1276e2bb7b5fdcf46ac1eca150099976c9a25d12f528169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
