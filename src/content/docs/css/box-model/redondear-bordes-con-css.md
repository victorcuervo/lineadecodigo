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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CQSHIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9NQkqI0JNovzoRoTHndI5pbXS45tOyPvjl7rOh0qkHAIhAPNU6W1ekGL1yvq0mIt1GXJylHPn9IinMYI03x2T%2B2TsKv8DCH4QABoMNjM3NDIzMTgzODA1IgyE%2B3ttGU0cnvcGnIEq3AOdzjnWhoRc3m4UZboUl1LJ2CrSEp2WtQVxkUCVSRQGHkKcIksbs6vfruun%2BX1k%2F93lWjm%2BuKzWqR71hoegJfEXdwhCddG2HG1X4CkpPhRr56U%2Bxig0Ro4qopCIm4e5yTGKEMQq0pbn9qYKQevruQ0%2FjVXbBFX62rV%2FSPo6mtAXWWwJlkDOFA4Q0MnNzbjDkNGbP%2BFXrFPMMWd%2BymCjzMdzybHnFp%2BAX%2FYEYfbheHEwzCOd29qcEqpyGWpcYXBCr%2FX2i63tYsrUTNN8TAIyon3%2FKkFtYuckZRFyo1J%2F9xZbHOgf9ceNnUcoBEHiJaT%2B0fLr8ev1VDOyI1x%2F1uOaUmnSJjkoczcKTEnZTZVN5%2Fokv0n%2Bj5gZ12qOv4MuyWubgwYf4I0PzemUw%2B%2BbBp%2B%2FclKinWzz27%2Bu6JYGO9dWFUsb92%2Fc4uLS92GKGyxG2VswmamxPyzCYb9lXIfXPZFHKBU6HM0q10btSu7X5%2FaX45LVQBhOixwOGDviNs4JQa5kuCbJtySZpxz%2F5QVllcg8WhuaVtQMGyOAoqkJxLtv%2FkslUy1AY22cKHNn39HxBNMvbu9WRSKSZP6qWbxYQ4aIV%2B9txImmIkgZxx4lAljbiUlcyDObOoId7RQItvCCYTDQxorKBjqkAdRtiaf3Ut%2BQDmWFSKRLG%2BKPOxJK4ylQj4UxrwlMw5MHo9JefC9Bija9KoDrU5%2B%2BVXa2hObeqaBAqid6h4mtY%2FZLOgA6f8pXFqgSLb4dE9MdoBFjoBI%2FUBPM7DEwEo0Pg3dkm%2BwakqvmPdh079dWXRte4IByDXNo8DLGmFV%2BxYqoIdMNA8gNd1jL65cGMTthVqrzaBZFIH%2FaUVo0ykde%2BMftx38L&X-Amz-Signature=090816abb89309efb8e90c5985e1c89b9b6ccb5ac264375c8619410190bcf664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CQSHIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9NQkqI0JNovzoRoTHndI5pbXS45tOyPvjl7rOh0qkHAIhAPNU6W1ekGL1yvq0mIt1GXJylHPn9IinMYI03x2T%2B2TsKv8DCH4QABoMNjM3NDIzMTgzODA1IgyE%2B3ttGU0cnvcGnIEq3AOdzjnWhoRc3m4UZboUl1LJ2CrSEp2WtQVxkUCVSRQGHkKcIksbs6vfruun%2BX1k%2F93lWjm%2BuKzWqR71hoegJfEXdwhCddG2HG1X4CkpPhRr56U%2Bxig0Ro4qopCIm4e5yTGKEMQq0pbn9qYKQevruQ0%2FjVXbBFX62rV%2FSPo6mtAXWWwJlkDOFA4Q0MnNzbjDkNGbP%2BFXrFPMMWd%2BymCjzMdzybHnFp%2BAX%2FYEYfbheHEwzCOd29qcEqpyGWpcYXBCr%2FX2i63tYsrUTNN8TAIyon3%2FKkFtYuckZRFyo1J%2F9xZbHOgf9ceNnUcoBEHiJaT%2B0fLr8ev1VDOyI1x%2F1uOaUmnSJjkoczcKTEnZTZVN5%2Fokv0n%2Bj5gZ12qOv4MuyWubgwYf4I0PzemUw%2B%2BbBp%2B%2FclKinWzz27%2Bu6JYGO9dWFUsb92%2Fc4uLS92GKGyxG2VswmamxPyzCYb9lXIfXPZFHKBU6HM0q10btSu7X5%2FaX45LVQBhOixwOGDviNs4JQa5kuCbJtySZpxz%2F5QVllcg8WhuaVtQMGyOAoqkJxLtv%2FkslUy1AY22cKHNn39HxBNMvbu9WRSKSZP6qWbxYQ4aIV%2B9txImmIkgZxx4lAljbiUlcyDObOoId7RQItvCCYTDQxorKBjqkAdRtiaf3Ut%2BQDmWFSKRLG%2BKPOxJK4ylQj4UxrwlMw5MHo9JefC9Bija9KoDrU5%2B%2BVXa2hObeqaBAqid6h4mtY%2FZLOgA6f8pXFqgSLb4dE9MdoBFjoBI%2FUBPM7DEwEo0Pg3dkm%2BwakqvmPdh079dWXRte4IByDXNo8DLGmFV%2BxYqoIdMNA8gNd1jL65cGMTthVqrzaBZFIH%2FaUVo0ykde%2BMftx38L&X-Amz-Signature=5eca59bfddb662570daeb2877134ad152dbd26ad7f97d0829499894c0df84667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
