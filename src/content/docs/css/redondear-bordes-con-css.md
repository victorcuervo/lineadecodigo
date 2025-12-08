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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ3BKQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQQrMfbmYC2t1s4kdxhQQOWpV3ZOr%2FJ5sph9TrLBjKzAiBc3BVGrWP1nLgmCLkvtSz046uBdaTwchzp%2BZOABlyWZSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPpjqSiZ8fmmjXtGKtwDpB2TD3Lp3q9tIItG3V4zXC7C8UUQ7Y%2F0eO2yNOiPUMjBO%2FwKPa%2BSsLePjZAzuo0VdXnthBTs073ADPlpdOWr21HuZ5c7vzz7JnzsNwxG9IcOK%2BEuI5ueJ%2FWzvOu2dtk56gBOFWEP01JGhDFd6HZ9wNtuo1Jxvax4zgZPanC%2BUUCHwW%2BB4C8ZZCQo8fX8m5yOdiAML65DLqXOWOG2g6%2Bhpz9PdouRwKfqFvVwPKDOoh9EZeAIcrYIjchTwhE8LElcAr36kenF0QF7GYSDlPD3XrD0h6eaNQc1KdYTJhZz3B%2Fv9S3dazWP1yQzbpk%2FB6iOwOiKaJsTaZWPfPxNYCf60YAIwiCzcei3sKKtX8xJ2uKOCpIc26Cpq3PkAEHpahntr%2Bn%2FfpcImlJ9qdl%2F%2BYYywg53pb%2BS9C2fnRBihpsHxPHPHvo4Ks%2FDbu7LxlK%2F%2BOF5ivBHW%2BZm39g6050KFHsduZr%2BVbKuRqaUmjQLP76Ah6gRyx%2F8hhJWcte2H%2BeCGVNzoiT36JdKORNP5VUIDns%2Fi1VnVGr5BI5gAYObEDCzQT6UFNp2N2xTek3JBhT8Y9aZ8F2CaHw0oaQeO2V%2FtqiE7r24PZfm3Nsn9yZwx4X9VOI0lB%2BcMd7P%2B1u%2FppYw9qHYyQY6pgFz3r81PyO%2FUvAuIxqAKcXi4N0xVsNMD%2F%2F%2BfhmFHHFQpdXVhCok6GjUOtg3ICsvy3SLc89MWPOX8xz6cBPFJX6xymUhXsW6mbrrH6XTfB%2FfEmN5whsG9Jn9y1Rnb7Fb8PNQKSntrDYYcW8WFR2loAhK64dua1u%2FnqWKsCmR3bOoiXBmGVV36UR77ihH%2FS0xhZfyryTwy01gpVYrWWSREUnnrPqn4xt6&X-Amz-Signature=cfe07dc3b5e23c8f959a42ce2a89ec17908193080fae59e2746a9f6bc926c258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZ3BKQP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQQrMfbmYC2t1s4kdxhQQOWpV3ZOr%2FJ5sph9TrLBjKzAiBc3BVGrWP1nLgmCLkvtSz046uBdaTwchzp%2BZOABlyWZSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAPpjqSiZ8fmmjXtGKtwDpB2TD3Lp3q9tIItG3V4zXC7C8UUQ7Y%2F0eO2yNOiPUMjBO%2FwKPa%2BSsLePjZAzuo0VdXnthBTs073ADPlpdOWr21HuZ5c7vzz7JnzsNwxG9IcOK%2BEuI5ueJ%2FWzvOu2dtk56gBOFWEP01JGhDFd6HZ9wNtuo1Jxvax4zgZPanC%2BUUCHwW%2BB4C8ZZCQo8fX8m5yOdiAML65DLqXOWOG2g6%2Bhpz9PdouRwKfqFvVwPKDOoh9EZeAIcrYIjchTwhE8LElcAr36kenF0QF7GYSDlPD3XrD0h6eaNQc1KdYTJhZz3B%2Fv9S3dazWP1yQzbpk%2FB6iOwOiKaJsTaZWPfPxNYCf60YAIwiCzcei3sKKtX8xJ2uKOCpIc26Cpq3PkAEHpahntr%2Bn%2FfpcImlJ9qdl%2F%2BYYywg53pb%2BS9C2fnRBihpsHxPHPHvo4Ks%2FDbu7LxlK%2F%2BOF5ivBHW%2BZm39g6050KFHsduZr%2BVbKuRqaUmjQLP76Ah6gRyx%2F8hhJWcte2H%2BeCGVNzoiT36JdKORNP5VUIDns%2Fi1VnVGr5BI5gAYObEDCzQT6UFNp2N2xTek3JBhT8Y9aZ8F2CaHw0oaQeO2V%2FtqiE7r24PZfm3Nsn9yZwx4X9VOI0lB%2BcMd7P%2B1u%2FppYw9qHYyQY6pgFz3r81PyO%2FUvAuIxqAKcXi4N0xVsNMD%2F%2F%2BfhmFHHFQpdXVhCok6GjUOtg3ICsvy3SLc89MWPOX8xz6cBPFJX6xymUhXsW6mbrrH6XTfB%2FfEmN5whsG9Jn9y1Rnb7Fb8PNQKSntrDYYcW8WFR2loAhK64dua1u%2FnqWKsCmR3bOoiXBmGVV36UR77ihH%2FS0xhZfyryTwy01gpVYrWWSREUnnrPqn4xt6&X-Amz-Signature=978f3681350db5653a86d4bca309cd37e2e22811cff2343b7ea963a1681d675c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
