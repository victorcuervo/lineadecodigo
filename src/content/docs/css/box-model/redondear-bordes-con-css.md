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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XDYYT6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxB7vLxR4VstFYn1eAApB7AjKqX35LtDGntmaSAItuuAiBgxouB66FV8EkQZHuk193PQS%2F6qtweYqhhE4vlY0YDlSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnT87W4lBq%2BUCsEtwKtwDtb3HapUgx0xFrS0v5CfpsyJCBcnUS3TLAd20V0uFYkcRvAeE0cNA4B6Trs87FYjjuKywROG9mbKs7LvmD59T3A%2B0lF0V6Ro8jlLNlBvJZf1%2FhETzfq5Oszq4Bf3TSywqHGmJpOs8GwgpFd1Yuy9H75TpIoaKVylvxPF7qTfsAjQ%2B4TPNszAl5mXyaOxHyaGEd9FpPUjfRnQ%2FuY%2FxTsqSUWviYp2gqIi337xAAHHgus3gM5gVQqgjpsMegcCraKFcspb0PZByEc%2F0UgpJI%2Fq8dZgU9h1QEchuT0lqn6XlIC%2F3EkZvwbZTk0n9b2cG77lUFAFDD2jh5qvHmfUI1Lq6WYUeHXAJTqpbN4ZwJ5bTdU6SJpeRi7XSXcBXPiuzMH%2FurK70YYnqvsc3N7FRPla1kTuBfCnQ%2Fgvb%2BSsf4eAYeqz0dSNU0%2B49j1gs%2F9ij8Wyr9q5MSt3nZxodH6HjNhwltlCm12NJfP04GsfzJhDR7cqlcq07ob1ovT%2Fdjpdedg5Uurajo95qbZrdj4%2BAsARXaEW4U8h6bs7yyevkCtjkGmgSV%2FowadLF%2BrLd4IY9oPjXWW4uu24Hv4w7WWLjrKuCBgtxHo3uPIgNnQRJ41kR1JTiOhpUNtx4QTMdlPowjs6IygY6pgEQjHRjiMaE2wr82OWCpkjP8J5nfYRMeSCmXouyXR8nDThPxfyQNw6wRvfyFGEKs1uTsq9quPQUrB3v3af10vRzn4yYhnNk%2FqIoVCLrqa%2FD%2Bak4i7qiUULT4qUQ8jeR6DIIIMdPX7j6rjwh3qZRd9hNtwAw4V1v9ra34NGQR3sgwelpjgapPrdkjzOzSHCixZMsSwZa%2BnmIACUP8KyhJ1gCSW0YssC6&X-Amz-Signature=879db80c0eebac02f3f825886bf55919416e99066b1729fc3a6c5f6129004ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XDYYT6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxB7vLxR4VstFYn1eAApB7AjKqX35LtDGntmaSAItuuAiBgxouB66FV8EkQZHuk193PQS%2F6qtweYqhhE4vlY0YDlSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnT87W4lBq%2BUCsEtwKtwDtb3HapUgx0xFrS0v5CfpsyJCBcnUS3TLAd20V0uFYkcRvAeE0cNA4B6Trs87FYjjuKywROG9mbKs7LvmD59T3A%2B0lF0V6Ro8jlLNlBvJZf1%2FhETzfq5Oszq4Bf3TSywqHGmJpOs8GwgpFd1Yuy9H75TpIoaKVylvxPF7qTfsAjQ%2B4TPNszAl5mXyaOxHyaGEd9FpPUjfRnQ%2FuY%2FxTsqSUWviYp2gqIi337xAAHHgus3gM5gVQqgjpsMegcCraKFcspb0PZByEc%2F0UgpJI%2Fq8dZgU9h1QEchuT0lqn6XlIC%2F3EkZvwbZTk0n9b2cG77lUFAFDD2jh5qvHmfUI1Lq6WYUeHXAJTqpbN4ZwJ5bTdU6SJpeRi7XSXcBXPiuzMH%2FurK70YYnqvsc3N7FRPla1kTuBfCnQ%2Fgvb%2BSsf4eAYeqz0dSNU0%2B49j1gs%2F9ij8Wyr9q5MSt3nZxodH6HjNhwltlCm12NJfP04GsfzJhDR7cqlcq07ob1ovT%2Fdjpdedg5Uurajo95qbZrdj4%2BAsARXaEW4U8h6bs7yyevkCtjkGmgSV%2FowadLF%2BrLd4IY9oPjXWW4uu24Hv4w7WWLjrKuCBgtxHo3uPIgNnQRJ41kR1JTiOhpUNtx4QTMdlPowjs6IygY6pgEQjHRjiMaE2wr82OWCpkjP8J5nfYRMeSCmXouyXR8nDThPxfyQNw6wRvfyFGEKs1uTsq9quPQUrB3v3af10vRzn4yYhnNk%2FqIoVCLrqa%2FD%2Bak4i7qiUULT4qUQ8jeR6DIIIMdPX7j6rjwh3qZRd9hNtwAw4V1v9ra34NGQR3sgwelpjgapPrdkjzOzSHCixZMsSwZa%2BnmIACUP8KyhJ1gCSW0YssC6&X-Amz-Signature=0bf9a6f90329b117917b9429276fe69204ef5e1a563caf6d1e79fb41869baca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
