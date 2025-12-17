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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHAOWC6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF3n0OseDdHEmk6KgNQeVbLMLRH3wjKYN0BCg7AGjs8AIgX%2Fkvbv3sohREmTC8hSA3gNllh4IM1vnqZd%2BgWhYrqIoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKma7xjJoWx9zDUG1CrcA1zkB7j%2B5U2iiXG89CLrVk5iuO%2BuvlTsez%2FLQ%2BwTz%2ByBSpNPNZjWKUR1yGbF3aEwKqbVURq8Xot4ge68djBajUAsrIUebhLzDq90xVz11vs0FAwYiVhlRhCckNLDLfCawhTdLowPmXcBV%2Bfj0nE6a0CLwnLKofaphvV%2F6y6RYEv9ewfGC3ZcJzRYz%2FkQxpwtkQMxR7WgxPoMKwS8uV4GgZ8u000XzW8HTKTRhwWVTp8C8DjSzy63%2F%2FvRl7wZ%2F1gciyvCCeHZ%2FA9HHuOBq9b%2FBw47OxnsCuHbx%2F9M5Mvj8i9hNEfNaCDN5KaUhR0p4TucRfwklV0avQwEQmpEA4PBV09ZTB1t0P%2BePLJXkdk9NQYJjSG0NwiMjVNWeAnmoPSuTyW1AwsHe2LoGpPJzD0HbyQEd7x2ruTQOtVvh8TrkhM0uZnA2r4gBZoW6Djuhsqd0UY%2Br4YAvtjeAXO29t8nsu6a5lPxw1NHeyiVkypsnUo0vMfOh9xQjByL3geyiQqGLXwvqE7Pq1PvjdyG8E9CqLISulApGWVzp%2F4yy4cGKVeCZ3wqpp%2BBlr9A%2FMFDJaYu%2Bc9wo9GzrwntdN4kReUsQnfAUz9P8l8uW692GAVeNGeW7ZkwXNyWGcjlNBg2MKj6h8oGOqUBT88PWTNsw5b0BxAhTpHvAjOMW%2Fpv7Y4fajgjlVkBkRDXDM607tkW%2B2lroTXl6zUWU69eIyxYkHx80de5WE6RTiZDu2kdhBDxHkCZ518lTLuxavdBvh3jz%2Bb44h4PlEgsexo9HjskWkRgoez3iswOn%2FrJMu%2B9Li4OQghiMvIcuAQRJmJmU2zsXhpsvoO%2F%2FdPQDfnbmWgpBGzYedMarQ1BpVBw0MPv&X-Amz-Signature=c4da7d7a0e7ca0cb69537e303233e65169e9c263b017f5f1a5aa8fd01f893fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNHAOWC6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF3n0OseDdHEmk6KgNQeVbLMLRH3wjKYN0BCg7AGjs8AIgX%2Fkvbv3sohREmTC8hSA3gNllh4IM1vnqZd%2BgWhYrqIoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKma7xjJoWx9zDUG1CrcA1zkB7j%2B5U2iiXG89CLrVk5iuO%2BuvlTsez%2FLQ%2BwTz%2ByBSpNPNZjWKUR1yGbF3aEwKqbVURq8Xot4ge68djBajUAsrIUebhLzDq90xVz11vs0FAwYiVhlRhCckNLDLfCawhTdLowPmXcBV%2Bfj0nE6a0CLwnLKofaphvV%2F6y6RYEv9ewfGC3ZcJzRYz%2FkQxpwtkQMxR7WgxPoMKwS8uV4GgZ8u000XzW8HTKTRhwWVTp8C8DjSzy63%2F%2FvRl7wZ%2F1gciyvCCeHZ%2FA9HHuOBq9b%2FBw47OxnsCuHbx%2F9M5Mvj8i9hNEfNaCDN5KaUhR0p4TucRfwklV0avQwEQmpEA4PBV09ZTB1t0P%2BePLJXkdk9NQYJjSG0NwiMjVNWeAnmoPSuTyW1AwsHe2LoGpPJzD0HbyQEd7x2ruTQOtVvh8TrkhM0uZnA2r4gBZoW6Djuhsqd0UY%2Br4YAvtjeAXO29t8nsu6a5lPxw1NHeyiVkypsnUo0vMfOh9xQjByL3geyiQqGLXwvqE7Pq1PvjdyG8E9CqLISulApGWVzp%2F4yy4cGKVeCZ3wqpp%2BBlr9A%2FMFDJaYu%2Bc9wo9GzrwntdN4kReUsQnfAUz9P8l8uW692GAVeNGeW7ZkwXNyWGcjlNBg2MKj6h8oGOqUBT88PWTNsw5b0BxAhTpHvAjOMW%2Fpv7Y4fajgjlVkBkRDXDM607tkW%2B2lroTXl6zUWU69eIyxYkHx80de5WE6RTiZDu2kdhBDxHkCZ518lTLuxavdBvh3jz%2Bb44h4PlEgsexo9HjskWkRgoez3iswOn%2FrJMu%2B9Li4OQghiMvIcuAQRJmJmU2zsXhpsvoO%2F%2FdPQDfnbmWgpBGzYedMarQ1BpVBw0MPv&X-Amz-Signature=69240f1cf602c5718e754e326cbd3d66143e0decf9f3052679bad3d9a723a3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
