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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ5ZVMWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDgzHenRoLEXhRwHQfmxR4%2BrV4psCdr3VJfjfiuk5LwwIhANlV5cR5M6V8fgQ59kEmOWsQq1HIIKHQ0BIgQa94PlWFKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrY1eJm%2FD9HPhzOmwq3APwKUSVbRctW8fVy7ymBOYw12Y12xHz9WutC4CkOWmY%2BHZU%2Byyux7DA1x%2F1UuyNI3vnAQLbscgf%2B%2B%2B5xzaJ8bL35k0l3C3Hbz8afIYnYUIdZ8giYzsIhUAfNs2x9CSoAXNeQ7IAzM9zBqVaJ1XS9TIg8ERiZIrw11fcsFlTLOXcUw%2BS7e054CTj3mbXvdNCJZd2vax1Ur6t72MCyjMvgrRrNicd19Ab4Na%2FxjIH8b0gEj2%2Bdef2KXQu18BxmP%2FZfVyuRmz2354MR9b6x9lad%2BKTEF5M3fTXQJIx%2BDOgqb2oZ3VLYRcNK5tYT%2Fhd9iPg9uGH%2BEWaddxAriMsbhJtG1bwdkSfun%2FIiD0mcv12koMuw36AolgvugFJ2O4TLSKYlAiya6Oh1I6O%2FNo%2FUgY648EAonWqlsOFOoXnc4HHJ%2BNMaYrx5n%2FSUEp%2BlJbQvnupEj9v6a9tZVmJObgdAnsR0idFS%2BCN3zHAAfVD0uKZUXV1%2BsqT3N8zeMWQqg4WEgtWqsA%2BsuCF0FhuTVmQrWNTYn0SbqujuV2qa3G0BNBSk8W%2BSYtt31z3ZZcNrRJoXMc%2B1o06laIAj1kiII1DnBoqdc14dVpAcJhOWAvFsZWJEBWGPSlXDxz6MYjOooxAiTC9gIvKBjqkATq%2Bff7RwpfJzjHNDg7rFfYgi8EPgPP0c06qdaqNr%2FNTza%2FTgm0ADKefkcjKcwCaP6yC%2ByCNWOWzW0xEGTESg0%2Bj4v1badIHA%2Fp6ISXTmUKqtwmoqkNeSZBuLEE7JtFnAhfmI7d5rF%2FoMc5mtyW2kUIDHrptPBTO5XlUHQPp3QRMLuj7CZvIdac8deIQOXYar962YSeZ3yRyZ14tD%2BFM0Hy%2FqpLr&X-Amz-Signature=c1784814636f85bddf3d22a425a45467b643bd4f7586dd286504eb992aca43b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ5ZVMWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDgzHenRoLEXhRwHQfmxR4%2BrV4psCdr3VJfjfiuk5LwwIhANlV5cR5M6V8fgQ59kEmOWsQq1HIIKHQ0BIgQa94PlWFKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrY1eJm%2FD9HPhzOmwq3APwKUSVbRctW8fVy7ymBOYw12Y12xHz9WutC4CkOWmY%2BHZU%2Byyux7DA1x%2F1UuyNI3vnAQLbscgf%2B%2B%2B5xzaJ8bL35k0l3C3Hbz8afIYnYUIdZ8giYzsIhUAfNs2x9CSoAXNeQ7IAzM9zBqVaJ1XS9TIg8ERiZIrw11fcsFlTLOXcUw%2BS7e054CTj3mbXvdNCJZd2vax1Ur6t72MCyjMvgrRrNicd19Ab4Na%2FxjIH8b0gEj2%2Bdef2KXQu18BxmP%2FZfVyuRmz2354MR9b6x9lad%2BKTEF5M3fTXQJIx%2BDOgqb2oZ3VLYRcNK5tYT%2Fhd9iPg9uGH%2BEWaddxAriMsbhJtG1bwdkSfun%2FIiD0mcv12koMuw36AolgvugFJ2O4TLSKYlAiya6Oh1I6O%2FNo%2FUgY648EAonWqlsOFOoXnc4HHJ%2BNMaYrx5n%2FSUEp%2BlJbQvnupEj9v6a9tZVmJObgdAnsR0idFS%2BCN3zHAAfVD0uKZUXV1%2BsqT3N8zeMWQqg4WEgtWqsA%2BsuCF0FhuTVmQrWNTYn0SbqujuV2qa3G0BNBSk8W%2BSYtt31z3ZZcNrRJoXMc%2B1o06laIAj1kiII1DnBoqdc14dVpAcJhOWAvFsZWJEBWGPSlXDxz6MYjOooxAiTC9gIvKBjqkATq%2Bff7RwpfJzjHNDg7rFfYgi8EPgPP0c06qdaqNr%2FNTza%2FTgm0ADKefkcjKcwCaP6yC%2ByCNWOWzW0xEGTESg0%2Bj4v1badIHA%2Fp6ISXTmUKqtwmoqkNeSZBuLEE7JtFnAhfmI7d5rF%2FoMc5mtyW2kUIDHrptPBTO5XlUHQPp3QRMLuj7CZvIdac8deIQOXYar962YSeZ3yRyZ14tD%2BFM0Hy%2FqpLr&X-Amz-Signature=2238b868279cd5482dabf429f40dbc6218c67f45af2954c7594c87319920863b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
