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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNVFES%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDITlplJuG9n34p2%2FJ8d5eU%2B5sjLXrAFXQ5%2BZhq%2FtG%2FvwIhAM8WRokN4zEp0gYEyxhW2Cna%2BJR1OBVKZ8Y1M%2BN0wsqqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwjqiZD1P%2Bnul9gxA0q3AOTjy1sEpzAxMrf7NGjsGvTMoLkHJ%2Blnwpu17P9cE25o79LNG9fSrooX%2B0U6TW%2B8mpUhXr5Lew7C19dxqBDwiC1wM%2FmKw8pUfr0TX7WiD0Aejs0v8WB%2FSdwUjOCMq8b%2FVuP5glOy5UDHKhnZCV3t3I5Fm%2F%2FCA5CccWk4A88OQD%2F%2FCuvlQ1XeLKrtPqf5YI55rXR7rwXvZbT13Jto48gbBvYz8VZ%2FT01J8aBiCfJwDrS4c1hCJh5FEqvNzMHHbVXNTFcgM6ICaifJW5554GjNP5T4tkPm84gz3DpCcx2tZzsQo2OmjSf6b%2BVhUI8pOycE2m3JafOJ316rGRSc8QVWN%2BAiMZqibbBTKt48OLwZK4%2FxF5HewYcFxKM57rlYwAjmLFRl2vLj6RUxCIVqCBD09OO9w0hvPcEABBcF6bnfPIjJSmYPgPph1jowGIE4JfeQfAvjIiK2L9q7GJP%2FkKvCpA0bfy%2BNgUgahl7ETIUVfZ8ZD2TMIqW6lLkWnUUA6c4pXF4koZB9%2FySDIfZNlKax0GJBNlfMwhsRgnp7G8RscRf1boNOkHp9POca4tV6MfNGH7ORIs8qh7Mj%2FLuQS3C77nJT41iJsn9IiRaA8N5raVbrJpd3EH7IqJ6qCveajCJr8nJBjqkAR5WK5XNnjFSyWSKNaq14hMyzEUnoMrQbkROCAHhGgk7LDtWqZ56VuF%2FfaV4iMt3aqeOJ1d9MLXa%2BfxKeywy%2B3gDaJm7xkqjnOpW3Y58zGHDdhGGXe98UUeryYL7edfWUGMicAt%2BzDFg6BkSkiNcFVzGSE%2Bt9hM7Um2%2Bv8iM6oK0Ye8YQLIMFe2KgQCVfPk7rYEkNKmPioO9ko3lLqjKTv9p8Or6&X-Amz-Signature=fda98191e7374bcb0258c9cef8c055c3429663b8f0aff6dcafb66b651fafcc04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYMNVFES%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDITlplJuG9n34p2%2FJ8d5eU%2B5sjLXrAFXQ5%2BZhq%2FtG%2FvwIhAM8WRokN4zEp0gYEyxhW2Cna%2BJR1OBVKZ8Y1M%2BN0wsqqKv8DCFUQABoMNjM3NDIzMTgzODA1IgwjqiZD1P%2Bnul9gxA0q3AOTjy1sEpzAxMrf7NGjsGvTMoLkHJ%2Blnwpu17P9cE25o79LNG9fSrooX%2B0U6TW%2B8mpUhXr5Lew7C19dxqBDwiC1wM%2FmKw8pUfr0TX7WiD0Aejs0v8WB%2FSdwUjOCMq8b%2FVuP5glOy5UDHKhnZCV3t3I5Fm%2F%2FCA5CccWk4A88OQD%2F%2FCuvlQ1XeLKrtPqf5YI55rXR7rwXvZbT13Jto48gbBvYz8VZ%2FT01J8aBiCfJwDrS4c1hCJh5FEqvNzMHHbVXNTFcgM6ICaifJW5554GjNP5T4tkPm84gz3DpCcx2tZzsQo2OmjSf6b%2BVhUI8pOycE2m3JafOJ316rGRSc8QVWN%2BAiMZqibbBTKt48OLwZK4%2FxF5HewYcFxKM57rlYwAjmLFRl2vLj6RUxCIVqCBD09OO9w0hvPcEABBcF6bnfPIjJSmYPgPph1jowGIE4JfeQfAvjIiK2L9q7GJP%2FkKvCpA0bfy%2BNgUgahl7ETIUVfZ8ZD2TMIqW6lLkWnUUA6c4pXF4koZB9%2FySDIfZNlKax0GJBNlfMwhsRgnp7G8RscRf1boNOkHp9POca4tV6MfNGH7ORIs8qh7Mj%2FLuQS3C77nJT41iJsn9IiRaA8N5raVbrJpd3EH7IqJ6qCveajCJr8nJBjqkAR5WK5XNnjFSyWSKNaq14hMyzEUnoMrQbkROCAHhGgk7LDtWqZ56VuF%2FfaV4iMt3aqeOJ1d9MLXa%2BfxKeywy%2B3gDaJm7xkqjnOpW3Y58zGHDdhGGXe98UUeryYL7edfWUGMicAt%2BzDFg6BkSkiNcFVzGSE%2Bt9hM7Um2%2Bv8iM6oK0Ye8YQLIMFe2KgQCVfPk7rYEkNKmPioO9ko3lLqjKTv9p8Or6&X-Amz-Signature=0eef23fd8bdb07dce7774b266e4b18e942995e01a31d58df17c7917cf61461cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
