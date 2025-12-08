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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHERPY5Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk1iFouoLqLW%2Fw0eTDciWN99xvU2iDHCOcN9S1FzxZ8AiEAq41hVUSkceg%2Bync00H%2BAhczJA3I%2B7Pninzb1isKpF34qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYagaXA5RwJ7CrGVCrcA3Agg%2Bb9G2AEsg8SEoSz5qYyvGle%2Fdkh2Ihk5PNtUrn16TCKH75bSf3USQEz%2B9IDnWtV8mEuN44m7siWvVyU82ZNyngQrESD7wx%2Ft3eLAZrmDuhN4jt6IXw3%2FmFdiE%2BbJe4hyRXLTOoS11gL5pKl%2FxSxqPN7zg%2FR7Hx%2FgD1tNHPsU7%2FftbYyglnxuxEk1hrK2BuRInib6GOtX0Ok1e2d26xR62ScGJcOjKOQ%2F9me%2Fv2AM%2FhU4ctvI%2Bnm%2BE%2BV6Gs6yof%2FK2W%2Fv2fh%2F5GNl0Eul1WlKFV702AFXBWzqs%2F0YMK8kK84QtX4ZqjVYjmRuexCMkfS9xqUJvabRyQgUjQaf0lPKq3JGvk8TmTRfqmri1GaO5A3L0ph6LEt54Hvo%2B91bpO%2BQ8aZGuanMKGzPCftzbB%2BLhOQ%2FvCY9lK12Uc%2FHZ0DUJrsIXgL5hHbOfiRHFMueiPKzRfc5bV9xRi2VcGWLwDnXYnETZ5MjHgUwuZJjcUdebIEXqXsrzKwJiLyH8e4h1n2JjoKqfUuWulT%2BqF70VM4gWl%2FBJMlcL2TM2uZe5CDBiHjCD6%2FpHtE7O6XGyFV5kcaWvuD7EZTjoymd5yMNxfmgRBmKGXzKhMPWXT4rhSOqb9psXmhGAKLOd00MIvz2skGOqUBwzbY%2BXanXzc9JB9SrboERXaakCtIZ4rEafbHOF2QpqCOES3Yrq%2Bx92HQstspBEqoU4Cipb8aimRawgLqlAWBhlMZfGp11zCUXv8dTLPumypS%2FlPtVDiejeQSul0xb80nG1yfGz2vmb5ArNcBf5euERxpmU6LeG%2FFWafdpNRDhV5KUW7cS%2BVJ0AvzBDTrBJ9B725OQtGff3eyT10J3nqDlF3wUu0%2B&X-Amz-Signature=0f98f0b0b442e4327befc177a791172d16ac9bd4f13077dc696f7078bd70f7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHERPY5Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk1iFouoLqLW%2Fw0eTDciWN99xvU2iDHCOcN9S1FzxZ8AiEAq41hVUSkceg%2Bync00H%2BAhczJA3I%2B7Pninzb1isKpF34qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYagaXA5RwJ7CrGVCrcA3Agg%2Bb9G2AEsg8SEoSz5qYyvGle%2Fdkh2Ihk5PNtUrn16TCKH75bSf3USQEz%2B9IDnWtV8mEuN44m7siWvVyU82ZNyngQrESD7wx%2Ft3eLAZrmDuhN4jt6IXw3%2FmFdiE%2BbJe4hyRXLTOoS11gL5pKl%2FxSxqPN7zg%2FR7Hx%2FgD1tNHPsU7%2FftbYyglnxuxEk1hrK2BuRInib6GOtX0Ok1e2d26xR62ScGJcOjKOQ%2F9me%2Fv2AM%2FhU4ctvI%2Bnm%2BE%2BV6Gs6yof%2FK2W%2Fv2fh%2F5GNl0Eul1WlKFV702AFXBWzqs%2F0YMK8kK84QtX4ZqjVYjmRuexCMkfS9xqUJvabRyQgUjQaf0lPKq3JGvk8TmTRfqmri1GaO5A3L0ph6LEt54Hvo%2B91bpO%2BQ8aZGuanMKGzPCftzbB%2BLhOQ%2FvCY9lK12Uc%2FHZ0DUJrsIXgL5hHbOfiRHFMueiPKzRfc5bV9xRi2VcGWLwDnXYnETZ5MjHgUwuZJjcUdebIEXqXsrzKwJiLyH8e4h1n2JjoKqfUuWulT%2BqF70VM4gWl%2FBJMlcL2TM2uZe5CDBiHjCD6%2FpHtE7O6XGyFV5kcaWvuD7EZTjoymd5yMNxfmgRBmKGXzKhMPWXT4rhSOqb9psXmhGAKLOd00MIvz2skGOqUBwzbY%2BXanXzc9JB9SrboERXaakCtIZ4rEafbHOF2QpqCOES3Yrq%2Bx92HQstspBEqoU4Cipb8aimRawgLqlAWBhlMZfGp11zCUXv8dTLPumypS%2FlPtVDiejeQSul0xb80nG1yfGz2vmb5ArNcBf5euERxpmU6LeG%2FFWafdpNRDhV5KUW7cS%2BVJ0AvzBDTrBJ9B725OQtGff3eyT10J3nqDlF3wUu0%2B&X-Amz-Signature=c3b652a70e4323913da6599b4385b127444f434799cb67d639a687d3f2eebb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
