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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMXQESG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgX6uhhFSwsceCno6TGpy086fRaNlEj0FBXf7fEYbWeAiAQVHS4QUEn5ISbuPNAyMn7cgbYA%2FR6fgsrShAkoY%2F7cSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMU3mHfhEBmEFZmkQWKtwDSVTAW2sdxxQ6Sp8U8OQuOyJov1lwMpe1y8WGtithYhBv9Smoa6oAaszj4HIMy59HKykdSzr1I%2FXFY1i5%2FkxaUvpahrOV3G1xaE6UE%2BB48DvVJXJ6lIbPPzmjz%2FTeTUaQmOXI1itO6b8EwkpMMu7QHJkZT1Y0%2BxaVW%2FfWZxCh10YFAygpfy5Z%2BRdN3oWA8HLu4NhU7r%2FOfmEJJP%2BtKrB%2BrjT1yuIFwtWQj%2BTcxIpFXWR52I99Aj9NMSRbRX8agj73clbRdikCzT5yG0Bi1LWo8lLdWelHEi1Si2QFJKwa712El2dM2V3Rlemp8x1zaylBIWu87MOyBMnyBVwy0lNPQS7LbknRgNVE56hAIin5NEv3uRfkPb6FcVOtw5dcu3CBLfzdf1y8otBbfObxIvGT%2Bqbxclpag7IioGaLWb54lhOxQjm82kCoTAyN1eqacrmPjWMnEbBsT8fDXCAf1coKmA9RgqK6WvX3lTR6DT9td%2BJu3Aq2sqHA5yuS%2BfTHZFnHPDGlp4DD0BmAwT3N7cZYvjug2dQtHmqos7UsXC6TGfJ0j6tCxVruGRSR5VwhH3QFpB%2B3EVYFwk6RE0xicjsa8mflAD9f%2BUCGq0qCw0diVl2PZGMYfkP%2F057xe%2F0w0IzIyQY6pgHE8vWrKKnDw%2BiM3awv4KkmRf8DKXEpWjKkehpLZ5743Vvl9sTdDNJNXtc848DIrkzBU08gKop4s24hfFKuD6bIOQXvO3la2XBx7tlX2d%2FqI1Fg95dFg2t4CrbZRBL2LzjV1%2Fw2Bz%2FHpSE%2BaTiwcG0%2Bl%2B5%2BZjYfwgKkoFVxxyqkLcp6faDhhB2DTfD9mgqk2ReMHbvkxSFKLbwspOJsyDzeoENThwk0&X-Amz-Signature=61cb6dfc9c6e572dc442cd721bb1d6f40dea0532c4ad8877d983f524839ff8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMXQESG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgX6uhhFSwsceCno6TGpy086fRaNlEj0FBXf7fEYbWeAiAQVHS4QUEn5ISbuPNAyMn7cgbYA%2FR6fgsrShAkoY%2F7cSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMU3mHfhEBmEFZmkQWKtwDSVTAW2sdxxQ6Sp8U8OQuOyJov1lwMpe1y8WGtithYhBv9Smoa6oAaszj4HIMy59HKykdSzr1I%2FXFY1i5%2FkxaUvpahrOV3G1xaE6UE%2BB48DvVJXJ6lIbPPzmjz%2FTeTUaQmOXI1itO6b8EwkpMMu7QHJkZT1Y0%2BxaVW%2FfWZxCh10YFAygpfy5Z%2BRdN3oWA8HLu4NhU7r%2FOfmEJJP%2BtKrB%2BrjT1yuIFwtWQj%2BTcxIpFXWR52I99Aj9NMSRbRX8agj73clbRdikCzT5yG0Bi1LWo8lLdWelHEi1Si2QFJKwa712El2dM2V3Rlemp8x1zaylBIWu87MOyBMnyBVwy0lNPQS7LbknRgNVE56hAIin5NEv3uRfkPb6FcVOtw5dcu3CBLfzdf1y8otBbfObxIvGT%2Bqbxclpag7IioGaLWb54lhOxQjm82kCoTAyN1eqacrmPjWMnEbBsT8fDXCAf1coKmA9RgqK6WvX3lTR6DT9td%2BJu3Aq2sqHA5yuS%2BfTHZFnHPDGlp4DD0BmAwT3N7cZYvjug2dQtHmqos7UsXC6TGfJ0j6tCxVruGRSR5VwhH3QFpB%2B3EVYFwk6RE0xicjsa8mflAD9f%2BUCGq0qCw0diVl2PZGMYfkP%2F057xe%2F0w0IzIyQY6pgHE8vWrKKnDw%2BiM3awv4KkmRf8DKXEpWjKkehpLZ5743Vvl9sTdDNJNXtc848DIrkzBU08gKop4s24hfFKuD6bIOQXvO3la2XBx7tlX2d%2FqI1Fg95dFg2t4CrbZRBL2LzjV1%2Fw2Bz%2FHpSE%2BaTiwcG0%2Bl%2B5%2BZjYfwgKkoFVxxyqkLcp6faDhhB2DTfD9mgqk2ReMHbvkxSFKLbwspOJsyDzeoENThwk0&X-Amz-Signature=d4a50ef3052b6ea71f58be95ef1bb492241963c377e7b1e1e9a03bab38810b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
