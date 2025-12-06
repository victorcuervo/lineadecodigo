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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLVYC4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKlk%2B9SqiYlgFRaseydKO%2FVU3nJCgyShBoeg187%2FMDCAiAzFxfLXXPAv8JHk%2FJfBORerWmtxN5jumfHrOD7h%2FHwNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5lsw1edXB1YeV0dOKtwDqLw1zppgMtwoWRuIc7wF6nQEFsYjYCyDcbOyDeAPgHMRHMTpOUOYDUT8OrLi29urQGy78buCgzxrfbM5Pm3VPbLAQXoR%2BnpwI5H6IvSfZQwCzSmwiyOO0RhVV5eRJU%2F5%2FGf3R446T5DGWr%2FPwoJIe6PXJPGRKXvwuwMr4Klag1qC7hU2rzW2zo9o62O7rBmR08mXkO3v83JLJHe1K3Zrt2%2FcJszbffVT7sefqZFVujLhQHwEjWddmlFfha8spcdGO84KmaL6f05G0Ggs5Kyvsy%2FVB%2BZw4919Hw%2FhChIrUgZ3TcVlAKSfeQVVFkd9Uvindog4MieBjZNoE7ZqwclmnRndErF8YXtkyrj81dEw%2FA7b%2BbX7XOPgKZhFWiOp3FT4eA1hSHuhQ0bMxKfHcswvG%2F7gpNodmaAigqtJQ%2FzyMFuJmVXc64sVYSVbSJpve0dRwu%2FESLW%2FqtpFBt6JWDW6YYAvOblI9Svva%2FgTYVW6b6hSyuSOvjLTZpmSJWQjXS4u9DwFHIXFQ5w7i2%2Ff24iV2AB3Xz403bGbukHkonhpGoSsSUpGUJBt4bIuMfHq%2FhLtB4%2FvSMfQPvnxTXF228cn%2BEQ2EIHZD%2FW7DNFWx0eSvMfyxJ81a89jbaV1Fbowu6bQyQY6pgEDd6adSSmdZj96Buypek9F80yYG0L5skhVXBMNcRzYrWnIhGDuQOXvIiMqE9ltoy7MRjZAjy%2BaIusDgxO5oj6ZRJGrmdPVQHuxtZbgKwP0XQfU1CpH%2FubzREKgwzBVwaM8gdxk5A6jM1klT6nKYTVx3%2Flfw10WzN08OgPUWB%2FAklXYMVH8bqEl7RDKOxBBTiRQ%2BhBYHPBTnentp0mRXzvD48DWpR3Z&X-Amz-Signature=30e81fdc4fbad522a2f72af3090e6d23b11490fc4f31a19833580bf1b57c0010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLVYC4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKlk%2B9SqiYlgFRaseydKO%2FVU3nJCgyShBoeg187%2FMDCAiAzFxfLXXPAv8JHk%2FJfBORerWmtxN5jumfHrOD7h%2FHwNyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5lsw1edXB1YeV0dOKtwDqLw1zppgMtwoWRuIc7wF6nQEFsYjYCyDcbOyDeAPgHMRHMTpOUOYDUT8OrLi29urQGy78buCgzxrfbM5Pm3VPbLAQXoR%2BnpwI5H6IvSfZQwCzSmwiyOO0RhVV5eRJU%2F5%2FGf3R446T5DGWr%2FPwoJIe6PXJPGRKXvwuwMr4Klag1qC7hU2rzW2zo9o62O7rBmR08mXkO3v83JLJHe1K3Zrt2%2FcJszbffVT7sefqZFVujLhQHwEjWddmlFfha8spcdGO84KmaL6f05G0Ggs5Kyvsy%2FVB%2BZw4919Hw%2FhChIrUgZ3TcVlAKSfeQVVFkd9Uvindog4MieBjZNoE7ZqwclmnRndErF8YXtkyrj81dEw%2FA7b%2BbX7XOPgKZhFWiOp3FT4eA1hSHuhQ0bMxKfHcswvG%2F7gpNodmaAigqtJQ%2FzyMFuJmVXc64sVYSVbSJpve0dRwu%2FESLW%2FqtpFBt6JWDW6YYAvOblI9Svva%2FgTYVW6b6hSyuSOvjLTZpmSJWQjXS4u9DwFHIXFQ5w7i2%2Ff24iV2AB3Xz403bGbukHkonhpGoSsSUpGUJBt4bIuMfHq%2FhLtB4%2FvSMfQPvnxTXF228cn%2BEQ2EIHZD%2FW7DNFWx0eSvMfyxJ81a89jbaV1Fbowu6bQyQY6pgEDd6adSSmdZj96Buypek9F80yYG0L5skhVXBMNcRzYrWnIhGDuQOXvIiMqE9ltoy7MRjZAjy%2BaIusDgxO5oj6ZRJGrmdPVQHuxtZbgKwP0XQfU1CpH%2FubzREKgwzBVwaM8gdxk5A6jM1klT6nKYTVx3%2Flfw10WzN08OgPUWB%2FAklXYMVH8bqEl7RDKOxBBTiRQ%2BhBYHPBTnentp0mRXzvD48DWpR3Z&X-Amz-Signature=a0c50575843e72f08c894fd0f8208f9eb2d462a21030e2a3065c29dbb5bc7318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
