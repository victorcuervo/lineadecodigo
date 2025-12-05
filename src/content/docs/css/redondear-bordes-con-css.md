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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZEVEKQL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi4J058vjpGYzgDvYl1JfrjBufBNoPnXHqvU5Ef5F6EAiAWG9pg5h6xig67cdxJiu2OUA%2Fhi4mW8dDbaNvVYJShPir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM8V4%2FIRQU87gRLkLLKtwDgLrSYyFAyE9Jvo9ndqdJ924KBB8EXLno9N4i9NI5ve3tXnAj%2B90fv82lxHToox825807Kr%2BnDaquHcLUfpvlKbGCLYOcUkr5bHfrD23Z%2Fglgvy5WjRajABytllFl9thFJcWVY6YkwlXN1d8laZJrWhPUZT%2B0d5pGcPtgYApV2CzVsBfq6wYBDqiGt49IZNFVoZzzkFz8Vxodk4Py07lR%2FQi%2Bg11PTngtWZL9dFAt8OjFvoBA8JXgqMjpqhYBAlcExsNy7aCxY%2B0ZZAF2VJ%2FV9WNXRx6rXdeagPxN5NzT8V4nBUwmOnQXMz93LtJwk6YaQpHlx0H3vSjeRP5qLXPSmS%2Fp6ViIWA8eStGCfn6oldW96xDXbjrS8NtAT71Dq%2FTQoFGilPEUEFOJd7I9bpcgnm73sjYavSQ5Egwli95stw7wPBxn4iCqyQbev3vn4MqDeDe9pYVT9I9sWGMnIFbXH0i9sPFsyHtq5uS6n6pzIHktgjvGu1uJCxF04KkLXh3%2BfefgvdsOa1FRp6H%2BanGwQwBLZFdTcxnqIMq0ORjDlvvbXXL3K2qlaex5GTe142jxJq6KVXmFpcJ%2BxH3w28oQOnx5gjNteXcchhpNsVWwKNn9ccSATNMz8WYqWVcw%2F4vIyQY6pgETGh61JPegN4E7%2FiMwEzDWkXp8sdVJkINtgh%2FPWmXAb4HSaFh5BQQPETBAE3kmEUGGjLA1Y4DVQDUhDZA9ZHouXomg%2B7V5lKLkZLVgV3s3ev%2B9S8hHRzoosK12CW2edKokmvPgbyxQd7Lj2QXmO8poEWnjzECRCI3X7hao4ITfCZuXjmE8dRsUFC2sr3eJr3OYLOYrVXoxU2Sy1FkfcyI%2F%2FIMSNUbG&X-Amz-Signature=7fb5b0b20113adbd65052a5482a639335694f4e3e2308fc9ac9e9a56946ae095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZEVEKQL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICi4J058vjpGYzgDvYl1JfrjBufBNoPnXHqvU5Ef5F6EAiAWG9pg5h6xig67cdxJiu2OUA%2Fhi4mW8dDbaNvVYJShPir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM8V4%2FIRQU87gRLkLLKtwDgLrSYyFAyE9Jvo9ndqdJ924KBB8EXLno9N4i9NI5ve3tXnAj%2B90fv82lxHToox825807Kr%2BnDaquHcLUfpvlKbGCLYOcUkr5bHfrD23Z%2Fglgvy5WjRajABytllFl9thFJcWVY6YkwlXN1d8laZJrWhPUZT%2B0d5pGcPtgYApV2CzVsBfq6wYBDqiGt49IZNFVoZzzkFz8Vxodk4Py07lR%2FQi%2Bg11PTngtWZL9dFAt8OjFvoBA8JXgqMjpqhYBAlcExsNy7aCxY%2B0ZZAF2VJ%2FV9WNXRx6rXdeagPxN5NzT8V4nBUwmOnQXMz93LtJwk6YaQpHlx0H3vSjeRP5qLXPSmS%2Fp6ViIWA8eStGCfn6oldW96xDXbjrS8NtAT71Dq%2FTQoFGilPEUEFOJd7I9bpcgnm73sjYavSQ5Egwli95stw7wPBxn4iCqyQbev3vn4MqDeDe9pYVT9I9sWGMnIFbXH0i9sPFsyHtq5uS6n6pzIHktgjvGu1uJCxF04KkLXh3%2BfefgvdsOa1FRp6H%2BanGwQwBLZFdTcxnqIMq0ORjDlvvbXXL3K2qlaex5GTe142jxJq6KVXmFpcJ%2BxH3w28oQOnx5gjNteXcchhpNsVWwKNn9ccSATNMz8WYqWVcw%2F4vIyQY6pgETGh61JPegN4E7%2FiMwEzDWkXp8sdVJkINtgh%2FPWmXAb4HSaFh5BQQPETBAE3kmEUGGjLA1Y4DVQDUhDZA9ZHouXomg%2B7V5lKLkZLVgV3s3ev%2B9S8hHRzoosK12CW2edKokmvPgbyxQd7Lj2QXmO8poEWnjzECRCI3X7hao4ITfCZuXjmE8dRsUFC2sr3eJr3OYLOYrVXoxU2Sy1FkfcyI%2F%2FIMSNUbG&X-Amz-Signature=00117572c2d412276580ff835802012c6d46b5086b8a78c71a1d8995c0453932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
