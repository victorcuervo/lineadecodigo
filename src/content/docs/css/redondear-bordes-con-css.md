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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPPWKAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCci3EGuhuuW%2FrIvcVi8OJ90%2BLAU3LuEm1mXr2B2U5E3wIhAPxh4KyfgAU%2Fb%2FXFMRMALiJk8MmKnOfUFjOEVfADGJqGKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFKjWhAz9i2skOsxEq3AMh98dHfZfsdyHc5VfKfYARxJYWY3GziQ3Fvs9hgemT3qyt2TpJWsgeEga6QbmBWrJk3jc4upnPZtXTeqN2LUY8JWROL0U9MAAIirdDHew7dj1ba9Zp5ib8qK%2Fc%2FDSrBjcBXfWL4JiY6xUxjQS7rHU3Eds50XyGVn0AmgNlKxn03%2FOOJKJNaGZgR3fpta9BlejdV2bVByPLg1b9pjLO5jvjgGkwN4IehKUy%2BcEArIdCh00AELVX1QKNpD%2FUDY5jxdUBN6hNTEp30zPnLLd%2BCfJtOMJJfmkZJD3%2BpaykSXnvJ8yKGjwTXWRY0l6HQofmdfDHXUDXJfN70jNnj8gJs3scBppM2iMsudMzJ7XomESbjndYjnhiWwXag%2BPAmj2Ikcn3XaBma5Pr%2FuUgZh%2F6S%2BM9QugC6Z7E7hEORvYyVsFL2PLvkSLlGiwHjjkAz5%2FbejK3L34S1L%2Fe4YvQ0avL0IimnZNZCyfEKmLrgTpyVDVwCu8yq1mniiC50uW6kmXZfqkXLne1UnpRXCfezT4zOBFYD3l0VRx4XRXYT42k6af6M8P%2Bq%2FnGtHlROYO9hx5KEqzgCyRLK%2Fhs%2FS0VPHhF6MdPrNvv8O96fkPzPFcARfMi%2FnS54GRnOaUYIACBPjCBpNTJBjqkAfTxVL%2Bvep0aXhkp1dxfBkcQHXclm1KhEDNDhqwdjrEL1wWdWN7vmGaWwq8asAUrBVIiyz%2F7nCeE8SdvDC7DWWcl3vT0zIKsyBRe6dJh9Q7krTVTfJ%2Fz7e6lcoR%2FuPHYDaCnkLZiy7J4wt0BLODyfvKczZSCoBasq4vVShxJknil3KnZGdEvXhJ9OoE1C7cM63diy%2Baimd9x%2Fq3IQFZOyUnRH7YT&X-Amz-Signature=9101fe41ae84ae0beeeb5beabff9c37264f0b7c2d7a58ea0e5dd750a64469d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDPPWKAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCci3EGuhuuW%2FrIvcVi8OJ90%2BLAU3LuEm1mXr2B2U5E3wIhAPxh4KyfgAU%2Fb%2FXFMRMALiJk8MmKnOfUFjOEVfADGJqGKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFKjWhAz9i2skOsxEq3AMh98dHfZfsdyHc5VfKfYARxJYWY3GziQ3Fvs9hgemT3qyt2TpJWsgeEga6QbmBWrJk3jc4upnPZtXTeqN2LUY8JWROL0U9MAAIirdDHew7dj1ba9Zp5ib8qK%2Fc%2FDSrBjcBXfWL4JiY6xUxjQS7rHU3Eds50XyGVn0AmgNlKxn03%2FOOJKJNaGZgR3fpta9BlejdV2bVByPLg1b9pjLO5jvjgGkwN4IehKUy%2BcEArIdCh00AELVX1QKNpD%2FUDY5jxdUBN6hNTEp30zPnLLd%2BCfJtOMJJfmkZJD3%2BpaykSXnvJ8yKGjwTXWRY0l6HQofmdfDHXUDXJfN70jNnj8gJs3scBppM2iMsudMzJ7XomESbjndYjnhiWwXag%2BPAmj2Ikcn3XaBma5Pr%2FuUgZh%2F6S%2BM9QugC6Z7E7hEORvYyVsFL2PLvkSLlGiwHjjkAz5%2FbejK3L34S1L%2Fe4YvQ0avL0IimnZNZCyfEKmLrgTpyVDVwCu8yq1mniiC50uW6kmXZfqkXLne1UnpRXCfezT4zOBFYD3l0VRx4XRXYT42k6af6M8P%2Bq%2FnGtHlROYO9hx5KEqzgCyRLK%2Fhs%2FS0VPHhF6MdPrNvv8O96fkPzPFcARfMi%2FnS54GRnOaUYIACBPjCBpNTJBjqkAfTxVL%2Bvep0aXhkp1dxfBkcQHXclm1KhEDNDhqwdjrEL1wWdWN7vmGaWwq8asAUrBVIiyz%2F7nCeE8SdvDC7DWWcl3vT0zIKsyBRe6dJh9Q7krTVTfJ%2Fz7e6lcoR%2FuPHYDaCnkLZiy7J4wt0BLODyfvKczZSCoBasq4vVShxJknil3KnZGdEvXhJ9OoE1C7cM63diy%2Baimd9x%2Fq3IQFZOyUnRH7YT&X-Amz-Signature=66d1df89caf6fdf7afc0869cf25c51581a916915f0990969f89114911c9a428b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
