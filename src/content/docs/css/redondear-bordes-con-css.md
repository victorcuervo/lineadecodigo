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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJ7EF2H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnFmiLkTh0c9HwpHqKUwAZQjQOpLz8wXNeUidv4Y%2F7qQIhAMURrPJyf%2B0CxN0VGQwmQraOKco2aMAcxDXBBUannA2jKv8DCGsQABoMNjM3NDIzMTgzODA1IgxukZjE7ecLIlwT9AQq3AMsDIyAv5TLAdx82AjE2nW2uQYLYdPTnKFlfaaen81zBxMFhdS%2Fa6vPbUsqHNkx2hojljmtGydMvd%2F3suqTXqE9mpVBaln%2BCdhep6OwI7zpAZjPMXetkNlHxyR5faCAxCk9DxTeYbsqJFohosVIOaLFMDRnnX5PqXj3pI5qixBPETozTUCktHVi1xfF7pOVY68MFKQVXh%2Flm4kEo7PPLcSDXPygq8sl0njwlRNXmVLDLGLEnqwZcLUK9RD2YHQkyrp0DhhHMlHaqsdof85chegSXpaXxTpD89a4jY4VSkJGagoEcKI565eRUWqtHgZEdmvO0R0wEOEdPN6suP9SfIoRjAnTDbKLh0PThUkNfNuLVvCPa4x5%2BDEu4GnU1xT4zX07tr312g1S8OxWJwFwH%2B13LWwZxM9GjzqggCkS%2BY4QMCJuwbrt8ZBN%2BjTtEzAzhWxsbnLFGUaqMYUfqnaYPDGh82Gm82rMZeWGUoCi2P9aSK22zicXJXB1FQWtOKUM5bWm94nOgQ7wZpBsR8S2EGiQ%2BTwEGxPzbZqW2IpjD3lbF7BR%2ByCMyZ1%2FBq7M7X%2B4RIz9fY55jp%2FMUlxAV7mBx0TbUMuSjo8kImXBvCiyMEZGxbDzIlkZnzj1MrblzTCTp87JBjqkAfVF%2FKGpQw7Xen2WX13UcecgG1FA9pQ9DfTaftpBMlt24KGQPubZldBFgCndVYT6A3EXD%2Fj%2FBlVctezQ5GyjdXMZGrPhG5jcXEL5eJ7G%2FgHfpA6FkmbEr09in9jtme2sI9UrGEvCVVnsLGVLqZS%2FpHA4Z%2FErJYxO%2BCZw0P%2Fy1LIBYuWcBXkRIVCR0O9RTrlEA11WnyM2zByeJhmDHix1SsS08XyY&X-Amz-Signature=fb24f6c7375e6614c3dc097669e0129c178f7ba465ec7f2d68b18d63c344efeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJ7EF2H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnFmiLkTh0c9HwpHqKUwAZQjQOpLz8wXNeUidv4Y%2F7qQIhAMURrPJyf%2B0CxN0VGQwmQraOKco2aMAcxDXBBUannA2jKv8DCGsQABoMNjM3NDIzMTgzODA1IgxukZjE7ecLIlwT9AQq3AMsDIyAv5TLAdx82AjE2nW2uQYLYdPTnKFlfaaen81zBxMFhdS%2Fa6vPbUsqHNkx2hojljmtGydMvd%2F3suqTXqE9mpVBaln%2BCdhep6OwI7zpAZjPMXetkNlHxyR5faCAxCk9DxTeYbsqJFohosVIOaLFMDRnnX5PqXj3pI5qixBPETozTUCktHVi1xfF7pOVY68MFKQVXh%2Flm4kEo7PPLcSDXPygq8sl0njwlRNXmVLDLGLEnqwZcLUK9RD2YHQkyrp0DhhHMlHaqsdof85chegSXpaXxTpD89a4jY4VSkJGagoEcKI565eRUWqtHgZEdmvO0R0wEOEdPN6suP9SfIoRjAnTDbKLh0PThUkNfNuLVvCPa4x5%2BDEu4GnU1xT4zX07tr312g1S8OxWJwFwH%2B13LWwZxM9GjzqggCkS%2BY4QMCJuwbrt8ZBN%2BjTtEzAzhWxsbnLFGUaqMYUfqnaYPDGh82Gm82rMZeWGUoCi2P9aSK22zicXJXB1FQWtOKUM5bWm94nOgQ7wZpBsR8S2EGiQ%2BTwEGxPzbZqW2IpjD3lbF7BR%2ByCMyZ1%2FBq7M7X%2B4RIz9fY55jp%2FMUlxAV7mBx0TbUMuSjo8kImXBvCiyMEZGxbDzIlkZnzj1MrblzTCTp87JBjqkAfVF%2FKGpQw7Xen2WX13UcecgG1FA9pQ9DfTaftpBMlt24KGQPubZldBFgCndVYT6A3EXD%2Fj%2FBlVctezQ5GyjdXMZGrPhG5jcXEL5eJ7G%2FgHfpA6FkmbEr09in9jtme2sI9UrGEvCVVnsLGVLqZS%2FpHA4Z%2FErJYxO%2BCZw0P%2Fy1LIBYuWcBXkRIVCR0O9RTrlEA11WnyM2zByeJhmDHix1SsS08XyY&X-Amz-Signature=7d7fd91beb98b40c6acbfabb46c281cad9edc01a622b2cc1214536d2d6985033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
