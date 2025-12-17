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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML7UBDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8BQrjecdELIsnCQrgkpU7DTuk8WdRLfAJ%2FcgyiJ%2BpgIhAPR80NS75QL2uKFRW78NDlAy3w6WxzDvxYl2Lge9TJXxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuE8RDvqZQhjMEBZcq3AO6s3SMijSCwtDGNE9qHm9K1KHBkT9Q%2F6dRKm6J%2F7vp24sURBkOYFhDn%2BY0tkpgY314eolwH0Xw%2FBMX1nzMp1HT7R4Tnf90IqgSRN%2BvJ8tm9NLCqmeKpuQOK%2Bk36KzQKU1l3lTr4XFNZrYojmN0YaDml1u0Rek2Z0zWlysAJPo%2FCirqrGh7fUvIjbxyNGCv2C5%2B1sHgMHozTNkCkfg3epBeK9ZHeNHef%2FB65Y4lXeNOQZxbO2oovwIYj86swtV3j5VbfCPZE7aOGe3bsSxCa4ltQG0BVkOO6ru1kcf%2BqU6fKLfkdBBNHDtTwnN2o7kmY2K7BhAuK0E6%2BxV%2BENvPR5%2BlQLC9Tf7A1H1NojhQvrKFKtoWdYGjlJJGqMI%2F3w1N2h5icpr5XtFCSKktfv0XjVOLQtsuKSxDxE%2FTRH2G5OIv6bXU80Ml6zvKwLXEcWXZW4KsYhBwt8zgvzOovfodgRuV01nWZdaKqDmKUPnTv84%2BjVAMnIkwgTPEJfYa4THFPFbmeQpkuJtFNOT9xHCFGRTKwUJx14KsYseRuGOgFeNIKWiLQHjS24ZBtkOasihleBr9bV%2FqMRMcyjoX9VKQSu%2BPQh%2FEaikuI6cEgvN1zKIbnROyHmv1G70pGAnWkzDci4zKBjqkAXTfhnjTneUGrFDxnUeADtBp3gog3t7tCYk240x5QvxQU6szFI8lVb5lntNkhUoUycdtNp%2FqMsOZfYeXV7F0avj%2FiiJWaKi379LrZfqi5CDgVUyGe533AxexQE3wYuUwt%2Fr%2BFLv1wp8wPiw7y5YLSOWqJ39u8cSJqUV5h0QziTMClSnG12FEYNuHdgqnvmbXjZ%2F3NZAtUlU9tKmfVUqK0JMf6ZY%2F&X-Amz-Signature=dad4e3275f3f8959b65c5d03e71481c195718052aed6c128b1ee3461434b6792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML7UBDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8BQrjecdELIsnCQrgkpU7DTuk8WdRLfAJ%2FcgyiJ%2BpgIhAPR80NS75QL2uKFRW78NDlAy3w6WxzDvxYl2Lge9TJXxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuE8RDvqZQhjMEBZcq3AO6s3SMijSCwtDGNE9qHm9K1KHBkT9Q%2F6dRKm6J%2F7vp24sURBkOYFhDn%2BY0tkpgY314eolwH0Xw%2FBMX1nzMp1HT7R4Tnf90IqgSRN%2BvJ8tm9NLCqmeKpuQOK%2Bk36KzQKU1l3lTr4XFNZrYojmN0YaDml1u0Rek2Z0zWlysAJPo%2FCirqrGh7fUvIjbxyNGCv2C5%2B1sHgMHozTNkCkfg3epBeK9ZHeNHef%2FB65Y4lXeNOQZxbO2oovwIYj86swtV3j5VbfCPZE7aOGe3bsSxCa4ltQG0BVkOO6ru1kcf%2BqU6fKLfkdBBNHDtTwnN2o7kmY2K7BhAuK0E6%2BxV%2BENvPR5%2BlQLC9Tf7A1H1NojhQvrKFKtoWdYGjlJJGqMI%2F3w1N2h5icpr5XtFCSKktfv0XjVOLQtsuKSxDxE%2FTRH2G5OIv6bXU80Ml6zvKwLXEcWXZW4KsYhBwt8zgvzOovfodgRuV01nWZdaKqDmKUPnTv84%2BjVAMnIkwgTPEJfYa4THFPFbmeQpkuJtFNOT9xHCFGRTKwUJx14KsYseRuGOgFeNIKWiLQHjS24ZBtkOasihleBr9bV%2FqMRMcyjoX9VKQSu%2BPQh%2FEaikuI6cEgvN1zKIbnROyHmv1G70pGAnWkzDci4zKBjqkAXTfhnjTneUGrFDxnUeADtBp3gog3t7tCYk240x5QvxQU6szFI8lVb5lntNkhUoUycdtNp%2FqMsOZfYeXV7F0avj%2FiiJWaKi379LrZfqi5CDgVUyGe533AxexQE3wYuUwt%2Fr%2BFLv1wp8wPiw7y5YLSOWqJ39u8cSJqUV5h0QziTMClSnG12FEYNuHdgqnvmbXjZ%2F3NZAtUlU9tKmfVUqK0JMf6ZY%2F&X-Amz-Signature=d002224c0327d79277332e8855fbff531a7d58accbaf1df639a24b84a393c9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
