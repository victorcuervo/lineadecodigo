---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGWXRN7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGzAFDHXm7WzwJ7RZT9AB9p8zTG%2FLp8B804fsHOu%2BaIJAiBpVOtFFUXcBJpu4cJz5Kv611pkyTTWvnx5czqSfZLq6ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiAiYXnbxGtPFx8%2FyKtwDv9ny1ia8iBfrr%2FzdBLHkZ6EhQL8nPnusY9qDBqYpKJyGL0BmoCj%2BtuOmaknbCSdzuRyVUKDp6vlv%2Bl64uQLJGZJr46KkDOlFYOyHwffME%2BZpEVY7jiVpVBLX%2FHaafNcr4dadkhwFvKGc5y13fPTZEQdGAVNoD72Tsh76qh7KzAWFE56NsPWZbeNVmkhRiXyV%2B67%2FeMA%2FLlx0bbjAiwOLY4dSPenF%2B%2BYuTDRRBhtCv1U0iy4bE%2BeMQ7uhWPEH9QfuX6a0%2BHsait5yzl0iQez5ewcvixKrrdUYKnQMIj7Zrm0Ls8zw9u1eiG46FdeiMexi3SC%2B%2BLrccnntaOsOEpaZhU5HP%2Bej2gKSCq0qDdC847YNFwHKat5ZL%2BlLmn8SYuGi9g%2Bts00e9qELTwRkV%2BHauvdvOn7iX1yagRKg%2BwJ9xQt3k3QVMGmO6Uhoj3l3JbGBWpzCkXx%2Bgh%2FxE4t0J%2FoAK7QLqnLM5VpYsQ6bV%2BTaYkZyVNb1NwE57Bfie5RlkJ8rjrZ%2FWqCqNjqaD%2Bfw0%2FkdSY5SolqW%2Frp8%2F2XqXbKJ7pMHgspySHWL2C0NxI9uBijUVXBSY7cx7HxXIqXvZT490V%2BH7F3pqdTOIuebHsLTvt0jCBdJPbKAEk2oGMkw3JHCyQY6pgFyTda4o88alwrGDZl156jn1WtsoyL9l%2BQgjtkn5lRIv6Z%2BWDCs89OMS7XWqG9e00fuBgzPophT%2BYAGAR4uAyFdqk4mKfabdw3c1bMrC2uhCtzdSVxdQosfuWmt7x3msHSoK%2B%2FzHK95NFENzWlfWpTZDnvfUT41Rs0nxDfU7Sut%2B1CCFipMRb6nYlXeRVlyBRSNiZLXJai7ubbugDI4WarUtD6RoJn2&X-Amz-Signature=d842b0b93d259df163900bf4b13ff5d550f0687368099390a45614b19d8389d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGWXRN7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGzAFDHXm7WzwJ7RZT9AB9p8zTG%2FLp8B804fsHOu%2BaIJAiBpVOtFFUXcBJpu4cJz5Kv611pkyTTWvnx5czqSfZLq6ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiAiYXnbxGtPFx8%2FyKtwDv9ny1ia8iBfrr%2FzdBLHkZ6EhQL8nPnusY9qDBqYpKJyGL0BmoCj%2BtuOmaknbCSdzuRyVUKDp6vlv%2Bl64uQLJGZJr46KkDOlFYOyHwffME%2BZpEVY7jiVpVBLX%2FHaafNcr4dadkhwFvKGc5y13fPTZEQdGAVNoD72Tsh76qh7KzAWFE56NsPWZbeNVmkhRiXyV%2B67%2FeMA%2FLlx0bbjAiwOLY4dSPenF%2B%2BYuTDRRBhtCv1U0iy4bE%2BeMQ7uhWPEH9QfuX6a0%2BHsait5yzl0iQez5ewcvixKrrdUYKnQMIj7Zrm0Ls8zw9u1eiG46FdeiMexi3SC%2B%2BLrccnntaOsOEpaZhU5HP%2Bej2gKSCq0qDdC847YNFwHKat5ZL%2BlLmn8SYuGi9g%2Bts00e9qELTwRkV%2BHauvdvOn7iX1yagRKg%2BwJ9xQt3k3QVMGmO6Uhoj3l3JbGBWpzCkXx%2Bgh%2FxE4t0J%2FoAK7QLqnLM5VpYsQ6bV%2BTaYkZyVNb1NwE57Bfie5RlkJ8rjrZ%2FWqCqNjqaD%2Bfw0%2FkdSY5SolqW%2Frp8%2F2XqXbKJ7pMHgspySHWL2C0NxI9uBijUVXBSY7cx7HxXIqXvZT490V%2BH7F3pqdTOIuebHsLTvt0jCBdJPbKAEk2oGMkw3JHCyQY6pgFyTda4o88alwrGDZl156jn1WtsoyL9l%2BQgjtkn5lRIv6Z%2BWDCs89OMS7XWqG9e00fuBgzPophT%2BYAGAR4uAyFdqk4mKfabdw3c1bMrC2uhCtzdSVxdQosfuWmt7x3msHSoK%2B%2FzHK95NFENzWlfWpTZDnvfUT41Rs0nxDfU7Sut%2B1CCFipMRb6nYlXeRVlyBRSNiZLXJai7ubbugDI4WarUtD6RoJn2&X-Amz-Signature=692ebef6ded48717531877bb64b0087405c421347f419abb2c8c4186f4af3bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
