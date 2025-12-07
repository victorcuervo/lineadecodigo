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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEFYVE7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM9jnVQmVLfoucezfq0gUGgRslRawIyaFbkiIm%2B0EqCwIhAOrW3ubTLczgvj9oHg0wqXJALjvkpA1vJ1bEQ%2Bw62EPcKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycHjCyqVrKtPNakPQq3APqEZDtJ8miFKjStqd6y0H%2FYc61dwLA%2FBxBSJKL%2FXGmwckOoHz3vE0m7LOcSjXgcrc6w7%2BJsmftWZ5KHzkxLTUFsvv%2F3KP75Xa9wE9G%2B0Z4Z1AYa3w9hRyzw8D3jYct50HIevZ53ekCuT3593C%2B062SwkCNCFG3CLliyEj%2F6R0M9GKOGZkAXbBxBhnLSicBQuQ0w%2BGyX%2FHSAKyAIhJyNZt07CLujkpvXTi5P4btTorAU23yoAgl0Dg0Y70jweViuUlM9v%2BTTG6ehSYEj98s9TvkTYgN12j%2BZwqp1A9MRKt51M7XH%2FCFlWlQqdzLLPYWp2qz%2FkYVu%2FrySX7qMPZFk4Vw5ImB1WeYR3gOJpkEmbwrfG5ZDTpFh1ZNMTDdZwj7IGaF2X%2Fm7xao08NspF3t9OyVhXQe8%2FSrYWnZK%2BAyQMG9lA2wPmw5BR3veh3GlhDaiyh7N8cSs%2FVipKN3RY5NLBkQSosxyRfFLsJMJBDgORFUAaJ80kyVs8sbvsOtMwckknYVFz1WVL8tCVo6fH9F0PqaLMKDpCWJXzS5l2xj%2FORsO87DqPhQLmEi6mCTt92V8cpvCVjZA6nxdRXPWap5EI5ymumI9fodTRC1o9OOHotai6%2BEHq7gGD63QWePAzCcmdXJBjqkAYni8Ai027hSpYucZFai4hn0JA8k9cU%2FCEC420W6T2DOhYpiWW%2FfFmvuxmFZAOUgaGOI0igK7iLAomwLEd6jMKIsG%2B7%2FCZ7yl6XdxLpM4cWzR5cxxocfssoIgUbQ2VIkzeNEiLG61TGOPiqU48me4pDZlBlVN3z%2FznIey4rh0xn%2FhChlURtPYiydBvUZVph4hFerGAuZV9XnY5gagk5cXEIecCur&X-Amz-Signature=ea12b805115294cb196308dd654d377bf5c950bda11ed21eeb22a3deb319d62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEFYVE7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM9jnVQmVLfoucezfq0gUGgRslRawIyaFbkiIm%2B0EqCwIhAOrW3ubTLczgvj9oHg0wqXJALjvkpA1vJ1bEQ%2Bw62EPcKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycHjCyqVrKtPNakPQq3APqEZDtJ8miFKjStqd6y0H%2FYc61dwLA%2FBxBSJKL%2FXGmwckOoHz3vE0m7LOcSjXgcrc6w7%2BJsmftWZ5KHzkxLTUFsvv%2F3KP75Xa9wE9G%2B0Z4Z1AYa3w9hRyzw8D3jYct50HIevZ53ekCuT3593C%2B062SwkCNCFG3CLliyEj%2F6R0M9GKOGZkAXbBxBhnLSicBQuQ0w%2BGyX%2FHSAKyAIhJyNZt07CLujkpvXTi5P4btTorAU23yoAgl0Dg0Y70jweViuUlM9v%2BTTG6ehSYEj98s9TvkTYgN12j%2BZwqp1A9MRKt51M7XH%2FCFlWlQqdzLLPYWp2qz%2FkYVu%2FrySX7qMPZFk4Vw5ImB1WeYR3gOJpkEmbwrfG5ZDTpFh1ZNMTDdZwj7IGaF2X%2Fm7xao08NspF3t9OyVhXQe8%2FSrYWnZK%2BAyQMG9lA2wPmw5BR3veh3GlhDaiyh7N8cSs%2FVipKN3RY5NLBkQSosxyRfFLsJMJBDgORFUAaJ80kyVs8sbvsOtMwckknYVFz1WVL8tCVo6fH9F0PqaLMKDpCWJXzS5l2xj%2FORsO87DqPhQLmEi6mCTt92V8cpvCVjZA6nxdRXPWap5EI5ymumI9fodTRC1o9OOHotai6%2BEHq7gGD63QWePAzCcmdXJBjqkAYni8Ai027hSpYucZFai4hn0JA8k9cU%2FCEC420W6T2DOhYpiWW%2FfFmvuxmFZAOUgaGOI0igK7iLAomwLEd6jMKIsG%2B7%2FCZ7yl6XdxLpM4cWzR5cxxocfssoIgUbQ2VIkzeNEiLG61TGOPiqU48me4pDZlBlVN3z%2FznIey4rh0xn%2FhChlURtPYiydBvUZVph4hFerGAuZV9XnY5gagk5cXEIecCur&X-Amz-Signature=46ab2cabdffbedb44418bbf582df4f24803b3349af002f08e0902826fcda029e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
