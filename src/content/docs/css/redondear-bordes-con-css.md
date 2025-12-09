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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6UQTQK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ%2FZFBMHBB%2FLOHKeZTag82%2BhxZkCM6Tscp40jlVPSU2AiEA9gNSu3PtaFMeotoDjk9sl19BDdLQ%2Bk8qgSsExMaJpKAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgAZXsZztcnFXARpircA6cpaHQqRSi6QelGhmVcVIUHBoF88Tubd2eEQbX%2Bhq5wI4ZT8XI6ydGJInd0TSyIvFDcXDoBZP5kx0zvISDkCTbr1RLKeZpaRSI6ei0sT%2FWKhAHBI1al%2FIvSsGQ%2BLn%2FFDgYPGtIJ%2BCEOMLF8vAoQVJGypV5g8n1vPKT3KOWzN6VlGes6z7uF5rak%2FtD1lHW20pFqlTjKJ%2B1YYpvK4LUK%2B95h2wbe2jjfWtHlVPxekbaw47Fysl9Ds1UOUXF6swivF%2BgGJp5cD9bRpkCRHd7ff493vWeLoydBmkojmJKb5Tod1USBYwuxtjgoJHOyUVYvysXxov7c9nanI1fHAoOE%2BGhnytqhLiKH%2BQkBpaF28CGkwRqbY%2Fgkigeali%2BBimVkdBhjIpa9FwnFxX5MV%2FjbGJK7ZnXeByyfw07q4yX1MVv4OM5nxegFSKsySVS0au6Tnf0rMOWSJAHXouY4Yv%2B3l7AXO52JtDZcJU0vLbJ0zcM%2Bh1vN%2BwjO8qoKHfnnl1Kbq4osyTGzEJ3veAADK0WrsG2lBZPgccVCoeTXZ7Yq8qEDwpOt8WnTgf4emHMd6IWa2C%2Fiur6HG7bMJmX%2Baa5q%2BOH%2BvVKs1gDxnv6xUXLJCWJxSds%2FfqPuwnqq1c2nMLnD3ckGOqUB%2Bpe9ld%2Bx7OCdv00%2FMJj%2BoZBVwV1vQ6%2BvOLlpc%2FAnqeJCq1uXzqxz5LICck1PwFYMHQKTEr2dIXCejLdXt5TcVkKtjM66FfGHLNJAIF%2FS%2FAKhB0IZc7Zi1F%2FMNwMRrHPGGsJyaZ2jNrI1KSEZeEgIfhlEQmIxe0RYXT2%2F9uN1WEdPCJd7m2k2ZMVwdbtyOb1%2BBWUpyjMnvH9ygYiKlBQRTyOeg%2B8b&X-Amz-Signature=c75f0bd3c43518b55f0d2a5848f5b2065343ef222347aa678ee2c462c2826ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S6UQTQK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ%2FZFBMHBB%2FLOHKeZTag82%2BhxZkCM6Tscp40jlVPSU2AiEA9gNSu3PtaFMeotoDjk9sl19BDdLQ%2Bk8qgSsExMaJpKAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgAZXsZztcnFXARpircA6cpaHQqRSi6QelGhmVcVIUHBoF88Tubd2eEQbX%2Bhq5wI4ZT8XI6ydGJInd0TSyIvFDcXDoBZP5kx0zvISDkCTbr1RLKeZpaRSI6ei0sT%2FWKhAHBI1al%2FIvSsGQ%2BLn%2FFDgYPGtIJ%2BCEOMLF8vAoQVJGypV5g8n1vPKT3KOWzN6VlGes6z7uF5rak%2FtD1lHW20pFqlTjKJ%2B1YYpvK4LUK%2B95h2wbe2jjfWtHlVPxekbaw47Fysl9Ds1UOUXF6swivF%2BgGJp5cD9bRpkCRHd7ff493vWeLoydBmkojmJKb5Tod1USBYwuxtjgoJHOyUVYvysXxov7c9nanI1fHAoOE%2BGhnytqhLiKH%2BQkBpaF28CGkwRqbY%2Fgkigeali%2BBimVkdBhjIpa9FwnFxX5MV%2FjbGJK7ZnXeByyfw07q4yX1MVv4OM5nxegFSKsySVS0au6Tnf0rMOWSJAHXouY4Yv%2B3l7AXO52JtDZcJU0vLbJ0zcM%2Bh1vN%2BwjO8qoKHfnnl1Kbq4osyTGzEJ3veAADK0WrsG2lBZPgccVCoeTXZ7Yq8qEDwpOt8WnTgf4emHMd6IWa2C%2Fiur6HG7bMJmX%2Baa5q%2BOH%2BvVKs1gDxnv6xUXLJCWJxSds%2FfqPuwnqq1c2nMLnD3ckGOqUB%2Bpe9ld%2Bx7OCdv00%2FMJj%2BoZBVwV1vQ6%2BvOLlpc%2FAnqeJCq1uXzqxz5LICck1PwFYMHQKTEr2dIXCejLdXt5TcVkKtjM66FfGHLNJAIF%2FS%2FAKhB0IZc7Zi1F%2FMNwMRrHPGGsJyaZ2jNrI1KSEZeEgIfhlEQmIxe0RYXT2%2F9uN1WEdPCJd7m2k2ZMVwdbtyOb1%2BBWUpyjMnvH9ygYiKlBQRTyOeg%2B8b&X-Amz-Signature=7d8fe1b77f4ae9dca77c5b63fe08a3b43ab9f556ea796d1fe21927c97c365dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
