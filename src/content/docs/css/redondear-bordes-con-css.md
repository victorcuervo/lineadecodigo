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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWDGCUA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHQs90keF3cGNgxYnLA%2FTAJLTi6v5WxBiZKiobmLdxYAiEAuPOyRqAtzYkzhYfqBEhHe4hUWcrqpG0xYGgOgJTYF1wqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KBsqjrBv%2FUKtDXircA8PgELiHrUjmwRZiXqyXZlFKCz1PizWWOacSRe3C4C5unrVzgjK7QnBiNpS6cIFW6M6bpLFqqD1N7GXf5iJAf4xTgLogulK6bLPEmSLaTyATYAYilLjCwgnSh7Zrr1EBnoH8sQDH3wcG4J7Bhl87Ax7KFeOLh8BXzXRh99Ax%2Brw6WwvbaqA1%2BhxDAlld9yGyjA1dPZ33Yi6PgUeBqxbHQwCxcsp0ypbKUTKDnX4fP6A61JZrZO4nWgY%2FxsZm%2Fqco5bsSgRhV5%2BOEAmmJ%2FQbYqAHVrwaaKqanpCStpBbzQ4RPAkLhiyD6upbp7vvACtJ%2B5Ek0EXjQG9GH%2Ftkpfhp7xxX6jlUmuQelGX1eEkqMZf%2F51m90vkmRE2wARU%2FDxRQG9R3ZClhpgd2x%2FHviXMI7sDIAvqMVIF5XevVHZqpCJY8VYs2vc9T7srZB3DIMK%2FImQc1e2oOACx52tC42hgTTtrw35bzYr9kbN8ScF%2BR%2BuBNIuxmtiREzLIRprAf2GL8YW%2FHXBe3%2Bo8bKP%2BB4UReWFwegI3Ppz0pfnB%2B2fC%2FzdcMz6R1mg09oSnGtj25FsK6pF7Aj2%2BOrhNAXmLfTzUiYjBH40iXhLqE3%2BvIGYtgLpZA5cEFMg9bPwjEbOfAqMPGt3skGOqUBA9C2MloHOk7BWTQI1xQWaNKITt7NYbekxQpzhnr7LbRD66yuGXk%2FxSmg1CGCk1FSg8t4Dp1bf9ukhUO00N9YUASrI12nl%2FMAieF7CiubL%2BVtTNL18APwnztx4bwrx85WvVC%2BnyUnht4B9bceIekJTbSCloGATpBCa%2B0zvXtgWeRU1pZWG48oK721kXKJBtEPxYxr1fMpZJVFySqOZy%2B07hXG2jeG&X-Amz-Signature=294e9554cc118785e9179b44c3cd4fe574e2ae0487628d1bca31b8155668b5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWDGCUA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHQs90keF3cGNgxYnLA%2FTAJLTi6v5WxBiZKiobmLdxYAiEAuPOyRqAtzYkzhYfqBEhHe4hUWcrqpG0xYGgOgJTYF1wqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KBsqjrBv%2FUKtDXircA8PgELiHrUjmwRZiXqyXZlFKCz1PizWWOacSRe3C4C5unrVzgjK7QnBiNpS6cIFW6M6bpLFqqD1N7GXf5iJAf4xTgLogulK6bLPEmSLaTyATYAYilLjCwgnSh7Zrr1EBnoH8sQDH3wcG4J7Bhl87Ax7KFeOLh8BXzXRh99Ax%2Brw6WwvbaqA1%2BhxDAlld9yGyjA1dPZ33Yi6PgUeBqxbHQwCxcsp0ypbKUTKDnX4fP6A61JZrZO4nWgY%2FxsZm%2Fqco5bsSgRhV5%2BOEAmmJ%2FQbYqAHVrwaaKqanpCStpBbzQ4RPAkLhiyD6upbp7vvACtJ%2B5Ek0EXjQG9GH%2Ftkpfhp7xxX6jlUmuQelGX1eEkqMZf%2F51m90vkmRE2wARU%2FDxRQG9R3ZClhpgd2x%2FHviXMI7sDIAvqMVIF5XevVHZqpCJY8VYs2vc9T7srZB3DIMK%2FImQc1e2oOACx52tC42hgTTtrw35bzYr9kbN8ScF%2BR%2BuBNIuxmtiREzLIRprAf2GL8YW%2FHXBe3%2Bo8bKP%2BB4UReWFwegI3Ppz0pfnB%2B2fC%2FzdcMz6R1mg09oSnGtj25FsK6pF7Aj2%2BOrhNAXmLfTzUiYjBH40iXhLqE3%2BvIGYtgLpZA5cEFMg9bPwjEbOfAqMPGt3skGOqUBA9C2MloHOk7BWTQI1xQWaNKITt7NYbekxQpzhnr7LbRD66yuGXk%2FxSmg1CGCk1FSg8t4Dp1bf9ukhUO00N9YUASrI12nl%2FMAieF7CiubL%2BVtTNL18APwnztx4bwrx85WvVC%2BnyUnht4B9bceIekJTbSCloGATpBCa%2B0zvXtgWeRU1pZWG48oK721kXKJBtEPxYxr1fMpZJVFySqOZy%2B07hXG2jeG&X-Amz-Signature=8ad31ca05eb5ec0a66efb4d91fb09f0044f49d0abc6b031290e51e8132a32483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
