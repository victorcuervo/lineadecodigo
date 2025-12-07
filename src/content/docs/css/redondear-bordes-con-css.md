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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PDXE2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCZHwGCrSzWROhuyqR1dZoM7FtHeIGgMlARRjyTtYY4QIhAKFqc%2BsvYEJmaqu2Q4JuiQ1Szb81CiWPSy2vga82ADb1KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6g3VvjW5KBFkJkFQq3APeyoiBqOD8fU%2F1HiClGfelBPVqkXpKoaCCsGeqerdSfy6FwkT5S923qPLwF5GcfPeMejxb0%2F1Ea2a9yKZ0DZR6nmT7VOPaXjiWrfj6Nz82pKs5DVlCpmwXJOqsuxvxP8Ec%2BZsmq1fA0AneaVYIn2MGhpa8qnvgtYX%2BGI7coFcJB0T6AsbMHYFE%2BbormwfjFhaqZvvSY57nSAjB%2FzLN8qVumcmNYKuf4fs3AElOZxep0jX15%2BCP7vbfgoESud5pL4aOC192TT214femh%2FGJTTTLLRIWFtvZzYhnU3M4B%2FoJzvEx50AZeqAWD7Fxax9aEdQBkLgQXmhs1xg3Vk8e%2BYR7GAw7apMpGJoQU%2BPH4O0dF9ZGTzAXLXkYitbZb3jPcqogV8y74OttVCL5vZxImJx9FOJK1k0ofAJ%2BwaGxiLxhWE4fwM9EanUBObUMcp3LxjHcH93wmXXJ3PpcgpgHbOhhBfBegcrkdZLNRC6DVKsllPE78uRQlgwdhBtRQLW5b5lxCgkrKljX6ki17UAC427ZfljB0vBqXWhCr4HGNEwhabE2%2Fmgxew%2FHb6256vjUw6SdIWmxthkBtHag%2FazQDJHes%2BS1FugQ0nhXuTM%2BiGivTKKhbG8i%2BlgIjzxekTD%2BqNfJBjqkAZNtLwWTg27ysgEHaLTT8GOCQBFMhGIG4LgZZVGpCimgxNNelE0B86%2FwhYKVSvuUIwlXuQPy1Lqt%2Fc%2FmDzbukWzR%2Fm%2BM4GgOwV0TVXKudbjGHushmVPXEX%2FiE1B3mlyxjo5CHjryas%2Br7aIxZ5bcRlIwmWKGaeKRZv%2BznWLHcY3Db6HRzyptCAgloGiVp%2FhdG7U2JZ8HZ%2BcTLgIY11oE3Q7YcK%2FD&X-Amz-Signature=45336272cd5ee2259ec4b9269eea8263c7ba66f48bd78b0a34bc2860bf3885d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3PDXE2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCZHwGCrSzWROhuyqR1dZoM7FtHeIGgMlARRjyTtYY4QIhAKFqc%2BsvYEJmaqu2Q4JuiQ1Szb81CiWPSy2vga82ADb1KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6g3VvjW5KBFkJkFQq3APeyoiBqOD8fU%2F1HiClGfelBPVqkXpKoaCCsGeqerdSfy6FwkT5S923qPLwF5GcfPeMejxb0%2F1Ea2a9yKZ0DZR6nmT7VOPaXjiWrfj6Nz82pKs5DVlCpmwXJOqsuxvxP8Ec%2BZsmq1fA0AneaVYIn2MGhpa8qnvgtYX%2BGI7coFcJB0T6AsbMHYFE%2BbormwfjFhaqZvvSY57nSAjB%2FzLN8qVumcmNYKuf4fs3AElOZxep0jX15%2BCP7vbfgoESud5pL4aOC192TT214femh%2FGJTTTLLRIWFtvZzYhnU3M4B%2FoJzvEx50AZeqAWD7Fxax9aEdQBkLgQXmhs1xg3Vk8e%2BYR7GAw7apMpGJoQU%2BPH4O0dF9ZGTzAXLXkYitbZb3jPcqogV8y74OttVCL5vZxImJx9FOJK1k0ofAJ%2BwaGxiLxhWE4fwM9EanUBObUMcp3LxjHcH93wmXXJ3PpcgpgHbOhhBfBegcrkdZLNRC6DVKsllPE78uRQlgwdhBtRQLW5b5lxCgkrKljX6ki17UAC427ZfljB0vBqXWhCr4HGNEwhabE2%2Fmgxew%2FHb6256vjUw6SdIWmxthkBtHag%2FazQDJHes%2BS1FugQ0nhXuTM%2BiGivTKKhbG8i%2BlgIjzxekTD%2BqNfJBjqkAZNtLwWTg27ysgEHaLTT8GOCQBFMhGIG4LgZZVGpCimgxNNelE0B86%2FwhYKVSvuUIwlXuQPy1Lqt%2Fc%2FmDzbukWzR%2Fm%2BM4GgOwV0TVXKudbjGHushmVPXEX%2FiE1B3mlyxjo5CHjryas%2Br7aIxZ5bcRlIwmWKGaeKRZv%2BznWLHcY3Db6HRzyptCAgloGiVp%2FhdG7U2JZ8HZ%2BcTLgIY11oE3Q7YcK%2FD&X-Amz-Signature=73e1016f84b87ebfda38f1fe0b76c710fa398603d3fd66e021edb595c7324596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
