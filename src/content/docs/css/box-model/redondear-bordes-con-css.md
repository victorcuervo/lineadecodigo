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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6WRXKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz290c4UVkphDVuWmkyEZSd%2BMeWc74T17BzAjgnpK1iAiARwG1l%2BuNqC1DMJ1rl1FCh33B8jME2EYP5wc245rMi%2Byr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMdAZW%2FHBBYylKpsmqKtwDP9mTYJCwkaPBJjt0a7W4Y%2BHsH5srM4nEGk1vMqD4uc4aOCj1taHIKstLvEe2O6gSto25iWR5jmCvIPq05ZYC5JD70EtpijAMVYTl5kYIHginoNZyH%2FBrtmJK172wmzrJB%2F96ZwEOZ4PosSl%2F17vi2wm0mh2%2F0PWcdIj1RFSRuwua5WweJL%2B6ruqb22mAcHjcZteUwR1OHWd4oLmatg9sCvvIMr6BiRdtjgGnsCKSPgelweWVez3qYFHTozDOhsbV0ebluthY73kjwp5Tufo84qXQQbvfbjfuuSMRLKbNCXnfs9EWfXfjsKroe6Kf36DgJcbzzvfECMLRKhpSdOHcg%2B7%2Bb%2FGUzJFVxdogR7elYvDmrxtzJbnWbVuuXnGYUNVEdEjK5Fk787slxTljGsBv6A0fQ2pCd1Z2OnFpod9p08GV1jdKP9Fxl9FLODtLsnIH9OVY510TE5XKpEQn14dwof0cFFWQ%2Fh8BtIxqzXiB2bq3jLVseC0ejKRVWu483Sj36WVhbaudW4u%2Bv7sf2g7ibPu%2F%2BQhvsIVR33e%2FVPnVlsO0Ba4Oy2Hs9fG1oM1wYjoIztUPcSlaitzmVf8tENNldlJNrPINCmZ5qZ9tAhLCFNF30xOfxVKM7UDUEVYwtpeIygY6pgERmpsxt6hlWkm1AydKDTO6rAHHXAP3YKt5zu%2FZl60987buHkTrO2YtKcbUSo%2FE%2FPA4%2B7iBIewHL7z%2Fru0xPV3Xf7W8Ex4D8rR259u9OPveZHeZrKFSNwS2t%2BECuLuGFtrx5LOuXeTw3xDLFVPN4YC%2Bf6pJ2PbRbkHmwqSvYlACxgErlYEBYx0qdgvaM0c0fgRihQ8DKefXHBSf8wgbE3ic5pStFRBl&X-Amz-Signature=34ac6bc23b3c352569488fbe07844c75bda8557df4d5fefc66a386bc228f7544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ6WRXKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz290c4UVkphDVuWmkyEZSd%2BMeWc74T17BzAjgnpK1iAiARwG1l%2BuNqC1DMJ1rl1FCh33B8jME2EYP5wc245rMi%2Byr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMdAZW%2FHBBYylKpsmqKtwDP9mTYJCwkaPBJjt0a7W4Y%2BHsH5srM4nEGk1vMqD4uc4aOCj1taHIKstLvEe2O6gSto25iWR5jmCvIPq05ZYC5JD70EtpijAMVYTl5kYIHginoNZyH%2FBrtmJK172wmzrJB%2F96ZwEOZ4PosSl%2F17vi2wm0mh2%2F0PWcdIj1RFSRuwua5WweJL%2B6ruqb22mAcHjcZteUwR1OHWd4oLmatg9sCvvIMr6BiRdtjgGnsCKSPgelweWVez3qYFHTozDOhsbV0ebluthY73kjwp5Tufo84qXQQbvfbjfuuSMRLKbNCXnfs9EWfXfjsKroe6Kf36DgJcbzzvfECMLRKhpSdOHcg%2B7%2Bb%2FGUzJFVxdogR7elYvDmrxtzJbnWbVuuXnGYUNVEdEjK5Fk787slxTljGsBv6A0fQ2pCd1Z2OnFpod9p08GV1jdKP9Fxl9FLODtLsnIH9OVY510TE5XKpEQn14dwof0cFFWQ%2Fh8BtIxqzXiB2bq3jLVseC0ejKRVWu483Sj36WVhbaudW4u%2Bv7sf2g7ibPu%2F%2BQhvsIVR33e%2FVPnVlsO0Ba4Oy2Hs9fG1oM1wYjoIztUPcSlaitzmVf8tENNldlJNrPINCmZ5qZ9tAhLCFNF30xOfxVKM7UDUEVYwtpeIygY6pgERmpsxt6hlWkm1AydKDTO6rAHHXAP3YKt5zu%2FZl60987buHkTrO2YtKcbUSo%2FE%2FPA4%2B7iBIewHL7z%2Fru0xPV3Xf7W8Ex4D8rR259u9OPveZHeZrKFSNwS2t%2BECuLuGFtrx5LOuXeTw3xDLFVPN4YC%2Bf6pJ2PbRbkHmwqSvYlACxgErlYEBYx0qdgvaM0c0fgRihQ8DKefXHBSf8wgbE3ic5pStFRBl&X-Amz-Signature=cf366489cf728fbbb18d1ac726ae81633f113cf3b6c3bb62069adda65a454688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
