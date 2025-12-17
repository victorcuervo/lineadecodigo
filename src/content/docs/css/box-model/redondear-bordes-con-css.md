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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KT3FCPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe9jftKfTQnO4xsWeA2TLY9K58WYf4PSrUYKc73qtrpQIhAPjgbtN4%2BkDdIxlkLbtFEeCEvIQsBeOb8Gv9ZPT2DAEyKv8DCHIQABoMNjM3NDIzMTgzODA1IgyYWa96G%2BztI8k6AtIq3ANFKzKpkdTLJy6B6gDXqmVHwxTSc%2BUrOQxfn8PmPKShrDRoKnZeF6IhBG%2BW1f0mRYtNa1LFLx99mEoLOHhSp8cAf25SivvB6aqdofwuciUaTRVobMnu8lgMevPs5%2B483w64kPqEsFgLKDDVOCZUA%2BgRcgjpZ15paEcdQR0xjiUykIkLT%2B2ctMrlSFXwJ4yI%2BKQXlUNYTndEqLl1HvLQaPWIJQ%2F6%2BkHOVmJdEP%2BSJ%2BgQ1r6RD%2BUIG0z9%2B%2FYF682BjlZZS0zzeX1gjzLlyKWCXf3LJJ3XUA%2Bp0FJkBQ4Y3iSR7twtSnsliX76hGbiccIUg1y%2Bfk8JyjDKVDEiEES7MVCv2LpPGzgDrnZ%2Fwclen03MQ93r%2BWtQA5tV7eXFx3PmqLnhwgo2IUG36o%2FHabSntAPw%2Fqut%2FWv748R53%2FByqsmnC3wiiljS4VYkX07gQJuL1IToxAPSGeN9UwfSiD2r6RlYOw2onBwgyLmdRdgY%2F%2F%2BUzj%2BIkUhkqFTJ0Tfni6DDFNqi7HhXQI5Gx%2BedJtB5rN8XGuyOrtTvkO53nkEbB6vLL7ap57UyBltAQ447FiKfSvjPURLSIakuQN6Xy%2BugcfvLB0vtUaPxuplFdR2pZ3YIJiUqkMNm%2F9L96aQrbTC6%2B4fKBjqkASEB71A6OvVeWolZtqMdVzAo6IGctfY5LAq4tMUQETLRUZdNYf0GlqhqqUgsdQ1So%2FbYNxkJQtyP%2BfmySzMuQ%2FJOyHWhGX7SkzwUjPrvYkf4MZU4TTeeQPKDq5mEYX1KVLIqlaPbtcKUkGl4bTmjuOWsw2e%2B10yPQLYBtDxBzASN0a4RZrX8M%2Fx3q5aS2dbM1FPqaz8sQEf0PBjS360NkMf9jIS3&X-Amz-Signature=648730f826b5c36a03b40147b64bde738b8b55c625084968c09420d79f6f82dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KT3FCPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe9jftKfTQnO4xsWeA2TLY9K58WYf4PSrUYKc73qtrpQIhAPjgbtN4%2BkDdIxlkLbtFEeCEvIQsBeOb8Gv9ZPT2DAEyKv8DCHIQABoMNjM3NDIzMTgzODA1IgyYWa96G%2BztI8k6AtIq3ANFKzKpkdTLJy6B6gDXqmVHwxTSc%2BUrOQxfn8PmPKShrDRoKnZeF6IhBG%2BW1f0mRYtNa1LFLx99mEoLOHhSp8cAf25SivvB6aqdofwuciUaTRVobMnu8lgMevPs5%2B483w64kPqEsFgLKDDVOCZUA%2BgRcgjpZ15paEcdQR0xjiUykIkLT%2B2ctMrlSFXwJ4yI%2BKQXlUNYTndEqLl1HvLQaPWIJQ%2F6%2BkHOVmJdEP%2BSJ%2BgQ1r6RD%2BUIG0z9%2B%2FYF682BjlZZS0zzeX1gjzLlyKWCXf3LJJ3XUA%2Bp0FJkBQ4Y3iSR7twtSnsliX76hGbiccIUg1y%2Bfk8JyjDKVDEiEES7MVCv2LpPGzgDrnZ%2Fwclen03MQ93r%2BWtQA5tV7eXFx3PmqLnhwgo2IUG36o%2FHabSntAPw%2Fqut%2FWv748R53%2FByqsmnC3wiiljS4VYkX07gQJuL1IToxAPSGeN9UwfSiD2r6RlYOw2onBwgyLmdRdgY%2F%2F%2BUzj%2BIkUhkqFTJ0Tfni6DDFNqi7HhXQI5Gx%2BedJtB5rN8XGuyOrtTvkO53nkEbB6vLL7ap57UyBltAQ447FiKfSvjPURLSIakuQN6Xy%2BugcfvLB0vtUaPxuplFdR2pZ3YIJiUqkMNm%2F9L96aQrbTC6%2B4fKBjqkASEB71A6OvVeWolZtqMdVzAo6IGctfY5LAq4tMUQETLRUZdNYf0GlqhqqUgsdQ1So%2FbYNxkJQtyP%2BfmySzMuQ%2FJOyHWhGX7SkzwUjPrvYkf4MZU4TTeeQPKDq5mEYX1KVLIqlaPbtcKUkGl4bTmjuOWsw2e%2B10yPQLYBtDxBzASN0a4RZrX8M%2Fx3q5aS2dbM1FPqaz8sQEf0PBjS360NkMf9jIS3&X-Amz-Signature=24a4d3d69c0493c8e3cc374242cb0bf0d0c0badc43cf5043f937968f1700899d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
