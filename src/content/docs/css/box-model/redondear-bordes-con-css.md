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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJTIX7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKIBVmVIUnswoiR9NOE7tPlmQW997YkkB0i3%2BaZR%2F2MQIhAM5i5XKQQfySqmeoTouHvselEbtu%2FocX9Fx0zBhBEALaKv8DCHYQABoMNjM3NDIzMTgzODA1Igzc5SaJodtvmoEdd0Iq3AM7fWr%2F7gufYDqm8%2BECSm%2FJOzHN1yRVmp1dcxELnS2fY17bxC1xTgeXQCI7NRTROM0rcVL6%2FtIZiT5znlfUOcSCg5Pu4Ytu1U9zP7oGZ%2BZ3xYDI2jpZWD7zYeh8IBnLwCbNCmfv6xN0PtDWyN%2FV3nXQVCoiocJhxwRYx0D%2FeP%2BKwh3Ko%2FHhkc5XO4eoOM%2Btvzvk%2BvzCtBgLAr9pmG%2Bqb6K9UCeS2uSa1rwqfajhXrIVerp9Mm1ejt9gIRCntFkB44vgQXDHyOp8VdfvgR1hZpwdBJHU0vwxf2GOVBQm4boBL%2FdO0t7LCKw3%2BSaLsxKqV7S%2BGKyTdK6lT7UhOsED8GsRbs%2FGB7uAOg6U4F4z1dG3SLoENYre2Qy08l4sbzx0mQiaaLOnS3LczgG9ulD31rj4Tap%2BMmnfIdRnfAzD7rg9liBLeaDvXQjqsHTjHIvAfRD6du7IEmtN8I6SIUhdTBQCENRQjZOrIAumooVZwEE%2BZfxzLhC%2BiqhUdZBngZiVX3fpHeW%2FU%2F2KCj%2B1t1Pzb5tU11vpkMiQHVJESJqJMZgdHLP6s8z40rQ9O59RQmnJjP27fo7VOU5XaG3w2pVXGU8J3nrjJei84tQurFFgM3qNBPUX8jmtOhRPcL9ORjDu6YjKBjqkAT6EA%2Frb7bgpXxW4aq3iE78vLLBAVycnw6SWRBph22ARHnJo7Ky7WnYcLWyAQ7cvqW6eGOACVkoSODL6yyZ%2FTuiOidNrvXE3UYuwLFx%2FhAm50Dm8E%2FNhb8dZ7jfNTZc%2FqWMmoHgS%2Brx4acWMFeeDf3hs6HgRKmPZcz6B7%2B4QTg0BkD75WuypkonKM9lLPOQL%2FvEFAmgaP4i7vm%2BmZSPJwhwCGxDa&X-Amz-Signature=15af788369a0b87fed124aae1534d528b9df2df15ef82980f75eacfaecc72338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCJTIX7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKIBVmVIUnswoiR9NOE7tPlmQW997YkkB0i3%2BaZR%2F2MQIhAM5i5XKQQfySqmeoTouHvselEbtu%2FocX9Fx0zBhBEALaKv8DCHYQABoMNjM3NDIzMTgzODA1Igzc5SaJodtvmoEdd0Iq3AM7fWr%2F7gufYDqm8%2BECSm%2FJOzHN1yRVmp1dcxELnS2fY17bxC1xTgeXQCI7NRTROM0rcVL6%2FtIZiT5znlfUOcSCg5Pu4Ytu1U9zP7oGZ%2BZ3xYDI2jpZWD7zYeh8IBnLwCbNCmfv6xN0PtDWyN%2FV3nXQVCoiocJhxwRYx0D%2FeP%2BKwh3Ko%2FHhkc5XO4eoOM%2Btvzvk%2BvzCtBgLAr9pmG%2Bqb6K9UCeS2uSa1rwqfajhXrIVerp9Mm1ejt9gIRCntFkB44vgQXDHyOp8VdfvgR1hZpwdBJHU0vwxf2GOVBQm4boBL%2FdO0t7LCKw3%2BSaLsxKqV7S%2BGKyTdK6lT7UhOsED8GsRbs%2FGB7uAOg6U4F4z1dG3SLoENYre2Qy08l4sbzx0mQiaaLOnS3LczgG9ulD31rj4Tap%2BMmnfIdRnfAzD7rg9liBLeaDvXQjqsHTjHIvAfRD6du7IEmtN8I6SIUhdTBQCENRQjZOrIAumooVZwEE%2BZfxzLhC%2BiqhUdZBngZiVX3fpHeW%2FU%2F2KCj%2B1t1Pzb5tU11vpkMiQHVJESJqJMZgdHLP6s8z40rQ9O59RQmnJjP27fo7VOU5XaG3w2pVXGU8J3nrjJei84tQurFFgM3qNBPUX8jmtOhRPcL9ORjDu6YjKBjqkAT6EA%2Frb7bgpXxW4aq3iE78vLLBAVycnw6SWRBph22ARHnJo7Ky7WnYcLWyAQ7cvqW6eGOACVkoSODL6yyZ%2FTuiOidNrvXE3UYuwLFx%2FhAm50Dm8E%2FNhb8dZ7jfNTZc%2FqWMmoHgS%2Brx4acWMFeeDf3hs6HgRKmPZcz6B7%2B4QTg0BkD75WuypkonKM9lLPOQL%2FvEFAmgaP4i7vm%2BmZSPJwhwCGxDa&X-Amz-Signature=3612c2bcd6c0466a12c00edb4310abf729b0bc198afe82c1cedea3f9a647f293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
