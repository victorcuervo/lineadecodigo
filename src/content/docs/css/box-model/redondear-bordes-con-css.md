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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJCUVJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxFCb0R5Q6F9lHd%2B%2BdaT2pljmqmDyYywh28%2F2f%2FEj%2B1wIhANTlzMEjmhjBxAPnEt4T7VpN3oEbvsizARyuJhoZQpWSKv8DCHkQABoMNjM3NDIzMTgzODA1Igykt3XBFZMdPExsY5wq3AOwRZMUPp3%2Bw%2BCJTwKXNriR7clQ4FODt1gIKclmSZq%2B23URczxMZDG2VafFBYo0JPvWK%2BeLsVJEfwRYfWN2y5711O5e%2FVmEvUflCsMSPrp1cASP7ktaAbN6tySheOTqM0xaQHU47%2BJghyKiAryQB%2FSRShtB5y6sEoMTHJJpm4rmjt47uS2OsM3%2FLr0ZHLBHBLOf2Ui20J2bbqcFpx6j8uVd0UcsPu6yi%2FsnsODPzRUuLnh8PJTFBeaJuBKm%2BAoEfoodeGFV6wLpIOsMVG5%2Fo4YjemDIgnGwI2lfqUSXlJNv2fydHOcHjaujkdF6ROa6lVYRUE6taYpQcqsOwoZO5%2FrfCBoVlRJWed5YQ7abbfL1VtC1ZqSInSnRjNwoEEQe64fUBeXz86YeltXW93lN7sCq%2BaMWi60bNja8DbgC36CF4n6aSFEuj4DeXM0vmlNWv8%2FRiRiYIpab5kPWrcH4oPHexsuNDPPBcKPezV12L3QOczvdd%2F4O%2B2Z8jkLXWiuDiKwnJkpMi3I5yAh%2BI5DmIxzjUP4du6oBUzuPZkfNQAllS%2FUiaIPL3gC3BrqjOLs7roufV6k2CHehgQNGsbjex%2FhDCVIYwxdWaQg9iXRyDlHzhBB5RIvFkwts%2B6orvTDo0YnKBjqkAZabMQOOjqXuHwidWVlZkPnuqW3wa53I6Ix62u06oz9fy2Q7yBsCWP46QsGnBDYgmYxf0%2BuASzQiRz7n%2FuvtdHvQkQPOVlLRsOJ%2FoAgUP4GjMTYaXdUDTXI7GK0pC0MZ8yleyMgeM0cKnxab47NVpIacymtPnZjcxApLJ64K%2BlhJSfqoLxOKGOrukb3dt10DckcQg82QysSCOeWWTsMTza9zYYk0&X-Amz-Signature=b490de49eacfbae050eac72a75a915673ea6a4ccaa90802516cf2417aa0e69f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJCUVJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxFCb0R5Q6F9lHd%2B%2BdaT2pljmqmDyYywh28%2F2f%2FEj%2B1wIhANTlzMEjmhjBxAPnEt4T7VpN3oEbvsizARyuJhoZQpWSKv8DCHkQABoMNjM3NDIzMTgzODA1Igykt3XBFZMdPExsY5wq3AOwRZMUPp3%2Bw%2BCJTwKXNriR7clQ4FODt1gIKclmSZq%2B23URczxMZDG2VafFBYo0JPvWK%2BeLsVJEfwRYfWN2y5711O5e%2FVmEvUflCsMSPrp1cASP7ktaAbN6tySheOTqM0xaQHU47%2BJghyKiAryQB%2FSRShtB5y6sEoMTHJJpm4rmjt47uS2OsM3%2FLr0ZHLBHBLOf2Ui20J2bbqcFpx6j8uVd0UcsPu6yi%2FsnsODPzRUuLnh8PJTFBeaJuBKm%2BAoEfoodeGFV6wLpIOsMVG5%2Fo4YjemDIgnGwI2lfqUSXlJNv2fydHOcHjaujkdF6ROa6lVYRUE6taYpQcqsOwoZO5%2FrfCBoVlRJWed5YQ7abbfL1VtC1ZqSInSnRjNwoEEQe64fUBeXz86YeltXW93lN7sCq%2BaMWi60bNja8DbgC36CF4n6aSFEuj4DeXM0vmlNWv8%2FRiRiYIpab5kPWrcH4oPHexsuNDPPBcKPezV12L3QOczvdd%2F4O%2B2Z8jkLXWiuDiKwnJkpMi3I5yAh%2BI5DmIxzjUP4du6oBUzuPZkfNQAllS%2FUiaIPL3gC3BrqjOLs7roufV6k2CHehgQNGsbjex%2FhDCVIYwxdWaQg9iXRyDlHzhBB5RIvFkwts%2B6orvTDo0YnKBjqkAZabMQOOjqXuHwidWVlZkPnuqW3wa53I6Ix62u06oz9fy2Q7yBsCWP46QsGnBDYgmYxf0%2BuASzQiRz7n%2FuvtdHvQkQPOVlLRsOJ%2FoAgUP4GjMTYaXdUDTXI7GK0pC0MZ8yleyMgeM0cKnxab47NVpIacymtPnZjcxApLJ64K%2BlhJSfqoLxOKGOrukb3dt10DckcQg82QysSCOeWWTsMTza9zYYk0&X-Amz-Signature=de4c3e0e9473bb64045333c349d418ab43e0606897f8c6f2173fee4781b7dcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
