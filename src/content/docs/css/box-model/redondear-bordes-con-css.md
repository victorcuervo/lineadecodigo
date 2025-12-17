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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZB4B5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPEwcTUO11mEfpn2ORanwyYTUjaJ4JzJ6LU6cPGX%2F%2FrAiBeOFQpEl1UOrCsLA17Xa6UFMn%2BCZVQFlB73w%2FzkoE2hCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOV1EJ5ofb6ENvhyCKtwDo8U3dTif%2BTe9awhZcoka1v5luDwxeoc7lEQJDFw10qaVSof1MUp%2Fs0QRzXiqRPM89elnS0q8eStRdvZC%2BGl0FMF%2F0ZmWvKQl5H9QwGptSFEq8DCm2WaiOYEs9jO%2F%2Fl3cdjwlgheV2DEpYXxA733MOZSSrtKASFT0ScmBlA7xgGonfpm9yh%2Bc0SLwuY3vz0vs4Zv0ztMmV%2Fa%2BJEj1YcIOEuSt5Kzd7YYv%2Fifzp5l8xEigRqlxGnTfYyhF2kCTdT6QrItVP4xjFiy%2BklsRITEV%2B3%2Bh1FVjHdzyqlu4m3nyuQtqpli3Gn8ZU9xJt%2BVW95Qop8W15bQU6iqeikDJGN5enedSANdu5oq%2BD90u9ybOSmIpdw7EMWtCFRXqhtUXVjV2vrYpmRmcRbqZRYmhULzV4sHUvLxh13u48kAejQNIDGimP%2F4dXAnRx0zrGXSuVHyizly1m12hbG4v4FWYmAlotLDDFdd%2BFKQpWzDLNwu0AniycOn69MgynmMSduXk1UxJx6NtYTqFL6%2B6r0UVtRmvRD88pa%2BXk8OShaCvPdBYxjjqcTcNWpFAmOd5AsrALO2jNyBDjWXrWJRQVRz9x6HYMW%2Fq%2B0lhTPpRfPfHnhMs%2BouCn2pMZ07INBxOCzIwt5%2BLygY6pgG%2BlFl%2FjN11arfLTaCasZwicom82kECk0xuoCK3fSICfpuNh0JtHEgN3e5y%2Fua9IuUmsYTRfTZUzFXhuiDtdk8R5AIMokSZiYXg7WhpMpY6EPaB19wL43Z84BGWq34YrDQLtGoSWOaQNGiv6tMDn%2FmpiLDPyO5PZmZs092wYjUdreuYwVlSwBF7lWl2TAm0nidLAAUA5T7ckEZDJtcrcm4kMpX9RXEA&X-Amz-Signature=b09d38f0d8d5cc7e10a326ebc2fd81faff8006b2190fc1b6bfafc6cb7c7deaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZB4B5B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPEwcTUO11mEfpn2ORanwyYTUjaJ4JzJ6LU6cPGX%2F%2FrAiBeOFQpEl1UOrCsLA17Xa6UFMn%2BCZVQFlB73w%2FzkoE2hCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOV1EJ5ofb6ENvhyCKtwDo8U3dTif%2BTe9awhZcoka1v5luDwxeoc7lEQJDFw10qaVSof1MUp%2Fs0QRzXiqRPM89elnS0q8eStRdvZC%2BGl0FMF%2F0ZmWvKQl5H9QwGptSFEq8DCm2WaiOYEs9jO%2F%2Fl3cdjwlgheV2DEpYXxA733MOZSSrtKASFT0ScmBlA7xgGonfpm9yh%2Bc0SLwuY3vz0vs4Zv0ztMmV%2Fa%2BJEj1YcIOEuSt5Kzd7YYv%2Fifzp5l8xEigRqlxGnTfYyhF2kCTdT6QrItVP4xjFiy%2BklsRITEV%2B3%2Bh1FVjHdzyqlu4m3nyuQtqpli3Gn8ZU9xJt%2BVW95Qop8W15bQU6iqeikDJGN5enedSANdu5oq%2BD90u9ybOSmIpdw7EMWtCFRXqhtUXVjV2vrYpmRmcRbqZRYmhULzV4sHUvLxh13u48kAejQNIDGimP%2F4dXAnRx0zrGXSuVHyizly1m12hbG4v4FWYmAlotLDDFdd%2BFKQpWzDLNwu0AniycOn69MgynmMSduXk1UxJx6NtYTqFL6%2B6r0UVtRmvRD88pa%2BXk8OShaCvPdBYxjjqcTcNWpFAmOd5AsrALO2jNyBDjWXrWJRQVRz9x6HYMW%2Fq%2B0lhTPpRfPfHnhMs%2BouCn2pMZ07INBxOCzIwt5%2BLygY6pgG%2BlFl%2FjN11arfLTaCasZwicom82kECk0xuoCK3fSICfpuNh0JtHEgN3e5y%2Fua9IuUmsYTRfTZUzFXhuiDtdk8R5AIMokSZiYXg7WhpMpY6EPaB19wL43Z84BGWq34YrDQLtGoSWOaQNGiv6tMDn%2FmpiLDPyO5PZmZs092wYjUdreuYwVlSwBF7lWl2TAm0nidLAAUA5T7ckEZDJtcrcm4kMpX9RXEA&X-Amz-Signature=60cf0c2d23b1956bece25467b6444b178301b940452091c74b1a52a1a15b8365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
