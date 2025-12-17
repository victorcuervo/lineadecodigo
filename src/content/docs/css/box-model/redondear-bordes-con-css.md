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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQHC66G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnt7VwlzDh0e3dyph5kVb3j%2B%2FQglVmxj5gfKnHdCM4JQIgGsB7kq8OwGp0cZna4I7dwMZPiZbk6C34r4GSYqZ6DPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBAlKEmC%2BMb4OwgN%2BSrcAxWPhOOIB2gRJ0Xh0za1Sn3lkTXK7PzAyqXddx7xa2WCUUkyDSFELYN2MxJT5IkN6dQdNxFb6SY5fgi3z8kSvGCu97j9MBQhTgsoBkVZnjln0pNioWFsyYH8dHMPIcy%2Bm2FrxqaWu5ATbvSph60vpCgR1cmcfx6Os%2FwITdyEIs4BwnpGs2xV6Aw%2FBdPsDxaX66Tk54M13vF4V7BO%2Bp1ySWeZ%2FcKJfHoeEWVm6MBQE0iWFE4wpDHbghUJc8LHeVPgi9gnKU%2Bn79drQuSeEPftzbWlo1ySt9nw71M5t8F3mTdXxLj%2FZcro7S3JKHMr2RAKo3Zwv90bs3YEO8gdvvY16SLQ3ZquBK4%2BMne9Nj72FVmoAPf%2BzJ0yOZ8ew5%2B3vEk%2FYmJRLMNILmEk5co6BiLqQHskTtr%2BMchLvT1RIfUUVrvHbje0z%2FsljteKCr5CHrd6ioXuYmRB0YcTdJYkciZC54JWzRl3TZXtXRGDoXD0%2FQOXGFAImVyvXqUO0bPKLjChv6wcbGmKJy0uGdeIRbDFQxyeA2fqhPh3SfrvqHZBtfXtBUNZDomtqV%2BRSe1sGRlM5W37aabR4xkOZPaKXsStifPXkntaVG0MsqVjcmuzgfpyFtVTUnjVt4NRCRHyMO2XiMoGOqUBZRvaOLJFUcmSYlcbWjV9g2I8Kq49UxKdifi0yXwYPqkclZ1zOdZoY%2BISNPZrPSOAy5PVnr6C5gL%2BPWeBkWF0YIvEvzSRjKA1hoNgJThEH%2BXocmpIt1ywvuP%2B9EjTk8UTHye3aHkdtk%2B7J%2FDfBAm7bfL7mlTuE5SFJVCj4opubsHsITWGCKdC%2Ff%2FGXsLche3%2Fs8%2Fg0Qiw0vipTVcLkNoKbk5e0HBr&X-Amz-Signature=ec10e3e3739afe4bdc0e8e8198e02e8e5edec9161c3afe4a3032230d4cea2b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQHC66G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnt7VwlzDh0e3dyph5kVb3j%2B%2FQglVmxj5gfKnHdCM4JQIgGsB7kq8OwGp0cZna4I7dwMZPiZbk6C34r4GSYqZ6DPEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBAlKEmC%2BMb4OwgN%2BSrcAxWPhOOIB2gRJ0Xh0za1Sn3lkTXK7PzAyqXddx7xa2WCUUkyDSFELYN2MxJT5IkN6dQdNxFb6SY5fgi3z8kSvGCu97j9MBQhTgsoBkVZnjln0pNioWFsyYH8dHMPIcy%2Bm2FrxqaWu5ATbvSph60vpCgR1cmcfx6Os%2FwITdyEIs4BwnpGs2xV6Aw%2FBdPsDxaX66Tk54M13vF4V7BO%2Bp1ySWeZ%2FcKJfHoeEWVm6MBQE0iWFE4wpDHbghUJc8LHeVPgi9gnKU%2Bn79drQuSeEPftzbWlo1ySt9nw71M5t8F3mTdXxLj%2FZcro7S3JKHMr2RAKo3Zwv90bs3YEO8gdvvY16SLQ3ZquBK4%2BMne9Nj72FVmoAPf%2BzJ0yOZ8ew5%2B3vEk%2FYmJRLMNILmEk5co6BiLqQHskTtr%2BMchLvT1RIfUUVrvHbje0z%2FsljteKCr5CHrd6ioXuYmRB0YcTdJYkciZC54JWzRl3TZXtXRGDoXD0%2FQOXGFAImVyvXqUO0bPKLjChv6wcbGmKJy0uGdeIRbDFQxyeA2fqhPh3SfrvqHZBtfXtBUNZDomtqV%2BRSe1sGRlM5W37aabR4xkOZPaKXsStifPXkntaVG0MsqVjcmuzgfpyFtVTUnjVt4NRCRHyMO2XiMoGOqUBZRvaOLJFUcmSYlcbWjV9g2I8Kq49UxKdifi0yXwYPqkclZ1zOdZoY%2BISNPZrPSOAy5PVnr6C5gL%2BPWeBkWF0YIvEvzSRjKA1hoNgJThEH%2BXocmpIt1ywvuP%2B9EjTk8UTHye3aHkdtk%2B7J%2FDfBAm7bfL7mlTuE5SFJVCj4opubsHsITWGCKdC%2Ff%2FGXsLche3%2Fs8%2Fg0Qiw0vipTVcLkNoKbk5e0HBr&X-Amz-Signature=f3eb6bf19546b30c3fd09d4d38bff3d5c82e2bb9d7682a47af8d7e7c0e54da94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
