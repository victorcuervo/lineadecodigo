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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWTBUHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAGo4VkMramIJbSe2Wg3dMd33sfqkmiDsdQdgtaRutzsAiBlMHs1ilf7Rr0WwqCSL98QfeSVRiueqPhZYOxFZq%2BamCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMhyfwPlGbRDGWxmwEKtwDOZcluYT2IJYMRtOdpIcx39OI5dwnserEcWE455orSsMOv2OB9kqquioOmp5MDQjY%2FH%2B1JOmc9fSoGGIYilB00L3cjJ0mfGl9hhi0%2FYi%2By%2BH4Y71o7VIkg4sO2Qr9JU8zH0HXQo5lrChZjFHX4jn4ihsbnzKxZZBGHzWGGxZPJ9YENVc4ikFXK0NxoQPUoidQNpcSF4OhuxpLGNwmNmVn37NPLonGs%2Fb2u2a7yTEKcYuajKT%2Bdgcxi9gJ6N%2Bf%2F1SfheVETPiKLCV2nCyubXs3vIUHqL9g9cqsMfB6sOuYUg4lp8J3%2FA52Qk7MuB6Qyr%2F%2FwbozuBQiEs69%2FeOsTU8uVYJS%2B8bmxBTqEkJIvipAFBGk9iA2a4Sk13yXbZ6B3QBvadRItlL%2BCrbmxRoVkat%2B53WsvjeBso0jXg%2B2y9QhVpXhzI7coJn9MhJ%2B2MECxvOn1lvJL4gz82J08udQYl9QhmXUmJEkh2Lw7bfIfGVOYq7nbBomOxOYG3vNyvf9PXhI8KqR9k4ZuH%2BczaVRjAVaASLC7y03%2BIH3pMee525JY0dB6S0fNJa6dgXPi5dtWsUE%2FthD%2FRGpdN1ZFvLRREOmIQKKd8ffORwXL6cno9jgZcbv1Irz63iSUPCHrKcw%2B4PGyQY6pgF2GQN62kTovPEyLcIe3HBQ4Dp5wfNz%2FmeePPOd0JO3joXV40K0yolmheK%2BBpQ3W9OYVK04GSpCoySzxOFm0KT%2Bs2b8nkEjSCNFu87%2Fbiv8RXhNhgfcsMH%2BtS5q5SK7QleMwK%2BFu791YGnTrjfVPWYcw%2BLbS5lAmI%2Futl6Q%2Fs76q6RfyVY6EET14F5ThX8b0a%2BXskFtuqQH6m6k11y1LUqvAprtT1bZ&X-Amz-Signature=fb7ce1ec535b4fd66bfd99547860dd7f6a080c97895f1ae0b7413cb835c50123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPWTBUHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAGo4VkMramIJbSe2Wg3dMd33sfqkmiDsdQdgtaRutzsAiBlMHs1ilf7Rr0WwqCSL98QfeSVRiueqPhZYOxFZq%2BamCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMhyfwPlGbRDGWxmwEKtwDOZcluYT2IJYMRtOdpIcx39OI5dwnserEcWE455orSsMOv2OB9kqquioOmp5MDQjY%2FH%2B1JOmc9fSoGGIYilB00L3cjJ0mfGl9hhi0%2FYi%2By%2BH4Y71o7VIkg4sO2Qr9JU8zH0HXQo5lrChZjFHX4jn4ihsbnzKxZZBGHzWGGxZPJ9YENVc4ikFXK0NxoQPUoidQNpcSF4OhuxpLGNwmNmVn37NPLonGs%2Fb2u2a7yTEKcYuajKT%2Bdgcxi9gJ6N%2Bf%2F1SfheVETPiKLCV2nCyubXs3vIUHqL9g9cqsMfB6sOuYUg4lp8J3%2FA52Qk7MuB6Qyr%2F%2FwbozuBQiEs69%2FeOsTU8uVYJS%2B8bmxBTqEkJIvipAFBGk9iA2a4Sk13yXbZ6B3QBvadRItlL%2BCrbmxRoVkat%2B53WsvjeBso0jXg%2B2y9QhVpXhzI7coJn9MhJ%2B2MECxvOn1lvJL4gz82J08udQYl9QhmXUmJEkh2Lw7bfIfGVOYq7nbBomOxOYG3vNyvf9PXhI8KqR9k4ZuH%2BczaVRjAVaASLC7y03%2BIH3pMee525JY0dB6S0fNJa6dgXPi5dtWsUE%2FthD%2FRGpdN1ZFvLRREOmIQKKd8ffORwXL6cno9jgZcbv1Irz63iSUPCHrKcw%2B4PGyQY6pgF2GQN62kTovPEyLcIe3HBQ4Dp5wfNz%2FmeePPOd0JO3joXV40K0yolmheK%2BBpQ3W9OYVK04GSpCoySzxOFm0KT%2Bs2b8nkEjSCNFu87%2Fbiv8RXhNhgfcsMH%2BtS5q5SK7QleMwK%2BFu791YGnTrjfVPWYcw%2BLbS5lAmI%2Futl6Q%2Fs76q6RfyVY6EET14F5ThX8b0a%2BXskFtuqQH6m6k11y1LUqvAprtT1bZ&X-Amz-Signature=df86af8d77d8dc24c6e12bfb19c682775947e0104e18d4d7a157f20d9de5a216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
