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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHTZMBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7JhqDBUTMZCyzxocEnR8LSM12zH1VVSB6dgVd1Av65AiAeiXLHlULhWAgoEvnjVKxEL6b%2B1eGakuDJEafF%2Bo33tyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCW8vfgHOkxg880KiKtwDD78zgkJsH2LKmihNJBA1agSCbBwI%2FyFNc3U0XlmoHNwaFpSowNLz0sfTG9JQrT7%2FB8ICXFXTHcVm6xhEQV7JjceiSyFglPzkN4irdFneQEW8G2GrUbDsOgHL2sN%2FB3YZ7dlTQarwJ9BtU1sGagH8YY35Ra%2Fb5LPn5yfJVBW105%2ByVq69wj0CYV%2BM41W%2FodYTIjGsTK71K66jPyu4BTxL237FdYYmhRvyTdDcGz1e4tPk2WTbL3mxKB4qs4DZSI%2FtOmiX4KyWEpUP8rGacoPNJ1diH%2B5Mwqk6CGKbm6VC8yboksm%2FQlCOUw3Zsyi%2Bpxxz%2Fm3n0kbM42eemeho51h%2Faiehz8PB3XaosK59UhLNzJbaJiqs8X%2BLorUfeu%2FZ9374J863V3ksGhf2YEnlzZ9%2BrvsYnEoUPU4GuIuG12uOtPTL%2FOpMtWIi0rf54%2FOsfbNkhH9%2Fw8i74X5L07KY7wFtdxn823RsM5fXNqWn1MntLXC0XSutWX3ldo1JhxdRDSLVd15jMCAv9fFP6SZ3RfdGw%2Bxd%2FAI5u10QZaOw8gu192XYDFZRJoi9tqyprzK9zyekEvfTZF7YRbHEl7VVRnV3DWY%2Bsmd%2BfvpyO8180asTee1TbUvMsuYYfPwUHrEw586IygY6pgEjdbvRyuIincV5QzTy5Q0dEUbOfHLYLaCwqMmLA8QMe1GapnbugjJBE24qm1Z7tPexiQM6ULs3OB865eBkmylrlYHF4FqJzrpR%2FlNuaqpXgNGKaSVI701%2Fu1pGpre43AHSxlpcjY6wJdM7BqQZgyIZYf2BLLFZgk%2BhObWAtgKmUaOFSdp0BZfeA5eUVExDBZOawRqlN1XSzEgLX9vFLPkQtTW6V47I&X-Amz-Signature=a3298bc00dcd6fb78c4d82af4b7dd9731a2f6a8dd2341871637e7d74e13c5217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHTZMBX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7JhqDBUTMZCyzxocEnR8LSM12zH1VVSB6dgVd1Av65AiAeiXLHlULhWAgoEvnjVKxEL6b%2B1eGakuDJEafF%2Bo33tyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCW8vfgHOkxg880KiKtwDD78zgkJsH2LKmihNJBA1agSCbBwI%2FyFNc3U0XlmoHNwaFpSowNLz0sfTG9JQrT7%2FB8ICXFXTHcVm6xhEQV7JjceiSyFglPzkN4irdFneQEW8G2GrUbDsOgHL2sN%2FB3YZ7dlTQarwJ9BtU1sGagH8YY35Ra%2Fb5LPn5yfJVBW105%2ByVq69wj0CYV%2BM41W%2FodYTIjGsTK71K66jPyu4BTxL237FdYYmhRvyTdDcGz1e4tPk2WTbL3mxKB4qs4DZSI%2FtOmiX4KyWEpUP8rGacoPNJ1diH%2B5Mwqk6CGKbm6VC8yboksm%2FQlCOUw3Zsyi%2Bpxxz%2Fm3n0kbM42eemeho51h%2Faiehz8PB3XaosK59UhLNzJbaJiqs8X%2BLorUfeu%2FZ9374J863V3ksGhf2YEnlzZ9%2BrvsYnEoUPU4GuIuG12uOtPTL%2FOpMtWIi0rf54%2FOsfbNkhH9%2Fw8i74X5L07KY7wFtdxn823RsM5fXNqWn1MntLXC0XSutWX3ldo1JhxdRDSLVd15jMCAv9fFP6SZ3RfdGw%2Bxd%2FAI5u10QZaOw8gu192XYDFZRJoi9tqyprzK9zyekEvfTZF7YRbHEl7VVRnV3DWY%2Bsmd%2BfvpyO8180asTee1TbUvMsuYYfPwUHrEw586IygY6pgEjdbvRyuIincV5QzTy5Q0dEUbOfHLYLaCwqMmLA8QMe1GapnbugjJBE24qm1Z7tPexiQM6ULs3OB865eBkmylrlYHF4FqJzrpR%2FlNuaqpXgNGKaSVI701%2Fu1pGpre43AHSxlpcjY6wJdM7BqQZgyIZYf2BLLFZgk%2BhObWAtgKmUaOFSdp0BZfeA5eUVExDBZOawRqlN1XSzEgLX9vFLPkQtTW6V47I&X-Amz-Signature=c33de0230fe889b274cf9ac9a0c4c54b14450960ec52cc1dccf97aa4aba5731a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
