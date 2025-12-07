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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYGX7MM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOqBRcp6GIXfdk0sr57lJszQZo3PoLzkkNY6beekMagIgLZakuO3gn6ik9OSyNNZirw5wrWjTwjxRgcUnMI%2FaNEYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxswQj%2FtfcIGMEIyrcA%2F%2BSCQX%2B72QBxaEhJ7hnSqgYS6rX%2B9PVyEsKpWWWn5vsMQpawQhevLKNR8HAsRaNKyJG5LijjOM3gBvoJZ3mzksuKATBYEBBZx3Ss1BhwJ60PuWRD3LFNd42%2FOMEy3RYaeD4aqiOojkbr1rAz0zMHRvAmU5qslzTRueSGH6%2Fwm%2F4R7bcxGXNz9f7R9Dv%2BNwS2N191zdIwEde7bfl9nEhnsOuL%2FFRED98ZFPxbp6ma6i%2Fbzf7ZwTUPoe1nl2sD2m6cimSSLSpQ85wlozAydZsBDPTjhkjQ%2BKN9pZAD%2BsE9xRHvCKAQraJA0MNFi9sAzMbolulzdT6qqwgjHESQ7RWBuva5CqKojUfnEobIiaCw1YJ6UwE2s0L99Jpz%2F9snhCNZwvRte9yqkwCK8ql1J%2BrAwPWwU5qEadhFMr3%2Fl0XJd%2FvB0kYtvlVc8aoffBSkuPE%2BQjQ%2Flkzr36dz2Ak1GzbSt4ksg2ffKQZwWyL3wvT5j0UZj80EL0iFlvd5bzCnl1FS%2BjKgTgAVzGrMzw6rBWF%2BdYff6KiTKr4ShLIOr4fdyTFTYtbJW8O5OA5YQJJUNjSzUPJ%2BENr1J7pee%2Bj0vnPy550Ipujtgg7%2BfDd2ZO9OU0l2HjpwMAzKtte%2FMGEMOC81skGOqUBI2K8SnyLigvcMdoZ26y8LWkvDwzTWARYn930TtBgm7rDzF%2BZBbnmSNECIBtQJHnU7zaEpBnPvwl4cq3ByBGoqd4MMzvmShihkM4gyhDBb%2FYGkFItVUTkr3ZB%2BguT%2B%2F3TyXLdm0T%2Ftw%2FMN%2FheT9rl38vcKCtPEMG9J55IGJiJGkEciJIYTqnO9gMd6K5XQltM10xaXYryzJoZ4Md3c74QqMN7yvHy&X-Amz-Signature=b2b0be54b8674048d61a3fd0c1644169b013e1439681ef924dd4503a1aa2fe12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYGX7MM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBOqBRcp6GIXfdk0sr57lJszQZo3PoLzkkNY6beekMagIgLZakuO3gn6ik9OSyNNZirw5wrWjTwjxRgcUnMI%2FaNEYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhxswQj%2FtfcIGMEIyrcA%2F%2BSCQX%2B72QBxaEhJ7hnSqgYS6rX%2B9PVyEsKpWWWn5vsMQpawQhevLKNR8HAsRaNKyJG5LijjOM3gBvoJZ3mzksuKATBYEBBZx3Ss1BhwJ60PuWRD3LFNd42%2FOMEy3RYaeD4aqiOojkbr1rAz0zMHRvAmU5qslzTRueSGH6%2Fwm%2F4R7bcxGXNz9f7R9Dv%2BNwS2N191zdIwEde7bfl9nEhnsOuL%2FFRED98ZFPxbp6ma6i%2Fbzf7ZwTUPoe1nl2sD2m6cimSSLSpQ85wlozAydZsBDPTjhkjQ%2BKN9pZAD%2BsE9xRHvCKAQraJA0MNFi9sAzMbolulzdT6qqwgjHESQ7RWBuva5CqKojUfnEobIiaCw1YJ6UwE2s0L99Jpz%2F9snhCNZwvRte9yqkwCK8ql1J%2BrAwPWwU5qEadhFMr3%2Fl0XJd%2FvB0kYtvlVc8aoffBSkuPE%2BQjQ%2Flkzr36dz2Ak1GzbSt4ksg2ffKQZwWyL3wvT5j0UZj80EL0iFlvd5bzCnl1FS%2BjKgTgAVzGrMzw6rBWF%2BdYff6KiTKr4ShLIOr4fdyTFTYtbJW8O5OA5YQJJUNjSzUPJ%2BENr1J7pee%2Bj0vnPy550Ipujtgg7%2BfDd2ZO9OU0l2HjpwMAzKtte%2FMGEMOC81skGOqUBI2K8SnyLigvcMdoZ26y8LWkvDwzTWARYn930TtBgm7rDzF%2BZBbnmSNECIBtQJHnU7zaEpBnPvwl4cq3ByBGoqd4MMzvmShihkM4gyhDBb%2FYGkFItVUTkr3ZB%2BguT%2B%2F3TyXLdm0T%2Ftw%2FMN%2FheT9rl38vcKCtPEMG9J55IGJiJGkEciJIYTqnO9gMd6K5XQltM10xaXYryzJoZ4Md3c74QqMN7yvHy&X-Amz-Signature=b47cef596d491b0981be821724896121a2eb98f2100ec3a0dd42a9590c5308c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
