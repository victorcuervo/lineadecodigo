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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NG4ONTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtjNx1RNZJRl2A6kYdnYHFzSJzhu98JktUJ92bERW8%2FAiEA28pDubOUQSN8aZrbXkdobaiB3oJbR98eE6Ox0wY1ZYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtkJx0vXXhv1pWgyrcA7OTyI7kth9cpUtkuX0kuBJ%2F6KiIgM6HlEfK5%2BnQLbSwWXm7M3KMM%2BSQvv78TkyQ9wRH8rzr4Wes0qagxJvQFNd3A30m0WjbjVOr2vHO1CfAv619JRFN%2B0Q5vH%2BcQ2TxJNT%2BHqOu6mUqTtlL9HRfOfUoAVGIX%2FcnO5%2BNxXDFxsCz8EjztM3QkVvnzDDOtAV5wktbY5hK0DROvYt%2FY6H%2FJ64GtcNFerEKaYfQ0mXjra2txml0m9%2BAEfwgyS0rYD1%2FIGaOzp0bHAj33XbDqn%2B%2BaH6iNqEhOz%2FLYkJr7oGz5DPiDQOYCeT5Qd11JnloSk7u%2FLBcIRd4l2U7PGq0byV%2BeipPiZFaR3ArcvHaJ1uCDB3CHn2QUOtzucw3u1j2FQ454b1%2BPMbu1%2FgOSZ8Gezs%2BOyK8AKGxYUFdY%2BINzBAhXVVsG2ms3YwnKb53d%2Bx6jtQaFrONqDCMwd5yhBHUOlp60TOEbPVfitxSXKo1vgiw%2FTPkBNaKBgv5mlKh7gElK0fFjw8BHKtlOs9VoBiYI2pDLMOYnwN4e4sK1B5z1yIn0IgC4D7eS02i%2B9AAgIKdLVhWqwXkAhNpIzohcO3NjhTk29urxy6Zq0j0ibNF2CDJRQCo0ZFcvA12%2BiFZjErxMMGQ28kGOqUBd5dl9ClC8WKuCgpxGrrBAq1LJa%2Fv8M9ky%2BG0V0MwTOQerEseS%2BaHA8ZBHmLbBUz2AmS4acrjLi%2BtpFCssWMjgKmHIkwMoaJPjQz0tVlIAmuV7NsnGp667pIJRvwgybYuVDlz6wgmQf4BLqXFDhtXSec%2Byvbd9kMjHEeaOKTa4UphsYcnTvjC8oS7KjZjdMk%2FCbcZw3WRXtxTsIT2RGQ1ltCvfXKG&X-Amz-Signature=615f8182eec06f8fc4b181e17f792ed35810831e40a365d12737b0dd8c10a1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NG4ONTG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtjNx1RNZJRl2A6kYdnYHFzSJzhu98JktUJ92bERW8%2FAiEA28pDubOUQSN8aZrbXkdobaiB3oJbR98eE6Ox0wY1ZYAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPtkJx0vXXhv1pWgyrcA7OTyI7kth9cpUtkuX0kuBJ%2F6KiIgM6HlEfK5%2BnQLbSwWXm7M3KMM%2BSQvv78TkyQ9wRH8rzr4Wes0qagxJvQFNd3A30m0WjbjVOr2vHO1CfAv619JRFN%2B0Q5vH%2BcQ2TxJNT%2BHqOu6mUqTtlL9HRfOfUoAVGIX%2FcnO5%2BNxXDFxsCz8EjztM3QkVvnzDDOtAV5wktbY5hK0DROvYt%2FY6H%2FJ64GtcNFerEKaYfQ0mXjra2txml0m9%2BAEfwgyS0rYD1%2FIGaOzp0bHAj33XbDqn%2B%2BaH6iNqEhOz%2FLYkJr7oGz5DPiDQOYCeT5Qd11JnloSk7u%2FLBcIRd4l2U7PGq0byV%2BeipPiZFaR3ArcvHaJ1uCDB3CHn2QUOtzucw3u1j2FQ454b1%2BPMbu1%2FgOSZ8Gezs%2BOyK8AKGxYUFdY%2BINzBAhXVVsG2ms3YwnKb53d%2Bx6jtQaFrONqDCMwd5yhBHUOlp60TOEbPVfitxSXKo1vgiw%2FTPkBNaKBgv5mlKh7gElK0fFjw8BHKtlOs9VoBiYI2pDLMOYnwN4e4sK1B5z1yIn0IgC4D7eS02i%2B9AAgIKdLVhWqwXkAhNpIzohcO3NjhTk29urxy6Zq0j0ibNF2CDJRQCo0ZFcvA12%2BiFZjErxMMGQ28kGOqUBd5dl9ClC8WKuCgpxGrrBAq1LJa%2Fv8M9ky%2BG0V0MwTOQerEseS%2BaHA8ZBHmLbBUz2AmS4acrjLi%2BtpFCssWMjgKmHIkwMoaJPjQz0tVlIAmuV7NsnGp667pIJRvwgybYuVDlz6wgmQf4BLqXFDhtXSec%2Byvbd9kMjHEeaOKTa4UphsYcnTvjC8oS7KjZjdMk%2FCbcZw3WRXtxTsIT2RGQ1ltCvfXKG&X-Amz-Signature=68109c994916d6d44d56a4cfa27b4e7f6ce82baec5a298cdaa73408f0f0530dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
