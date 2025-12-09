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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUCQJDI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8dtFx7XfXWITvPQlvrDEOkWcwJNGvmPoKRdf8RHDK4wIhAJxc%2BoTDLVNuQWx3eLOdyyryowZ0lOrnETtMETva7QkDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU4Ax526nskSlMcUQq3AMJUITD7e9Yo%2BkDkRzZj1bI%2FfiQuEAR4l5oGIjG%2BQE5aaY5csRbZOgcpbKZa8rI8xAus%2BEwBqPGC46I0EFPD9UoeUlhWxl9TNLKkac5%2B6a5E1B9cdl4n2ZYYYbIBJlaVGLR4wjXnYTuoc1yiILzMuZqU9WgN1hGJ6rnPz2UBjoDcwy4W07BqR0DLmJsRGPQep3GBDRO9C9hCJHVqBR4VBoZYHs2PAXkrSoFDKd6aGROv0DNXGPbDn0HNC7X5sSWN7oKafH1j8kmqbNf02BjwKhlNt9nVvBJOmUTTTresnnyfj3VFuYMrY4n9e8Xakvf%2BXUL2Qg3WIAgDxcDRWeHI6aEq6hs198n%2FHE7FPYDHqsFW5PjUsvdZLizP656ruB5iPyymnYw5chHc5vgSmcPPQoKSBZbwoUUxFp88BF9y%2B8IYveq5HqtPMm1Wv3icISOHDveBH9xI%2FpG8oz5MxGB3izWnB%2BpaoSMbYSQ6nNAggv7ua2xIKzXSeTwgfKGqXrfgcbrkgK4A6n88UcpcjHooNaenfCOItFhj4rVKbhcItFcgsC%2FJqkTuh1rAADNaGIYkH3D0gYArG%2FBe%2Fum5FkR%2BVoSUhbaCZl5xOdHQQUPfArH9%2BdKM09scXRYT2CD6DDn5N7JBjqkAU%2FhIELCypY5STYz5lb3LHFhsOSjp%2FGIGn7cal%2BLJ3dzkUaQOyunCrsRmjBBUqM2feFZNhADaxwH%2FHSPd%2BSmoRtjUM3FPV5D5dZJHqPToX%2FDwHrC%2BildQgZCQrscQH4%2FptkOzKarkVEW9ZRwWu5jtZjgVgRuE1toJ1rDAPFJ0YJq1RnE1bllTQ5dHKi9%2BeeGCTF6VWAmJoxKvTtVBfuG6j7cHbz0&X-Amz-Signature=6846c83a5fa28382b6670a83dc740b3ef48babb498b5e4d15ad606556ede5851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUCQJDI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8dtFx7XfXWITvPQlvrDEOkWcwJNGvmPoKRdf8RHDK4wIhAJxc%2BoTDLVNuQWx3eLOdyyryowZ0lOrnETtMETva7QkDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU4Ax526nskSlMcUQq3AMJUITD7e9Yo%2BkDkRzZj1bI%2FfiQuEAR4l5oGIjG%2BQE5aaY5csRbZOgcpbKZa8rI8xAus%2BEwBqPGC46I0EFPD9UoeUlhWxl9TNLKkac5%2B6a5E1B9cdl4n2ZYYYbIBJlaVGLR4wjXnYTuoc1yiILzMuZqU9WgN1hGJ6rnPz2UBjoDcwy4W07BqR0DLmJsRGPQep3GBDRO9C9hCJHVqBR4VBoZYHs2PAXkrSoFDKd6aGROv0DNXGPbDn0HNC7X5sSWN7oKafH1j8kmqbNf02BjwKhlNt9nVvBJOmUTTTresnnyfj3VFuYMrY4n9e8Xakvf%2BXUL2Qg3WIAgDxcDRWeHI6aEq6hs198n%2FHE7FPYDHqsFW5PjUsvdZLizP656ruB5iPyymnYw5chHc5vgSmcPPQoKSBZbwoUUxFp88BF9y%2B8IYveq5HqtPMm1Wv3icISOHDveBH9xI%2FpG8oz5MxGB3izWnB%2BpaoSMbYSQ6nNAggv7ua2xIKzXSeTwgfKGqXrfgcbrkgK4A6n88UcpcjHooNaenfCOItFhj4rVKbhcItFcgsC%2FJqkTuh1rAADNaGIYkH3D0gYArG%2FBe%2Fum5FkR%2BVoSUhbaCZl5xOdHQQUPfArH9%2BdKM09scXRYT2CD6DDn5N7JBjqkAU%2FhIELCypY5STYz5lb3LHFhsOSjp%2FGIGn7cal%2BLJ3dzkUaQOyunCrsRmjBBUqM2feFZNhADaxwH%2FHSPd%2BSmoRtjUM3FPV5D5dZJHqPToX%2FDwHrC%2BildQgZCQrscQH4%2FptkOzKarkVEW9ZRwWu5jtZjgVgRuE1toJ1rDAPFJ0YJq1RnE1bllTQ5dHKi9%2BeeGCTF6VWAmJoxKvTtVBfuG6j7cHbz0&X-Amz-Signature=2d6cddf451c92e1c7ded950779f133a4ac8f7fe8a000e8e9cb5fb368fe02d89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
