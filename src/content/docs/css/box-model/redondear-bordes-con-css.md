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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHCUQIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfi0f%2FE1JLGlR5Ca7jBkmAL%2BjMcsEpIAYvPNmurN847AiEAkdrlix3HxxHvR%2BcEFSmsrSxEHoke524qEwmS6L3voIkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE71ICp2RfkCvk2hsCrcAyYy1Q%2ByIyrp46OemgFmPH6n5SDaP2PercPZZf%2B4Dts5D42Aa0doGni77NOJSjErqaYZmZBXLOiwOb%2F9WxyTMqTZ4WHetUDwXkvQ%2B8uiztppcY3B0xF1N%2BZNDWrQ936lGWWlq9gLdGceLwHC0JlUJ6CeI9%2FQ1n%2BN7QV85Ks5EAB8mRCJza8CSj5r8PlWVTvVqggBTS7uBvWYikKr7j4i3sdUnpKzYPtjoYqSDTyFnTTzVAWxsqPI02Rpx9Lnm9VUtg3Ya%2FySZc3BPiodzlhPqm3Hd%2BtRVxdxo7eQ0pVLDUytbAP7VjQFWp16qsUiRksFxBUeGF66Z7dIssdQBD2GzjZtPXjL97UkYZKvV4zo2%2FJWj%2FTrba7%2FVkH2oKLqxx3oj8vTNkoyCd1hGtylg589X%2Fm0%2BF8vtYPojJ19bMMbi1afud5dGobi24eoAUrUKxjBsBuM5SiUZDokS3CoR520A5vyAm0uVa0RRs9%2BaQYVIe7Bb3U6qmzpmmRENqI1kxJvHGQAF8urtXzM0xCLj8lxHY0LVbIAJI8v2dO%2BBJz8TcJZ%2BUbT14TrN%2FjBdfCCdZRB8wc4MBAwr6TqRwHyFwc56mnBJjswIaEZs7VARwOxIolnf%2FgXUlBJs%2Bb6x1glMIWfi8oGOqUBDd0PgMpK3Gbmzhnc9gzBDwr3lkK3FSVVW9UqBP0CDY75a6z0yCHZI81uD1hkpMvjxx9pazj4tyzUuKpcOU6LIWaG15S9bZjdo8eGyJKKdmXOnrr59rLqN8Em%2F%2FlAuR2h6Z9qF%2Faph6AVEPzNnmC2qy%2FzkVsNMyYSu8VoovaCFzyJaa4PxdfVWVIYKCDcMt5dI%2FP%2Fg5W14EapP%2BfP4n8JgRVDtWX9&X-Amz-Signature=02c588d2771f82e577c21f0f26b72a4c92b32f18328b3800255ea1a135c731c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHCUQIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfi0f%2FE1JLGlR5Ca7jBkmAL%2BjMcsEpIAYvPNmurN847AiEAkdrlix3HxxHvR%2BcEFSmsrSxEHoke524qEwmS6L3voIkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE71ICp2RfkCvk2hsCrcAyYy1Q%2ByIyrp46OemgFmPH6n5SDaP2PercPZZf%2B4Dts5D42Aa0doGni77NOJSjErqaYZmZBXLOiwOb%2F9WxyTMqTZ4WHetUDwXkvQ%2B8uiztppcY3B0xF1N%2BZNDWrQ936lGWWlq9gLdGceLwHC0JlUJ6CeI9%2FQ1n%2BN7QV85Ks5EAB8mRCJza8CSj5r8PlWVTvVqggBTS7uBvWYikKr7j4i3sdUnpKzYPtjoYqSDTyFnTTzVAWxsqPI02Rpx9Lnm9VUtg3Ya%2FySZc3BPiodzlhPqm3Hd%2BtRVxdxo7eQ0pVLDUytbAP7VjQFWp16qsUiRksFxBUeGF66Z7dIssdQBD2GzjZtPXjL97UkYZKvV4zo2%2FJWj%2FTrba7%2FVkH2oKLqxx3oj8vTNkoyCd1hGtylg589X%2Fm0%2BF8vtYPojJ19bMMbi1afud5dGobi24eoAUrUKxjBsBuM5SiUZDokS3CoR520A5vyAm0uVa0RRs9%2BaQYVIe7Bb3U6qmzpmmRENqI1kxJvHGQAF8urtXzM0xCLj8lxHY0LVbIAJI8v2dO%2BBJz8TcJZ%2BUbT14TrN%2FjBdfCCdZRB8wc4MBAwr6TqRwHyFwc56mnBJjswIaEZs7VARwOxIolnf%2FgXUlBJs%2Bb6x1glMIWfi8oGOqUBDd0PgMpK3Gbmzhnc9gzBDwr3lkK3FSVVW9UqBP0CDY75a6z0yCHZI81uD1hkpMvjxx9pazj4tyzUuKpcOU6LIWaG15S9bZjdo8eGyJKKdmXOnrr59rLqN8Em%2F%2FlAuR2h6Z9qF%2Faph6AVEPzNnmC2qy%2FzkVsNMyYSu8VoovaCFzyJaa4PxdfVWVIYKCDcMt5dI%2FP%2Fg5W14EapP%2BfP4n8JgRVDtWX9&X-Amz-Signature=7ce15409cac4047953af2d03022d1025b5d89313d4443eac387dfcb16abb5d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
