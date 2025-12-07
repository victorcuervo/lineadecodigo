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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W67IV5S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdCPwTy1Aaeat6KeksJEA3PSpGEx%2FbVnI17wjxrDCPAIgRkBh%2Fu3lda8hDRl6OQWvB3d0GKy3ECLmCfMT%2F2135esqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwMdzyGjjveQ%2F1aKCrcAwt424owJrd0KetMgViH%2FIxMBqW2Npd4CMJmQG2%2BfiIz%2FdWQJ8%2BCwfwxMAqpAASW6urjybpxXm%2BxvgIbpV%2BFvdy2MM7sjma20TEi1GxkB6x5UlG56UmuS%2BMFVeegys4H9fkB30d4BEAD67MdD3VCJQH7TPuN7WggljJcLaV3LCHc0xCKsIiPQ0Mi8%2BReedFRA1woOH4T2immiCTAJ6wPNpx%2FZQBS93T7gOrsGXqC9OKqqU2a5UTlmppxv2eBctr4s5CD8EKg3J903MwU9ySFGZwdV81XYJNmzQA2%2B6W%2BcUSOBCPtXJt5ktRctiHkeFsJAyZ7usuuHDEZx6v3Du8RsGQzp4H7nnXADU5PMUvVcIr%2BP3SrHUmV8yXIpLqudJAM9YuVr48r%2BFUmCEqdkc16pgsKYmaV8q2iT9Xuojl8YZsjqTZbCBzSE%2BMWtTmQlGcuYkOcVYydKSeDJfxzpoPmNyBg8Yv3ZS5WDwyLnD6cwuruAdlXTAe8SejnMnOC5qCYXyGhlVxXguOJZmF8novNFXPJP3MK9Z9Qm3ygMT1Ge8V8KnEhSVXvQ1WedPuYVnMSzfMfurseENIa%2B2JqBLuHcjD1VD7teXYW7CvyunHpJ%2Bjdrg2Bqu820t12920YMNm71skGOqUBWaeJ%2F%2BdINylDXmZJKYm4zPKVX6Ov9Fa74aqdBxhoAsMiAdteIPRzRqjH6X41DfY44K98DaTfv7ZNIQ9CoRAqk%2F9Im1Ic4%2BvL2V9nCKvmrcbYkk1RgSz%2BNW7fdE0IznSk%2BsNnu1lX7Fh43Ptb6G7Dna1qc2pR8XD1vudoy4O%2BtKqijdspRXGC18HJyBlzNig7NOZXk4hKAEr5RcG41wXZq2UcZWXX&X-Amz-Signature=053d6716479096ca1b992c4871ab214f2c376c7a76cf58bfe86f1f5f3a5ed0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W67IV5S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzdCPwTy1Aaeat6KeksJEA3PSpGEx%2FbVnI17wjxrDCPAIgRkBh%2Fu3lda8hDRl6OQWvB3d0GKy3ECLmCfMT%2F2135esqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwMdzyGjjveQ%2F1aKCrcAwt424owJrd0KetMgViH%2FIxMBqW2Npd4CMJmQG2%2BfiIz%2FdWQJ8%2BCwfwxMAqpAASW6urjybpxXm%2BxvgIbpV%2BFvdy2MM7sjma20TEi1GxkB6x5UlG56UmuS%2BMFVeegys4H9fkB30d4BEAD67MdD3VCJQH7TPuN7WggljJcLaV3LCHc0xCKsIiPQ0Mi8%2BReedFRA1woOH4T2immiCTAJ6wPNpx%2FZQBS93T7gOrsGXqC9OKqqU2a5UTlmppxv2eBctr4s5CD8EKg3J903MwU9ySFGZwdV81XYJNmzQA2%2B6W%2BcUSOBCPtXJt5ktRctiHkeFsJAyZ7usuuHDEZx6v3Du8RsGQzp4H7nnXADU5PMUvVcIr%2BP3SrHUmV8yXIpLqudJAM9YuVr48r%2BFUmCEqdkc16pgsKYmaV8q2iT9Xuojl8YZsjqTZbCBzSE%2BMWtTmQlGcuYkOcVYydKSeDJfxzpoPmNyBg8Yv3ZS5WDwyLnD6cwuruAdlXTAe8SejnMnOC5qCYXyGhlVxXguOJZmF8novNFXPJP3MK9Z9Qm3ygMT1Ge8V8KnEhSVXvQ1WedPuYVnMSzfMfurseENIa%2B2JqBLuHcjD1VD7teXYW7CvyunHpJ%2Bjdrg2Bqu820t12920YMNm71skGOqUBWaeJ%2F%2BdINylDXmZJKYm4zPKVX6Ov9Fa74aqdBxhoAsMiAdteIPRzRqjH6X41DfY44K98DaTfv7ZNIQ9CoRAqk%2F9Im1Ic4%2BvL2V9nCKvmrcbYkk1RgSz%2BNW7fdE0IznSk%2BsNnu1lX7Fh43Ptb6G7Dna1qc2pR8XD1vudoy4O%2BtKqijdspRXGC18HJyBlzNig7NOZXk4hKAEr5RcG41wXZq2UcZWXX&X-Amz-Signature=121431197a13600b743dd984de1e1db0cbd10b24f05d6747849dfb4d6ca2ea94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
