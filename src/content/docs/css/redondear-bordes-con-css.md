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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOVXV3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk9C5ymuaaIraJI6Ph8wwCguwqPd%2FwhjKVe9u0nFKTgAiEAuQ%2B%2FQ%2BmNxBb9WuF%2BsK0bQ7ko6G7bFK1RNzLfuVVpwMUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGm9Dr%2BtNrJNG3Y7wSrcAxmtMTQEZOAQ37eGO%2BROQGn7w57FTrWaX5T64zz%2B54DZUCG8X5xjThthmglxUsXXEuO1nASN%2BAl%2BqpZHebBffqYyoXoHyrtcNnZZybO%2F3frqiLaqxNC9kLwDe9DJ4XmwHRkfq18xEMsNLspmt18Ouaw817hgKjPwMF8ojTI0cV1IPHs8XUhe8qmP25cVxRXwEaSMgLayVQNjCsGeoTgunQ1kMNk8bM8VvnzgBmCGN%2FKa51%2B9JSbqUytM3%2FfGQJrta9ahW4SlUzIJvxFMqT4%2F9mGNqRrwCOEH%2Bl8lqWM692NKV6pmEm%2B0jRrG95HVqM7dt%2Fw9E7GJULVVGqmtyf9Hogyygw7Kg5Iu2eDqBEiFYSUE2zIjSf2oGjt3nG5ie7FP2jFaq7zWtvugRaL4zs9PhYjnDmIu70E9jy9pnyZXOEMHAdwEqC43wfxCdpcWPxf9KW4%2BrszrDSinEJukCjXwJ%2BBHeejoJnKgop%2Bknzu5Km5OCtuAspGwGAYiEv0V1XtVZrimQAfwX9Qau%2FVlKwdDier79McWGGX5J%2FNWGurzAIAdas8Cp%2FmJZoi2X6mibua1t31ZtnzHzMOUviXVPjhywPTaqKexzr1VG7xIaxD5XLDEzcgJG6BCMn73SUa4MIvUyskGOqUBL8fbSHk6wIYhRd6cQdxTKztdTHbmHkvH0IBDzAr2vCT%2BEN9N8%2FuMMHAb84EKTLrbtyTeEH%2BrqSFJ2NIcGv6c4hnULbhldHIvm2Ebng4a6mtb4YXVVwRCSHabK7qQK%2F8E%2B8pTyhxZzeXCuRoc4zTgyuDoDCv4ZFEFXxr9bpQ9YCy6zbGsgcRhOiPzf97i%2BiJDGZT6kmQ%2BW0h4HB7ceNKSDaSA8eAi&X-Amz-Signature=9ee4fc8f9942d1c5880e8f5d30efed53a5f7fccb1cee828ebcc10ae524b277c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOVXV3V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAk9C5ymuaaIraJI6Ph8wwCguwqPd%2FwhjKVe9u0nFKTgAiEAuQ%2B%2FQ%2BmNxBb9WuF%2BsK0bQ7ko6G7bFK1RNzLfuVVpwMUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGm9Dr%2BtNrJNG3Y7wSrcAxmtMTQEZOAQ37eGO%2BROQGn7w57FTrWaX5T64zz%2B54DZUCG8X5xjThthmglxUsXXEuO1nASN%2BAl%2BqpZHebBffqYyoXoHyrtcNnZZybO%2F3frqiLaqxNC9kLwDe9DJ4XmwHRkfq18xEMsNLspmt18Ouaw817hgKjPwMF8ojTI0cV1IPHs8XUhe8qmP25cVxRXwEaSMgLayVQNjCsGeoTgunQ1kMNk8bM8VvnzgBmCGN%2FKa51%2B9JSbqUytM3%2FfGQJrta9ahW4SlUzIJvxFMqT4%2F9mGNqRrwCOEH%2Bl8lqWM692NKV6pmEm%2B0jRrG95HVqM7dt%2Fw9E7GJULVVGqmtyf9Hogyygw7Kg5Iu2eDqBEiFYSUE2zIjSf2oGjt3nG5ie7FP2jFaq7zWtvugRaL4zs9PhYjnDmIu70E9jy9pnyZXOEMHAdwEqC43wfxCdpcWPxf9KW4%2BrszrDSinEJukCjXwJ%2BBHeejoJnKgop%2Bknzu5Km5OCtuAspGwGAYiEv0V1XtVZrimQAfwX9Qau%2FVlKwdDier79McWGGX5J%2FNWGurzAIAdas8Cp%2FmJZoi2X6mibua1t31ZtnzHzMOUviXVPjhywPTaqKexzr1VG7xIaxD5XLDEzcgJG6BCMn73SUa4MIvUyskGOqUBL8fbSHk6wIYhRd6cQdxTKztdTHbmHkvH0IBDzAr2vCT%2BEN9N8%2FuMMHAb84EKTLrbtyTeEH%2BrqSFJ2NIcGv6c4hnULbhldHIvm2Ebng4a6mtb4YXVVwRCSHabK7qQK%2F8E%2B8pTyhxZzeXCuRoc4zTgyuDoDCv4ZFEFXxr9bpQ9YCy6zbGsgcRhOiPzf97i%2BiJDGZT6kmQ%2BW0h4HB7ceNKSDaSA8eAi&X-Amz-Signature=b67964dbd51bee7038b5cdeb12e17f10071fa2a9d1926536ed0a346edb5f9817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
