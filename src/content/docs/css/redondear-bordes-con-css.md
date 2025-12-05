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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIQ5M2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZW%2BhfkrOg%2FS1ErG5QGyiLzSsFsNiauWHoTAcgliKgzQIhAKxCrhTG0qiDYgs7W8Axg2u6tv90JHZaw%2BoTsS9VFBJbKv8DCGAQABoMNjM3NDIzMTgzODA1IgxQ8ja3ivvlblK%2FSzoq3AOMbrNxvyowG8sChbUtqutA5t5iC%2Fa8lCWKwhvRApRmccgDGwNmhHayV4T7U8m5NEVvGc7jvr%2BiuimYvNb8ibP8EF7M08vuLIn11iuWrE8N3Z0lKTQWBOxKy2XmuisNq%2BUS4D94f2%2B8%2BoXBnI3OZyN6A7%2BJXTrjfeIdlCV%2BfmmeCNXkTJMonMam%2FqXw9gXOuogbxO%2ByB%2BVq5hQp70fqwBQ%2FJ9%2B6BTRAGNjq7KZV9wsLV9JCgXEynga6iTQ4ms%2FaXMZ6lPJq4KXJOJc0mFWR9Z2ksalA5xBKwJrK2nBF6hJA53BjsS57wsImIH%2BR8hxwec5rkYyRIB1l7b%2BUv%2BcGEHB%2FWFJW0CpdWbs6otLl%2FsdL7IJLqbeVGqjyMnsJ5Oof7PaJAL%2BaAE1I%2FudvGdkMKnr0heM1t4yjozWYnTMQo2sprKKyscGmgVy9jSrTyMJZQVIpcwiR4f%2ByzDZVA3bmhss2Gm5Gaxr%2B35S4M%2BKChIOzitJIujY0NkYJ0HgFBCYlDE4q2vt75EZvpcpGlfxVTULIZy2YdH%2BLGvEccWw68PPiasBjO2TvT8M1e8%2B1tB7Ift2d2yQIQ7OAnOdkN%2FXOD%2FCRlwbCNQOlvegZqIBbcsxX%2FVZfDqG4bInLyVYGXDC%2F58vJBjqkAUlpU7YVbUo%2FKje%2B5Z9dUE4af83meYYWI%2F1%2FJbXtg3vNWADG64Z90JcAiP%2F1Cz%2BvIxtZmTEqTQPTmJiH2O0iXhL3jb0%2F9SeEc%2Fukq3qYCp6myxOKO990L4SrLDRUpMF2BJZSFI8vwUvQX6ih2mQsbiZx%2B5s84n%2ByIT9Wy3cNAaEkKTy1ud%2Blf70%2FHTivYwbtX04P4v16eCK7RpLI%2FOHC%2Bg5eQVqZ&X-Amz-Signature=f7c27e92e139afcebfa5848aa8c9b8a2d7358d2dc53cefd2e6c4eaca3bde2889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIQ5M2E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZW%2BhfkrOg%2FS1ErG5QGyiLzSsFsNiauWHoTAcgliKgzQIhAKxCrhTG0qiDYgs7W8Axg2u6tv90JHZaw%2BoTsS9VFBJbKv8DCGAQABoMNjM3NDIzMTgzODA1IgxQ8ja3ivvlblK%2FSzoq3AOMbrNxvyowG8sChbUtqutA5t5iC%2Fa8lCWKwhvRApRmccgDGwNmhHayV4T7U8m5NEVvGc7jvr%2BiuimYvNb8ibP8EF7M08vuLIn11iuWrE8N3Z0lKTQWBOxKy2XmuisNq%2BUS4D94f2%2B8%2BoXBnI3OZyN6A7%2BJXTrjfeIdlCV%2BfmmeCNXkTJMonMam%2FqXw9gXOuogbxO%2ByB%2BVq5hQp70fqwBQ%2FJ9%2B6BTRAGNjq7KZV9wsLV9JCgXEynga6iTQ4ms%2FaXMZ6lPJq4KXJOJc0mFWR9Z2ksalA5xBKwJrK2nBF6hJA53BjsS57wsImIH%2BR8hxwec5rkYyRIB1l7b%2BUv%2BcGEHB%2FWFJW0CpdWbs6otLl%2FsdL7IJLqbeVGqjyMnsJ5Oof7PaJAL%2BaAE1I%2FudvGdkMKnr0heM1t4yjozWYnTMQo2sprKKyscGmgVy9jSrTyMJZQVIpcwiR4f%2ByzDZVA3bmhss2Gm5Gaxr%2B35S4M%2BKChIOzitJIujY0NkYJ0HgFBCYlDE4q2vt75EZvpcpGlfxVTULIZy2YdH%2BLGvEccWw68PPiasBjO2TvT8M1e8%2B1tB7Ift2d2yQIQ7OAnOdkN%2FXOD%2FCRlwbCNQOlvegZqIBbcsxX%2FVZfDqG4bInLyVYGXDC%2F58vJBjqkAUlpU7YVbUo%2FKje%2B5Z9dUE4af83meYYWI%2F1%2FJbXtg3vNWADG64Z90JcAiP%2F1Cz%2BvIxtZmTEqTQPTmJiH2O0iXhL3jb0%2F9SeEc%2Fukq3qYCp6myxOKO990L4SrLDRUpMF2BJZSFI8vwUvQX6ih2mQsbiZx%2B5s84n%2ByIT9Wy3cNAaEkKTy1ud%2Blf70%2FHTivYwbtX04P4v16eCK7RpLI%2FOHC%2Bg5eQVqZ&X-Amz-Signature=2bb66b1a4eb63d74c5dfff21e46b8c8cda1018d32657ef8354c3e564622bb6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
