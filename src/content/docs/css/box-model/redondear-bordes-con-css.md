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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FJURMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg5tEr1knaVooTEDU%2Fnf0kHUHzgAkdIsGsqt7TH7SGzAiBEHAJcWKd64bWBJZg%2FfkI9kjmq8BvA8WhYVD3nI0ITwir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMuk8tO9eKEfUvIHrqKtwDK7U0Zz4w1dJfmwDIjCWNZK8LjXpBCdcq5x2CNKdHr9cgbWgzo3bZPSfpPTArCGPC6fqt7EF7UCNSuQ%2BBOEQL3e%2BowMNN%2ByP9mez2lipn8UMTS1KiLL2e9C0o9OYVzD1oA6VQaUksccB4SrXXtxuGeCLdvg4Z%2BXfHyGlbiCJ%2FbEmK6GK7N7HvO2Xojniwk4FRPSdN%2FM1omqeilu7IBEtq4IT0KIzOVUUh59bpCBLSnaU8e7%2FTUtvnJcEGWLliWA8Flo4YGC50Kl81nHPkuxR%2B%2BShVCE1qP8rIdnIbkppHPlsy3iC%2B8sMsDNBF%2FDCAXoVx2%2Bxg0S0kVTYLXVBxs33WHxAo25XGmLNPabObhrCdscwYWFr290AW9JRGwrP9OG4xYUI5n3bY0%2FS3nF%2FZwfBPphEf87a%2F73XI5aVs%2By7plfeXGS9H6bzlhO0uxuEv26fQmkGP8DdvXZtZrwADhU5E8fG6kZiNpd3I4SsSep1gjMLMpiBgEKfkPt1IeG4H2rfAZv6wt3GrKngSnWOGav3Kw7Fp3qaYFK%2FOzA0oWhEdTnpTyPC0%2BZZXRYiWnfG5A5DfWsBZSD6tOmJKQ1Vf7oSJoou97BaU%2FnIzCMT2CtDD1OTNb58Cno%2BalooTNgcwo7eJygY6pgE3qZQFj3OegV8ayxSbPfxwmdu21xfFkW6EKVoRPqpc2BQYfHDs9jhg0LbMsDjC6iYdf%2BN8vgO6okvBHVQNW%2BfEbUmuDpS%2BLVAVKRpYpEsWK5VLp0gzdav4RSd1An2T4o%2Bn6QVOJrsHBQz9Jm4DlH0HRXJxnKUh%2FQaJ1NDlQIf5fPa%2BDu10RwqL3zZe2TKNkb3V0VK6k0IVnP4fHMd5Bt7b0fpq7wsE&X-Amz-Signature=015c8c8959175b8e68d23c48f47ac33bfa615ef2a09e2fe52ae3eeb7a7d2609e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FJURMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg5tEr1knaVooTEDU%2Fnf0kHUHzgAkdIsGsqt7TH7SGzAiBEHAJcWKd64bWBJZg%2FfkI9kjmq8BvA8WhYVD3nI0ITwir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMuk8tO9eKEfUvIHrqKtwDK7U0Zz4w1dJfmwDIjCWNZK8LjXpBCdcq5x2CNKdHr9cgbWgzo3bZPSfpPTArCGPC6fqt7EF7UCNSuQ%2BBOEQL3e%2BowMNN%2ByP9mez2lipn8UMTS1KiLL2e9C0o9OYVzD1oA6VQaUksccB4SrXXtxuGeCLdvg4Z%2BXfHyGlbiCJ%2FbEmK6GK7N7HvO2Xojniwk4FRPSdN%2FM1omqeilu7IBEtq4IT0KIzOVUUh59bpCBLSnaU8e7%2FTUtvnJcEGWLliWA8Flo4YGC50Kl81nHPkuxR%2B%2BShVCE1qP8rIdnIbkppHPlsy3iC%2B8sMsDNBF%2FDCAXoVx2%2Bxg0S0kVTYLXVBxs33WHxAo25XGmLNPabObhrCdscwYWFr290AW9JRGwrP9OG4xYUI5n3bY0%2FS3nF%2FZwfBPphEf87a%2F73XI5aVs%2By7plfeXGS9H6bzlhO0uxuEv26fQmkGP8DdvXZtZrwADhU5E8fG6kZiNpd3I4SsSep1gjMLMpiBgEKfkPt1IeG4H2rfAZv6wt3GrKngSnWOGav3Kw7Fp3qaYFK%2FOzA0oWhEdTnpTyPC0%2BZZXRYiWnfG5A5DfWsBZSD6tOmJKQ1Vf7oSJoou97BaU%2FnIzCMT2CtDD1OTNb58Cno%2BalooTNgcwo7eJygY6pgE3qZQFj3OegV8ayxSbPfxwmdu21xfFkW6EKVoRPqpc2BQYfHDs9jhg0LbMsDjC6iYdf%2BN8vgO6okvBHVQNW%2BfEbUmuDpS%2BLVAVKRpYpEsWK5VLp0gzdav4RSd1An2T4o%2Bn6QVOJrsHBQz9Jm4DlH0HRXJxnKUh%2FQaJ1NDlQIf5fPa%2BDu10RwqL3zZe2TKNkb3V0VK6k0IVnP4fHMd5Bt7b0fpq7wsE&X-Amz-Signature=aee1bd9d4f6af747a5ffcfcee84ece5a5d2d90c325de5cc856684bf0010bed76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
