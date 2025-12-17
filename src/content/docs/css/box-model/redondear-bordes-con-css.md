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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3OD3IA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNVZmkJT6TxBG71jPZ78g3kRBbtAyJD0JD9ANhNwyZQIhAMrueMXLbjSiRjIetoaFcUzXztgmpygI4EgTUWIRuUyGKv8DCHIQABoMNjM3NDIzMTgzODA1Igwu%2BPGhffCv0MekkqQq3AMehReGvgEKfbY1nwRurbHHAJwufW6gD8MScfcc%2F2WMiiwuKn59TRkEgwP3P9M8Th65DGqH5u7uaoIzjhItJy8bkqQLcVnk6d0%2B71iOyBgXkhDmRf71feVom9T3fb1wBMhIh7ua0aA4MoxWUKGib%2FTurV09EMPh8%2FbBH%2FBMJtFHJWAtnc60UtHY%2BE4gSjK3mavk7HOgnrEsLLQwwYMdbzuTA9bu0UB713qHGEeaN5BYlj%2BeGySHb%2BjLmOY8c8J039glyHCg0497c0xbY%2BBfnmOEX8XVrG%2BbWTZ57fgnrAZCS9%2B3AlNZ6w1Dx74VjtbOYHylv6yx6GHNkylApQ3qTj1DrTk87hwg%2F6SF1XG5HNKfGgllDSqMQccSII4agS3yVcOm65j5%2B1rZ60nEGdgXSf%2BycXi8YwLPLN29jW%2FpjooU2vS%2FobQ6lnwlQxe7I3YfCrS0vZfNVnUSV1h1xRn9CFUG52Walt6VSBQyH7jt6wmNi4OntVzEvp0ws4y4GvMGYZqdktWmewNjb72H1bYYO%2Bydtt0f1rEsaLW%2FcENtSfVv274sxzC7T47nPXJcLiOoR0v2bx3DOnVNntYy6jQ8EBoJGPZkh7fw%2B7NakiTWcmahtNDP%2FxYEbH6bSmil0zDE%2B4fKBjqkAYTetzA8e5QotAZ0DttQGEYCAo6Gf%2B609tLlvOO1dtTcU2VIiDjfrQKvSGB2yYUevSqtD3a7jQ7qTRj3XlJBS3a42oth%2FwRxYvL4obUd%2Buk1X4Or0HowNlFBEeDe87NK3Du5K1aVTnD1D3z%2FzAH6UumzXCrXC1hjZd1dPdUdOxPwagzc%2FSsHmbLE5uRGqA8z8d%2FSXTg%2F9RDXZDXuMCDQZybzHy13&X-Amz-Signature=589cf9bae4ae9535446a22937490a51c617db2749021d95b0a0a9598c59ba2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3OD3IA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDNVZmkJT6TxBG71jPZ78g3kRBbtAyJD0JD9ANhNwyZQIhAMrueMXLbjSiRjIetoaFcUzXztgmpygI4EgTUWIRuUyGKv8DCHIQABoMNjM3NDIzMTgzODA1Igwu%2BPGhffCv0MekkqQq3AMehReGvgEKfbY1nwRurbHHAJwufW6gD8MScfcc%2F2WMiiwuKn59TRkEgwP3P9M8Th65DGqH5u7uaoIzjhItJy8bkqQLcVnk6d0%2B71iOyBgXkhDmRf71feVom9T3fb1wBMhIh7ua0aA4MoxWUKGib%2FTurV09EMPh8%2FbBH%2FBMJtFHJWAtnc60UtHY%2BE4gSjK3mavk7HOgnrEsLLQwwYMdbzuTA9bu0UB713qHGEeaN5BYlj%2BeGySHb%2BjLmOY8c8J039glyHCg0497c0xbY%2BBfnmOEX8XVrG%2BbWTZ57fgnrAZCS9%2B3AlNZ6w1Dx74VjtbOYHylv6yx6GHNkylApQ3qTj1DrTk87hwg%2F6SF1XG5HNKfGgllDSqMQccSII4agS3yVcOm65j5%2B1rZ60nEGdgXSf%2BycXi8YwLPLN29jW%2FpjooU2vS%2FobQ6lnwlQxe7I3YfCrS0vZfNVnUSV1h1xRn9CFUG52Walt6VSBQyH7jt6wmNi4OntVzEvp0ws4y4GvMGYZqdktWmewNjb72H1bYYO%2Bydtt0f1rEsaLW%2FcENtSfVv274sxzC7T47nPXJcLiOoR0v2bx3DOnVNntYy6jQ8EBoJGPZkh7fw%2B7NakiTWcmahtNDP%2FxYEbH6bSmil0zDE%2B4fKBjqkAYTetzA8e5QotAZ0DttQGEYCAo6Gf%2B609tLlvOO1dtTcU2VIiDjfrQKvSGB2yYUevSqtD3a7jQ7qTRj3XlJBS3a42oth%2FwRxYvL4obUd%2Buk1X4Or0HowNlFBEeDe87NK3Du5K1aVTnD1D3z%2FzAH6UumzXCrXC1hjZd1dPdUdOxPwagzc%2FSsHmbLE5uRGqA8z8d%2FSXTg%2F9RDXZDXuMCDQZybzHy13&X-Amz-Signature=163547438181eea5663c4752374178be791df6c26270b42578869a4de711a236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
