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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFXQAMV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWEMH4LZy3TM4GgWhcsuk8C63xPvONERwIXamHbIF8FgIgadYfEbIyq0RJcYWX%2FUofmOQsQQzdwHFm0j%2FAs6XQgfcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP14VB%2FMHc5KXzU%2B8CrcAyPih4vg6srlCUDxO1pzm9pE%2F7gEyegqrYphmHPQ2Xj6m06vJSYhmZ%2BfEVWpAvIuzMnfX%2BoTsLEybNS%2FhVShBO6kjbgEd8vP%2Fqg%2FsD91zoiTYSfRnJ7U%2FfaCi74V%2BNChU7CkFpY2%2BZHZlYNgQ8dAECreDba%2FKrkCHOaN2DHbFTbXqVXYFAVmZnSbLRn2lLWfJHzkpa%2BJ3ywBJwId1TLUxrYLN9Qxfr%2BNaPbd4P6eeQAdjGzwGCbaQBiHNH%2BNFBUEpc%2BPf54GkJL5vvL2lFEVkkbeOnxmRi0MTRkpWDPcszsVTPO3GVIZPlJmLTO1W9ipx7CjlkjnlN6qJAjscxJLOmOQ02uUusmW0m2PB549UOFBIirj8iYZR67g99jLRkBKBdSSl9lDNSTIFzlF%2Bqgd0Teh%2Bu8qoZpbBacfvwZ7bydsGMiMRkaGZgaCPgojBLwMZ69%2B%2BRT0sPD5ueJpplg81mZ81h3k7VTDRz71hcU0vIC82EdxuQ4mcmoQvvhfpE4DZ9JCiHfOe4%2BMmax4nrGhbRDM0tyujs0mkTQSfcjVnQD0IzQIo2WvPN5Bnk4Tbog%2FSHZK36xDBpYVou6zMx%2FJK3%2Bv2ZCZoFUovAdUIspql6et767uYshF3PxTqPiSMPqO3skGOqUBCc5uBxBrw4wsQsTDz8ongbuf57Eaq2K5qsLyIkGE4dGtks%2BUWlXjpGYPIFTXIXL557Nr%2B0pddf7vqTVzQFgAu%2B8SCV%2BfzFs%2FzJslP%2FoHfSpILnKzZ73DmH0UwPJrOzQmKZYekdSkZPao9IyTkRrUJiyZn6TCyLPD%2BJeWtXHaL6P3R0x2F5QK8kTfuYCAd95oUWQPTiJKhONAlFhs30O55m%2BfLmJ9&X-Amz-Signature=5196f147c0ba9b14a0c658c1c65daee3fac65583e2993064b3b1792ff6815c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFXQAMV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWEMH4LZy3TM4GgWhcsuk8C63xPvONERwIXamHbIF8FgIgadYfEbIyq0RJcYWX%2FUofmOQsQQzdwHFm0j%2FAs6XQgfcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP14VB%2FMHc5KXzU%2B8CrcAyPih4vg6srlCUDxO1pzm9pE%2F7gEyegqrYphmHPQ2Xj6m06vJSYhmZ%2BfEVWpAvIuzMnfX%2BoTsLEybNS%2FhVShBO6kjbgEd8vP%2Fqg%2FsD91zoiTYSfRnJ7U%2FfaCi74V%2BNChU7CkFpY2%2BZHZlYNgQ8dAECreDba%2FKrkCHOaN2DHbFTbXqVXYFAVmZnSbLRn2lLWfJHzkpa%2BJ3ywBJwId1TLUxrYLN9Qxfr%2BNaPbd4P6eeQAdjGzwGCbaQBiHNH%2BNFBUEpc%2BPf54GkJL5vvL2lFEVkkbeOnxmRi0MTRkpWDPcszsVTPO3GVIZPlJmLTO1W9ipx7CjlkjnlN6qJAjscxJLOmOQ02uUusmW0m2PB549UOFBIirj8iYZR67g99jLRkBKBdSSl9lDNSTIFzlF%2Bqgd0Teh%2Bu8qoZpbBacfvwZ7bydsGMiMRkaGZgaCPgojBLwMZ69%2B%2BRT0sPD5ueJpplg81mZ81h3k7VTDRz71hcU0vIC82EdxuQ4mcmoQvvhfpE4DZ9JCiHfOe4%2BMmax4nrGhbRDM0tyujs0mkTQSfcjVnQD0IzQIo2WvPN5Bnk4Tbog%2FSHZK36xDBpYVou6zMx%2FJK3%2Bv2ZCZoFUovAdUIspql6et767uYshF3PxTqPiSMPqO3skGOqUBCc5uBxBrw4wsQsTDz8ongbuf57Eaq2K5qsLyIkGE4dGtks%2BUWlXjpGYPIFTXIXL557Nr%2B0pddf7vqTVzQFgAu%2B8SCV%2BfzFs%2FzJslP%2FoHfSpILnKzZ73DmH0UwPJrOzQmKZYekdSkZPao9IyTkRrUJiyZn6TCyLPD%2BJeWtXHaL6P3R0x2F5QK8kTfuYCAd95oUWQPTiJKhONAlFhs30O55m%2BfLmJ9&X-Amz-Signature=4efb3f0657fcbc611f0787b88fef3bfcedeb0aea8b1b44896ef280682a694b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
