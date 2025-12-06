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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXRABSCM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVJhPM5T59FlvgIPn8yWwTYGFVijoDMm1%2FgCIGhcBKLgIhAPFv1aY%2FbzbgWHPxLTEMdZBzlyj8bIroV%2Bog0LqjRBL9Kv8DCHUQABoMNjM3NDIzMTgzODA1Igyj7fY7tH7Z0MOZckAq3AN4pbuL8lHE7ry13FMNrI1W%2BnHtKfpUR7FJ4Tgvjk8eJzN8g25tr2Xb6utOrvUonDTI2%2Fpy566unIo5wpShCfws8ZBqET23TIup%2FzhF9CUAsOmSE5orK5i%2FhAN6Df3Gah3fyWpdvsg%2Fd%2BCh8mPMPyKVGlC9t8i63suGVEV2f66UoxouBboKWSnzIQ9is2diIGtgufsQ05Bju%2FJtIw9tcI1qI5t1BH5okbkdPovqmbwWLQ%2B3np9LCAGWZ1TTRWQM%2BHJWF966vO%2FxfIZhJ1TXQuENPHj3xkxAfK6mr9zf44%2BbqbEUda6dCJfRRwyIoMZhpzTO1%2FoE8W7qkMbfP0E%2FIYCpTc%2BpP0HH1fYs1eQEPtaSbEb%2Ft%2BWI9X2LBnu%2FpuRZfTJ%2BM%2F7%2F%2F1fVqh0xTicueyYg7JKOVUiMyLC1noqKEN7%2FZA2VoxzXMmYWbbeQKhhJb5A1FVSugsG7r7I8lhke1fGwW2VkH7gvkv6aZTOjIoMixv7zFYU7IqDncyb7oko9%2FSGcTZvQH3JXURsSNlWGkqXGrfN99ZRBhquYNb2idGLrDIO3KeMa761tH3QxoyMzoG%2BlqF73iHffRBMDr1tZCQdtZUcLRHdR%2F6phabIZErgQ%2FeKRGt%2F7sGGqVw%2Fj0DCDp9DJBjqkAb9%2FRawNid9GFpXYPky%2FbNVyAgqTl7iLuYGZf2HcG6g6yUB1AqezJ6Wx0Oq7tmL6%2Bxa1vqMV8Uq36gg%2BTCBfrlo%2ByqBq3Tz1agAX1IAcLXf9RmOlVd9U8W3YeS1plthfB6ieszTOuuU8uXOHWMYjH0QHlQbWuxdbmhTJsys3tW9twOAyu6XZaYm10Fh5ktUIabYI2gA7zSWU9zWcc8PQekVtdXo%2F&X-Amz-Signature=6b53026702c2da8068b8e8cc3809d3b11a4cdee8bdb6f261e4e80b6bfdadd4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXRABSCM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVJhPM5T59FlvgIPn8yWwTYGFVijoDMm1%2FgCIGhcBKLgIhAPFv1aY%2FbzbgWHPxLTEMdZBzlyj8bIroV%2Bog0LqjRBL9Kv8DCHUQABoMNjM3NDIzMTgzODA1Igyj7fY7tH7Z0MOZckAq3AN4pbuL8lHE7ry13FMNrI1W%2BnHtKfpUR7FJ4Tgvjk8eJzN8g25tr2Xb6utOrvUonDTI2%2Fpy566unIo5wpShCfws8ZBqET23TIup%2FzhF9CUAsOmSE5orK5i%2FhAN6Df3Gah3fyWpdvsg%2Fd%2BCh8mPMPyKVGlC9t8i63suGVEV2f66UoxouBboKWSnzIQ9is2diIGtgufsQ05Bju%2FJtIw9tcI1qI5t1BH5okbkdPovqmbwWLQ%2B3np9LCAGWZ1TTRWQM%2BHJWF966vO%2FxfIZhJ1TXQuENPHj3xkxAfK6mr9zf44%2BbqbEUda6dCJfRRwyIoMZhpzTO1%2FoE8W7qkMbfP0E%2FIYCpTc%2BpP0HH1fYs1eQEPtaSbEb%2Ft%2BWI9X2LBnu%2FpuRZfTJ%2BM%2F7%2F%2F1fVqh0xTicueyYg7JKOVUiMyLC1noqKEN7%2FZA2VoxzXMmYWbbeQKhhJb5A1FVSugsG7r7I8lhke1fGwW2VkH7gvkv6aZTOjIoMixv7zFYU7IqDncyb7oko9%2FSGcTZvQH3JXURsSNlWGkqXGrfN99ZRBhquYNb2idGLrDIO3KeMa761tH3QxoyMzoG%2BlqF73iHffRBMDr1tZCQdtZUcLRHdR%2F6phabIZErgQ%2FeKRGt%2F7sGGqVw%2Fj0DCDp9DJBjqkAb9%2FRawNid9GFpXYPky%2FbNVyAgqTl7iLuYGZf2HcG6g6yUB1AqezJ6Wx0Oq7tmL6%2Bxa1vqMV8Uq36gg%2BTCBfrlo%2ByqBq3Tz1agAX1IAcLXf9RmOlVd9U8W3YeS1plthfB6ieszTOuuU8uXOHWMYjH0QHlQbWuxdbmhTJsys3tW9twOAyu6XZaYm10Fh5ktUIabYI2gA7zSWU9zWcc8PQekVtdXo%2F&X-Amz-Signature=6e3ed6c04179aa825ddaad2a03bb70a0b5693922661cc51947e50442b84690ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
