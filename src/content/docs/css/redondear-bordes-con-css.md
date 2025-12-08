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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVU6BOJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa4W4O58yzLreG65s8rQ63vM9kRirM8gRx39foZOvoyAiBsYXEvywx%2FQVAZFDSzdYAzISbWx7D32BCjtgiY7zZRaSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH1NAdPpEQ7IKzciKKtwD6PeEvHovaAEaQNRhE0ktk7WP%2ByFMFDcKPHFot%2FtvKF7TkvCJ8WBO3tokPbK5UnVH%2BOGaVbqnYCUYv%2BbEBp8c8V%2BGpF2xlzEWdXGePkGoohCSqAl0CkHxHXdE4bzC8ud0b8BoIDIdv4bH2fkl5TDqzBrlMmLWqiWDaynRjWFOD79kP39340iiLurJABASbYQ64Yc4b5p6ET3eYBg2YMSw0PqYvZ4WtUjzbpQ7Lp5oo9Q3NxXjdszmHQc4MHZ9D3ldlt6sj1WyhWgdDNEN6jsJxduL6OUhP%2BEea7rQajWuAYOY5DO9MWI3ZKiUHbcplg8vtw60WBufy3HP%2FgWv7Shu1jpcO%2FqmTJChi%2FkctxPhsprZQ1OxFRO5gGlFgz95V4uOgYKv99pNYNj17kTl9KFc4H7XFkV8zW9Jf3SQzofZ1sDJH2%2BRekMoszMRaEIRBDl%2FTyMDRb5U3Agwu%2BC4XGi%2FypZRC8kpcVRlQkIZbo4QTvEbxT6p9xS6DmVrLBojP1FgdsFttMvkvSwgcpRDdgdU89qP030d5o3In1g6XomXSFN52%2FdbUUqvIDRiIySnZkbYdZ%2F5pL6GlERoaMNN9JuUdGLyhbS94r3k60YYvVurOcfJphCjNzTnWr35O9owwJTZyQY6pgEi0blzOfJAtaRNX4bML2N6bKCp1QT%2B4MK6Y0KE2j0QonRsD3vmFpPyUga074vrNCll2q9gtVsIU3zU%2Be9a92sFC%2FnHaJNStwxw90vTVqSllU30fkxkgzGiX90iJGaIEvqLth3vulSQdMiojL88h49uED%2B8kfD1QVy3rzeAC6I6mflAm0epZefHqDJcx7qD8dAahvqKKZRy4ZS8Qb9XsuIq%2BuKNys8l&X-Amz-Signature=349a10cd98619d3703db6b2954d0718d8947da461f28fa9ac5cdac7ff5d31972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVU6BOJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa4W4O58yzLreG65s8rQ63vM9kRirM8gRx39foZOvoyAiBsYXEvywx%2FQVAZFDSzdYAzISbWx7D32BCjtgiY7zZRaSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH1NAdPpEQ7IKzciKKtwD6PeEvHovaAEaQNRhE0ktk7WP%2ByFMFDcKPHFot%2FtvKF7TkvCJ8WBO3tokPbK5UnVH%2BOGaVbqnYCUYv%2BbEBp8c8V%2BGpF2xlzEWdXGePkGoohCSqAl0CkHxHXdE4bzC8ud0b8BoIDIdv4bH2fkl5TDqzBrlMmLWqiWDaynRjWFOD79kP39340iiLurJABASbYQ64Yc4b5p6ET3eYBg2YMSw0PqYvZ4WtUjzbpQ7Lp5oo9Q3NxXjdszmHQc4MHZ9D3ldlt6sj1WyhWgdDNEN6jsJxduL6OUhP%2BEea7rQajWuAYOY5DO9MWI3ZKiUHbcplg8vtw60WBufy3HP%2FgWv7Shu1jpcO%2FqmTJChi%2FkctxPhsprZQ1OxFRO5gGlFgz95V4uOgYKv99pNYNj17kTl9KFc4H7XFkV8zW9Jf3SQzofZ1sDJH2%2BRekMoszMRaEIRBDl%2FTyMDRb5U3Agwu%2BC4XGi%2FypZRC8kpcVRlQkIZbo4QTvEbxT6p9xS6DmVrLBojP1FgdsFttMvkvSwgcpRDdgdU89qP030d5o3In1g6XomXSFN52%2FdbUUqvIDRiIySnZkbYdZ%2F5pL6GlERoaMNN9JuUdGLyhbS94r3k60YYvVurOcfJphCjNzTnWr35O9owwJTZyQY6pgEi0blzOfJAtaRNX4bML2N6bKCp1QT%2B4MK6Y0KE2j0QonRsD3vmFpPyUga074vrNCll2q9gtVsIU3zU%2Be9a92sFC%2FnHaJNStwxw90vTVqSllU30fkxkgzGiX90iJGaIEvqLth3vulSQdMiojL88h49uED%2B8kfD1QVy3rzeAC6I6mflAm0epZefHqDJcx7qD8dAahvqKKZRy4ZS8Qb9XsuIq%2BuKNys8l&X-Amz-Signature=5c7903a6c834f953e4d51c38289f788256db55d9780d33f850ead76ccee4047e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
