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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UMBM4D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT3TYe%2BnRiUykssIQcC4K3w9YlmG0AbpX6P2AkY9%2BQ1wIhANrEfh2IJ3GaB1zqZeOqTEKyQ%2Bi7eKJH4kQUnPAghy0%2FKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCqhN82ZRaJvqVIfwq3APaUccxJ09r0vBeHxIEmSK1RsOfg419XKkg81fCWQnEYCjJMgfQolhkUBBzkcWEWr7dhR3%2BpqjA6R7IjwoDQEmSFOjj0ntZeiwtXhPgvjwmu1LJZ5tvBrVt4%2FaSWCvEuUKvhjTWnsvriOqgEAT%2FyUtrdB8GrsAQqxAZa06kJP91qrq8WKLWlC6dMga%2BHYaw0OFuLrx%2FK7GNaay3qdGvEgg04VA2aphwtKOmHllTnjePuJaNZN7Zf0FUQ8ZBcoouz4eEZePiiTfRowwmrtdcR3DM51c52oNCPmGvBo1LgiNPiv1r4gnXe%2FATyzFL9G2yg0Wix4Icg0i4mVNglBS5FslI8cSSkzKTwENlCZLSZ8Q9ZUQwcIF3Grulh9nEEtFJAOUB6LfL1Hcdz5yBUwdQPvODDDFanGLBRpwP2bKL%2F9dogbH9VY79RuqhVF%2FZAP14MHAEcoQGyH6EB66SZ2fenEpfsgP%2BN0mMdTG5qXyLK%2BxB4J9XsDh3NK7nZZpph%2Fl%2FlE88JBjV13uiV%2B80UTkyhYpz3gov6HvWZb5N8jvgV0%2F776iYrAraWOeKLQDpohoi5y0UjCNT9gC7gD0P4V%2Brhqc8wwgxkJrhsQwIycD%2F6BOZgIxaITkQgGk9Q%2B1WyDC4gt3JBjqkAS4SWkxBzNVW7FE%2BNWA0mroC%2Fx5wlyNDftIA6w3fTMpYkH%2BVxVFqoBlouOCD6tl3WtoPbpoEp%2Bn0C4%2BWRz58slOXY8tSPQifvhEIiAq9rq0HCGBABzM0gi2kT%2BG6jq73xVtouGw7zxIEE42XlC51YOpN1B4Df%2BbSLifDdU00%2F5s15YBrNThFCbmY2IDs17G2NpejrkiTPSEv7k8vCGKTKA8euZvb&X-Amz-Signature=49032b8e25813f335dff903fdef4009441186631e3263d95c268d460fdb986ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UMBM4D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT3TYe%2BnRiUykssIQcC4K3w9YlmG0AbpX6P2AkY9%2BQ1wIhANrEfh2IJ3GaB1zqZeOqTEKyQ%2Bi7eKJH4kQUnPAghy0%2FKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCqhN82ZRaJvqVIfwq3APaUccxJ09r0vBeHxIEmSK1RsOfg419XKkg81fCWQnEYCjJMgfQolhkUBBzkcWEWr7dhR3%2BpqjA6R7IjwoDQEmSFOjj0ntZeiwtXhPgvjwmu1LJZ5tvBrVt4%2FaSWCvEuUKvhjTWnsvriOqgEAT%2FyUtrdB8GrsAQqxAZa06kJP91qrq8WKLWlC6dMga%2BHYaw0OFuLrx%2FK7GNaay3qdGvEgg04VA2aphwtKOmHllTnjePuJaNZN7Zf0FUQ8ZBcoouz4eEZePiiTfRowwmrtdcR3DM51c52oNCPmGvBo1LgiNPiv1r4gnXe%2FATyzFL9G2yg0Wix4Icg0i4mVNglBS5FslI8cSSkzKTwENlCZLSZ8Q9ZUQwcIF3Grulh9nEEtFJAOUB6LfL1Hcdz5yBUwdQPvODDDFanGLBRpwP2bKL%2F9dogbH9VY79RuqhVF%2FZAP14MHAEcoQGyH6EB66SZ2fenEpfsgP%2BN0mMdTG5qXyLK%2BxB4J9XsDh3NK7nZZpph%2Fl%2FlE88JBjV13uiV%2B80UTkyhYpz3gov6HvWZb5N8jvgV0%2F776iYrAraWOeKLQDpohoi5y0UjCNT9gC7gD0P4V%2Brhqc8wwgxkJrhsQwIycD%2F6BOZgIxaITkQgGk9Q%2B1WyDC4gt3JBjqkAS4SWkxBzNVW7FE%2BNWA0mroC%2Fx5wlyNDftIA6w3fTMpYkH%2BVxVFqoBlouOCD6tl3WtoPbpoEp%2Bn0C4%2BWRz58slOXY8tSPQifvhEIiAq9rq0HCGBABzM0gi2kT%2BG6jq73xVtouGw7zxIEE42XlC51YOpN1B4Df%2BbSLifDdU00%2F5s15YBrNThFCbmY2IDs17G2NpejrkiTPSEv7k8vCGKTKA8euZvb&X-Amz-Signature=dd2a3d1c27f8a2cd5fc7d8489a873c31447888101a645189b4a8cc0e24c029ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
