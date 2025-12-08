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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGDCR5S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIZdnw6CNwTuipd%2B7IHfDGAGMQCcE4Y9AhCzsR4CYeTAiEAiWkNh0IcOJBtN2no22hGw1WoC6gFh416ZW5p%2F9P36TkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRJiWcTdeXun5dQjCrcA4bVGPPHPzzvwe4pcgnXNa9x%2Fgn8iWALm1DTnQdfq3mUuYdqIzf3r9ZRIVz7tA5eKYLpdUwUbBWpADXaHHNM3cG14cvmtzT6PRhVmq85FSLNwdhXa5lCUUrah8VB9bRm9PwmX9Q7a%2FeuqQRFVX35ZrJB3tmK6nayd0nXxlEOltY%2FWTq63RGc3ANHI2yxaLFGncxe96DY8L1czEuz7HZSvf4yNHy1vwt%2F3NMP%2Bc0f7X%2F2PsuJ01sdn7oq9cbBNMovaNERu3tKYrJ8967h8EjLMjkKapBHIaT1tb4BSPsP%2BjLg5ahI%2F1bo6vX3pWTee2aUIa8Qt0D9zEJ3kO3UlLDJlkkzBSmpznz8%2FRb%2F2gQXDHGnIUlADP0qV5sZJWY2VF5muTVAMnf2wJonKEs6IoBWIeh2uN5McVYmt3zG%2BlUP1Pm2XHyCSyG4LyG7Qkdm2pXgqJ%2B59A%2F%2FwzyXLJRKeiN6ZTS82ZB6EYnR7hq%2F7%2BfNASHXn4F79Cw935CYmvash8YG4UdvDSLH56AJJm5tm2L4mgF1VYhmDTt%2BTR8K1kJbDu5YJzIUdEtwQ4QougMCZcLMI8q06ue%2BZ%2FptaJ%2Fs1Ch4K26cxDsd8%2BJ1rXP%2FAsgr5YlG8dB6gXiSpoMbbrJ7MKjd3MkGOqUBNx%2F9hK30SPF5GFAeVlCFUjwVYGkmGZWQ0Xk%2FuxCc372TR9hq6N72VGahHDvlhcPLRuxfTE%2Bl7BLknF39KFTnJnpO9YwYQG8Swh%2Bf56jTA8rA4FT13ShKvxrMcsGm478rkduwkSvqt6w2n0y4cXgydZL89SVZcsLYYx2rLigpPE1jeBmqV0vxwVpmwo5VqsnxGnoIk9sIlwBKICO1v%2FRpaUpgw2V9&X-Amz-Signature=4b7481577cf0d7fdaacf3dc7f8236a6707d0d697b4dd4d8ccd70904c8a2d62b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGDCR5S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIZdnw6CNwTuipd%2B7IHfDGAGMQCcE4Y9AhCzsR4CYeTAiEAiWkNh0IcOJBtN2no22hGw1WoC6gFh416ZW5p%2F9P36TkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRJiWcTdeXun5dQjCrcA4bVGPPHPzzvwe4pcgnXNa9x%2Fgn8iWALm1DTnQdfq3mUuYdqIzf3r9ZRIVz7tA5eKYLpdUwUbBWpADXaHHNM3cG14cvmtzT6PRhVmq85FSLNwdhXa5lCUUrah8VB9bRm9PwmX9Q7a%2FeuqQRFVX35ZrJB3tmK6nayd0nXxlEOltY%2FWTq63RGc3ANHI2yxaLFGncxe96DY8L1czEuz7HZSvf4yNHy1vwt%2F3NMP%2Bc0f7X%2F2PsuJ01sdn7oq9cbBNMovaNERu3tKYrJ8967h8EjLMjkKapBHIaT1tb4BSPsP%2BjLg5ahI%2F1bo6vX3pWTee2aUIa8Qt0D9zEJ3kO3UlLDJlkkzBSmpznz8%2FRb%2F2gQXDHGnIUlADP0qV5sZJWY2VF5muTVAMnf2wJonKEs6IoBWIeh2uN5McVYmt3zG%2BlUP1Pm2XHyCSyG4LyG7Qkdm2pXgqJ%2B59A%2F%2FwzyXLJRKeiN6ZTS82ZB6EYnR7hq%2F7%2BfNASHXn4F79Cw935CYmvash8YG4UdvDSLH56AJJm5tm2L4mgF1VYhmDTt%2BTR8K1kJbDu5YJzIUdEtwQ4QougMCZcLMI8q06ue%2BZ%2FptaJ%2Fs1Ch4K26cxDsd8%2BJ1rXP%2FAsgr5YlG8dB6gXiSpoMbbrJ7MKjd3MkGOqUBNx%2F9hK30SPF5GFAeVlCFUjwVYGkmGZWQ0Xk%2FuxCc372TR9hq6N72VGahHDvlhcPLRuxfTE%2Bl7BLknF39KFTnJnpO9YwYQG8Swh%2Bf56jTA8rA4FT13ShKvxrMcsGm478rkduwkSvqt6w2n0y4cXgydZL89SVZcsLYYx2rLigpPE1jeBmqV0vxwVpmwo5VqsnxGnoIk9sIlwBKICO1v%2FRpaUpgw2V9&X-Amz-Signature=b07f1cc27e63bcef1588c8d9bcdf4c5231015956ac00bb7abd600b212c97603f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
