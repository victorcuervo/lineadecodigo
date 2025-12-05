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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QDMYU2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqU97pRFjqQCjHS9a9jefKGDwPXigx0wlsOxCUSjuGQIgYZJ38uev9qQcti1%2BYEqUR%2BiBDyg9tgN77gYOJkh3WTQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKZo%2FgsZyh63Tw1R8yrcAxkIUpcRa7fsBz9wtQ2NosPnXM6h6pmCnv%2Fi4eb6424MKGIUuZKttKMK%2FD1PYNpnaiZbQ2wvCEuhZ6MV3yn7dFrMsmyQagGtpBtP%2FXpTW4Sef2bjFdJpZ7gIBfJkA%2FKHiWXHuFbjUfqLZwIQzv%2BfPkoJZbiD2GNWgeK6tDMDJ56Xi9CnypHH3hHtW6RoWgQ1iJdL688HWmjupRtjJSciS3WsPqrRwBz3U0OSy%2BWxSfiWFh1EXxRA5tXNG6pRQBwQwE7gFG29Xdi16fQdmFb5V5DoQQlGkRiOcn3OlqSdxl8BBhN6R3CQ9RKtBPL0L97rSfbXMDeui92ECr0YbKqsk53NVuCm%2FSFPtVJdyOcPX4bIDhNc%2FBW6sklYYhwLWvPq9RtWledX%2FY6N3Nx0QBL47uQC4bfODiNIoJct1mkVeNFIc1z40B0uAka4rO73ZMF%2F0wAKkqay9SrVP6Strd6ojP%2FQ1ZpDmryiB6M0KqZTaM7Ma106kYDZO5XzuSoBsXE1hyI69Tp8zCJSIS7xBr2rHi12rrNc9QwHvZH9QErmqTmUN%2F9tZgfgZgMR59vLfyPbkAiNmk66i2w5%2Fkba6rQePJo9HqK7cuvtx3AQ2BIXELEVylroxLOwTtMA2NCwMNCryckGOqUBP8SV7qrTZgT09L83PsIOGrg0ZgpQMhLzfP%2F0TrZQa%2BAp7T%2BRoOAncMGYh3wXmuaGjh9w6bQoUBLmeYYAxqmuf%2FCTe9Ac3u1AT5XlvtkJyQyuoKpVtNjp9cgNr%2F876Rx7VGDgqHvQN3ulNK1lNqJgIxEh5FhfMt1NAsS5i33m7lAQ3Cb%2BS9uFmFkFUOevp1ryNQ5St%2BG%2FDL9nvhuEIa9s2zaNmdJ4&X-Amz-Signature=e9c1c041f61354a1d1382793bd5e46da3aa5d0c7ed2035354e961023a94e6ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QDMYU2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqU97pRFjqQCjHS9a9jefKGDwPXigx0wlsOxCUSjuGQIgYZJ38uev9qQcti1%2BYEqUR%2BiBDyg9tgN77gYOJkh3WTQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKZo%2FgsZyh63Tw1R8yrcAxkIUpcRa7fsBz9wtQ2NosPnXM6h6pmCnv%2Fi4eb6424MKGIUuZKttKMK%2FD1PYNpnaiZbQ2wvCEuhZ6MV3yn7dFrMsmyQagGtpBtP%2FXpTW4Sef2bjFdJpZ7gIBfJkA%2FKHiWXHuFbjUfqLZwIQzv%2BfPkoJZbiD2GNWgeK6tDMDJ56Xi9CnypHH3hHtW6RoWgQ1iJdL688HWmjupRtjJSciS3WsPqrRwBz3U0OSy%2BWxSfiWFh1EXxRA5tXNG6pRQBwQwE7gFG29Xdi16fQdmFb5V5DoQQlGkRiOcn3OlqSdxl8BBhN6R3CQ9RKtBPL0L97rSfbXMDeui92ECr0YbKqsk53NVuCm%2FSFPtVJdyOcPX4bIDhNc%2FBW6sklYYhwLWvPq9RtWledX%2FY6N3Nx0QBL47uQC4bfODiNIoJct1mkVeNFIc1z40B0uAka4rO73ZMF%2F0wAKkqay9SrVP6Strd6ojP%2FQ1ZpDmryiB6M0KqZTaM7Ma106kYDZO5XzuSoBsXE1hyI69Tp8zCJSIS7xBr2rHi12rrNc9QwHvZH9QErmqTmUN%2F9tZgfgZgMR59vLfyPbkAiNmk66i2w5%2Fkba6rQePJo9HqK7cuvtx3AQ2BIXELEVylroxLOwTtMA2NCwMNCryckGOqUBP8SV7qrTZgT09L83PsIOGrg0ZgpQMhLzfP%2F0TrZQa%2BAp7T%2BRoOAncMGYh3wXmuaGjh9w6bQoUBLmeYYAxqmuf%2FCTe9Ac3u1AT5XlvtkJyQyuoKpVtNjp9cgNr%2F876Rx7VGDgqHvQN3ulNK1lNqJgIxEh5FhfMt1NAsS5i33m7lAQ3Cb%2BS9uFmFkFUOevp1ryNQ5St%2BG%2FDL9nvhuEIa9s2zaNmdJ4&X-Amz-Signature=619d97da160cb51ce8cc5a382b6f67b3b0cf4f07d2b492081de85a53ec0e4f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
