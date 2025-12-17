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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP65LT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH3eaJwwMqy8viW45lYY7m8NzHXBAkb9%2BH4clHcvxbgIhAOrO9%2FZVNK5j6v2RfsGa6Dgwnp7PZDec8dQanMYADbaKKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8C6AURh%2FUSZCu3KAq3ANeL%2BAWb5l%2Fp4KxPhpHGZkXrDVtiO6bSYHh17yB57ryGyBt6RoyLsKfbLQHMG6ZNF0s3GFyJz1wd%2BZsLo4uyJ6%2Fk5MTCDZne99ldjdjndjajLbHty6ZEjA1ElDNZ97oL9MEjVaJJL29%2B8BC%2BB2HCY86ih8k53YhFwe8IHS7qqEJ5r1bUEZMzUyes8Pf913JBAUcP9D3o%2BAKL6vXK1r034ikAf%2BTo277Tol%2FoRUIoskp5mhqnyaAR7H3pLYPhOdv7JH29pNcminyopRabAGc2I%2BE7SGIPBqAijVV5svqtDS9qdnkYuovM9m%2BOLVaTdIfC05KB8MAWjDgpWY2EJbKVCxxWCeQOntmUyD1Di%2Fk7xrF2fr4F1OKqWwqcfpHaPbRLzRCMRDc3WSn2N3UD4u3YgsxKjAtRS%2B2o5xlN0EPnBQxPIf%2B18MHXSYn14wpild%2FISLKHiTk7oLg3rWrQjE4aYopSHVsTgQWiDNebf0jozcEQjlBzvzESeDC1kRWxzFcHL25YaEsFW1an%2BoNdWm9mixJ5A9NSAllfC2SWPtiVNDxviqEgrp24RB2xwwcK9JJcGYMmuXGuCzkKMigKTs%2Fz%2FwHHQbuEYc8tSEO2%2B%2FPfhS08WHzSXxaJDi4yNPK1DDPzojKBjqkAalegmMlkFs%2BaPoMJKNsVJ53%2FSmBvN9p6Xz0ij3dqpQ1taC1FAexKr7nNm5kb87XHK9m%2FFedzOn%2FpYbSXLqH%2FWXLBVIzlfkei3XXtSnp8uoxsSz%2FfGQpqsxXGkyCw6gPcjx%2BZzyyhJ98GSAX3eyT1yLzqCPHUVnxiTo6Tmsf601AtDsUDxn755xQA6iGqPkbwDKWnySLaBvtG3MHg36PyBw2OOEU&X-Amz-Signature=2239118bbbd440ac1ddf63b22c441b02589b90045eb914199061ae7abf4688a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCP65LT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH3eaJwwMqy8viW45lYY7m8NzHXBAkb9%2BH4clHcvxbgIhAOrO9%2FZVNK5j6v2RfsGa6Dgwnp7PZDec8dQanMYADbaKKv8DCHUQABoMNjM3NDIzMTgzODA1Igz8C6AURh%2FUSZCu3KAq3ANeL%2BAWb5l%2Fp4KxPhpHGZkXrDVtiO6bSYHh17yB57ryGyBt6RoyLsKfbLQHMG6ZNF0s3GFyJz1wd%2BZsLo4uyJ6%2Fk5MTCDZne99ldjdjndjajLbHty6ZEjA1ElDNZ97oL9MEjVaJJL29%2B8BC%2BB2HCY86ih8k53YhFwe8IHS7qqEJ5r1bUEZMzUyes8Pf913JBAUcP9D3o%2BAKL6vXK1r034ikAf%2BTo277Tol%2FoRUIoskp5mhqnyaAR7H3pLYPhOdv7JH29pNcminyopRabAGc2I%2BE7SGIPBqAijVV5svqtDS9qdnkYuovM9m%2BOLVaTdIfC05KB8MAWjDgpWY2EJbKVCxxWCeQOntmUyD1Di%2Fk7xrF2fr4F1OKqWwqcfpHaPbRLzRCMRDc3WSn2N3UD4u3YgsxKjAtRS%2B2o5xlN0EPnBQxPIf%2B18MHXSYn14wpild%2FISLKHiTk7oLg3rWrQjE4aYopSHVsTgQWiDNebf0jozcEQjlBzvzESeDC1kRWxzFcHL25YaEsFW1an%2BoNdWm9mixJ5A9NSAllfC2SWPtiVNDxviqEgrp24RB2xwwcK9JJcGYMmuXGuCzkKMigKTs%2Fz%2FwHHQbuEYc8tSEO2%2B%2FPfhS08WHzSXxaJDi4yNPK1DDPzojKBjqkAalegmMlkFs%2BaPoMJKNsVJ53%2FSmBvN9p6Xz0ij3dqpQ1taC1FAexKr7nNm5kb87XHK9m%2FFedzOn%2FpYbSXLqH%2FWXLBVIzlfkei3XXtSnp8uoxsSz%2FfGQpqsxXGkyCw6gPcjx%2BZzyyhJ98GSAX3eyT1yLzqCPHUVnxiTo6Tmsf601AtDsUDxn755xQA6iGqPkbwDKWnySLaBvtG3MHg36PyBw2OOEU&X-Amz-Signature=80c0d1f65a281ea93b6e42e5929d481a7d74abacdbf4e46264b7f58ea35b34f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
