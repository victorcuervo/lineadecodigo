---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P72P5KT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCL4iQpBjEDcrNTToOfffG7JjUNfGY8K6Q%2BzZlz%2F%2FP0lAIhAOzCZSH16%2BkJEZ3snlz9iocP1lGaGs4aEnaIqUo1eOJfKv8DCDkQABoMNjM3NDIzMTgzODA1Igz8EiVzlIEJQUKrbLEq3AOE%2Bh1DjMqCWi186ZdSO%2FWkw02VAvNfKmywtG7CA%2FRXV%2FH79Cj5inV09nSTjcNVTWeSmTXHl27P2RZO9UBduMkedz%2B%2F3lh2ziOUy3O8Dg1zdSW27AR0aCqmYiBA9sEHiOOgMTm%2F9GiClz8P6b4n%2Frk1YlhGos%2B4BxTFafw0ztepeefLwRsGLIpck9GMMjGemJ0zYkdb6OjzVOX%2FMnu1uqsqiUx4QlE%2FfRweU5A5IleI9jD5dI96I2omqwauAqo%2B%2FbLC1W2K9H5UWCfVdrbHKB63TbUsfvW0CQwweYCwBO0uf8hyDagd1HGrwnMG15bCBYh9q37gYT%2BTKhPK1MoL13ULYco2capjnv0TfpJFFerl4cUyQfzB6PA8uHT5pxoIy4lF1jR4BVpcW3HvwCCtNt42IZHXtj3QFYEzvkXh%2BzI9XaHli1ETOXcJ1htNAf4eIIF5HqqpX5XepZQngFDURSbXirPjxPqQ8JhxlFAicKE8z8GjkWFSekkSKaR4QOVdBNmh%2BijxVhQ50T%2FfIeB3o94mnl1wFOkTjOAoWpjv1BDOF%2Bhh%2Flqzf4UQCTQXwajc1Q5Udatv7wKhI5OWjdnOSBBmGuMW3xneM4Qu7eOz1ZAIdZusXfoS7puqmaMZSjD3lMPJBjqkAaSBbs4rS2ANoBlacFSCXQysZ1zOndMXikBmtu97uTH%2FBPbMQLOx1mufGmlsLJS3Ie7tjiIzFdrmmxFHQ76YUIqIj0j0soJy1Y%2FRQBa%2B5hyz%2BQ9kdrj%2FMm3jPsboOo4sM%2FSsI1mMX1ANVczJkCInirIHQDOM%2BHIL%2FeZC%2FAaA6GfZk3RorR5H5D8L2jJexX%2FJsPIePLFtUxbQ1g3arhfz7lLNGPIF&X-Amz-Signature=ed7551ef7165da4d08c60d974f12ce746579aea06a12c7674d51018ee5d48a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P72P5KT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCL4iQpBjEDcrNTToOfffG7JjUNfGY8K6Q%2BzZlz%2F%2FP0lAIhAOzCZSH16%2BkJEZ3snlz9iocP1lGaGs4aEnaIqUo1eOJfKv8DCDkQABoMNjM3NDIzMTgzODA1Igz8EiVzlIEJQUKrbLEq3AOE%2Bh1DjMqCWi186ZdSO%2FWkw02VAvNfKmywtG7CA%2FRXV%2FH79Cj5inV09nSTjcNVTWeSmTXHl27P2RZO9UBduMkedz%2B%2F3lh2ziOUy3O8Dg1zdSW27AR0aCqmYiBA9sEHiOOgMTm%2F9GiClz8P6b4n%2Frk1YlhGos%2B4BxTFafw0ztepeefLwRsGLIpck9GMMjGemJ0zYkdb6OjzVOX%2FMnu1uqsqiUx4QlE%2FfRweU5A5IleI9jD5dI96I2omqwauAqo%2B%2FbLC1W2K9H5UWCfVdrbHKB63TbUsfvW0CQwweYCwBO0uf8hyDagd1HGrwnMG15bCBYh9q37gYT%2BTKhPK1MoL13ULYco2capjnv0TfpJFFerl4cUyQfzB6PA8uHT5pxoIy4lF1jR4BVpcW3HvwCCtNt42IZHXtj3QFYEzvkXh%2BzI9XaHli1ETOXcJ1htNAf4eIIF5HqqpX5XepZQngFDURSbXirPjxPqQ8JhxlFAicKE8z8GjkWFSekkSKaR4QOVdBNmh%2BijxVhQ50T%2FfIeB3o94mnl1wFOkTjOAoWpjv1BDOF%2Bhh%2Flqzf4UQCTQXwajc1Q5Udatv7wKhI5OWjdnOSBBmGuMW3xneM4Qu7eOz1ZAIdZusXfoS7puqmaMZSjD3lMPJBjqkAaSBbs4rS2ANoBlacFSCXQysZ1zOndMXikBmtu97uTH%2FBPbMQLOx1mufGmlsLJS3Ie7tjiIzFdrmmxFHQ76YUIqIj0j0soJy1Y%2FRQBa%2B5hyz%2BQ9kdrj%2FMm3jPsboOo4sM%2FSsI1mMX1ANVczJkCInirIHQDOM%2BHIL%2FeZC%2FAaA6GfZk3RorR5H5D8L2jJexX%2FJsPIePLFtUxbQ1g3arhfz7lLNGPIF&X-Amz-Signature=e93ac3f0fa03021615971e9617bd5b90b48d19596586b513b4040b87ea6d4e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
