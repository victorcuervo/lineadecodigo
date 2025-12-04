---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXFENFY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAKlodZHBZ%2BAgKWxugXTwS60dki3dmfRYB550eZ7tJLjAiAa9uhD9zucQz3dXDuH7xJS3EUBmPYFlgfnbOh0DJZ2Rir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMGDRD9tSjp8H308qqKtwD3OXnQOIwtex3T0AYyzntiTNada2qoQh2wxLv1GJwpyKw1kyfn6vKAQQBzPXSKkuuNFm7fCYbvPhybY14fXfUv5tys6OxmmvMNzifvqWkPEHHmocqGDRRSmWX%2FKnIh6IFG9pG5yOTT2rv79sGwJWrQJi%2B%2F5%2BrSmpJKfBxBalZtiP0q%2FQA4rRb1odDYJEfHcl8qsOMMyYOJxpC9HAfIDfHN%2BmOWT6ToMrDhhfsDsnQN9BvntL3qfSf%2BB8sn3zMPtFzEDvjciuYbOJ4erI8IZA9nSliuSf3LMjAfViktrNoCUcq2b%2BdoFr7KTpLbfrRqzUWpMrxNylVAqnCAQxam8PrjlfsTsGKp8yrRa04XPQPQcvswW6mq7%2Bgh%2B9ffWXFpoJYorhzhYuij2N6MoPpvGEi3DCHkDbbywceBiPq%2F3GqO5d%2BWQiZscSNLMqryOlRxkhN98vFw1cX9GYH18D2JP9ZMLhS1NbnZjb941w2ZG68B9zuSM522w5U7TcNoqkEoH0UmcngUmiS3tkGj%2BCZyqr5UlVoLLu1oGzNYZhXod18bAW1zMyNcpP4P94sFs3jeALHZ2NMbpCKt7f6JZUYur5FEGqxQp3fUQAjZdHP3nmcyTy0gpDZOM%2BZ%2BeyKXfsw15TDyQY6pgFq3WU6KN%2B9bYiJv7xnLkTv%2BDzYZmmO%2BUw6oyZWIs2tta08CWE6kPlmEEp3lt6qnxxB2LGcpVRWjE%2BXc7gQYmkgln%2BXY6%2ByZQ11fb4KiygqMvUocOUGxxYjEGSFNiFpkwVf8AnnxyLGSqQTz6rxzXXwvttTfoX4ktSDpcLvQBv5jrZhbGgooykbTgbgkobGK1aSJvAhH4udT3cX22hHME1rHdvWqcSE&X-Amz-Signature=53b45e87cff5790ebedfe589e6d28b32227e298b5cb5ddb4181ba91bfbbe9255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWXFENFY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAKlodZHBZ%2BAgKWxugXTwS60dki3dmfRYB550eZ7tJLjAiAa9uhD9zucQz3dXDuH7xJS3EUBmPYFlgfnbOh0DJZ2Rir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMGDRD9tSjp8H308qqKtwD3OXnQOIwtex3T0AYyzntiTNada2qoQh2wxLv1GJwpyKw1kyfn6vKAQQBzPXSKkuuNFm7fCYbvPhybY14fXfUv5tys6OxmmvMNzifvqWkPEHHmocqGDRRSmWX%2FKnIh6IFG9pG5yOTT2rv79sGwJWrQJi%2B%2F5%2BrSmpJKfBxBalZtiP0q%2FQA4rRb1odDYJEfHcl8qsOMMyYOJxpC9HAfIDfHN%2BmOWT6ToMrDhhfsDsnQN9BvntL3qfSf%2BB8sn3zMPtFzEDvjciuYbOJ4erI8IZA9nSliuSf3LMjAfViktrNoCUcq2b%2BdoFr7KTpLbfrRqzUWpMrxNylVAqnCAQxam8PrjlfsTsGKp8yrRa04XPQPQcvswW6mq7%2Bgh%2B9ffWXFpoJYorhzhYuij2N6MoPpvGEi3DCHkDbbywceBiPq%2F3GqO5d%2BWQiZscSNLMqryOlRxkhN98vFw1cX9GYH18D2JP9ZMLhS1NbnZjb941w2ZG68B9zuSM522w5U7TcNoqkEoH0UmcngUmiS3tkGj%2BCZyqr5UlVoLLu1oGzNYZhXod18bAW1zMyNcpP4P94sFs3jeALHZ2NMbpCKt7f6JZUYur5FEGqxQp3fUQAjZdHP3nmcyTy0gpDZOM%2BZ%2BeyKXfsw15TDyQY6pgFq3WU6KN%2B9bYiJv7xnLkTv%2BDzYZmmO%2BUw6oyZWIs2tta08CWE6kPlmEEp3lt6qnxxB2LGcpVRWjE%2BXc7gQYmkgln%2BXY6%2ByZQ11fb4KiygqMvUocOUGxxYjEGSFNiFpkwVf8AnnxyLGSqQTz6rxzXXwvttTfoX4ktSDpcLvQBv5jrZhbGgooykbTgbgkobGK1aSJvAhH4udT3cX22hHME1rHdvWqcSE&X-Amz-Signature=8cb2bc33742de1a51597b33ca4a270dd446ea9ee2a8c565d9ddf0ed4fe9c4bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
