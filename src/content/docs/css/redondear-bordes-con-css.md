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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWBCKEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICT5mbM%2FECnMiRVG2Y21MTRWZB3Wgx9urscQrYgZGd0AAiEA5aC8VPqTXN0r1V0WXt%2FrdGBJnIzBhXssJcOWk6yghlgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFuTvctSSnSul3GpUSrcAyKdNhN%2Fa5yOruD5igeUJPRxNd83bkPSl5hCReP9fMQjwBKR6bkC9teCbow7%2Fj6%2BMfy7xJ9J0qUSXQTiCURs3jFG7nUxRW23Uh43Jq4j0gD9DiOfHI6cXU2YrVx6qZj2QA7laf%2Fsu6QnMzfeSjgMHp34AfvdNNzcebPPAfzpgKg368LVX3f80G4kAFPiSXnx63J3YcTavxs1ZksjtYUx%2FpOKNBcEUYV4cguG91OJsuQ7IpufirHLgU%2BeuHnqLGXrRIu3T%2B9YXEuMsEymvrOQzzrgQ7Rzi98%2F2r%2BmUAI0aSPlIvDINv3eJY8dncKaM1p3QxnMoicu%2BtIckhMBm0prAo%2FmflzXQ7oqg8zx7jeUsOLgRgIQ1VJ3U%2F71qSzuXIyHAg7jiK40Siexs%2F4njqmfat%2F7UqkblZPxIPASjOAwjYilm5tkZZIL%2FsQCTGthR6Z%2Fpk%2B%2F6yfH0aXwKwNfS%2By4VLMWCTMeI1rNlQ8diQj1OfziT263Y1HBb%2BkIzmLuPZmJLxy5CtA2E6O%2BYOJJLRI%2FYVW2IeUN4yH4P7LqbPVD%2BkWY8YTRPoBOL1CqIJYekIAjOspzVzDcNmW2Y4nxsSDJVucfALZi6YKIwIKIbblmffiLHo9hDZE9SbkY4VV6MOHKxMkGOqUBxJs%2BuvKljlV05WHJLrNCxD65C0rnbRaHP3np0vULcqik%2FTfpqhA5utf1wVDMHfasBT62Ea726nYDIBQ9VCrnIT6LiNjaD%2FFRxmjUHtSvOTt0peir%2B2A8VZPT41jOKY2b6oz4j0Ox%2FAeT%2BmQF8DrQ4sa%2Fdu7U5dkWYfJf5xi%2BF6NxxFwLziZis5ur6Lya70m2n2VUO7B3MXBqkme6dviKXkqWzZ7B&X-Amz-Signature=c6ae2384944b5d4e97c0205cc8ef68f7a89d06abc090d3631b1add3c3a1b6d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWBCKEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICT5mbM%2FECnMiRVG2Y21MTRWZB3Wgx9urscQrYgZGd0AAiEA5aC8VPqTXN0r1V0WXt%2FrdGBJnIzBhXssJcOWk6yghlgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFuTvctSSnSul3GpUSrcAyKdNhN%2Fa5yOruD5igeUJPRxNd83bkPSl5hCReP9fMQjwBKR6bkC9teCbow7%2Fj6%2BMfy7xJ9J0qUSXQTiCURs3jFG7nUxRW23Uh43Jq4j0gD9DiOfHI6cXU2YrVx6qZj2QA7laf%2Fsu6QnMzfeSjgMHp34AfvdNNzcebPPAfzpgKg368LVX3f80G4kAFPiSXnx63J3YcTavxs1ZksjtYUx%2FpOKNBcEUYV4cguG91OJsuQ7IpufirHLgU%2BeuHnqLGXrRIu3T%2B9YXEuMsEymvrOQzzrgQ7Rzi98%2F2r%2BmUAI0aSPlIvDINv3eJY8dncKaM1p3QxnMoicu%2BtIckhMBm0prAo%2FmflzXQ7oqg8zx7jeUsOLgRgIQ1VJ3U%2F71qSzuXIyHAg7jiK40Siexs%2F4njqmfat%2F7UqkblZPxIPASjOAwjYilm5tkZZIL%2FsQCTGthR6Z%2Fpk%2B%2F6yfH0aXwKwNfS%2By4VLMWCTMeI1rNlQ8diQj1OfziT263Y1HBb%2BkIzmLuPZmJLxy5CtA2E6O%2BYOJJLRI%2FYVW2IeUN4yH4P7LqbPVD%2BkWY8YTRPoBOL1CqIJYekIAjOspzVzDcNmW2Y4nxsSDJVucfALZi6YKIwIKIbblmffiLHo9hDZE9SbkY4VV6MOHKxMkGOqUBxJs%2BuvKljlV05WHJLrNCxD65C0rnbRaHP3np0vULcqik%2FTfpqhA5utf1wVDMHfasBT62Ea726nYDIBQ9VCrnIT6LiNjaD%2FFRxmjUHtSvOTt0peir%2B2A8VZPT41jOKY2b6oz4j0Ox%2FAeT%2BmQF8DrQ4sa%2Fdu7U5dkWYfJf5xi%2BF6NxxFwLziZis5ur6Lya70m2n2VUO7B3MXBqkme6dviKXkqWzZ7B&X-Amz-Signature=5a8792c1e65b9bf1762c9a177c06a70a07030faadec55317720388efb0ad82d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
