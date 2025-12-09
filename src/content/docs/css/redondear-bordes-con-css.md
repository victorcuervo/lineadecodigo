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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOXBKCP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLJgrrYbHTzTH7UtOZpfGxHjA3xj9EeV%2BWbqifTDFoSgIgF5yPF7zItuLwSShmu1Liy%2B6R76vBV%2BfkiiKyBj659fwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehNh6sgSLF6BS1KCrcA8GC8RrjC8DOxVH2VpGYltPqkF1hWRWsP%2FgH5fSb2CJ%2FnOpkFrEe4VwqKk8vks0regzg5cv0mSOliripIcMNZoef4yOgWnduSaO1Lf8q21Fxbc4mwk3S9NtPqHoXJJ9ZOzrxaIL7D166xAlR%2Bwc%2FASKi50Z11flPeX02as7hdcz9xccrx%2FG23LGpKPj1F3wlC2619Wzg5nnHdMKKY9g6Ns971y0K%2BQMECVoE6iEFwNDO%2FSYxOnyZFtRy8Y5hKwmFFE%2FPW5HWzV0F3b4404TBGJfnU6AvuXMF1cXfEonyZ8KYkb4bd6LR%2FZdXKkTmfBwx4hV2gF9FmeRgTsjWG2A2ZDPj%2FdwqNVA61095UKnoYLAr6JSEsLKRFsdiqTBK906jVcIzJuhnHF7cjgeetPxPu0Wcyva1steUMUOZrlMkynF%2BG7w8gWJ587JgBIhM5RLkZFoFv5wVYt3IUS%2BSOYEv3c9Psk45ArJuOxIZzyCf205j5P3rZO9m%2BQmj9J29Q9vEkW7EOztZSzLnWoF%2FvJplAO12GDjsLMBJpZEp%2Bd7nduyDpYUBBQULdebXk%2B3KYvmgqFZMxzuYI3UdvFdL4yFBwpGnWuOuzHu5jOa3DA8jzfUv7NUYsSLzT8faVNU6MKTD38kGOqUBkmuPUG3lcLnIcj9jwf41bSa2PUZmYW6oUGZheXvKlJ9reR3kJDce%2F97cTkvhoFLLhuMAOyXM5wJG0P%2BKHUdVKsXOE5HX6UyPXrTde8wGQ2zgCja1Gw9TXGi2Lp8YNhhq%2FGIjaNVt8YXrV6%2BMnbVBMNKlEv9USrWmCpqmafYg9uzq7IJulvrBTowPZbqJr%2Bfp0clCr9VzIX30X8zk77n1Nu%2B7rAen&X-Amz-Signature=a57148d400e042749594b65acb3b447be3a373f32bcc0d0299ae40aa436380cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOXBKCP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLJgrrYbHTzTH7UtOZpfGxHjA3xj9EeV%2BWbqifTDFoSgIgF5yPF7zItuLwSShmu1Liy%2B6R76vBV%2BfkiiKyBj659fwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKehNh6sgSLF6BS1KCrcA8GC8RrjC8DOxVH2VpGYltPqkF1hWRWsP%2FgH5fSb2CJ%2FnOpkFrEe4VwqKk8vks0regzg5cv0mSOliripIcMNZoef4yOgWnduSaO1Lf8q21Fxbc4mwk3S9NtPqHoXJJ9ZOzrxaIL7D166xAlR%2Bwc%2FASKi50Z11flPeX02as7hdcz9xccrx%2FG23LGpKPj1F3wlC2619Wzg5nnHdMKKY9g6Ns971y0K%2BQMECVoE6iEFwNDO%2FSYxOnyZFtRy8Y5hKwmFFE%2FPW5HWzV0F3b4404TBGJfnU6AvuXMF1cXfEonyZ8KYkb4bd6LR%2FZdXKkTmfBwx4hV2gF9FmeRgTsjWG2A2ZDPj%2FdwqNVA61095UKnoYLAr6JSEsLKRFsdiqTBK906jVcIzJuhnHF7cjgeetPxPu0Wcyva1steUMUOZrlMkynF%2BG7w8gWJ587JgBIhM5RLkZFoFv5wVYt3IUS%2BSOYEv3c9Psk45ArJuOxIZzyCf205j5P3rZO9m%2BQmj9J29Q9vEkW7EOztZSzLnWoF%2FvJplAO12GDjsLMBJpZEp%2Bd7nduyDpYUBBQULdebXk%2B3KYvmgqFZMxzuYI3UdvFdL4yFBwpGnWuOuzHu5jOa3DA8jzfUv7NUYsSLzT8faVNU6MKTD38kGOqUBkmuPUG3lcLnIcj9jwf41bSa2PUZmYW6oUGZheXvKlJ9reR3kJDce%2F97cTkvhoFLLhuMAOyXM5wJG0P%2BKHUdVKsXOE5HX6UyPXrTde8wGQ2zgCja1Gw9TXGi2Lp8YNhhq%2FGIjaNVt8YXrV6%2BMnbVBMNKlEv9USrWmCpqmafYg9uzq7IJulvrBTowPZbqJr%2Bfp0clCr9VzIX30X8zk77n1Nu%2B7rAen&X-Amz-Signature=b19734cc34d7adff08343bd875d0af61ba11316c703834facf29e72e724a8c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
