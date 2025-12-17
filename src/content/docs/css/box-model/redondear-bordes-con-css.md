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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDVQTNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKdrSyZ9I9dgFoRjiRmur4eCKCiiVpc4rVXEdB%2FC1EJAiBWpb9ivkoZddlX4xEzp7IahfghyzqUYR842QLFoBl0cyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14vfFPEYHMpBhIdNKtwDsfb4Nq%2FqVwfx4Adtn4PDGYO6wIm25UcwQb8AY0Y%2BdO6McENufvh34yR4o2BYODMzO24yXlExUsuHJS4CYlbi2HdCkrMY409J2mVIrR%2B4bSSYnJp1pXHDXDJGo4m%2FxVSRw7zsRSLxhpoKHH9C4jmIv7J2dFHKmIbrXGu7hebspoq2zsRtalE%2FbwEMmlzZmM5UO83oTt83RubJ6J%2BGTQEEV2mGLdXNcEVqXFKAuTvqvzr84NASX2HHZJAGft9i7EUqj29JQu0fgWkCy7gG6VI2TMwEarqooH2bgTTLrYTAUma5DT7i51%2FG7TilV5DO%2FLu2%2BIwVLB1DaZOnsK%2FmvbfDcZ5r0Lnn1IINVFqIKLpnG%2FSQavqZxJ8m%2Fmjueq%2BSXo9gnLIFWFLGdEz2qcYNJXYQxEikF4muTlOic9kcfni7P5tEa6d4DQJ0QgTjOsUKRtVCe7jrnrfbsLnJ6nDsDZj%2FIGz2sfutpqmVsW1t2fsNDTqhUpDgN4UkG3n0GmSsmL3ldB40rgQCsxbB8YDhXOKgnoxWxbBHyIAe4gHpPRQ38bDlZEv12d1TBKjAqBvbIqIzOcjgPjJvbwMqMA4c%2FU%2B%2BY6%2FT%2FJ7WGFvLO7NxwLj2Qgj3BC9DRskwPW8qtkEwn6CLygY6pgEN6zcypNCYuuED3AG6aQhPcOUSLnBa2nw3xYZPKauTMrvHvxwwaJ9Zrh5A25qdel6rAEbf%2Fkm3qrQFueyz%2FYhJfKG%2FWEjGmToDXzK23S%2FgEO4FQFNUGBTppiHowPNwXp%2F28%2Fbx8w%2F4iwQ5LhOLpqdFITpJFsc2q3UL7lTUwYpHHarKbXvPoMYaDyOiWn8rK%2BjFMAyHPbDXnreWwcoSnXqdCStkogFm&X-Amz-Signature=0205b919b56aded358f21b44559a65f02a36d07651c530c8a96a40701de96aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDVQTNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKdrSyZ9I9dgFoRjiRmur4eCKCiiVpc4rVXEdB%2FC1EJAiBWpb9ivkoZddlX4xEzp7IahfghyzqUYR842QLFoBl0cyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14vfFPEYHMpBhIdNKtwDsfb4Nq%2FqVwfx4Adtn4PDGYO6wIm25UcwQb8AY0Y%2BdO6McENufvh34yR4o2BYODMzO24yXlExUsuHJS4CYlbi2HdCkrMY409J2mVIrR%2B4bSSYnJp1pXHDXDJGo4m%2FxVSRw7zsRSLxhpoKHH9C4jmIv7J2dFHKmIbrXGu7hebspoq2zsRtalE%2FbwEMmlzZmM5UO83oTt83RubJ6J%2BGTQEEV2mGLdXNcEVqXFKAuTvqvzr84NASX2HHZJAGft9i7EUqj29JQu0fgWkCy7gG6VI2TMwEarqooH2bgTTLrYTAUma5DT7i51%2FG7TilV5DO%2FLu2%2BIwVLB1DaZOnsK%2FmvbfDcZ5r0Lnn1IINVFqIKLpnG%2FSQavqZxJ8m%2Fmjueq%2BSXo9gnLIFWFLGdEz2qcYNJXYQxEikF4muTlOic9kcfni7P5tEa6d4DQJ0QgTjOsUKRtVCe7jrnrfbsLnJ6nDsDZj%2FIGz2sfutpqmVsW1t2fsNDTqhUpDgN4UkG3n0GmSsmL3ldB40rgQCsxbB8YDhXOKgnoxWxbBHyIAe4gHpPRQ38bDlZEv12d1TBKjAqBvbIqIzOcjgPjJvbwMqMA4c%2FU%2B%2BY6%2FT%2FJ7WGFvLO7NxwLj2Qgj3BC9DRskwPW8qtkEwn6CLygY6pgEN6zcypNCYuuED3AG6aQhPcOUSLnBa2nw3xYZPKauTMrvHvxwwaJ9Zrh5A25qdel6rAEbf%2Fkm3qrQFueyz%2FYhJfKG%2FWEjGmToDXzK23S%2FgEO4FQFNUGBTppiHowPNwXp%2F28%2Fbx8w%2F4iwQ5LhOLpqdFITpJFsc2q3UL7lTUwYpHHarKbXvPoMYaDyOiWn8rK%2BjFMAyHPbDXnreWwcoSnXqdCStkogFm&X-Amz-Signature=efc1739c6a2a1aa88264fa191a5dcfe4826674cf116fff96d63b43d6e079b99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
