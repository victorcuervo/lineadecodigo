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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGGS5HK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsxP4iy8AQJ5lCGL9P1I6tFV9xaMCs0Hge5%2BNCs05C8AiEAjovLpszadWDntPKiFIp8UpzRh3wshTET83zGFH8PmdsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8Fd0pCYC7uc142XSrcAylBNqXhhcctHsRKmy%2F%2FvHKlGJ4ocCoRHCJO6Kow8T3rdyNBOat3%2B2zfCzm8mKgwE%2FrXszgJZ87QpyqUvK8J9EZAF46eWwY27QZXaPA2W4l4i0eIBYzyn2eguKTMeojoU9oEgG%2FT38y0LwCIL61WV3mo44TkoOLORGO1lEfAshshUy3rEFVa8aEfNwA%2FH6IhMXbkYW4248lDPkixY2Z7AWmiplu6b2CVRBBbz4a%2BUjrgIs2c7Tjx2j%2FtWqCbyduu0x5WWOcZljqRTYx04DnKm8xEmUtI6Kw3HqWwnm9r7ZWOKolmaOshkSHSGu2G4d3oQAVKTs59vGYaREbnW%2BpC11iGwuwcpfuV9Irylfio36FZ0Pm3LvqvEEzNQdngEE1OtB2qUDOgmG%2BElogt6O3YAR7Yud1IVclbv38bTWCBGYo7ePBJFdjIyLnIcmuw4hAg0XcwJwqGYX1uvc26PiwTdmMj5s2DCY%2BYmDF8FUqKQYkZEsvIQyVeR8AtUhp0bJ0XaCdpf2%2B%2BytAOuLGby0KM1rubSw2wUcrPfYLM7Ut1fC7rD5UW1fLiKdFLqdcbSvvSIed6IkeW%2BY5ruyBPnGEfMF9mpcwWjA%2FoBwAgtYvQ5ZZuiT6wTMoO9DY26OzOMImLjMoGOqUBSBTn7%2BCUt%2BrTmBlVinCOsdkt3X2efSMI1jGuK7pWKe7INIgXp7i8eZO1ZSIbsBPXzdvI6bcukWwxWLQKHK80WLffXZn7sZz8Dw1nJXsJAVTqsbGma8wtIeoeNPpLEoavYiEYJJWAkxL3pM%2FLed9OFQ8vOTxM5IYG0dnAy%2BOR1EPnxW3bt7TRlGbiXPfDuoOFzXQnHCVo3QDc95QmDOJmwNQpUMKV&X-Amz-Signature=c307ad7b6acfd59f8bed340c510ffce9426aab6f90b02cad5714653f64fbe325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGGS5HK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsxP4iy8AQJ5lCGL9P1I6tFV9xaMCs0Hge5%2BNCs05C8AiEAjovLpszadWDntPKiFIp8UpzRh3wshTET83zGFH8PmdsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8Fd0pCYC7uc142XSrcAylBNqXhhcctHsRKmy%2F%2FvHKlGJ4ocCoRHCJO6Kow8T3rdyNBOat3%2B2zfCzm8mKgwE%2FrXszgJZ87QpyqUvK8J9EZAF46eWwY27QZXaPA2W4l4i0eIBYzyn2eguKTMeojoU9oEgG%2FT38y0LwCIL61WV3mo44TkoOLORGO1lEfAshshUy3rEFVa8aEfNwA%2FH6IhMXbkYW4248lDPkixY2Z7AWmiplu6b2CVRBBbz4a%2BUjrgIs2c7Tjx2j%2FtWqCbyduu0x5WWOcZljqRTYx04DnKm8xEmUtI6Kw3HqWwnm9r7ZWOKolmaOshkSHSGu2G4d3oQAVKTs59vGYaREbnW%2BpC11iGwuwcpfuV9Irylfio36FZ0Pm3LvqvEEzNQdngEE1OtB2qUDOgmG%2BElogt6O3YAR7Yud1IVclbv38bTWCBGYo7ePBJFdjIyLnIcmuw4hAg0XcwJwqGYX1uvc26PiwTdmMj5s2DCY%2BYmDF8FUqKQYkZEsvIQyVeR8AtUhp0bJ0XaCdpf2%2B%2BytAOuLGby0KM1rubSw2wUcrPfYLM7Ut1fC7rD5UW1fLiKdFLqdcbSvvSIed6IkeW%2BY5ruyBPnGEfMF9mpcwWjA%2FoBwAgtYvQ5ZZuiT6wTMoO9DY26OzOMImLjMoGOqUBSBTn7%2BCUt%2BrTmBlVinCOsdkt3X2efSMI1jGuK7pWKe7INIgXp7i8eZO1ZSIbsBPXzdvI6bcukWwxWLQKHK80WLffXZn7sZz8Dw1nJXsJAVTqsbGma8wtIeoeNPpLEoavYiEYJJWAkxL3pM%2FLed9OFQ8vOTxM5IYG0dnAy%2BOR1EPnxW3bt7TRlGbiXPfDuoOFzXQnHCVo3QDc95QmDOJmwNQpUMKV&X-Amz-Signature=9e06bad3262f69a3cc01314118e9211684302aed16eae57d37dafce528bfe312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
