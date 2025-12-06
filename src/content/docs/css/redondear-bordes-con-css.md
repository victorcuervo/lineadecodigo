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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHC43JE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZk7prBxLxRHYs2zWBTMd%2BmuKgyaRpbN4wdmsAO%2BBFyAiEArn%2Bcs2xi%2BqrE0YIeTxJTdyYPB9o8o1Dj0xz9EuZfgj0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDuyPPi%2F6xHI0S%2F%2FircA%2FBMuDAW4RlNzNy5S3RHvQ%2Bl7h5ZZq1kDJ8dyMUhYUIUjONawU1Qy5fs9rKUDB7rxLIQbqEtLSvL0%2BJMJSIiR718xEBTsKrwWtdWqAehbXGKi5VCJnCN27GvIksk4fhqcMSiD4lnlhcXeEs13LlHmISwkKA7KWZ2N9b1z0PL1odEm7QHrXzDnfj4DlR2qFTVxR7z5FR5bBSRN%2Fry5xQNshCEBgaqcohtBRDimhW5OV18D9KnKb7w7oTS%2B%2BgUS9pvziz9kV3N6ZbwVlF5d2xzbOhnlS1z7ZzFzUFa%2BV4%2B6YpUWEtH3FxFkopSuecf9h0DCM0UV1CXn%2FS77oBSKDCOeWv2FCa0%2F8tKM7gCxezNUyOAOsjczdGH5hNYLniaezS7Suvvhl%2FLhKFIdgfvxdSq8T1%2B0e5%2FpgORhJ2pfrPv%2BnVQmTce%2BiDN4NqiIbJZQ4tdfJZrhkJZyhq3I2piX4KS2j0Kczx8woAh3%2FLyRs2vYOd3og0meRrSx0xub143DeNzWHdxVTgaFM%2FwByh37lSuUWSTfiMPjUdyx7CBhgooqPdUEr4TRfUEQjSE%2BJ9hREKMaiRzt1zAW9VJ0IEeqGyXwWx3HgRZ2AQlEb1Vc%2F65FMg6Rp2yVebsJNATK7tqMO3M0ckGOqUBsinQn81L%2BEW%2BjyI1AUdk5m%2BBDBRhOsVSOkabDZCua7VuzClk%2BgipsvDPga5dbmhRKYyRPGbefZkSVTpJuL%2BS5VZxJCJF455kVdYQpLCBrgaAlKXnlIE9qrLvFlWQaMjBu6myBvywCn2l3nmAxBfJCH2jvTbJU7Sy7wjy0Wq1anGb%2FCkqD3Hrsy%2FQD2J4%2FeSJ6SKTiCb%2BRUZhlb%2BpbylU5Naeu5sH&X-Amz-Signature=539e90e3fb91b3ab1061cff0302d4bb80d55ee966498d14727b701fef1cdd81c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHC43JE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZk7prBxLxRHYs2zWBTMd%2BmuKgyaRpbN4wdmsAO%2BBFyAiEArn%2Bcs2xi%2BqrE0YIeTxJTdyYPB9o8o1Dj0xz9EuZfgj0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPDuyPPi%2F6xHI0S%2F%2FircA%2FBMuDAW4RlNzNy5S3RHvQ%2Bl7h5ZZq1kDJ8dyMUhYUIUjONawU1Qy5fs9rKUDB7rxLIQbqEtLSvL0%2BJMJSIiR718xEBTsKrwWtdWqAehbXGKi5VCJnCN27GvIksk4fhqcMSiD4lnlhcXeEs13LlHmISwkKA7KWZ2N9b1z0PL1odEm7QHrXzDnfj4DlR2qFTVxR7z5FR5bBSRN%2Fry5xQNshCEBgaqcohtBRDimhW5OV18D9KnKb7w7oTS%2B%2BgUS9pvziz9kV3N6ZbwVlF5d2xzbOhnlS1z7ZzFzUFa%2BV4%2B6YpUWEtH3FxFkopSuecf9h0DCM0UV1CXn%2FS77oBSKDCOeWv2FCa0%2F8tKM7gCxezNUyOAOsjczdGH5hNYLniaezS7Suvvhl%2FLhKFIdgfvxdSq8T1%2B0e5%2FpgORhJ2pfrPv%2BnVQmTce%2BiDN4NqiIbJZQ4tdfJZrhkJZyhq3I2piX4KS2j0Kczx8woAh3%2FLyRs2vYOd3og0meRrSx0xub143DeNzWHdxVTgaFM%2FwByh37lSuUWSTfiMPjUdyx7CBhgooqPdUEr4TRfUEQjSE%2BJ9hREKMaiRzt1zAW9VJ0IEeqGyXwWx3HgRZ2AQlEb1Vc%2F65FMg6Rp2yVebsJNATK7tqMO3M0ckGOqUBsinQn81L%2BEW%2BjyI1AUdk5m%2BBDBRhOsVSOkabDZCua7VuzClk%2BgipsvDPga5dbmhRKYyRPGbefZkSVTpJuL%2BS5VZxJCJF455kVdYQpLCBrgaAlKXnlIE9qrLvFlWQaMjBu6myBvywCn2l3nmAxBfJCH2jvTbJU7Sy7wjy0Wq1anGb%2FCkqD3Hrsy%2FQD2J4%2FeSJ6SKTiCb%2BRUZhlb%2BpbylU5Naeu5sH&X-Amz-Signature=237586b718d9700edaac254e85effa92517cdf394ecf79c14ad91c2a0ce99bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
