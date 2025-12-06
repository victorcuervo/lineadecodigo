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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WPMV2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFDHcr6SK5jho%2B50ba0rb9xXoLU59D4IG1hmv11Dp77AiEA6n2lsUguf5CJC%2Bngr%2BOzfIh6bm1Gf11IvlGMNMOX5CEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHCP%2FT9KMge0SbbquircAxq1BvihjD4goJqJSrI2TV0zeb%2BqDlQeYttlmplPEtkF%2Fvb8m0pTRKp4%2FdKpr07mKCG%2Bq4G7%2Bk5xkOtmpFg4i3cvNhryAYl6f0Gz4to6ZioRa7lBVpGgKNpAsPAcUdkjhG3YZFhnsHdyAO4li8RhuZ7%2FOYQmlQAjPSSDez8CQZA%2BMR7ajyCMq3%2BU0jFyeT8E8MxQOS4SQ3aoqTVi2JpdaG6wQuScunIm%2FuYpdObf4h6tRjOCn64gKMrAZivsqU1DDql%2FGDSBG2FqY%2Biwpz9gkxWVLq1iGD1KfGINkTuF%2BEEMRHZk5Adb5jT%2FrUKxmuPp3zpDfsxIjd00ouT51b7XO2G2L5IBe7WEX60zBnrYuw88qKJ2vki7BxzDt534TgN4Ws0bnE0Vq0sqNP9hp6Iy40AJ6Ew15gJDqf%2BWXB48RqlgSIkpefBC%2BLM9nC8VBJ9N1nDvvXPYpYmc9Zj2r8rpwPMMq5OoTIG6mx2X%2BaTeAEPkxW35df5I%2FZPXTrJIJv%2F%2Bywz1CWRCb3jKs9G4%2FYbeVV%2B9HjDNKbvXjmiX3EAkfxxpRHUR%2FsO9JLWrZhJe4FiekpC24mU8dm3GF1niUhT0TubXH3iVIdtkP01UNPYADIAkyFqFxcspsj17wF%2FLMPXqz8kGOqUB93Wtaqqc6hSct6sQ5ZehyK7OnDCpv5L9%2FuhJTTf1EJ%2BdPFcYC%2FUf3C98%2BvPOH%2Bn6Xbo7vbN4dOmYY4WRj%2BKyV07gY6jmRrTjjTltGT6k%2BecQyYU2bd2vLynYJ9%2F1kKAD%2FpTubam6mCG%2BZwAA%2BiVKY0g%2B9ZRJ6mtn4jz3QkpH8cxapc2rtiGykd0awvVL6eCe%2FJa3%2BHEJ%2FjSRU8bp374rWnMIl23w&X-Amz-Signature=6442f8c34f3ea3492aa92c7ff8e06418e043ce8ea4d959be62f54da8697fd8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WPMV2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFDHcr6SK5jho%2B50ba0rb9xXoLU59D4IG1hmv11Dp77AiEA6n2lsUguf5CJC%2Bngr%2BOzfIh6bm1Gf11IvlGMNMOX5CEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHCP%2FT9KMge0SbbquircAxq1BvihjD4goJqJSrI2TV0zeb%2BqDlQeYttlmplPEtkF%2Fvb8m0pTRKp4%2FdKpr07mKCG%2Bq4G7%2Bk5xkOtmpFg4i3cvNhryAYl6f0Gz4to6ZioRa7lBVpGgKNpAsPAcUdkjhG3YZFhnsHdyAO4li8RhuZ7%2FOYQmlQAjPSSDez8CQZA%2BMR7ajyCMq3%2BU0jFyeT8E8MxQOS4SQ3aoqTVi2JpdaG6wQuScunIm%2FuYpdObf4h6tRjOCn64gKMrAZivsqU1DDql%2FGDSBG2FqY%2Biwpz9gkxWVLq1iGD1KfGINkTuF%2BEEMRHZk5Adb5jT%2FrUKxmuPp3zpDfsxIjd00ouT51b7XO2G2L5IBe7WEX60zBnrYuw88qKJ2vki7BxzDt534TgN4Ws0bnE0Vq0sqNP9hp6Iy40AJ6Ew15gJDqf%2BWXB48RqlgSIkpefBC%2BLM9nC8VBJ9N1nDvvXPYpYmc9Zj2r8rpwPMMq5OoTIG6mx2X%2BaTeAEPkxW35df5I%2FZPXTrJIJv%2F%2Bywz1CWRCb3jKs9G4%2FYbeVV%2B9HjDNKbvXjmiX3EAkfxxpRHUR%2FsO9JLWrZhJe4FiekpC24mU8dm3GF1niUhT0TubXH3iVIdtkP01UNPYADIAkyFqFxcspsj17wF%2FLMPXqz8kGOqUB93Wtaqqc6hSct6sQ5ZehyK7OnDCpv5L9%2FuhJTTf1EJ%2BdPFcYC%2FUf3C98%2BvPOH%2Bn6Xbo7vbN4dOmYY4WRj%2BKyV07gY6jmRrTjjTltGT6k%2BecQyYU2bd2vLynYJ9%2F1kKAD%2FpTubam6mCG%2BZwAA%2BiVKY0g%2B9ZRJ6mtn4jz3QkpH8cxapc2rtiGykd0awvVL6eCe%2FJa3%2BHEJ%2FjSRU8bp374rWnMIl23w&X-Amz-Signature=81af3a2cab2923b4b44246dae6d1ec228ba19cd54696a4f2b712394d7e0e2321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
