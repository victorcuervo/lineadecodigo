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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGJKCUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTkoDYjDYG9RU%2FDPeEn1lP3ALfo31PgmFJuzgwOiuyCAiA5%2BdostwOFPzyk31VnICOfkRMrvKr8L77O3H73u55o%2FiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wC7fMxcFDbNhLeGKtwDlsPE9vzaUwHZ5p9JKr2OQKrBdC1YAcTMaz%2FsnM0mkGV1shJHG%2FaSevmveyhKhuK0YHxidTJZNQLgDvjFq3C0QDA2asQQTEhd9iIPsV0SqB7eH2Aay5o93C29Wm0Hm5ttWC5BA4XfpBqUAm9nkR%2FsJ8yqzbvxWMrjM2BTJta7FaxiUSgCdSkiOWpo4ee0omMOUmfTiRcv9CDaeLjDoxD1Rb9gLhB3ifzqfCbpvU%2FmLFrkduQPrddyLxmPb%2B7nsDBDigtZ0XyW6yh0F9trCEcytfbGULw2BpNkOSjMZeI9tkzRhOTG%2BTZseFJPgQPjrJmG%2Bgq%2BbyIQ9WA1aCugGHw5mTp9Zn1C92ZXDLHbOIVvsuvHZTWuEDbmLLMMcZuWBCP6Hr%2FcGbQOL2xXUhgmeQ%2Bc2CHpOwy04WEiVK9v5DrVBt8oBgNrjoCKyVAlpAd7l5rlZ2aJgW%2FRMHQDHss%2FfhfHBd97emjKrxZSAWXasQi%2F5KWZK0ATH68b%2FB4jtDgdTrIh%2F9pU9%2B2jMXoNRUG5046hIXm2nt6AnajCEietjEmeDllh63TSewJeA16cBA4SduwoCt6LX06hfUX1ZJg7us3iOe0ZdRgoqNAvtDCkDGGABEPLyIxuqNLLoQwAEiYwkoXYyQY6pgFm2SaXOJB7EQpuoPmm3mubVv45soXPkyDySPQZuSLW5goFk80Ntaa8qyGfxwRJt28AjgmxA%2F1BwCKH0yWp8U0S4v3sLsIBybX044JKGzb1lXYg2sn5gRqjD4WvyZ4AA5fnJxz6X4wLyimVQZ%2BdY5mrmxj7F7eQ1oU90JMI9XmCCnguvMn5iEKD%2FEj8oiMEbLTWA%2F63iMzQt71DsXf68Or9x3AMGWHI&X-Amz-Signature=0c56c043ef528dbaff7aab901f5e0892fec98e1fc78676c7f4a16e79a03c9997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGJKCUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTkoDYjDYG9RU%2FDPeEn1lP3ALfo31PgmFJuzgwOiuyCAiA5%2BdostwOFPzyk31VnICOfkRMrvKr8L77O3H73u55o%2FiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wC7fMxcFDbNhLeGKtwDlsPE9vzaUwHZ5p9JKr2OQKrBdC1YAcTMaz%2FsnM0mkGV1shJHG%2FaSevmveyhKhuK0YHxidTJZNQLgDvjFq3C0QDA2asQQTEhd9iIPsV0SqB7eH2Aay5o93C29Wm0Hm5ttWC5BA4XfpBqUAm9nkR%2FsJ8yqzbvxWMrjM2BTJta7FaxiUSgCdSkiOWpo4ee0omMOUmfTiRcv9CDaeLjDoxD1Rb9gLhB3ifzqfCbpvU%2FmLFrkduQPrddyLxmPb%2B7nsDBDigtZ0XyW6yh0F9trCEcytfbGULw2BpNkOSjMZeI9tkzRhOTG%2BTZseFJPgQPjrJmG%2Bgq%2BbyIQ9WA1aCugGHw5mTp9Zn1C92ZXDLHbOIVvsuvHZTWuEDbmLLMMcZuWBCP6Hr%2FcGbQOL2xXUhgmeQ%2Bc2CHpOwy04WEiVK9v5DrVBt8oBgNrjoCKyVAlpAd7l5rlZ2aJgW%2FRMHQDHss%2FfhfHBd97emjKrxZSAWXasQi%2F5KWZK0ATH68b%2FB4jtDgdTrIh%2F9pU9%2B2jMXoNRUG5046hIXm2nt6AnajCEietjEmeDllh63TSewJeA16cBA4SduwoCt6LX06hfUX1ZJg7us3iOe0ZdRgoqNAvtDCkDGGABEPLyIxuqNLLoQwAEiYwkoXYyQY6pgFm2SaXOJB7EQpuoPmm3mubVv45soXPkyDySPQZuSLW5goFk80Ntaa8qyGfxwRJt28AjgmxA%2F1BwCKH0yWp8U0S4v3sLsIBybX044JKGzb1lXYg2sn5gRqjD4WvyZ4AA5fnJxz6X4wLyimVQZ%2BdY5mrmxj7F7eQ1oU90JMI9XmCCnguvMn5iEKD%2FEj8oiMEbLTWA%2F63iMzQt71DsXf68Or9x3AMGWHI&X-Amz-Signature=18664f1deddcd2d1a4b57cf5f9c3dc7e55e652ac49b63654d84a045717ca36ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
