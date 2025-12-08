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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECPTUBV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEyvzhiBTLWfmC1cZPmYU4%2F%2BzCOj0cIqPes1XyvbKrtAiEAxhasAu%2F%2BPrzHTYSyAniGMHTJdZ3Sfq7vNkywQvDJiosqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2dpmhvrmVBJxosTCrcA5IAF3FxVGeaXZ0hvjCDToZH8Co61%2BP2XDA32nS1C%2FPVQ0QFcMjO7uzb5TYtKfDfO02S70ijxMzQIKw6Ep7MoxdN5SN8tVd87LbSlNSqJyFieOgcGepjmNUhT%2FOJQToZconIUGYeKdH%2BXdj%2FCmzi0%2FMw4gi5F%2Feh7OBU26eRlcIy%2Br6hJMyvui2bL75CLPwlE9r3dEDY5fp%2BB0DE2zyaVhJ73o8KrAyWlD8ksxuPZQrklUjIQ%2Bnvr0Cv5buYL%2FM2rNZaQEv%2BfTYHtAea%2F4XciFNwwhAX0HbcprdC6LjlWFE8if0SAG%2FIYfedGTbw5oQmO7qYzGq%2By0OlskhWFgP%2BZ1OAOb8S8k53gQ6Tb%2F0Ge4h5DGLWctHyRbiKR1tSWzhFvc7W2x2IHR01qA%2F7mxdFrA%2BOL0lH0wB%2B9%2Bipq0YqoxSo%2FlIxDXvpkuQeKJAEYiOn%2Bq5WY5SVkeyajvJ7kP4zh51iDuAGhcoW7DT%2FmduEvxepkvl0BFHmVzvauTxDs1GUjlu9RzRr7G%2FppiCljRS2WUaFwTZym0Yf2iduzVeshsvb1HOu6%2BwmiMt9vZ0y1ClACYqVTrWARH43KOCIT8adgiA6uZMfbxXcfD76CQmNkZqleXdp1M5paE5RSgeTMKLk28kGOqUBWyoYUR6KpqZ71gEgCTeKSnhP2WS5dPgYJ%2BAEqcw44WcY8CQPZ2CNLZ03Fjz%2BT88QEVE%2B8ZqsGDJMjFuJY0L1F0H4JB5tuQfN8ph8JJKiML1PKdsILanMDZSyUMCmBNiq2Lf6C1IvTKtUwVUKupdXXDrYVRtbmLGGVmMJyFgGQc0YBGntqHjebHdfSw5iRVp7JJrHCCOUMvvEnFHU05hWfFii7%2F%2BO&X-Amz-Signature=854dda36c01de085924eb341249fc196e7a41a1c1e495f2a4db4076ba4b84f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECPTUBV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEyvzhiBTLWfmC1cZPmYU4%2F%2BzCOj0cIqPes1XyvbKrtAiEAxhasAu%2F%2BPrzHTYSyAniGMHTJdZ3Sfq7vNkywQvDJiosqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2dpmhvrmVBJxosTCrcA5IAF3FxVGeaXZ0hvjCDToZH8Co61%2BP2XDA32nS1C%2FPVQ0QFcMjO7uzb5TYtKfDfO02S70ijxMzQIKw6Ep7MoxdN5SN8tVd87LbSlNSqJyFieOgcGepjmNUhT%2FOJQToZconIUGYeKdH%2BXdj%2FCmzi0%2FMw4gi5F%2Feh7OBU26eRlcIy%2Br6hJMyvui2bL75CLPwlE9r3dEDY5fp%2BB0DE2zyaVhJ73o8KrAyWlD8ksxuPZQrklUjIQ%2Bnvr0Cv5buYL%2FM2rNZaQEv%2BfTYHtAea%2F4XciFNwwhAX0HbcprdC6LjlWFE8if0SAG%2FIYfedGTbw5oQmO7qYzGq%2By0OlskhWFgP%2BZ1OAOb8S8k53gQ6Tb%2F0Ge4h5DGLWctHyRbiKR1tSWzhFvc7W2x2IHR01qA%2F7mxdFrA%2BOL0lH0wB%2B9%2Bipq0YqoxSo%2FlIxDXvpkuQeKJAEYiOn%2Bq5WY5SVkeyajvJ7kP4zh51iDuAGhcoW7DT%2FmduEvxepkvl0BFHmVzvauTxDs1GUjlu9RzRr7G%2FppiCljRS2WUaFwTZym0Yf2iduzVeshsvb1HOu6%2BwmiMt9vZ0y1ClACYqVTrWARH43KOCIT8adgiA6uZMfbxXcfD76CQmNkZqleXdp1M5paE5RSgeTMKLk28kGOqUBWyoYUR6KpqZ71gEgCTeKSnhP2WS5dPgYJ%2BAEqcw44WcY8CQPZ2CNLZ03Fjz%2BT88QEVE%2B8ZqsGDJMjFuJY0L1F0H4JB5tuQfN8ph8JJKiML1PKdsILanMDZSyUMCmBNiq2Lf6C1IvTKtUwVUKupdXXDrYVRtbmLGGVmMJyFgGQc0YBGntqHjebHdfSw5iRVp7JJrHCCOUMvvEnFHU05hWfFii7%2F%2BO&X-Amz-Signature=46b83a5cc7e517bd36d37e550f3047ff44553a632d4e4948c68563436184f51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
