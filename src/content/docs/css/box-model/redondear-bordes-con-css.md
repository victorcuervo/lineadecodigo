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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUERQOOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKocISwT8DNMl%2BTTFpxm9UoChhO9Y%2FKAXMylX4kC2KBAiEAoIUL%2B989ZnYa5TRVxX%2Bwbk2v2OVZk44YjHZ4XGmN3h0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES8mIMdZa7M6a1sPyrcAzBiTE%2FhnGVSHtRLI3%2BCSaaPm7cTmGFXX9lJ%2B4JYtatgUEB0v43YKMeSF57Ulrc2bq1Xx1hHNv4W%2FdJSQkwHQomr88lyaJ7NpI36alUQmYTbpSM1eYGUkSaIWf5s3NJV8RRZlSJFr0vMne4Z6e9Lbe0Hf%2F6UELdoZSeK3FTIwuSV0GL6e2fWvAPEBXcLT%2FpXjMr8PqKQVTA7So4x2%2BmC1pBSlucP2A7CatiAvZJUuvYH7WT1SaK%2B9r8Zd%2BFSIoeBH424%2B4vnVF%2FgA0GYesG%2FeSDMXMpOgVPqYBYA5QeBM90PSTWZyMwZm0hDwb33Za9BD16NlNtmJBRwgCn40UKWy0fwrg9Ea8SWdaYlKEsZGHtkp2%2F8UtVKo22B1a%2BPMaW8YdZj5qlDpc%2BIY1McgPMQ6sakMNXhbW27cWsCWcW4PkDwC35Tob%2FS%2FWc%2FgfWGy2BH8x1obf7NUzbCAFHnK%2FgUOMYImVqQxlokWRpHuZdeA5jGD3sYQBNxnVXzhmvGLg7J5%2FV%2BmYcMIGeSqTkUSziyl3dLfdqi54XvqES4QC0HHuwSQbM5%2ByVel15UKxynUNtNkps%2FES4Y5KQ20i5Re9gjwDDNE7IEnY3haz4nFhvhMywqwavwuGboCvmkWZzDMICgi8oGOqUBFTDPVPa675jl0g4a5XWn4AeqZE5Hjb46wEIJrZuC0YETKKO2W4MwLE6kdoUkTtUAF9Ni0lz%2BICrTI6zr2UoUHmz2seoHYzp%2FJu6E8uWBQ8Qy6YaZnmKAwTyAi758%2F9zrBbfpRX2n5AZgBF%2BHCTmK2t3ej7Yj%2FHfzZzR2YHBflzJ4fULODIcxF8NHMZE9NxtXK1eP%2FPYNdSDfLyYVNNtKm0HI38NF&X-Amz-Signature=1f0818918e2cd622b54bcfbd266b1926005d0825ac585c152c411bdf7cb63b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUERQOOQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKocISwT8DNMl%2BTTFpxm9UoChhO9Y%2FKAXMylX4kC2KBAiEAoIUL%2B989ZnYa5TRVxX%2Bwbk2v2OVZk44YjHZ4XGmN3h0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDES8mIMdZa7M6a1sPyrcAzBiTE%2FhnGVSHtRLI3%2BCSaaPm7cTmGFXX9lJ%2B4JYtatgUEB0v43YKMeSF57Ulrc2bq1Xx1hHNv4W%2FdJSQkwHQomr88lyaJ7NpI36alUQmYTbpSM1eYGUkSaIWf5s3NJV8RRZlSJFr0vMne4Z6e9Lbe0Hf%2F6UELdoZSeK3FTIwuSV0GL6e2fWvAPEBXcLT%2FpXjMr8PqKQVTA7So4x2%2BmC1pBSlucP2A7CatiAvZJUuvYH7WT1SaK%2B9r8Zd%2BFSIoeBH424%2B4vnVF%2FgA0GYesG%2FeSDMXMpOgVPqYBYA5QeBM90PSTWZyMwZm0hDwb33Za9BD16NlNtmJBRwgCn40UKWy0fwrg9Ea8SWdaYlKEsZGHtkp2%2F8UtVKo22B1a%2BPMaW8YdZj5qlDpc%2BIY1McgPMQ6sakMNXhbW27cWsCWcW4PkDwC35Tob%2FS%2FWc%2FgfWGy2BH8x1obf7NUzbCAFHnK%2FgUOMYImVqQxlokWRpHuZdeA5jGD3sYQBNxnVXzhmvGLg7J5%2FV%2BmYcMIGeSqTkUSziyl3dLfdqi54XvqES4QC0HHuwSQbM5%2ByVel15UKxynUNtNkps%2FES4Y5KQ20i5Re9gjwDDNE7IEnY3haz4nFhvhMywqwavwuGboCvmkWZzDMICgi8oGOqUBFTDPVPa675jl0g4a5XWn4AeqZE5Hjb46wEIJrZuC0YETKKO2W4MwLE6kdoUkTtUAF9Ni0lz%2BICrTI6zr2UoUHmz2seoHYzp%2FJu6E8uWBQ8Qy6YaZnmKAwTyAi758%2F9zrBbfpRX2n5AZgBF%2BHCTmK2t3ej7Yj%2FHfzZzR2YHBflzJ4fULODIcxF8NHMZE9NxtXK1eP%2FPYNdSDfLyYVNNtKm0HI38NF&X-Amz-Signature=4b7866899c3ab5f0929b4f3e840cfc28ab6e9e5feeb43ee7de111052260bbbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
