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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HU3Z7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHa7z1Gbp4fbV%2FcIVMZMVcPxOL9SpAPNRgJPtlWyLr1AiAMxpsXk01IcxGRrNwPAV5q8V%2B9k8R%2B3a06Lc81wl4vbyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfqFLvn4BEkWkBwBNKtwDYzQvC8Q3Opqu2gF510yVoBedkcbDuMcJ9awSbrd7gdBzVuqftkyXiEl9omM9I9PT2G4GYCNX5%2Ba%2Bu29LaYlTaE%2FJ7RSqXg%2BEwcZgfhIxTavmU2KHMZjYiu2q42J0JOQ0s8eyMF6Ppd5zAX553CkOYFJOtT1X4OECfgQzzj9fWZXAy%2BWR%2Fy%2FSuDMfmf4t3OennTv4EKx0PKv7hIn5laX9O8J97k6%2BaCWU4eXavoQHTBTEUamVEJz5enCiSNOMYWxih07c5Ai6S16UfbUF16ZuW9%2BfB4yDilP4T8HF%2BoaL3EQtM8QRU%2BRq%2FSqXoEbFvFi5GmOtCgj%2FTrjOeMdbVoqB8RSJVCJrdyzJHnF1Pk40Wc%2BoCuj2qJFqWPmSv30Slu14Z6zV4WCjl39WKMH1dtvdo%2FKE5rX7Qm4vSqfXdFrdfpsq02LHKWUQuoJToi6Yfr90vac87GLT6%2FfbMHdpDbS500Vkd1h5Ffd9pkg%2BnFAhG2GM7FYGCgxXNIZ1Zho%2BoY92LYHyGmWx0erFpSpMGuVdJgFCspVgTX35%2Bpor%2FYXlANtH2yfDxwHZC5133rZuxouv0X3wgjv7tv6p9cKSkOaTVGcUu3Kt%2Fj%2F1fkZtIyJNTfpieajIRlGgx6Uj%2BjYw0oOJygY6pgHLjiPTnmqu%2BPmpQy%2Fin2SPvwreEpbGbahAUARJl3Cp8tY0LTewrdH3N1%2B3ldQBizaTbXcecJc2xjCq7imdUyMP3rk%2FYvMJ4mS%2BNLkH3KZEkmV28iovl%2F3SXaBayuPhXhwkrio%2FzliRDf2nCyoBLSqlyiRKraMnyeoTxjcmNl4Rr%2BX7vLZTIhKWQ7fV9Klaiu4sSyJpRwgMlQ%2B2QZk2dXA0L%2FHzK%2F4u&X-Amz-Signature=bdb71df4f23ff98b290561ec5405cea7ba8a70a5f708883d1149fe1f519d6693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HU3Z7S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHa7z1Gbp4fbV%2FcIVMZMVcPxOL9SpAPNRgJPtlWyLr1AiAMxpsXk01IcxGRrNwPAV5q8V%2B9k8R%2B3a06Lc81wl4vbyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfqFLvn4BEkWkBwBNKtwDYzQvC8Q3Opqu2gF510yVoBedkcbDuMcJ9awSbrd7gdBzVuqftkyXiEl9omM9I9PT2G4GYCNX5%2Ba%2Bu29LaYlTaE%2FJ7RSqXg%2BEwcZgfhIxTavmU2KHMZjYiu2q42J0JOQ0s8eyMF6Ppd5zAX553CkOYFJOtT1X4OECfgQzzj9fWZXAy%2BWR%2Fy%2FSuDMfmf4t3OennTv4EKx0PKv7hIn5laX9O8J97k6%2BaCWU4eXavoQHTBTEUamVEJz5enCiSNOMYWxih07c5Ai6S16UfbUF16ZuW9%2BfB4yDilP4T8HF%2BoaL3EQtM8QRU%2BRq%2FSqXoEbFvFi5GmOtCgj%2FTrjOeMdbVoqB8RSJVCJrdyzJHnF1Pk40Wc%2BoCuj2qJFqWPmSv30Slu14Z6zV4WCjl39WKMH1dtvdo%2FKE5rX7Qm4vSqfXdFrdfpsq02LHKWUQuoJToi6Yfr90vac87GLT6%2FfbMHdpDbS500Vkd1h5Ffd9pkg%2BnFAhG2GM7FYGCgxXNIZ1Zho%2BoY92LYHyGmWx0erFpSpMGuVdJgFCspVgTX35%2Bpor%2FYXlANtH2yfDxwHZC5133rZuxouv0X3wgjv7tv6p9cKSkOaTVGcUu3Kt%2Fj%2F1fkZtIyJNTfpieajIRlGgx6Uj%2BjYw0oOJygY6pgHLjiPTnmqu%2BPmpQy%2Fin2SPvwreEpbGbahAUARJl3Cp8tY0LTewrdH3N1%2B3ldQBizaTbXcecJc2xjCq7imdUyMP3rk%2FYvMJ4mS%2BNLkH3KZEkmV28iovl%2F3SXaBayuPhXhwkrio%2FzliRDf2nCyoBLSqlyiRKraMnyeoTxjcmNl4Rr%2BX7vLZTIhKWQ7fV9Klaiu4sSyJpRwgMlQ%2B2QZk2dXA0L%2FHzK%2F4u&X-Amz-Signature=2b8d4e0b45ff1254feb9ba20256b1abec7d371e63deb3c7caba9c6113f609f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
