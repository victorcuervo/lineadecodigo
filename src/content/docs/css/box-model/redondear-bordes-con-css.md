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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG63MOZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFqnWzdAKUfdFmDYXnp8vY4OLIGQIvGZtRrb%2BXkbLmGAiA5i2GZJzKSlrRv0cCkVy3ujavovNMlOq8Ea%2FjlLg%2BbpCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwTJbA%2FC8EUAPack5KtwDKuGG6wyZi%2Fk7DhTv73rvE1lK%2Bs%2ByjZI%2FnPogkW3Qpi2TsQlF2vPwRD934aveOJuA0ITQ7WE6aDIpZRfnuNTFd76cIgjGbFSgCcHzoXQ7uaMYUxVwQwClS2Z3a%2BQjx%2FX7z17Bn64BRKcKaHsne00VS53PGj5zqBy5EOZSCw3Gf2zYrYv6buE5Epf28PhwBvO2SulxypcMwPDPo6w1l7vxACCF1BTR7eCXyZgHvx5zy%2BX3WFH2E%2BPUW7MEnWxijebZBtuzqBZ7G%2BWD3EnQuMqv4kgwqcY2NYoaMCZowcfYVStqqX8%2BKq5EYk6LhtbCUNkZecIjUoRnDiS1sDJ3NbmsVhU2m6272YWJxNVF9JBe%2BqFzgUKC3OJFItLsZCaQwmrHkss%2Bvz%2FEtObOHsLU5E9HH7qu9B966FzdKL9UuCg3ptwezC5lPvlFNCFGOIgpY3AJ80UuvTkXaXhvILag9LC5frh6RrezA%2FnOKzs2v9ab%2Bxn2at2m8OiTXjY57y2xuwtv%2BmsdyejIXLoiHxR%2FFmx4zF%2BuP0jEpEfinxDbpw8hWGWD0%2BMPfzl%2F5nudeyt1wtp8h8Msw%2FtLpEDdL15cDBLy0aAf86qOWDRndb%2FI8urJ4bPKBOCIE5Ho1tokerQw3KqKygY6pgH8sGTeJI7Ks%2BPgql%2Brs8HhuvQUv0WrrQ068z2wO%2Bx%2FSpteDd7bRsVYzCeWL1TfMYANK0qdOq5C0o%2FmhgPGMuUrbGEu4fxTua46zG2EfJRh5FbRLl8kTp0LRi6mUnRidKbVMzEFW%2BXvaulCiJTAQ1F0n4wbeQw%2BK89FMf71GFLZdcxYtETWMTa2Z%2BLB3ZNWP5NHm%2BwpUNx4DYYuXZFD3O38S16y%2BQSp&X-Amz-Signature=f8145c167d6f4a0ced4078f8312c7a1e126d0748108913da221d79fb2f7c6557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG63MOZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFqnWzdAKUfdFmDYXnp8vY4OLIGQIvGZtRrb%2BXkbLmGAiA5i2GZJzKSlrRv0cCkVy3ujavovNMlOq8Ea%2FjlLg%2BbpCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwTJbA%2FC8EUAPack5KtwDKuGG6wyZi%2Fk7DhTv73rvE1lK%2Bs%2ByjZI%2FnPogkW3Qpi2TsQlF2vPwRD934aveOJuA0ITQ7WE6aDIpZRfnuNTFd76cIgjGbFSgCcHzoXQ7uaMYUxVwQwClS2Z3a%2BQjx%2FX7z17Bn64BRKcKaHsne00VS53PGj5zqBy5EOZSCw3Gf2zYrYv6buE5Epf28PhwBvO2SulxypcMwPDPo6w1l7vxACCF1BTR7eCXyZgHvx5zy%2BX3WFH2E%2BPUW7MEnWxijebZBtuzqBZ7G%2BWD3EnQuMqv4kgwqcY2NYoaMCZowcfYVStqqX8%2BKq5EYk6LhtbCUNkZecIjUoRnDiS1sDJ3NbmsVhU2m6272YWJxNVF9JBe%2BqFzgUKC3OJFItLsZCaQwmrHkss%2Bvz%2FEtObOHsLU5E9HH7qu9B966FzdKL9UuCg3ptwezC5lPvlFNCFGOIgpY3AJ80UuvTkXaXhvILag9LC5frh6RrezA%2FnOKzs2v9ab%2Bxn2at2m8OiTXjY57y2xuwtv%2BmsdyejIXLoiHxR%2FFmx4zF%2BuP0jEpEfinxDbpw8hWGWD0%2BMPfzl%2F5nudeyt1wtp8h8Msw%2FtLpEDdL15cDBLy0aAf86qOWDRndb%2FI8urJ4bPKBOCIE5Ho1tokerQw3KqKygY6pgH8sGTeJI7Ks%2BPgql%2Brs8HhuvQUv0WrrQ068z2wO%2Bx%2FSpteDd7bRsVYzCeWL1TfMYANK0qdOq5C0o%2FmhgPGMuUrbGEu4fxTua46zG2EfJRh5FbRLl8kTp0LRi6mUnRidKbVMzEFW%2BXvaulCiJTAQ1F0n4wbeQw%2BK89FMf71GFLZdcxYtETWMTa2Z%2BLB3ZNWP5NHm%2BwpUNx4DYYuXZFD3O38S16y%2BQSp&X-Amz-Signature=3c4187a380044dc6ed812dc285c28f76ab49a242a9e3a6f3ae42dca1b5fae1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
