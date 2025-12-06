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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFHHQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBslMGa4xagqy%2B6xshDAdYjel48iHoChPw9TJD%2BILJOwIhAMT1nL0NFMja%2BDaeh4%2FRzltxNbGJX%2F6%2FKGNp7e5xuCrDKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3AXgHKaSbiyBOrNAq3APS7IGdgPsbAXapUxD2PHOz2pxKqr8pep791B8i5QvY%2Fnh75HoEDWh0Y9%2B%2FSqLWyiKzLpo%2FcwbHaBQkICsZATurCVMCkFSyrHqPYG0Tkk7w5yAQXzAPoLotOVHps0MbVe09%2FIDeP%2BBnjNXtIl3nCjGv3kdPRiG70juxzR4yyun%2B2ZVd5quZMOL7XEL%2B0Z%2FagGREhBs%2B%2FCTh1S%2Bs1U1YexFCJrgc7PfAIrgQk1L2w88R6Cmvyr9ZgsmLJdoWwHa6lJ4MF9qRQP8i5YJJdP3F0tGFOKh4leSQQYbBPEBdFO4B8hbpFysIA5WnhTF3xiEGx%2F%2FEMJb5lUxBiqu%2FqAFflMGKsZOo4kQpYKOo8RblbX8h9vwQWndfb6pJm87AXOwxgZAndjXjhlU0cbPFI4OMOatVpmcN%2Fmn6hyMsTC9lra9vqqMNkJwanaAUF9f%2FFzdZTk0Vu6TMWi5cUEelusiF7Rb8ea5kCm0ZZWonrDLiaH3wKpusEa4P%2B8TyBt4yVVT5UifWtS2oMvmUjvoqFRjPBVx0bxcYn3JmmsaUz%2FteHRlexeuaxglzusrA1ghmFfFzE4uy8JrDRlNnr4J6MaHN0EP8CDPvS0nJj9tUzEMjSJeD3WYpeLYewmMkAWaYCjD1ptDJBjqkAZ3zb8w3fZWWIBBjT4LaVNc46MJzqBIBqgpJ6qRahon3Dbn2h3GG0Ofpb%2FQBKzgnvzS%2B8teO3VF5yRm0icGY5JQxz%2Bm%2FUL%2Ff3HKXFAB3UUyI7IzQXOdZ3vnrtN9UWqz5JnSrulttefjJccPs6k8q52EM%2BgXP8X%2BgLkGnVviC8pNw%2FsUEhF2A2dqoo7A7DYgfpunHWZX9Gg051AGPe6Ddlouhyr7A&X-Amz-Signature=4a6dbabe467b433dc7117e14ef65b83b793c24778fe515305faa75dc2cdaf206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFHHQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBslMGa4xagqy%2B6xshDAdYjel48iHoChPw9TJD%2BILJOwIhAMT1nL0NFMja%2BDaeh4%2FRzltxNbGJX%2F6%2FKGNp7e5xuCrDKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3AXgHKaSbiyBOrNAq3APS7IGdgPsbAXapUxD2PHOz2pxKqr8pep791B8i5QvY%2Fnh75HoEDWh0Y9%2B%2FSqLWyiKzLpo%2FcwbHaBQkICsZATurCVMCkFSyrHqPYG0Tkk7w5yAQXzAPoLotOVHps0MbVe09%2FIDeP%2BBnjNXtIl3nCjGv3kdPRiG70juxzR4yyun%2B2ZVd5quZMOL7XEL%2B0Z%2FagGREhBs%2B%2FCTh1S%2Bs1U1YexFCJrgc7PfAIrgQk1L2w88R6Cmvyr9ZgsmLJdoWwHa6lJ4MF9qRQP8i5YJJdP3F0tGFOKh4leSQQYbBPEBdFO4B8hbpFysIA5WnhTF3xiEGx%2F%2FEMJb5lUxBiqu%2FqAFflMGKsZOo4kQpYKOo8RblbX8h9vwQWndfb6pJm87AXOwxgZAndjXjhlU0cbPFI4OMOatVpmcN%2Fmn6hyMsTC9lra9vqqMNkJwanaAUF9f%2FFzdZTk0Vu6TMWi5cUEelusiF7Rb8ea5kCm0ZZWonrDLiaH3wKpusEa4P%2B8TyBt4yVVT5UifWtS2oMvmUjvoqFRjPBVx0bxcYn3JmmsaUz%2FteHRlexeuaxglzusrA1ghmFfFzE4uy8JrDRlNnr4J6MaHN0EP8CDPvS0nJj9tUzEMjSJeD3WYpeLYewmMkAWaYCjD1ptDJBjqkAZ3zb8w3fZWWIBBjT4LaVNc46MJzqBIBqgpJ6qRahon3Dbn2h3GG0Ofpb%2FQBKzgnvzS%2B8teO3VF5yRm0icGY5JQxz%2Bm%2FUL%2Ff3HKXFAB3UUyI7IzQXOdZ3vnrtN9UWqz5JnSrulttefjJccPs6k8q52EM%2BgXP8X%2BgLkGnVviC8pNw%2FsUEhF2A2dqoo7A7DYgfpunHWZX9Gg051AGPe6Ddlouhyr7A&X-Amz-Signature=79995c378d70f6b335cb96c674246de7904db8fe0e8de7518f76205728801bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
