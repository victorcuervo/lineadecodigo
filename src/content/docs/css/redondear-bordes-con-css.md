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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5KQZ2M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FcWXEJjEHMkJ83PKxvcfOavax0OMmjJ7NRsQy22BlvgIgWC%2F9j5A1jstAVi6LegaoK8oxRB2ukF51bRqJsdoDEB4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBf3LRzc2b76fDZ3yrcAyXkDVMk%2B6ttduUwSukCeLMo2ofgpsQgSOS4%2F6NahtrnUKAKJWg%2BG8VWl22V0oy2w%2Fag1yrcuKPFLc%2FkWVIPFCY1m2DU4eFHqCWcqrQ2kczNDfBeZc7OGAz5kRrblG%2BTzS7bQgtVddw4T1Xr4ohgrEOfmBytCDCQlp0%2F%2B7xRp7VmsO3ZduiFokWmIyeW8BY7aD53mlFOTfYDMGJyVGfZW73doLcZCwcifoRfJohJDC3sX4DF5O67y66qwUE%2F%2FCWYdmK0gTA8Ms%2BoeBKeeWEwioQvVgQh80M8gJdW%2BUnv5OtwP0Q5%2FJ0tN2lfCs%2F5lm3C8gVu68PaS9shYlXJSmQFDR6tfK9iWBTJB0xgViZmNdsnQoU26Y3wgQSN2jI%2BxqHGZEs7d%2B60%2FnmTNwsNmmMkCU4Ujc8VQj3i2L%2BClRufupnP6PLy45vS6BAZLYmVIgC2CoDloc6L%2BD0rOwhsBbWvoe1LmJouS%2Bl1TLJq9FioGhjEaJtjWe%2B87OCQ3w4T6ZF5nu3U7A65C3Avovp7YPvBSPTjBBgbfKV%2FcB28i9Jwe1KCFhvz1oy742WJOE4sxeqUhK3kbta6sdHeHsjRFy28JC6n2ubHl484X9EkvWIUMsg4qc8uZ0pF2IePkcqFMLKA3ckGOqUBGhpV21dG2x3m4B75Y8mpRv2vq5NNpTa6Oa9a77OEkwNzShtE73cYdAZf%2BKdOk0RqO5jkcaPfLf3Rqd%2FOuw%2FfgKLjQ8InKaF2KXH1x8NyuAXGagsEo7rWsA31sNNkv9iIux8DF9jx7vqTGU649gluQpaPJhERZbSjufTt%2FKdxeDbYP4rFnvyjihNMGDK4Mp0VThkNK7CZVorsQvQ08fwv8dzS4Q6g&X-Amz-Signature=5fecf37c1ba2a068889f601a69baae8bdcd5fec0695b7e61b5a412becf00e6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5KQZ2M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FcWXEJjEHMkJ83PKxvcfOavax0OMmjJ7NRsQy22BlvgIgWC%2F9j5A1jstAVi6LegaoK8oxRB2ukF51bRqJsdoDEB4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBf3LRzc2b76fDZ3yrcAyXkDVMk%2B6ttduUwSukCeLMo2ofgpsQgSOS4%2F6NahtrnUKAKJWg%2BG8VWl22V0oy2w%2Fag1yrcuKPFLc%2FkWVIPFCY1m2DU4eFHqCWcqrQ2kczNDfBeZc7OGAz5kRrblG%2BTzS7bQgtVddw4T1Xr4ohgrEOfmBytCDCQlp0%2F%2B7xRp7VmsO3ZduiFokWmIyeW8BY7aD53mlFOTfYDMGJyVGfZW73doLcZCwcifoRfJohJDC3sX4DF5O67y66qwUE%2F%2FCWYdmK0gTA8Ms%2BoeBKeeWEwioQvVgQh80M8gJdW%2BUnv5OtwP0Q5%2FJ0tN2lfCs%2F5lm3C8gVu68PaS9shYlXJSmQFDR6tfK9iWBTJB0xgViZmNdsnQoU26Y3wgQSN2jI%2BxqHGZEs7d%2B60%2FnmTNwsNmmMkCU4Ujc8VQj3i2L%2BClRufupnP6PLy45vS6BAZLYmVIgC2CoDloc6L%2BD0rOwhsBbWvoe1LmJouS%2Bl1TLJq9FioGhjEaJtjWe%2B87OCQ3w4T6ZF5nu3U7A65C3Avovp7YPvBSPTjBBgbfKV%2FcB28i9Jwe1KCFhvz1oy742WJOE4sxeqUhK3kbta6sdHeHsjRFy28JC6n2ubHl484X9EkvWIUMsg4qc8uZ0pF2IePkcqFMLKA3ckGOqUBGhpV21dG2x3m4B75Y8mpRv2vq5NNpTa6Oa9a77OEkwNzShtE73cYdAZf%2BKdOk0RqO5jkcaPfLf3Rqd%2FOuw%2FfgKLjQ8InKaF2KXH1x8NyuAXGagsEo7rWsA31sNNkv9iIux8DF9jx7vqTGU649gluQpaPJhERZbSjufTt%2FKdxeDbYP4rFnvyjihNMGDK4Mp0VThkNK7CZVorsQvQ08fwv8dzS4Q6g&X-Amz-Signature=c51583a1ce71d94debb44aaccbaf0ed12c9171b002b85fc529312cf4fd9dbe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
