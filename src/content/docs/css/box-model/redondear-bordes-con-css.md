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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZG5DD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtOQjDiqT5dxIaDn9Zv9wiQtcXwcAJSCEDeDcv%2F0jfAAIhAIApStWcjiFV9XaRznUIzwaV76fjCGBntLHh38QtkjnOKv8DCHgQABoMNjM3NDIzMTgzODA1Igw2s8vc2zL3ZNGy5OMq3ANAwG%2BWv6xj7knieeuD4xumDNBWbebKFs8JZHeFXOFTt3sI8POcUS82RR6PD7GzsG7ht7vnJQccvrKo6sy88RPyLqxZAisdMeW559cQT9xG604xq4%2B%2FDhOvDlRRmyoNrCp4F6GO%2BQFJ%2FhAe%2BbJtgAc0Ktp6uL%2FUZyGWRbJGkOT%2FJsZzgEX9Y0T%2BC3cBFyVvcUA2%2BkHWOzO6cq%2Blr7WSUP9Ox6aAfRm%2Bop0aU922%2Fe%2BsWsVIAnugfUQUzUy9nknx6a0SF4jU5Rk%2Fhelw5F7KiLs%2F%2BvyEudXjNHf0C88Fj2TWAWSkeiOtnqJF0QaTiQrhiJSdDNV7jPPbT%2FD45wmP8SZ1OZzeznH9j3yy9ekQZnFTHD5rjdg6vwzicWQtOh2Qt76ueZilsruoLO3VLWF2%2BesaSLuRS%2B4ADiDjbwmlqkHJWR9Q8Rxm1JHS%2Fx32swrgZJSQOMgi9C7IFAEFKYHvE4HRGYtH0nF7pv5FcCGiNTwNVHLjHSO6siXrA53PacVQogOknEpcnv4ixu%2BQzj%2B%2Bw0PlpdlzS5GS7iAt0ecaO0btZfuco%2Bj73wD1e%2F15sY5iUEJjnRjA%2B2N3VVtlXJwcxT0nfI%2BaIzteEhJHCJMy07VmJWk%2BcYF6K1XMDvzkBjDSnYnKBjqkAeVgbV2y%2Bl0tG7zSicnmrYs48Bw5mBpb6J6DAbnD1x%2BFAcmB7ikyGfBe4G28Syt1fyIVfhz39%2BBnVbz648weEN6ygiVk6Kkq12vwmH838Ul%2BlrGC9TJg4UJDY2PmWB6qe55RVK3DzT2v81F8a3sBcYsQ81AZaTiW%2Bl8ParPJKadRzE6JjIuRw78AyLw7R7rrXbKAZ6%2B4O1i%2BtPiBBR%2Fsak5Eyna1&X-Amz-Signature=abb9ccf2b4f24b87c4db73e490af8e08f7a8e7e2888a4258e903d52679e8740a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZG5DD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtOQjDiqT5dxIaDn9Zv9wiQtcXwcAJSCEDeDcv%2F0jfAAIhAIApStWcjiFV9XaRznUIzwaV76fjCGBntLHh38QtkjnOKv8DCHgQABoMNjM3NDIzMTgzODA1Igw2s8vc2zL3ZNGy5OMq3ANAwG%2BWv6xj7knieeuD4xumDNBWbebKFs8JZHeFXOFTt3sI8POcUS82RR6PD7GzsG7ht7vnJQccvrKo6sy88RPyLqxZAisdMeW559cQT9xG604xq4%2B%2FDhOvDlRRmyoNrCp4F6GO%2BQFJ%2FhAe%2BbJtgAc0Ktp6uL%2FUZyGWRbJGkOT%2FJsZzgEX9Y0T%2BC3cBFyVvcUA2%2BkHWOzO6cq%2Blr7WSUP9Ox6aAfRm%2Bop0aU922%2Fe%2BsWsVIAnugfUQUzUy9nknx6a0SF4jU5Rk%2Fhelw5F7KiLs%2F%2BvyEudXjNHf0C88Fj2TWAWSkeiOtnqJF0QaTiQrhiJSdDNV7jPPbT%2FD45wmP8SZ1OZzeznH9j3yy9ekQZnFTHD5rjdg6vwzicWQtOh2Qt76ueZilsruoLO3VLWF2%2BesaSLuRS%2B4ADiDjbwmlqkHJWR9Q8Rxm1JHS%2Fx32swrgZJSQOMgi9C7IFAEFKYHvE4HRGYtH0nF7pv5FcCGiNTwNVHLjHSO6siXrA53PacVQogOknEpcnv4ixu%2BQzj%2B%2Bw0PlpdlzS5GS7iAt0ecaO0btZfuco%2Bj73wD1e%2F15sY5iUEJjnRjA%2B2N3VVtlXJwcxT0nfI%2BaIzteEhJHCJMy07VmJWk%2BcYF6K1XMDvzkBjDSnYnKBjqkAeVgbV2y%2Bl0tG7zSicnmrYs48Bw5mBpb6J6DAbnD1x%2BFAcmB7ikyGfBe4G28Syt1fyIVfhz39%2BBnVbz648weEN6ygiVk6Kkq12vwmH838Ul%2BlrGC9TJg4UJDY2PmWB6qe55RVK3DzT2v81F8a3sBcYsQ81AZaTiW%2Bl8ParPJKadRzE6JjIuRw78AyLw7R7rrXbKAZ6%2B4O1i%2BtPiBBR%2Fsak5Eyna1&X-Amz-Signature=072ba40826ffc7ce8c48a779b3c5763a03701c965b3ae35e31e8da4b5776576a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
